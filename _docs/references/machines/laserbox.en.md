---
layout: documentation
lang: en
hide_hero: false
hero_image: "2022-09-27-11-01-47.png"
hero_darken: true
image: "2022-09-27-11-01-47.png"
component_toc: true
doc_header: true
type: equipment
tag:

title: Laserbox
subtitle: CO2 laser cutter
description: 40 W CO2 laser cutter and engraver with an enclosed work area, for cutting and engraving wood, acrylic, leather, paper and cardboard.
author: Adrien Bracq

manufacturer:
  - name: Makeblock
    link: "https://www.makeblock.com"

working_area: 500 x 300 mm
access_level: 1

todo: 40
---

{% include safety-banner.html machine="Laserbox" link="/workshops/certification-securite/modules/laser/" %}

## Overview

The Laserbox is a desktop CO2 laser cutter and engraver with a closed lid and a lit work area. A water-cooled CO2 laser tube (built-in closed loop) generates an infrared beam that cuts or engraves the material placed on the bed. A wide-angle camera with visual recognition helps position the design on the material and automatically focuses by adjusting the bed height.

At the MakerSpace it is used to cut and engrave flat parts (wood, acrylic, cardboard) and to mark surfaces (glass, stone, treated metal).

## Technical specifications

| Parameter | Value |
|---|---|
| Brand / model | Makeblock Laserbox (40W) |
| Laser type | CO2 tube, closed-loop water cooling |
| Power | 40 W |
| Work area | 500 x 300 mm |
| Max. cutting thickness | 15 mm |
| Max. cutting speed | 60 mm/s |
| Max. engraving speed | 500 mm/s |
| Overall dimensions | 958 x 528 x 268 mm |
| Weight | 40 kg |
| Connectivity | USB, Ethernet, Wi-Fi |
| Safety | Lid sensor (automatic pause on opening), overheating / cooling failure detection |
| Extraction | Built-in fume purifier (HEPA filter) |

## Capabilities and limitations

### a. Capabilities

- Cutting flat materials up to 15 mm thick (wood, plywood, acrylic, cardboard, leather).
- Fine engraving on wood, acrylic, leather, paper.
- Engraving (without cutting) on glass, stone and treated metal (with ceramic spray).
- Camera-assisted positioning: the design can be aligned visually on a part already on the bed.

### b. Limitations

- Work area limited to 500 x 300 mm.
- Cutting metal is impossible (a CO2 laser does not cut metal, it only engraves its surface).
- Cutting thickness limited to 15 mm; beyond that, only engraving is possible.
- **PVC strictly forbidden**: cutting it releases chlorine, a toxic gas.
- ABS, polycarbonate, foams and other materials are prohibited on this machine. See the [Laser cutting module](/workshops/certification-securite/modules/laser/) for the full list.

## Usable materials

**Cutting and engraving:** wood, plywood, cardboard, PE foam, acrylic (PMMA), paper, textile, leather.

**Engraving only:** glass, stone, metal (with ceramic marking spray).

**Forbidden:** PVC (releases chlorine), and more generally any material not approved by a supervisor. See the [allowed and forbidden materials](/workshops/certification-securite/modules/laser/#allowed-and-forbidden-materials).

## Techniques & tutorials

See the [Laser cutting](/workshops/decoupe-laser/) workshop for the tutorials on preparing files and running the machine, including the [tutorial dedicated to the Laserbox](/docs/tutorials/production/laser-cut-makeblock/).

## Notes

See the [safety instructions of the Laser cutting module](/workshops/certification-securite/modules/laser/) before any use: fire, fumes and laser radiation are the main risks on this machine.
