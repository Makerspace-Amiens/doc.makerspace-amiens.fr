---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: concept

title: Why a manufactured part is never exactly to size
subtitle: Shrinkage, kerf and other differences between the file and the real part
description: Understand why a 3D-printed or laser-cut part never comes out exactly at the dimensions of the design file, and how to measure that difference.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: "Precision, accuracy and good measuring practice"
    link: /docs/concepts/precision-justesse-mesure/
---
## Introduction

A design (CAD) file describes a perfect geometry: in it, a Ø10 mm hole is exactly Ø10.000... mm. The physical part will never be exactly at that dimension: every manufacturing process introduces a deviation, often small but systematic. This concept explains where these deviations come from for 3D printing and laser cutting, the two processes used in the [Metrology](/workshops/metrologie/) workshop, and raises the question answered by the how-to guides of that workshop: how to measure them and allow for them.

## Shrinkage and over-width in FDM 3D printing

In FDM printing, molten plastic contracts slightly as it cools (*shrinkage*), by a few tenths of a percent for PLA and a little more for ABS. Added to this is an effect of the way the printer traces outlines: the extruded filament has a non-zero width, laid along the outline of the part.

The result is a well-known and fairly systematic phenomenon:

| Feature of the part | Tendency |
|---|---|
| Hole (inner outline) | Slightly **smaller** than the dimension in the file |
| Peg / boss (outer outline) | Slightly **larger** than the dimension in the file |

This is why a printed Ø10 mm shaft may not fit into a Ø10 mm hole printed on the same printer, even though both are supposed to have the same dimension in the file.

## Kerf in laser cutting

The laser beam is not infinitely thin: it removes a strip of material of non-zero width, called the **kerf** (typically 0.1 to 0.3 mm depending on power, speed and material). The cutter follows the vector path of the file with the **centre** of the beam: material is therefore removed on both sides of the drawn line.

The consequence is exactly the opposite of 3D printing:

| Feature of the part | Tendency |
|---|---|
| Hole (inner outline) | Slightly **larger** than the dimension in the file |
| Tab / outer edge (outer outline) | Slightly **smaller** than the dimension in the file |

{% include message.html title="Key point" message="The deviation goes in opposite directions depending on the process: 3D printing tends to shrink holes and enlarge solid features, laser cutting does the reverse. The same gauge printed and then laser cut therefore does not deviate in the same way." status="is-warning" icon="fas fa-triangle-exclamation" %}

## How to allow for it

Two complementary levers:

1. **Measure** the real part to quantify the deviation (see [Precision, accuracy and good measuring practice](/docs/concepts/precision-justesse-mesure/)): without measuring, you do not know whether the deviation exists or which way it goes.
2. **Compensate**, once the deviation is known: adjust the dimension in the design file (slightly enlarge a hole meant to receive a shaft, for example), or use a kerf compensation setting directly in the laser cutting software.

## Concrete examples

On the [inspection gauge](/workshops/metrologie/) of this workshop, the same Ø10 mm hole usually measures a little under 10 mm once printed in PLA, and a little over 10 mm once laser cut from a 3 mm sheet. This is exactly what this concept predicts, and exactly what the following how-to guides teach you to check and then correct.

## Going further

- [Checking the dimensional accuracy of a 3D-printed part](/docs/how-to-guides/controle-dimensionnel-impression-3d/)
- [Compensating for the kerf of a laser cut](/docs/how-to-guides/compenser-jeu-coupe-laser/)
