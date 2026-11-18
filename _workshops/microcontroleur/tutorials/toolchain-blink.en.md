---
layout: documentation
lang: en
hide_hero: false
hero_image: uc.webp
hero_height: is-small
hero_darken: true
image: uc.webp
component_toc: true
doc_header: true

title: Checking the toolchain
subtitle: Install the ESP32-S3 toolchain and validate your first flash
description: Set up PlatformIO for the XIAO ESP32S3 and blink the on-board LED, before adding an external LED.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Installing VSCode
    link: /docs/tutorials/software/vscode-platformio/installation-vscode/
  - label: Installing PlatformIO
    link: /docs/tutorials/software/vscode-platformio/installation-platformio/

softwares:
  - label: PlatformIO IDE (VSCode extension)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Seeed Studio XIAO ESP32S3 board (headers soldered)
    link: /docs/references/hardware/xiao-esp32s3/
  - label: USB-C data cable (not charge-only)
    link: ""

todo: 90
---

The aim of this tutorial is to check that **everyone** has a working development toolchain before tackling the rest of the microcontroller adventure. In Lab 2, this same setup will host the modules of the kit; in Lab 3, you will design the board that brings them together.

{% include message.html title="To do before the session" message="The installation of PlatformIO (see the prerequisite above) and of ESP32 support must be finished." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground=true
title="Step 1: Create the PlatformIO project"
content="In VSCode, open the **PlatformIO** tab (ant icon in the side bar) then **New Project**.

Configure:

- **Name**: `pong-esp32`
- **Board**: `Seeed Studio XIAO ESP32S3`
- **Framework**: `Arduino`

PlatformIO generates a folder with a `platformio.ini` file and a `src/` folder containing `main.cpp`. Add the `monitor_speed` line by hand."
%}

```ini
; platformio.ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
monitor_speed = 115200
```

{% include message.html title="Keep the #include line" message="The generated `main.cpp` starts with `#include <Arduino.h>`. Unlike an Arduino IDE `.ino`, a `.cpp` file does not add it on its own: without this line, `pinMode`, `digitalWrite` or `Serial` are unknown and compilation fails (`'pinMode' was not declared in this scope`). All the programs of the course therefore start with it." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground=true
title="Step 2: Plug in the board"
content="The XIAO's USB-C connector is wired directly to the ESP32-S3's **native USB**: there is no USB-serial chip, so **no driver to install**. Plug the board in with a USB-C cable that carries data (many cables only charge).

- **Windows**: a new `COM` port appears in **Device Manager** (\"USB Serial Device\").
- **macOS**: the port appears as `/dev/cu.usbmodem…`.
- **Linux**: the port appears as `/dev/ttyACM0`; your user must belong to the `dialout` group to access it without `sudo`.

PlatformIO detects the port on its own at upload time."
%}

{% include step-tuto.html
greyBackground=true
title="Step 3: Flash the basic blink"
content="Replace the content of `src/main.cpp` with the code below, then click **Upload** (arrow →) in the blue PlatformIO bar at the bottom of VSCode.

```cpp
#include <Arduino.h>

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, LOW);   // LOW turns the XIAO's LED on
  delay(500);
  digitalWrite(LED_BUILTIN, HIGH);  // HIGH turns it off
  delay(500);
}
```" %}

{% include message.html title="It won't flash?" message="If the upload fails (`Failed to connect` or port not found), force upload mode: unplug the board, **hold the BOOT button** (marked `B`), plug the USB cable back in, then release BOOT and start the upload again. Once the upload is finished, press **RESET** (marked `R`) to start the program. If that is not enough: [Recovering an ESP32-S3 board that no longer shows up](/docs/how-to-guides/esp32-s3-carte-introuvable/)." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="An LED with inverted logic" message="The XIAO's user LED (orange, next to the USB-C connector, on GPIO21) is wired to 3.3 V: it lights up when the pin is `LOW` and goes off at `HIGH`. The blinking is the same, only the direction is inverted. The neighbouring red LED shows battery charging and cannot be controlled." status="is-info" icon="fas fa-lightbulb" %}

{% include step-tuto.html
greyBackground=true
title="Step 4: Individual validation"
content="The built-in orange LED (`LED_BUILTIN`) must blink at 1 Hz. **Show your blinking board** before moving on: it is the only output expected from this Lab 1."
%}

## Bonus: external LED on a breadboard

If you have time left, wire an external LED with its series resistor between pin **D3** (GPIO4) and GND. It is your first **physical** output: a test setup, to be removed afterwards: in Lab 2, D3 hosts the kit's buzzer, and on the console board, the I2C connector.

![BreadBoard](esp32-s3-blink.png)

The photo shows another ESP32-S3 board: the principle is the same, only the pin changes (D3 on the XIAO). This external LED is wired the classic way (anode on the pin side): `HIGH` turns it on.

Here is the code needed for this demonstration.

```cpp
#include <Arduino.h>

constexpr int LED_PIN = D3;   // GPIO4

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}
```

The series resistor calculation is detailed in the concept [GPIO & the digital world](/workshops/microcontroleur/concepts/gpio-monde-numerique/).

{% include message.html title="See you in the next tutorial" message="Lab 2 reuses this same board and this same PlatformIO project: remove the external LED, then you will connect the modules of the kit one by one, following the wiring of the future board: see [The modules of the kit](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/)." status="is-success" icon="fas fa-check-circle" %}
