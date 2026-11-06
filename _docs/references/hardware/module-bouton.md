---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: Module bouton poussoir
subtitle: Un contact tout ou rien, prêt à brancher
description: "Fiche de référence du module bouton poussoir : principe, variantes de câblage, brochage et lecture sur une XIAO ESP32S3."
author: Alban Petit

todo: 80
---

## Description

Un **bouton poussoir** est un contact mécanique qui se ferme tant qu'on appuie dessus. Monté sur un **module**, il est accompagné de broches au pas de 2,54 mm, et souvent d'une résistance de tirage, parfois d'une LED témoin.

C'est le module bouton de la mallette de l'atelier Microcontrôleurs. Sur la carte de la console, deux boutons CMS de 6 × 6 mm (SW1 et SW2) jouent le même rôle, câblés directement vers GND.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Alimentation | 3,3 V à 5 V ; **3,3 V** avec un ESP32 |
| Sortie | Numérique, tout ou rien |
| Logique | **Selon le module** : niveau bas ou niveau haut quand on appuie (voir plus bas) |
| Rebonds | Quelques millisecondes à chaque appui et à chaque relâchement |

## Brochage

| Broche du module | Rôle |
|---|---|
| `GND` ou `-` | Masse |
| `VCC` ou `+` | Alimentation (vers le **3V3** d'un ESP32) |
| `S`, `OUT` ou `SIG` | Signal, vers une entrée du microcontrôleur |

Selon le module, le signal suit l'une de ces deux logiques :

| Câblage sur le module | Au repos | Bouton appuyé |
|---|---|---|
| Résistance de tirage vers VCC, bouton vers GND | `HIGH` | `LOW` |
| Résistance de tirage vers GND, bouton vers VCC | `LOW` | `HIGH` |

Le plus sûr est de **mesurer** : un programme qui affiche le niveau lu, bouton relâché puis enfoncé, donne la réponse en quelques secondes.

## Câblage sur une XIAO ESP32S3

| Module | XIAO ESP32S3 | Lecture |
|---|---|---|
| `S` | D5 (GPIO6) | `pinMode(D5, INPUT_PULLUP)`, puis `digitalRead()` |
| `VCC` | 3V3 | |
| `GND` | GND | |

`INPUT_PULLUP` active la résistance de tirage interne de l'ESP32-S3 : elle ne gêne pas un module qui a déjà la sienne, et elle évite une entrée flottante si le module n'en a pas.

## Points d'attention

- **Une entrée sans résistance de tirage flotte** et lit n'importe quoi : voir le concept [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/).
- **Le contact rebondit** : un seul appui peut produire plusieurs transitions. On détecte le **front** et on filtre les rebonds avec `millis()` : voir [Les modules de la mallette](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).
- **Ne jamais alimenter le module en 5 V** avec un ESP32 : son signal monterait à 5 V sur l'entrée.

## Utilisation dans l'atelier

- TD2 : niveau lu, détection d'appui et anti-rebond, dans [Les modules de la mallette](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/).
- TD3 : les boutons SW1 et SW2 de la carte, dans [Concevoir la carte de la console](/workshops/microcontroleur/tutorials/conception-carte-kicad/).
