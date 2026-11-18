---
layout: documentation
lang: en
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true

title: Servo / ESP32Servo library
subtitle: Driving a servo motor to a position from code
description: "Reference for the Servo library (and ESP32Servo for the ESP32): concepts, main functions and differences between the two."
manufacturer:
  - name: ESP32Servo (Kevin Harrington & John K. Bennett)
    link: "https://madhephaestus.github.io/ESP32Servo/annotated.html"
author: Adrien BRACQ & Rémi LACOMBE
---

The **Servo** library (and **ESP32Servo** for ESP32-type microcontrollers) controls a servo motor by automatically generating the **PWM** signal that matches an angle. It saves you from configuring timers by hand or writing pulse-generation code.

{% include message.html
title="Understanding the component"
message="This page documents the **software library**. For how a servo motor works as hardware (motor, gearbox, signal, power), see the reference [The servo motor](/docs/references/hardware/servomotor/)."
status="is-info"
icon="fas fa-info-circle" %}

## PWM and position

The PWM signal is a periodic electrical pulse whose **width** sets the angle of the servo motor:

- A **1 ms** pulse (~1000 µs) moves the servo to **0°**.
- A **1.5 ms** pulse (~1500 µs) moves it to the middle (**90°**).
- A **2 ms** pulse (~2000 µs) moves it to **180°**.

These pulses are sent every 20 ms (a 50 Hz frequency). The library generates this signal for you from the requested angle.

## Main functions

### `Servo.attach(pin)`

Binds a servo motor to a pin of the microcontroller.

```cpp
Servo monServo;
monServo.attach(9); // Attaches a servo motor to pin D9
```

### `Servo.write(angle)`

Moves the servo motor to a given angle (between 0° and 180°).

```cpp
monServo.write(90); // Moves the servo to 90°
```

### `Servo.writeMicroseconds(value)`

Finer control, by sending a pulse width directly (in microseconds).

```cpp
monServo.writeMicroseconds(1500); // Pulse for 90° (centre position)
```

### `Servo.detach()`

Disconnects the servo motor from the pin, freeing the resources.

```cpp
monServo.detach(); // Frees the pin used by the servo motor
```

## Differences between Servo (Arduino) and ESP32Servo

The API is identical; only the low-level implementation changes.

| | Servo (Arduino) | ESP32Servo |
|---|---|---|
| **PWM generation** | Built-in hardware timers | **LEDC** module (LED PWM Controller), stable signals |
| **Compatible pins** | Specific PWM pins only | Almost all, except reserved ones (RX/TX, GPIO0…) |

{% include message.html
title="Putting it into practice"
message="To install the library and write your first program, follow the tutorial [Driving a servo motor with Arduino](/docs/tutorials/electronics/servomotor/)."
status="is-success"
icon="fas fa-arrow-right" %}
