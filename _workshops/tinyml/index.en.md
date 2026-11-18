---
title: TinyML
lang: en
layout: project-home
permalink: /workshops/tinyml/
type: workshop
kind: course
image: /workshops/microcontroleur/tutorials/toolchain-blink/uc.webp
project_slug: tinyml
project_image: /workshops/microcontroleur/tutorials/toolchain-blink/uc.webp
project_tags:
  - Embedded systems
  - Artificial intelligence
  - ESP32
description: "From artificial intelligence to TinyML: analyse and preprocess an existing dataset, train an AI model, then deploy it on a XIAO ESP32S3 board."
subtitle: Artificial intelligence in a few hundred kilobytes

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
  - /workshops/tinyml/tutorials/environnement-et-outils/
  - /workshops/tinyml/tutorials/probleme-et-donnees/
  - /workshops/tinyml/tutorials/pretraitement/
  - /workshops/tinyml/tutorials/modelisation/
  - /workshops/tinyml/tutorials/quantification/


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

Welcome to the **TinyML** workshop!

A microcontroller can do much more than follow hand-written rules: it can recognise a gesture, an animal, a word or a sound from sensor data or images. In this workshop, you will take an existing dataset, prepare it, train a small model on your computer, then deploy it on a XIAO ESP32S3 board, with no Internet connection.

## Your learning path

- Discover the notions of artificial intelligence, machine learning and TinyML.
- Explore and prepare an existing dataset to train the model.
- Train and evaluate the model on a computer.
- Convert and optimise the model for a board with limited resources.
- Integrate the model into the XIAO ESP32S3 connected to a camera.
- Capture an image, preprocess it into the format the model expects, run the prediction on the board, then show the result on a web page.

By the end of the workshop, you will have gone through the main stages of a TinyML project. You will understand how an AI model can run in a small connected object, quickly and autonomously.

## Why this workshop?

Artificial intelligence does not only run in data centres. It is also found in watches, industrial sensors and toys, where sending every piece of data to a server would be too slow or too costly, or would raise privacy issues.

Running a model on a microcontroller with limited resources requires understanding how it works and measuring the impact of every choice: model size, memory used and prediction speed.
