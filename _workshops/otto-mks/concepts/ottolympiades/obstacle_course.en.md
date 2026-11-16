---
layout: documentation
lang: en
hide_hero: false
hero_image: otto_obstacle.png
hero_darken: true
image: otto_obstacle.png
component_toc: true
doc_header: true

title: 🚧 Obstacle course
subtitle: Cross a course strewn with obstacles in record time!
description: Drive your robot remotely through a course without knocking over the obstacles, in as little time as possible.
author: Adrien BRACQ & Rémi LACOMBE
---

{% include message.html title="Warning" message="This page may change; remember to check it regularly  
**V2.0 07/03/2025**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}  

## Presentation  

The **Obstacle course** event tests the precision and speed of the drivers. Each team must guide its robot through a **field of obstacles** made of **upturned cones**, while **avoiding knocking them over**.  
The aim is to **cross the finish line in record time**. Each cone knocked over incurs a **5-second penalty** added to the final time.  

## Rules  

{% include step-tuto.html  
greyBackground = true  
title = "Conditions and constraints"  
content="  

- The event is played in **remote-controlled mode**.  
- Each team has as many attempts as it wishes (subject to track availability); only the **best time** is kept.  
- The robot must **stay within the limits of the course**.  
- **Each cone knocked over incurs a 5-second penalty added to the final time.**  
"  
image="otto_wake.png" %}  

## How the event runs  

{% include step-tuto.html  
greyBackground = true  
title = "How the event runs"  
content="  

- **Starting position**:  
  - The robot is placed in the start area.  
- **Start of the match**:  
  - The referee gives the start signal, and the robot can begin its attempt.  
  - It must cross the field of obstacles without knocking over the cones.  
- **End of the match**:  
  - The clock stops when the robot **crosses the finish line**.  
  - Penalties are added to the total time.  
"  
image="otto_obstacle_start.png" %}  

{% include step-tuto.html  
greyBackground = true  
title = "Ranking"  
content="  
🏆 **The winning team is the one with the best time, penalties included.**  
"  
image="victory.png" %}  

## Game elements  

{% include 3d-model.html model="OTTO_OBSTACLE_SCENE.glb" poster="poster.webp" fullscreen_modal=true %}

## Other events  

{% include card_collections.html  
description="Test your robot on every kind of ground!"  
type="ottolympiades" %}
