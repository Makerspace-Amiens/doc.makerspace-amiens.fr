---
layout: documentation
lang: en
hide_hero: false
hero_image: resine.jpg
hero_darken: true
image: resine.jpg
component_toc: true
doc_header: true

title: Resin
subtitle: "Level 2: Supervised, scheduled sessions"
description: Skin contact, isopropanol and UV exposure to keep under control before using the resin printer.
author: Adrien Bracq

hardwares:
  - label: Phrozen Sonic Mighty 4K
    link: /docs/references/machines/phrozen_mighty_4k/
  - label: UV wash and cure station
    link: /docs/references/machines/station-lavage-polymerisation-uv/
  - label: ChemFAST Elite 15 fume hood
    link: /docs/references/machines/sorbonne-chemfast-elite-15/
---

## Who this module is for

Any campus user who wants to use the MakerSpace resin printer or the UV wash and cure station. Use of these machines is still marginal: this module is not open continuously, but offered through a few dedicated sessions scheduled during the year. Contact the MakerSpace manager to find out the next dates or to express your interest.

## Why this level of vigilance

Unlike FDM, uncured liquid resin is an irritant, or even a skin sensitiser, and the isopropanol (IPA) used to clean the parts is flammable. Some effects are not immediate but get worse with repeated exposure: feeling nothing at the time does not mean there is no consequence later.

## Identified risks

{% include risk-item.html level="modere" icon="fas fa-hand-dots" title="Skin contact with liquid resin (cumulative risk)" content="Risk of irritation and, with repetition, of allergic sensitisation: the effects can get worse with repeated exposure over time, even with no visible reaction at first. Resin must never be handled with bare hands." %}

{% include risk-item.html level="modere" icon="fas fa-smog" title="Inhalation of vapours" content="During printing and cleaning, volatile compounds are given off." %}

{% include risk-item.html level="eleve" icon="fas fa-fire" title="Isopropanol (IPA)" content="Flammable and irritant, to be handled and stored with care, away from any source of heat or flame, and from incompatible products." %}

{% include risk-item.html level="modere" icon="fas fa-sun" title="UV exposure" content="Post-curing uses UV radiation, never in the open in the presence of other people." %}

## PPE and equipment required

<div class="epi-list">
{% include epi-item.html icon="fas fa-mitten" label="Nitrile gloves (disposable)" %}
{% include epi-item.html icon="fas fa-glasses" label="Safety glasses" %}
{% include epi-item.html icon="fas fa-head-side-mask" label="FFP2 mask or cartridge half-mask" %}
</div>

Nitrile gloves are mandatory for any handling of liquid resin. The mask (FFP2 or cartridge half-mask) is needed if the ventilation of the area is insufficient.

## Instructions before / during use

<div class="consigne-list">
{% include consigne-item.html type="do" content="Check that the machine is not flagged as under maintenance or out of service before using it." %}
{% include consigne-item.html type="do" content="Read the safety data sheet (SDS) and the hazard pictograms of the product used (resin, IPA) before any handling, especially if you change resin." %}
{% include consigne-item.html type="do" content="The fume hood must be running during any handling of liquid resin or isopropanol." %}
{% include consigne-item.html type="dont" content="Never handle liquid resin without gloves." %}
{% include consigne-item.html type="do" content="Work with the cover closed during printing." %}
{% include consigne-item.html type="do" content="Clean with isopropanol in a ventilated area, away from any source of heat or flame." %}
{% include consigne-item.html type="do" content="Store resin and IPA away from any source of heat and from incompatible products, in a spill tray if possible." %}
{% include consigne-item.html type="do" content="Dispose of uncured resin and soiled wipes with the dedicated chemical waste, never with ordinary waste." %}
</div>

## What to do in case of an incident

{% include message.html title="The absolute rule" message="Whatever the incident, immediately tell the MakerSpace supervisor present: they take charge of the situation. Your safety comes first: if in doubt about an action, do not do it; raise the alarm and evacuate rather than intervene." status="is-danger" icon="fas fa-triangle-exclamation" %}

**Skin contact:** remove soiled gloves and clothing, wash thoroughly with water, seek medical advice if irritation persists.

**Splash in the eye:** rinse thoroughly with clean water for at least 15 minutes; always seek medical advice.
