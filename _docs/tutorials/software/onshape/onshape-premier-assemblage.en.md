---
layout: documentation
lang: en
image: opera_2e0SXhwL6l.png
hide_hero: false
hero_image: opera_2e0SXhwL6l.png
hero_darken: true
component_toc: true
doc_header: true

title: OnShape - First assembly
subtitle: Creating your first assembly in OnShape
description: Creating your first assembly file in OnShape
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

The goal of this tutorial is to introduce you to assemblies in OnShape. We will make 2 parts, a servo motor cradle and a servo horn, which we will assemble with a ready-made servo motor model that we will import.

The model comes from the [GrabCAD](https://grabcad.com/library) website. It is a community site where engineers share many technical files.

{% include message.html title="Warning" message="Always check that the files you download and use are accurate. Also check the licences attached to these files. Some have restrictive commercial licences."
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

## Creating your project

{% include step-tuto.html
greyBackground = true
title="STEP 1 - New document"
content="Create a new **Document** in OnShape, then a sketch on the **Top** plane. Then reproduce the dimensioned sketch opposite.

- **The servo horn:**

![alt text](opera_f59RUI0Vyd.png)

- **The bracket:**

![alt text](opera_6WpHNgYTnZ.png)
"
image="opera_sK3GnmI3Oe.png"
image_2="opera_SI2pVdwusl.png" %}

## Downloading an external model

{% include step-tuto.html
greyBackground = true
title="STEP 1 - Get your model"
content="Follow the download link below and save the model on your computer. This device is a servo motor, an actuator very commonly used in model making and robotics to drive mechanisms. To learn more about how this actuator works, you can watch the following videos (in French):

- [Les Servomoteurs : Présentation et bases](https://youtu.be/igxxH9_NNl4)
- [Les Servomoteurs : Signaux et pilotage](https://youtu.be/WfrrK6lKP0U)

[Download the servo model](mg996R_v2.step)
"
image="CADAssistant_M3KPVel4Yk.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 2 - Import the model"
content="Click the **+** in the list of tabs at the bottom left, then click **Import**. Select the file you downloaded earlier, then **Open**.

![alt text](opera_z26sYcw9pG.png)

In the window that appears, click **Combine to a single Part Studio**. This imports your **.stp** file into a **CAD Imports** folder, then creates a Part Studio for your servo motor.

![alt text](opera_tNtS4GRNgc.png)
"
image="opera_waTkfnGpsE.png" %}

{% include message.html title="Warning" message="Importing and creating the files can take some time. Wait until the Part Studio with your imported model has been created before going on"
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

## Assembly

{% include step-tuto.html
greyBackground = true
title="STEP 1 - Insert your parts"
content="Click the **Assembly** tab, or create a new assembly by clicking ![alt text](opera_jACBG7LaQS.png). In the assembly, click **Insert**, then select the **servo horn** and the **bracket**, and confirm. You should see your parts in the assembly tree on the left as well as in your 3D view.
"
image="opera_Rg5frXRPbl.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 2 - Insert the servo motor"
content="For the servo motor, since its **Part Studio** is made of several imported parts that are not assembled, the method differs slightly. Click **Insert**, then, before clicking your servo motor, click **Insert entire Part Studio rigidly**

![alt text](opera_LLkzEI6y6p.png)

You can then insert your servo motor. It will appear as a group that is already assembled.

![alt text](opera_fPbqNmw62t.png)
"
image="opera_Gqin6FMhPr.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 3 - Fix a part"
content="For your assembly to behave properly, we start by fixing one of the elements. Right-click your bracket, then select **Fix**. That way, the bracket will not move and the assembly will be built relative to this element.

![alt text](opera_PNPE0cXwUA.png)

Keep in mind that if your assembly changes, you may have to **unfix** this element in future.
"
image="opera_THm1JZ2w0U.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 4 - Rough positioning"
content="When you click one of the parts of the model, a white manipulator appears. It lets you move your part in space. Move your parts to put them roughly in position relative to one another. **It does not need to be precise**.

![alt text](opera_pPL7t8a67t.gif)
"
image="opera_BTggzODulV.png" %}

{% include step-tuto.html
greyBackground = true
title="STEP 5 - Assembling the servo motor"
content="We will now rigidly assemble the servo motor and the bracket plate. Click **Fastened mate**, then select the two geometric elements you want to fasten.

![alt text](opera_C9R3hmaIGG.png)

Notice how elements appear when you hover over your part. These are **mate connectors**, the tools that let you assemble your part. Select a connector on the bracket side, at the centre of one of the holes, then a second connector on your servo motor.

Once done, you can confirm your action.
"
image="opera_F19v169G2w.gif" %}

{% include step-tuto.html
greyBackground = true
title="STEP 6 - Assembling the servo horn"
content="We will do the same with the servo horn, using the **Revolute mate** tool:

![alt text](opera_mrbYLPEGLq.png)

**Tip** When your cursor is over a surface, if you hold down the **Shift** key of your keyboard, OnShape locks the face and you can then select a connector on that surface more easily.
"
image="opera_7jj3iqldQ8.gif" %}
