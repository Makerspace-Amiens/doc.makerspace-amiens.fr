---
layout: documentation
lang: en
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: concept
tag: machine-that-draws

title: Types of drawing machines
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
image="image.png"
image_2="image-1.png"
image_3="image-2.png"
image_4="image-3.png" %}

{% include step-tuto.html
greyBackground = true
title="Cartesian machine"
content="Cartesian machines work with an X, Y (and sometimes Z) coordinate system. A drawing head moves along perpendicular axes to reach any point in a rectangular work area. It is the basic system of many 3D printers and CNC plotters. They are simple to build and offer high precision, which makes them ideal for projects that need technical or detailed drawings."
image="image-4.png"
image_2="image-5.png"
image_3="image-6.png"
image_4="image-7.png" %}

{% include step-tuto.html
greyBackground = true
title="Core XY"
content="The Core XY system is a sophisticated variation on Cartesian machines, using two motors to move the drawing head along the X and Y axes at the same time. This allows faster, smoother motion while reducing vibration, which improves the quality of the drawings. If you are interested in optimising mechanical performance, you may find this concept particularly appealing."
image="image-8.png"
image_2="image-9.png"
image_3="image-10.png"
image_4="image-11.png" %}

{% include step-tuto.html
greyBackground = true
title="Mobile plotter"
content="A mobile plotter is a machine that can move freely over a surface to draw, like a robot or a wheeled machine. This type of machine is often used to draw large patterns on the floor or on other flat surfaces. These plotters are compact and mobile, and can offer unique creative possibilities, in particular for interactive or oversized artworks."
image="image-12.png"
image_2="image-13.png"
image_3="image-14.png"%}

{% include step-tuto.html
greyBackground = true
title="Vertical polar machine"
content="Vertical polar machines, such as wall plotters (DrawWall), draw on vertical surfaces using two motors placed at the top that move a suspended drawing head. This type of machine is ideal for murals or large-scale drawings. Their simple yet innovative mechanics offer a wide field to explore for artistic or decorative projects."
image="image-15.png"
image_2="image-16.png"
image_3="image-17.png"%}

{% include step-tuto.html
greyBackground = true
title="Articulated arm machine"
content="These drawing machines use one or more mechanical arms to move a drawing tool, such as a pen, over a surface. The movements of the arms make it possible to trace curves, lines and complex patterns. This type of design is inspired by industrial manipulator robots and offers flexibility and originality in the way of drawing. Articulated arm machines are perfect for exploring the concepts of kinematics and motor control. "
image="c6bddf4770887618897bd1237fdac89f.gif"
image_2="image-19.png"
image_3="image-20.png"
image_4="image-22.png" %}

---

{%
  include card_collections.html
  title="Going further"
  description="Find other tutorials related to the project"
  type="tuto"
%}
