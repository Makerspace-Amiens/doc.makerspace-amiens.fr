---
layout: documentation
lang: en
hide_hero: false
hero_image: /workshops/stepper-controller-board/hero.png
hero_darken: true
image: /workshops/stepper-controller-board/hero.png
component_toc: true
tag: stepper-controller-board

title: Assembly, tests and validation
subtitle: Solder, test and validate the assembled board
description: Solder the components, check continuity, then validate that the whole board works.

time: 3
difficulty: 2

author: Alban Petit
---

{% include step-tuto.html
greyBackground = true
title = "Step 4.1: Soldering the components"
content="Goal: Assemble the PCB.

**Tasks:**

- Solder the SMD components first (1206 resistors and capacitors)
- Solder the through-hole components (electrolytic capacitors, terminal blocks, pin headers)
- Solder the module connectors (ESP32, A4988, OLED, SD socket)
- Visually inspect every joint (no short circuit, no cold joint)

**Deliverables:** Photos of the assembled PCB (front + back)" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4.2: Continuity tests and first power-up"
content="Goal: Check that there is no short circuit before powering up.

**Tasks:**

- Check with a multimeter: GND continuity, 3.3V↔GND isolation, 5V↔GND isolation, VMOT↔GND isolation
- Check the polarity of the electrolytic capacitors
- Power VMOT (12V) from a current-limited supply (< 500mA)

**Deliverables:** Test report (electrical measurements + photos)" %}

## PlatformIO configuration

To program the **ESP32 S3 UNO**, use the following configuration in your `platformio.ini` file:

```ini
[env:esp32-s3-devkitc-1]
platform = espressif32
board = esp32-s3-devkitc-1
framework = arduino
monitor_speed = 115200
```

{% include message.html
title="ESP32-S3 configuration"
message="The **ESP32 S3 UNO** is based on the ESP32-S3 variant in Arduino UNO format. It is important to use this specific configuration in PlatformIO; otherwise uploading and correct operation are not guaranteed."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4.3: Functional tests and integration"
content="Goal: Validate that the whole board works.

**Tasks:**

- Create a PlatformIO project with the ESP32-S3-DevKitC-1 configuration (see the PlatformIO configuration section above)
- Upload the test firmware (blink, I2C scan, SD test)
- Check the OLED display (I2C address detected: 0x3C)
- Check that the SD card is detected
- Test the rotation of one motor with the A4988 driver
- Test both motors at the same time
- Test the 2 limit switches (GPIO reading, press detection)

**Deliverables:** Working PCB + demonstration video + complete technical documentation (README, schematics, BOM, source code)" %}
