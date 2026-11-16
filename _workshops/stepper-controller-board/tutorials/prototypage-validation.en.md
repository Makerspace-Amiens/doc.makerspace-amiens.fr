---
layout: documentation
lang: en
hide_hero: false
hero_image: /workshops/stepper-controller-board/hero.png
hero_darken: true
image: /workshops/stepper-controller-board/hero.png
component_toc: true
tag: stepper-controller-board

title: Prototyping and validation
subtitle: Validate the A4988 driver and the OLED display on a breadboard
description: Before drawing the electronic schematic, validate that the A4988 driver and the OLED display work on a breadboard.

time: 3
difficulty: 1

author: Alban Petit
---

Before moving on to the design of the electronic schematic, it is essential to validate the key components on a breadboard: the stepper motor driver and the display.

{% include step-tuto.html
greyBackground = true
title = "Step 1.1: Testing the A4988 driver on a breadboard"
content="Goal: Validate that an A4988 driver works with a NEMA 17 motor.

[A4988 tutorial](/docs/tutorials/electronics/a4988-stepper-driver/)

**Tasks:**

- Build the A4988 + ESP32 + motor circuit on a breadboard
- Set Vref for a current of 1A (see the [A4988 tutorial](/docs/tutorials/electronics/a4988-stepper-driver/))
- Test the simple rotation code (full step)
- Measure the current draw and the temperature of the driver

**Deliverables:** Photo of the setup in your Machine That Draws project" %}

{% include step-tuto.html
greyBackground = true
title = "Step 1.2: Testing the OLED display (optional)"
content="Goal: Display text and graphics on the OLED.

**Tasks:**

- Connect the OLED display over I2C (see the [SSD1306 tutorial](/docs/tutorials/electronics/esp32-ssd1306-oled/))
- Display: file name, status, progress
- Create a simple menu with 2-3 options (Start, Stop)

**Deliverables:** Documentation of the prototyping (photos + code + test results) in your Machine That Draws project" %}
