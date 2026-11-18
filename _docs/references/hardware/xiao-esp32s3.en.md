---
layout: documentation
lang: en
hide_hero: true
hero_darken: true
component_toc: true
doc_header: true

title: Seeed Studio XIAO ESP32S3
subtitle: The development board at the heart of the workshop
description: "Reference sheet for the XIAO ESP32S3 board used in the microcontrollers workshop: specifications, pinout and points to watch."
manufacturer:
  - name: Seeed Studio
    link: "https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"
author: Alban Petit

todo: 60
---

## Overview

The Seeed Studio **XIAO ESP32S3** is a tiny development board (21 × 17.8 mm) built around the **ESP32-S3** SoC. It is the board used throughout the workshop, from the first Blink to the multiplayer Snake project.

It brings together the microcontroller, 8 MB of Flash, 8 MB of PSRAM, a Wi-Fi/Bluetooth antenna, a USB-C connector and 11 input/output pins, ready to be programmed with Arduino-ESP32. To understand what it contains, see the concept [Architecture of a microcontroller](/workshops/microcontroleur/concepts/architecture-microcontroleur/).

## Specifications

| Item | Value |
|---|---|
| SoC | ESP32-S3 |
| CPU | Dual-core Xtensa LX7, 32 bits, up to 240 MHz |
| RAM | 512 KB internal SRAM + 8 MB PSRAM |
| Flash | 8 MB external (16 MB on the Plus variant) |
| GPIO | 11 exposed pins (D0 to D10) |
| ADC | 9 analog pins, all on **ADC1** |
| Connectivity | 2.4 GHz Wi-Fi 802.11 b/g/n + Bluetooth 5 LE |
| Logic voltage | **3.3 V** |
| USB | USB-C wired to the native USB of the ESP32-S3 (no USB-to-serial chip) |

## Pinout

On the board, the pins are silkscreened `D0` to `D10`. In code, Arduino-ESP32 accepts these names (`D3`, `A0`…) or the GPIO number directly.

| Pin | GPIO | Functions | Role in the workshop (console board) |
|---|---|---|---|
| D0 | GPIO1 | ADC1, touch | Joystick: X axis (player 1 paddle) |
| D1 | GPIO2 | ADC1, touch | Joystick: Y axis (not used by Pong) |
| D2 | GPIO3 | ADC1, touch, *strapping* | Joystick button (START) |
| D3 | GPIO4 | ADC1, touch | I2C connector: SDA |
| D4 | GPIO5 | ADC1, default I2C SDA | I2C connector: SCL |
| D5 | GPIO6 | ADC1, default I2C SCL | Player 2 button: LEFT (SW1) |
| D6 | GPIO43 | UART0 TX | Player 2 button: RIGHT (SW2, through 1 kΩ) |
| D7 | GPIO44 | UART0 RX | Display: RESET |
| D8 | GPIO7 | ADC1, default SPI SCK | Display: DC |
| D9 | GPIO8 | ADC1, default SPI MISO | Display: SCK |
| D10 | GPIO9 | ADC1, default SPI MOSI | Display: MOSI |

All 11 pins are used by the console board. To save pins, the display's *Chip Select* (CS) is permanently tied to GND (the display is the only device on the SPI bus) and its backlight (LED/BLK) goes straight to 3V3. The I2C bus (D3/D4) is brought out to a 4-pin expansion connector (with its 4.7 kΩ pull-up resistors), which Pong does not use: it stays available for adding a module later.

{% include message.html title="SPI is not on the default pins" message="On the PCB, the SPI clock is on **D9** and the command/data select (DC) on **D8**, whereas the XIAO's default SCK is D8. This is not a problem on the ESP32-S3: the GPIO matrix routes SPI to any pin. You simply need to pass the right pins to `SPI.begin()` (see the tutorial [SPI display and game loop](/docs/tutorials/electronics/ecran-spi-game-loop/))." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="No ADC2 trap on the XIAO" message="All the exposed analog pins (GPIO1 to GPIO9) belong to **ADC1**, which stays usable with Wi-Fi enabled. The ADC2 trap (see the concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/)) only concerns GPIO11 to 20, which are not brought out on this board." status="is-info" icon="fas fa-info-circle" %}

| Item | Note |
|---|---|
| **GPIO3 (D2)** | *Strapping* pin (JTAG source), read at reset but with no effect as long as the chip's eFuses are not configured: usable as an ordinary pin |
| **GPIO43 / GPIO44 (D6 / D7)** | Hardware UART0. Since the serial monitor goes through native USB, they are free. At start-up, the chip **transmits** its boot messages on GPIO43 (TX): that is why button SW2 is connected to it through a 1 kΩ resistor, which limits the current if the button is pressed during start-up |
| **GPIO21** | Orange user LED (`LED_BUILTIN`), not brought out to a pin. **Inverted logic**: `LOW` turns it on |
| **BOOT** (GPIO0) and **RESET** buttons | Enter upload mode and restart |

## USB and serial monitor

The USB-C connector is wired directly to the native USB of the ESP32-S3: there is no USB-to-serial chip (CP2102, CH340), so there is **no driver to install** on Windows 10/11, macOS or Linux (on Linux, the user must belong to the `dialout` group).

The serial monitor (`Serial`) goes through this native USB: this is the `ARDUINO_USB_CDC_ON_BOOT=1` option of the `seeed_xiao_esp32s3` PlatformIO configuration. In practice, the serial port disappears and reappears at every reset, and messages sent in the very first milliseconds of `setup()` can be lost before the computer has reopened the port.

{% include message.html title="The board no longer shows up?" message="A program that crashes in a loop can prevent native USB from starting: the port disappears. Holding **BOOT** down while plugging in the USB cable forces upload mode; you can then reflash, then press **RESET** to restart the program. The whole procedure: [Recovering an ESP32-S3 board that no longer shows up](/docs/how-to-guides/esp32-s3-carte-introuvable/)." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Power

- **USB-C**: the normal way to power and program the board (5 V supplied by the port).
- **5V pin**: connected to the USB 5 V. To power the board through this pin from an external source, add a diode (anode on the source side).
- **3V3 pin**: regulated 3.3 V output (up to 700 mA) to power peripherals (display, joystick).
- **GND**: common ground, to be connected to every peripheral.
- **BAT+ / BAT- pads** (underside): 3.7 V LiPo battery, recharged over USB.

{% include message.html title="3.3 V logic only" message="The ESP32-S3 pins do not tolerate 5 V on their inputs. To talk to a 5 V component, use a voltage divider or a level shifter (see the concept [GPIO & the digital world](/workshops/microcontroleur/concepts/gpio-monde-numerique/))." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Use in the workshop

- Programming with **PlatformIO** (see the [PlatformIO sheet](/docs/references/software/platformIO/)), board `seeed_xiao_esp32s3`, and first flash in the tutorial [Checking the toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/).
- The board ships **without headers**: solder the two pin headers before fitting it on the breadboard, without bridging two neighbouring pins.
- Pinout fixed from Lab 2 (kit modules on a breadboard), then reused as is by the console board soldered in Lab 4: the code moves from one to the other without modification.

## Sources

- [Getting Started with Seeed Studio XIAO ESP32S3 - Seeed Studio Wiki](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)
- [ESP32-S3 datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
