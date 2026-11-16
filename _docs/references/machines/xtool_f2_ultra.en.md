---
layout: documentation
lang: en
hide_hero: false
hero_image: "xtool-f2-ultra.jpg"
hero_darken: true
image: "xtool-f2-ultra.jpg"
component_toc: true
doc_header: true
type: equipment
tag:

title: xTool F2 Ultra
subtitle: Dual-head laser engraver (60W MOPA + 40W diode)
description: Dual-head galvo laser engraver, with a 60W infrared MOPA for metals and a 40W blue diode for wood and cutting.
author: Adrien Bracq

manufacturer:
  - name: xTool
    link: "https://www.xtool.com/products/xtool-f2-ultra-60w-mopa-40w-diode-dual-laser-engraver"

working_area: 220x220mm (extendable to 500x220mm with the conveyor)
materials:
  - name: Metals (stainless steel, aluminium, brass, titanium...)
    link: ""
  - name: Wood
    link: ""
  - name: Acrylic
    link: ""
  - name: Leather
    link: ""
  - name: Glass / ceramic
    link: ""
speed: 5
access_level: 1

todo: 50
---
{% include safety-banner.html machine="xTool F2 Ultra" link="/workshops/certification-securite/modules/laser/" %}

## Overview

A dual-head galvo laser engraver: a 60W infrared MOPA laser (engraving
and marking metals) and a 40W blue diode laser (wood, paper, leather, and
cutting). Autofocus, dual camera for positioning, and very high
engraving speed thanks to galvo technology.

## Technical specifications

| Parameter | Value |
|---|---|
| Lasers | 60W infrared MOPA + 40W blue diode |
| Spot size | 0.03 x 0.03 mm (MOPA) / 0.09 x 0.1 mm (diode) |
| Work area | 220 x 220 mm (220 x 500 mm with conveyor) |
| Max height | 150 mm |
| Max speed | 15,000 mm/s |
| Overall dimensions | 521 x 429 x 294 mm |
| Weight | 21.6 kg |
| Laser safety class | Class 4 |
| Enclosure | Full orange cover, emergency stop |
| Positioning | Autofocus, dual camera (2 x 48 MP) |
| Connectivity | Wi-Fi, USB |
| Software | xTool Creative Space (SVG, DXF, JPG, PNG, BMP) |
| Extraction | Exhaust hose supplied, extractor or air purifier required |

## Capabilities and limitations

### a. Capabilities

- Marking and engraving metals (stainless steel, aluminium, brass, titanium, gold, silver, copper) with the MOPA laser.
- Engraving and cutting wood, leather, cardboard, acrylic and paper with the diode laser.
- High engraving speed thanks to galvo technology (up to 15,000 mm/s).
- Positioning assisted by a dual camera and automatic autofocus.
- Work area extendable to 220 x 500 mm with the conveyor.

### b. Limitations

- Native work area limited to 220 x 220 mm without the conveyor.
- Part height limited to 150 mm.
- Deep or colour engraving on metal is slow (several tens of minutes depending on the part).
- **PVC strictly forbidden**, as on any laser machine: cutting it releases chlorine, a toxic gas.
- Requires a running extractor or air purifier: do not use without active extraction.

## Usable materials

**MOPA laser (metals):** stainless steel, gold, silver, copper, aluminium, titanium, brass, anodised plates.

**Diode laser (non-metals):** wood (plywood, basswood), corrugated cardboard, leather, non-transparent acrylic, paper, glass/ceramic (surface marking).

**Forbidden:** PVC. See the [allowed and forbidden materials](/workshops/certification-securite/modules/laser/#allowed-and-forbidden-materials) of the Laser cutting module for the full list.

## Use at the MakerSpace

{% include message.html title="Warning" message="Class 4 laser machine: never use it with the cover open or the interlock disabled. See the [safety instructions of the Laser cutting module](/workshops/certification-securite/modules/laser/) before any use." status="is-warning" icon="fas fa-triangle-exclamation" %}

Always check that the extraction (extractor or air purifier) is running before starting a job. As with every laser machine at the MakerSpace, no cut may be left unattended.

## Resources

- [xTool F2 Ultra product page](https://www.xtool.com/products/xtool-f2-ultra-60w-mopa-40w-diode-dual-laser-engraver)
- [xTool F2 FAQ](https://support.xtool.com/article/2818)
- [Laser cutting certification module](/workshops/certification-securite/modules/laser/)
