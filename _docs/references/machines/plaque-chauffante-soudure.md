---
layout: documentation
hide_hero: false
hero_image: plaque-chauffante-soudage.jpg
hero_darken: true
image: plaque-chauffante-soudage.jpg
component_toc: true
doc_header: true
type: equipment
tag:

title: Plaque chauffante de soudage
subtitle: Plaque chauffante pour brasage et dessoudage de composants CMS
description: Plaque chauffante 700W, 200x200mm, réglable de 0 à 400°C, pour souder ou dessouder des composants CMS directement dessus, ou préchauffer une carte avant d'intervenir au fer.
author: Adrien Bracq

working_area: 200x200mm
access_level: 1

todo: 10
---

{% include safety-banner.html machine="Plaque chauffante de soudage" link="/workshops/certification-securite/modules/soudure/" %}

## Présentation

Une plaque chauffante de soudage est une plaque métallique chauffée électriquement, sur laquelle on pose une carte électronique pour la porter à une température stable et homogène.

Son usage principal est de souder ou dessouder directement dessus des composants montés en surface (CMS/SMD) : on chauffe toute la carte jusqu'à faire fondre l'étain ou la pâte à souder, ce qui permet de retirer ou replacer un composant sans avoir à concentrer la chaleur d'un fer sur un point précis. C'est utile en particulier pour les gros composants (connecteurs CMS, circuits à nombreuses broches) dont les pattes sont difficiles à dessouder une par une.

Elle sert aussi de préchauffage d'appoint avant d'intervenir au fer ou à la station à air chaud sur une carte déjà peuplée : la chaleur du fer se dissipe vite dans les plans de masse et les autres pistes, et préchauffer l'ensemble de la carte réduit l'écart de température que le fer doit encore apporter localement, ce qui limite le risque de décoller une pastille ou de fissurer une soudure par choc thermique.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Zone chauffante | 200 x 200 mm |
| Puissance | 700 W |
| Plage de température | 0 à 400 °C, réglable |
| Affichage | Écran LCD digital |

## Utilisation au MakerSpace

{% include message.html title="Attention" message="La surface de la plaque atteint des températures élevées (jusqu'à 400 °C) sans changer d'aspect visible. Consultez les [consignes de sécurité du module Soudure électronique](/workshops/certification-securite/modules/soudure/) avant toute utilisation." status="is-warning" icon="fas fa-triangle-exclamation" %}

## Ressources

- [Module de certification Soudure électronique](/workshops/certification-securite/modules/soudure/)
