---
layout: documentation
lang: en
hide_hero: false
hero_image: 2022-09-08-09-17-59.png
hero_height: is-small
hero_darken: true
image: 2022-09-08-09-17-59.png
component_toc: true
doc_header: true

title: "OnShape - Your First Part"
subtitle: "Model your first part step by step"
description: "Discover the main tools of OnShape by modeling your first part step by step."

time: 2
difficulty: 1
compatibilities-os: win,mac,lin

todo: 100

prerequisites:
  - label: OnShape - Introduction and Installation
    link: "/workshops/initiation-makerspace/tutorials/onshape-installation/"
softwares:
  - label: OnShape
    link: "https://www.onshape.com/"
---

## Objective

![](2022-09-08-09-17-59.png)

The objective of this tutorial is to discover the basic functions of OnShape by step-by-step creating the part shown above. All the functions used are not exhaustively explained, so feel free to test some options yourself.

## Creating Your Project

{% include step-tuto.html
greyBackground = true
title="STEP 1"
content="In the top left corner, click on the **Create** button and then on **Document**"
image="2022-09-07-11-55-22.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 2"
content="Give a name to your document and then click on **OK**"
image="2022-09-07-11-54-18.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 3"
content="You should be redirected directly to the main page of your part editor. Make sure you can navigate correctly in your 3D space with your mouse before continuing."
image="2022-09-07-11-56-38.png" %}

## Overview of the Window

![](2022-09-07-14-14-08.png)

{% include step-tuto.html
greyBackground = true
title="General View"
content="The design window is divided into 4 areas:

- Area 1: 3D/2D view of the part
- Area 2: Tabs for parts and project elements
- Area 3: Function and part tree
- Area 4: Toolbar"
image="2022-09-07-14-17-54.png" %}

{% include step-tuto.html
greyBackground = false
title="1 - 3D/2D View"
content="Area 1 is dedicated to the 3D and 2D view of your part. In 3D view, you can navigate around your part and select the elements to interact with.
You also have access to the **navigation cube** allowing you to manage your display and its orientation very quickly.

![](2022-09-07-14-23-00.png)"
image="2022-09-07-14-17-54.png" %}

{% include step-tuto.html
greyBackground = true
title="2 - Part and Project Element Tabs"
content="The different parts you create and open will appear in the tabs below your window.

![](2022-09-07-14-23-54.png)

You can add elements to the project by clicking on the **+** button to the right of the tabs."
image="2022-09-07-14-24-44.png" %}

{% include step-tuto.html
greyBackground = false
title="3 - Function and Part Tree"
content="On the right, you will find the display area for the function and part tree. It details all the parts of your project (at the bottom) as well as all the functions of your current part (at the top). For better readability, you can hide this area by clicking on the button ![](2022-09-07-14-30-00.png)."
image="2022-09-07-14-28-22.png" %}

{% include step-tuto.html
greyBackground = true
title="4 - Toolbar"
content="At the top of your screen, you will find the toolbar that gives you access to the functions that allow you to create and manage your parts.

![](2022-09-07-14-31-07.png)

This toolbar can be configured by going to **My Account** (click at the top right on your account) **> Preferences**.

![](2022-09-07-14-34-07.png)"
image="2022-09-07-14-35-17.png" %}

## Creating Your First Part

![](2022-09-07-14-37-21.png)

{% include step-tuto.html
greyBackground = true
title="STEP 1: Create a Sketch"
content="Go to the toolbar and click on **Sketch** ![](2022-09-07-14-39-12.png).
Select the **Top** plane as the sketch plane (double-click on the plane in question). Your selected plane should appear in your sketch window:

![](2022-09-07-14-41-35.png)
"
image="2022-09-07-14-39-39.png" %}

{% include message.html
message="To facilitate drawing in the sketch, you can right-click on the navigation cube and click on **Show the normal of the sketch plane**. The 3D view will rotate to place you in front of the sketch plane in progress.

![](2022-09-07-14-42-09.png)
"
status="is-info" %}

{% include step-tuto.html
greyBackground = true
title="STEP 2: Create a Rectangle"
content="Go to the toolbar and click on **Rectangle by Corners**

![](2022-09-07-14-55-06.png).

Draw a rectangle **around the origin point** as shown in the image by clicking once to define the first corner and a second time to determine the second corner. **Do not click and pull** (click-drag)"
image="2022-09-07-14-55-35.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 3: Center Your Rectangle"
content="There are several methods to center your rectangle on the origin of your part. Read both methods carefully and test:

### Method 1: by Midpoint

The square being centered on the origin (a point), click on two end vertices of the square and **lastly** on the origin point.

![](2022-09-07-15-02-25.png)

Then click on **Midpoint** in the constraint toolbar ![](2022-09-07-15-03-03.png).

### Method 2: by Symmetry

You can also center the square using double symmetry. Click on two opposite vertices of the square and then on the line separating them:

![](2022-09-07-15-05-24.png)

Then click on **Symmetric** ![](2022-09-07-15-05-50.png).
Repeat the operation for two other vertices.

"
image="2022-09-07-15-07-47.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 4: Equalize the Sides of Your Rectangle"
content="Select two adjacent sides of your square, then click on **Equal**.![](2022-09-07-15-09-09.png)"
image="2022-09-07-15-08-45.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 5: Dimension the Sides of Your Square"
content="Click on the **Dimension** tool ![](2022-09-07-15-10-50.png) then select one of the sides of your square. Enter the value **30mm** to fix your side to a dimension of 30mm.

![](2022-09-07-15-12-23.png)
"
image="2022-09-07-15-12-34.png" %}

{% include message.html
title="WARNING"
message="Note how your sketch has gone from **Blue** to **Black**. This means that your sketch is **fully constrained**. It is important to **ALWAYS** check that your sketches are fully constrained before exiting a sketch and continuing your work.

If this is not done, you may find yourself in situations where your futur part generation will break if you edit a previous sketch that is not fully constrained."
status="is-danger" %}

{% include step-tuto.html
greyBackground = false
title="STEP 6: Validate and Exit the Sketch"
content="If you are satisfied with your sketch, you can exit it by clicking on the **Validate** button ![](2022-09-07-15-17-39.png). You then exit the sketch mode and return to the 3D view. You can switch back to a trigonometric view by clicking on one of the corners of the navigation cube ![](2022-09-07-15-19-22.png)"
image="2022-09-07-15-19-42.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 7: Create an Extrusion"
content="Select your previously created sketch

![](2022-09-07-15-21-32.png)

then click on *Extrude* ![](2022-09-07-15-22-06.png) in the toolbar. In the menu that appears, make sure to select **New** and **Blind**, then change the value to 10mm.

![](2022-09-07-15-24-42.png)

Then **Validate** ![](2022-09-07-15-17-39.png) to exit.
"
image="2022-09-07-15-24-50.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 8: Create a Second Sketch"
content="Click on **Sketch** ![](2022-09-07-14-39-12.png) then double-click on the **right** plane to validate it as the sketch plane. Remember that you can right-click on the navigation cube to orient your view (*Show the normal of the sketch plane*)."
image="2022-09-07-15-29-15.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 9: Quick Sketch of Your Shape"
content="Make a quick sketch of the desired shape (see illustration) using the **Line** tool ![](2022-09-07-15-31-27.png)."
image="2022-09-07-15-30-52.png" %}

{% include message.html
title="INFO"
message="When you create a complex sketch, a simple and effective method in most cases is to:

- Make an unconstrained sketch of your sketch
- Geometrically constrain your piece using constraint tools
- Finish by dimensioning the sketch
- Check that your sketch is fully constrained
This is the method you followed to create the base of your piece, and it is also the method we will use for the second part of the piece."
status="is-info" %}

{% include step-tuto.html
greyBackground = true
title="STEP 10: Dimensionally Constrain the Sketch"
content="Using the **Dimension** tool ![](2022-09-07-15-38-27.png), dimension as indicated the sketch you previously created. Check that your sketch is fully constrained, then **Validate** ![](2022-09-07-15-17-39.png) to exit."
image="2022-09-07-15-40-51.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 11: Revolved Extrusion"
content="Click on the **Revolve** tool ![](2022-09-07-15-43-05.png) then select your previously created sketch as **Faces and sketch areas to sweep**. Then click on **Axis of Revolution** ![](2022-09-07-15-46-49.png) and select the edge of the sketch around which we will perform our revolution. Make sure the **Add** tab is active.

![](2022-09-07-15-48-06.png)

Then **Validate** ![](2022-09-07-15-17-39.png) to exit."
image="2022-09-07-15-48-40.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 12: Drilling Sketch"
content="Create a **sketch** on the top plane (Top) and reproduce the sketch opposite using the **Center Circle** tool ![](2022-09-08-08-49-03.png). Constrain the elements as seen previously, then **Validate** ![](2022-09-07-15-17-39.png) to exit."
image="2022-09-07-16-23-34.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 13: Material Removal"
content="Select your new sketch created earlier, then click on **Extrude** ![](2022-09-08-08-55-29.png). In the window that appears, select the **Remove** tab ![](2022-09-08-08-56-08.png), then in the **End Type**, select **Through All** ![](2022-09-08-08-57-06.png).
If the direction of material removal is not correct, you can reverse it using the **Opposite Direction** button ![](2022-09-08-08-59-20.png). Then **Validate** ![](2022-09-07-15-17-39.png) to exit.

![](2022-09-08-08-57-47.png)![](2022-09-08-08-59-46.png)
"
image="2022-09-08-08-59-46.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 14: Circular Repetition"
content="Click on the drop-down menu next to **Linear Repetition** and select **Circular Repetition**.

![](2022-09-08-09-02-36.png)

In the **Piece Repetition** drop-down menu, select **Function Repetition**. Indeed, what we are going to repeat circularly will be the material removal function performed earlier for our drilling.

![](2022-09-08-09-03-35.png)

In **Functions to Repeat**, select your previous extrusion (the drilling) and in **Repetition Axis**, select one of the cylindrical surfaces at the center of the piece created earlier using the revolution tool.

![](2022-09-08-09-06-42.png)

Set the instance counter to 6, then **Validate** ![](2022-09-07-15-17-39.png) to exit.

![](2022-09-08-09-08-24.png)"
image="2022-09-08-09-08-52.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 15: Chamfers and Fillets"
content="Click on the **Chamfer** tool ![](2022-09-08-09-13-56.png) then in **Entities to Chamfer**, select the edges you want to chamfer.

![](2022-09-08-09-15-08.png)

Set a distance of 3mm for your chamfers, then **Validate** ![](2022-09-07-15-17-39.png) to exit.

![](2022-09-08-09-16-11.png)

You can do the same with the **Fillet** tool ![](2022-09-08-09-16-45.png) by selecting the base edge of the cylinder.

![](2022-09-08-09-17-37.png)
"
image="2022-09-08-09-17-59.png" %}

## Modifying Your Part

CAD tools are inherently parametric tools. This means that they allow you to make modifications to your parts by going back through your construction tree. This allows you to correct or add elements to your part by going back up your tree without having to redo your entire design.

For example, in our case, we will make several modifications:

{% include step-tuto.html
greyBackground = true
title="MOD 1: Base Dimension"
content="In this first modification, we will change the size of the sketch, and then we will modify the height of the base.

Double-click on your first sketch (the one for your base). You will return to **Sketch Editing** mode for your base. Change the dimension of your square side to **40mm** ![](2022-09-08-09-24-28.png), then **Validate** ![](2022-09-07-15-17-39.png) to exit.

To modify your base height, double-click on the extrusion of your base in the construction tree, and change the height to 5mm, then **Validate** ![](2022-09-07-15-17-39.png) to exit.

![](2022-09-08-09-25-53.png)
"
image="2022-09-08-09-26-25.png" %}

{% include step-tuto.html
greyBackground = false
title="MOD 2: Hole Dimensions"
content="Double-click on the hole sketch to enter edit mode, and change the circle diameter to 4mm and the distance from the center to 16mm, then **Validate** ![](2022-09-07-15-17-39.png) to exit.

![](2022-09-08-09-29-22.png)
"
image="2022-09-08-09-29-42.png" %}

{% include step-tuto.html
greyBackground = true
title="MOD 3: Number of Holes"
content="Double-click on the circular repetition function, then change the **Instance Counter** to 4 instances. Finally, **Validate** ![](2022-09-07-15-17-39.png) to exit.

![](2022-09-08-11-17-43.png)
"
image="2022-09-08-11-18-09.png" %}
