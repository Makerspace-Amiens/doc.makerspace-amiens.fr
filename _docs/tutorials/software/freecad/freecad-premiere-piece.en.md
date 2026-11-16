---
layout: documentation
lang: en
image: FreeCad(2).png
hide_hero: false
hero_image: FreeCad(2).png
hero_darken: true
component_toc: true
background_color: '#f7f4ed'

title: FreeCAD (2) - Your first part
subtitle: Creating your first part in FreeCAD
description: Creating your first part in FreeCAD
tags: freecad
type: tutorial

time: 2
difficulty: 1
compatibilities-os: win,mac,lin

prerequisites:
  - label: Installing FreeCAD
    link: ""

softwares: 
  - label: FreeCAD
    link: "https://www.freecad.org"

todo: 100
---

<!-- markdownlint-disable MD001 -- "Méthode 1/2" sont des h4 imbriqués sous le h3 du step-tuto.html englobant (invisible au linter) -->

## Goal

![](2022-09-09-16-28-55.png)

The goal of this tutorial is to discover the basic features of FreeCAD by making the part above step by step. Not every feature used is explained exhaustively, so feel free to try some options for yourself.

## Creating your project

{% include step-tuto.html
greyBackground = true
title="STEP 1"
content="When FreeCAD starts, on the Start page, click **Create new** to create a new design project. If you are not on the Start page, you can also create your project through **File > New**.

![](2022-09-09-09-36-45.png)
"
image="2022-09-09-09-34-58.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 2"
content="At this point, it is advisable to save your project before going on. Go to **File > Save**.

![](2022-09-09-09-39-16.png)"
image="2022-09-09-09-40-02.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 3"
content="For this first part, we will mainly use the **Part Design** workbench. If you are not there already, switch to the **Part Design** workbench ![](2022-09-09-09-42-54.png) with the drop-down menu of your toolbar "
image="2022-09-09-09-42-19.png" %}

## A tour of the window

![](2022-09-09-09-48-37.png)

{% include step-tuto.html
greyBackground = true
title="General view"
content="The design window is divided into 4 areas:

- Area 1: 3D/2D view of the part
- Area 2: Tabs of the open projects
- Area 3: Tree of features and parts
- Area 4: Toolbar"
image="2022-09-09-09-48-17.png" %}

{% include step-tuto.html
greyBackground = false
title="1 - 3D/2D view"
content="Area 1 is dedicated to the 3D and 2D view of your part. In 3D view, you can move around your part and select the elements to work on.
You also have the **navigation cube**, which lets you manage your display and its orientation very quickly.

![](2022-09-09-09-49-53.png)"
image="2022-09-09-09-49-34.png" %}

{% include step-tuto.html
greyBackground = true
title="2 - Tabs of the parts and elements of the project"
content="The various parts you create and open appear in the tabs below your window.

![](2022-09-09-09-50-27.png)
"
%}

{% include step-tuto.html
greyBackground = false
title="3 - Tree of features and parts"
content="On the right is the display area for the tree of features and parts, as well as the properties of the selected element.
The tree shows all the parts of a project, its features and the elements that make it up.

![](2022-09-09-09-54-30.png)

The lower section shows the **View** options of the selected element (relating to how the element is displayed), as well as the options available for the selected element. The **Data** tab is perhaps the most important tab in FreeCAD, because it is the one that lets you work most effectively with all the data of an element.

![](2022-09-09-09-57-37.png)
"
image="2022-09-09-09-52-05.png" %}

{% include step-tuto.html
greyBackground = true
title="4 - Toolbar"
content="At the top of your screen is the toolbar, which gives you access to the features for creating and managing your parts. It is different for each workbench and can be extensively customised to your needs (see **Tools > Customize > Toolbars**)

![](2022-09-09-09-59-14.png)

Example of toolbars per workbench:

![](2022-09-09-10-00-52.png)

![](2022-09-09-10-01-09.png)

![](2022-09-09-10-01-24.png)
"
image="2022-09-09-10-01-58.png" %}

{% include message.html
title="NOTE FOR WHAT FOLLOWS"
message="Because FreeCAD is a development version and, what is more, extremely configurable, some visuals may differ from your version.
If so, do not worry: the changes are mostly cosmetic and the tool is bound to be available somewhere else in your toolbar."
status="is-info" %}

## Creating your first part

{% include step-tuto.html
greyBackground = true
title="STEP 0: create a body"
content="FreeCAD projects are extremely free and flexible in the way they are designed. You can decide to make as many files as there are parts to assemble in your project, or use a single file to store your various parts, assemblies, drawings, plans and so on.

In our case, we focus on creating a single part, and therefore a single **Body**. To create a **Body**, you can click the **Create body** button ![](2022-09-09-10-12-53.png) in your toolbar, or go to **Part Design > Create body**.

![](2022-09-09-10-13-34.png)

A new body has now appeared in your tree on your right.
"
image="2022-09-09-10-14-23.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 1: create a sketch"
content="Go to the toolbar and click **Create sketch** ![](2022-09-09-10-16-30.png).
Select the **XY_Plane** plane as the sketch plane (click the plane in question). The plane you selected should appear in your sketch window:

![](2022-09-09-10-17-34.png)

Click **OK** to confirm ![](2022-09-09-10-21-21.png).
"
image="2022-09-09-10-16-51.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 2: Create a rectangle"
content="Go to the toolbar and click **Create rectangle** ![](2022-09-09-10-26-20.png)

Draw a rectangle **around the origin point** as shown in the picture, clicking once to set the first corner, then a second time to set the second corner. **Do not click and drag**"
image="2022-09-09-10-26-49.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 3: Centre your rectangle"
content="There are several ways to centre your rectangle on the origin of your part. Read both methods carefully and try them:

#### Method 1: by midpoint

Since the square is to be centred on the origin (a point), click two end corners of the square, then **last** the origin point.

![](2022-09-09-12-57-34.png)

Then click **Symmetric constraint** in the constraints toolbar ![](2022-09-09-12-58-27.png).

![](2022-09-09-13-00-09.png)

#### Method 2: by symmetry

The square can also be centred using a double symmetry. Click two opposite corners of the square, then the line separating them:

![](2022-09-09-13-02-16.png)

Then click **Symmetric** ![](2022-09-09-12-58-27.png).
Repeat the operation for two other corners.
"
image="2022-09-09-13-03-12.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 4: Make the sides of your rectangle equal"
content="Select two adjacent sides of your square, then click the **equal constraint** ![](2022-09-09-13-03-56.png)"
image="2022-09-09-13-04-42.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 5: Dimension the sides of your square"
content="Select one of the sides, and click **vertical distance constraint** ![](2022-09-09-13-12-00.png) or **horizontal** ![](2022-09-09-13-12-09.png), depending on the side selected. Enter the dimension wanted, 30mm

![](2022-09-09-13-13-00.png)
"
image="2022-09-09-13-13-40.png" %}

{% include message.html
title="WARNING"
message="Notice how your sketch has gone from **white** to **green**. This means your sketch is **fully constrained**. It is important to **ALWAYS** check that your sketches are fully constrained before leaving a sketch and carrying on with your work.

If you do not, you risk ending up in situations where the later generation of your part breaks when you edit an earlier sketch that is not fully constrained."
status="is-danger" %}

{% include step-tuto.html
greyBackground = false
title="STEP 6: Confirm and leave the sketch"
content="If you are happy with your sketch, you can leave it by clicking the **Close** button ![](2022-09-09-13-14-35.png). You then leave sketch mode and return to the 3D view."
image="2022-09-09-13-15-07.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 7: Make a pad"
content="Select the sketch you created earlier ![](2022-09-09-13-17-51.png), then click **Pad** ![](2022-09-09-13-18-23.png) in the toolbar. In the menu that appears, change the value to 10mm in the **Length** field.

![](2022-09-09-13-19-33.png)

Then **OK** ![](2022-09-09-13-20-05.png) to leave.
"
image="2022-09-09-13-19-48.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 8: Create a second sketch"
content="Click **Create sketch** ![](2022-09-09-10-16-30.png), then double-click the **XZ_Plane** plane to set it as the sketch plane."
image="2022-09-09-13-34-12.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 9: Quick outline of your shape"
content="Draw a quick outline of the shape wanted (see illustration) using the **line** tool ![](2022-09-09-13-22-12.png) or the **polyline** tool ![](2022-09-09-13-29-50.png).
When you work on a sketch, the sketch solver automatically suggests **Horizontal** or **Vertical** geometric constraints. You can see them appear under your cursor when the conditions are met:

![](2022-09-09-13-28-10.png)

If some geometric constraints were not placed while sketching the shape, you can add them manually using the geometric constraints of the toolbar:

![](2022-09-09-13-33-03.png)
"
image="2022-09-09-13-33-30.png" %}

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
content="With the **dimension** tools ![](2022-09-09-13-35-26.png), dimension the sketch created earlier as shown. For the angular dimension, use the **Angle constraint** tool ![](2022-09-09-13-36-11.png)

Check that your sketch is fully constrained, then **Close** ![](2022-09-09-13-14-35.png) to leave."
image="2022-09-09-13-38-05.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 11: Revolution"
content="Select the sketch you have just made, then click the **Revolution** tool ![](2022-09-09-15-20-41.png).

Check that the axis of revolution is set to **Z axis**. If it is not, select it.

![](2022-09-09-15-22-23.png)

Finally, **OK** to confirm ![](2022-09-09-10-21-21.png)"
image="2022-09-09-15-23-35.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 12: Sketch of the hole"
content="Create a **sketch** in the ZY plane (**XY_Plane**) and reproduce the sketch opposite using the **Create circle** tool ![](2022-09-09-15-24-56.png). Constrain the elements as seen earlier, then **Close** ![](2022-09-09-13-14-35.png) to leave."
image="2022-09-09-15-36-46.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 13: Removing material"
content="Select the new sketch you have just made, then click **Pocket** ![](2022-09-09-15-37-52.png). In the window that appears, if the material is removed in the wrong direction, you can reverse it with the **Reversed** button ![](2022-09-09-15-38-51.png).

Then under **Type**, select **Through all** ![](2022-09-09-15-39-48.png).

Finally, **OK** to confirm ![](2022-09-09-10-21-21.png)"
image="2022-09-09-15-40-20.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 14: Polar pattern"
content="Select the last material removal feature made, **Pocket** ![](2022-09-09-15-43-05.png), and click **Polar pattern** ![](2022-09-09-15-44-14.png)

In the window that opens, select **Z axis** in the **Axis** menu

![](2022-09-09-15-45-37.png)

In the **Occurrences** counter, enter the value **6**

![](2022-09-09-15-46-56.png)

Finally, **OK** to confirm ![](2022-09-09-10-21-21.png)"
image="2022-09-09-15-47-51.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 15: Chamfers and fillets"
content=" Select at least one edge of your base, then click the **Chamfer** tool ![](2022-09-09-15-49-09.png).

In the settings window that opens on the right, select all 4 side edges of the base.

![](2022-09-09-15-50-58.png)

Give your chamfers a distance of 3mm, then **OK** to confirm ![](2022-09-09-10-21-21.png)

![](2022-09-09-15-51-35.png)

You can do the same with the **Fillet** tool ![](2022-09-09-15-51-49.png), selecting the bottom edge of the cylinder.

![](2022-09-09-15-52-51.png)"
image="2022-09-09-15-52-13.png" %}

## Modifying your part

CAD tools are, by nature, parametric. That is, they let you make changes to your parts by going back up your feature tree. You can thus correct or add elements to your part by going back up the tree, without having to start your whole design again.

For example, in our case, we will make several changes:

{% include step-tuto.html
greyBackground = true
title="CHANGE 1: Size of the base"
content="In this first change, we alter the size of the sketch, then the height of the base.

Double-click your first sketch (that of your base) in the tree of your part, on the right:

![](2022-09-09-15-54-17.png)

You go back to **sketch editing** mode for your base. Change the dimension of the side of your square to **40mm** ![](2022-09-09-15-54-50.png), then the **Close** button ![](2022-09-09-13-14-35.png) to confirm.

To change the height of your base, double-click the extrusion of your base in the feature tree (**Pad** ![](2022-09-09-15-56-31.png)), and change the height to 5mm, then **OK** to confirm ![](2022-09-09-10-21-21.png)."
image="2022-09-09-15-57-21.png" %}

{% include step-tuto.html
greyBackground = false

title="CHANGE 2: Size of the holes"
content="Double-click the sketch of the hole to enter edit mode, and change the diameter of the circle to 4mm and its distance from the centre to 16mm, then the **Close** button ![](2022-09-09-13-14-35.png) to confirm.

![](2022-09-09-15-58-24.png)
"
image="2022-09-09-15-58-44.png" %}

{% include step-tuto.html
greyBackground = true

title="CHANGE 3: Number of holes"
content="Double-click the polar pattern feature, then change the **occurrences** counter to 4. Then **OK** to confirm ![](2022-09-09-10-21-21.png)."
image="2022-09-09-15-59-30.png" %}
