---

layout: documentation
lang: en
hide_hero: false
hero_image: otto_pull.png
hero_darken: true
image: otto_pull.png
component_toc: true
doc_header: true

title: 💪 Tug of war
subtitle: Two teams of 3 robots compete to pull their opponents over to their side!
description: Under remote control, two teams of robots pull on a rope to bring the red marker over to their side of the line.
author: Adrien BRACQ & Rémi LACOMBE

---

{% include message.html title="Warning" message="This page may change; remember to check it regularly  
**V1.3 16/05/2025**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

## Presentation

The **Tug of war** event pits two teams of three robots against each other, linked by sections of rope; they must pull to bring a red marker over to their side of the centre line. The event is played in **remote-controlled mode**, and takes thought and coordination to win.

## Rules

This event is played in teams of 3 robots, to be formed before the Ottolympics.

{% include step-tuto.html
greyBackground = true
title = "Conditions and constraints"
content="

- The three robots of a team are linked by 8 cm **elements** attached to a **hook-and-loop strap** placed around the body of each robot.
- On the other side are three more **elastic rings** for the opposing robots.
- The event is played in remote-controlled mode.
  "
  image="otto_pull_linked.png" %}

{% include step-tuto.html
greyBackground = true
title = "How the event runs"
content="

- **Starting position**:
  - The first robot stands behind the start line, and the other two robots are positioned behind it, ropes taut.
  - The referee checks how the elastics are placed on the bodies of the robots
- **Start of the match**:
  - The event is played in **remote-controlled mode**.
  - The match begins when the referee gives the start signal.
- **End of the match**:
  - The match ends as soon as a team manages to drag the **red marker**, in the middle of the rope, over to its side of the **centre line**.
    "
    image="otto_pull_chain.png"
    image_2="otto_pull_chain_win.png"%}

{% include step-tuto.html
greyBackground = true
title = "Final and ranking"
content="
This event is above all **friendly**: the aim is to try out collective strategies between robots!

Participants can compete **as many times as they like**, forming **teams of three robots as they wish.**" image="victory.png" %}

## Game elements

{% include 3d-model.html model="OTTO_PULL_TRACK.glb" poster="poster.webp" fullscreen_modal=true %}

## Other events

{%
  include card_collections.html
  description="Test your robot on every kind of ground!"
  type="ottolympiades"
%}
