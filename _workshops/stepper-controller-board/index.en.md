---
title: Machine That Draws controller board
lang: en
layout: project-home
permalink: /workshops/stepper-controller-board/
type: workshop
kind: project
image: /workshops/stepper-controller-board/logo.png
project_slug: stepper-controller-board
project_image: /workshops/stepper-controller-board/logo.png
project_tags:
  - Electronics
  - KiCad
  - ESP32
description: "Design and build a dedicated electronic board to drive the stepper motors of your Machine That Draws, with an ESP32, an SD card reader and an OLED display."
author: Alban Petit

prerequisites:
  - /workshops/machines-that-draws/
tutorials:
  - /docs/tutorials/software/kicad/installation-kicad/
  - /docs/tutorials/software/vscode-platformio/installation-vscode-platformio/
  - /docs/tutorials/electronics/a4988-stepper-driver/
  - /workshops/stepper-controller-board/tutorials/prototypage-validation/
  - /docs/tutorials/software/kicad/kicad-import-librairies/
  - /docs/tutorials/software/kicad/kicad-eeschema-bases/
  - /workshops/stepper-controller-board/tutorials/conception-schema-kicad/
  - /docs/tutorials/software/kicad/kicad-pcbnew-bases/
  - /docs/tutorials/software/kicad/kicad-fabrication-pcb/
  - /workshops/stepper-controller-board/tutorials/routage-pcb-fabrication/
  - /workshops/stepper-controller-board/tutorials/assemblage-tests-validation/
hardware:
  - /docs/references/hardware/driver/
  - /docs/references/hardware/stepper/
software:
  - /docs/references/software/platformIO/
---

## Context

This project follows on from the **Machine That Draws** project you completed earlier. The aim is to design and build a **dedicated electronic board** to replace the driver controller.

The board will include:

- An **ESP32** as the main microcontroller
- **2 A4988 drivers** to drive the X and Y stepper motors
- An **SD card reader** to store G-code files or drawings
- An **OLED display** to show the status, menus and progress
- **Connectors** for motors, power and expansion
- **Power supply** management

## Learning objectives

By the end of this project, you will be able to:

- Design a **complete electronic schematic** with KiCad
- **Route a multilayer PCB**
- Integrate **communication buses** (I2C, SPI) on the same PCB
- Handle **power constraints** (decoupling, track width)
- Solder **SMD and through-hole components**
- Debug an electronic board and validate that it works
- Document a technical project from A to Z

{% include message.html
title="Group project"
message="This project is carried out with the same teams as the Machine That Draws project. Organise yourselves to share out the tasks: schematic design, PCB routing, firmware, tests and documentation. Collaboration is essential to the success of the project."
status="is-info"
icon="fas fa-users" %}

## Specification

### Functional specifications

The board must make it possible to:

1. **Drive 2 stepper motors** (X and Y axes) through A4988 drivers

2. **Store files** on an SD card (optional)
   - Log of the actions carried out while the system runs
   - FAT32 format
   - Card insertion detection (optional)
   - Running a G-code file (optional)

3. **Display information** on an OLED display (optional)
   - Machine state (idle, running, error)
   - Progress (percentage, current line)
   - Navigation menus (optional)

4. **Detect the ends of travel** with limit switches
   - 4 mechanical sensors (X min, X max, Y min, Y max)
   - Automatic homing of the axes
   - Protection against moves beyond the limits

### Technical specifications

| Parameter | Value | Notes |
| ----------- | -------- | ----------- |
| **Motor supply** | 12V or 24V DC | External supply for the motors |
| **Servo motor and ESP32 supply** | 5V | Provided by the R-78E5.0-1.0 regulator |
| **Logic** | 3.3V | Provided by the regulator of the ESP32 board |
| **Motor current** | 0.5A to 1.5A per phase | Adjustable with Vref |
| **I2C interface** | SDA=GPIO8, SCL=GPIO9 | OLED display |
| **SPI interface** | SPI2 (GPIO 18/19/11/5) | SD card |
| **Limit switch GPIOs** | GPIO 1, 2, 3, 4 | Limit switches |
| **Microcontroller** | ESP32 S3 UNO | Board: esp32-s3-devkitc-1 |
| **PCB dimensions** | Arduino Uno shield format | To make integration with the Arduino UNO format ESP32 easier |
| **Connectors** | Screw terminals | Emergency stop button |
| **Connectors** | Barrel jack | Power |
| **LEDs** | SMD 1206 | Power indicators |

## Bill of Materials (BOM)

### Main components

| Item | Reference | Quantity | Notes |
| ------------- | ----------- | ---------- | ----------- |
| ESP32 S3 UNO | ESP32 S3 UNO | 1 | - |
| A4988 driver (module) | StepStick compatible | 2 | - |
| 0.96" I2C OLED display | SSD1306 128×64 | 1 | - |
| Push-push SD socket | - | 1 | - |
| NEMA 17 motor | - | 2 | - |
| 5V regulator | R-78E5.0-1.0 | 1 | - |
| Limit switches | Mechanical microswitch | 2 | X min, X max, Y min, Y max |

### Passive components

| Item | Value | Package | Quantity | Notes |
| ------------- | -------- | --------- | ---------- | ----------- |
| Ceramic capacitor | 100nF | 1206 SMD | 10 | Decoupling |
| Electrolytic capacitor | 100µF 35V | Radial | 2 | Motor supply |
| Ceramic capacitor | 10µF | 1206 SMD | - | VDD decoupling |
| Pull-up resistor | 10kΩ | 1206 SMD | - | I2C (SDA, SCL), SD (CS, MISO) |

### Connectors

| Item | Type | Quantity | Notes |
| ------------- | ------ | ---------- | ----------- |
| Power connector | Barrel jack | 1 | VMOT (12-24V) + GND |
| Emergency stop button | 2-pole screw terminal (5mm) | 1 | - |
| Limit switch connector | 3-pole female pin header (2.54mm) | 2 | Signal, GND, 3.3V |
| Male pin headers | Header (2.54mm) | 2 | 1A, 1B, 2A, 2B |
| Male pin headers | Header (2.54mm) | - | ESP32 connection |

## Provisional schedule

The project runs over **8 sessions of 3 hours** (24 h in total) spread over several weeks.

| Session | Duration | Content | Description |
| -------- | ------- | --------- | -------- |
| **1** | 3 h | **Prototyping** | - |
| **2** | 3 h | **Schematic design** | - |
| **3** | 3 h | **PCB routing (1/2)** | Routing the important parts: motor drivers and regulation |
| **4** | 3 h | **PCB routing (2/2)** | Routing the secondary parts: display and SD card |
| **5** | 3 h | **Assembly** | - |
| **6** | 3 h | **Software development** | - |
| **7** | 3 h | **Final fixes** | - |
| **8** | 3 h | **Final validation and documentation** | - |
