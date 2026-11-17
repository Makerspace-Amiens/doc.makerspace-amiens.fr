---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.webp
hero_height: is-small
hero_darken: true
image: hero.webp
component_toc: true
doc_header: true

title: The modules of the kit
subtitle: Test the button, joystick, buzzer and display on a breadboard, one by one
description: Connect the four modules of the kit on a breadboard, and check each one with a small program and the serial monitor, before designing the board.
author: Alban Petit

time: 3
difficulty: 2

prerequisites:
  - label: "Checking the toolchain"
    link: /workshops/microcontroleur/tutorials/toolchain-blink/
  - label: "Concept: GPIO & the digital world"
    link: /workshops/microcontroleur/concepts/gpio-monde-numerique/
  - label: "Concept: ADC & PWM"
    link: /workshops/microcontroleur/concepts/adc-pwm/
  - label: "Concept: Communication buses"
    link: /workshops/microcontroleur/concepts/bus-communication/

softwares:
  - label: PlatformIO IDE (VSCode extension)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Seeed Studio XIAO ESP32S3 board
    link: /docs/references/hardware/xiao-esp32s3/
  - label: Analog joystick module
    link: /docs/references/hardware/module-joystick/
  - label: Push button module
    link: /docs/references/hardware/module-bouton/
  - label: Buzzer module
    link: /docs/references/hardware/module-buzzer/
  - label: ST7789 SPI TFT display module
    link: /docs/references/hardware/ecran-tft-spi-st7789/
  - label: A breadboard
    link: ""

todo: 80
---

## Test before designing

The kit contains the four modules of the future console: a **button**, a **joystick**, a **buzzer** and a **display**. Before drawing the board that will bring them together (Lab 3), each one is checked **separately**, on a breadboard: how it is connected, what it returns, how to program it. What you learn here will shape your schematic.

The approach is the same for each module, and for any component you will discover later:

1. **Identify** its pins (silkscreen, module datasheet) and its supply voltage;
2. **Wire** one thing at a time;
3. **Read or control** it with the simplest possible program;
4. **Validate** with the serial monitor (or by ear, by eye) before moving on to the next one.

{% include message.html title="Always 3.3 V" message="Power **all** the modules from the XIAO's **3V3** pin, never from 5V: the ESP32-S3's inputs cannot take more than 3.3 V. A module designed for 5 V almost always works at 3.3 V; the reverse can destroy the board." status="is-danger" icon="fas fa-exclamation-triangle" %}

### The kit wiring

We use the console board's pins right away: a program written today will work without modification on the board soldered in Lab 4.

| Module | Module pin | XIAO pin |
|---|---|---|
| Button | Signal (`S`, `OUT`) | D5 |
| Joystick | `VRx` | D0 (ADC1) |
| Joystick | `VRy` | D1 (ADC1) |
| Joystick | `SW` (pressing the stick) | D2 |
| Buzzer | Signal (`S`, `I/O`) | D3 |
| Display | `SCK` (often labelled `SCL`) | D9 |
| Display | `SDI` / `MOSI` (often `SDA`) | D10 |
| Display | `DC` | D8 |
| Display | `RESET` | D7 |
| Display | `CS` | GND |
| Display | `LED` (backlight) | 3V3 |
| All | `VCC` / `GND` | 3V3 / GND |

The buzzer is not on the console board: it sits on D3 for the duration of this lab (on the board, D3 is used for the I2C connector).

Gather the pins in an `include/config.h` file in your PlatformIO project, which all the following programs will include:

```cpp
// include/config.h: console pinout
#pragma once

#include <Arduino.h>

constexpr int PIN_BUTTON          = D5;
constexpr int PIN_JOYSTICK_X      = D0;
constexpr int PIN_JOYSTICK_Y      = D1;
constexpr int PIN_JOYSTICK_SELECT = D2;
constexpr int PIN_BUZZER          = D3;   // breadboard only

constexpr int PIN_TFT_RESET = D7;
constexpr int PIN_TFT_DC    = D8;
constexpr int PIN_TFT_SCK   = D9;
constexpr int PIN_TFT_MOSI  = D10;
constexpr int PIN_TFT_CS    = -1;   // CS connected to GND: no pin
```

`constexpr int` declares a typed constant: the compiler replaces it with its value, like a `#define`, but checks its type.

{% include step-tuto.html
greyBackground=true
title="Step 1: The button, reading its level"
content="A button module usually has three pins: `VCC`, `GND` and a signal. Depending on the module, the signal is **LOW** when pressed (button connected to GND, with a pull-up resistor to VCC) or **HIGH** (the reverse). Rather than guessing, we **measure**: the program displays the level read, with the button released and then pressed.

`INPUT_PULLUP` enables the ESP32-S3's internal pull-up resistor: it does not bother a module that already has its own, and it avoids a floating input if the module has none (see the concept [GPIO & the digital world](/workshops/microcontroleur/concepts/gpio-monde-numerique/))."
%}

![Button module wiring: VCC to 3V3, GND to GND, signal S to D5](cablage-bouton.svg)

```cpp
#include "config.h"

void setup() {
    Serial.begin(115200);
    pinMode(PIN_BUTTON, INPUT_PULLUP);
}

void loop() {
    Serial.println(digitalRead(PIN_BUTTON) == HIGH ? "HIGH" : "LOW");
    delay(200);  // test program: slow down the display
}
```

{% include message.html title="Checkpoint" message="The serial monitor (115200 baud) shows one level with the button released, and the other with the button pressed. **Write down which one means pressed**: it is your module's logic, and it matters for what follows." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 2: The button, detecting a press only once"
content="For a game, we do not want to know whether the button **is** pressed, but whether it **has just been** pressed: this is **edge** detection. It has two traps:

- as long as the finger stays down, `loop()` sees the button pressed thousands of times;
- the mechanical contact **bounces** for a few milliseconds: a single press looks like several.

The function below only validates a change if the signal has stayed stable for 30 ms (**debouncing**), and only returns `true` at the moment of the press. It never blocks: no `delay()`, only `millis()`. Adapt `PRESSED_LEVEL` to what you wrote down in step 1.

This is the debounce from Lecture 2 (`DEBOUNCE`, `lastState`), with the names used throughout the lab code: `DEBOUNCE_MS`, `lastRead`."
%}

```cpp
constexpr int PRESSED_LEVEL = LOW;           // level read when pressed (step 1)
constexpr unsigned long DEBOUNCE_MS = 30;

struct Button {
    int pin;
    int stableLevel;              // last confirmed level
    int lastRead;                 // last raw reading
    unsigned long lastChangeMs;   // time of the signal's last movement
};

Button button = {PIN_BUTTON, !PRESSED_LEVEL, !PRESSED_LEVEL, 0};

// Returns true only once per press, when it is confirmed
bool justPressed(Button& b) {
    int level = digitalRead(b.pin);
    if (level != b.lastRead) {         // the signal is moving: bounce or real change
        b.lastRead = level;
        b.lastChangeMs = millis();
    }
    if (millis() - b.lastChangeMs > DEBOUNCE_MS && level != b.stableLevel) {
        b.stableLevel = level;         // stable for 30 ms: change confirmed
        return level == PRESSED_LEVEL; // true on press, false on release
    }
    return false;
}

void loop() {
    static int count = 0;
    if (justPressed(button)) {
        count++;
        Serial.printf("Press no. %d\n", count);
    }
}
```

{% include message.html title="Checkpoint" message="Each press displays **a single** line, even if you hold the button down, and the counter never jumps by two for a single press." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 3: The joystick, reading the raw values"
content="The joystick module has 5 pins: `GND`, `VCC` (often labelled `+5V`: connect it to **3V3** anyway), `VRx`, `VRy` and `SW`. Its two axes are potentiometers: the ESP32-S3's 12-bit ADC reads them between 0 and 4095. `SW` is a button (pressing the stick) connected to GND: `INPUT_PULLUP`, and LOW when pressed."
%}

![Joystick module wiring: GND to GND, +5V to 3V3, VRx to D0, VRy to D1, SW to D2](cablage-joystick.svg)

```cpp
void setup() {
    Serial.begin(115200);
    pinMode(PIN_JOYSTICK_SELECT, INPUT_PULLUP);
    analogReadResolution(12);  // readings between 0 and 4095
}

void loop() {
    int x = analogRead(PIN_JOYSTICK_X);
    int y = analogRead(PIN_JOYSTICK_Y);
    bool pressed = digitalRead(PIN_JOYSTICK_SELECT) == LOW;

    Serial.printf("x=%d y=%d select=%d\n", x, y, pressed);
    delay(100);
}
```

{% include message.html title="Checkpoint" message="**Write down the value of x at rest**: close to 2048, but almost never exactly (often between 1800 and 2100). x and y reach 0 and 4095 at the end stops, and select goes to 1 when you press the stick down." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 4: The joystick, calibrating and normalising"
content="A game wants to know **in which direction and how far** the player is pushing: a value between **-1** and **+1**, which is **0** at rest. Three precautions:

- **calibrate**: at start-up, measure the real centre (average of 16 readings, stick released) instead of assuming 2048;
- **dead zone**: an offset of less than 300 around the centre is noise, return 0;
- **asymmetric travel**: divide by the travel available **on the side where the stick is**, so that each end stop really gives -1 or +1.

The details are in the concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/)."
%}

```cpp
constexpr int JOYSTICK_DEADZONE = 300;
int joystickCenterX = 2048;

void calibrateJoystick() {
    long sum = 0;
    for (int i = 0; i < 16; i++) {
        sum += analogRead(PIN_JOYSTICK_X);
        delay(2);
    }
    joystickCenterX = sum / 16;
}

// Converts a raw reading (0..4095) into a value between -1.0 and +1.0
float normalizeJoystick(int raw, int center) {
    int offset = raw - center;
    if (abs(offset) < JOYSTICK_DEADZONE) {
        return 0.0f;
    }
    int range = (offset > 0) ? (4095 - center) : center;
    return constrain((float)offset / range, -1.0f, 1.0f);
}
```

Call `calibrateJoystick()` at the end of `setup()`, then display `normalizeJoystick(analogRead(PIN_JOYSTICK_X), joystickCenterX)` in `loop()`.

{% include message.html title="Checkpoint" message="At rest, the value displayed is exactly 0.00. It reaches -1.00 on one side and +1.00 on the other, going through all the values in between. If the direction is the opposite of what you expect, write it down: changing the sign will be enough." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 5: The buzzer, playing a note"
content="There are two kinds of buzzers, and the kit may contain either one:

- an **active** buzzer contains its own oscillator: it sounds as soon as its pin is set HIGH, always on the same note;
- a **passive** buzzer is a simple speaker: you have to send it a square signal at the frequency of the desired note. This is **PWM** (see the concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/)).

`tone(pin, frequency, duration)` generates this signal without blocking the program. Test the program below: a passive buzzer plays a short scale; an active buzzer only clicks, and the second test makes it sound."
%}

![Buzzer module wiring: VCC to 3V3, GND to GND, signal S to D3](cablage-buzzer.svg)

```cpp
void setup() {
    pinMode(PIN_BUZZER, OUTPUT);

    // Test 1: passive buzzer, a C-D-E-F-G scale
    const int notes[] = {262, 294, 330, 349, 392};  // frequencies in Hz
    for (int note : notes) {
        tone(PIN_BUZZER, note, 200);
        delay(250);  // start-up test: wait for the note to end
    }
    delay(1000);

    // Test 2: active buzzer, a half-second beep
    digitalWrite(PIN_BUZZER, HIGH);
    delay(500);
    digitalWrite(PIN_BUZZER, LOW);
}

void loop() {}
```

{% include message.html title="Checkpoint" message="You know whether your buzzer is **active** or **passive**, and you have made it sound. The `delay()` calls are acceptable here, in a test program that does nothing else; in a game, a note is started with `tone()` and not waited for." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 6: The display, first output"
content="The display is driven over **SPI** with the **Adafruit ST7735 and ST7789** library, to be declared in `platformio.ini`. We first start the SPI bus on the setup's pins, then initialise the display in **SPI mode 3**: its CS is connected to GND, and that is the mode it needs in this case (see the concept [Communication buses](/workshops/microcontroleur/concepts/bus-communication/)).

The coordinate system has its origin `(0, 0)` at the **top left**: x to the right, y downwards. The display is used in portrait, 240 pixels wide and 320 high."
%}

![Display wiring: VCC and LED to 3V3, GND and CS to GND, RESET to D7, DC to D8, SDI to D10, SCK to D9](cablage-ecran.svg)

![The display's coordinate system in portrait: (0, 0) at the top left, x to the right, y downwards, (239, 319) at the bottom right](/workshops/microcontroleur/tutorials/collisions-fsm-pong/ecran-repere.svg)

```ini
lib_deps =
    adafruit/Adafruit ST7735 and ST7789 Library@^1.11.0
```

```cpp
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7789.h>
#include "config.h"

Adafruit_ST7789 tft(&SPI, PIN_TFT_CS, PIN_TFT_DC, PIN_TFT_RESET);

void setup() {
    SPI.begin(PIN_TFT_SCK, -1, PIN_TFT_MOSI, PIN_TFT_CS);  // no MISO
    tft.init(240, 320, SPI_MODE3);
    tft.setRotation(2);                                     // portrait
    tft.fillScreen(ST77XX_BLACK);

    tft.setTextSize(4);
    tft.setTextColor(ST77XX_WHITE);
    tft.setCursor(72, 40);
    tft.print("PONG");

    tft.drawRect(20, 120, 200, 60, ST77XX_WHITE);   // rectangle
    tft.fillCircle(120, 250, 20, ST77XX_YELLOW);    // filled circle
}

void loop() {}
```

{% include message.html title="Checkpoint" message="The text \"PONG\", a rectangle and a yellow disc are displayed. Black or white screen? Follow the guide [Troubleshooting an SPI TFT display that shows nothing](/docs/how-to-guides/ecran-tft-noir/)." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 7: The four modules together"
content="A last test, which will serve as the **board test program** in Lab 4: a white dot moves on the screen with the joystick, and the buzzer beeps at each press of the button. It reuses everything above: `justPressed()`, the joystick calibration and normalisation, the display initialisation.

The loop contains no `delay()`: one frame every 16 ms, paced by `millis()`. This is the **game loop** from Lecture 3, which the Pong will reuse."
%}

```cpp
constexpr uint32_t FRAME_TIME_MS = 16;

float dotX = 120, dotY = 160;   // computed position
int drawnX = 120, drawnY = 160; // displayed position

void loop() {
    static uint32_t lastFrameMs = 0;
    uint32_t nowMs = millis();
    if (nowMs - lastFrameMs < FRAME_TIME_MS) {
        return;
    }
    lastFrameMs = nowMs;

    // 1. Read
    float x = normalizeJoystick(analogRead(PIN_JOYSTICK_X), joystickCenterX);
    bool beep = justPressed(button);

    // 2. Compute
    dotX = constrain(dotX + x * 4.0f, 0.0f, 235.0f);
    if (beep) {
        tone(PIN_BUZZER, 880, 50);
    }

    // 3. Display: erase the old dot, draw the new one
    if ((int)dotX != drawnX) {
        tft.fillRect(drawnX, drawnY, 5, 5, ST77XX_BLACK);
        drawnX = (int)dotX;
        tft.fillRect(drawnX, drawnY, 5, 5, ST77XX_WHITE);
    }
}
```

The `setup()` gathers the initialisations of the previous steps: serial monitor, button, joystick (with its calibration), buzzer, display.

{% include message.html title="Checkpoint" message="The dot follows the joystick without leaving a trail, and each press of the button makes a short beep, without slowing the dot down. Keep this program: it will test the soldered board." status="is-success" icon="fas fa-check-circle" %}

## Expected result

The four modules are tested, and for each one you know:

- how it is connected, and at which voltage;
- what it returns (button level, joystick range and centre) or what it expects (buzzer type, display SPI mode);
- which minimal program makes it work.

Write these results down in your logbook: they are the input data for the board's schematic.

{% include message.html title="Next step" message="Lab 3 brings these modules together on a board: see [Designing the console board](/workshops/microcontroleur/tutorials/conception-carte-kicad/)." status="is-success" icon="fas fa-check-circle" %}
