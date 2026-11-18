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

title: Precision, accuracy and good measuring practice
subtitle: Why two people never measure exactly the same thing
description: Understand the difference between precision and accuracy, identify the most common measurement errors, and adopt the right habits before using an instrument.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: No prerequisites
    link: ""
---
## Introduction

Measuring seems obvious: you put a caliper on a part and read a number. Yet two people measuring the same part with the same instrument rarely get exactly the same result. Understanding why (and knowing how to limit these differences) is the first reflex to have before using any measuring instrument.

This concept lays the foundations used throughout the [Metrology](/workshops/metrologie/) workshop: they apply just as much to the caliper as to the protractor or the steel rule.

## Precision vs accuracy

These are two different notions, often confused:

- **Accuracy**: is the measurement close to the real value of the part?
- **Precision**: if the measurement is repeated several times, are the results close to one another?

| Situation | Accurate | Precise |
|---|---|---|
| Measurements grouped together, close to the real value | Yes | Yes |
| Measurements grouped together, but offset from the real value (instrument badly set) | No | Yes |
| Measurements scattered, centred on average on the real value | Yes | No |
| Measurements scattered and offset | No | No |

An instrument can therefore be very precise (repeatable results) without being accurate, for example if its zero is not set correctly. That is why you always check the zero before measuring, rather than trusting the display.

## Common sources of error

- **Parallax error**: reading a graduation at an angle rather than square to the eye distorts the reading; this mostly applies to the steel rule and vernier instruments.
- **Badly set zero**: on a digital caliper or a dial indicator, an offset zero shifts all the following measurements by the same amount.
- **Variable clamping force**: closing a caliper too hard slightly deforms a soft part (printed plastic) or distorts the reading; not closing it enough leaves play.
- **Poor contact surface**: printing burrs, dust or chips between the jaw of the instrument and the part.
- **Skewed measurement**: measuring a diameter or a thickness at an angle always gives a value larger than the true dimension.
- **Temperature**: materials expand slightly with heat, which is negligible on plastic at the scale of the MakerSpace, but a good thing to know.

## Good practice

{% include message.html title="Before measuring" message="Check the zero of the instrument, clean the jaws and the part, and make sure nothing gets in the way of the contact." status="is-info" icon="fas fa-circle-info" %}

- Always check the zero of the instrument before starting a series of measurements.
- Clean the jaws of the instrument and the surface of the part (dust, printing burrs, chips).
- Measure square to the dimension you want, never at an angle.
- Let the instrument "feel" the part rather than forcing it closed.
- Repeat the measurement 2 to 3 times, at different places on the part if its geometry allows: a printed or cut part is not always perfectly uniform.
- Put the instrument away properly after use: jaws gently closed, not left loose in a drawer with other tools that could damage it.

## Measurement uncertainty

No measurement is 100% exact: it always comes with an uncertainty, usually written with a $\pm$. A digital caliper generally claims a resolution of $\pm 0.02$ mm, a vernier model more like $\pm 0.05$ mm, but in practice the real uncertainty depends on the operator (parallax, clamping force, cleanliness) far more than on the resolution shown by the instrument.

At this level, the main thing to remember is this: **a single measurement proves nothing**. If a dimension matters, measure it several times and keep the most consistent value rather than the first one read.

## Concrete examples

On the [inspection gauge](/workshops/metrologie/) used in this workshop, measuring the same Ø10 mm hole at three different places around its edge rarely gives exactly the same value: this is normal, and it is precisely what these good practices help you spot, rather than taking the first reading at face value.

These notions are directly useful for quantifying the differences between a part and its design: [shrinkage in 3D printing](/docs/concepts/tolerances-fabrication/#shrinkage-and-over-width-in-fdm-3d-printing) and [kerf in laser cutting](/docs/concepts/tolerances-fabrication/#kerf-in-laser-cutting).

## Going further

- [Vernier reading simulator](/ressources/tools/general/simulateur-vernier/): practise reading a caliper
- [Why a manufactured part is never exactly to size](/docs/concepts/tolerances-fabrication/)
- [Calipers](https://en.wikipedia.org/wiki/Calipers), [protractor](https://en.wikipedia.org/wiki/Protractor) and [ruler](https://en.wikipedia.org/wiki/Ruler) on Wikipedia
- [Accuracy and precision](https://en.wikipedia.org/wiki/Accuracy_and_precision) on Wikipedia
- [International vocabulary of metrology (VIM)](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf), the BIPM reference for the definitions of trueness, precision and uncertainty
