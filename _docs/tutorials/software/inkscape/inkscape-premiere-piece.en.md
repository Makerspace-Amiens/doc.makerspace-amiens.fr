---
layout: documentation
lang: en
image: Inkscape(2).png
hide_hero: false
hero_image: IMG_20230824_161820.jpg
hero_darken: true
component_toc: true
background_color: '#efedfa'

title: Inkscape - Key ring
subtitle: Making a key ring
description: An introductory Inkscape tutorial in which you make a key ring that can be laser cut.
tags: inkscape
type: tutorial

time: 2
difficulty: 1
compatibilities-os: win;lin,mac

prerequisites:
  - label: None
    link: ""

softwares: 
  - label: Inkscape
    link: "https://inkscape.org/fr/"

todo: 100
---

## Goals

The goal of this tutorial is to discover the basic features of Inkscape by making a small key ring project. This tutorial covers:

- handling simple shapes
- combining shapes
- tracing black and white images
- processing fonts before engraving

## Basic design

{% include step-tuto.html
title="1 - Creating the basic shapes"
content="We start by creating the various elements that will make up your key ring. Begin by drawing a rectangle, a circle and a star using the tools of the left-hand toolbar:

- **Rectangle** tool ![Alt text](inkscape_JcuwfMuWju.png)
- **Circle** tool ![Alt text](inkscape_I1p8OYXaYW.png)
- **Star** tool ![Alt text](inkscape_r2sizVE4gh.png)

![Alt text](inkscape_GO1oE8jIjW.png)
"
image="inkscape_RsNU8SGsuc.gif" %}

{% include step-tuto.html
title="2 - Changing the colours"
content="To see things better, we will change the colours of the elements. These colours are only there to help us while we model our shape. Once finished, we can change them if need be.

To do so, we use the quick colour bar below the window.

![Alt text](inkscape_StjldLb8hE.png)

- A left click changes the fill of the object
- A left click + Shift changes the stroke of the object

Change the colours of the objects as you like.
"
image="inkscape_wg7cBMuMIx.gif" %}

{% include step-tuto.html
title="3 - Adjusting object sizes"
content="We will now change the size of the objects, starting with the main plate. Click the rectangle and change its dimensions in the top toolbar. Make sure the unit is **mm**. The height must be 20mm. For the width, you can start with 60mm and change it later if need be.

![Alt text](inkscape_X3UzjyLklL.png)

Do the same for the circle that represents the hole for your key ring, giving it the following dimensions:

![Alt text](inkscape_rEZlsCOrYV.png)
"
image="inkscape_OlUVYHeb9B.gif" %}

{% include step-tuto.html
title="4 - Positioning the elements"
content="Now move your elements as in the example to build your key ring.

By clicking a shape twice, **slowly**, you can rotate your elements to adjust them. Try it with the star.

![Alt text](inkscape_NlBqYm5eCe.gif)

If your elements are not at the right level, you can raise or lower them in the stacking order with the buttons ![Alt text](inkscape_l5frzWNfqT.png)

Finally, you can adjust the corner radius of your rectangle. To do so, double-click the shape **quickly** and adjust it with the round handles that have just appeared:

![Alt text](inkscape_HDW37LxSqv.gif)
"
image="inkscape_gBWOoWx3PW.png" %}

{% include step-tuto.html
title="5 - Creating your text"
content="We will now insert your text. Nothing could be easier: click **Create and edit text objects** ![Alt text](inkscape_aWboAoL96w.png), then click your workspace. Type your text. You can change the font at the top left ![Alt text](inkscape_OxgfGoWefB.png).

You can change the size of your text as for ordinary elements. One tip, though: make sure the **lock proportions** option is on in the top toolbar ![Alt text](inkscape_slSCEECezF.png)
"
image="inkscape_3SuxwaxUmv.gif" %}

{% include step-tuto.html
title="6 - Adapt the size of your key ring"
content="Once your text is in, your key ring will very probably be too large or too small. If so, change the size of your rectangle and the position of the circle.
"
image="inkscape_Dfqz7fzYZr.png" %}

{% include message.html
icon="fas fa-info-circle"
title="Save"
message="How about taking the opportunity to save your work before moving on? 😋 "
status="is-info" %}

## Merging the elements

So far, our elements are separate shapes. But what we want in the end is a cutting outline and an engraved text. So let us see how to merge our elements.

{% include step-tuto.html
title="1 - Convert your text to a path"
content="For the moment, your text is an element that only Inkscape can interpret. For the laser cutter to engrave the letters properly, they must be converted to a path. To do so, click your text, then go to **Path > Object to Path**

The change is not immediately visible, but if you click the letters several times, you will see that you can no longer edit them as text, only as a complex path.

![Alt text](inkscape_FCJ0aYwExc.gif)
"
image="inkscape_anTi3gbIMc.png" %}

{% include message.html
icon="fas fa-info-circle"
title="No more editing"
message="After this operation, you can no longer simply edit your text. We advise you to keep a copy of your text element to one side, just in case. "
status="is-danger" %}

{% include step-tuto.html
title="2 - Merge the paths"
content="We will now merge the elements to create the outline of our key ring. To do so, we use the tools available in the **Path** menu

![Alt text](inkscape_GdOXmXvKQa.png)

First select the star and the rectangle by clicking while holding the **Shift** key, then click the **Union** tool ![Alt text](inkscape_ewyf2ncHvN.png).

Then do the same with the newly created shape and the circle, but this time use the **Difference** tool ![Alt text](inkscape_wPfbUflhuj.png)

We then have the outline shape of our key ring, which will be used to laser cut it.
"
image="inkscape_7YAmy55oe3.gif" %}

{% include step-tuto.html
title="3 - Change the colours"
content="Now that you have your final shape, it can be worth changing how it is displayed. For example, it is fairly conventional to show shapes that will be cut with a white or transparent fill and a red stroke.
"
image="inkscape_9HEJT9yISA.png" %}

## Tracing

We will now add an image to our key ring. The trouble is that an image is a bitmap element made of pixels. So our image has to be turned into a vector element in order to engrave or cut it and to handle it in Inkscape.

{% include step-tuto.html
title="1 - Get an image"
content="In our example, we use the image opposite to make our key ring. But you can use any image as long as it is in black and white.

Copy and paste the image opposite into Inkscape and resize it accordingly.

![Alt text](inkscape_kmtA0fsREV.png)
"
image="inkscape_TykSbLJQfq.png" %}

{% include message.html
icon="fas fa-info-circle"
title="Colour images"
message="It is perfectly possible to trace colour images, but the process is longer and more complex and is not covered in this tutorial."
status="is-info" %}

{% include step-tuto.html
title="2 - Trace"
content="Now click your image, then go to **Path > Trace Bitmap** ![Alt text](inkscape_LIGAN6ygiA.png). A menu opens on your right. Adjust the threshold until the image suits you, then click **Apply** at the bottom of the menu.

Move the newly created vector object. You can change its size and orientation like an ordinary object. You can also edit the nodes of the object if you need to, and you can delete your image: you will not need it any more.

Position the object on your key ring.
"
image="inkscape_WVUSrmZ8un.gif" %}

## Changes

![Alt text](inkscape_TcMWtlJmOo.png)

There you go! Your key ring is finished! But of course, we are not going to cut it like that! Now that you know the basics of using Inkscape, we advise you to go back over the previous steps and create your own shape, trying out the tools available.

Do not forget to save your work regularly!
