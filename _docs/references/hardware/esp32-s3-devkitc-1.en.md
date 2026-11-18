---
layout: documentation
lang: en
hide_hero: true
hero_image: image.webp
hero_darken: true
image: image.webp
component_toc: true
doc_header: true

title: ESP32-S3-DevKitC-1
subtitle: The development board at the heart of the workshop
description: "Reference sheet for the ESP32-S3-DevKitC-1 board used in the microcontrollers workshop: specifications, pinout and points to watch."
manufacturer:
  - name: Espressif Systems
    link: "https://www.espressif.com/en/products/devkits/esp32-s3-devkitc-1"
author: Alban Petit

todo: 60
---

## Overview

The **ESP32-S3-DevKitC-1** is Espressif's official development board built around the **ESP32-S3** SoC. It is the board used throughout the workshop, from the first Blink to the multiplayer Snake project.

It brings together on one board the microcontroller, its Flash memory, the USB connectors and the input/output pins, ready to be programmed with Arduino-ESP32. To understand what it contains, see the concept [Architecture of a microcontroller](/workshops/microcontroleur/concepts/architecture-microcontroleur/).

## Specifications

| Item | Value |
|---|---|
| SoC | ESP32-S3 |
| CPU | Dual-core Xtensa LX7, 32 bits, up to 240 MHz |
| RAM | 512 KB internal SRAM (+ 8 MB PSRAM on the N16R8 variant) |
| Flash | 16 MB external (N16R8 variant) |
| GPIO | Up to 45 programmable pins |
| ADC | 2 × 12-bit converters (SAR), up to 20 channels |
| Connectivity | 2.4 GHz Wi-Fi 802.11 b/g/n + Bluetooth 5 LE |
| Logic voltage | **3.3 V** |
| USB | Native USB (OTG) + USB-to-serial bridge for flashing |

## Pins to know

Not all pins are equal: some have a reserved role (see the concept [GPIO & the digital world](/workshops/microcontroleur/concepts/gpio-monde-numerique/)).

| Pins | Role |
|---|---|
| GPIO 1 to 10 | ADC1: the only ones usable for the ADC while Wi-Fi is active |
| GPIO 11 to 20 | ADC2: **unusable with Wi-Fi enabled** |
| GPIO 0, 3, 45, 46 | Strapping (boot mode): avoid |
| GPIO 19, 20 | Native USB (D-/D+): avoid if USB is used |
| GPIO 48 | On-board addressable RGB LED (WS2812) |
| **BOOT** (GPIO0) and **RESET** buttons | Enter upload mode and restart |

{% include message.html title="The on-board LED is an RGB one" message="The DevKitC-1 has no plain single-colour LED: its built-in LED is an **addressable RGB** LED (WS2812) on GPIO48. A `digitalWrite(LED_BUILTIN, ...)` is not always enough to drive it; use `rgbLedWrite(RGB_BUILTIN, r, g, b)`." status="is-info" icon="fas fa-lightbulb" %}

## Power

- **USB-C**: the normal way to power and program the board (5 V supplied by the port).
- **5V / VIN pin**: external 5 V supply (regulated down to 3.3 V by the board).
- **3V3 pin**: 3.3 V output to power peripherals (display, sensors).
- **GND**: common ground, to be connected to every peripheral.

{% include message.html title="3.3 V logic only" message="The ESP32-S3 pins do not tolerate 5 V on their inputs. To talk to a 5 V component, use a voltage divider or a level shifter (see the GPIO concept)." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Use in the workshop

- Programming with **PlatformIO** (see the [PlatformIO sheet](/docs/references/software/platformIO/)) and the first flash in the tutorial [Checking the toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/).
- Fixed wiring (buttons, joystick, SPI display) built up over the tutorials and kept until the project.

## Sources

- [ESP32-S3-DevKitC-1 - Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3/user-guide-devkitc-1.html)
- [ESP32-S3 datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
