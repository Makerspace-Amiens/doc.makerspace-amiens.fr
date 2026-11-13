---
title: TinyML
layout: project-home
permalink: /workshops/tinyml/
type: workshop
kind: course
image: /workshops/microcontroleur/tutorials/toolchain-blink/uc.webp
project_slug: tinyml
project_image: /workshops/microcontroleur/tutorials/toolchain-blink/uc.webp
project_tags:
  - Embarqué
  - Intelligence artificielle
  - ESP32
description: "Faire tourner un modèle d'apprentissage automatique sur un microcontrôleur : collecter des données, entraîner un modèle, puis le déployer sur une XIAO ESP32S3."
subtitle: L'apprentissage automatique dans quelques centaines de kilo-octets

prerequisites:
  - /workshops/microcontroleur/

concepts:
  - /workshops/tinyml/concepts/qu-est-ce-que-le-tinyml/
  - /workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/
  - /workshops/microcontroleur/concepts/architecture-microcontroleur/
  - /workshops/microcontroleur/concepts/du-materiel-au-logiciel/
  - /workshops/microcontroleur/concepts/adc-pwm/
  - /workshops/microcontroleur/concepts/bus-communication/
  - /workshops/microcontroleur/concepts/organiser-code-modules/
  - /docs/concepts/capteurs/

tutorials:
  - /docs/tutorials/software/vscode-platformio/installation-vscode/
  - /docs/tutorials/software/vscode-platformio/installation-platformio/
  - /workshops/microcontroleur/tutorials/toolchain-blink/
  - /docs/tutorials/electronics/vscode-port-serie/
  - /workshops/tinyml/tutorials/collecter-donnees-capteur/

how_to_guides:
  - /workshops/tinyml/how-to-guides/mesurer-memoire-temps-inference/
  - /docs/how-to-guides/esp32-s3-carte-introuvable/
  - /docs/how-to-guides/deboguer-programme-embarque/

hardware:
  - /docs/references/hardware/xiao-esp32s3/

software:
  - /docs/references/software/platformIO/

ressources:
  - /docs/references/others/xiao-esp32s3-wiki-seeed/
  - /docs/references/others/esp32-s3-datasheet/
  - /docs/references/others/arduino-esp32-documentation/
---

Bienvenue dans l'atelier **TinyML** !

Un microcontrôleur peut faire plus que suivre des règles écrites à la main : il peut **reconnaître** un geste, un mot ou un son à partir de ce que mesurent ses capteurs. Dans cet atelier, vous collectez vos propres données, entraînez un petit modèle sur votre ordinateur, puis le faites tourner sur une XIAO ESP32S3, sans connexion à Internet.

## Ce que vous allez apprendre

- distinguer un programme écrit à la main d'un modèle **entraîné** sur des exemples ;
- collecter et étiqueter des données de capteur depuis le port série ;
- entraîner un modèle de classification, puis le réduire pour qu'il tienne dans la mémoire d'un microcontrôleur (quantification) ;
- déployer ce modèle avec PlatformIO et mesurer ce qu'il coûte : mémoire, temps d'inférence, précision ;
- relier la prédiction du modèle à une action : une LED, un écran, un message.

## Le parcours

| Étape | Contenu | Type |
|---|---|---|
| 1. Préparer les outils | VSCode, PlatformIO, la XIAO et le port série, déjà vus dans l'atelier Microcontrôleurs | Tutoriels existants |
| 2. [Qu'est-ce que le TinyML ?](/workshops/tinyml/concepts/qu-est-ce-que-le-tinyml/) | Apprentissage et inférence, ce qu'un microcontrôleur peut faire tourner, les contraintes de mémoire et d'énergie | Concept |
| 3. [Collecter des données](/workshops/tinyml/tutorials/collecter-donnees-capteur/) | Lire un capteur, envoyer des mesures au PC, constituer un jeu de données étiqueté | Tutoriel |
| 4. Entraîner un modèle | Entraîner et évaluer un classifieur, puis le quantifier | Tutoriel, à venir |
| 5. Déployer sur la XIAO | Intégrer le modèle dans un projet PlatformIO et lancer l'inférence | Tutoriel, à venir |
| 6. [Mesurer et optimiser](/workshops/tinyml/how-to-guides/mesurer-memoire-temps-inference/) | Mémoire, latence, précision : trouver le bon compromis | Guide pratique |
| 7. Mini-projet | Une application complète, de la donnée à l'action | Projet, à venir |

## Pourquoi cet atelier ?

L'intelligence artificielle ne vit pas que dans des centres de données : elle se glisse dans des montres, des capteurs industriels, des jouets, là où envoyer chaque mesure vers un serveur serait trop lent, trop coûteux ou contraire au respect de la vie privée. Faire tourner un modèle dans quelques centaines de kilo-octets oblige à comprendre ce qu'il fait vraiment, et à mesurer le prix de chaque choix.

Cet atelier prolonge l'atelier [Microcontrôleurs](/workshops/microcontroleur/) : la toolchain, la XIAO ESP32S3, le port série et l'organisation du code en modules y sont acquis, et servent ici de socle.
