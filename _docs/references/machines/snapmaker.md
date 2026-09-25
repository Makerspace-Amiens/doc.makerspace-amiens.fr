---
layout: documentation
hide_hero: false
hero_image: "2022-09-27-11-27-09.png"
hero_darken: true
image: "2022-09-27-11-27-09.png"
component_toc: true
doc_header: true
type: equipment
tag: additive-manufacturing

title: SnapMaker 2.0 A350T
subtitle: CNC modulaire 3-en-1
description: Machine modulaire 3-en-1 (impression 3D, découpe/gravure laser, fraisage CNC) à têtes interchangeables, utilisée au MakerSpace pour son module de fraisage CNC.
author: Adrien Bracq

manufacturer:
  - name: Snapmaker
    link: "https://www.snapmaker.com"

working_area: 320 x 335 mm (variable selon le module)
access_level: 1

todo: 40
---

{% include safety-banner.html machine="SnapMaker 2.0 A350T (module fraisage)" link="/workshops/certification-securite/modules/cnc/" %}

## Présentation

Le SnapMaker 2.0 A350T est une machine modulaire : un même bâti (structure linéaire XYZ) accepte trois têtes interchangeables (impression 3D FDM, découpe/gravure laser et fraisage CNC) pilotées par le même logiciel (Snapmaker Luban / Snapmaker Orca).

Au MakerSpace, cette machine est mise à disposition pour son **module de fraisage CNC** : usinage de pièces plates en bois, acrylique, PCB ou plaques de carbone à partir d'un fichier de parcours d'outil.

## Caractéristiques techniques

| Paramètre | Module | Valeur |
|---|---|---|
| Zone de travail | Impression 3D | 320 x 335 x 310 mm (simple extrusion) |
| Zone de travail | Laser | 320 x 335 mm |
| Zone de travail | CNC | 320 x 335 mm |
| Puissance / outil | Laser | 1600 mW, longueur d'onde 450 nm, spot 0,2 x 0,3 mm |
| Vitesse de rotation | CNC | 6 000 à 12 000 tr/min, mandrin ER11 (fraises Ø 0,5 à 6,35 mm) |
| Dimensions hors tout | - | 495 x 506 x 580 mm |
| Connectique | - | Wi-Fi, USB, clé USB |

## Possibilités et limitations

### a. Possibilités

- Fraisage CNC de pièces plates en bois, acrylique, PCB et plaques de fibre de carbone.
- Impression 3D FDM (PLA, ABS, PETG, TPU, Wood PLA). Module non ouvert à l'usage libre au MakerSpace, voir Notes.
- Découpe et gravure laser (bois, cuir, plastique non transparent, tissu, papier). Module non ouvert à l'usage libre au MakerSpace, voir Notes.

### b. Limitations

- Zone de travail limitée à 320 x 335 mm quel que soit le module utilisé.
- Fraises limitées à un diamètre de queue de 0,5 à 6,35 mm (mandrin ER11).
- Changement de module manuel : impossible de passer d'un module à l'autre en cours de job.
- Rigidité et rythme de production nettement inférieurs à une CNC industrielle : adaptée au prototypage, pas à la production de série.

## Matériaux utilisables

**Fraisage CNC :** bois, acrylique, PCB, plaques de fibre de carbone, jade (matériaux tendres uniquement).

**Impression 3D :** PLA, ABS, PETG, TPU (dureté ≥ 95 Shore A), Wood PLA.

**Laser :** bois, cuir, plastique non transparent, tissu, papier.

## Notes

Au MakerSpace, seul le **module de fraisage CNC** est actuellement couvert par un module de certification sécurité et ouvert à l'usage. Voir les [consignes de sécurité du module CNC](/workshops/certification-securite/modules/cnc/) avant toute utilisation (outil rotatif, entraînement, projections).

Les modules laser et impression 3D de cette machine ne sont pas ouverts à l'usage libre pour l'instant.
