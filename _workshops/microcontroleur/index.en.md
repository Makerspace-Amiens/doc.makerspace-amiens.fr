---
title: Microcontrollers
lang: en
layout: project-home
permalink: /workshops/microcontroleur/
type: workshop
kind: course
image: /workshops/microcontroleur/tutorials/toolchain-blink/uc.webp
project_slug: microcontroleur
project_image: /workshops/microcontroleur/tutorials/toolchain-blink/uc.webp
project_tags:
  - Electronics
  - Embedded
  - ESP32
description: "Discover microcontrollers, from their architecture to a multiplayer project, with the ESP32-S3 and Arduino-ESP32."
subtitle: From architecture to an embedded game

special_sections:
  - label: The course
    icon: fas fa-compass
    desc: "The session programme, what you are assessed on and the vocabulary of the course."
    items:
      - /workshops/microcontroleur/syllabus/
      - /workshops/microcontroleur/evaluation/
      - /workshops/microcontroleur/glossaire/
  - label: The project
    icon: fas fa-gamepad
    desc: "The brief of the multiplayer Snake project: requirements, deliverables and assessment."
    items:
      - /workshops/microcontroleur/projet-snake/
  - label: Slides
    icon: fas fa-chalkboard-teacher
    desc: "The slides of the three lectures and of the project kick-off, to be shown full screen."
    items:
      - /workshops/microcontroleur/slides/cm1-decouvrir-le-microcontroleur/
      - /workshops/microcontroleur/slides/cm2-entrees-et-sorties/
      - /workshops/microcontroleur/slides/cm3-bus-et-machine-a-etats/
      - /workshops/microcontroleur/slides/lancement-projet-snake/

concepts:
  - /workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/
  - /workshops/microcontroleur/concepts/du-materiel-au-logiciel/
  - /workshops/microcontroleur/concepts/architecture-microcontroleur/
  - /workshops/microcontroleur/concepts/gpio-monde-numerique/
  - /workshops/microcontroleur/concepts/adc-pwm/
  - /workshops/microcontroleur/concepts/bus-communication/
  - /workshops/microcontroleur/concepts/machine-etats-finis/
  - /workshops/microcontroleur/concepts/organiser-code-modules/
  - /docs/concepts/reseau-wifi-websocket/
  - /docs/concepts/capteurs/

tutorials:
  - /docs/tutorials/software/vscode-platformio/installation-vscode/
  - /docs/tutorials/software/vscode-platformio/installation-platformio/
  - /workshops/microcontroleur/tutorials/toolchain-blink/
  - /docs/tutorials/electronics/vscode-port-serie/
  - /workshops/microcontroleur/tutorials/entrees-boutons-joystick/
  - /docs/tutorials/software/kicad/installation-kicad/
  - /docs/tutorials/software/kicad/kicad-import-librairies/
  - /docs/tutorials/software/kicad/kicad-eeschema-bases/
  - /docs/tutorials/software/kicad/kicad-pcbnew-bases/
  - /workshops/microcontroleur/tutorials/conception-carte-kicad/
  - /workshops/microcontroleur/tutorials/souder-tester-carte/
  - /workshops/microcontroleur/tutorials/collisions-fsm-pong/
  - /docs/tutorials/electronics/esp32-wifi-websocket/
  - /docs/tutorials/electronics/esp32-ssd1306-oled/

how_to_guides:
  - /docs/how-to-guides/esp32-s3-carte-introuvable/
  - /docs/how-to-guides/ecran-tft-noir/
  - /docs/how-to-guides/deboguer-programme-embarque/

hardware:
  - /docs/references/hardware/xiao-esp32s3/
  - /docs/references/hardware/ecran-tft-spi-st7789/
  - /docs/references/hardware/module-joystick/
  - /docs/references/hardware/module-bouton/
  - /docs/references/hardware/module-buzzer/
  - /docs/references/machines/weller-wt-1010/

software:
  - /docs/references/software/platformIO/
  - /docs/references/software/kicad/
  - /docs/references/software/arduino-ide/

ressources:
  - /docs/references/others/esp32-s3-datasheet/
  - /docs/references/others/esp32-s3-manuel-reference/
  - /docs/references/others/xiao-esp32s3-wiki-seeed/
  - /docs/references/others/arduino-esp32-documentation/
  - /docs/references/others/adafruit-gfx-guide/
  - /docs/references/others/kicad-librairies-seeed/
  - /docs/references/others/kicad-librairies-sparkfun/
  - /docs/references/others/liaisons-series-passion-electronique/
  - /docs/references/others/mdn-websocket/
---

Welcome to the **Microcontrollers** course!

It takes you from the fundamental concepts of a microcontroller (architecture of a µC, GPIO, ADC, serial buses) to building a multiplayer embedded mini-game on the **ESP32-S3**, with Seeed Studio's [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/) board.

## Skills involved

- Understand the internal architecture of a microcontroller (CPU, memories, peripherals)
- Drive digital and analog inputs/outputs (GPIO, ADC, PWM)
- Communicate over the standard serial buses (UART, I2C, SPI)
- Structure an embedded program with a game loop and a finite state machine (FSM)
- Design a schematic in KiCad and solder a PCB
- Connect a microcontroller to a web browser over Wi-Fi (web server, WebSocket)

## Progression

| Phase | Time | Outcome |
|----|---|---|
| Lectures | 4.5 h | µC: architecture, GPIO, ADC/PWM, buses, development toolchain |
| Labs | 10.5 h | Kit modules on a breadboard, **board designed in KiCad then soldered**, **Pong** on the board (Lab 1: 1 h 30, Labs 2 to 4: 3 h each) |
| Project | 24 h, in pairs | **Multiplayer Snake** (console + browser) on the soldered board: see [the brief](/workshops/microcontroleur/projet-snake/) |

## Why this project?

The Game Boy style mini-game is the common thread of the course: simple to understand, rich to implement. The labs build the console itself: each module of the kit is first tested on a breadboard, then brought together on a board designed in KiCad and soldered, on which a first **Pong** runs. The project then introduces **Snake**, a new game mechanic, and adds asymmetric multiplayer in the browser. The finite state machine (FSM) used to handle the menu/game/game over screens directly prepares the network states of the project.
