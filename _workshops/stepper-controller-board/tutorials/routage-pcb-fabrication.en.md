---
layout: documentation
lang: en
hide_hero: false
hero_image: /workshops/stepper-controller-board/hero.png
hero_darken: true
image: /workshops/stepper-controller-board/hero.png
component_toc: true
tag: stepper-controller-board

title: PCB routing and manufacturing
subtitle: Route the PCB and order the manufacturing files
description: Assign the footprints, route the PCB in KiCad Pcbnew, then generate the Gerber files for manufacturing.

time: 6
difficulty: 3

author: Alban Petit
---

{% include step-tuto.html
greyBackground = true
title = "Step 3.1: Assigning the footprints"
content="Goal: Give each component its physical footprint.

**Tasks:**

- Open the footprint assignment tool in KiCad
- Assign the footprints: ESP32, 1206 resistors/capacitors, screw terminals
- Check the dimensions of the footprints (compare with the datasheets) " %}

{% include step-tuto.html
greyBackground = true
title = "Step 3.2: PCB routing in KiCad Pcbnew"
content="Goal: Route the PCB while respecting the constraints.

**Tasks:**

- Place the components: ESP32 in the centre, A4988 drivers close to the motor connectors, SD and OLED at the edge
- Place the limit switch connectors on one side of the PCB
- Route the power tracks (VMOT, GND) first (width ≥ 1.5mm)
- Route the critical signals (SPI, I2C) with short tracks
- Route the limit switch signals to the GPIOs
- Place the decoupling capacitors as close as possible to the ICs
- Add a ground plane (GND) on the bottom layer
- Run the DRC (Design Rules Check) and fix the errors

**Deliverables:** KiCad PCB file (.kicad_pcb) in your Machine That Draws project" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3.3: Generating the Gerber files and ordering"
content="Goal: Generate the manufacturing files and order the PCBs.

**Tasks:**

- Generate the Gerber files + drill file (see the [PCB manufacturing tutorial](/docs/tutorials/software/kicad/kicad-fabrication-pcb/))
- Check the files with a Gerber viewer (GerbView or online)
- Upload all the KiCad files to your Machine That Draws project

**Deliverables:** Archive of the Gerber files (.zip) in your Machine That Draws project" %}
