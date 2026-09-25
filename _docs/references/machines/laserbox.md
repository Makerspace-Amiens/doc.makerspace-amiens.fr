---
layout: documentation
hide_hero: false
hero_image: "2022-09-27-11-01-47.png"
hero_darken: true
image: "2022-09-27-11-01-47.png"
component_toc: true
doc_header: true
type: equipment
tag:

title: Laserbox
subtitle: Découpeuse laser CO2
description: Découpeuse-graveuse laser CO2 40W à zone de travail fermée, pour la découpe et la gravure de bois, acrylique, cuir, papier et carton.
author: Adrien Bracq

manufacturer:
  - name: Makeblock
    link: "https://www.makeblock.com"

working_area: 500 x 300 mm
access_level: 1

todo: 40
---

{% include safety-banner.html machine="Laserbox" link="/workshops/certification-securite/modules/laser/" %}

## Présentation

La Laserbox est une découpeuse-graveuse laser CO2 de bureau, à capot fermé et zone de travail éclairée. Un tube laser CO2 refroidi par eau (circuit fermé intégré) génère un faisceau infrarouge qui découpe ou grave la matière posée sur le plateau. Une caméra grand angle avec reconnaissance visuelle aide au positionnement du motif sur la matière et à la mise au point automatique de la hauteur du plateau.

Elle est utilisée au MakerSpace pour la découpe et la gravure de pièces plates (bois, acrylique, carton) et pour le marquage de surfaces (verre, pierre, métal traité).

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Marque / modèle | Makeblock Laserbox (40W) |
| Type de laser | Tube CO2, refroidissement par eau en circuit fermé |
| Puissance | 40 W |
| Zone de travail | 500 x 300 mm |
| Épaisseur de découpe max. | 15 mm |
| Vitesse de découpe max. | 60 mm/s |
| Vitesse de gravure max. | 500 mm/s |
| Dimensions hors tout | 958 x 528 x 268 mm |
| Poids | 40 kg |
| Connectique | USB, Ethernet, Wi-Fi |
| Sécurité | Capteur de capot (pause automatique à l'ouverture), détection de surchauffe / panne de refroidissement |
| Extraction | Purificateur de fumées intégré (filtre HEPA) |

## Possibilités et limitations

### a. Possibilités

- Découpe de matériaux plats jusqu'à 15 mm d'épaisseur (bois, contreplaqué, acrylique, carton, cuir).
- Gravure fine sur bois, acrylique, cuir, papier.
- Gravure (sans découpe) sur verre, pierre et métal traité (avec spray céramique).
- Positionnement assisté par caméra : le motif peut être aligné visuellement sur une pièce déjà présente sur le plateau.

### b. Limitations

- Zone de travail limitée à 500 x 300 mm.
- Découpe de métal impossible (un laser CO2 ne coupe pas le métal, uniquement la gravure de surface).
- Épaisseur de découpe limitée à 15 mm, au-delà seule la gravure reste possible.
- **PVC strictement interdit** : sa découpe dégage du chlore, un gaz toxique.
- ABS, polycarbonate, mousses et autres matériaux proscrits sur cette machine. Voir le [module Découpe laser](/workshops/certification-securite/modules/laser/) pour la liste complète.

## Matériaux utilisables

**Découpe et gravure :** bois, contreplaqué, carton, mousse PE, acrylique (PMMA), papier, textile, cuir.

**Gravure uniquement :** verre, pierre, métal (avec spray de marquage céramique).

**Interdit :** PVC (dégage du chlore), et plus généralement tout matériau non validé par un référent. Voir les [matériaux autorisés et interdits](/workshops/certification-securite/modules/laser/#matériaux-autorisés-et-interdits).

## Techniques & tutos

Voir l'atelier [Découpe Laser](/workshops/decoupe-laser/) pour les tutoriels de préparation de fichier et de passage sur machine, dont le [tutoriel dédié à la Laserbox](/docs/tutorials/production/laser-cut-makeblock/).

## Notes

Voir les [consignes de sécurité du module Découpe laser](/workshops/certification-securite/modules/laser/) avant toute utilisation : incendie, fumées et rayonnement laser sont les risques principaux sur cette machine.
