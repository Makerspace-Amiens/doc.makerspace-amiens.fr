---
layout: documentation
lang: en
image: SolidWorks(2).png
hide_hero: false
hero_image: SolidWorks(2).png
hero_darken: true
component_toc: true
background_color: '#f7eded'

title: SolidWorks (2) - First part
subtitle: Your first part
description: Creating your first part in Solidworks
tags: solidworks
type: tutorial

time: 2
difficulty: 1
compatibilities-os: win

prerequisites:
  - label: Install SolidWorks
    link: ""

softwares: 
  - label: Solidworks
    link: "https://www.solidworks.com/fr"

todo: 100
---

## **Goal:**

{% include 3d-model.html model = "/img/3d/TutoSldw.glb" %}

The goal of this tutorial is to discover the basic features of SolidWorks by making the part above step by step. Not every feature used is explained exhaustively, so feel free to try some options for yourself.

## **Creating your project**

{% include step-tuto.html
greyBackground = true
title="STEP 1"
content="When SolidWorks starts, on the home page, click **Welcome to SolidWorks** then Part to create a new design project for a single part.

![Alt text](SLDWORKS_mWB6UfvzKd.png)
![](2022-09-09-09-36-45.png)
"
image="O9A0sQ0T5a.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 2"
content="Check that the units are set to **MMGS (millimetre, gram, second)**, then click **OK**.

![Alt text](SLDWORKS_MdxG64dxv5.png)
"
image="SLDWORKS_REg0FpPzp3.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 3"
content="For this first part, we will mainly use the tools available in the **Part** environment.

For an assembly of parts, you will use the **Assembly** environment (not covered by this first tutorial)."
image="SLDWORKS_gj7mVhyNYl.png" %}

## **Settings**

To improve the design experience in SolidWorks, here are a few small settings tips you can apply.

{% include step-tuto.html
greyBackground = true
title="Opening the settings"
content="Open the settings dialog by clicking the **Options** icon

![Alt text](SLDWORKS_GOBJMups99.png)"
image="SLDWORKS_DyqkpZIkFg.png" %}

{% include step-tuto.html
greyBackground = true
title="Change the sketch options"
content="In the **Sketch** options tab, check that the following items are ticked:

- Auto-rotate view normal to sketch plane
- Use fully defined sketches
"
image="SLDWORKS_6k4SbXfMNo.png" %}

{% include step-tuto.html
greyBackground = true
title="Change the performance options"
content="In the **Performance** options tab, turn off the **High quality** options in the transparency section."
image="SLDWORKS_QX0bLnQeIO.png" %}

## **A tour of the window**

![Alt text](SLDWORKS_gj7mVhyNYl.png)

{% include step-tuto.html
greyBackground = true
title="General view"
content="The design window is divided into 3 areas:

- **Area 1:** 3D/2D view of the part
- **Area 2:** Tree of features and parts
- **Area 3:** Toolbar
"
image="sldwnum.png" %}

{% include step-tuto.html
greyBackground = false
title="1 - 3D/2D view"
content="Area 1 is dedicated to the 3D and 2D view of your part. In 3D view, you can move around your part and select the elements to work on.
To navigate in SolidWorks, you will mainly use your mouse. Given the features to be used, **we strongly recommend a 3-button mouse** rather than a trackpad.

- Left click to select
- Middle (wheel) click to rotate
- Middle click + CTRL to pan
- Right click for options

You also have various tools for managing your display and its orientation in the top toolbar.
![](SLDWORKS_TBm5u6W7OT.png)"
image="SLDWORKS_KPvCywywmQ.png" %}

{% include step-tuto.html
greyBackground = false
title="2 - Tree of features and parts"
content="On the right is the display area for the tree of features and parts, as well as the dialogs of the various tools.

The tree shows all the parts of a project, its features and the elements that make it up.

The **blue bar** shows where you are in the design history of your part. You can drag the bar if you want to go back in your design.
![Alt text](SLDWORKS_Pos3qbqB4Z.png)"
image="SLDWORKS_f4PXcB4Wc4.png" %}

{% include step-tuto.html
greyBackground = true
title="3 - Tool ribbon"
content="At the top of your screen is the tool ribbon, which gives you access to the features for creating and managing your parts. It is different for each environment and can be extensively customised to your needs.

Examples of toolbars in the ribbon:
![Alt text](SLDWORKS_20230823_113355.png)

![Alt text](SLDWORKS_20230823_113422.png)

![Alt text](SLDWORKS_20230823_113823.png)
"
image="SLDWORKS_dcj4KDZpXR.png" %}

Now that we have toured the software, we will create a simple part that lets you put the basics of CAD into practice.

## Creating your first part

SolidWorks is parametric design software. Like many others, it works by creating sketches (dimensioned 2D drawings) that are then given volume through operations that add or remove material.

It is the succession of these operations that makes it possible to create complex parts.

{% include step-tuto.html
greyBackground = false
title="STEP 1: create a sketch"
content="Go to the tool ribbon at the top of the window, open the **Sketch** tab, then click **Sketch**.

![Alt text](SLDWORKS_20230823_114714.png)

We are going to create a sketch on a 2D plane. You therefore have to select the 2D plane you want to work on. Select the top plane as in the picture below:

![Alt text](SLDWORKS_20230823_114838.png)

The view should move to look down on the sketch. You can now work in 2D on this plane."
image="SLDWORKS_20230823_115144.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 2: Create a rectangle"
content="Go to the toolbar and click **Rectangle**.![Alt text](20230823_115623.png)

Draw a rectangle **around the origin point** as shown in the picture, clicking once to set the first corner, then a second time to set the second corner. **Avoid click and drag**"
image="SLDWORKS_20230823_115528.png" %}

{% include message.html
message="
At the moment, your rectangle is not constrained. It is free in its 2D space and can be modified. You can tell from the blue colour of the drawing. The first step is therefore to constrain your sketch geometrically and then dimensionally before moving on.
"
status="is-info" %}

{% include step-tuto.html
greyBackground = false
title="STEP 3: Centre your rectangle"
content=" Use the Line tool ![Alt text](SLDWORKS_20230823_120408.png) and draw a line joining two corners.

![Alt text](SLDWORKS_20230823_120459.png)

Then select the newly created line and the centre of your sketch while holding down the **Shift** key. In the left pane you will see the properties of the selected elements and also, which is what interests us, an **Add Relations** section.

![Alt text](SLDWORKS_20230823_120645.png)

In this **Add Relations** section, click **Midpoint**. ![Alt text](SLDWORKS_20230823_120901.png)

Your rectangle should now be centred on your origin. To finish your construction, you can tell the software that this line is a construction line and will not be used for the 3D design of your part.

To do so, select the line and click **For construction** in the options panel on the left ![Alt text](SLDWORKS_20230823_121150.png).

Your line should now be displayed dashed.
"
image="SLDWORKS_20230823_121234.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 4: Make the sides of your rectangle equal"
content="Select two adjacent sides of your rectangle while holding the **Shift** key, then click **Equal** in the left panel ![Alt text](SLDWORKS_20230823_121445.png)

You can check that the relation has been applied by checking that the equality icon ![Alt text](SLDWORKS_20230823_121553.png) is shown on both sides of your rectangle, which has now become a square!
"
image="SLDWORKS_20230823_121528.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 5: Dimension the sides of your square"
content="Only one operation remains to fully constrain your square. You are going to define the length of one of the sides. This length is called a **dimension** from here on.

Click **Smart Dimension** in the top ribbon ![Alt text](SLDWORKS_20230823_121827.png), then select one of the sides of the square. A dimension line then appears.

![Alt text](SLDWORKS_20230823_121947.png)

Place it alongside your line, then click to confirm. A pop-up appears for you to enter the value of the length. Enter 30mm and confirm with ![Alt text](SLDWORKS_20230823_122152.png)

![Alt text](SLDWORKS_20230823_122204.png)
"
image="SLDWORKS_20230823_122247.png" %}

{% include message.html
title="WARNING"
message="Notice how your sketch has gone from **blue** to **black**. This means your sketch is **fully constrained**. It is important to **ALWAYS** check that your sketches are fully constrained before leaving a sketch and carrying on with your work.

If you do not, you risk ending up in situations where the later generation of your part breaks when you edit an earlier sketch that is not fully constrained."
status="is-danger" %}

{% include step-tuto.html
greyBackground = false
title="STEP 6: Confirm and leave the sketch"
content="If you are happy with your sketch, you can leave it by clicking the **Exit Sketch** button ![](SLDWORKS_20230823_122426.png). You then leave sketch mode and return to the 3D view."
image="SLDWORKS_20230823_122459.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 7: Make an extrusion"
content="Select the sketch you created earlier![Alt text](SLDWORKS_20230823_122557.png), then click **Extruded Boss/Base** ![Alt text](SLDWORKS_20230823_122643.png) in the toolbar.

In the menu that appears, change the value to 10mm in the **Depth** field.

![Alt text](SLDWORKS_20230823_122752.png)

Then **Confirm** ![Alt text](SLDWORKS_20230823_122827.png) to validate the entry."
image="SLDWORKS_20230823_122708.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 8: Create a second sketch"
content="Click **Sketch** ![Alt text](SLDWORKS_20230823_122953.png), then, in the tree on the left, go to the **FeatureManager design tree** tab and select the **Front Plane**. We will thus create a sketch on this plane for the rest of the part.

![Alt text](SLDWORKS_20230823_123030.png)"

image="SLDWORKS_20230823_123223.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 9: Quick outline of your shape"
content="Draw a quick outline of the shape wanted (see illustration) using the **Line** tool ![Alt text](SLDWORKS_20230823_123516.png).
When you work on a sketch, the sketch solver automatically suggests **Horizontal** or **Vertical** geometric constraints. You can see them appear under your cursor when the conditions are met. It is therefore advisable to take advantage of them. For example, you can start your drawing by clicking the centre of your sketch:

![Alt text](SLDWORKS_20230823_123550.png)

If some geometric constraints were not placed while sketching the shape, you can add them manually using the geometric constraints of the left panel:

![Alt text](SLDWORKS_20230823_123733.png)
"
image="SLDWORKS_20230823_123744.png" %}

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
content="With the **Smart Dimension** tool ![](SLDWORKS_20230823_123852.png), dimension the sketch created earlier as shown. For the angular dimension, select the two lines of the angle one after the other.

Check that your sketch is fully constrained, then **Exit Sketch** ![Alt text](SLDWORKS_20230823_124011.png) to leave."
image="SLDWORKS_20230823_124145.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 11: Revolve"
content="Select the sketch you have just made, then click the **Revolved Boss/Base** tool ![Alt text](SLDWORKS_20230823_124244.png).

Under **Axis of Revolution** ![Alt text](SLDWORKS_20230823_124345.png), select on the sketch the line that will be the centre of your rotation, that is, the one at the centre of your part:

![Alt text](SLDWORKS_20230823_124504.png)

Finally, **Confirm** ![Alt text](SLDWORKS_20230823_122827.png) to validate the boss."
image="SLDWORKS_20230823_124550.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 12: Sketch of the hole"
content="Create a **sketch** in the **Top Plane** ![](SLDWORKS_20230823_124803.png) as seen earlier

![Alt text](SLDWORKS_20230823_124842.png)

Then reproduce the sketch opposite using the **Circle** tool ![](SLDWORKS_20230823_124913.png). Constrain the elements as seen earlier.

Check that your sketch is fully constrained, then **Exit Sketch** ![Alt text](SLDWORKS_20230823_124011.png) to leave."
image="SLDWORKS_20230823_125331.png" %}

{% include message.html
title="INFO"
message="If you cannot constrain the position of the circle vertically, you can use a **Vertical** constraint ![](SLDWORKS_20230823_125126.png) between the centre of the sketch and the centre of your circle.

Or you can use the same method we used to centre our rectangle at the start of the tutorial, with the **construction line** tool ![Alt text](20230823_125255.png) "
status="is-info" %}

{% include step-tuto.html
greyBackground = false
title="STEP 13: Removing material"
content="Select the new sketch you have just made, then click **Extruded Cut** ![Alt text](SLDWORKS_20230823_125458.png).

In the window that appears, if the material is removed in the wrong direction, you can reverse it with the **Reverse Direction** button ![Alt text](SLDWORKS_20230823_125604.png).

![Alt text](SLDWORKS_20230823_125638.png)![Alt text](SLDWORKS_20230823_125650.png)

Then under **Type**, select **Through All**.

![Alt text](SLDWORKS_20230823_125708.png)

Finally, **Confirm** ![Alt text](SLDWORKS_20230823_122827.png) to validate the operation."
image="SLDWORKS_20230823_125838.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 14: Circular pattern"
content="Select the last material removal feature made:

![Alt text](SLDWORKS_20230823_125901.png)

Then click **Circular Pattern**:

![Alt text](SLDWORKS_20230823_125940.png)

In the window that opens, select the empty field under **Direction 1** ![Alt text](SLDWORKS_20230823_130014.png), then select the cylinder of your part. This tells the software that you want a circular pattern around this cylinder.

![Alt text](SLDWORKS_20230823_130108.png)

In the **Instances** counter, enter the value **6** ![Alt text](SLDWORKS_20230823_130216.png)
And select **Equal spacing** ![](SLDWORKS_20230823_130236.png)

![Alt text](SLDWORKS_20230823_130335.png)

![Alt text](SLDWORKS_20230823_130403.png)

Finally, **Confirm** ![Alt text](SLDWORKS_20230823_122827.png) to validate the operation."
image="SLDWORKS_20230823_130427.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 15: Chamfers and fillets"
content="Select the **Chamfer** tool in the tool ribbon:

![Alt text](SLDWORKS_20230823_130536.png)

Then select the 4 edges of your part as shown below:

![Alt text](SLDWORKS_20230823_130610.png)

To see the chamfers better, you can select the **Full preview** option![Alt text](SLDWORKS_20230823_130659.png).

![Alt text](SLDWORKS_20230823_130743.png)

Give your chamfers a distance of 3mm, then **confirm** ![Alt text](SLDWORKS_20230823_122827.png)

![Alt text](SLDWORKS_20230823_130814.png)

You can do the same with the **Fillet** tool ![Alt text](20230823_130954.png), selecting the bottom edge of the cylinder and a radius of 1mm.

![Alt text](SLDWORKS_20230823_131048.png)"
image="SLDWORKS_20230823_131128.png" %}

## Modifying your part

CAD tools are, by nature, parametric. That is, they let you make changes to your parts by going back up your feature tree. You can thus correct or add elements to your part by going back up the tree, without having to start your whole design again.

For example, in our case, we will make several changes:

{% include step-tuto.html
greyBackground = true
title="CHANGE 1: Size of the base"
content="In this first change, we alter the size of the sketch, then the height of the base.

Right-click your first sketch (that of your base) in the tree of your part, on the right. Then **Edit Sketch**:

![Alt text](SLDWORKS_20230823_131430.png)

You go back to **sketch editing** mode for your base. Change the dimension of the side of your square to **40mm**, then **Exit Sketch** ![Alt text](SLDWORKS_20230823_124011.png) to leave.

![Alt text](SLDWORKS_20230823_131546.png)

To change the height of your base, right-click the extrusion of your base in the feature tree, then **Edit Feature**.

![Alt text](SLDWORKS_20230823_131648.png)

Change the height to 5mm, then confirm.

![Alt text](SLDWORKS_20230823_131832.png)
"
image="SLDWORKS_20230823_131905.png" %}

{% include step-tuto.html
greyBackground = false

title="CHANGE 2: Size of the holes"
content="In the same way as before, enter edit mode on the sketch of the holes, and change the diameter of the circle to 4mm and its distance from the centre to 16mm, then confirm.

![Alt text](SLDWORKS_20230823_132019.png)
"
image="SLDWORKS_20230823_132056.png" %}

{% include step-tuto.html
greyBackground = true

title="CHANGE 3: Number of holes"
content="Edit the circular pattern feature, then change the **instance count** to 4 instances. Then confirm."
image="SLDWORKS_20230823_132218.png" %}
