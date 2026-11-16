---
layout: documentation
lang: en
image: Onshape(3).png
hide_hero: false
hero_image: opera_IrNGzaeHom.png
hero_darken: true
component_toc: true
doc_header: true

title: OnShape - Mini-project
subtitle: Carry out a mini-project without a step-by-step tutorial
description: In this third tutorial, we create a simple phone stand so that it can then be 3D printed.
tags: onshape
type: tutorial

time: 2
difficulty: 2
compatibilities-os: win

prerequisites:
  - label: First OnShape tutorial
    link: ""

softwares: 
  - label: Solidworks
    link: "https://www.solidworks.com/fr"

todo: 100
---

## Goals

Now that you know some of the basics of handling 3D modelling software, it is worth designing a small functional project by yourself.

To do so, we will model the phone stand below. You will not be guided step by step, but we will give you some information to help you complete this first mini-project.

![Alt text](opera_IrNGzaeHom.png)

{% include 3d-model.html model = "/img/3d/SupportTelephone.glb" %}

## General description of the design

{% include step-tuto.html
greyBackground = false
title="1 - Feature tree"
content="Opposite is the feature tree of the final part.

As you can see, the part is made from three sketches, which we detail further down, plus 2 extrude operations and one cut operation.

Fillet operations finish off the part.

One operation is new in this design: the **Shell** operation, which we detail further down.
"
image="opera_cTY1jF91xq.png" %}

{% include step-tuto.html
greyBackground = false
title="2 - Main extrusion"
content="To create the main extrusion, simply create a circle 60mm in diameter.

![Alt text](opera_GV2wFjc1eE.png)

The extrusion will also have **a depth of 60mm**.
"
image="opera_GbUkn74SvD.png" %}

{% include step-tuto.html
greyBackground = false
title="3 - Creating the feet"
content="To create the extrusion of the feet, you will have to create the sketch below in the same plane as that of the main extrusion.

![Alt text](opera_SySqeyL56v.png)

To do so, use the **Aligned rectangle** tool ![Alt text](opera_ODOvFWW2ex.png). Do not forget the geometric constraints in the top toolbar.

The extrusion will also have **a depth of 60mm**
"
image="opera_1JKxFQ1Lzg.png" %}

{% include step-tuto.html
greyBackground = false
title="4 - Creating the opening for the phone"
content="To create the cut for the phone, you will have to create the sketch below, again in the same plane as that of the main extrusion.

![Alt text](opera_ITbSQFXK7o.png)

To do so, use the **Aligned rectangle** tool, as in the previous operation. Do not forget the geometric constraints in the top toolbar.

Make a **Through all** cut.
"
image="opera_537YGdGP1D.png" %}

{% include step-tuto.html
greyBackground = false
title="5 - Creating the central opening"
content="To create the central opening of the part, we could offset the outer outline. But to keep the design simple, we will work with the **Shell** tool. This operation hollows out a part, leaving open the faces you select and creating thin walls.

To do so, click the **Shell** button ![Alt text](opera_SzeRBAdkuR.png) in the top bar. Then select the two opposite faces of the part:

![Alt text](opera_ZSFLXy92Uq.png)

Enter a dimension of 3mm for the shell thickness and confirm.

![Alt text](opera_RP8pCdUDrd.png)
"
image="opera_V9vMHNywOx.png" %}

{% include step-tuto.html
greyBackground = false
title="6 - Creating the fillets"
content="The last operation is to create the fillets on each edge, as in the view below. You can select all the edges in one and the same operation.

The fillets will all have a radius of 2mm.

![Alt text](opera_UTiBKf7JSB.png)
"
image="opera_hyDIclBLPu.png" %}
