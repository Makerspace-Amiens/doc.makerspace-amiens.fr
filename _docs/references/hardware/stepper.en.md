---
layout: documentation
lang: en
hide_hero: false
hero_image: 17HE12-1204S-500x500.jpg
hero_darken: true
image: 17HE12-1204S-500x500.jpg
component_toc: true
doc_header: true

title: Stepper motor
subtitle: For precise movement
description: This page explains how the stepper motor works
manufacturer:
  - name: OMC-stepperonline
    link: "https://www.omc-stepperonline.com/"

todo: 80
author: Adrien BRACQ
---

The stepper motor is an essential component in many robotics and motion control applications. It offers high positioning precision compared with DC motors, without needing extra electronic components such as encoders. Unlike conventional DC motors, a stepper motor is designed to move its shaft in fixed "steps", which allows very precise control of angular movement.

These motors are found in many everyday applications, such as 3D printers, ordinary printers, scanners, and the computer numerical control (CNC) machines used for engraving or cutting.

## Operating principle

A stepper motor works by converting electrical pulses into discrete angular movements. Each pulse applied to the motor rotates it by a certain angle, called a "step". By controlling the pulse sequence, the motor can be turned in either direction, faster or slower.

It relies on electromagnets surrounding the rotor. These electromagnets are energised in a precise order to turn the rotor progressively. The rotation of the motor is therefore proportional to the number of pulses received, which makes positioning precise and easy to control.

## Stepper motor characteristics

Stepper motors have several characteristics that set them apart from other types of electric motors. Here are some of the most important ones:

**- Step angle:** The step angle is the angle the motor rotates for each pulse. It typically ranges from 1.8° (200 steps per revolution) to 0.9° (400 steps per revolution), giving high precision for angular positioning.

**- Holding torque:** The holding torque is the maximum torque the motor can provide when it is powered and holding a fixed position. It is a key characteristic for applications that need strong position stability.

**- Rated current:** The rated current is the current needed to produce the maximum torque. It is important to select a suitable driver that can supply this current reliably without overheating.

**- Operating voltage:** The operating voltage specifies the voltage range in which the motor runs best. A higher voltage can improve performance at high speed, but requires a driver able to regulate the current properly.

**- Resolution:** The resolution of a stepper motor depends on the number of steps per revolution. The more steps, the finer the positioning. Microstepping increases this resolution further by dividing each step into several sub-steps.

**- Running torque:** The running torque is the torque delivered by the motor while it is moving. This torque often drops as rotation speed increases, which is an important limit to consider when choosing a motor for a given application.

These characteristics help you choose the stepper motor best suited to the specific requirements of each application, whether precision, torque or speed.

## Driving the stepper motor

Driving a stepper motor requires a dedicated driver to manage the sequence of electrical pulses that energise the motor coils. The driver converts the signals coming from a microcontroller, such as an Arduino, into precise voltage pulses that rotate the motor by a defined angle: each pulse corresponds to one step. This makes the motor simpler to command, while improving the precision and reliability of the control.

[Learn more: the stepper motor driver.](../driver)

## Your hardware

For the **Machine That Draws** project, you will have access to the following hardware:

- **Stepper motor:** [17HE12-1204S - StepperOnline](https://www.omc-stepperonline.com/fr/e-serie-nema-17-bipolaire-26ncm-36-82oz-in-1-2a-42x42x30mm-4-fils-avec-1m-de-cable-et-connecteur-17he12-1204s)

{% include message.html title="To understand" message="Make sure you follow the manufacturer links to understand how each part works. You will find the component datasheets, technical drawings and specifications there, as well as guidance on commissioning the hardware."
status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

---

{%
  include card_collections.html
  title="Going further"
  description="Find other tutorials related to the project"
  type="hardware"
%}
