---
layout: documentation
lang: en
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true

title: CNC Shield
subtitle: A control board for your CNC machine
description: This page explains how the CNC Shield works and how it connects your equipment
manufacturer:
  - name: AZ-Delivery
    link: "https://www.az-delivery.de/fr/products/az-delivery-cnc-shield-v3"

todo: 30
author: Adrien BRACQ
---

The CNC Shield is an expansion board for Arduino that makes it easy to control computer numerical control (CNC) machines such as milling machines, engravers, 3D printers and drawing plotters. The CNC Shield v3 is one of the most popular ways to turn an Arduino Uno into a CNC machine controller. The board runs GRBL, an open-source firmware based on Arduino that handles stepper motors, limit switches, G-code commands and the other features a CNC machine needs to operate.

The CNC Shield is especially useful because it simplifies assembly: electrical connections are more convenient and it interfaces directly with GRBL, giving you a complete machine controller at low cost.

## Interfaces

To set up a CNC machine based on the CNC Shield and Arduino, you will need the following:

- **Arduino Uno:** The heart of the controller. It interprets the G-code commands and turns them into electrical commands for the motors.

- **CNC Shield v3:** The expansion board that plugs onto the Arduino and makes it easy to connect the various parts of the machine.

- **Stepper motor drivers (such as the A4988 or DRV8825):** These drivers are needed to control the stepper motors: they supply high currents and handle microstepping for better precision.

- **Stepper motors (NEMA 17 for example):** Stepper motors move each axis of the machine (X, Y, Z).

- **External power supply:** Stepper motors need a sufficient external power supply, typically between 12 V and 24 V. The power rating of the supply must match the load of the motors.

- **Limit switches (end stops):** These switches are placed at the ends of the axes to keep the machine from going beyond its physical limits.

- **Cables and connectors:** To connect the motors, the power supply and the limit switches to the CNC Shield.

{% include message.html title="To understand" message="Make sure you follow the manufacturer links to understand how each part works. You will find the component datasheets, technical drawings and specifications there, as well as guidance on commissioning the hardware."
status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include message.html title="Coming soon!" message="This page is under construction. You will soon find here the information you need to build your project"
status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

---

{%
  include card_collections.html
  title="Going further"
  description="Find other tutorials related to the project"
  type="hardware"
%}
