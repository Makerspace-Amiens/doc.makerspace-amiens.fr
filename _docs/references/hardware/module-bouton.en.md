---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Push button module
subtitle: An on/off contact, ready to plug in
description: "Reference sheet for the push button module: principle, wiring variants, pinout and reading it on a XIAO ESP32S3."
author: Alban Petit

todo: 80
---

## Description

A **push button** is a mechanical contact that closes for as long as it is pressed. Mounted on a **module**, it comes with 2.54 mm pitch pins, often with a pull resistor and sometimes with an indicator LED.

This is the button module of the Microcontrollers workshop kit. On the console board, two 6 × 6 mm SMD buttons (SW1 and SW2) play the same role, wired directly to GND.

## Technical specifications

| Parameter | Value |
|---|---|
| Supply | 3.3 V to 5 V; **3.3 V** with an ESP32 |
| Output | Digital, on/off |
| Logic | **Depends on the module**: low or high level when pressed (see below) |
| Bounce | A few milliseconds on every press and every release |

## Pinout

| Module pin | Role |
|---|---|
| `GND` or `-` | Ground |
| `VCC` or `+` | Power (to the **3V3** pin of an ESP32) |
| `S`, `OUT` or `SIG` | Signal, to an input of the microcontroller |

Depending on the module, the signal follows one of these two logics:

| Wiring on the module | At rest | Button pressed |
|---|---|---|
| Pull-up resistor to VCC, button to GND | `HIGH` | `LOW` |
| Pull-down resistor to GND, button to VCC | `LOW` | `HIGH` |

The safest approach is to **measure**: a program that prints the level read, with the button released and then pressed, gives the answer in a few seconds.

## Wiring on a XIAO ESP32S3

| Module | XIAO ESP32S3 | Reading |
|---|---|---|
| `S` | D5 (GPIO6) | `pinMode(D5, INPUT_PULLUP)`, then `digitalRead()` |
| `VCC` | 3V3 | |
| `GND` | GND | |

`INPUT_PULLUP` enables the internal pull-up resistor of the ESP32-S3: it does no harm to a module that already has its own, and it prevents a floating input if the module has none.

## Points to watch

- **An input without a pull resistor floats** and reads anything: see the concept [GPIO & the digital world](/workshops/microcontroleur/concepts/gpio-monde-numerique/).
- **The contact bounces**: a single press can produce several transitions. Detect the **edge** and filter the bounce with `millis()`: see [The kit modules](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).
- **Never power the module from 5 V** with an ESP32: its signal would rise to 5 V on the input.

## Use in the workshop

- Lab 2: level read, press detection and debouncing, in [The kit modules](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).
- Lab 3: the SW1 and SW2 buttons of the board, in [Designing the console board](/workshops/microcontroleur/tutorials/conception-carte-kicad/).
