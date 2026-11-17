---
layout: documentation
hide_hero: true
hero_image: spectre.svg
image: spectre.svg
component_toc: true
doc_header: true

title: Au-delà du microcontrôleur
subtitle: "MPU, CPU, GPU, TPU, NPU, FPGA, ASIC : la carte des puces de calcul"
description: Un tour d'horizon des puces de calcul, du microcontrôleur de l'atelier jusqu'aux GPU, accélérateurs d'IA, FPGA et circuits sur mesure, et de ce qui les distingue.
author: Alban Petit

difficulty: 1
todo: 90

prerequisites:
  - label: Qu'est-ce qu'un microcontrôleur ?
    link: /workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/
  - label: Architecture d'un microcontrôleur
    link: /workshops/microcontroleur/concepts/architecture-microcontroleur/
---

## Un océan de puces

Dans cet atelier, tu apprends à maîtriser un microcontrôleur : ses broches, ses bus, son horloge, sa boucle. C'est une porte d'entrée, pas une destination. Derrière lui s'étend toute une famille de puces de calcul, chacune taillée pour un usage : faire tourner Linux, entraîner une IA, traiter un signal radio, ou exécuter une seule tâche le plus vite possible.

Cette page en dresse la carte. Tu n'as pas besoin d'en retenir les chiffres : ce sont des ordres de grandeur, pour fixer les idées. Retiens plutôt le fil conducteur : **plus une puce est spécialisée, plus elle est efficace, et moins elle est flexible**.

![Les puces de calcul de la plus flexible à la plus efficace : les généralistes MCU, MPU et CPU, le calcul massif DSP et GPU, le FPGA reconfigurable, les accélérateurs d'IA NPU et TPU, et l'ASIC sur mesure ; le MCU est marqué vous êtes ici](spectre.svg)

## Ton ESP32-S3, tu n'en as vu qu'une partie

L'océan commence sous tes pieds. La console de l'atelier cache bien plus que ce que les TD utilisent :

| Ressource | Ce qu'elle permet |
|---|---|
| **Le second cœur** | L'ESP32-S3 a deux cœurs Xtensa à 240 MHz ; `loop()` n'en occupe qu'un. L'autre peut gérer le réseau ou le son en parallèle. |
| **Le DMA** (*Direct Memory Access*) | Le matériel copie des données (vers l'écran SPI, depuis un micro) pendant que le programme continue. |
| **Le coprocesseur ULP** (*Ultra Low Power*) | Un petit cœur RISC-V qui surveille un capteur pendant que le reste de la puce dort, pour quelques µA. |
| **Les instructions vectorielles** | Elles traitent plusieurs nombres d'un coup, et accélèrent les réseaux de neurones (bibliothèques ESP-NN et ESP-DL d'Espressif). |
| **La cryptographie matérielle** | Chiffrement AES, empreintes SHA, signatures RSA, calculés par des circuits dédiés. |
| **Caméra, USB OTG, tactile** | Une interface caméra, un vrai port USB (clavier, disque...), des entrées tactiles capacitives. |

## La famille des microcontrôleurs

Et l'ESP32-S3 n'est qu'un microcontrôleur parmi des milliers. Quelques repères :

| Puce | Ce qui la distingue |
|---|---|
| **ATmega328P** (Arduino Uno) | 8 bits, 16 MHz, 2 Ko de RAM : le point de départ historique de la communauté Arduino. |
| **ESP32-S3** (la console) | 32 bits, 2 cœurs à 240 MHz, 512 Ko de RAM, Wi-Fi et Bluetooth. |
| **RP2040, RP2350** (Raspberry Pi Pico) | Des blocs **PIO** : de petites machines à états matérielles, programmables, qui permettent d'inventer ses propres protocoles (un écran exotique, une sortie vidéo...) sans charger le processeur. |
| **STM32H7** (STMicroelectronics) | Un Cortex-M7 jusqu'à 550 MHz, pour l'audio, le contrôle moteur, l'industrie. |
| **STM32N6, MAX78000** | Des microcontrôleurs avec un **accélérateur de réseaux de neurones** intégré, pour la vision ou la reconnaissance vocale sur pile. |

Tous gardent ce qui fait un microcontrôleur : la mémoire et les périphériques sont sur la puce, il n'y a pas de système d'exploitation (ou un noyau temps réel minimal comme FreeRTOS), et le programme réagit en quelques microsecondes.

## Du microcontrôleur au processeur

### Les MPU : faire tourner Linux

Un **microprocesseur d'application** (MPU) franchit un cap : il a besoin d'une **RAM externe** (des Go au lieu de quelques centaines de Ko), et il possède une **MMU** (*Memory Management Unit*), qui isole les programmes les uns des autres. C'est elle qui lui permet de faire tourner un vrai système d'exploitation : Linux, Android.

La puce du **Raspberry Pi 5** en est un exemple : quatre cœurs Cortex-A76 à 2,4 GHz. En échange, un MPU démarre en plusieurs secondes, consomme des watts, et ne garantit plus de réagir à la microseconde près : le système d'exploitation décide quand ton programme s'exécute.

Certaines puces réunissent les deux mondes : le **STM32MP1** associe un cœur Cortex-A7 qui fait tourner Linux (interface, réseau) à un cœur Cortex-M4 qui garde le temps réel (moteurs, capteurs).

### Les SoC de smartphone

Un *System on Chip* de smartphone (Apple A, Qualcomm Snapdragon) rassemble tout sur une seule puce : des cœurs CPU, un GPU, un NPU, un processeur d'image pour l'appareil photo, un modem. C'est en quelque sorte la synthèse de toute cette page, dans un centimètre carré.

### Les CPU : les généralistes

Les **processeurs** des ordinateurs et des serveurs (x86 chez Intel et AMD, ARM chez Apple) savent tout faire, mais rien de façon optimale. Leur force est la flexibilité : n'importe quel programme y tourne. Un processeur de serveur comme l'AMD EPYC monte jusqu'à 192 cœurs, pour environ 500 W.

## Calculer en masse : DSP et GPU

### Les DSP

Un **processeur de traitement du signal** (*Digital Signal Processor*) est optimisé pour une opération : multiplier deux nombres et ajouter le résultat à un total, en un seul cycle, des millions de fois par seconde. C'est le cœur de tout filtre numérique. On les trouve dans les casques à réduction de bruit, les radars, les modems. Les Cortex-M4 et M7 en reprennent déjà les instructions.

### Les GPU

Un **processeur graphique** prend le contre-pied du CPU : au lieu de quelques cœurs puissants, des **milliers de cœurs simples**, qui font tous le même calcul sur des données différentes. Parfait pour calculer la couleur de millions de pixels, et tout aussi parfait pour les réseaux de neurones, d'où leur adoption massive par l'IA. Une NVIDIA H100 compte environ 17 000 cœurs et consomme 700 W.

## Accélérer l'IA : NPU et TPU

Un réseau de neurones passe l'essentiel de son temps à **multiplier des matrices**. Des puces ne font plus que cela, avec une efficacité inaccessible aux processeurs généralistes. On mesure leur puissance en **TOPS** : mille milliards d'opérations par seconde.

- Le **TPU** (*Tensor Processing Unit*) de Google est un circuit dédié à ces calculs. Il équipe les datacenters de Google, et existe en miniature : l'**Edge TPU** de la gamme Coral fournit 4 TOPS pour 2 W, sur une clé USB.
- Un **NPU** (*Neural Processing Unit*) est le même principe, intégré à une puce plus large : le Neural Engine des puces Apple, les NPU des PC récents, l'accélérateur du STM32N6.

L'IA ne se cantonne donc plus aux serveurs : elle descend jusqu'aux microcontrôleurs. C'est le sujet de l'[atelier TinyML](/workshops/tinyml/).

## Recâbler la puce : le FPGA

Avec un **FPGA** (*Field-Programmable Gate Array*), on ne programme plus un processeur : on **décrit un circuit**, dans un langage de description matérielle (Verilog, VHDL). La puce, faite de milliers de blocs logiques reliés par des interconnexions programmables, se reconfigure pour **devenir** ce circuit.

- Tout s'exécute **en parallèle** : dix calculs indépendants occupent dix morceaux du circuit, en même temps.
- Le timing est **déterministe**, réglé à la nanoseconde près par l'horloge.
- Une machine à états, comme celles du cours, y devient un vrai circuit, fait de bascules et de portes logiques.

La gamme est large : du **Lattice iCE40**, qui coûte quelques euros et se programme avec des outils entièrement libres (Yosys, nextpnr), jusqu'aux AMD Versal des télécoms. Les **Zynq** d'AMD associent des cœurs ARM et un FPGA sur la même puce. On s'en sert pour prototyper une puce avant de la faire fabriquer, pour la radio logicielle, le traitement vidéo, ou partout où il faut réagir plus vite qu'un processeur.

## Graver sa propre puce : l'ASIC

Un **ASIC** (*Application-Specific Integrated Circuit*) est l'aboutissement de la spécialisation : un circuit conçu pour **une seule tâche** et gravé une fois pour toutes dans le silicium. Il est imbattable en vitesse et en consommation, mais impossible à modifier, et sa conception coûte cher. Le TPU de Google en est un, comme les puces des mineurs de Bitcoin, ou les contrôleurs cachés dans un chargeur ou une souris.

Faire fabriquer une puce coûte habituellement des millions d'euros. Des projets éducatifs comme **Tiny Tapeout** contournent le problème en mutualisant la fabrication : ton petit circuit, décrit en Verilog, est gravé sur la même puce que des centaines d'autres, pour quelques centaines d'euros.

## Flexibilité contre efficacité

| Famille | Flexibilité | Efficacité | Consommation (ordre de grandeur) |
|---|---|---|---|
| MCU, MPU, CPU | ★★★★★ | ★ | De quelques µW (MCU en veille) à 500 W (CPU de serveur) |
| DSP, GPU | ★★★ | ★★★ | Jusqu'à 700 W pour un GPU de datacenter |
| FPGA | ★★★ (on recâble) | ★★★★ | De quelques mW à quelques dizaines de W |
| NPU, TPU, ASIC | ★ | ★★★★★ | 2 W pour 4 TOPS (Edge TPU), jusqu'aux fermes de datacenter |

Choisir une puce, c'est placer le curseur entre ces deux extrêmes, exactement comme tu as appris à choisir un bus : il n'y a pas de meilleure puce, seulement une puce adaptée à un besoin.

## Et demain ?

- **Les puces neuromorphiques** (Intel Loihi) imitent le fonctionnement des neurones : elles calculent par impulsions, seulement quand quelque chose change, pour une consommation minime.
- **Les processeurs quantiques** manipulent des qubits, pour certains problèmes hors de portée des puces classiques (chimie, optimisation, cryptographie).
- **Le calcul photonique** utilise la lumière plutôt que les électrons pour certaines opérations, notamment les multiplications de matrices de l'IA.
- **RISC-V**, enfin, est un jeu d'instructions **libre** : n'importe qui peut concevoir un processeur qui l'exécute, sans licence. On le retrouve déjà partout, du coprocesseur ULP de ton ESP32-S3 à l'ESP32-C3, jusqu'aux cœurs que l'on implante soi-même dans un FPGA.

## Et tu peux y toucher

| Pour découvrir... | Commencer par |
|---|---|
| Linux embarqué | Un Raspberry Pi |
| L'IA embarquée | Ton ESP32-S3 avec ESP-DL, ou une clé Coral ; l'[atelier TinyML](/workshops/tinyml/) |
| Le FPGA | Une petite carte à base de Lattice iCE40, avec les outils libres |
| La conception de puces | Tiny Tapeout, en ligne |

## Résumé

- Le microcontrôleur n'est qu'une famille de puces de calcul parmi d'autres, et même l'ESP32-S3 de l'atelier offre bien plus que ce que les TD utilisent.
- **MPU** : RAM externe et MMU, pour faire tourner Linux. **CPU** : le généraliste des ordinateurs et des serveurs.
- **DSP** et **GPU** : le calcul massif, un type d'opération répété ou parallélisé à grande échelle.
- **NPU** et **TPU** : des accélérateurs dédiés aux multiplications de matrices des réseaux de neurones.
- **FPGA** : on décrit un circuit, la puce se reconfigure pour le devenir. **ASIC** : un circuit gravé pour une seule tâche.
- Plus une puce est spécialisée, plus elle est efficace, et moins elle est flexible.
- Le socle de cet atelier (registres, bus, horloge, machines à états) se retrouve dans toutes ces puces.
