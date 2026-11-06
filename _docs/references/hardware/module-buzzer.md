---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: Module buzzer
subtitle: Un bip ou une mélodie, selon qu'il est actif ou passif
description: "Fiche de référence du module buzzer : différence entre buzzer actif et passif, brochage et pilotage depuis une XIAO ESP32S3."
author: Alban Petit

todo: 80
---

## Description

Un **buzzer** transforme un signal électrique en son. Il en existe deux familles, d'aspect presque identique, qui ne se pilotent pas de la même façon :

| | Buzzer **actif** | Buzzer **passif** |
|---|---|---|
| Contenu | Un oscillateur intégré | Un simple petit haut-parleur |
| Ce qu'il faut lui envoyer | Un niveau `HIGH` | Un signal carré à la fréquence voulue |
| Son | Toujours la même note | La note que l'on veut |
| Fonction Arduino | `digitalWrite()` | `tone()` |
| Avec le mauvais pilotage | `tone()` donne un son grésillant | `HIGH` seul ne produit qu'un clic |

Un buzzer passif piloté par un signal carré est une application directe du **PWM** : la fréquence du signal devient la hauteur de la note (voir le concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/)).

C'est le module buzzer de la mallette de l'atelier Microcontrôleurs. Il n'est pas présent sur la carte de la console.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Alimentation | 3,3 V à 5 V ; **3,3 V** avec un ESP32 (le son est un peu moins fort) |
| Fréquences utiles (passif) | Quelques centaines de Hz à quelques kHz, avec un maximum de volume vers 2 à 4 kHz |
| Courant | Quelques mA à une trentaine de mA selon le modèle |

## Brochage

| Broche du module | Rôle |
|---|---|
| `GND` ou `-` | Masse |
| `VCC` ou `+` | Alimentation, sur les modules qui en ont besoin (vers le **3V3**) |
| `S`, `I/O` ou `SIG` | Signal de commande |

Certains modules n'ont que deux broches (signal et masse). Les marquages varient d'un fabricant à l'autre : vérifier la sérigraphie avant de câbler.

## Câblage sur une XIAO ESP32S3

| Module | XIAO ESP32S3 |
|---|---|
| `S` | D3 (GPIO4) |
| `VCC` | 3V3 |
| `GND` | GND |

```cpp
// Buzzer passif : une note de 440 Hz pendant 200 ms, sans bloquer le programme
tone(D3, 440, 200);

// Buzzer actif : un bip tant que la broche est à HIGH
digitalWrite(D3, HIGH);
```

## Points d'attention

- **Identifier le type avant tout** : un programme qui joue une gamme avec `tone()`, puis met la broche à `HIGH`, révèle en quelques secondes s'il est actif ou passif.
- **Un buzzer gourmand** (plus d'une vingtaine de mA) se commande à travers un transistor, plutôt que directement par la broche.
- **Dans un jeu**, une note se lance avec `tone()` et on ne l'attend pas : un `delay()` pour laisser jouer le son figerait tout le programme.

## Utilisation dans l'atelier

- TD2 : identification et test sur breadboard, dans [Les modules de la mallette](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).
