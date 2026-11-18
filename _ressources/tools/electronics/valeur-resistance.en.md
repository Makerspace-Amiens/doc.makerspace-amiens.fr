---
layout: documentation
lang: en
image: resistances.jpg
hide_hero: false
hero_image: resistances.jpg
hero_darken: true
component_toc: true
doc_header: true

title: Resistor value viewer
subtitle: Resistor colour code calculator
description: Decode the colour bands of a resistor to find its value in ohms, or enter a value to get the matching colours.
author: Adrien Bracq

todo: 10

---

## 1. Understanding resistors and their markings

A resistor is an electronic component that limits the flow of electric current in a circuit. Its value, expressed in ohms (Ω), sets how much current can flow for a given voltage.

Because resistors are very small, their value is not printed in digits but encoded with colour bands. Each band carries one piece of information:

- **1st and 2nd band (and sometimes the 3rd):** significant digits of the value.
- **Next band:** multiplier (a power of 10).
- **Last band:** tolerance, that is, how accurate the value is (±5% for example).

This page lets you turn colours into a value or, the other way round, enter a value in ohms to get the matching colours.

## 2. Viewer

![alt text](resistance.png)

{% include value-resistor.html %}
