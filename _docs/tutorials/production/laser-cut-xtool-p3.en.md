---
layout: documentation
lang: en
hide_hero: false
hero_image: premiere_utilisation.jpg
hero_height: is-small
hero_darken: true
image: premiere_utilisation.jpg
component_toc: true
doc_header: true
type: tutorial

title: Laser cutting - xTool P3
subtitle: Using the xTool P3 cutter and the xTool software
description: "Getting started with the xTool P3 laser cutter: switching on, preparing the material, selection, managing processes and safety."
author: Raphael Peru

time: 1
difficulty: 1

softwares:
  - label: xTool Creative Space
    link: "https://www.xtool.com/pages/software"

hardwares:
  - label: xTool P3
    link: /docs/references/machines/xtool-p3/

todo: 80
---

This tutorial explains how to use the **xTool P3** laser cutter and its software, from switching on to collecting your parts, while following the safety instructions.

{% include safety-banner.html machine="xTool P3" link="/docs/references/machines/xtool-p3/#safety" %}

{% include step-tuto.html greyBackground=true title="1 - Switch on" content="Flip the switch at the back of the machine. The P3 may move briefly to calibrate itself at start-up; this is nothing to worry about." image="bouton-allumage.jpeg" %}

{% include step-tuto.html greyBackground=false title="2 - Start the xTool software" content="While the machine is starting, launch the **xTool** software on the PC." image="xtool-icon.png" %}

{% include step-tuto.html greyBackground=true title="3 - Create a new project" content="In xTool, click **New Project** (top right) to open a new project." image="bouton-new-project.png" %}

{% include step-tuto.html greyBackground=false title="4 - Check the machine" content="Check that the machine selected really is the **xTool P3**, shown as connected (and not the xTool F2 Ultra). If it is not, click the machine switch arrows and choose the P3." image="machine-connectee.png" %}

{% include step-tuto.html greyBackground=true title="5 - Import the file" content="Import your `.svg` or `.dxf` file with the **Import** button." image="bouton-import.png" %}

{% include step-tuto.html greyBackground=false title="6 - Open the lid" content="**Wait for the P3 to stop its fans**, then open the glass lid of the machine." image="zone-de-travail.jpeg" %}

{% include step-tuto.html greyBackground=true title="7 - Check the rails and bars" content="Check that the rails and bars of the work area (highlighted in green) are **correctly positioned**." image="barres-zone-de-travail.png" %}

{% include step-tuto.html greyBackground=false title="8 - Place the material" content="Place your material on the work area, **preferably towards the middle** rather than at the edges." image="zone-de-travail-avec-materiau.jpeg" %}

{% include step-tuto.html greyBackground=true title="9 - Scan the area" content="Close the lid, then scan the work area with the **Refresh background** button." image="bouton-refresh-background.png" %}

{% include step-tuto.html greyBackground=false title="10 - Check the scan" content="The software shows the real area with the material in place. If the scan is blurred in places, use **Close shot** to re-photograph a specific area." image="zone-de-travail-scanee.png" %}

{% include step-tuto.html greyBackground=true title="11 - Position the file" content="Place your file on the positioning grid that marks the material." image="fichier-bien-organise.png" %}

{% include step-tuto.html greyBackground=false title="12 - Calibrate the head" content="With the lid closed, click **Precise Measure**, then the centre of your file. The laser will pass over this point twice (area lowered, then raised)." image="bouton-precise-measure-curseur.png" %}

{% include step-tuto.html greyBackground=true title="13 - Open the material selection" content="Click **Material** (« Unknown Material » by default) to open the selection window." image="bouton-material.png" %}

{% include step-tuto.html greyBackground=false title="14 - Choose the material" content="Search for the material by name or thickness, then narrow it down with the categories on the left." image="fenetre-selection-materiaux.png" %}

{% include message.html title="If in doubt about the material" message="If you are unsure which material to select, ask the MakerSpace staff: never pick a material at random." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html greyBackground=true title="15 - Choose the mode" content="A _process_ is an action on an element of the file. Choose between **Score** (engrave the outline), **Engrave** (engrave the surface) or **Cut**." image="trois-modes-score-engrave-cut.png" %}

{% include step-tuto.html greyBackground=false title="16 - Preview the processes" content="Look at a preview of each process. The Engrave and Cut previews are **interactive**: click the various parts to adjust power and speed." image="xtool-previews.gif" %}

{% include step-tuto.html greyBackground=true title="17 - Simulate the result" content="Check the **power** and **speed** of each process, then click **Preview** to get a simulation of the final result and spot mistakes." image="preview-projet.png" %}

{% include step-tuto.html greyBackground=false title="18 - Start the job" content="Click **Process** then **Start** to send the job, then press the button on the right of the machine to start the work." image="bouton-start.jpeg" %}

{% include message.html title="Supervision is mandatory during the job" message="Stay in front of the P3 for the **whole** job. Checking that it runs properly is mandatory, to avoid a fire starting while your back is turned. If you have to step away, you must pause the machine with the button used to start the job." status="is-danger" icon="fas fa-fire" %}

{% include step-tuto.html greyBackground=true title="19 - Follow the job" content="The software shows the view from the P3's internal camera and the estimated time remaining." image="vue-logiciel-pendant-job.png" %}

{% include step-tuto.html greyBackground=false title="20 - Job in progress" content="The head follows the path and cuts or engraves the material. Stay alert until the end." image="job-en-cours.gif" %}

{% include step-tuto.html greyBackground=true title="21 - After the job" content="Wait **20 to 30 seconds** before opening the lid, so that **all the fumes are extracted**, then collect your parts safely. Do not forget to **switch off the machine** if nobody is using it after you." image="job-termine.jpeg" %}
