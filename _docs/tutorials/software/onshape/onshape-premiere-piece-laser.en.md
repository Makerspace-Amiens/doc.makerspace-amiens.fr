---
layout: documentation
lang: en
image: opera_ZUFfmL9HCZ.png
hide_hero: false
hero_image: opera_ZUFfmL9HCZ.png
hero_darken: true
component_toc: true
doc_header: true

title: OnShape - Your first laser part
subtitle: Creating your first laser-cut part in OnShape
description: Creating your first laser-cut part in OnShape
tags: onshape
type: tutorial

time: 3
difficulty: 2
compatibilities-os: win,mac,lin

prerequisites:
  - label: Installing OnShape
    link: "../onshape-installation"
  - label: Your first 3D part
    link: "../onshape-premiere-piece"

softwares: 
  - label: OnShape
    link: "https://www.onshape.com/"

todo: 100
---

## Goal

![](2022-09-08-09-17-59.png)

The goal of this tutorial is to extend your knowledge of OnShape by making the part above step by step. Not every feature used is explained exhaustively, so feel free to try some options for yourself.

This part can later be laser cut (explained in another tutorial).

## Creating your project

{% include step-tuto.html
greyBackground = true
title="STEP 1 - New document"
content="Create a new **Document** in OnShape, then a sketch on the **Top** plane. Then reproduce the dimensioned sketch opposite."
image="opera_zzMVyB8RCh.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 2 - Extruding the outline"
content="Extrude the sketch you have just created by **3 mm**. This is the thickness of the material you will later laser cut. Even though it has no effect on the file used for laser cutting, it is important to use the real dimensions, especially for assemblies, as we will see later."
image="opera_8vsmUcWcJf.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 3 - Sketching the first mark"
content="Create a new sketch on the top of your part. With the **Mirror** tool and the tools used earlier, create a triangle as in the view opposite.

![alt text](opera_khzUucGfSn.png)
"
image="opera_q0cbFfEpwX.png"
image_2="opera_U9HzW5zkPq.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 4 - Create the first mark"
content="Extrude the triangle created above by 0.5mm."
image="opera_75xeXaQL3Q.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 5 - Pattern"
content="We will now repeat this operation with OnShape's circular pattern feature and so create all the marks for the **protractor** function of our tool.

![alt text](opera_2QjPnU5Q8l.png)

To do so, select the **Circular pattern** tool. Then select **Feature pattern** at the top of the dialog. Finally, select the last extrusion made under **Features to pattern** and the circular outline of your part for the **Axis of pattern**.

Since our protractor only works over 90 degrees and the notches mark the angles every 10°, set the spacing as in the dialog below. Note that the last notch will not be shown, so as not to overlap the ruler.

![alt text](opera_nLuR0G0JL5.png)
"
image="opera_ebrHQTi4Qk.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 6 - Second mark"
content="For the 5° angles, we use exactly the same process. Make the triangle at 5° from the first one made earlier (see the picture opposite), then apply the circular pattern feature."
image="opera_RFDqDNcpHC.png"
image_2="opera_yTg6UOlHDi.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 7 - Adding the slot tool"
content="To make the slots for the ruler, we will use a **Slot** tool that may not be available in your interface, or in your shortcut toolbar.

![alt text](opera_P1ToyjtuoC.png)

If so, go to **My account** at the top right, then **Preferences**, look for **Shortcut toolbars** and select **Slot**, then save and go back to your current design.

![alt text](opera_PbSSdkBgv0.png)

![alt text](opera_BFyT4asXJA.png)"
image="opera_BFyT4asXJA.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 8 - Creating the slot"
content="With the **Slot** tool seen above, create a slot as in the view opposite. A slot is created on a line. Create and dimension your line, then use the **Slot** tool to add your slot to that line.

Once that is done, remove 0.5mm of material as for the earlier marks of the protractor.

![alt text](opera_hBvBRadJIX.png)"
image="opera_Ga4HNwuD1r.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 9 - Linear pattern"
content="We will now make a **linear pattern** of this slot. The process is very similar to the **circular pattern**.

![alt text](opera_R1HmAkQlwX.png)

Click **Linear pattern**, then fill in the dialog (see below). As you can see, although it works in a similar way, the instance count does not work in exactly the same way. In a **linear pattern**, you give the distance between each instance.

![alt text](opera_NisRjeObM7.png)
"
image="opera_jxpEW0589o.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 10 - Extra graduations"
content="Carry out similar operations to get graduations every **5 mm**

![alt text](opera_VUANwChrgM.png)

![alt text](opera_jdEjnm8JXL.png)
"
image="opera_7NgkyarupC.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 11 - Adding text"
content=" We will now use the **Text** tool to add text to our tool

![alt text](opera_vpALW3dzvd.png)

Select the text tool, then create the texts needed on your ruler, making sure you respect the dimensions below.

![alt text](opera_xYXrq1gw6S.png)

**Tip:** To save time on the graduation labels, use the **Equal** tool so that you only dimension the first graduation.
"
image="opera_lqBR6tybaS.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 12 - Orienting the text"
content="For the angle labels, you can orient the text. The horizontal constraint must be deleted first. To do so, select **Show constraints**, then select the horizontal constraint (in yellow) and press the **Delete** key of your keyboard. You will then be free to orient your text.

![alt text](opera_HDnsncWyvT.png)

You can then create a construction circle and constrain the text onto it.

![alt text](opera_ypdUbMg7Zl.png)

All that remains is to position the text according to the angle wanted.

![alt text](opera_u9c4kaml8O.gif)
"

image="opera_UTzF2IPIdU.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 13 - Extruding the text"
content="When removing material for the texts, do not forget to **tick** the **Merge with all** box. Otherwise, many parts may be created.

![alt text](opera_qbmdnFGBSe.png)
"
image="opera_wnyHZafjb6.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 14 - Adding a logo"
content="
To add a logo or an image, you can use the DXF format. Here we use the UniLaSalle logo, which you can download [using this link](LogoUniLaSalle.dxf).

![alt text](opera_mfgvI5KsX3.png)

Then click **Import** and select your file. You should see your newly imported file in the dialog. Select it and confirm at the top right ![alt text](opera_WwkthH3NLX.png).

![alt text](opera_s5LaYqeHrn.png)

You can now move your element on your sketch.

![alt text](opera_11Y7ZrecaI.png)

All that remains is to remove 0.5mm of material.
"
image="opera_ZUFfmL9HCZ.png" %}

{% include message.html title="What next" message="You can now customise your tool as you like. Add graduations or specific texts. Note that the busier the model, the longer changes can take. The laser cutting process will also be longer." status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground = true
title="STEP 15 - Creating the drawing sheet"
content="To create the files for laser cutting, we will use a drawing view to lay out the various parts to cut.

Right-click your part in the parts tree, then click **Create drawing of...**. Then click **Custom template** and customise your drawing view as follows:

![alt text](opera_DerIA8dnFV.png)

This creates a blank drawing into which you can bring your views for laser cutting.
"
image="opera_Ar0gKL95sl.png" %}

{% include step-tuto.html
greyBackground = false
title="STEP 16 - Adding the views"
content="You arrive on the tab of the drawing you have just created. You can now adjust the parameters to position your engraving view on your drawing.

![alt text](opera_cXLctPQKng.png)

**CAREFUL:** Check that your scale is set to 1:1.

You can add another view below, which will be the outline cut of your ruler. The elements will be brought together later in the laser software.

![alt text](opera_QspDRDQeWI.png)

"
image="opera_urBV7QnDsc.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 17 - Exporting the files"
content="You can now export your sheet as an SVG file by right-clicking the tab, then **Export**. Check the export parameters as shown in the picture.

![alt text](opera_ayKWnRzqwn.png)"
image="opera_hq0JUzA5DV.png" %}

{% include message.html title="Laser cutting" message="Before starting the cutting and engraving, it is always worth checking your file with the **InkScape** software. It will let you spot problems caused by wrong dimensions or a poor-quality export." %}
