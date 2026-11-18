---
layout: documentation
lang: en
hide_hero: false
hero_image: image.png
hero_height: is-small
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: tutorial

title: Driving a servo motor with Arduino
subtitle: Install the library, then command a servo to a position
description: Install the ESP32Servo library, then drive one or more servo motors to a position, with the Arduino IDE or PlatformIO.
author: Adrien BRACQ & Rémi LACOMBE

time: 3
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: Getting started with Arduino!
    link: /workshops/otto-mks/tutorials/discover-arduino/
  - label: Discover the Otto board!
    link: /workshops/otto-mks/tutorials/discover-otto-pcb/

softwares:
  - label: Arduino IDE
    link: /docs/references/software/arduino-ide/
  - label: PlatformIO IDE (VSCode extension)
    link: /docs/references/software/platformIO/
  - label: Servo / ESP32Servo library
    link: /docs/references/software/servo-library/

hardwares:
  - label: XIAO ESP32
    link: /docs/references/hardware/reference-xiao/
  - label: Servo motor
    link: /docs/references/hardware/servomotor/
---

In this tutorial, you will **install the library** and then **drive a servo motor to a position** from the Arduino IDE or PlatformIO.

{% include message.html
title="Before you start"
message="To understand **how** a servo motor **works** (motor, PWM signal, power), see the reference [The servo motor](/docs/references/hardware/servomotor/). The details of the code functions are gathered in the reference [Servo / ESP32Servo library](/docs/references/software/servo-library/)."
status="is-info"
icon="fas fa-info-circle" %}

## Installing the Servo library

Before driving servo motors with Arduino, you need to install a library developed for the ESP32. Here, you can use [the ESP32Servo library](https://madhephaestus.github.io/ESP32Servo/annotated.html), created by *Kevin Harrington and John K. Bennett*. The procedure depends on the environment you use.

### With the Arduino IDE

{% include step-tuto.html
greyBackground = true
content="Go to the **Library Manager** tab on the left, search for `ESP32Servo` in the search bar, then select the library created by *Kevin Harrington and John K. Bennett.* Then click **Install** to add it to your project.
"
image="Arduino_IDE_zlHeYNVgAy.png"
%}

### With VSCode and PlatformIO

In PlatformIO, libraries are declared directly in the project configuration file rather than through a graphical manager. Add `ESP32Servo` to `lib_deps` in your `platformio.ini` file:

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
lib_deps =
    madhephaestus/ESP32Servo
```

{% include message.html
title="Automatic installation"
message="PlatformIO downloads and installs the library automatically the next time the project is built, with nothing else to do."
status="is-info"
icon="fas fa-info-circle" %}

This library works exactly like the classic Arduino **Servo** library, but it is specially adapted to ESP32-type microcontrollers.

## Driving your first servo motor

In practice, two functions are enough to get started: `attach(pin)` to bind the servo to a pin, and `write(angle)` to give it a position between 0° and 180°.

{% include message.html
title="All the functions"
message="The details of the functions (`attach`, `write`, `writeMicroseconds`, `detach`) and the differences between `Servo` and `ESP32Servo` are gathered in the reference [Servo / ESP32Servo library](/docs/references/software/servo-library/)."
status="is-info"
icon="fas fa-info-circle" %}

Here is a simple example that moves the servo from 0° to 180° in a loop:

```cpp
#include <ESP32Servo.h>

Servo monServo;

void setup() {
  monServo.attach(D7); // Attaches the servo to pin D7
}

void loop() {
  monServo.write(0);    // Moves the servo to 0°
  delay(1000);          // 1 second pause
  monServo.write(180);  // Moves the servo to 180°
  delay(1000);          // 1 second pause
}
```

---

{% include message.html
title="To do"
message="
The Otto's servo motors are connected to pins `D7`,`D8`,`D9`and`D10`

- Write a program that tests the Otto's 4 servo motors from 0 to 180°.
- Write a program that sets all the servo motors to 90° **for assembling the robot**.
"
status="is-info"
icon="fas fa-pen" %}

---

## Creating sequences

You will have to come up with walking sequences, and many others, for your robot. To do this, we will use functions as seen in the previous chapters. The aim from here is therefore to develop walking sequences and test them. For example, you can start by creating a `void walk()` function that makes the robot walk.

```cpp
void walk(){
  FootLeft.write(90));
  LegLeft.write(90);
  FootRight.write(90);
  Legright.write(90);
  delay(1000);
  FootLeft.write(45);
  LegLeft.write(90);
  FootRight.write(90);
  Legright.write(90);
  //etc...
}
```

This example is very basic, and you will quickly find that modifying this kind of sequence can become tedious as your project grows more complex.

To go further, it would be worth adding functions that drive several servo motors at different speeds, or that make sequences simpler to create and manage. This will make your code more readable, modular and scalable for more advanced applications.
