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
  - label: L'atelier
    icon: fas fa-compass
    desc: "Le programme des séances et ce sur quoi vous êtes évalués."
    items:
      - /workshops/microcontroleur/syllabus/
      - /workshops/microcontroleur/evaluation/
  - label: Le projet
    icon: fas fa-gamepad
    desc: "L'énoncé du projet Snake multijoueur : exigences, livrables et évaluation."
    items:
      - /workshops/microcontroleur/projet-snake/
  - label: Slides
    icon: fas fa-chalkboard-teacher
    desc: "Les supports des trois cours magistraux et du lancement du projet, à projeter en plein écran."
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

hardware:
  - /docs/references/hardware/xiao-esp32s3/
  - /docs/references/hardware/ecran-tft-spi-st7789/
  - /docs/references/machines/weller-wt-1010/

software:
  - /docs/references/software/arduino-ide/
  - /docs/references/software/platformIO/

ressources:
---

Bienvenue dans l'atelier **Microcontrôleurs** !

Vous y trouverez les concepts fondamentaux d'un microcontrôleur (architecture d'un µC, GPIO, ADC, bus série) jusqu'à la réalisation d'un mini-jeu embarqué multijoueur sur **ESP32-S3**, avec la carte [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/) de Seeed Studio.

## Les compétences engagées

- Comprendre l'architecture interne d'un microcontrôleur (CPU, mémoires, périphériques)
- Piloter des entrées/sorties numériques et analogiques (GPIO, ADC, PWM)
- Communiquer sur les bus série standards (UART, I2C, SPI)
- Structurer un programme embarqué avec une game loop et une machine à états (FSM)
- Concevoir un schéma électronique sous KiCad et souder un PCB
- Relier un microcontrôleur à un navigateur en Wi-Fi (serveur web, WebSocket)

## Progression

| Phase | Volume | Résultat |
|----|---|---|
| CM | 4,5h | µC : archi, GPIO, ADC/PWM, bus, chaîne de dev |
| TD | 10,5h | Modules de la malette sur breadboard, **carte conçue sous KiCad puis soudée**, **Pong** sur la carte (TD1 : 1h30, TD2 à TD4 : 3h chacun) |
| Projet | 24h, en binôme | **Snake multijoueur** (console + navigateur) sur la carte soudée : voir [l'énoncé](/workshops/microcontroleur/projet-snake/) |

## Pourquoi ce projet ?

Le mini-jeu façon Game Boy est le fil rouge de l'atelier : simple à comprendre, riche à implémenter. Les TD construisent la console elle-même : chaque module de la malette est d'abord testé sur breadboard, puis réuni sur une carte conçue sous KiCad et soudée, sur laquelle tourne un premier **Pong**. Le projet introduit ensuite **Snake** sur une mécanique neuve, et ajoute le multijoueur asymétrique dans le navigateur. La machine à états finis (FSM), pour gérer les écrans menu/partie/fin, prépare directement les états réseau du projet.
