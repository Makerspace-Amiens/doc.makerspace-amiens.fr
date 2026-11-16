---
layout: documentation
lang: en
image: SolidWorks(3).png
hide_hero: false
hero_image: SolidWorks(3).png
hero_darken: true
component_toc: true
background_color: '#f7eded'

title: SolidWorks (3) - Mini-project
subtitle: Carry out a mini-project without a step-by-step tutorial
description: In this third tutorial, we create a simple phone stand so that it can then be 3D printed.
tags: solidworks
type: tutorial

time: 2
difficulty: 2
compatibilities-os: win

prerequisites:
  - label: First SolidWorks tutorial
    link: ""

softwares: 
  - label: Solidworks
    link: "https://www.solidworks.com/fr"

todo: 100
---

## Goals

Now that you know some of the basics of handling 3D modelling software, it is worth designing a small functional project by yourself.

To do so, we will model the phone stand below. You will not be guided step by step, but we will give you some information to help you complete this first mini-project.

![Alt text](SLDWORKS_20230823_174336.png)

{% include 3d-model.html model = "/img/3d/SupportTelephone.glb" %}

## General description of the design

{% include step-tuto.html
greyBackground = false
title="1 - Feature tree"
content="Opposite is the feature tree of the final part.

As you can see, the part is made from three sketches, which we detail further down, plus 2 boss operations and one cut operation.

Fillet operations finish off the part.

One operation is new in this design: the **Shell** operation (*Coque*), which we detail further down. ![Alt text](SLDWORKS_20230823_175259.png)
"
image="SLDWORKS_20230823_175024.png" %}

{% include step-tuto.html
greyBackground = false
title="2 - Main boss"
content="To create the main boss, simply create a circle 60mm in diameter.

![Alt text](SLDWORKS_20230823_175557.png)

The boss will also have **a depth of 60mm**
"
image="SLDWORKS_20230823_175432.png" %}

{% include step-tuto.html
greyBackground = false
title="3 - Creating the feet"
content="To create the boss of the feet, you will have to create the sketch below in the same plane as that of the main boss.

![Alt text](SLDWORKS_20230823_175827.png)

To do so, use the **3 point corner rectangle** tool. Do not forget construction lines ![Alt text](20230823_180030.png) and the geometric relations in the left panel.

![Alt text](20230823_175852.png)

The boss will also have **a depth of 60mm**
"
image="SLDWORKS_20230823_175749.png" %}

{% include step-tuto.html
greyBackground = false
title="4 - Creating the opening for the phone"
content="To create the cut for the phone, you will have to create the sketch below, again in the same plane as that of the main boss.

![Alt text](SLDWORKS_20230823_180331.png)

To do so, use the **3 point corner rectangle** tool, as in the previous operation. Do not forget construction lines ![Alt text](20230823_180030.png) and the geometric relations in the left panel.

Make a **Through all** cut.
"
image="SLDWORKS_20230823_180213.png" %}

{% include step-tuto.html
greyBackground = false
title="5 - Creating the central opening"
content="To create the central opening of the part, we could offset the outer outline. But to keep the design simple, we will work with the **Shell** tool. This operation hollows out a part, leaving open the faces you select and creating thin walls.

To do so, click the **Shell** button ![Alt text](SLDWORKS_20230823_180819.png) in the top bar. Then select the two opposite faces of the part:

![Alt text](SLDWORKS_20230823_180854.png)

Enter a dimension of 3mm for the shell thickness and confirm.

![Alt text](SLDWORKS_20230823_181021.png)
"
image="SLDWORKS_20230823_181052.png" %}

{% include step-tuto.html
greyBackground = false
title="6 - Creating the fillets"
content="The last operation is to create the fillets on each edge, as in the view below. You can select all the edges in one and the same operation.

The fillets will all have a radius of 2mm.

![Alt text](SLDWORKS_20230823_181342.png)
"
image="SLDWORKS_20230823_181359.png" %}

## 3D printing the part

With the project finished, you can now print the model.

### Preparing the file

{% include step-tuto.html
greyBackground = false
title="1 - Saving in 3mf format"
content="Go to the **Save as** menu and select ***3mf** as the file format. Save the file to a USB stick so that you can take it to the MakerSpace print PC.

![Alt text](SLDWORKS_20230823_181622.png)
"
image="20230823_181809.png" %}

{% include step-tuto.html
greyBackground = false
title="2 - Opening the file"
content="Open the Cura software ![](20230823_182215.png), then open your **3mf** file through **File > Open File(s)**

![Alt text](UltiMaker-Cura_20230823_182245.png)

Select the model and, with the move and rotate tools, place it at the centre of the bed.
![Alt text](UltiMaker-Cura_20230823_182606.gif)
"
image="20230823_181809.png" %}

{% include step-tuto.html
greyBackground = false
title="3 - Slicing"
content="Check that the machine and the settings selected are correct (see below), then click **Slice** at the bottom right. ![Alt text](UltiMaker-Cura_20230823_182901.png)

![Alt text](UltiMaker-Cura_20230823_182712.png)

Once slicing is finished, an estimate of the print time appears at the bottom right:

![Alt text](UltiMaker-Cura_20230823_182943.png)
"
image="UltiMaker-Cura_20230823_183033.png" %}

{% include step-tuto.html
greyBackground = false
title="4 - Checking"
content="In the top bar, click the **Preview** tab.

![Alt text](UltiMaker-Cura_20230823_183117.png)

You then get a view showing all the layers and manufacturing operations generated by the software for the part. You can move through the layers with the slider on the right, or simulate the making of one layer with the bottom slider.

![Alt text](UltiMaker-Cura_20230823_183422.gif)
"
image="UltiMaker-Cura_20230823_183456.png" %}

{% include step-tuto.html
greyBackground = false
title="5 - Saving"
content="All that remains is to save the machine code generated by the software in order to send it to the print server. To do so, simply click **Save to Disk** at the bottom right and save the file in ***.gcode** format.

![Alt text](UltiMaker-Cura_20230823_183709.png)
"
image="UltiMaker-Cura_20230823_183846.png" %}

### Printing the file from the server

{% include step-tuto.html
greyBackground = false
title="1 - Accessing the server"
content="Go to the print computer in the MakerSpace and open the print server page, if it is not open already.

The page that opens shows the status of all the printers on the server. In our case, we will use the SideWinder S1, S2 or S3 printers. Check that they are connected. If they are not, tell the MakerSpace FabManager.
"
image="opera_jgFT9zCsVc.png" %}

{% include step-tuto.html
greyBackground = false
title="2 - Accessing the printer"
content="Then click the **Aller à l'imprimante** (go to the printer) button under the printer you want to access.

![Alt text](opera_AQgVbCvl0a.png)

You arrive on the printer management page.
"
image="opera_KhippXyscX.png" %}

{% include step-tuto.html
greyBackground = false
title="3 - Loading and starting the G-code"
content="Click **Charger le G-Code** (load G-code) and select the file you created earlier with Cura.

![Alt text](opera_rqZdnGHzrr.png)

Your file then appears in the list of files that can be printed. Click the print icon ![Alt text](opera_e3NAHhE1VJ.png) on the line of your file to start the print.

![Alt text](opera_AuKRv4tlRt.png)

Once started, the print information updates at the top of the window and the machine begins heating the bed and the nozzle.

![Alt text](opera_TyOjruQrHo.png)

All that remains is to check that the first layers print properly and to check regularly that the print is going well.
"
image="opera_PmIMDM8QQi.png" %}

{% include step-tuto.html
greyBackground = false
title="4 - Collect your part!"
content="There you go! Now just wait for your print to finish! To remove the part, wait until the bed has cooled down. The part should come off by itself without forcing. If it does not, wait a little longer or tell the FabManager.
"
image="Animation.gif" %}

{% include message.html title="Warning"
message="If a problem appears before or during printing, or if you are unsure how to proceed, do not hesitate to contact the MakerSpace FabManager."
status="is-warning"
icon="fas fa-exclamation-triangle" %}
