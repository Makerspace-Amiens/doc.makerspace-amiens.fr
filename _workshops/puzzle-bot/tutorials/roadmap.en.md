---
layout: documentation
lang: en
hide_hero: false
hero_image: matches_0_1weight.png
hero_darken: true
image: matches_0_1weight.png
component_toc: true
doc_header: true
type: tuto

title: Technical roadmap
subtitle: A suggested technical sequence for the project
description: This page details the stages of carrying out your project

time: 1
difficulty: 1

todo: 80
---

## Introduction – Vision and puzzle handling

The aim of this part of the project is to design a **robotic system** able to **perceive**, **locate**, **orient** and **handle** puzzle pieces, with a **gradual increase in complexity**.
Rather than aiming straight away for a realistic, complex case, the work proposed follows an **iterative approach**, in which each stage validates an essential technical building block of the system.

The progression is deliberately broken down so as to introduce **only one new difficulty at a time**. Each stage must be **validated experimentally** before moving on to the next. This approach makes it easier to identify sources of error, to consolidate what has been learned and to guarantee a working system at all times.

It is perfectly acceptable, and sometimes advisable, to stop at a fully working intermediate level, provided it is **robust**, **well mastered** and **properly documented**. The quality of the approach and the understanding of the system matter more than the final complexity.

{% include message.html
title="Information"
message="Do not forget to take photos and to document each stage as you go on your documentation site."
status="is-info"
dismissable="false"
icon="fas fa-exclamation-triangle"
%}

---

{% include step-tuto.html image="etape-01.png" greyBackground = false
title = "Stage 1: Simple puzzle – known position and orientation"
content="Start with a **very simple puzzle** made of **4 to 6 square pieces**, with no complex shapes or tabs.

Assumptions:

- The **position** of each piece is known in advance
- The **orientation** of each piece is known

Objectives:

- Validate the **complete robotic chain** (pick, move, place)
- Define a **common frame of reference** (table, robot, world)
- Test the **mechanical precision** and repeatability

No complex vision function is needed at this stage. This stage checks that the robot can assemble a puzzle in ideal conditions."
%}

{% include step-tuto.html image="etape-02.png" greyBackground = false
title = "Stage 2: Simple puzzle – variable orientation"
content="The pieces are still placed at **known positions**, but their **orientation now varies**.

Assumptions:

- The position is known
- The orientation must be taken into account

Objectives:

- Introduce the **notion of rotation**
- Adapt the **pick and place** to the orientation
- Test the first methods for estimating the angle (your choice)

This stage adds a targeted difficulty without calling the overall structure of the system into question."
%}

{% include step-tuto.html image="etape-03.png" greyBackground = false
title = "Stage 3: Detecting the pieces with ArUco markers"
content="Each piece carries an **ArUco marker** that lets the robot know its **position** and **orientation**.

Assumptions:

- The initial positions of the pieces are no longer known
- Vision provides the spatial information

Objectives:

- Detect the ArUco markers
- Extract the **position (x, y)** and the **orientation (θ)**
- Set up the **camera frame → robot frame** transformation

At the end of this stage, the robot knows **where the pieces are** and **how they are oriented**, and can plan how to handle them."
%}

{% include step-tuto.html image="etape-04.png" greyBackground = false
title = "Stage 4: Vision-guided puzzle assembly"
content="The puzzle has a **known solution** and the robot uses vision to guide the assembly.

Objectives:

- Chain detection → pick → place
- Handle positioning **errors** and the correct interlocking of the pieces
- Test the **robustness** and repeatability of the system

This stage aims to make the whole vision–handling chain reliable in a controlled scenario."
%}

{% include step-tuto.html image="etape-05.png" greyBackground = false
title = "Stage 5: Extensions and increasing complexity"
content="Once the system works, several developments are possible depending on the ambition of the group:

- **Removing the ArUco markers** and detecting by shape or colour
- Using **more complex puzzle pieces** (tabs, non-convex shapes)
- Introducing **partial uncertainties** (unknown position or orientation)

These extensions test the **precision**, the **robustness** and the limits of the system developed."
%}

---

{%
  include card_collections.html
  title="Going further"
  description="Find other tutorials related to the project"
  type="tuto"
%}
