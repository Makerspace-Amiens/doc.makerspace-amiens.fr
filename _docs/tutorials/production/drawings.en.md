---
layout: documentation
lang: en
image: part1_drawing.png
hide_hero: false
hero_image: part1_drawing.png
hero_darken: true
component_toc: true
doc_header: true

title: Introduction to technical drawing
subtitle: How to read, use and create a drawing with CAD software
description: This page explains how a detail drawing works, how to use it to create a part in CAD software, and then how to create your own drawings.
author: Camille Chaud
type: tutorial

time: 1
difficulty: 1
compatibilities-os: win,mac,lin

prerequisites:
  - label: CAD basics
    link: ""

softwares:
  - label: OnShape
    link: ""

todo: 10
---

{% include message.html title="Information"
message="This tutorial presents **the basics of technical drawing**, and more specifically of the **detail drawing**, so that you can make the practice parts from the drawings provided. There are many more subtleties that are not covered here; feel free to look into them yourself."
status="is-info"
icon="fas fa-info-circle" %}

## The different types of technical drawings

**Technical drawing**, or engineering drawing, is a graphical language. There are different types, each with its own uses and specific rules, and not all of them are covered here.

### The assembly drawing

An **assembly drawing** is a document showing all the elements that make up a technical object. The assembly drawing of an object shows **how the elements are assembled together.** It often comes with a **parts list** (bill of materials), a document listing every element of the object shown on the assembly drawing. These elements are identified by a number on the drawing, and each has a designation, information about its characteristics, and so on.

![dessin_ensemble](dessin_ensemble.png)

### The detail drawing

A **detail drawing**, for its part, represents a **single part** or a portion of an object projected onto a plane with all its details, such as dimensions in **standardised dimensioning** and machined features.

![part1_drawing](part1_drawing.png)

The **detail drawing** is a very important tool for engineers and for industry in general. If you want to have your part produced or inspected, this is the document you will have to send. You will sometimes need your STEP file, but the drawing is the authoritative document. You really should think of it as a **universal language of communication** between the various players in the technical world. It gives a graphical representation of a technical product, and it is standardised. It can have **legal value**, serve as a **construction plan** and much more; you must be able to understand it and **extract the important information from it**.

{% include message.html title="A running example: the first practice part" message="Throughout this section, we will work with the first practice part, which you will then have to make in Onshape."  status="is-success" icon="fas fa-check" %}

{% include image-row.html
image_1 = "03_haut.png"
image_2 = "03_bas.png"
%}

{% include 3d-model.html model="Equerre.gltf" poster="Equerre_poster.webp" fullscreen_modal=true %}

## What does a detail drawing look like, and what information does it contain?

The purpose of a detail drawing is to **describe a part completely using as few views as possible**. Sometimes a **perspective view** is added to help understanding, and a **section view** for internal details. There is also a **title block** (a framed box) with information on the history and manufacture of the part.

Depending on what is needed, the drawing may also contain:

* Dimensions
* Tolerances
* Surface finish
* Specific operations (holes, tapped holes and so on)
* ...

### Title block

A **title block** is a reserved area, often at the bottom of the page of a technical drawing. It acts as the **identity card of a detail drawing** and gives all the essential information: the origin of the drawing, the company, the author, the scale, the title, the date, the format, the name of the part, the materials, the operations, the tolerances and so on.

![part1_title_block](part1_title_block.png)

### The different types of lines and their functions

| | Types of lines and their meaning | Representation |
|---|---|---|
| **Continuous line** | thick, for visible edges and outlines |-----------|
| **Dashed line** | thin, for hidden edges and outlines |- - - - -|
| **Chain line** | for axes of revolution and planes of symmetry |-.-.-.-.-|

When two lines overlap, only the continuous line remains visible.

### The basic rules of projection

A detail drawing aims to define a part completely and unambiguously using **orthographic projections**, which are governed by international standards (e.g. ISO 128 and ISO 5456-2).
The same method is thus applied to every part, which makes a drawing easier to read.

{% include step-tuto.html
greyBackground = true
content ="The faces of an object are defined according to how it is placed in space."
image ="directions_observation.png"%}

{% include step-tuto.html
greyBackground = true
content ="To make the orthographic projection of a face, imagine standing in the viewing direction: each point is projected perpendicularly onto the projection plane. Visible edges are drawn as solid lines."
image ="projection_orthogonale.png"%}

Then, following the European convention, each view is projected onto the wall behind the object.

![projection](cube_projection.png)

Once all the faces have been projected, unfolding the cube like a net around the front view gives the standard placement of the views. The different projections gathered in one drawing all correspond to one another. All the views are rarely shown on a detail drawing: 3 views are generally enough to define an object. The aim is maximum definition and clarity in describing the shapes and dimensions of the part.

![dépliage](projections_depliage.png)

{% capture msg_projection %}
The **European** standard (first-angle projection, method E, used in France) and the **American** one (third-angle projection, method A) do not place the views in the same position. Before reading a drawing, always look for the **projection symbol in the title block**.

| | **European method (E)** | **American method (A)** |
|---|:---:|:---:|
|**Symbol** | ![European method symbol](methode_europeenne.png){: width="150"} | ![American method symbol](methode_americaine.png){: width="150"} |
| **Top view** | below the front view | above the front view |
|**Left view** | to the right of the front view | to the left of the front view |
|**Right view** | to the left of the front view | to the right of the front view |
{% endcapture %}

{% include message.html title="Warning: two projection conventions"
message=msg_projection
status="is-warning"
icon="fas fa-exclamation-triangle" %}

### Cut views and sections

The cut view is a commonly used mode of representation. It shows internal details of the system that are hard to show in an outside view. The cut view of our example part is thus of little or no use, since there are no volumes hidden from an outside view. It is shown here as an example.

{% include step-tuto.html
greyBackground = true
title ="Principle of a cut view"
content ="

1. Take the complete part.
2. Imagine a plane passing through the part.
3. Redraw all the areas of the part that this plane cuts. "
image ="section_coupe.png"%}

{% include step-tuto.html
greyBackground = true
content ="

* The label 'section A-A' shows the *slice of material* touched by the cutting plane.
* The label 'coupe A-A' (cut A-A) corresponds to the display of this cut view.
"
image ="section_coupe_AA.png"%}

In the **main view** you find:

* The cutting plane, marked by a chain line thickened at its ends
* The name of the cut, given by two identical letters
* The viewing direction, shown by arrows

In the **cut view** the following must appear:

* The reference to the cutting plane
* The hatching showing the material that is cut

## Going from a drawing to a model

All roads lead to Rome, but one of them is shorter than the others, or more convenient if you have to rework your parts later (which happens *very often*). There is no magic method that works for every part, but some **reflexes and good practices** will help you from here on.

### Think before opening the software

Recognise symmetries, repetitions and axes of rotation. Match them to features of the software (mirror, linear/circular pattern, revolve and so on) and think about a logical order before starting. Centre the part on the origin to make your life easier. Think like a sculptor: large volumes first, small details afterwards.

Try to use as few features as possible, while keeping the file maintainable. Example: it is sometimes simpler to add one more operation for holes, when you rework the file, than to save a feature. You have to find a happy medium, and you will get there with practice.

```mermaid
flowchart LR
  A["Read the drawing"] --> B["Identify the key features"]
  B --> C["Match them to software features"]
  C --> D["Draw up a plan of action"]
  D --> E["Build the 3D model"]
```

{% include message.html title="What if I want to create my own part?" message="In your projects, you will generally not have existing drawings. The process remains very similar, though, and the reflexes you have acquired on the practice parts will be useful." status="is-success" icon="fas fa-check" %}

## Worked example: practice part no. 1

### Identifying the geometric elements and the matching features

The first practice part is fairly simple, but it still lets us detail the **process** you should apply before moving to the modelling software. Start by trying to spot the key features of the part:

* **Symmetry**: One about the front plane, but of little use here apart from the holes
* **Axis of rotation**: None here
* **Pattern**: 4 holes of 10 mm, linear pattern or mirror about the front plane
* **"Rounded corners" or "diagonals"**: fillets or chamfers, here 2 chamfers of 20 mm for the corners of the base, no fillets
* **Other**: slotted holes, the slot tool seen in the model of the first laser part

### Plan of action

Set the order of the main steps to carry out:

* Sketch of the base and extrusion
* Extrusion for the vertical portion: work on the left face to create the sketch.
* Material removal for the horizontal shoulder
* Holes: slot tool for the slotted holes, linear pattern or mirrors for the 4 holes of 10 mm.
* 20 mm chamfers on the two corners.

### Building it

{% include plan_card.html
    title="Step 1: First extrusion for the base"
    content="Use the centre point rectangle tool so that the part sits in the middle of the workspace."
    image="part1_step1.png"

%}

{% include plan_card.html
    title="Step 2: Extrusion of the vertical portion"
    image="part1_step2.png"
    content="Make a sketch on the left face with the rounded profile and the central hole, then extrude it."
%}

{% include plan_card.html
    title="Step 3: Shoulder"
    image="part1_step3.png"
    content="Material removal for the 10 mm shoulder."
%}

{% include plan_card.html
    title="Step 4: Holes"
    image="part1_step4.png"
    content="Material removal for the slotted holes and the 4 holes of 10 mm."
%}

{% include plan_card.html
    title="Step 5: Chamfers"
    image="part1_step5.png"
    content="2 chamfers of 20 x 20 mm."
%}

## Making a drawing

To create a drawing, right-click the part, then "Create drawing of ...".
You can choose the ISO A4 template and the "suggested views" option to begin with.

{% include image-row.html
image_1 = "mise_en_plan_menu_1.png"
image_2 = "mise_en_plan_menu_2.png"
%}

{% include plan_card.html
    image="mise_en_plan_menu_3.png"
    content="Fill in the fields of the title block with the right information, and add dimensions where they are needed."
%}

{% include plan_card.html
    image="part1_drawing.png"
    content="You can add views and place them where it seems logical to you. You can also add cut views if you think they are needed.
    Always think of the reader and of how easily the information gets across."
%}

Once that is done, you can right-click your "drawing" tab and export it as a PDF.
