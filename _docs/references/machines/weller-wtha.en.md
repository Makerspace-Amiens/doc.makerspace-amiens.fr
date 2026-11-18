---
layout: documentation
lang: en
hide_hero: false
hero_image: "2022-09-27-11-23-00.png"
hero_darken: true
image: "2022-09-27-11-23-00.png"
component_toc: true
doc_header: true
type: equipment

title: Weller WTHA
subtitle: Hot air station
description: 900 W hot air rework station with temperature control from 50 to 600°C, for desoldering SMD components.
author: Adrien Bracq

manufacturer:
  - name: Weller
    link: "https://www.weller-tools.com"

access_level: 1

todo: 40
---
{% include safety-banner.html machine="Weller WTHA" link="/workshops/certification-securite/modules/soudure/" %}

## Overview

The WTHA is a hot air rework station, used to desolder and solder SMD components (removing an integrated circuit, repairing a board) without direct contact between a tip and the component. The air blown by the hot air pencil is heated and digitally regulated, with several programmable temperature profiles.

At the MakerSpace it complements the [Weller WT 1010](/docs/references/machines/weller-wt-1010/) soldering iron, for operations a tip cannot do cleanly (desoldering multi-pin components, removing hot-melt glue, heat-shrinking).

## Technical specifications

| Parameter | Value |
|---|---|
| Brand / model | Weller WTHA 1 |
| Supply | 230V AC (900 W) |
| Temperature range | 50 to 600 °C |
| Temperature accuracy | ± 30 °C |
| Airflow | 5 to 110 L/min depending on temperature |
| Dimensions | 210 x 160 x 125 mm |
| Functions | Multifunction LCD screen, 5 preset temperature profiles, antistatic design (ESD-safe) |
| Compatible nozzles | Weller TNR series |

## Capabilities and limitations

### a. Capabilities

- Desoldering multi-pin SMD components (integrated circuits, connectors) without overheating the board with an iron.
- Repairing existing electronic boards.
- Shrinking heat-shrink tubing and removing small amounts of hot-melt glue.
- Preset temperature profiles to reproduce a setting quickly.

### b. Limitations

- Not suited to fine through-hole or fine-pitch SMD soldering: use the [Weller WT 1010 iron](/docs/references/machines/weller-wt-1010/) instead.
- Wide, diffuse heated area: risk of damaging neighbouring components if poorly controlled.
- No built-in fume extraction: external extraction is mandatory for every use.

## Usable materials

Standard electronics solder alloys (tin-lead or lead-free) on SMD components. Do not use it on materials or glues of unknown composition without approval from a supervisor.

## Notes

See the [safety instructions of the Electronics soldering module](/workshops/certification-securite/modules/soudure/) before any use: the blown air reaches high temperatures and fume extraction is mandatory.
