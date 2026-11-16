---
layout: documentation
lang: en
hide_hero: false
hero_image: /workshops/stepper-controller-board/hero.png
hero_darken: true
image: /workshops/stepper-controller-board/hero.png
component_toc: true
tag: stepper-controller-board

title: Designing the electronic schematic
subtitle: Draw the complete schematic in KiCad
description: Define the architecture of the board, then draw the complete electronic schematic in KiCad Eeschema.

time: 3
difficulty: 2

author: Alban Petit
---

{% include step-tuto.html
greyBackground = true
title = "Step 2.1: Block diagram and architecture"
content="Goal: Define the overall architecture before drawing the schematic.

**Tasks:**

- Draw a block diagram on paper: ESP32 in the centre, I2C/SPI/GPIO blocks around it
- List all the signals (STEP, DIR, EN, SDA, SCL, MISO, MOSI, SCK, CS, LIMIT_X_MIN, LIMIT_X_MAX, LIMIT_Y_MIN, LIMIT_Y_MAX)
- Define the power rails (3.3V, 5V, 12V/24V, common GND)
- Identify the critical decoupling points (VDD, VMOT) " %}

{% include message.html
title="Makerspace Amiens library, strongly recommended"
message="Before starting the schematic, import the Makerspace Amiens KiCad library. It lists the components available in stock (ESP32, A4988, SSD1306, connectors, passives…) and saves you from searching for or creating symbols by hand. See the tutorial [KiCad: importing libraries](/docs/tutorials/software/kicad/kicad-import-librairies/) before starting step 2.2."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2.2: Electronic schematic in KiCad"
content="Goal: Draw the complete schematic in KiCad Eeschema.

**Tasks:**

- Create a new KiCad project
- Place the symbols: ESP32, A4988 (×2), SSD1306, SD socket
- Add the 5V supply
- Connect the power rails (3.3V rails, 5V rails and VMOT)
- Add the decoupling capacitors (100nF + 10µF)
- Add the pull-up resistors (I2C, SPI)
- Add the connectors for the 2 limit switches
- Annotate all the components (designators R1, C1 and so on)

**Deliverables:** KiCad schematic file (.kicad_sch) + PDF of the schematic in your Machine That Draws project" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2.3: ERC check and design review"
content="Goal: Catch errors before routing.

**Tasks:**

- Run the ERC (Electrical Rules Check) in KiCad
- Fix all the errors (missing connections, conflicts)
- Have the schematic reviewed by another pair " %}
