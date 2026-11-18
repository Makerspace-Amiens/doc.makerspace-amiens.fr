---
layout: documentation
lang: en
hide_hero: false
hero_image: otto_run.png
hero_darken: true
image: otto_run.png
component_toc: true
doc_header: true

title: ⏱️ Chrono challenge
subtitle: "Your robot, a straight line: set the best time!"
description: Make your robot walk as fast as possible along a 1 m track!

author: Adrien BRACQ & Rémi LACOMBE
---

{% include message.html title="Warning" message="This page may change; remember to check it regularly  
**V1.5 16/05/2025**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

## Presentation

The **Chrono Challenge** event is a speed race in which robots must cover a **1 m** track as fast as possible, with no human intervention.

## Rules

{% include step-tuto.html
greyBackground = true
title = "Conditions and constraints"
content="

- The robot is **autonomous**; no remote control is allowed.
- The robot must **not move** before the board is removed.
- If the robot stops before the line, the attempt is void.
- No obstacle is placed on the track, but unevenness of the ground can affect the race.
- **Vertical walls** 20 cm high run along the sides of the track
- Each team has as many attempts as it wishes (subject to track availability); only the **best time** is kept."
image="otto_wake.png" %}

{% include step-tuto.html
greyBackground = true
title = "How the event runs"
content="

- **Starting position**:
  - Your robot is placed behind the start line, **completely still**.
  - A **board is positioned 5 cm** in front of its ultrasonic sensor.  

- **Start of the event**:
  - When the board is **removed**, the robot must start and move forward **autonomously**.  

- **End of the event**:
  - The clock stops when the robot crosses the finish line, **1 m** away!  

"
image="otto_wall.png"
image_2="otto_race_solo.png"%}

{% include step-tuto.html
greyBackground = true
title = "Final and ranking"
content="
⏱️ Once all the runs are done, **the three best times** decide the podium.

**🏆 The winner is the team with the fastest time!**"
image = "otto_race_winner.png"
image_2="victory.png" %}

## Game elements

{% include 3d-model.html model="OTTO_RACE_TRACK.glb" poster="poster.webp" fullscreen_modal=true %}

## Other events

{%
  include card_collections.html
  description="Test your robot on every kind of ground!"
  type="ottolympiades"
%}
