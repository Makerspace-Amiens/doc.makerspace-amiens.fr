---
layout: documentation
lang: en
hide_hero: false
hero_image: bounding_box.png
hero_darken: true
image: bounding_box.png
component_toc: true
doc_header: true

title: 📏 Homologation
subtitle: All the rules to follow in order to take part in the events!
description: All the rules to follow in order to take part in the events!

author: Adrien BRACQ & Rémi LACOMBE
---

{% include message.html title="Warning" message="This page may change; remember to check it regularly  
**V1.3 27/02/2025**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

## Design rules

{% include step-tuto.html
greyBackground = true
title = "Dimensions"
content="First, your robot must fit, with its actuators fully extended, within a **volume** of:

**Width: 150 mm**  
**Length: 150 mm**  
**Height: 200 mm**  

To validate this rule, your robot must fit into a **box of the right dimensions**."
image="bounding_box.png" %}

{% include step-tuto.html
greyBackground = true
title = "Locomotion"
content="Although adding new actuators is allowed, your robot **must** move by **walking**."
image="must_walk.png" %}

{% include step-tuto.html
greyBackground = true
title = "Manufacturing"
content="Your robot must be **made** and **programmed** by the students, without using an off-the-shelf kit."
image="keep_aspect.png" %}

{% include step-tuto.html
greyBackground = true
title = "Modification"
content="**Modification is strongly encouraged**, have fun! But the robot must keep the **spirit** and the **look** of the Otto project.
You can add new actuators (arms, hands...), but they must not be able to damage the opposing robot.
Dangerous devices are obviously forbidden (lasers, blades, flames... **in short, do not make us add new rules** 😅)."
image="otto_mod.png" %}

{% include step-tuto.html
greyBackground = true
title = "On / Off"
content="
The power **switch** must remain accessible to the referee at all times, so that the robot can be stopped if it becomes a danger to **itself**, to the **other robots** or to the **game elements**."
image="otto_switch.png" %}

## Behaviour

{% include step-tuto.html
greyBackground = true
title = "Control mode"
content="Depending on the event, **two operating modes** may be required, as specified in the rules of the event:

**Autonomous mode**  
Your robot must be able to complete the event **without outside help**; it must therefore be **programmed in advance** to play.
The start signal is specific to each event and is given in its rules.

**Remote-controlled mode**  
You will have to program a **remote control solution**, for example with the [RemoteXY](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/10-remoteXY/) application."
image="command_mode.png" %}

{% include step-tuto.html
greyBackground = true
title = "Program"
content="
No programming language is imposed; however, the team must be able to **explain** in detail the logic of the **programs** it deploys:  

Using artificial intelligence is **not forbidden**; but use it as a **learning aid**."
image="otto_program.png" %}

{% include step-tuto.html
greyBackground = true
title = "Refereeing"
content="The referee undertakes to know the rules; during matches, their position and their decisions must therefore be respected."
image="otto_referee.png" %}
