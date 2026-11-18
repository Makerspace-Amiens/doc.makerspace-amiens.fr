---
layout: documentation
lang: en
image: IMG_20241001_141743.jpg
hide_hero: false
hero_image: IMG_20241001_141743.jpg
hero_darken: true
component_toc: true
doc_header: true
type: tutorial
tag: additive-manufacturing

title: Refilling spools at the MakerSpace
subtitle: How to refill ROSA refill 3D filament spools
description: 
author: Adrien Bracq

time: 1
difficulty: 1
compatibilities-os: win,mac,lin

prerequisites:
  - label: None
    link: ""

softwares: 
  - label: None
    link: ""

todo: 100
---

## 1. Overview

The MakerSpace stocks ROSA filament in **Refill** format. This means the filament is wound on a cardboard core and has no side flanges. Compatible reusable spools are therefore available at the MakerSpace, and there is a preparation procedure to follow.

{% include message.html title="Warning" message="Follow the instructions SCRUPULOUSLY and WAIT before removing the hook-and-loop straps from the coil. If you do not, you are very likely to DAMAGE the winding and make the coil UNUSABLE!
You remove the straps in the LAST STEP of the spool change."
status="is-danger" dismissable="false" icon="fas fa-exclamation-triangle" %}

---

## 2. Preparing your old spool

{% include step-tuto.html
greyBackground = true
content="Get your empty spool ready. Lay it flat with the instructions and the black locking screw on the top face."
image="IMG_20241001_141134.jpg" %}

{% include step-tuto.html
greyBackground = true
content="Unscrew the black ring by following the instructions on the spool. **CAREFUL**: the loosening direction is reversed compared with the usual one. To loosen it, you must turn to the **right**."
image="IMG_20241001_141151.jpg" %}

{% include message.html message="The reverse thread was chosen specifically to keep the spool from coming loose as it rotates. Do not force the screw if you cannot turn it, and contact a FabManager."
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground = true
content="You can now remove the cardboard core and the leftover filament."
image="IMG_20241001_141222.jpg"
image_2="IMG_20241001_141159.jpg" %}

{% include step-tuto.html
greyBackground = true
content="**Note:** the point of **refill** filament is to avoid the excess plastic used in spool holders. If you do not dispose of the cardboard core properly, you have only done half the job 😉♻."
image="IMG_20241001_141241.jpg" %}

---

## 3. Unpacking the new coil

{% include step-tuto.html
greyBackground = true
content="Check your choice of filament carefully. Use a **ROSA refill** filament available at the MakerSpace."
image="IMG_20241001_141301.jpg" %}

{% include step-tuto.html
greyBackground = true
content="Unpack the coil and take it out of its zip bag. Store what is left of the previous coil in the zip bag to keep it away from moisture. It will be reused later."
image="IMG_20241001_141444.jpg" %}

{% include message.html title="Warning" message="Do not remove the straps yet!!"
status="is-danger" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground = true
content="Put the cardboard box in the appropriate bin, as for the cardboard core of the previous coil."
image="IMG_20241001_141405.jpg" %}

{% include step-tuto.html
greyBackground = true
content="Remove the inner label. It would get in the way when fitting the material."
image="IMG_20241001_141535.jpg" %}

---

## 4. Fitting the new coil

{% include step-tuto.html
greyBackground = true
content="Gently pull out the start of the filament over 1/3 of a turn only. The aim is to see which way the coil is wound."
image="IMG_20241001_141604.jpg" %}

{% include step-tuto.html
greyBackground = true
content="Fit the new coil **gently** but **firmly**, aligning the straps with the openings and paying attention to the winding direction. The filament must come out clockwise (see photo)."
image="IMG_20241001_141648.jpg" %}

{% include step-tuto.html
greyBackground = true
content="Place the top flange on the coil, using the straps for alignment and the lugs on the hub of the spool."
image="IMG_20241001_141708.jpg" %}

{% include step-tuto.html
greyBackground = true
content="Screw the top part on with the black screw removed earlier. The tightening direction is marked on the flange. As a reminder, it is reversed, so tighten counterclockwise. Tighten the screw so that it can still be taken apart later."
image="IMG_20241001_141731.jpg" %}

{% include step-tuto.html
greyBackground = true
content="To keep the coil from unwinding all at once, put the filament you pulled out earlier through one of the side holes."
image="IMG_20241001_141743.jpg" %}

{% include message.html title="Warning" message="NEVER cross the filament of a spool under its own turns! You could create a knot in the spool and spend minutes or even hours untangling it. What is more, if it is not noticed straight away, it can lead to failed prints because the spool will jam on the knot. Always use the side holes to hold the filament.

![alt text](IMG_20241001_141747.jpg)"
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground = true
content="You can FINALLY remove the straps! Stay alert during the operation and check that the coil is in good condition. Do not throw the straps away: they can be reused. Give them to the FabManager."
image="IMG_20241001_141759.jpg" %}

{% include step-tuto.html
greyBackground = true
content="Well done! You have changed the spool! Now refer to the instructions of the various machines to load the filament and replace it in the machine."
image="IMG_20241001_141814.jpg" %}

---

{%
  include card_collections.html
  title="Replace your filament"
  description="Select your machine to follow the filament replacement tutorial."
  type="replace_filament"
%}

---

{%
  include card_collections.html
  title="Going further"
  description="Explore other tutorials to deepen your knowledge"
  type="tutorial"
%}
