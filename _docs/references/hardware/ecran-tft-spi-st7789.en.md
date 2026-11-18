---
layout: documentation
lang: en
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: SPI TFT display (ST7789)
subtitle: The colour display of the embedded game
description: "Reference sheet for the SPI TFT display with an ST7789 controller used to show the Pong game: specifications, pinout and library."
author: Alban Petit

todo: 60
---

## Overview

The workshop's **TFT display** is a small colour screen driven by an **ST7789** controller (sometimes an ILI9341, depending on the model), connected to the [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/) over the **SPI bus**. It is the display surface for Pong and then Snake.

SPI is chosen here for its **speed**: drawing a picture at ~60 frames per second needs a data rate that a slow bus (I2C) could not provide. See the concept [Communication buses](/workshops/microcontroleur/concepts/bus-communication/).

## Specifications

| Item | Value |
|---|---|
| Controller | ST7789 (or ILI9341) |
| Typical resolution | 240 × 240 or 240 × 320 px |
| Colours | 16 bits (65,536 colours, RGB565) |
| Interface | SPI (write-only from the ESP32 side) |
| Voltage | **3.3 V** (logic and power) |

## SPI pinout

| Display pin | Role | XIAO ESP32S3 pin (workshop) |
|---|---|---|
| VCC | 3.3 V power | 3V3 |
| GND | Ground | GND |
| SCL / SCK | SPI clock | D9 (GPIO8) |
| SDA / MOSI | Data, CPU to display | D10 (GPIO9) |
| CS | Chip Select (selects the display) | GND (always selected) |
| DC | Command / data | D8 (GPIO7) |
| RST / RESET | Hardware reset | D7 (GPIO44) |
| BLK / LED | Backlight | 3V3 directly |

On the display, the SPI pins are often silkscreened `SCL` and `SDA` like an I2C bus: they really are the SPI clock and data lines.

The workshop module has a **14-pin** connector, in this order: VCC, GND, CS, RESET, DC, SDI (MOSI), SCK, LED, SDO (MISO), then the five pins of the touch panel (T_CLK, T_CS, T_DIN, T_DO, T_IRQ), which are not used. Always check this order on the silkscreen of your module: it varies from one manufacturer to another.

{% include message.html title="MISO not wired" message="The display does not send back any useful data: only the ESP32-to-display direction (MOSI) is used. The SPI MISO pin stays free." status="is-info" icon="fas fa-info-circle" %}

## Library

The display is driven with the **Adafruit ST7735 and ST7789** library (`adafruit/Adafruit ST7735 and ST7789 Library` in PlatformIO), which relies on **Adafruit GFX** for drawing. There is no configuration file: the pins are passed in the code.

```cpp
Adafruit_ST7789 tft(&SPI, -1, D8, D7);      // CS (none), DC, RESET

SPI.begin(D9, -1, D10, -1);                 // SCK, MISO (none), MOSI, CS
tft.init(240, 320, SPI_MODE3);              // mode 3: CS tied to GND
```

Because CS is permanently tied to GND, the display must be initialised in **SPI mode 3** (clock idle high). The full setup is covered in the tutorial [SPI display and game loop](/docs/tutorials/electronics/ecran-spi-game-loop/).

{% include message.html title="Black screen: the three checks" message="A display that stays black almost always comes down to one of three causes: backlight (BLK) not powered, pins passed to `SPI.begin()` that differ from the actual wiring (SCK on D9, not D8), or `tft.init()` called without `SPI_MODE3` while CS is tied to GND. An ILI9341 display is driven with the `Adafruit ILI9341` library, not the ST7789 one. Full diagnosis: [Troubleshooting an SPI TFT display that shows nothing](/docs/how-to-guides/ecran-tft-noir/)." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Sources

- [Adafruit ST7735 and ST7789 library](https://github.com/adafruit/Adafruit-ST7735-Library)
- [Adafruit GFX library](https://github.com/adafruit/Adafruit-GFX-Library)
- [ST7789 datasheet](https://www.rhydolabz.com/documents/33/ST7789.pdf)
