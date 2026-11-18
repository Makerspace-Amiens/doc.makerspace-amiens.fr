---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Analog joystick module
subtitle: Two potentiometers and a button, to steer along two axes
description: "Reference sheet for the analog joystick module: principle, specifications, pinout and wiring on a XIAO ESP32S3."
author: Alban Petit

todo: 80
---

## Description

An **analog joystick** is a small stick mounted on **two perpendicular potentiometers**, one per axis (X and Y). Tilting the stick turns the potentiometers: each outputs a voltage that varies continuously between 0 V and the supply voltage, reflecting the position along its axis. At rest, springs bring the stick back to the centre, and both voltages sit at about half the supply.

A **button** sits under the stick: it closes when you press the stick down.

This is the module of the Microcontrollers workshop kit, and a joystick of the same type (SparkFun *thumb joystick*) is soldered on the console board.

## Technical specifications

| Parameter | Value |
|---|---|
| Supply | 3.3 V to 5 V; **3.3 V** with an ESP32 |
| Potentiometers | 2, about 10 kΩ each |
| Axis outputs | Analog voltage, from 0 V to the supply voltage |
| Value at rest | About half the supply, never exactly |
| Button | Contact to GND when pressed, often without a pull resistor on the module |

## Pinout

| Module pin | Role |
|---|---|
| `GND` | Ground |
| `+5V` or `VCC` | Power (connect it to the **3V3** pin of an ESP32, despite the label) |
| `VRx` | X-axis voltage |
| `VRy` | Y-axis voltage |
| `SW` | Button: connected to GND when the stick is pressed |

{% include message.html title="Never on 5V with an ESP32" message="Powered from 5 V, the joystick outputs up to 5 V on `VRx` and `VRy`, which the ESP32 inputs cannot withstand. Always connect `VCC` to **3V3**: the voltage range follows the supply, and the reading stays correct." status="is-danger" icon="fas fa-exclamation-triangle" %}

## Wiring on a XIAO ESP32S3

The workshop wiring, identical on the breadboard and on the console board:

| Joystick | XIAO ESP32S3 | Reading |
|---|---|---|
| `VRx` | D0 (GPIO1, ADC1) | `analogRead()`, from 0 to 4095 |
| `VRy` | D1 (GPIO2, ADC1) | `analogRead()`, from 0 to 4095 |
| `SW` | D2 (GPIO3) | `pinMode(D2, INPUT_PULLUP)`, then `digitalRead()`: `LOW` = pressed |
| `VCC` | 3V3 | |
| `GND` | GND | |

The axes are wired to **ADC1** pins: the ESP32's ADC2 is unusable while Wi-Fi is active.

## Points to watch

- **The centre is not at 2048**: it varies from one joystick to another (often between 1800 and 2100). Measure it at start-up, with the stick released, then apply a **dead zone** around it: see the concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/).
- **The direction of the axes depends on the mounting**: depending on how the module is oriented, "left" gives a low or a high value. Plan a constant to invert the axis.
- **The button bounces** like any mechanical contact: edge detection and debouncing, see [The kit modules](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).

## Use in the workshop

- Lab 2: test and calibration on a breadboard, in [The kit modules](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).
- Lab 4: the paddle of [Pong on the console](/workshops/microcontroleur/tutorials/collisions-fsm-pong/).
- Project: the direction of the snake in [Multiplayer Snake](/workshops/microcontroleur/projet-snake/).
