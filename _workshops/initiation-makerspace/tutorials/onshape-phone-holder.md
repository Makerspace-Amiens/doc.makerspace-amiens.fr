---
layout: documentation
lang: en
hide_hero: false
hero_image: opera_IrNGzaeHom.png
hero_height: is-small
hero_darken: true
image: opera_IrNGzaeHom.png
component_toc: true
doc_header: true

title: "OnShape - Phone Holder Mini-Project"
subtitle: "Design and 3D print a part on your own"
description: "Model a simple phone holder without step-by-step guidance, then prepare it with Cura and 3D print it."

time: 2
difficulty: 2
compatibilities-os: win,mac,lin

todo: 100

prerequisites:
  - label: OnShape - Your First Part
    link: "/workshops/initiation-makerspace/tutorials/onshape-first-part/"
softwares:
  - label: OnShape
    link: "https://www.onshape.com/"
  - label: UltiMaker Cura
    link: "https://ultimaker.com/software/ultimaker-cura/"
---

## Objectives

Now that you have some basic knowledge of 3D modeling software, it's interesting to design a small functional project on your own.

For this, we will model the phone holder below. Its creation will not be guided step-by-step, but we will give you some information to help you successfully complete this first mini-project.

![Alt text](opera_IrNGzaeHom.png)

## General Description of the Design

{% include step-tuto.html
greyBackground = false
title="1 - Design Tree"
content="You will find the design tree of the final piece on the side.

As you can see, the piece is made up of three sketches that we will detail later, as well as 2 boss operations and one material removal operation.

The fillet operations finalize the piece.

A new operation in this design is the **Shell** operation, which we will detail later."
image="opera_cTY1jF91xq.png" %}

{% include step-tuto.html
greyBackground = false
title="2 - Main Boss"
content="To create the main boss, you will need to create a circle with a diameter of 60mm.

![Alt text](opera_GV2wFjc1eE.png)

The boss will also have **a depth of 60mm**."
image="opera_GbUkn74SvD.png" %}

{% include step-tuto.html
greyBackground = false
title="3 - Creating the Feet"
content="To create the feet's boss, you will need to create the sketch below in the same plane as the main boss.

![Alt text](opera_SySqeyL56v.png)

For this, you will use the **Aligned Rectangle** tool ![Alt text](opera_ODOvFWW2ex.png). Don't forget to use geometric relations in the upper toolbar.

The boss will also have **a depth of 60mm**."
image="opera_1JKxFQ1Lzg.png" %}

{% include step-tuto.html
greyBackground = false
title="4 - Creating the Phone Slot"
content="To create the material removal for the phone, you will need to create the sketch below, still in the same plane as the main boss.

![Alt text](opera_ITbSQFXK7o.png)

For this, you will use, as in the previous operation, the **Aligned Rectangle** tool. Don't forget to use geometric relations in the upper toolbar.

You will perform a material removal **Through All**."
image="opera_537YGdGP1D.png" %}

{% include step-tuto.html
greyBackground = false
title="5 - Creating the Central Opening"
content="To create the central opening of the piece, we could create an offset of the outer contour. But to simplify the design, we will work with the **Shell** tool. This operation allows you to hollow out a piece by leaving open the faces you select and creating thin walls.

For this, click on the **Shell** button ![Alt text](opera_SzeRBAdkuR.png) in the upper banner. Then select the two opposite faces of the piece:

![Alt text](opera_ZSFLXy92Uq.png)

Indicate a dimension of 3mm for the shell thickness and validate.

![Alt text](opera_RP8pCdUDrd.png)"
image="opera_V9vMHNywOx.png" %}

{% include step-tuto.html
greyBackground = false
title="6 - Creating Fillets"
content="The last operation now consists of creating fillets on each edge as shown in the view below. You can select all the edges in a single operation.

The fillets will all have a radius of 2mm.

![Alt text](opera_UTiBKf7JSB.png)"
image="opera_hyDIclBLPu.png" %}

## 3D Printing of the Piece

The project is complete, and you can now start printing the model.

### File Preparation

{% include step-tuto.html
greyBackground = false
title="1 - Saving in 3mf Format"
content="Right-click on your piece in the left toolbar, then click on **Export**.

![Alt text](opera_Cylzhb20xb.png)

Select the ***3mf*** file format. Save the file on a USB stick so you can bring it to the MakerSpace's printing PC.

![Alt text](opera_DlNDpXdAOZ.png)"
image="opera_q0E3mrqhdm.png" %}

{% include step-tuto.html
greyBackground = false
title="2 - Opening the File"
content="Open the Cura software ![](20230823_182215.png) then open your **3mf** format file by going to **File > Open File(s)**

![Alt text](UltiMaker-Cura_20230823_182245.png)

Select the model and using the movement and rotation tools, position the file in the center of the build plate.
![Alt text](UltiMaker-Cura_20230823_182606.gif)"
image="UltiMaker-Cura_UFt5BViqGd.png" %}

{% include step-tuto.html
greyBackground = false
title="3 - Slicing"
content="Make sure the selected machine and settings are correct (see below), then click on **Slice** at the bottom right. ![Alt text](UltiMaker-Cura_20230823_182901.png)

![Alt text](UltiMaker-Cura_20230823_182712.png)

Once the slicing operation is complete, you will see an estimated printing time appear at the bottom right:

![Alt text](UltiMaker-Cura_20230823_182943.png)"
image="UltiMaker-Cura_20230823_183033.png" %}

{% include step-tuto.html
greyBackground = false
title="4 - Verification"
content="In the top bar, click on the **Preview** tab.

![Alt text](UltiMaker-Cura_20230823_183117.png)

You will then have access to a view representing all the layers and manufacturing operations of the piece generated by the software. You can navigate through the layers using the right scrolling, or simulate the manufacturing of a layer using the bottom scrolling.

![Alt text](UltiMaker-Cura_20230823_183422.gif)"
image="UltiMaker-Cura_20230823_183456.png" %}

{% include step-tuto.html
greyBackground = false
title="5 - Saving"
content="All that's left is to save the machine code generated by the software to send it to the print server. To do this, simply click on **Save to Disk** at the bottom right and save the file in ***.gcode** format.

![Alt text](UltiMaker-Cura_20230823_183709.png)"
image="UltiMaker-Cura_20230823_183846.png" %}

### Printing the file on the server

{% include step-tuto.html
greyBackground = false
title="1 - Access the Server"
content="Go to the MakerSpace on the printing computer and open, if it's not already open, the print server page.

On the page that opens, you have access to the status of all the printers on the server. In our case, we will use the SideWinder S1, S2, or S3 printers. Make sure they are properly connected. If not, notify the MakerSpace FabManager."
image="opera_jgFT9zCsVc.png" %}

{% include step-tuto.html
greyBackground = false
title="2 - Access the Printer"
content="Then click on the **Go to Printer** button under the printer you wish to access.

![Alt text](opera_AQgVbCvl0a.png)

You arrive at the printer management page."
image="opera_KhippXyscX.png" %}

{% include step-tuto.html
greyBackground = false
title="3 - Load and Start the Gcode"
content="Click on **Load G-Code** and select the file you previously created with Cura.

![Alt text](opera_rqZdnGHzrr.png)

Your file then appears in the list of printable files. Click on the print icon ![Alt text](opera_e3NAHhE1VJ.png) next to your file to start printing.

![Alt text](opera_AuKRv4tlRt.png)

Once started, the print information updates at the top of the window, and the machine begins its heating cycle for the bed and nozzle.

![Alt text](opera_TyOjruQrHo.png)

All that's left is to check the good printing of the first layers and to regularly check the proper functioning of the printing."
image="opera_PmIMDM8QQi.png" %}

{% include step-tuto.html
greyBackground = false
title="4 - Retrieve Your Part!"
content="And there you have it! All that's left is to wait for your print to finish! To remove the part, make sure to wait until the bed has cooled down. The part should come off on its own without any force. If that's not the case, wait a bit longer or notify the FabManager."
image="Animation.gif" %}

{% include message.html title="Caution"
message="If an issue arises before or during printing, or if you have any doubts about the procedure, do not hesitate to contact the FabManager of the MakerSpace."
status="is-warning"
icon="fas fa-exclamation-triangle" %}
