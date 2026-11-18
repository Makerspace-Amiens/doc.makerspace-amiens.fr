---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Buzzer module
subtitle: A beep or a melody, depending on whether it is active or passive
description: "Reference sheet for the buzzer module: difference between active and passive buzzers, pinout and driving it from a XIAO ESP32S3."
author: Alban Petit

todo: 80
---

## Description

A **buzzer** turns an electrical signal into sound. There are two families, almost identical in appearance, which are not driven the same way:

| | **Active** buzzer | **Passive** buzzer |
|---|---|---|
| Contents | A built-in oscillator | Just a small loudspeaker |
| What to send it | A `HIGH` level | A square wave at the desired frequency |
| Sound | Always the same note | Any note you want |
| Arduino function | `digitalWrite()` | `tone()` |
| With the wrong drive | `tone()` gives a crackly sound | `HIGH` alone only produces a click |

A passive buzzer driven by a square wave is a direct application of **PWM**: the frequency of the signal becomes the pitch of the note (see the concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/)).

This is the buzzer module of the Microcontrollers workshop kit. It is not present on the console board.

## Technical specifications

| Parameter | Value |
|---|---|
| Supply | 3.3 V to 5 V; **3.3 V** with an ESP32 (the sound is slightly quieter) |
| Useful frequencies (passive) | A few hundred Hz to a few kHz, loudest around 2 to 4 kHz |
| Current | A few mA to around thirty mA depending on the model |

## Pinout

| Module pin | Role |
|---|---|
| `GND` or `-` | Ground |
| `VCC` or `+` | Power, on modules that need it (to **3V3**) |
| `S`, `I/O` or `SIG` | Control signal |

Some modules have only two pins (signal and ground). Markings vary from one manufacturer to another: check the silkscreen before wiring.

## Wiring on a XIAO ESP32S3

| Module | XIAO ESP32S3 |
|---|---|
| `S` | D3 (GPIO4) |
| `VCC` | 3V3 |
| `GND` | GND |

```cpp
// Passive buzzer: a 440 Hz note for 200 ms, without blocking the program
tone(D3, 440, 200);

// Active buzzer: a beep for as long as the pin is HIGH
digitalWrite(D3, HIGH);
```

## Points to watch

- **Identify the type first**: a program that plays a scale with `tone()`, then sets the pin `HIGH`, reveals in a few seconds whether it is active or passive.
- **A power-hungry buzzer** (more than about twenty mA) is switched through a transistor rather than directly from the pin.
- **In a game**, start a note with `tone()` and do not wait for it: a `delay()` to let the sound play would freeze the whole program.

## Use in the workshop

- Lab 2: identification and test on a breadboard, in [The kit modules](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).
