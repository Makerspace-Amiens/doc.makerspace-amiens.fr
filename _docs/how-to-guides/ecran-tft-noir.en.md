---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true
type: how-to

title: Troubleshooting an SPI TFT display that shows nothing
subtitle: Black or white screen, wrong colours or shifted image
description: Find out why an SPI TFT display (ST7789, ILI9341) driven by an ESP32 stays black or shows an incorrect image, and fix it.
author: Alban Petit

time: 1
difficulty: 2
todo: 90

prerequisites:
  - label: A wired display and a program that compiles
    link: /docs/tutorials/electronics/esp32-ecran-tft-spi/
softwares:
  - label: PlatformIO IDE (VSCode extension)
    link: /docs/references/software/platformIO/
hardwares:
  - label: ST7789 SPI TFT display
    link: /docs/references/hardware/ecran-tft-spi-st7789/
  - label: Multimeter
    link: ""
---

## Context

This guide applies when the program compiles and uploads, but the display does not show what is expected. A badly configured display produces **no error**: it stays black or white, with no other clue. The method is to start from the visible symptom, then check the power, the wiring and finally the code, in that order.

The examples use the Adafruit ST7789 library and the wiring of the Microcontrollers workshop (SCK on D9, MOSI on D10, DC on D8, RESET on D7, CS tied to GND).

## Procedure

### 1. Identify the symptom

| What you see | What it indicates | Start with |
|---|---|---|
| Completely black, no glow | The backlight is not powered | Step 2 |
| Uniform white or grey, screen lit | The backlight works, but the display has not been initialised | Steps 3 then 4 |
| Image present but wrong colours, shifted, mirrored or partial | The display receives data, but the configuration does not match it | Step 5 |
| Correct image, then frozen | The display works; it is the program that has stopped | Step 6 |

To tell "black" from "white but off", look at the screen from an angle, in a dark room: a backlight that is on always shows a glow.

### 2. Check the power and the backlight

With the board plugged in, using a multimeter on DC voltage, between each pin and GND:

- display **VCC**: 3.3 V;
- **LED** (or **BLK**, **BL**): 3.3 V. Without voltage on this pin, the display may well be working, but stays invisible.

If a voltage is missing, follow the wire (or the track) back to the board: unplugged wire, wrong breadboard row, dry solder joint.

### 3. Check the signal wiring

With the board **unplugged**, multimeter in continuity mode, between each pin of the display and the board pin that must drive it:

| Display pin | XIAO pin (workshop) |
|---|---|
| SCK (often silkscreened `SCL`) | D9 |
| MOSI (often `SDA` or `SDI`) | D10 |
| DC (or `RS`, `A0`) | D8 |
| RESET (or `RST`) | D7 |
| CS | GND |

The `SCL` and `SDA` markings on an SPI display really are the SPI clock and data, not an I2C bus. Swapping SCK / MOSI or DC / RESET is the most common wiring mistake.

### 4. Check the initialisation in the code

Compare your code against these points, one by one:

```cpp
Adafruit_ST7789 tft(&SPI, PIN_TFT_CS, PIN_TFT_DC, PIN_TFT_RESET);  // order: CS, DC, RESET

void setup() {
    SPI.begin(PIN_TFT_SCK, -1, PIN_TFT_MOSI, PIN_TFT_CS);  // the pins actually wired
    tft.init(240, 320, SPI_MODE3);                         // resolution of YOUR display
    tft.fillScreen(ST77XX_RED);                            // visible test
}
```

- `SPI.begin()` receives the **wired** pins: without arguments, it uses the board's default pins, which are not those of this setup.
- The constructor expects **CS, DC, RESET**, in that order. `PIN_TFT_CS` is `-1` if CS is tied to GND.
- With CS tied to GND, `tft.init()` must receive **`SPI_MODE3`**: see the concept [Communication buses](/workshops/microcontroleur/concepts/bus-communication/).
- The resolution passed to `tft.init()` is that of your module (240 × 320, 240 × 240, 135 × 240...).
- `tft.init()` is called **before** any drawing function.

A `fillScreen(ST77XX_RED)` right after initialisation is the simplest test: if the screen turns red, the initialisation is good and the problem is further on in the program.

### 5. Adjust the configuration to your module

| What you see | Fix |
|---|---|
| Inverted colours (black instead of white, colours in negative) | `tft.invertDisplay(false);` after `tft.init()` (or `true`, depending on the module) |
| Rotated or mirrored image | Another value of `tft.setRotation()` (0 to 3) |
| Shifted image, band of stray pixels along one edge | The resolution passed to `tft.init()` does not match the module |
| Nothing changes despite all this | The controller is not an ST7789: look at the module's part number (ILI9341, ST7735...) and use the matching Adafruit library |
| Image that gets scrambled now and then | Wires too long on the breadboard: lower the frequency with `tft.setSPISpeed(10000000);` |

For an **ILI9341** display, the library is `Adafruit ILI9341`, and the constructor order changes: `Adafruit_ILI9341 tft(&SPI, DC, CS, RESET);`, then `tft.begin();`.

### 6. Check that the program keeps running

If the display shows an image and then freezes, or only shows the beginning:

- add a `Serial.println()` in `loop()` and watch the serial monitor: if it goes quiet, the program is stuck (infinite loop, `while` that never finishes, crash that restarts the board);
- a display that **flickers** constantly almost always comes from a `fillScreen()` called on every frame: only redraw what changes (see [SPI display and game loop](/docs/tutorials/electronics/ecran-spi-game-loop/)).

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| Completely black | LED/BLK pin not powered | Step 2 |
| Uniform white | No initialisation: `SPI.begin()` pins, wiring, SPI mode | Steps 3 and 4 |
| Uniform white, CS tied to GND | `tft.init()` without `SPI_MODE3` | Step 4 |
| Works after RESET, not when plugged in | Display not ready yet when the program starts | Add `delay(100);` before `tft.init()` |
| Colours in negative | Colour inversion specific to the module | Step 5, `invertDisplay()` |
| Partial or shifted image | Wrong resolution | Step 5 |
| Display flickering constantly | `fillScreen()` on every frame | Step 6 |

## See also

- The sheet [SPI TFT display (ST7789)](/docs/references/hardware/ecran-tft-spi-st7789/): pinout and library.
- The tutorial [SPI TFT display with an ESP32](/docs/tutorials/electronics/esp32-ecran-tft-spi/): wiring and first display.
