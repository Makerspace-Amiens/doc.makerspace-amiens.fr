---
layout: documentation
lang: en
hide_hero: false
hero_image: "hero.jpg"
hero_darken: true
image: "logo.jpg"
component_toc: true
doc_header: true
type: tutorial
order: 20

title: Using the A4988 driver for stepper motors
subtitle: From breadboard prototyping to PCB integration
description: This tutorial explains how to use the Allegro A4988 driver to control bipolar stepper motors with an ESP32, first on a breadboard and then in a professional PCB integration.
author: Alban Petit

time: 2
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: Basic knowledge of electronics
    link: ""
  - label: Basic C++ programming (Arduino framework for ESP32)
    link: ""
  - label: Understanding of stepper motors
    link: ""

softwares:
  - label: Visual Studio Code with PlatformIO
    link: "/docs/tutorial/installation-vscode-platformio"
  - label: KiCad (for the PCB part)
    link: "/docs/tutorial/installation-kicad"

hardwares:
  - label: ESP32 S3 UNO
    link: ""
  - label: A4988 driver module
    link: ""
  - label: NEMA 17 bipolar stepper motor
    link: ""
  - label: 12-24V power supply
    link: ""

todo: 100
---

## Introduction

The **A4988** is a bipolar stepper motor driver made by **Allegro MicroSystems**. Simple, robust and inexpensive, it is one of the most widespread drivers among makers, in 3D printers and in small CNC machines.

### Main features

- **Motor supply voltage**: 8V to 35V
- **Current per phase**: up to 1A continuous, 2A peak (with cooling)
- **Microstepping**: full, 1/2, 1/4, 1/8, 1/16 step
- **STEP/DIR interface**: simple and compatible with every microcontroller
- **Thermal protection**: automatic shutdown at 150°C
- **Undervoltage protection**: disabled if VM < 8V
- **Short-circuit detection**: protection of the motor outputs

### Why choose the A4988?

The A4988 is ideal for projects that need:

- A **quick, simple** setup (no software configuration)
- A **minimal cost**
- **Plentiful documentation** and a large community
- Applications at **moderate speeds** with no requirement for silence

{% include message.html
title="A4988 vs TMC2209"
message="The A4988 is simpler and cheaper than the TMC2209, but it produces more noise and vibration, and its microstepping stops at 1/16. For quiet applications or currents > 1.5A continuous, prefer the TMC2209 or the DRV8825."
status="is-info"
icon="fas fa-info-circle" %}

---

## Understanding the A4988

### Internal architecture

The A4988 contains two full H-bridges to control the two coils of a bipolar motor. Current chopping is handled internally using sense resistors (Rsense) and an internal oscillator.

It uses an internal **microstepping truth table**: depending on the states of MS1, MS2 and MS3, the driver automatically generates the sinusoidal current sequences for microstepping.

### Module pinout

![pinout](pinout.jpeg)

### Microstepping configuration

Microstepping gives more resolution as the motor rotates. It is an advanced use of motor drivers, allowing finer and quieter movements.

Three pins (MS1, MS2, MS3) select the microstepping mode:

| MS1 | MS2 | MS3 | Mode      | Steps/rev (1.8° motor) |
|-----|-----|-----|-----------|--------------------------|
| GND | GND | GND | Full step | 200                      |
| VDD | GND | GND | 1/2 step  | 400                      |
| GND | VDD | GND | 1/4 step  | 800                      |
| VDD | VDD | GND | 1/8 step  | 1600                     |
| VDD | VDD | VDD | 1/16 step | 3200                     |

{% include message.html
title="Internal pull-downs"
message="The MS1, MS2 and MS3 pins have internal pull-down resistors. Left unconnected (floating), they are read as LOW (GND). The default mode, if nothing is connected, is therefore full step."
status="is-info"
icon="fas fa-info-circle" %}

---

## Part 1: Breadboard prototyping

{% include step-tuto.html
greyBackground = true
title = "What you need"
content="

- 1x A4988 module (StepStick / Pololu format)
- 1x ESP32 S3 UNO
- 1x NEMA 17 bipolar stepper motor (≤ 1A/phase recommended)
- 1x external 12V or 24V power supply (2A minimum)
- 1x breadboard
- Male-male and male-female Dupont wires
- 1x 100µF 35V electrolytic capacitor (essential)
- (Optional) Self-adhesive heat sink
" %}

{% include message.html
title="100µF capacitor MANDATORY"
message="Connecting a 100µF capacitor between VMOT and GND is ESSENTIAL. Without it, the current spikes when the motor brakes (back-EMF) can destroy the A4988 instantly. This capacitor protects the driver."
status="is-danger"
icon="fas fa-exclamation-triangle" %}

{% include message.html
title="Separate motor supply"
message="Never power the motor from the ESP32's USB! The A4988 and the motor need an external 12-24V supply."
status="is-danger"
icon="fas fa-exclamation-triangle" %}

### Wiring diagram

{% include step-tuto.html
greyBackground = true
content="
**Motor supply:**

- VMOT: +12V or +24V (external supply)
- GND (VMOT side): motor supply ground
- 100µF capacitor between VMOT and GND (as close as possible to the module)

**Logic supply:**

- VDD: +3.3V from the ESP32
- GND (VDD side): ground shared with the ESP32

**Control signals:**

- STEP: GPIO 12
- DIR: GPIO 13
- EN: GPIO 14 (or tied to GND to keep it always enabled)
- RESET and SLEEP: tied together (HIGH = active)

**Microstepping (1/16 example) (optional):**

- MS1: 3.3V (GPIO 1 or VDD)
- MS2: 3.3V (GPIO 2 or VDD)
- MS3: 3.3V (GPIO 3 or VDD)

**Motor outputs:**

- 1A, 1B: motor coil A
- 2A, 2B: motor coil B
"
image="wiring.jpg" %}

{% include message.html
title="RESET and SLEEP"
message="The RESET and SLEEP pins must be tied together (or to 3.3V) for the driver to be active. If SLEEP is set LOW, the driver goes into sleep mode. If RESET is set LOW, the driver is reset."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

{% include message.html
title="Check the pinout of your module"
message="ALWAYS check the pinout of your A4988 module! Although most modules follow the Pololu/StepStick standard, some clones have their pins in a different order. Refer to the silkscreen on the module."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

### Setting the current (Vref)

{% include step-tuto.html
greyBackground = true
title = "Adjusting the Vref potentiometer"
content="
The maximum current delivered to the motor is set with the potentiometer on the module.

**Formula:**
`Imax = Vref / (8 × Rsense)`
→ `Vref = Imax × 8 × Rsense`

**Values depending on the module:**

- Original Pololu module (Rsense = 0.2Ω): `Vref = Imax × 1.6`
- Common clones (Rsense = 0.1Ω): `Vref = Imax × 0.8`
- Budget clones (Rsense = 0.05Ω): `Vref = Imax × 0.4`

**To identify your Rsense:**

- Read the value on the two small SMD resistors next to the chip
- Common values: R200 = 0.2Ω, R100 = 0.1Ω, R050 = 0.05Ω

**Procedure:**

1. Power VDD (3.3V) **without powering VMOT**
2. Measure with a multimeter between the potentiometer screw and GND
3. Adjust with a ceramic or plastic screwdriver
4. Start at 50% of the rated current, test, then adjust

" %}

{% include message.html
title="Adjust before connecting the motor"
message="Set Vref BEFORE connecting the motor, with only VDD powered. Turning the potentiometer clockwise increases the current. Never exceed the rated current of the motor, or the driver and the motor will quickly overheat."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## ESP32 code

### Code 1: Simple rotation test

```cpp
#include <Arduino.h>

// ESP32 GPIO pins
#define STEP_PIN    12
#define DIR_PIN     13
#define ENABLE_PIN  14

// Motor parameters
// 200 steps/rev (1.8° motor) × 16 microsteps = 3200 steps/rev
const int stepsPerRevolution = 200;
const int microstepping = 16;  // MS1=MS2=MS3=3.3V
const int totalSteps = stepsPerRevolution * microstepping;

void rotate(int steps, int delayMicros);

void setup() {
  pinMode(STEP_PIN, OUTPUT);
  pinMode(DIR_PIN, OUTPUT);
  pinMode(ENABLE_PIN, OUTPUT);

  // Enable the driver (EN = LOW = active)
  digitalWrite(ENABLE_PIN, LOW);

  Serial.begin(115200);
  Serial.println("A4988 + ESP32 - Rotation test");
}

void loop() {
  Serial.println("Clockwise - 1 revolution");
  digitalWrite(DIR_PIN, HIGH);
  rotate(totalSteps, 500);
  delay(1000);

  Serial.println("Counterclockwise - 1 revolution");
  digitalWrite(DIR_PIN, LOW);
  rotate(totalSteps, 500);
  delay(1000);
}

void rotate(int steps, int delayMicros) {
  for (int i = 0; i < steps; i++) {
    digitalWrite(STEP_PIN, HIGH);
    delayMicroseconds(delayMicros);
    digitalWrite(STEP_PIN, LOW);
    delayMicroseconds(delayMicros);
  }
}
```

{% include step-tuto.html
greyBackground = true
title = "Test and check"
content="

1. Upload the code to your ESP32
2. Open the serial monitor (115200 baud)
3. The motor should make 1 revolution in each direction, alternately
4. If the motor does not turn → check that RESET and SLEEP are tied together
5. If the motor heats up without moving → current too high, lower Vref
6. If the motor vibrates without advancing → swap the wires of one coil

" %}

### Code 2: Using AccelStepper

For this demonstration, the AccelStepper library is required. Add the following line to your `platformio.ini`:

```ini
lib_deps = waspinator/AccelStepper@^1.64
```

Here is the code needed for this demonstration:

```cpp
#include <Arduino.h>
#include <AccelStepper.h>

#define STEP_PIN    12
#define DIR_PIN     13
#define ENABLE_PIN  14

// AccelStepper::DRIVER = STEP/DIR mode (compatible with A4988, DRV8825...)
AccelStepper motor(AccelStepper::DRIVER, STEP_PIN, DIR_PIN);

void setup() {
  pinMode(ENABLE_PIN, OUTPUT);
  digitalWrite(ENABLE_PIN, LOW);  // Enable the driver

  motor.setMaxSpeed(3000);      // Steps per second (maximum)
  motor.setAcceleration(1000);  // Steps per second²
  motor.setCurrentPosition(0);

  Serial.begin(115200);
  Serial.println("A4988 + ESP32 - AccelStepper");
}

void loop() {
  // Go to 3200 steps (1 revolution in 1/16 step)
  Serial.println("Target position: 3200");
  motor.moveTo(3200);
  while (motor.distanceToGo() != 0) {
    motor.run();
  }
  delay(500);

  // Go back to 0
  Serial.println("Back to position 0");
  motor.moveTo(0);
  while (motor.distanceToGo() != 0) {
    motor.run();
  }
  delay(500);
}
```

---

## Part 2: PCB integration

Once the prototype is validated on a breadboard, let us put the A4988 module on a PCB for a robust, compact solution.

{% include step-tuto.html
greyBackground = true
title = "Routing considerations"
content="
**Power tracks (VMOT, motor GND):**

- Minimum width: 1.5mm (for 2A)
- Ideally: 2-3mm

**Decoupling:**

- C1 (100µF): as close as possible to VMOT, between VMOT and GND
The rest of the decoupling is already on the module.

**Control signals:**

- STEP, DIR: short tracks, away from the power tracks
- MS1/MS2/MS3: can be hard-wired (straps) or brought to a connector with jumpers
" %}

---

## Testing and commissioning the PCB

### Checklist before powering

{% include step-tuto.html
greyBackground = true
title = "Pre-power checks"
content="
**Before connecting anything:**

- Inspect every solder joint
- Check there is no short circuit (multimeter in continuity mode):
  - VMOT → GND: must behave like a capacitor, not like a short circuit
  - VDD → GND: resistance > 1kΩ
- Check the polarity of electrolytic capacitor C1
- Check the motor connections (resistance of 2 to 6Ω per coil)
" %}

### First power-up

{% include step-tuto.html
greyBackground = true
title = "Powering up in 4 steps"
content="

#### Step 1: Logic-only test

- Power VDD only (3.3V from the ESP32), without VMOT
- Check VDD = 3.3V on the connector
- The driver must not heat up

#### Step 2: Vref adjustment

- Still with only VDD powered
- Measure between the potentiometer screw and GND
- Adjust to the target value (see the Vref formula)

#### Step 3: VMOT test without a motor

- Power VMOT (12V) from a current-limited supply (< 500mA)
- The driver must not heat up with no motor connected
- Send a few STEP pulses from the ESP32: no smoke and no smell

#### Step 4: Full test with the motor

- Connect the motor
- Run the motor for 30 seconds
- Touch the driver: warm (< 60°C) = normal
- Too hot to hold (> 80°C) = current too high or insufficient heat dissipation
" %}

{% include message.html
title="Thermal protection"
message="The A4988 shuts down automatically at 150°C. If this happens regularly, lower the current (Vref) by 20% or improve heat dissipation (heat sink, fan, larger copper area)."
status="is-warning"
icon="fas fa-thermometer-full" %}

---

## Troubleshooting

### The motor does not turn

{% include step-tuto.html
greyBackground = true
title = "Diagnostic checklist"
content="

- Are RESET and SLEEP tied together or to 3.3V?
- Is EN LOW (active)? (often inverted by mistake)
- Is VMOT properly powered (8-35V)?
- Is VDD at 3.3V?
- Is the 100µF capacitor fitted and correctly wired?
- Is Vref > 0V? (otherwise the current is zero and the motor stays stuck)
- Test with a blink program on STEP_PIN to check that the signal gets through
" %}

### The motor vibrates without turning

{% include step-tuto.html
greyBackground = true
title = "Causes and solutions"
content="

1. **Swapped coils**: Swap the two wires of one coil (1A↔1B or 2A↔2B)
2. **Current too low**: Raise Vref by 10% and test again
3. **Speed too high**: Increase the delay between steps (minimum 500µs in full step)
4. **Insufficient supply**: Check that the PSU can deliver at least 1.5A at 12V
5. **Coils wrongly identified**: Measure with a multimeter; the wires of one coil have a resistance of 2 to 6Ω between them
" %}

### The driver gets too hot

{% include step-tuto.html
greyBackground = true
title = "Lowering the temperature"
content="

- Lower Vref by 20% (current needlessly high?)
- Stick a heat sink on the chip
- Add airflow (40mm fan)
- Use a higher microstepping mode (lower switching losses)
- Put the driver to SLEEP when the motor is not moving
" %}

### Excessive noise and vibration

{% include step-tuto.html
greyBackground = true
title = "Reducing motor noise"
content="
The A4988 is naturally noisier than the drivers of the TMC range.
These techniques reduce the noise:

1. **Switch to 1/16 step**: a significant reduction in noise at low speed
2. **Lower the current**: less current = less magnetic vibration
3. **Gentle acceleration**: avoid abrupt starts
4. **Chopping frequency**: cannot be changed on the A4988 (set by ROSC)

If noise is critical for your application, consider a TMC2209 or TMC2208 driver, which offer a silent mode (StealthChop).
" %}

---

## Resources and documentation

### Official datasheets

- [A4988 Datasheet (Allegro)](https://www.allegromicro.com/~/media/Files/Datasheets/A4988-Datasheet.ashx)
- [Pololu A4988 guide](https://www.pololu.com/product/1182): a very thorough guide to the Pololu module

### Libraries

- [AccelStepper](https://www.airspayce.com/mikem/arduino/AccelStepper/): acceleration management, multi-axis support
- [ESP32 Arduino Core](https://github.com/espressif/arduino-esp32): Arduino framework for ESP32

---

## Conclusion

The **A4988** is a must-have driver for getting started with stepper motors. Paired with the **ESP32**, it is a solid base for connected projects, with the option of controlling the motor remotely over Wi-Fi or Bluetooth.

### Key points to remember

- **100µF capacitor** on VMOT: absolutely essential, it protects the driver
- **RESET and SLEEP** must be tied together or to 3.3V to enable the driver
- **Vref** is set with a multimeter: Vref = Imax × 8 × Rsense
- **Heat dissipation**: plan a heat sink for currents > 0.8A continuous
- **ESP32**: 3.3V logic, compatible with the A4988's VDD (3.0V - 5.5V)

### Next steps

Now that you have mastered the A4988 with the ESP32, explore:

- The **DRV8825** driver: higher current (2.2A), microstepping up to 1/32
- The **TMC2209** driver: silent mode (StealthChop), UART configuration, StallGuard
- The **AccelStepper** library to manage several motors at once

{% include message.html
title="Project complete!"
message="You now have everything you need to use the A4988 driver in your ESP32 projects, from the breadboard prototype to PCB integration. Feel free to experiment and share what you make!"
status="is-success"
icon="fas fa-check-circle" %}
