---
layout: documentation
lang: en
hide_hero: false
doc_header: false
component_toc: true
hero_image: otto-mks.jpg
hero_darken: true
image: otto-mks.jpg
title: The Otto robot
subtitle: Discover the Otto robot
tag: otto-mks
---

## What is Otto?

The Otto robot is a small open-source humanoid robot, developed to teach the basics of robotics and programming. Easy to assemble and customise, Otto suits children, students and robotics enthusiasts. It is often used in schools and makerspace workshops to introduce young people to STEM (Science, Technology, Engineering, Mathematics).

{% include image-row.html
image_1 = "Otto_Original.png"
image_2 = "Otto_Original_Pose.png"
%}

## Otto in 4 key points

- **Open source**: The project is freely available online, with plans, 3D design files and assembly guides.
- **Modular**: Otto can be customised by adding mechanical elements or various sensors, sound modules, LEDs and so on.
- **Programmable**: The robot can be programmed with Arduino, or with visual programming platforms.
- **3D printing**: The parts of the robot can be 3D printed, so users can make their own Otto.

## Otto-MKS

Building on this project, we created a custom version, made at **UniLaSalle Amiens**, **improving and modifying some points**: for example, our version of Otto can connect to a phone over **Bluetooth** or **Wi-Fi**!

{% include image-row.html
image_1 = "Otto-MKS-EXPLODED.png"
image_2 = "OTTO-MKS.png"
%}

To build an **Otto-MKS**, you will be given the following components:

{% include step-tuto.html
greyBackground = false
image = "PCB.jpg"
title="Otto-MKS electronic board"
content="Custom designed at the **MakerSpace**, this board includes an **ESP32** microcontroller, an **LED**, a **switch**, outputs for servo motors, a slot for an HC-SR04 ultrasonic sensor and other connectors for possible additional components (gyroscope, display...)" %}

{% include step-tuto.html
greyBackground = false
image = "servo.png"
title="Servo motors"
content="4 servo motors for the **walking movements**" %}

{% include step-tuto.html
greyBackground = false
image = "HC-SR04.png"
title="Ultrasonic sensor"
content="Lets the robot get **information about its environment** (presence, distance, movement...)" %}

{% include step-tuto.html
greyBackground = false
image = "Battery.png"
title="Rechargeable 9V battery"
content="A battery **rechargeable over USB-C** with the standard dimensions of a **9V battery**, which makes it simple to connect" %}

## Ottolympics

In **groups of 3**, you will build your own **OTTO-MKS** with the **tutorials** and **resources** of this site!
At the end of the year, on **Projects Day**, a big **tournament** is held to test your robots in several events!

{%
  include card_collections.html
  title="Events"
  description="Test your robot on every kind of ground!"
  type="ottolympiades"
%}

To try to win these events, you will have to be **creative**, modifying your robots as you like while following the rules set out here:

{% include message.html title="Coming soon!" message="Work in progress... Available soon!"
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

**Imagine**, **test**, **iterate**, **program**, add **arms**, **sensors**, **lights**... in short, make the Otto-MKS project your own!

## Academic expectations

On this first-year project, you are marked on these deliverables:

- A working robot
- A 1-minute video in **portrait** format presenting your project **professionally**
- The OnShape file of your modified OTTO-MKS
- A **project report** OR a documentation **website**
- Your participation in the **Ottolympics**

## Resources

- **Official website**: [Otto DIY](https://www.ottodiy.com/)
- **Community**: Otto DIY has an active community that shares ideas, modifications and improvements for the robot.
