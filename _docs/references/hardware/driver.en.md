---
layout: documentation
lang: en
hide_hero: false
hero_image: image-1.png
hero_darken: true
image: image-1.png
component_toc: true
doc_header: true

title: Motor driver
subtitle: To drive a stepper motor
description: This page explains how the motor driver works
manufacturer:
  - name: Pololu
    link: "https://www.pololu.com/product/1182"

todo: 80
author: Adrien BRACQ
---

Driving a stepper motor requires a dedicated driver to manage the sequence of electrical pulses that energise the motor coils. The driver converts the signals coming from a microcontroller, such as an Arduino, into precise voltage pulses that rotate the motor by a defined angle: each pulse corresponds to one step. This makes the motor simpler to command, while improving the precision and reliability of the control.

Commonly used drivers include models such as the A4988, the DRV8825 or the TB6600. These drivers let you set several key parameters, such as the current flowing through the coils and the stepping mode of the motor (full step, half step, microstepping). Microstepping is particularly useful when high precision is required, because it divides each step into several sub-steps, giving a finer resolution and smoother motion.

## Wiring diagram

The typical wiring consists of connecting the stepper motor terminals to the driver, then connecting the driver to the microcontroller. The driver receives direction and step signals from the microcontroller, which set the direction and the amount of rotation of the motor. The current limit can also be set directly on the driver, which matters to avoid overheating the motor or damaging the electronics.

![alt text](image.png)

## Control modes and technical considerations

Controlling a stepper motor through a driver gives access to different stepping modes: full step, half step and microstepping. Each mode offers a different level of precision and smoothness. Microstepping, for example, divides each step into many sub-steps, which reduces vibration and gives much finer, better-controlled motion, ideal for precision applications such as 3D printing or CNC machines.

For the A4988 driver, for example, the relationship between the resolution and the configuration jumpers is as follows:

| MS1  | MS2  | MS3  | Microstep Resolution |
|------|------|------|----------------------|
| Low  | Low  | Low  | Full step            |
| High | Low  | Low  | Half step            |
| Low  | High | Low  | Quarter step         |
| High | High | Low  | Eighth step          |
| High | High | High | Sixteenth step       |

To choose the right driver, you must consider the electrical characteristics of the stepper motor, such as its rated current and operating voltage. A poorly matched driver can cause overheating or degraded performance. It is also important to cool the driver properly, especially in high-current applications, because drivers heat up during prolonged use.

## Setting the driver current

To help you set the operating current of the driver correctly for your motor, you can follow this guide:

{% include youtube.html video="89BHS9hfSUk" %}

## Your hardware

For the **Machine That Draws** project, you will have access to the following hardware:

- **Driver:** [A4988](https://www.pololu.com/product/1182)

{% include message.html title="To understand" message="Make sure you follow the manufacturer links to understand how each part works. You will find the component datasheets, technical drawings and specifications there, as well as guidance on commissioning the hardware."
status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

---

{%
  include card_collections.html
  title="Going further"
  description="Find other tutorials related to the project"
  type="hardware"
%}
