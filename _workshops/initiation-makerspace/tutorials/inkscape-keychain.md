---
layout: documentation
lang: en
hide_hero: false
hero_image: IMG_20230824_161820.jpg
hero_height: is-small
hero_darken: true
image: IMG_20230824_161820.jpg
component_toc: true
doc_header: true

title: "Inkscape - Keychain"
subtitle: "Create a keychain to laser cut"
description: "An introductory tutorial to Inkscape with the creation of a keychain that can be laser cut."

time: 2
difficulty: 1
compatibilities-os: win,mac,lin

todo: 100

prerequisites:
  - label: None
    link: ""
softwares:
  - label: Inkscape
    link: "https://inkscape.org/"
---

## Objectives

The aim of this tutorial is to discover the basic functions of Inkscape by completing a small keychain project. This tutorial will cover:

- Manipulating simple shapes
- Combining shapes
- Vectorizing black and white images
- Processing fonts before engraving

## Basic Design

{% include step-tuto.html
title="1 - Creating Basic Shapes"
content="We will start by creating the different elements that will make up your keychain. Start by drawing a rectangle, a circle, and a star using the tools in the left toolbar:

- **Rectangle Tool** ![Alt text](inkscape_JcuwfMuWju.png)
- **Circle Tool** ![Alt text](inkscape_I1p8OYXaYW.png)
- **Star Tool** ![Alt text](inkscape_r2sizVE4gh.png)

![Alt text](inkscape_GO1oE8jIjW.png)
"
image="inkscape_RsNU8SGsuc.gif" %}

{% include step-tuto.html
title="2 - Changing Colors"
content="To better visualize, we will change the colors of the elements. These colors will only be there temporarily to help us model our shape. Once finished, we can change them if needed.

For this, we will use the quick color bar below the window.

![Alt text](inkscape_StjldLb8hE.png)

- A left click changes the background of the object
- A left click + shift changes the outline of the object

Change the colors of the objects as you wish.
"
image="inkscape_wg7cBMuMIx.gif" %}

{% include step-tuto.html
title="3 - Adjusting Object Sizes"
content="We will now change the size of the objects. First, we will modify the size of the main plate. To do this, click on the rectangle and change its dimensions in the top toolbar. Make sure to set it in **mm**. The height should be 20mm. For the width, you can start with 60mm, and you can change it later if needed.

![Alt text](inkscape_X3UzjyLklL.png)

Do the same for the circle that represents the hole for your keychain ring, giving it the following dimensions:

![Alt text](inkscape_rEZlsCOrYV.png)
"
image="inkscape_OlUVYHeb9B.gif" %}

{% include step-tuto.html
title="4 - Positioning Elements"
content="Now move your elements as shown in the example to build your keychain.

By clicking twice **slowly** on a shape, you have the option to rotate your elements to adjust them. Try it with the star.

![Alt text](inkscape_NlBqYm5eCe.gif)

If your elements are not at the correct height, you can move them up or down in the layer order with the buttons ![Alt text](inkscape_l5frzWNfqT.png)

Finally, you can adjust the size of the rounded corners of your rectangle. For this, double-click **quickly** on the shape and adjust using the round handles that just appeared:

![Alt text](inkscape_HDW37LxSqv.gif)
"
image="inkscape_gBWOoWx3PW.png" %}

{% include step-tuto.html
title="5 - Creating Your Text"
content="We will now insert your text. To do this, simply click on **Create and Edit Text Objects** ![Alt text](inkscape_aWboAoL96w.png) then click on your workspace. Write your text. You can change the font in the top left corner ![Alt text](inkscape_OxgfGoWefB.png).

You can edit the size of your text like classic elements. However, make sure to check the **Keep the same proportions** option in the top toolbar ![Alt text](inkscape_slSCEECezF.png)
"
image="inkscape_3SuxwaxUmv.gif" %}

{% include step-tuto.html
title="6 - Adjust the Size of Your Keychain"
content="It is very likely that when inserting your text, your keychain is too big or too small. In this case, adjust the size of your rectangle as well as the position of the circle.
"
image="inkscape_Dfqz7fzYZr.png" %}

{% include message.html
icon="fas fa-info-circle"
title="Save"
message="Why not take the opportunity to save your work before moving on? 😋 "
status="is-info" %}

## Merging Elements

So far, our elements are separate shapes. But what we want to have in the end is a cutting outline and text engraving. We will therefore see how to merge our elements.

{% include step-tuto.html
title="1 - Convert Your Text to Path"
content="For now, your text is an element that only Inkscape can interpret. In order for the laser cutter to correctly engrave the letters, we will need to convert them into a path. To do this, click on your text, then go to **Path > Object to Path**

The modification will not be visible directly, but if you click multiple times on the letters, you will see that you can no longer edit them as text but as a complex path.

![Alt text](inkscape_FCJ0aYwExc.gif)
"
image="inkscape_anTi3gbIMc.png" %}

{% include message.html
icon="fas fa-info-circle"
title="Irreversible Modification"
message="After this operation, you will no longer be able to simply edit your text. We advise you to make a copy of your text element next to it just in case."
status="is-danger" %}

{% include step-tuto.html
title="2 - Merge Paths"
content="We will now merge the elements to create our keychain outline. For this, we will use the tools available in the **Path** menu.

![Alt text](inkscape_GdOXmXvKQa.png)

First, we will select the star and the rectangle by clicking and holding down the **Shift** key, then we will click on the **Union** tool ![Alt text](inkscape_ewyf2ncHvN.png).

Finally, we will do the same with the newly created shape and the circle, but this time we will use the **Difference** tool ![Alt text](inkscape_wPfbUflhuj.png).

We will then have the outline shape of our keychain that will allow us to cut it out with the laser.
"
image="inkscape_7YAmy55oe3.gif" %}

{% include step-tuto.html
title="3 - Change Colors"
content="Now that you have your final shape, it might be interesting to change the representation of your shape. For example, it is quite common to set the shapes that will be cut with a white or transparent background, and with a red outline.
"
image="inkscape_9HEJT9yISA.png" %}

## Vectorization

We will now add an image to our keychain. The problem is that an image is a pixel-based element. So we will have to transform our image into a vector element in order to be able to engrave or cut it and manipulate it in Inkscape.

{% include step-tuto.html
title="1 - Retrieve an Image"
content="In our example, we will use the image opposite to make our keychain. But you can use any image as long as it is black and white.

Copy-paste the opposite image into Inkscape and resize it accordingly.

![Alt text](inkscape_kmtA0fsREV.png)
"
image="inkscape_TykSbLJQfq.png" %}

{% include message.html
icon="fas fa-info-circle"
title="Color Images"
content="It is entirely possible to vectorize color images, but the treatment is longer and more complex and will not be covered in this tutorial."
status="is-info" %}

{% include step-tuto.html
title="2 - Vectorize"
content="Now click on your image and go to **Path > Trace Bitmap** ![Alt text](inkscape_LIGAN6ygiA.png). A menu on your right opens. Adjust the threshold until the image suits you, then click **Apply** at the bottom of the menu.

Move the newly created vector object. You can modify its size and orientation like a classic object. You can also edit the nodes of the object if you need to, and you can delete your image, you will no longer need it.

Position the object on your keychain.
"
image="inkscape_WVUSrmZ8un.gif" %}

## Modifications

![Alt text](inkscape_TcMWtlJmOo.png)

And there you go! Your keychain is finished! But of course, we're not going to cut it like that! Now that you know the basics of using the Inkscape software, we recommend that you go through the previous steps and create your own shape by testing the available tools.

Don't forget to save your work regularly!
