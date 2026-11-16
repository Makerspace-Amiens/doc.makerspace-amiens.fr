---
layout: documentation
lang: en
image: Fusion(2).png
hide_hero: false
hero_image: Fusion(2).png
hero_darken: true
component_toc: true
background_color: '#f7f4ed'

title: Fusion 360 (2) - Your first part
subtitle: Creating your first part in Fusion 360
description: Creating your first part in Fusion 360
tags: fusion
type: tutorial

time: 2
difficulty: 1
compatibilities-os: win,mac

prerequisites:
  - label: Installing Fusion 360
    link: ""

softwares: 
  - label: Fusion360
    link: "https://www.autodesk.fr/products/fusion-360/overview"

todo: 100
---
![Alt text]()

## Goal

The goal of this tutorial is to discover the basic features of Fusion 360 by making the part below step by step. Not every feature used is explained exhaustively, so feel free to try some options for yourself.

## A tour of the window

![](2022-09-09-16-31-48.png)

{% include step-tuto.html
greyBackground = true
title="General view"
content="The design window is divided into 4 areas:

- Area 1: 3D/2D view of the part
- Area 2: Design history
- Area 3: Parts tree
- Area 4: Toolbar"
image="2022-09-09-16-33-01.png" %}

{% include step-tuto.html
greyBackground = false
title="1 - 3D/2D view"
content="Area 1 is dedicated to the 3D and 2D view of your part. In 3D view, you can move around your part and select the elements to work on.
You also have the **view cube**, which lets you manage your display and its orientation very quickly.

![](2022-09-15-10-47-20.png)"
image="2022-09-15-10-46-51.png" %}

{% include step-tuto.html
greyBackground = true
title="2 - Design history"
content="The various actions and changes related to your parts appear here. You can open them to modify or delete them, insert new features or replay the design of the part with the buttons on the left:

![](2022-09-15-10-51-07.png)"
image="2022-09-15-14-29-04.png"%}

{% include step-tuto.html
greyBackground = false
title="3 - Tree of features and parts"
content="On the right is the display area for the tree of features and parts, as well as the properties of the selected element.
The tree shows all the parts of a project, its features and the elements that make it up.
"
image="2022-09-15-14-30-02.png" %}

{% include step-tuto.html
greyBackground = true
title="4 - Toolbar"
content="At the top of your screen is the toolbar, which gives you access to the features for creating and managing your parts. It is different for each workspace and can be extensively customised to your needs.

![](2022-09-15-10-53-35.png)

Examples of toolbars:
![](2022-09-15-10-52-14.png)
![](2022-09-15-10-52-26.png)
![](2022-09-15-10-52-37.png)
"
image="2022-09-15-10-51-56.png" %}

## Creating your first part

{% include step-tuto.html
greyBackground = false
title="STEP 1: create a sketch"
content="Go to the toolbar and click **Create Sketch** ![](2022-09-15-10-55-17.png).
Select the **Top** plane as the sketch plane (click the plane in question). "
image="2022-09-15-10-55-40.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 2: Create a rectangle"
content="Go to the toolbar and click **2-Point Rectangle** ![](2022-09-15-10-57-42.png)

Draw a rectangle **around the origin point** as shown in the picture, clicking once to set the first corner, then a second time to set the second corner. **Do not click and drag**"
image="2022-09-15-10-58-07.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 3: Centre your rectangle"
content="Use the **Line** tool ![](2022-09-15-10-59-05.png) and draw a line joining two corners.

![](2022-09-15-11-04-24.png)

Select the line you drew, then turn it into a construction line:

![](2022-09-15-11-05-17.png)
![](2022-09-15-11-05-32.png)

Then select your line and the centre point while holding down the **Shift** key, and click the **Midpoint** constraint ![](2022-09-15-11-20-02.png) in the toolbar
"
image="2022-09-15-11-20-21.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 4: Make the sides of your rectangle equal"
content="Select two adjacent sides of your square while **holding Shift**, then click the **Equal constraint** ![](2022-09-15-11-21-11.png)"
image="2022-09-15-11-21-23.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 5: Dimension the sides of your square"
content="Select one of the sides, and click **Sketch Dimension** ![](2022-09-15-11-21-58.png). Enter the dimension wanted, 30mm

![](2022-09-15-11-22-27.png)
"
image="2022-09-15-11-22-45.png" %}

{% include message.html
title="WARNING"
message="Notice how your sketch has gone from **blue** to **black**. This means your sketch is **fully constrained**. It is important to **ALWAYS** check that your sketches are fully constrained before leaving a sketch and carrying on with your work.

If you do not, you risk ending up in situations where the later generation of your part breaks when you edit an earlier sketch that is not fully constrained."
status="is-danger" %}

{% include step-tuto.html
greyBackground = false
title="STEP 6: Confirm and leave the sketch"
content="If you are happy with your sketch, you can leave it by clicking the **Finish Sketch** button ![](2022-09-15-11-23-31.png). You then leave sketch mode and return to the 3D view."
image="2022-09-15-11-24-03.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 7: Make an extrusion"
content="Click **Extrude** ![](2022-09-15-11-24-55.png) in the toolbar, then, in the menu that appears on your right, click **Profiles** and select the surface to extrude.

![](2022-09-15-11-26-22.png)

In the menu, change the value to 10mm in the **Distance** field.

![](2022-09-15-11-27-43.png)

Check that the value **New Component** is selected in the **Operation** field ![](2022-09-15-11-38-16.png).

Then **OK** ![](2022-09-15-11-28-00.png) to leave.
"
image="2022-09-15-11-30-24.png" %}

{% include message.html
title="WARNING"
message="For this first feature, **New Component** must be selected, but from here on do not forget to change the operation to suit your needs.

![](2022-09-15-11-33-28.png)"
status="is-danger" %}

{% include step-tuto.html
greyBackground = false
title="STEP 8: Create a second sketch"
content="Click **Create Sketch** ![](2022-09-15-11-42-36.png), then double-click the **Front** plane to set it as the sketch plane."
image="2022-09-15-11-44-13.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 9: Quick outline of your shape"
content="Draw a quick outline of the shape wanted (see illustration) using the **Line** tool ![](2022-09-15-11-44-42.png).

When you work on a sketch, the sketch solver automatically suggests **Horizontal** or **Vertical** geometric constraints. You can see them appear under your cursor when the conditions are met:

![](2022-09-15-11-45-44.png)

If some geometric constraints were not placed while sketching the shape, you can add them manually using the geometric constraints of the toolbar:

![](2022-09-15-11-46-03.png)
"
image="2022-09-15-11-46-20.png" %}

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
content="With the **Dimension** tools ![](2022-09-15-11-47-51.png), dimension the sketch created earlier as shown.

Check that your sketch is fully constrained, then **Finish Sketch** ![](2022-09-15-11-23-31.png) to leave."
image="2022-09-15-11-50-03.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 11: Revolve"
content="Select the sketch you have just made, then click the **Revolve** tool ![](2022-09-15-11-50-30.png).

- Under **Profile**, select the surface to revolve.
- Under Axis, select the axis of rotation
- Under **Operation**, select **Join**

Finally, **OK** to confirm ![](2022-09-15-11-28-00.png)"
image="2022-09-15-11-53-01.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 12: Sketch of the hole"
content="Create a **sketch** in the ZY plane (**Top**) and reproduce the sketch opposite using the **Circle** tool ![](2022-09-15-11-54-15.png). Constrain the elements as seen earlier, then **Finish Sketch** to leave.

You can use the **Line** tool then **Construction**, as seen earlier, to constrain the hole vertically. You can then select your line and give it the **Vertical** constraint ![](2022-09-15-11-56-39.png)"
image="2022-09-15-11-57-16.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 13: Removing material"
content="Click **Extrude** ![](2022-09-15-14-07-18.png), then select the profile of the circle you made earlier in the **Profiles** field.

![](2022-09-15-14-08-28.png)

Under **Extent Type**, select **All** to say that you want to remove material through all the bodies.

![](2022-09-15-14-10-18.png)

Check that the **Cut** option is selected in the **Operation** field: ![](2022-09-15-14-11-25.png)

Finally, **OK** to confirm ![](2022-09-15-11-28-00.png)"
image="2022-09-15-14-14-16.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 14: Circular pattern"
content="Under **Create**, then **Pattern**, select **Circular Pattern**

![](2022-09-15-14-17-05.png)

In the **Object Type** option, select **Features** ![](2022-09-15-14-18-25.png), then under **Objects**, select the material removal feature made just before, in the design history at the bottom left:

![](2022-09-15-14-19-45.png)

Under **Axis**, select one of the faces of the cylinder or the Z axis:

![](2022-09-15-14-21-31.png)

Then finally, under **Quantity**, set the parameter to 6: ![](2022-09-15-14-22-10.png)

Finally, **OK** to confirm ![](2022-09-15-11-28-00.png)"
image="2022-09-15-14-22-29.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 15: Chamfers and fillets"
content="Under **MODIFY**, select the **Chamfer** tool

![](2022-09-15-14-23-55.png)

Then select the 4 edges and set the chamfer to a dimension of 3 mm.

![](2022-09-15-14-25-33.png)

Finally, **OK** to confirm ![](2022-09-15-11-28-00.png)

You can do the same with the base of the cylinder by selecting the **Fillet** tool ![](2022-09-15-14-27-13.png), then a dimension of 1mm.

![](2022-09-15-14-27-36.png)
"
image="2022-09-15-14-27-54.png" %}

## Modifying your part

CAD tools are, by nature, parametric. That is, they let you make changes to your parts by going back up your feature tree. You can thus correct or add elements to your part by going back up the tree, without having to start your whole design again.

For example, in our case, we will make several changes:

{% include step-tuto.html
greyBackground = true
title="CHANGE 1: Size of the base"
content="In this first change, we alter the size of the sketch, then the height of the base.

Right-click your first sketch (that of your base) in the tree of your part, on the right:

![](2022-09-15-14-31-14.png)

You go back to **sketch editing** mode for your base. Change the dimension of the side of your square to **40mm**, then the **Finish Sketch** button to confirm.

To change the height of your base, right-click the extrusion of your base in the design history and change the height to 5mm, then **OK** to confirm.

![](2022-09-15-14-33-16.png)"
image="2022-09-15-14-33-44.png" %}

{% include step-tuto.html
greyBackground = false

title="CHANGE 2: Size of the holes"
content="Right-click the sketch of the hole to enter edit mode, and change the diameter of the circle to 4mm and its distance from the centre to 16mm, then the **Finish Sketch** button to confirm.

![](2022-09-15-14-35-16.png)
"
image="2022-09-15-14-35-32.png" %}

{% include step-tuto.html
greyBackground = true

title="CHANGE 3: Number of holes"
content="Right-click the circular pattern feature, then **Edit Feature**. Change the **instance count** to 4 instances.

![](2022-09-15-14-36-58.png)

Then **OK** to confirm"
image="2022-09-15-14-37-20.png" %}
