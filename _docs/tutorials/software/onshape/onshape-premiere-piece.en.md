---
layout: documentation
lang: en
image: OnShape(2).png
hide_hero: false
hero_image: OnShape(2).png
hero_darken: true
component_toc: true
doc_header: true

title: OnShape - Your first part
subtitle: Creating your first part in OnShape
description: Creating your first part in OnShape
tags: onshape
type: tutorial

time: 2
difficulty: 1
compatibilities-os: win,mac

prerequisites:
  - label: Installing OnShape
    link: ""

softwares: 
  - label: OnShape
    link: "https://www.onshape.com/"

todo: 100
---

<!-- markdownlint-disable MD001 -- "Méthode 1/2" sont des h4 imbriqués sous le h3 du step-tuto.html englobant (invisible au linter) -->

## Goal

![](2022-09-08-09-17-59.png)

The goal of this tutorial is to discover the basic features of OnShape by making the part above step by step. Not every feature used is explained exhaustively, so feel free to try some options for yourself.

## Creating your project

{% include step-tuto.html
greyBackground = true
title="STEP 1"
content="At the top left, click the **Create** button, then **Document**"
image="2022-09-07-11-55-22.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 2"
content="Give your document a name, then click **OK**"
image="2022-09-07-11-54-18.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 3"
content="You should be taken straight to the main page of your part editor. Check that you can navigate properly in the 3D space with your mouse before going on."
image="2022-09-07-11-56-38.png" %}

## A tour of the window

![](2022-09-07-14-14-08.png)

{% include step-tuto.html
greyBackground = true
title="General view"
content="The design window is divided into 4 areas:

- Area 1: 3D/2D view of the part
- Area 2: Tabs of the parts and elements of the project
- Area 3: Tree of features and parts
- Area 4: Toolbar"
image="2022-09-07-14-17-54.png" %}

{% include step-tuto.html
greyBackground = false
title="1 - 3D/2D view"
content="Area 1 is dedicated to the 3D and 2D view of your part. In 3D view, you can move around your part and select the elements to work on.
You also have the **view cube**, which lets you manage your display and its orientation very quickly.

![](2022-09-07-14-23-00.png)"
image="2022-09-07-14-17-54.png.png" %}

{% include step-tuto.html
greyBackground = true
title="2 - Tabs of the parts and elements of the project"
content="The various parts you create and open appear in the tabs below your window.

![](2022-09-07-14-23-54.png)

You can add elements to the project by clicking the **+** button to the right of the tabs."
image="2022-09-07-14-24-44.png" %}

{% include step-tuto.html
greyBackground = false
title="3 - Tree of features and parts"
content="On the right is the display area for the tree of features and parts. It lists all the parts of your project (bottom) and all the features of your current part (top). For readability, you can hide this area by clicking the ![](2022-09-07-14-30-00.png) button."
image="2022-09-07-14-28-22.png" %}

{% include step-tuto.html
greyBackground = true
title="4 - Toolbar"
content="At the top of your screen is the toolbar, which gives you access to the features for creating and managing your parts.

![](2022-09-07-14-31-07.png)

This toolbar can be configured under **My account** (click your account at the top right) **> Preferences**.

![](2022-09-07-14-34-07.png)"
image="2022-09-07-14-35-17.png" %}

## Creating your first part

![](2022-09-07-14-37-21.png)

{% include step-tuto.html
greyBackground = true
title="STEP 1: create a sketch"
content="Go to the toolbar and click **Sketch** ![](2022-09-07-14-39-12.png).
Select the **Top** plane as the sketch plane (double-click the plane in question). The plane you selected should appear in your sketch window:

![](2022-09-07-14-41-35.png)
"
image="2022-09-07-14-39-39.png" %}

{% include message.html
message="To make drawing in the sketch easier, you can right-click the view cube and click **View normal to sketch plane**. The 3D view rotates to put you face on to the current sketch plane.

![](2022-09-07-14-42-09.png)
"
status="is-info" %}

{% include step-tuto.html
greyBackground = true
title="STEP 2: Create a rectangle"
content="Go to the toolbar and click **Corner rectangle**

![](2022-09-07-14-55-06.png).

Draw a rectangle **around the origin point** as shown in the picture, clicking once to set the first corner, then a second time to set the second corner. **Do not click and drag**"
image="2022-09-07-14-55-35.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 3: Centre your rectangle"
content="There are several ways to centre your rectangle on the origin of your part. Read both methods carefully and try them:

#### Method 1: by midpoint

Since the square is to be centred on the origin (a point), click two end corners of the square, then **last** the origin point.

![](2022-09-07-15-02-25.png)

Then click **Midpoint** in the constraints toolbar ![](2022-09-07-15-03-03.png).

#### Method 2: by symmetry

The square can also be centred using a double symmetry. Click two opposite corners of the square, then the line separating them:

![](2022-09-07-15-05-24.png)

Then click **Symmetric** ![](2022-09-07-15-05-50.png).
Repeat the operation for two other corners.

"
image="2022-09-07-15-07-47.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 4: Make the sides of your rectangle equal"
content="Select two adjacent sides of your square, then click **Equal**.![](2022-09-07-15-09-09.png)"
image="2022-09-07-15-08-45.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 5: Dimension the sides of your square"
content="Click the **Dimension** tool ![](2022-09-07-15-10-50.png), then select one of the sides of your square. Enter the value **30mm** to lock your side at a dimension of 30mm.

![](2022-09-07-15-12-23.png)
"
image="2022-09-07-15-12-34.png" %}

{% include message.html
title="WARNING"
message="Notice how your sketch has gone from **blue** to **black**. This means your sketch is **fully constrained**. It is important to **ALWAYS** check that your sketches are fully constrained before leaving a sketch and carrying on with your work.

If you do not, you risk ending up in situations where the later generation of your part breaks when you edit an earlier sketch that is not fully constrained."
status="is-danger" %}

{% include step-tuto.html
greyBackground = false
title="STEP 6: Confirm and leave the sketch"
content="If you are happy with your sketch, you can leave it by clicking the **Confirm** button ![](2022-09-07-15-17-39.png). You then leave sketch mode and return to the 3D view. You can go back to a trimetric view by clicking one of the corners of the view cube ![](2022-09-07-15-19-22.png)"
image="2022-09-07-15-19-42.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 7: Make an extrusion"
content="Select the sketch you created earlier

![](2022-09-07-15-21-32.png)

then click *Extrude* ![](2022-09-07-15-22-06.png) in the toolbar. In the menu that appears, make sure you select **New** and **Blind**, then change the value to 10mm.

![](2022-09-07-15-24-42.png)

Then **Confirm** ![](2022-09-07-15-17-39.png) to leave.
"
image="2022-09-07-15-24-50.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 8: Create a second sketch"
content="Click **Sketch** ![](2022-09-07-14-39-12.png), then double-click the **Right** plane to set it as the sketch plane. Do not forget that you can right-click the view cube to orient your view (*View normal to sketch plane*)"
image="2022-09-07-15-29-15.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 9: Quick outline of your shape"
content="Draw a quick outline of the shape wanted (see illustration) using the **Line** tool ![](2022-09-07-15-31-27.png) "
image="2022-09-07-15-30-52.png" %}

{% include message.html
title="INFO"
message="When you make a complex sketch, a simple method that works in most cases is to:

- Draw an unconstrained outline of your sketch
- Constrain your part geometrically with the constraint tools
- Finish by dimensioning the sketch
- Check that your sketch is fully constrained
This is the method you followed to make the base of your part, and it is also the method we will use for the second portion of the part."
status="is-info" %}

{% include step-tuto.html
greyBackground = true
title="STEP 10: Dimension the sketch"
content="With the **Dimension** tool ![](2022-09-07-15-38-27.png), dimension the sketch created earlier as shown. Check that your sketch is fully constrained, then **Confirm** ![](2022-09-07-15-17-39.png) to leave."
image="2022-09-07-15-40-51.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 11: Revolve"
content="Click the **Revolve** tool ![](2022-09-07-15-43-05.png), then select the sketch you made earlier as **Faces and sketch regions to revolve**. Then click **Revolve axis** ![](2022-09-07-15-46-49.png) and select the edge of the sketch around which the revolution will be made. Check that the **Add** tab is active.

![](2022-09-07-15-48-06.png)

Then **Confirm** ![](2022-09-07-15-17-39.png) to leave."
image="2022-09-07-15-48-40.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 12: Sketch of the hole"
content="Create a **sketch** in the Top plane and reproduce the sketch opposite using the **Center point circle** tool ![](2022-09-08-08-49-03.png). Constrain the elements as seen earlier, then **Confirm** ![](2022-09-07-15-17-39.png) to leave."
image="2022-09-07-16-23-34.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 13: Removing material"
content="Select the new sketch you have just made, then click **Extrude** ![](2022-09-08-08-55-29.png). In the window that appears, select the **Remove** tab ![](2022-09-08-08-56-08.png), then under **End type**, select **Through all** ![](2022-09-08-08-57-06.png).
If the material is removed in the wrong direction, you can reverse it with the **Opposite direction** button ![](2022-09-08-08-59-20.png). Then **Confirm** ![](2022-09-07-15-17-39.png) to leave.

![](2022-09-08-08-57-47.png)![](2022-09-08-08-59-46.png)
"
image="2022-09-08-08-59-46.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 14: Circular pattern"
content="Click the drop-down menu next to **Linear pattern** and select **Circular pattern**.

![](2022-09-08-09-02-36.png)

In the **Part pattern** drop-down menu, select **Feature pattern**. What we are going to repeat in a circle is the material removal feature made earlier for our hole.

![](2022-09-08-09-03-35.png)

Under **Features to pattern**, select your previous extrusion (the hole), and under **Axis of pattern**, select one of the cylindrical surfaces at the centre of the part, made earlier with the revolve tool.

![](2022-09-08-09-06-42.png)

Set the instance count to 6, then **Confirm** ![](2022-09-07-15-17-39.png) to leave.

![](2022-09-08-09-08-24.png)"
image="2022-09-08-09-08-52.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 15: Chamfers and fillets"
content="Click the **Chamfer** tool ![](2022-09-08-09-13-56.png), then under **Entities to chamfer** select the edges you want to chamfer.

![](2022-09-08-09-15-08.png)

Give your chamfers a distance of 3mm, then **Confirm** ![](2022-09-07-15-17-39.png) to leave.

![](2022-09-08-09-16-11.png)

You can do the same with the **Fillet** tool ![](2022-09-08-09-16-45.png), selecting the bottom edge of the cylinder.

![](2022-09-08-09-17-37.png)
"
image="2022-09-08-09-17-59.png" %}

## Modifying your part

CAD tools are, by nature, parametric. That is, they let you make changes to your parts by going back up your feature tree. You can thus correct or add elements to your part by going back up the tree, without having to start your whole design again.

For example, in our case, we will make several changes:

{% include step-tuto.html
greyBackground = true
title="CHANGE 1: Size of the base"
content="In this first change, we alter the size of the sketch, then the height of the base.

Double-click your first sketch (that of your base). You go back to **sketch editing** mode for your base. Change the dimension of the side of your square to **40mm** ![](2022-09-08-09-24-28.png), then **Confirm** ![](2022-09-07-15-17-39.png) to leave.

To change the height of your base, double-click the extrusion of your base in the feature tree and change the height to 5mm, then **Confirm** ![](2022-09-07-15-17-39.png) to leave.

![](2022-09-08-09-25-53.png)
"
image="2022-09-08-09-26-25.png" %}

{% include step-tuto.html
greyBackground = false

title="CHANGE 2: Size of the holes"
content="Double-click the sketch of the hole to enter edit mode, and change the diameter of the circle to 4mm and its distance from the centre to 16mm, then **Confirm** ![](2022-09-07-15-17-39.png) to leave.

![](2022-09-08-09-29-22.png)
"
image="2022-09-08-09-29-42.png" %}

{% include step-tuto.html
greyBackground = true

title="CHANGE 3: Number of holes"
content="Double-click the circular pattern feature, then change the **Instance count** to 4 instances. Finally, **Confirm** ![](2022-09-07-15-17-39.png) to leave.

![](2022-09-08-11-17-43.png)
"
image="2022-09-08-11-18-09.png" %}
