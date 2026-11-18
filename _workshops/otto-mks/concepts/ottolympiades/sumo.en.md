---
layout: documentation
lang: en
hide_hero: false
hero_image: otto_sumo.png
hero_darken: true
image: otto_sumo.png
component_toc: true
doc_header: true

title: ⚔️ Otto Sumo
subtitle: Two robots, one duel, only one left standing!
description: Push the opposing robot out of the arena in a 100% autonomous fight!

author: Adrien BRACQ & Rémi LACOMBE
---
{% include message.html title="Warning" message="This page may change; remember to check it regularly  
**V1.5 30/04/2025**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

## Presentation

The **Otto Sumo** event is a fight between autonomous robots in which the aim is to push the opponent **out of the arena**. Two robots face each other on a raised **circular platform** **45 cm in diameter**. The first robot to leave the fighting area loses the round. No manual control is allowed: the robots must act **fully autonomously**.

## Rules

{% include step-tuto.html
greyBackground = true
title = "Conditions and constraints"
content="

- The robot is **autonomous**; no remote control is allowed.
- **No violent blows**: robots must push, not damage the opposing robot.
- **No detachable elements**: robots must not lose parts during the fight."
image="otto_wake.png" %}

{% include step-tuto.html
greyBackground = true
title = "How the event runs"
content="

- **Starting position**:
  - The robots are placed **face to face**, switched off, on a **raised disc 45 cm in diameter**.
  - They are placed **10 cm apart**, behind a **start line**.  
- **Start of the match**:
  - The robots are switched on and must perform a **shiko**, the ritual at the start of a sumo match, which consists of lifting each foot in the air and stamping the ground hard. If the robot performs the ritual correctly:  
      ➤ A **half bonus point** is awarded.  
  - A **board is placed** between the two robots to block their sensors.

  - **The referee lifts the board** to start the event.
  - The robots must start **autonomously**.
- **End of the match**
  - Each robot must try to **push the opponent out of the arena**.
  - **Maximum duration**: a match cannot exceed **3 minutes**.
  - A match can end in several ways:

   | Way of winning       | Description                                                                                            | Points awarded   |
   |----------------------|--------------------------------------------------------------------------------------------------------|------------------|
   | **Inactivity**       | The opposing robot does not start. The robot performs an action without meeting the winning conditions. | 1 point          |
   | **Immobilisation**   | The opposing robot is blocked and stays stuck against the edge for 5 seconds                           | 2 points         |
   | **Sudden death**     | The opposing robot is ejected from the arena                                                           | 3 points         |
   | **Draw**             | Neither robot meets the winning conditions. Both robots took part without a winner emerging.           | 1 point each     |

- **Role of the referee**
  - Check that the robots comply before each match.
  - Start and time the match.
  - Judge the winning conditions.
  - Rule on any dispute or unforeseen situation.

"
image="otto_sumo_wall.png"
image_2="otto_sumo_fall.png"%}

{% include step-tuto.html
greyBackground = true
title = "Final and ranking"
content="
Each team is assigned, at random and depending on the number of participants, between **three and five matches**:

- The **robots score points** during the match phase.
- After the matches, the **four teams with the most points** go through to the **final stages**.
- The semi-finals pit:
  - the **1st team** against the **4th**
  - the **2nd team** against the **3rd**
- The **winners of the semi-finals** then meet in the **final** to decide the winner of the tournament.
- If time allows, a **third-place match** is also held between the losing semi-finalists, to decide **3rd place**.
"
image="victory.png" %}

## Game elements

---

{% include_relative sumo/sumo_model.html %}

---

## Other events

{%
  include card_collections.html
  description="Test your robot on every kind of ground!"
  type="ottolympiades"
%}
