---
layout: documentation
lang: en
hide_hero: false
hero_image: soudure.jpg
hero_darken: true
image: soudure.jpg
component_toc: true
doc_header: true

title: Electronics soldering
subtitle: "Level 2: Supervised"
description: Burns and fumes to keep under control before using the soldering iron, the hot air station or the soldering hot plate.
author: Adrien Bracq

hardwares:
  - label: Weller WT 1010
    link: /docs/references/machines/weller-wt-1010/
  - label: Weller WTHA
    link: /docs/references/machines/weller-wtha/
  - label: Soldering hot plate
    link: /docs/references/machines/plaque-chauffante-soudure/
---

## Who this module is for

Any campus user who wants to use a MakerSpace soldering iron, hot air station or soldering hot plate.

This topic may be covered in some classes, but it remains available here so that you can get informed and trained at any time, directly with the MakerSpace manager.

## Why this level of vigilance

The classic risks of a soldering station (burns, fumes) are moderate **but real**. Some risks do not show up straight away **but build up** with **repeated exposure**: this is the case, for example, of exposure to lead if leaded alloys are used. Feeling nothing at the time **does not mean there is no long-term consequence**: the instructions apply even when nothing seems to be happening.

## Identified risks

{% include risk-item.html level="modere" icon="fas fa-temperature-high" title="Burns: iron and hot air station" content="The soldering iron heats to between 350 and 450 °C, and the hot air station blows air at high temperatures. Never put the iron down anywhere other than on its insulated stand." %}

{% include risk-item.html level="modere" icon="fas fa-fire-burner" title="Burns: soldering hot plate" content="Its surface reaches up to 400 °C and does not visibly change as it heats, unlike the tip of an iron: nothing tells the eye that it is scorching. Never put your hand on it, handle boards only with tweezers or a tool, and check that it is switched off and cooled down before leaving it unattended." %}

{% include risk-item.html level="modere" icon="fas fa-smog" title="Flux and solder fumes" content="Inhaling these fumes is irritating, even for a short job. Fume extraction is mandatory every time, whatever the duration." %}

{% include risk-item.html level="modere" icon="fas fa-biohazard" title="Exposure to lead, fluxes and unknown residues (cumulative risk)" content="The risk is not limited to lead: soldering fluxes, and the residues already present on a board (during a repair, for example), can also be irritating or toxic, even if the products you use yourself are considered safe. You can never be sure of what was used previously on a board under repair. It is a long-term risk: the effects are not immediate but get worse with repeated exposure over time. Wash your hands after use, and never eat or drink at the soldering station." %}

## PPE and equipment required

<div class="epi-list">
{% include epi-item.html icon="fas fa-glasses" label="Safety glasses" %}
{% include epi-item.html icon="fas fa-fan" label="Extraction / ventilation mandatory" %}
</div>

The glasses protect above all when trimming component leads after soldering: the cutters can send the snipped end of wire flying at some speed. They also limit the risk of splashes of flux or molten solder.

Fume extraction/ventilation is not PPE strictly speaking: it is a collective protection, to be switched on every time, even for a short job, and particularly during a repair where the composition of the solder or flux already in place may be unknown.

Tweezers or a dedicated tool are needed to handle boards on the hot plate, never bare hands.

## Instructions before / during use

<div class="consigne-list">
{% include consigne-item.html type="do" content="Always put the iron back on its insulated stand, never anywhere else." %}
{% include consigne-item.html type="do" content="Work under extraction, every time, even for a short job." %}
{% include consigne-item.html type="do" content="Always switch off the equipment (iron, hot air station, hot plate) once the work is done: it heats up quickly when powered on, so there is no point leaving it on for the next user." %}
{% include consigne-item.html type="dont" content="Do not eat or drink at the station." %}
{% include consigne-item.html type="dont" content="Never touch the surface of the hot plate with bare hands." %}
{% include consigne-item.html type="dont" content="Do not keep liquids (isopropyl alcohol, flux cleaner...) in the immediate vicinity of the iron, the hot air station or the hot plate." %}
</div>

## What to do in case of an incident

{% include message.html title="The absolute rule" message="Whatever the incident, immediately tell the MakerSpace supervisor present: they take charge of the situation. Your safety comes first: if in doubt about an action, do not do it; raise the alarm and evacuate rather than intervene." status="is-danger" icon="fas fa-triangle-exclamation" %}

**Burn:** cool immediately under **lukewarm water** for several minutes. Let the victim adjust the water temperature themselves to whatever relieves them: neither icy nor hot.

**Splash in the eye (flux, solder):** rinse thoroughly with clean water for at least 15 minutes; always seek medical advice.
