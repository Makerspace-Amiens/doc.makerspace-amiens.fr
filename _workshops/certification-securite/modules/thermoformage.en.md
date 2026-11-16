---
layout: documentation
lang: en
hide_hero: false
hero_image: thermoformage.jpg
hero_darken: true
image: thermoformage.jpg
component_toc: true
doc_header: true

title: Thermoforming
subtitle: "Level 2: Supervised"
description: Burns and trapping to know about before using a thermoformer or a plastic strip heater.
author: Adrien Bracq

hardwares:
  - label: Thermoform 400
    link: /docs/references/machines/plastiform400/
  - label: Mayku
    link: /docs/references/machines/mayku/
  - label: Insert press
    link: /docs/references/machines/presse-a-insert/
---

## Who this module is for

Any campus user who wants to use a MakerSpace thermoformer, plastic strip heater or heat-set insert press, machines in regular use in the space.

## Why this level of vigilance

These machines heat plastics to high temperatures and involve handling by hand close to hot surfaces: the Thermoform 400 heats a line on the sheet, which is then bent by hand straight afterwards (precise shaping is done on another machine where needed); the Mayku vacuum-forms the sheet over a mould, after heating it under a heating element; the insert press uses a heated iron (up to 500 °C, hotter than the other two) to set threaded inserts into a 3D printed part.

## Identified risks

{% include risk-item.html level="modere" icon="fas fa-temperature-high" title="Burns" content="The heated plastic, the heating element of the Thermoform 400 and, on the Mayku, the heating element placed above the sheet can cause burns on contact. On the Thermoform 400 in particular, bending is done by hand straight after heating: the hands work in the immediate vicinity of the heating element. The iron of the insert press reaches up to 500 °C: the tip stays hot even when switched off, for as long as it takes to cool down." %}

{% include risk-item.html level="modere" icon="fas fa-hand-fist" title="Pinching / trapping (Mayku)" content="The movement of the Mayku's heating element and frame carries a risk of trapping hands or fingers during the forming cycle." %}

{% include risk-item.html level="modere" icon="fas fa-smog" title="Fumes" content="Some plastics give off vapours when heated: keep to the compatible plastics specified for the machine you are using." %}

## PPE and equipment required

<div class="epi-list">
{% include epi-item.html icon="fas fa-mitten" label="Heat-resistant gloves" %}
{% include epi-item.html icon="fas fa-glasses" label="Safety glasses" %}
</div>

Heat-resistant gloves are mandatory for any handling of the sheet or the part straight after forming. Glasses are recommended, particularly when handling the heating element.

## Instructions before / during use

<div class="consigne-list">
{% include consigne-item.html type="do" content="Check that the plastic used is compatible with the machine used." %}
{% include consigne-item.html type="do" content="Check that the machine is not flagged as under maintenance or out of service before using it." %}
{% include consigne-item.html type="do" content="Let the part cool down in a dedicated area before any handling." %}
{% include consigne-item.html type="dont" content="Do not touch the heating element before, during or just after use." %}
{% include consigne-item.html type="do" content="Always unplug the equipment as soon as you have finished using it yourself, not just at the end of the session. Do not count on the next user, or on the end of the time slot, to do it." %}
</div>

## What to do in case of an incident

{% include message.html title="The absolute rule" message="Whatever the incident, immediately tell the MakerSpace supervisor present: they take charge of the situation. Your safety comes first: if in doubt about an action, do not do it; raise the alarm and evacuate rather than intervene." status="is-danger" icon="fas fa-triangle-exclamation" %}

**Burn:** cool immediately under **lukewarm water** for several minutes; never burst a blister. Let the victim adjust the water temperature themselves to whatever relieves them: neither icy nor hot.

**Trapping / pinching:** free the area immediately, switching off the machine if necessary, assess the injury, and give first aid if needed.
