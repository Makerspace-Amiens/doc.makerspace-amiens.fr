---
layout: documentation
lang: en
image: Benchy+Logo.png  
hide_hero: true  
hero_image: Benchy+Logo.png  
hero_darken: true  
component_toc: true  
doc_header: true
type: tutorial
tag: additive-manufacturing

title: 3D printing with OrcaSlicer  
subtitle: How to print your part with OrcaSlicer  
description: In this tutorial, you will learn how to print your first part using the OrcaSlicer software.  
author: Rémi Lacombe

time: 1  
difficulty: 2  
compatibilities-os: win, mac, lin

softwares: 
  - label: OrcaSlicer  
    link: ""

todo: 100  
---

## 3D printing a part

### Introduction

This **beginner's tutorial** takes you from **importing** your model to the **end of the print**, helping you avoid common mistakes.

Before starting this tutorial, we assume your part **has already been designed and exported** in **.STL** or **.3MF** format from your CAD software (OnShape, Solidworks, FreeCAD, Fusion 360...).

If your model does not exist yet, go to the [**CAD tutorials**](/pages/tutoriels-cao) page.

Otherwise, take a USB stick and put your file on it.

{% include step-tuto.html  
greyBackground = true  
image = "Etagere_Artillery.png"  
title="1 - Preparation and checks"  
content="You are now in the [**PrinterLab**](/pages/informations), an area of the MakerSpace dedicated to 3D printing. You will find many printer models there, but do not panic: just follow the steps of this tutorial ;).

Here we focus on the shelving unit on the right as you come in: this is where your part will take shape!"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Dashboard_Repetier.png"  
content="Check the **PC monitor** to the left of the shelves: it should show the server **dashboard**.

If it does not and the screen seems to be off, call a **fab manager**."  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Powered_Artillery.png"  
image_2 = "Spool.png"  
content="**Select** the machine you will print your part on. It must be **available** and **switched on**.

Also check that the **build plate** is **clean**, that there is **filament** left and that it really is **PLA** (wooden spools).

If the spool is empty, follow this [**tutorial**](/tutorials/3d-print/refill-bobine/) to refill it."  
%}

{% include message.html title="Tip" message="To get started, we recommend the [Artillery Genius Pro](/pages/machines/) printers, numbered **A1** to **A6**" status="is-info" dismissable="true" icon="fas fa-duotone fa-cube" %}

{% include step-tuto.html  
greyBackground = true  
image = "Power_Button_Artillery.png"  
content="If the printer is off, the power button is at the **back right of the machine**."  
%}

{% include step-tuto.html  
greyBackground = true  
image = "USB_Port.png"
image_2 = "Landing_Page_Orca.png"
title="2 - Importing your part"  
content="On one of the PrinterLab workstations, plug your stick into the USB hub in front of the screen.

Open the **OrcaSlicer** software ![OrcaSlicer icon](Orca_Icon.png). OrcaSlicer is **slicing** software that turns 3D models into detailed instructions for 3D printers.

On the home page, click **New Project**.

![New Orca project](New_Project.png)"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Empty_File.png"  
content="At the top of the left panel, in the **Printer drop-down menu**, **select the machine chosen earlier**.

![Printer choice](Printer_Choice_Menu.png)"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Benchy_On_Plate.png"  
content="In the **top ribbon**, click the **Add** button ![Add](Add_Part.png) and select your **part** in the **file explorer**.

Once confirmed, your model should **appear at the centre of the plate.**"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Benchy_On_Plate_Close_Up.png"  
title="3 - Print settings"  
content="In the **Filament** drop-down menu on the left panel, select **PLA - Rosa**.

![Filament menu](Filament_Choice_Menu.png)"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Brim.png"  
content="To make sure the part sticks to the build plate, go to the **Others** panel on the left.  
In the **Brim type** drop-down menu, select **Inner brim only**.

![Brim menu](Brim_Choice_Menu.png)

Then increase the **width of the brim** by setting the **Brim width** parameter to **5 mm**.

For very small parts, prefer a value close to **10 mm**.

![Brim parameter](Brim_Param.png)"  
%}

{% include message.html title="Warning" message="A printer cannot print in mid-air. If your part has large overhangs, you will need to tick the **Enable support** box in the **Support** tab. If in doubt, refer to this [**guide to supports in 3D printing**](https://all3dp.com/1/3d-printing-support-structures/) or ask a **fab manager** for advice." status="is-warning" dismissable="true" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html  
greyBackground = true  
image = "Sliced_Benchy.png"  
content="Then click ![Slice plate](Slice_Plate.png) at the top right of the window.

You should now see your **part sliced** into layers. The **print time** and the **material used** are also shown on the right panel.

![Time and material](Time_And_Material.png)

You can view the printing process with the slider on the right.

![Print simulation](Print_Slider.gif)"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Window.png"  
content="Before starting the print, check that:  

- The print will finish **before the MakerSpace closes** (ask a **fab manager**).  
- The machine you chose is **still available**.  
- The build plate is **empty and clean**. If it is not, **wipes** and cleaning product are available on the side of the red tool trolley.

![Cleaning](Cleaning_Gear.png)

"

%}

{% include step-tuto.html  
greyBackground = true  
title="4 - Starting the print"  
image = "Window.png"  
content="You can now click the ![Print](Print.png) button at the top right of the window.

The **machine program** is sent to the printer, and the print should **start**.

After a preheating and calibration phase, the printer lays down the **first layer**.

To make sure the print **succeeds**, it is crucial to check that the material **sticks** well to the plate.

![Printing](Printing.gif)"
%}

{% include step-tuto.html  
greyBackground = true  
title="5 - Printing"  
image = "One_Eternity_Later.gif"  
content="Now let **the printer do its job**!

For long prints, it is important to check regularly that everything is going well.

If the **part comes loose** before the end or **another problem** occurs, you will have to **stop the print** from the server **control panel**:

![Stopping the print](Stop_Print.gif)
"
%}

{% include step-tuto.html  
greyBackground = true  
title="6 - Post-processing"  
image = "Remove_Part.gif"  
content="After a little patience, here is your **finished print**!

To **remove the part from the plate**, there is no need to force it! Just wait for the plate to cool down.

After a few minutes, lift and flex the plate slightly, **without removing it**.

If the part does not come off, **wait a few minutes** for the plate to cool further."
%}

{% include step-tuto.html  
greyBackground = true  
image = "Remove_Brim_And_Trash.gif"  
content="Remove the **brims** and filament **deposits** from the plate. If you enabled the option, **remove the supports as well**.

Put your waste in the bin at the entrance to the **PrinterLab**.

Make sure you leave your workspace **clean** and **ready** for the next people!"
%}

{% include step-tuto.html  
greyBackground = false  
image = "Benchy.png"  
content="Well done! You now know how to print a part at the **PrinterLab**.

For this place to stay **open to everyone**, it is now up to you to **share what you have** learned in this tutorial!
"
%}
