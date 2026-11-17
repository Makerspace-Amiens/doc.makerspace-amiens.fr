---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Soldering and testing the board
subtitle: Assemble the console with a soldering iron, then validate it step by step
description: Hand-solder the SMD and through-hole components of the console board, then test it unpowered, powered and with the lab programs.
author: Alban Petit

time: 2
difficulty: 3

prerequisites:
  - label: Designing the console board
    link: /workshops/microcontroleur/tutorials/conception-carte-kicad/

hardwares:
  - label: Bare console board (provided)
    link: ""
  - label: XIAO ESP32S3 with its headers, 14-pin TFT display, SparkFun joystick, 2 SMD buttons
    link: /docs/references/hardware/xiao-esp32s3/
  - label: 1206 SMD components (resistors, capacitors, LED)
    link: ""
  - label: Weller WT 1010 soldering iron, solder wire, flux, desoldering braid
    link: /docs/references/machines/weller-wt-1010/
  - label: Multimeter, tweezers, magnifying glass
    link: ""

todo: 80
---

## Goal

Your routing has been validated: the instructor gives you the final console board, bare, and a bag of components. By the end of this tutorial, the console is assembled, and each function is checked **before** starting the game: power, buttons, joystick, display, I2C connector. A problem found at the testing stage costs five minutes; the same problem discovered during the project can cost a whole session.

{% include message.html title="Safety" message="The iron's tip goes above 300 °C: always put the iron back in its stand, never on the table. Solder in a ventilated area and do not breathe the flux fumes. Wear glasses when you cut the legs of through-hole components (they fly far). Wash your hands after the session." status="is-danger" icon="fas fa-exclamation-triangle" %}

## Before you start

- **Compare the board with your design**: the final board follows the same specification as yours, but its placement differs. Find on the silkscreen where each component goes (R1, C2, SW1...) using the assembly drawing handed out with the board.
- **Sort the components** by reference. 1206 SMD parts all look alike: a resistor carries a numeric marking (`102` = 1 kΩ, `472` = 4.7 kΩ), a capacitor carries none. Do not mix up the bags.
- **Set the iron** to around 330 °C for lead-free solder, and tin the tip (a thin layer of shiny solder).

## Soldering, from lowest to highest

The order matters: solder the flattest components first, so that the board lies flat on the table until the end, and keep for last those that get in the way of the iron.

| Order | Components | Why at that point |
|---|---|---|
| 1 | 1206 SMD resistors and capacitors | The flattest, and the easiest to reach on an empty board |
| 2 | SMD indicator LED | Flat too, but **polarised** |
| 3 | SMD push buttons | Taller than the 1206 parts |
| 4 | I2C connector | Through-hole, still low |
| 5 | XIAO ESP32S3 on its headers | Through-hole, taller |
| 6 | Joystick | The tallest and bulkiest |
| 7 | Display connector | Last: the display is mounted on top |

{% include step-tuto.html
greyBackground=true
title="Step 1: Solder the 1206 SMD parts"
content="An SMD component is soldered in three stages, without ever holding it with your fingers:

1. **Tin a single pad**: a small drop of solder on one of the component's two pads.
2. **Place the component** with the tweezers, reheat the drop with the iron, and let the component sink into it, flat and centred. Remove the iron, then the tweezers.
3. **Solder the other side**, then go back to the first one for a clean joint (a touch of flux helps).

A good joint forms a smooth, shiny **fillet**, gently sloping between the pad and the end of the component. A dull blob, or a component standing up on a single pad (*tombstone effect*), is reworked with the desoldering braid."
%}

{% include step-tuto.html
greyBackground=true
title="Step 2: Solder the LED the right way round"
content="An LED only conducts in one direction: soldered the wrong way, it does not light up. Find the **cathode** on the board's silkscreen (a bar, a triangle pointing at it, or the letter K) and on the LED (a green marking, a cut corner, or an arrow on the back). If in doubt, the multimeter's diode test mode lights the LED faintly when it is the right way round: red probe on the anode, black on the cathode."
%}

{% include step-tuto.html
greyBackground=true
title="Step 3: Solder the buttons and connectors"
content="The **SMD buttons** are soldered like the 1206 parts: one leg first, check that the button is flat and straight, then the other three.

For a **through-hole component** (connector, headers, joystick): insert it from the top, turn the board over, and solder **a single leg**. Check that it is perpendicular to the board (there is still time to straighten it by reheating that leg), then solder the others. A good through-hole joint has the shape of a small shiny **cone** around the leg.

Then cut the legs that stick out, flush with the cone, glasses on."
%}

{% include step-tuto.html
greyBackground=true
title="Step 4: Solder the XIAO and the joystick"
content="The **XIAO** is soldered by its headers, Wi-Fi antenna unplugged and USB-C connector facing the edge of the board. Do not overheat the same pin: move on to the next one and come back later if the joint has not taken.

The **joystick** has many legs, some of which are only used to hold it mechanically: solder them all, they take the thumb's force during play."
%}

{% include step-tuto.html
greyBackground=true
title="Step 5: Inspect the board"
content="Before any power-up, examine **every joint** with the magnifying glass, front side then back side:

- no solder **bridge** between two neighbouring pads or legs (especially on the XIAO's headers);
- no **dry** joint (dull, grainy, blob-shaped);
- no forgotten leg;
- no solder residue or cut leg lying around on the board.

Take **photos** of the front and back: they are used for the documentation, and by the instructor if a fault has to be diagnosed remotely."
%}

## Testing the board

{% include step-tuto.html
greyBackground=true
title="Step 6: Test unpowered"
content="Multimeter in **continuity** mode (the beep), board **unplugged**:

- between **3V3 and GND** (for example on pins 1 and 4 of the I2C connector): **no continuous beep**. A short beep on first contact is normal (the capacitors are charging), a continuous beep signals a short circuit to be found **before** plugging in the USB;
- between each button and the XIAO pin it controls: a beep when the button is pressed, nothing when it is released;
- between each pin of the display connector and its XIAO pin, according to the table in the specification."
%}

{% include step-tuto.html
greyBackground=true
title="Step 7: First power-up"
content="Plug in the USB-C, without the display for now:

- the **indicator LED** lights up;
- with the multimeter in **DC voltage** mode, you read **3.3 V** (within 0.1 V) between 3V3 and GND;
- on the I2C connector, SDA and SCL are also at **3.3 V** when idle: the pull-up resistors are doing their job;
- nothing heats up: run your finger near the XIAO and the components after a minute.

At the slightest doubt (smell, LED off, abnormal voltage), **unplug immediately** and go back to the inspection."
%}

{% include step-tuto.html
greyBackground=true
title="Step 8: Test each function with the Lab 2 programs"
content="The board follows the Lab 2 pinout: its programs serve as **test programs**, without modification.

1. **Flashing**: the Blink from [Checking the toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/). The XIAO's orange LED blinks.
2. **Buttons**: the program from step 2 of [The modules of the kit](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/), on D5 (SW1) then on D6 (SW2) by changing `PIN_BUTTON`. On the board, the buttons connect their pin to GND: `PRESSED_LEVEL` is `LOW`.
3. **Joystick**: the programs from steps 3 and 4. Raw values, pressing the stick, then 0 at rest and -1 / +1 at the end stops.
4. **Display**: with the board unplugged, mount the display on its connector, then flash the program from step 6. The text and shapes are displayed.
5. **All together**: the program from step 7, without the buzzer (not on the board). The dot follows the joystick.

The board is ready: the Pong can move in."
%}

{% include message.html title="Everything works?" message="Write down each test and its result in your repo (see [Documenting tests and results](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/)): it is the proof that the board is sound, and the starting point if a problem appears later in the project." status="is-success" icon="fas fa-check-circle" %}

## Troubleshooting

For a board that does not show up on the computer and for the display, the guides [Recovering an ESP32-S3 board that no longer shows up](/docs/how-to-guides/esp32-s3-carte-introuvable/) and [Troubleshooting an SPI TFT display that shows nothing](/docs/how-to-guides/ecran-tft-noir/) detail what to do.

| Symptom | Likely causes | What to check |
|---|---|---|
| Continuous beep between 3V3 and GND | Solder bridge, misplaced capacitor | Inspect with the magnifying glass around the capacitors and the XIAO's headers |
| Indicator LED off, 3.3 V present | LED soldered the wrong way, resistor missing | LED direction, soldering of its resistor |
| The board does not show up on the computer | Charge-only cable, program that crashes | Another cable; BOOT mode (hold BOOT while plugging in) |
| A button does not react | Dry joint, crooked button | Continuity with the button pressed, between the pin and GND |
| SW2 does not react, SW1 does | Soldering of D6's series resistor | Continuity on either side of the resistor |
| Joystick stuck at 0 or 4095 | Unsoldered leg, no power | Joystick joints, 3.3 V on its VCC pin |
| White screen | Backlight powered, but no data | Continuity of SCK, MOSI, DC, RESET; `SPI_MODE3` in the code |
| Black screen | Backlight not powered | LED pin of the display connector at 3.3 V |

{% include message.html title="Next step" message="The console is ready: write your first game on it with [Pong on the console](/workshops/microcontroleur/tutorials/collisions-fsm-pong/)." status="is-success" icon="fas fa-check-circle" %}

## Documenting

Add to the board's page in your repo the front and back photos, the result of each test, and any soldering rework (what happened, how you found it). A board whose faults and fixes have been documented is worth more than a board presented as perfect.
