---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: Syllabus de l'atelier
subtitle: Objectifs, organisation et déroulé des séances
description: Ce que l'atelier Microcontrôleurs vous apprend, comment il est organisé, et ce qui se passe à chaque séance, des cours au projet Snake.
author: Alban Petit

todo: 80
---

## En bref

| | |
|---|---|
| **Public** | Étudiants débutants en programmation embarquée ; quelques bases de C ou de programmation suffisent |
| **Volume** | 39 h : 4 h 30 de cours (CM), 10 h 30 de TD, environ 24 h de projet |
| **Format** | Des cours courts, des TD où chacun teste les modules de la mallette, conçoit sa carte, la soude et y fait tourner un Pong, puis un projet en binôme |
| **Matériel** | Un PC avec VSCode, PlatformIO et KiCad ; la mallette de modules (TD2) ; la carte de la console, fournie au TD4 |
| **Évaluation** | Les checkpoints des TD et le projet Snake : voir [Évaluation de l'atelier](/workshops/microcontroleur/evaluation/) |

## Objectifs

À la fin de l'atelier, vous saurez :

- **Expliquer ce qu'est un microcontrôleur** : son architecture (CPU, mémoires, périphériques) et le chemin du code jusqu'à la puce
- **Tester un module inconnu** et piloter des entrées et des sorties : GPIO, ADC, PWM, lues proprement (anti-rebond, calibration)
- **Faire dialoguer des composants** : choisir et câbler un bus série (UART, I2C, SPI), piloter un écran
- **Structurer un programme embarqué** : une game loop qui ne bloque jamais, une machine à états, un code découpé en modules
- **Concevoir un circuit imprimé** sous KiCad, du schéma au routage, puis souder et tester une carte
- **Relier un microcontrôleur à un navigateur** : point d'accès Wi-Fi, serveur web, WebSocket
- **Mener un projet en binôme** : se former en autonomie, faire des choix et les documenter

## Organisation

L'atelier suit trois phases, chacune préparant la suivante :

| Phase | Volume | Format | Résultat |
|---|---|---|---|
| **Cours** (CM1 à CM3) | 3 × 1 h 30 | En amphithéâtre, sans manipulation | Le vocabulaire et les concepts |
| **TD** (TD1 à TD4) | 1 h 30 + 3 × 3 h | En salle, chacun sur son montage | Les modules testés, **la carte conçue et soudée**, un **Pong** qui y tourne |
| **Projet** | Environ 24 h | En binôme, en autonomie encadrée | Un **Snake multijoueur** sur la carte soudée |

Pendant les TD, chacun construit sa console pas à pas, en suivant les tutoriels : d'abord les modules sur breadboard, puis la carte, enfin un premier jeu. Pendant le projet, il n'y a plus de pas à pas : vous concevez votre jeu en vous appuyant sur ce que les TD vous ont appris.

{% include message.html title="Préparez votre PC avant le TD1" message="L'installation de VSCode et de PlatformIO, et surtout le premier téléchargement de la plateforme ESP32, prennent du temps. Faites-les chez vous avant le TD1 : voir [Installer VSCode](/docs/tutorials/software/vscode-platformio/installation-vscode/) et [Installer PlatformIO](/docs/tutorials/software/vscode-platformio/installation-platformio/). Avant le TD3, installez aussi [KiCad](/docs/tutorials/software/kicad/installation-kicad/) et parcourez ses bases." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Déroulé des séances

### Cours (4 h 30)

Les trois cours ont lieu **en premier**, à la suite : ils posent tout le vocabulaire et les concepts que les TD mettent ensuite en pratique.

| Séance | Durée | Contenu | Supports |
|---|---|---|---|
| **CM1** | 1 h 30 | Ce qu'est un microcontrôleur, son architecture, la chaîne du code à la puce | [Slides CM1](/workshops/microcontroleur/slides/cm1-decouvrir-le-microcontroleur/) |
| **CM2** | 1 h 30 | GPIO, niveaux logiques, pull-up, anti-rebond, ADC et PWM | [Slides CM2](/workshops/microcontroleur/slides/cm2-entrees-et-sorties/) |
| **CM3** | 1 h 30 | Bus UART, I2C et SPI, game loop, machine à états | [Slides CM3](/workshops/microcontroleur/slides/cm3-bus-et-machine-a-etats/) |

### TD (10 h 30)

Les TD viennent **après** les trois cours, et construisent la console en trois temps : tester les modules sur breadboard, concevoir la carte qui les réunit, puis la souder et y faire tourner un premier jeu. Avant chaque TD, relisez les concepts qu'il met en pratique : ses prérequis sont indiqués en tête du tutoriel.

| Séance | Durée | Contenu | Concepts mobilisés | Supports |
|---|---|---|---|---|
| **TD1** | 1 h 30 | Créer le projet, flasher le premier programme, lire le port série | CM1 | [Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/), [Port série](/docs/tutorials/electronics/vscode-port-serie/) |
| **TD2** | 3 h | Tester sur breadboard les modules de la mallette : bouton, joystick, buzzer, écran | CM2, CM3 | [Les modules de la mallette](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/) |
| **TD3** | 3 h | Concevoir la carte sous KiCad : schéma, **validation 1**, routage, **validation 2** | CM2, CM3 | [Concevoir la carte de la console](/workshops/microcontroleur/tutorials/conception-carte-kicad/) |
| **TD4** | 3 h | Souder et tester la carte finale fournie (environ 1 h 30), puis y écrire un Pong à un joueur | CM3 | [Souder et tester la carte](/workshops/microcontroleur/tutorials/souder-tester-carte/), [Le Pong sur la console](/workshops/microcontroleur/tutorials/collisions-fsm-pong/) |

Chaque TD se termine par des **checkpoints** à faire valider par l'encadrant en séance : ils comptent dans l'évaluation. Un TD non terminé se rattrape avant le suivant, car chacun s'appuie sur le précédent. En particulier, le routage doit être validé avant le TD4, où la carte finale vous est remise.

### Projet (environ 24 h)

Le projet démarre sur la carte soudée au TD4, avec le Pong comme point de départ. Le découpage ci-dessous suit les jalons de l'[énoncé du projet](/workshops/microcontroleur/projet-snake/) ; il peut évoluer selon l'avancement des binômes.

| Séance | Durée | Contenu | Jalon visé |
|---|---|---|---|
| **P1** | 3 h | Lancement du projet, binômes, repo ; le Snake et le rôle du joueur 2 sur papier | |
| **P2** | 3 h | Le Snake en solo : grille, déplacement, direction | |
| **P3** | 3 h | Le Snake en solo : nourriture, croissance, collisions, machine à états | 1. Snake en solo |
| **P4** | 3 h | Le réseau : point d'accès, page web, WebSocket ; le protocole écrit | 2. Squelette réseau |
| **P5** | 3 h | Le joueur 2 : sa page et son rôle | |
| **P6** | 3 h | Le joueur 2 intégré au jeu, jouable de bout en bout | 3. Le joueur 2 |
| **P7** | 3 h | La robustesse : déconnexions, messages invalides, parties enchaînées ; les tests | 4. Robustesse |
| **P8** | 3 h | Finalisation du repo, répétition, **démonstration** | 5. Documentation et démo |

Supports : les [slides de lancement du projet](/workshops/microcontroleur/slides/lancement-projet-snake/), l'[énoncé](/workshops/microcontroleur/projet-snake/), le concept [Wi-Fi, HTTP et WebSocket](/docs/concepts/reseau-wifi-websocket/) et le tutoriel [ESP32, Wi-Fi et WebSocket](/docs/tutorials/electronics/esp32-wifi-websocket/).

{% include message.html title="Déroulé prévisionnel" message="Le rythme dépend de votre avancement : un jalon non atteint se rattrape avant le suivant. Les dates des séances et de la démonstration vous sont communiquées en début de projet." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Entre les séances

- **Pendant les TD** : terminer les checkpoints non validés, relire le concept de la séance suivante.
- **Pendant le projet** :
  - une entrée de journal de bord par séance (ce qui a été fait, pourquoi, ce qui reste) ;
  - un repo à jour : commit et push à la fin de chaque session de travail ;
  - les issues du binôme tenues à jour.

## Ressources

- Les **concepts** de l'atelier, à lire avant le CM ou le TD correspondant, sur la [page de l'atelier](/workshops/microcontroleur/).
- Les **guides de dépannage** : [Récupérer une carte ESP32-S3 qui n'apparaît plus](/docs/how-to-guides/esp32-s3-carte-introuvable/) et [Dépanner un écran TFT SPI qui n'affiche rien](/docs/how-to-guides/ecran-tft-noir/).
- L'atelier [Méthodologie de projet](/workshops/methodologie-de-projet/) pour le repo, le journal de bord et la documentation du projet.
