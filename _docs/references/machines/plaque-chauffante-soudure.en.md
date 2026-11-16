---
layout: documentation
lang: en
hide_hero: false
hero_image: plaque-chauffante-soudage.jpg
hero_darken: true
image: plaque-chauffante-soudage.jpg
component_toc: true
doc_header: true
type: equipment
tag:

title: Soldering hot plate
subtitle: Hot plate for soldering and desoldering SMD components
description: 700 W, 200x200 mm hot plate, adjustable from 0 to 400°C, to solder or desolder SMD components directly on it, or to preheat a board before working on it with an iron.
author: Adrien Bracq

working_area: 200x200mm
access_level: 1

todo: 10
---
{% include safety-banner.html machine="soldering hot plate" link="/workshops/certification-securite/modules/soudure/" %}

## Overview

A soldering hot plate is an electrically heated metal plate on which you place an electronic board to bring it to a stable, even temperature.

Its main use is to solder or desolder surface-mount components (SMD) directly on it: the whole board is heated until the solder or solder paste melts, so a component can be removed or put back without having to focus the heat of an iron on one precise spot. This is especially useful for large components (SMD connectors, chips with many pins) whose leads are hard to desolder one by one.

It also serves as extra preheating before working with an iron or a hot air station on an already populated board: the heat of the iron dissipates quickly into ground planes and other tracks, and preheating the whole board reduces the temperature difference the iron still has to supply locally, which limits the risk of lifting a pad or cracking a joint through thermal shock.

## Technical specifications

| Parameter | Value |
|---|---|
| Heating area | 200 x 200 mm |
| Power | 700 W |
| Temperature range | 0 to 400 °C, adjustable |
| Display | Digital LCD screen |

## Use at the MakerSpace

{% include message.html title="Warning" message="The surface of the plate reaches high temperatures (up to 400 °C) without any visible change. Read the [safety instructions of the Electronics soldering module](/workshops/certification-securite/modules/soudure/) before any use." status="is-warning" icon="fas fa-triangle-exclamation" %}

## Resources

- [Electronics soldering certification module](/workshops/certification-securite/modules/soudure/)
