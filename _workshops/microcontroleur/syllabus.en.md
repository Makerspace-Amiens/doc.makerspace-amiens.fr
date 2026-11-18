---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Course syllabus
subtitle: Objectives, organisation and session plan
description: What the Microcontrollers course teaches you, how it is organised, and what happens in each session, from the lectures to the Snake project.
author: Alban Petit

todo: 80
---

## In short

| | |
|---|---|
| **Audience** | Students new to embedded programming; some basics of C or of programming are enough |
| **Time** | 39 h: 4 h 30 of lectures, 10 h 30 of labs, about 24 h of project |
| **Format** | Short lectures, labs where everyone tests the modules of the kit, designs their board, solders it and runs a Pong on it, then a project in pairs |
| **Equipment** | A PC with VSCode, PlatformIO and KiCad; the module kit (Lab 2); the console board, handed out in Lab 4 |
| **Assessment** | The lab checkpoints and the Snake project: see [Course assessment](/workshops/microcontroleur/evaluation/) |

## Objectives

By the end of the course, you will be able to:

- **Explain what a microcontroller is**: its architecture (CPU, memories, peripherals) and the path from the code to the chip
- **Test an unknown module** and drive inputs and outputs: GPIO, ADC, PWM, read cleanly (debouncing, calibration)
- **Make components talk to each other**: choose and wire a serial bus (UART, I2C, SPI), drive a display
- **Structure an embedded program**: a game loop that never blocks, a state machine, code split into modules
- **Design a printed circuit board** in KiCad, from the schematic to the routing, then solder and test a board
- **Connect a microcontroller to a web browser**: Wi-Fi access point, web server, WebSocket
- **Run a project in pairs**: learn on your own, make choices and document them

## Organisation

The course has three phases, each preparing the next one:

| Phase | Time | Format | Outcome |
|---|---|---|---|
| **Lectures** (Lecture 1 to 3) | 3 × 1 h 30 | In a lecture hall, no hands-on work | The vocabulary and the concepts |
| **Labs** (Lab 1 to 4) | 1 h 30 + 3 × 3 h | In a classroom, everyone on their own setup | The modules tested, **the board designed and soldered**, a **Pong** running on it |
| **Project** | About 24 h | In pairs, supervised autonomy | A **multiplayer Snake** on the soldered board |

During the labs, everyone builds their console step by step, following the tutorials: first the modules on a breadboard, then the board, and finally a first game. During the project there are no more step-by-step guides: you design your game based on what the labs taught you.

{% include message.html title="Prepare your PC before Lab 1" message="Installing VSCode and PlatformIO, and above all the first download of the ESP32 platform, take time. Do them at home before Lab 1: see [Install VSCode](/docs/tutorials/software/vscode-platformio/installation-vscode/) and [Install PlatformIO](/docs/tutorials/software/vscode-platformio/installation-platformio/). Before Lab 3, also install [KiCad](/docs/tutorials/software/kicad/installation-kicad/) and go through its basics." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Session plan

### Lectures (4 h 30)

The three lectures come **first**, one after the other: they lay down all the vocabulary and concepts that the labs then put into practice.

| Session | Duration | Content | Materials |
|---|---|---|---|
| **Lecture 1** | 1 h 30 | What a microcontroller is, its architecture, the chain from the code to the chip | [Lecture 1 slides](/workshops/microcontroleur/slides/cm1-decouvrir-le-microcontroleur/) |
| **Lecture 2** | 1 h 30 | Logic levels and datasheet, GPIO, driving a load with a MOSFET, pull-up, debouncing, interrupts, ADC and PWM | [Lecture 2 slides](/workshops/microcontroleur/slides/cm2-entrees-et-sorties/) |
| **Lecture 3** | 1 h 30 | UART, I2C and SPI buses, game loop, state machine | [Lecture 3 slides](/workshops/microcontroleur/slides/cm3-bus-et-machine-a-etats/) |

### Labs (10 h 30)

The labs come **after** the three lectures, and build the console in three stages: test the modules on a breadboard, design the board that brings them together, then solder it and run a first game on it. Before each lab, reread the concepts it puts into practice: its prerequisites are listed at the top of the tutorial.

| Session | Duration | Content | Concepts used | Materials |
|---|---|---|---|---|
| **Lab 1** | 1 h 30 | Create the project, flash the first program, read the serial port | Lecture 1 | [Checking the toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/), [Serial port](/docs/tutorials/electronics/vscode-port-serie/) |
| **Lab 2** | 3 h | Test the modules of the kit on a breadboard: button, joystick, buzzer, display | Lectures 2 and 3 | [The modules of the kit](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/) |
| **Lab 3** | 3 h | Design the board in KiCad: schematic, **validation 1**, routing, **validation 2** | Lectures 2 and 3 | [Designing the console board](/workshops/microcontroleur/tutorials/conception-carte-kicad/) |
| **Lab 4** | 3 h | Solder and test the final board provided (about 1 h 30), then write a one-player Pong on it | Lecture 3 | [Soldering and testing the board](/workshops/microcontroleur/tutorials/souder-tester-carte/), [Pong on the console](/workshops/microcontroleur/tutorials/collisions-fsm-pong/) |

Each lab ends with **checkpoints** that the instructor validates during the session: they count towards the assessment. An unfinished lab must be caught up before the next one, since each builds on the previous one. In particular, the routing must be validated before Lab 4, where you are given the final board.

### Project (about 24 h)

The project starts on the board soldered in Lab 4, with the Pong as a starting point. The breakdown below follows the milestones of the [project brief](/workshops/microcontroleur/projet-snake/); it may change depending on how the pairs progress.

| Session | Duration | Content | Target milestone |
|---|---|---|---|
| **P1** | 3 h | Project kick-off, pairs, repo; the Snake and the role of player 2 on paper | |
| **P2** | 3 h | Single-player Snake: grid, movement, direction | |
| **P3** | 3 h | Single-player Snake: food, growth, collisions, state machine | 1. Single-player Snake |
| **P4** | 3 h | The network: access point, web page, WebSocket; the written protocol | 2. Network skeleton |
| **P5** | 3 h | Player 2: their page and their role | |
| **P6** | 3 h | Player 2 integrated into the game, playable end to end | 3. Player 2 |
| **P7** | 3 h | Robustness: disconnections, invalid messages, back-to-back games; the tests | 4. Robustness |
| **P8** | 3 h | Finishing the repo, rehearsal, **demonstration** | 5. Documentation and demo |

Materials: the [project kick-off slides](/workshops/microcontroleur/slides/lancement-projet-snake/), the [brief](/workshops/microcontroleur/projet-snake/), the concept [Wi-Fi, HTTP and WebSocket](/docs/concepts/reseau-wifi-websocket/) and the tutorial [ESP32, Wi-Fi and WebSocket](/docs/tutorials/electronics/esp32-wifi-websocket/).

{% include message.html title="Provisional plan" message="The pace depends on your progress: a missed milestone must be caught up before the next one. The dates of the sessions and of the demonstration are given to you at the start of the project." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Between sessions

- **During the labs**: finish the checkpoints not yet validated, reread the concept of the next session.
- **During the project**:
  - one logbook entry per session (what was done, why, what is left);
  - an up-to-date repo: commit and push at the end of each work session;
  - the pair's issues kept up to date.

## Resources

- The **concepts** of the course, to read before the matching lecture or lab, on the [course page](/workshops/microcontroleur/).
- The **troubleshooting guides**: [Recovering an ESP32-S3 board that no longer shows up](/docs/how-to-guides/esp32-s3-carte-introuvable/) and [Troubleshooting an SPI TFT display that shows nothing](/docs/how-to-guides/ecran-tft-noir/).
- The [Project Methodology](/workshops/methodologie-de-projet/) course for the repo, the logbook and the project documentation.
