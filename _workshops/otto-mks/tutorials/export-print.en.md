---
layout: documentation
lang: en
hide_hero: false
hero_image: print_head_green.gif
hero_darken: true
image: print_head_green.gif
component_toc: true
doc_header: true
tag: otto-mks

title: Export and print Otto!
subtitle: Export and print the parts of Otto
description: This page details the structure of the assembly file, and how to export a part and print it

author: Adrien BRACQ & Rémi LACOMBE

time: 3
difficulty: 2



---

Now that you have duplicated the OTTO-MKS file, you must export and print the following parts in the colours of your choice:

{% include image-row.html
image_1 = "Head.png"
image_2 = "Body.png"
image_3 = "Leg.png"
image_4 = "Feet.png"
%}

- 1x **Head**
- 1x **Body**  
- 2x **Leg**
- 1x **Left_Foot** & 1x **Right_Foot**

## Exporting a part from Onshape

First select the **tab** containing the part to export. We take the **Head** part as an example.

{% include step-tuto.html
greyBackground = false
image = "viewport.png"
title = "Select the part in the lower section of the left panel"
content = "" %}

{% include step-tuto.html
greyBackground = false
image = "right_click.png"
title = "Right-click the part"
content = "" %}

{% include step-tuto.html
greyBackground = false
image = "Export.png"
title = "Click Export and select the .STEP or .3MF format"
content = "" %}

{% include message.html
title = "Information"
message = "The **.STEP** format is recommended because it carries more detail and can export an assembly containing several separate parts in a single file"
status = "is-info"
dismissable = "true"
icon = "fas fa-exclamation" %}

{% include message.html title="Warning" message="All the parts print **without supports or brims**; check that these settings are turned off in OrcaSlicer." status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include step-tuto.html
greyBackground = false
image = "printerlab.png"
title = "Printing"
content = "Copy the downloaded file to a **USB stick**, go to the **PrinterLab** and follow [this tutorial](https://makerspace-amiens.fr/fab-additive/docs/tutorials/imprimer-une-piece/)" %}

While your parts are printing, follow the next tutorials carefully, starting with **discovering the electronic board**! [**04 - Discover the Otto board**](../../tutoriels/04-discover-otto-pcb/)
