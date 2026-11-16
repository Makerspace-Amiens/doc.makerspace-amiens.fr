---
layout: documentation
lang: en
image: hero-motor-calculator.jpg
hide_hero: false
hero_image: hero-motor-calculator.jpg
hero_darken: true
component_toc: true
doc_header: true

title: Robot drive motor sizing tool
subtitle: An online calculator to size your motors
description: An automatic script that computes the motor data for a robot.
author: Adrien Bracq

---

## 1. Overview and method

The method and the tool are based on the work of [cbenson](https://www.robotshop.com/community/user/cbenson), published on the [Robotshop](https://www.robotshop.com/community/blog/show/dimensionnement-dun-moteur-dentranement) website in 2013.

The tool lets you quickly size drive motors (for a robot, for example) so that you can pick them from a catalogue.

A few points to watch:

* Results are given **per** output
* Mind the units
* The calculator does not take into account any gearbox fitted to the motor output. Rather than looking for another motor, it is sometimes worth adding a gearbox on the output to meet the requirements.
* Keep the "maximum incline" value at 20° or more, even on flat ground.

## 2. Calculator

{% include calculator-motor.html %}
