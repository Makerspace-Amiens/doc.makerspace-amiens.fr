---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: Module joystick analogique
subtitle: Deux potentiomètres et un bouton, pour piloter dans deux axes
description: "Fiche de référence du module joystick analogique : principe, caractéristiques, brochage et câblage sur une XIAO ESP32S3."
author: Alban Petit

todo: 80
---

## Description

Un **joystick analogique** est un petit manche monté sur **deux potentiomètres** perpendiculaires, un par axe (X et Y). Incliner le manche fait tourner les potentiomètres : chacun délivre une tension qui varie continûment entre 0 V et la tension d'alimentation, image de la position sur son axe. Au repos, des ressorts ramènent le manche au centre, et les deux tensions valent environ la moitié de l'alimentation.

Un **bouton** est logé sous le manche : il se ferme quand on appuie sur le stick.

C'est le module de la mallette de l'atelier Microcontrôleurs, et un joystick du même type (*thumb joystick* SparkFun) est soudé sur la carte de la console.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Alimentation | 3,3 V à 5 V ; **3,3 V** avec un ESP32 |
| Potentiomètres | 2, d'environ 10 kΩ chacun |
| Sorties des axes | Tension analogique, de 0 V à la tension d'alimentation |
| Valeur au repos | Environ la moitié de l'alimentation, jamais exactement |
| Bouton | Contact vers GND quand on appuie, souvent sans résistance de tirage sur le module |

## Brochage

| Broche du module | Rôle |
|---|---|
| `GND` | Masse |
| `+5V` ou `VCC` | Alimentation (à relier au **3V3** d'un ESP32, malgré l'étiquette) |
| `VRx` | Tension de l'axe X |
| `VRy` | Tension de l'axe Y |
| `SW` | Bouton : relié à GND quand le stick est enfoncé |

{% include message.html title="Jamais sur le 5V avec un ESP32" message="Alimenté en 5 V, le joystick délivre jusqu'à 5 V sur `VRx` et `VRy`, que les entrées de l'ESP32 ne supportent pas. Branchez toujours `VCC` sur le **3V3** : la plage de tension suit l'alimentation, et la lecture reste correcte." status="is-danger" icon="fas fa-exclamation-triangle" %}

## Câblage sur une XIAO ESP32S3

Le câblage de l'atelier, identique sur breadboard et sur la carte de la console :

| Joystick | XIAO ESP32S3 | Lecture |
|---|---|---|
| `VRx` | D0 (GPIO1, ADC1) | `analogRead()`, de 0 à 4095 |
| `VRy` | D1 (GPIO2, ADC1) | `analogRead()`, de 0 à 4095 |
| `SW` | D2 (GPIO3) | `pinMode(D2, INPUT_PULLUP)`, puis `digitalRead()` : `LOW` = appuyé |
| `VCC` | 3V3 | |
| `GND` | GND | |

Les axes sont câblés sur des broches **ADC1** : l'ADC2 de l'ESP32 est inutilisable quand le Wi-Fi est actif.

## Points d'attention

- **Le centre n'est pas à 2048** : il varie d'un joystick à l'autre (souvent entre 1800 et 2100). On le mesure au démarrage, manche relâché, puis on applique une **zone morte** autour : voir le concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/).
- **Le sens des axes dépend du montage** : selon l'orientation du module, « gauche » donne une valeur faible ou forte. Prévoir une constante pour inverser l'axe.
- **Le bouton rebondit** comme tout contact mécanique : détection de front et anti-rebond, voir [Les modules de la mallette](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).

## Utilisation dans l'atelier

- TD2 : test et calibration sur breadboard, dans [Les modules de la mallette](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).
- TD4 : la raquette du [Pong sur la console](/workshops/microcontroleur/tutorials/collisions-fsm-pong/).
- Projet : la direction du serpent dans le [Snake multijoueur](/workshops/microcontroleur/projet-snake/).
