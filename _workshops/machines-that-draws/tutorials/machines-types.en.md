---
layout: documentation
lang: en
hide_hero: false
hero_image: traceur-alimentation-continue-1.png
hero_height: is-small
hero_darken: true
image: traceur-alimentation-continue-1.png
component_toc: true
doc_header: true
tag: machines-that-draws

title: Types of machines
subtitle: Discover different types of machines and motion
description: Discover different types of machines and motion

time: 1
difficulty: 1

---
In this section, you will discover several kinds of kinematics that are interesting for designing a machine able to draw. Each one has unique characteristics and specific challenges. You are invited to explore these options and choose the one that best fits your project.

We also encourage you to do further research on the kinematics that interests you. Understanding how it works, its advantages and its limits will help you design an effective, innovative machine. Be creative and do not hesitate to experiment!

---

{% include step-tuto.html
greyBackground = true
title="Continuous-feed plotter"
content="
A continuous-feed plotter is a machine able to draw or print on a roll of media. It is commonly used for architectural plans or long prints, because it can produce drawings of unlimited length. The media is moved under the drawing head by motorised rollers. This type of machine works well for repetitive jobs that need large surfaces."
image="traceur-alimentation-continue-1.png"
image_2="traceur-alimentation-continue-2.png"
image_3="traceur-alimentation-continue-3.png"
image_4="traceur-alimentation-continue-4.png" %}

{% include step-tuto.html
greyBackground = true
title="Cartesian machine"
content="Cartesian machines work with an X, Y (and sometimes Z) coordinate system. A drawing head moves along perpendicular axes to reach any point in a rectangular work area. It is the basic system of many 3D printers and CNC plotters. They are simple to build and offer high precision, which makes them ideal for projects that need technical or detailed drawings."
image="machine-cartesienne-1.png"
image_2="machine-cartesienne-2.png"
image_3="machine-cartesienne-3.png"
image_4="machine-cartesienne-4.png" %}

{% include step-tuto.html
greyBackground = true
title="Core XY"
content="The Core XY system is a sophisticated variation on Cartesian machines, using two motors to move the drawing head along the X and Y axes at the same time. This allows faster, smoother motion while reducing vibration, which improves the quality of the drawings. If you are interested in optimising mechanical performance, you may find this concept particularly appealing."
image="core-xy-1.png"
image_2="core-xy-2.png"
image_3="core-xy-3.png"
image_4="core-xy-4.png" %}

{% include step-tuto.html
greyBackground = true
title="Mobile plotter"
content="A mobile plotter is a machine that can move freely over a surface to draw, like a robot or a wheeled machine. This type of machine is often used to draw large patterns on the floor or on other flat surfaces. These plotters are compact and mobile, and can offer unique creative possibilities, in particular for interactive or oversized artworks."
image="traceur-mobile-1.png"
image_2="traceur-mobile-2.png"
image_3="traceur-mobile-3.png"%}

{% include step-tuto.html
greyBackground = true
title="Vertical polar machine"
content="Vertical polar machines, such as wall plotters (DrawWall), draw on vertical surfaces using two motors placed at the top that move a suspended drawing head. This type of machine is ideal for murals or large-scale drawings. Their simple yet innovative mechanics offer a wide field to explore for artistic or decorative projects."
image="machine-polaire-verticale-1.png"
image_2="machine-polaire-verticale-2.png"
image_3="machine-polaire-verticale-3.png"%}

{% include step-tuto.html
greyBackground = true
title="Articulated arm machine"
content="These drawing machines use one or more mechanical arms to move a drawing tool, such as a pen, over a surface. The movements of the arms make it possible to trace curves, lines and complex patterns. This type of design is inspired by industrial manipulator robots and offers flexibility and originality in the way of drawing. Articulated arm machines are perfect for exploring the concepts of kinematics and motor control. "
image="bras-articule-1.gif"
image_2="bras-articule-2.png"
image_3="bras-articule-3.png"
image_4="bras-articule-4.png" %}
