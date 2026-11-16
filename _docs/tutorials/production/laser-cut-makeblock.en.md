---
layout: documentation
lang: en
hide_hero: false
hero_image: Icon.png
hero_darken: true
image: Icon.png
component_toc: true
doc_header: true
tags: medieval-challenge
type: tutorial

title: Laser cutting - MakeBlock and LaserBox
subtitle: How to laser cut your first part
description: In this tutorial, you will learn how to cut your first part using the LaserBox software.

time: 2
difficulty: 1

softwares:
  - label: OnShape
    link: "https://cad.onshape.com"
  - label: LaserBox
    link: "https://support.makeblock.com/hc/en-us/articles/25439631937687-Use-Laserbox-Software"

author: Adrien BRACQ
---

## Introduction

This **beginner's tutorial** takes you from **exporting** your model from **OnShape** to the **end of the cut**, helping you avoid common mistakes.

If your model does not exist yet, go to the [**CAD tutorials**](/tutorials/) page.

Unlike **3D printing**, **laser cutting** works in a single plane, cutting and engraving shapes in sheets by burning material away. If you already have a **.DXF** or **.SVG** file, go straight to switching on the machine.

{% include message.html title="Size constraints" message="**In your design**, do not forget to take the **maximum cutting area** into account: **49 cm x 29 cm**." status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include step-tuto.html greyBackground=true title="1 - Find the face to cut" content="Identify the face of your part that will serve as the **cutting plane**." image="Flat_Benchy.png" %}

{% include step-tuto.html greyBackground=false title="2 - Right-click the face" content="Select the face you want and **right-click** it." image="Right_Click_On_Face.png" %}

{% include step-tuto.html greyBackground=true title="3 - Export as DXF" content="Click **Export as DXF/DWG...**" image="Flat_Benchy_DXF.png" %}

{% include step-tuto.html greyBackground=false title="4 - Set up and confirm the export" content="Enter a **meaningful file name**, choose **DXF** in the **Format** menu, confirm with the **Export** button, then put the file on your **USB stick**." image="Export_Window.png" %}

{% include step-tuto.html greyBackground=true title="5 - Go to the MécaLab" content="The laser cutter is at the **back right** of the **MécaLab**, the area dedicated to machining, drilling and cutting." image="LaserBox_Context.png" %}

{% include step-tuto.html greyBackground=false title="6 - Put the exhaust hose out" content="**Open the window** and put the **fume exhaust hose** outside." image="Exhaust_Pipe.png" %}

{% include step-tuto.html greyBackground=true title="7 - Switch on the cutter" content="Switch on the cutter: the switch is at the **back right** of the machine." image="Power_Switch.png" %}

{% include step-tuto.html greyBackground=false title="8 - Switch on the PC" content="If the **PC** is off, switch it on with the button at the **back of the screen**. To log in, ask a **fab manager**." image="Power_Button_PC.png" %}

{% include step-tuto.html greyBackground=true title="9 - Choose the material" content="On the shelves: **3 mm** plywood (new sheets on the left, offcuts on the right), **5 mm** plywood, and **acrylic** at the bottom. Prefer an **offcut** if one fits. Here, we take **3 mm plywood**." image="Material_Shelf.png" %}

{% include message.html title="Tip" message="To test an **assembly**, start with a **cardboard prototype**: it lets you **validate your dimensions** while **saving material**. The cardboard is on top of the cabinet." status="is-info" dismissable="true" icon="fas fa-lightbulb" %}

{% include step-tuto.html greyBackground=false title="10 - Place the sheet" content="Open the **lid**, position the sheet, then close it, **guiding the lid** all the way down." image="Plank_In_Laserbox.png" %}

{% include step-tuto.html greyBackground=true title="11 - Plug in the USB stick" content="Plug your **USB stick** into the hub in front of the screen." image="USB_Port.png" %}

{% include step-tuto.html greyBackground=false title="12 - Open Laserbox" content="On the PC, open the **Laserbox** software from the taskbar. The **home menu** is displayed." image="Laserbox_Welcome.png" %}

{% include step-tuto.html greyBackground=true title="13 - Create a project" content="Click the **+** to create a new project." image="New_Project.png" %}

{% include step-tuto.html greyBackground=false title="14 - Set the format" content="Set the page format to match your sheet." image="Benchy_Size_Box.png" %}

{% include step-tuto.html greyBackground=true title="15 - Import the file" content="Click **Importer** (import, top left) and choose your **.DXF file** in the explorer." image="Folder_Import.png" %}

{% include step-tuto.html greyBackground=false title="16 - See the imported model" content="Your model appears in the middle of the bed." image="New_Page.png" %}

{% include step-tuto.html greyBackground=true title="17 - Switch to flat surface mode" content="Click **flat surface mode**." image="Laserbox_Flat_Surface_Mode.png" %}

{% include step-tuto.html greyBackground=false title="18 - Check the camera preview" content="You now see the **camera preview** of the cutting bed." image="Benchy_Trace.png" %}

{% include step-tuto.html greyBackground=true title="19 - Position the model" content="**Move** your model to **position it on your sheet**." image="Move_Model.gif" %}

{% include step-tuto.html greyBackground=false title="20 - Select the material" content="Select the **material** in the drop-down panel at the top left (see the settings table below)." image="Material_List.png" %}

| **Material** | **Setting** |
|---|---|
| Cardboard | 3.5mm Carton |
| 3 mm plywood | 3mm Tilleul |
| 5 mm plywood | 5mm Tilleul |
| 3 mm acrylic | 3mm Acrylique |
| 5 mm acrylic | 5mm Acrylique |

{% include step-tuto.html greyBackground=true title="21 - Send the cut" content="Click the **start button** (top right)." image="Laserbox_Send_Button.png" %}

{% include step-tuto.html greyBackground=false title="22 - Confirm sending" content="A **confirmation window** opens: click **Envoyer** (send)." image="Laserbox_Validation.png" %}

{% include step-tuto.html greyBackground=true title="23 - Start on the machine" content="Wait for the **BEEP**, then press the **top button** of the cutter to **start the operation**." image="Cut_Button.png" %}

{% include step-tuto.html greyBackground=false title="24 - Cutting in progress" content="The cut starts. Stay alert until the operation is finished." image="Cutting.gif" %}

Well done! You now know how to **laser cut a part**.

For this place to stay **open to everyone**, it is up to you to **share what you have learned in this tutorial**!
