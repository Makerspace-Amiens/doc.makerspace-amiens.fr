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
  - Système embarqué
  - Intelligence artificielle
  - ESP32
description: "De l’intelligence artificielle au TinyML : analyser et prétraiter un jeu de données existant, entraîner un modèle d’IA, puis le déployer sur une carte XIAO ESP32S3."
subtitle: L'intelligence artificielle dans quelques centaines de kilo-octets

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
  - /workshops/tinyml/tutorials/installation-vscode/
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

Un microcontrôleur peut faire bien plus que suivre des règles écrites à la main : il peut reconnaître un geste, un animal, un mot ou un son à partir de données provenant de capteurs ou d’images. Dans cet atelier, vous allez utiliser un jeu de données déjà disponible, le préparer, entraîner un petit modèle sur votre ordinateur, puis le déployer sur une carte XIAO ESP32S3, sans connexion à Internet.

## Votre parcours d’apprentissage

- Découvrir les notions d’intelligence artificielle, d’apprentissage automatique et de TinyML.
- Explorer et préparer un jeu de données existant pour entraîner le modèle.
- Entraîner et évaluer le modèle sur un ordinateur.
- Convertir et optimiser le modèle pour une carte aux ressources limitées.
- Intégrer le modèle dans la XIAO ESP32S3 connectée à une caméra.
- Capturer une image, la prétraiter au format attendu par le modèle, effectuer la prédiction sur la carte, puis afficher le résultat sur une page web.

À la fin de l’atelier, vous aurez suivi les principales étapes d’un projet TinyML. Vous pourrez ainsi comprendre comment un modèle d’IA peut fonctionner dans un petit objet connecté, rapidement et de manière autonome.

## Pourquoi cet atelier ?

L’intelligence artificielle ne fonctionne pas uniquement dans les centres de données. On la trouve aussi dans des montres, des capteurs industriels et des jouets, lorsque l’envoi de chaque donnée vers un serveur serait trop lent, trop coûteux ou poserait des enjeux de confidentialité.

Faire fonctionner un modèle sur un microcontrôleur aux ressources limitées demande de comprendre son fonctionnement et de mesurer l’impact de chaque choix : taille du modèle, mémoire utilisée et rapidité des prédictions.
