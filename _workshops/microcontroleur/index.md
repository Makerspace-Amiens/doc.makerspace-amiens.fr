---
title: Microcontrôleurs
layout: project-home
permalink: /workshops/microcontroleur/
type: workshop
kind: course
image: /workshops/microcontroleur/tutorials/toolchain-blink/uc.webp
project_slug: microcontroleur
project_image: /workshops/microcontroleur/tutorials/toolchain-blink/uc.webp
project_tags:
  - Électronique
  - Embarqué
  - ESP32
description: "Découvrir les microcontrôleurs de l'architecture jusqu'au projet multijoueur, avec l'ESP32-S3 et Arduino-ESP32."
subtitle: De l'architecture au jeu embarqué

special_sections:
  - label: Slides
    icon: fas fa-chalkboard-teacher
    desc: "Les supports des trois cours magistraux, à projeter en plein écran."
    items:
      - /workshops/microcontroleur/slides/cm1-decouvrir-le-microcontroleur/
      - /workshops/microcontroleur/slides/cm2-entrees-et-sorties/
      - /workshops/microcontroleur/slides/cm3-bus-et-machine-a-etats/

concepts:
  - /workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/
  - /workshops/microcontroleur/concepts/du-materiel-au-logiciel/
  - /workshops/microcontroleur/concepts/architecture-microcontroleur/
  - /workshops/microcontroleur/concepts/gpio-monde-numerique/
  - /workshops/microcontroleur/concepts/adc-pwm/
  - /workshops/microcontroleur/concepts/bus-communication/
  - /workshops/microcontroleur/concepts/machine-etats-finis/
  - /docs/concepts/capteurs/

tutorials:
  - /docs/tutorials/software/vscode-platformio/installation-vscode/
  - /docs/tutorials/software/vscode-platformio/installation-platformio/
  - /workshops/microcontroleur/tutorials/toolchain-blink/
  - /workshops/microcontroleur/tutorials/entrees-boutons-joystick/
  - /docs/tutorials/electronics/ecran-spi-game-loop/
  - /workshops/microcontroleur/tutorials/collisions-fsm-pong/
  - /docs/tutorials/electronics/vscode-port-serie/
  - /docs/tutorials/electronics/esp32-ssd1306-oled/

how_to_guides:

hardware:
  - /docs/references/hardware/esp32-s3-devkitc-1/
  - /docs/references/hardware/ecran-tft-spi-st7789/

software:
  - /docs/references/software/arduino-ide/
  - /docs/references/software/platformIO/

ressources:
---

Bienvenue dans l'atelier **Microcontrôleurs** !

Vous y trouverez les concepts fondamentaux d'un microcontrôleur (architecture d'un µC, GPIO, ADC, bus série) jusqu'à la réalisation d'un mini-jeu embarqué multijoueur sur **ESP32-S3**.

## Les compétences engagées

- Comprendre l'architecture interne d'un microcontrôleur (CPU, mémoires, périphériques)
- Piloter des entrées/sorties numériques et analogiques (GPIO, ADC, PWM)
- Communiquer sur les bus série standards (UART, I2C, SPI)
- Structurer un programme embarqué avec une game loop et une machine à états (FSM)
- Concevoir un schéma électronique sous KiCad et souder un PCB

## Progression

| Phase | Volume | Résultat |
|----|---|---|
| CM | 4,5h | µC : archi, GPIO, ADC/PWM, bus, chaîne de dev |
| TD | 10,5h | **Pong 2 joueurs** local sur ESP32-S3 + écran SPI |
| Projet | binômes | **Snake multijoueur** (console + navigateur) + PCB KiCad soudé |

## Pourquoi ce projet ?

Le mini-jeu type Gameboy est le fil rouge de l'atelier : simple à comprendre, riche à implémenter. Les TD construisent progressivement **Pong** (un périphérique ajouté par séance) le projet introduit **Snake** sur une mécanique neuve, et ajoute le multijoueur asymétrique dans le navigateur. La machine à états finis (FSM), pour gérer les écrans menu/partie/fin, prépare directement les états réseau du projet.
