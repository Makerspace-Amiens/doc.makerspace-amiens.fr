---
layout: documentation
lang: en
hide_hero: false
hero_image: puzzle-bot.jpg
hero_darken: true
image: puzzle-bot.jpg
component_toc: true
doc_header: true
type: tuto

title: The main stages of the project
subtitle: Form your team, design and test your machine...
description: This page details the stages of carrying out your project

time: 1
difficulty: 1

todo: 80
---

{% include step-tuto.html image="team.png" greyBackground = false title = "Step 1: Forming the team" content="The first step is to **form a team** of **6 students** with **complementary** skills to maximise your chances of success. Look at your own **strengths** and those of your classmates to **share out the roles** in a balanced way: **mechanics lead**, **electronics lead**, **software lead**...

Do not forget to set a **clear working framework** from the start, by agreeing on **communication rules** and choosing **collaborative tools** such as **Trello** or **GitHub Teams** to organise your tasks." %}

{% include step-tuto.html image="documentation.png" greyBackground = false title = "Step 2: Understanding the project and its objectives" content="Take the time to properly **understand** what the **project** expects, the **deliverables** to hand in, and the **deadlines**. Talk together to **clarify the objectives**: a working **Proof of Concept** for the **first period** and an **improved final version** for the **end of the project**.

Also list the **constraints** to respect, such as the **equipment available** or the **limits** imposed by time. This step is **necessary** to **align everyone's expectations** from the outset." %}

{% include step-tuto.html image="research.png" greyBackground = false title = "Step 3: Research and exploration" content="Do some **research** on similar machines or **open-source** projects. Identify the **concepts** that could **inspire** your machine and explore **technical tutorials**.

Use this step to **brainstorm** as a team and select the **most feasible ideas** given your **resources**, **wishes** and **skills**." %}

{% include step-tuto.html image = "target.png" greyBackground = false title = "Step 4: Defining the specifications" content="Describe precisely what your machine must **achieve**. Identify the **minimum features** needed for the **Proof of Concept**, such as **simply moving a piece**.

Then set the **long-term objectives**, such as **moves combined with a rotation** or **better precision**. This step also includes **choosing the electronic and mechanical components** to use." %}

{% include step-tuto.html image ="3D.png" greyBackground = false title = "Step 5: CAD design" content="Use **OnShape**, following the tutorial [**Getting started with OnShape**](../02-onshape-project), to **model** the **mechanical** parts of your machine. Create a **virtual assembly** to check how the **components fit together** and to spot any **problems** before manufacturing.

Use this step to **anticipate adjustments** and **optimise the design** according to the **technical** and **material constraints**." %}

{% include step-tuto.html image = "prototyping.png" greyBackground = false title = "Step 6: Rapid prototyping" content="Before making the final parts, build **quick prototypes** by breaking your assemblies down, using simple materials.

For example, to test how a motor fits into a part of your frame, print, or cut, only the portion of the part that interfaces with the motor: this saves a drastic amount of material and prototyping time. Once all the measurements are confirmed, you can finally produce the definitive part.

This method lets you **test your ideas**, identify the **weak points** of the design, and **correct** them before moving on to final manufacturing." %}

{% include step-tuto.html image = "make.png" greyBackground = false title = "Step 7: Making the parts" content="Move on to **making the final parts** with the **MakerSpace** tools, such as the **3D printers** and the **laser cutter**.

Take care to respect the **dimensions** and **tolerances** defined in your **CAD files** to ensure the **mechanical** and **electronic** components **fit together properly**." %}

{% include step-tuto.html image = "elec.png" greyBackground = false title = "Step 8: Electronics integration" content="Assemble the **electronic components**, such as the **stepper motors**, the **servo motors** and the **CNC Shield**.

Wire the elements correctly by following the **wiring diagrams**, and check each **connection** before testing the whole. This step calls for **precision** to avoid **malfunctions**." %}

{% include step-tuto.html image = "program.png" greyBackground = false title = "Step 9: Programming" content="Write the **code needed** to drive your machine with **Arduino**. Start by programming **basic features**, such as **moving the motors** along **simple paths**.

Test regularly to **find bugs** and **adjust the parameters**." %}

{% include step-tuto.html image = "tune.png" greyBackground = false title = "Step 10: Calibration" content="Adjust and **calibrate your machine** to guarantee **precise** operation. Check the **alignment of the axes**, the **travel distances** and the **precision with which pieces are picked up**.

Run **tests** with simple moves (**squares**, **circles**) and **fine-tune the settings** according to the **results obtained**." %}

{% include step-tuto.html image = "render.png" greyBackground = false title = "Step 11: Documentation and first deliverables" content="Compile the **results of the first POC** by preparing an **OnShape** document of your **machine**, **documentation**, and a **15-minute technical presentation**.

These **deliverables** must reflect your **progress** and the **technical choices** made so far." %}

{% include step-tuto.html image = "upgrade.png" greyBackground = false title = "Step 12: Improvements for the final version" content="Identify the **weak points** of your **POC** and make **improvements** to develop a **better-performing final version**.

Focus on the **precision**, **reliability** and **appearance** of your machine, while adding **new features** if possible." %}

{% include step-tuto.html
image="draw.png"
greyBackground=false
title="Step 13: Vision and image recognition"
content="Work on **integrating computer vision** so that your machine can **perceive its environment**. Set up methods for **detecting and recognising visual elements** (shapes, colours, positions) from images or video streams. Explore different approaches (classical image processing, dedicated libraries) to improve the **reliability**, **precision** and **robustness** of the recognition, in line with the hardware and timing constraints of your system."
%}

{% include step-tuto.html image = "render.png" greyBackground = false title = "Step 14: S2 documentation and deliverables" content="Document the **final version** of your machine in detail so that someone else can **reproduce** or **improve** it.
Prepare a **final video** showing **how it works**, a **complete technical report**, and your **presentation** for the defence." %}

{% include step-tuto.html image = "presentation.png" greyBackground = false title = "Step 15: Presentation at the Projects Day" content="Prepare a **stand** to present your machine at the **Projects Day**. Highlight the **processes carried out**, the **challenges overcome** and the **skills acquired**.

Be ready to **answer questions** from a **jury of professionals** and to **demonstrate how your machine works**." %}

{%
  include card_collections.html
  title="Going further"
  description="Find other tutorials related to the project"
  type="tuto"
%}
