---
layout: documentation
lang: en
image: Inkscape(3).png
hide_hero: false
hero_image: IMG_20230825_155832-EDIT.jpg
hero_darken: true
component_toc: true
background_color: '#efedfa'

title: Inkscape - Bookmark
subtitle: Making a bookmark
description: An introductory Inkscape tutorial in which you make a bookmark that can be laser cut.
tags: inkscape
type: tutorial

time: 2
difficulty: 2
compatibilities-os: win;lin,mac

prerequisites:
  - label: First tutorial - Key ring
    link: "../inkscape-premiere-piece"

softwares: 
  - label: Inkscape
    link: "https://inkscape.org/fr/"

todo: 100
---

{% include message.html
icon="fas fa-info-circle"
message="This tutorial follows on from the key ring one. Some of the information and steps seen in the previous tutorial are therefore not repeated here."
status="is-warning" %}

{% include step-tuto.html
title="1 - Creating the basic shapes"
content="We start by creating the various elements that will make up your bookmark. Begin by drawing two rectangles and adjust the rounded corners.

The large rectangle will be the outline of your bookmark and measures 35 x 170 mm

The second rectangle will serve as a tool for the borders of your bookmark. It measures 25 x 160 mm. Set it aside for now; we will use it later.
"
image="inkscape_KBFCOFms7L.png" %}

{% include step-tuto.html
title="2 - Importing the images"
content="To create our pattern, we will use black and white images. You can find shapes of this kind on [The Noun Project](https://thenounproject.com) website.

In our example, we use [leaf shapes from a gallery](https://thenounproject.com/browse/collection-icon/leafs-glyph-icons-56482/?p=1), but you can of course choose your own motifs. You do need at least 4 of them, different enough to make an interesting pattern.
"
image="inkscape_K5GRdsfVGF.png" %}

{% include step-tuto.html
title="3 - Tracing the images"
content="For the moment, your images are in a bitmap format. These images now have to be turned into vectors, so that we can then work on them with Inkscape's vector editing tools. To do so, as in the previous tutorial, use the **Trace Bitmap** tool under **Path**.

Trace all the images so as to keep only the vector shapes. You can then delete the images; we will not need them any more.
"
image="inkscape_dUQlTht6Az.png" %}

{% include step-tuto.html
title="4 - Position and size"
content="Bring your shapes together and adjust their size so that they at least fit within the width of your bookmark. We will then use them as a model for the **Spray** tool
"
image="inkscape_NVAblHOHfB.png" %}

{% include step-tuto.html
title="5 - Spraying clones"
content="We will now use the **Spray** tool to duplicate our shapes in a more *organic* way. To do so, select your shapes, then click the tool in the menu bar on the right ![Alt text](inkscape_U0zgw63A6v.png).

Adjust the settings to your needs and to the look you want. As a starting point, the settings chosen for our example are shown below (right-click, open in a new tab):

![Alt text](inkscape_5RiRWtjRWe.png)
"
image="inkscape_xHxt41ypr8.gif" %}

{% include step-tuto.html
title="6 - Correcting the positions"
content="After spraying, several shapes will very probably overlap. You could adjust them by hand, but Inkscape has a tool that corrects this and saves you some time.

Under **Object**, open the **Align and Distribute** tool. Then select the shapes you generated and use the **Unclump** tool several times ![Alt text](inkscape_XOaJy3wcyX.png).

Once the result is close to what you want, finish the finer adjustments by hand and delete the shapes outside the rectangle.
"
image="inkscape_EQVBrnYtTj.gif" %}

{% include step-tuto.html
title="7 - Merging the shapes"
content="Now that you have your shapes, use the **Path > Union** tool to merge them all. Once that is done, select the green rectangle, then the blue rectangle, and in the **Align and Distribute** tool, select **Relative to: First selected**, then click the horizontal and vertical centring icons ![Alt text](inkscape_GWltfUtA5W.png)![Alt text](inkscape_z1hfqERlQT.png)

Finally, select your shapes and the blue rectangle, then choose the **Intersection** operation ![Alt text](inkscape_yJPAUnjdcK.png)
"
image="inkscape_PPfHaKPesG.gif" %}

{% include step-tuto.html
title="8 - Final addition"
content="You have almost finished this mini-project. You can now add a shape of your choice on top and change the stroke colours. This will not affect the cut, but will give you a better visual rendering of your project. For example, you can make the following choices:

- Cutting outline in red
- Engraving outline in black
- Engraved fill in black
"
image="inkscape_cU6LjL4pLv.png" %}

## Laser cutting

All that remains is to save your file so that it can then be cut on the MakerSpace laser

![Alt text](inkscape_uaYsnljAHb.png)
