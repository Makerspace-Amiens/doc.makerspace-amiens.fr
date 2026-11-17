---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Course assessment
subtitle: The labs and the board, then the Snake project
description: The assessment grid of the Microcontrollers course, between the checkpoints validated in the labs and the Snake project carried out in pairs.
author: Alban Petit

todo: 70
---

## What is assessed

The course is assessed in two parts: what you show during the **labs**, including the design and soldering of the board, and the **project** carried out in pairs.

| Part | Weight | What we look at |
|---|---|---|
| **Labs** | **30 %** | The checkpoints of each lab, validated during the session by the instructor, including the two validations of the board |
| **Project** | **70 %** | The game, the browser player, the code, the repo and the demonstration |

The project mark is a **pair mark**: both members get the same one. This is why each of you must be able to explain the whole project, including the part you did not code yourself.

## The labs (30 %)

Each lab ends with checkpoints, which the instructor validates **during the session**, on your setup or your board:

| Lab | Weight | What must work |
|---|---|---|
| Lab 1 | 5 % | The XIAO's LED blinks; the serial monitor displays the board's messages |
| Lab 2 | 5 % | The four modules of the kit work on a breadboard: a single message per button press, calibrated joystick (0 at rest, -1 / +1 at the end stops), buzzer that sounds, display that shows something; the test program brings the four together |
| Lab 3 | 10 % | The board's schematic passes **validation 1** and the routing **validation 2**; the design choices (protection of D6, I2C pull-ups, LED, decoupling) are justified in writing |
| Lab 4 | 10 % | The final board is neatly soldered and passes all the tests; the Pong can be played on it from the welcome screen to the end of the game, without reflashing |

A checkpoint not validated during the session can be validated at the start of the next one. The board validations must be obtained before Lab 4.

## The project (70 %)

| Criterion | Weight | What must show |
|---|---|---|
| **The game on the console** | 25 % | Requirements C1 to C8 of the [brief](/workshops/microcontroleur/projet-snake/) met during the demonstration |
| **The browser player** | 25 % | Requirements N1 to N7; the originality of the role, the balance between the two players, the real value of the interaction |
| **The code and its robustness** | 10 % | Modules, state machine, no `delay()` in the loop; disconnections and invalid messages handled, games played back to back without restarting the board |
| **The repo and the demonstration** | 10 % | Complete documentation (firmware, protocol, tests, logbook), smooth demonstration, clear answers to questions |

{% include message.html title="A demonstration must be prepared" message="The demonstration is done with what works, not with what will work. Keep a stable version (a tag) and rehearse the demonstration before the big day, including a browser disconnection." status="is-info" icon="fas fa-info-circle" %}

## The repo on the submission date

The project is assessed on **the state of your repo** on the submission date given at the start of the project, and on the demonstration. Everything in the repo on that date counts, history included: regular commits show steady work.

The expected content of each part is detailed in the Project Methodology course:

- [Documenting your code and firmware](/workshops/methodologie-de-projet/tutorials/documenter-code-firmware/)
- [Documenting tests and results](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/)
- [Keeping a logbook](/workshops/methodologie-de-projet/tutorials/journal-de-bord/)

Before the submission date, go through the [project closing checklist](/workshops/methodologie-de-projet/tutorials/checklist-cloture-projet/) with your partner.
