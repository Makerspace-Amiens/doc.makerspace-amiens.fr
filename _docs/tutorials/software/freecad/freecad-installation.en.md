---
layout: documentation
lang: en
image: FreeCad(1).png
hide_hero: false
hero_image: FreeCad(1).png
hero_darken: true
component_toc: true
background_color: '#f7f4ed'

title: FreeCAD (1) - Overview and installation
subtitle: Discover FreeCAD and install it!
description: In this first tutorial, we see how to install FreeCAD.
tags: freecad
type: tutorial

time: 2
difficulty: 1
compatibilities-os: win,mac,lin

prerequisites:
  - label: None
    link: ""

softwares: 
  - label: FreeCAD
    link: "https://www.freecad.org"

todo: 100
---

## 1. Overview

FreeCAD is free and open-source 3D CAD (computer-aided design) software. It runs on any operating system and is still under development.

This software is used to make parametric parts and assemblies, mostly mechanical ones, and now has a large community that lets it meet many needs, some of them very specific.

More information on the FreeCAD website: [https://www.freecadweb.org](https://www.freecadweb.org).

## 2. Installation (quick)

### 2.1 Official version

**Note: If you want a more advanced version of FreeCAD, go for the "LinkBranch" development version**

The latest stable version of FreeCAD can be downloaded free of charge directly from [https://www.freecadweb.org](https://www.freecadweb.org). Choose the version for your OS, download it and run the installation.

### 2.2 Development version (recommended)

There are many development versions of FreeCAD. But the one that stands out, and that fixes a large number of bugs and unstable behaviours of the software, is RealThunder's "FreeCAD LinkBranch" version. The developer has fixed a great many bugs related to "topological naming" and added a large number of features.

To download it, simply go to the project's [GitHub repo](https://github.com/realthunder/FreeCAD_assembly3/releases), in the **release** section, and select the version you want for your OS.

Once downloaded, you can extract the archive and start the software from 'bin/FreeCADLink.exe'.

It is then advisable to follow the recommendations of [this page](../freecad-installation) to get off to a good start with FreeCAD, and to have a workspace that is cleaner and more modern than the default one.  

**Note: these changes will be saved for future versions of FreeCAD. You will not need to follow the previous tutorial again.**

{% include message.html
icon="fas fa-info-circle"
title="Notes"
message="This page only covers the configuration of the *link-branch* version by [RealThunder](https://github.com/realthunder/FreeCAD/releases). Mind the version used, given below. "
status="is-info" %}

<div class="control">
   <div class="tags has-addons">
        <span class="tag is-dark is-medium">FreeCAD_assembly3</span>
        <span class="tag is-info is-medium has-text-black"><a href="https://github.com/realthunder/FreeCAD/releases" style="color:white">2022.01.11</a></span>
        <span class="tag is-dark is-medium">
            <p class="icon">
                <i class="fab fa-github"></i>
            </p>
        </span>
    </div>
</div>

## 3. Installation

There are many development versions of FreeCAD. But the one that stands out, and that fixes a large number of bugs and unstable behaviours of the software, is RealThunder's "FreeCAD LinkBranch" version. The developer has fixed a great many bugs related to "topological naming" and added a large number of features.

{% include step-tuto.html
greyBackground = true
title="Download"
content="To download it, simply go to the project's [GitHub repo](https://github.com/realthunder/FreeCAD/releases), in the **release** section, and select the version you want for your OS:  

- Windows -> `FreeCAD-asm3-Stable-Win64`
- MacOS -> `FreeCAD-asm3-Stable-OSX`
You can choose between the `stable` version and the `daily` version, a pre-release build with the latest features that may be a little less stable."
image="2021-12-20-13-48-56.png" %}

{% include step-tuto.html
title="Installation"
content="Depending on the OS, installing **FreeCAD Asm3** can differ:

- **On Windows:** Extract the archive to a suitable place on your disk (avoid the desktop or the *downloads* folder). The executable is `bin/FreeCADLink.exe`. You can pin it to your taskbar, or make a shortcut to it.
- **On Mac:** simply open the `.dmg` and put the app in your applications folder.
"
image="2021-12-20-14-00-59.png" %}

{% include message.html
title="INFORMATION"
message="If you wish, you can also put FreeCAD on a USB stick so that you can run it from any computer without installing it again. For that, you need a **portable** version of the software instead, which can be found here:

[FreeCAD version 0.20.1](https://github.com/FreeCAD/FreeCAD/releases/download/0.20.1/FreeCAD-0.20.1-WIN-x64-portable-1.zip)"
status="is-info" %}

{% include step-tuto.html
greyBackground = true
title="First launch"
content="Start FreeCAD. You should get a window and a layout similar to the picture opposite."
image="2022-09-07-11-45-26.png" %}

{% include message.html
message="At this point, you can start using FreeCAD. However, the tips that follow can make the software much easier to get to grips with, especially if you are new to it."
status="is-info" %}

---

## 4. Customising the interface

{% include step-tuto.html
greyBackground = true
title="Change the overlay"
content="In `Tools > Preset Configurations`, click `Overlay dark theme`. This setting automatically loads all the graphical presets to give FreeCAD a clean interface. You can try the other presets if you want to restyle your interface quickly. "
image="changePreset.gif" %}

{% include step-tuto.html
title="Change the navigation style"
content="You can change the navigation style from the menu at the bottom right of your window. The `Gesture` style is pleasant for getting started quickly, especially with some trackpads, but you can of course try the other navigation styles.  
![](2021-12-20-17-09-54.png)"
image="2021-12-20-17-09-19.png" %}

Also, since the latest version of FreeCAD, the addon manager offers theme packs. You can install them through the **Tools > Addon manager** menu

In the RealThunder version of FreeCAD:

![](2022-09-16-08-46-28.png)
![](2022-09-16-08-47-31.png)

Once installed, you will be asked to restart the software for the changes to take effect:

![](2022-09-16-08-48-17.png)

Then go to **Edit -> Preferences -> General -> Preference packs (or Style sheet) -> Your pack -> Apply** to select the configuration you want.

![](2022-09-16-09-06-39.png)

---

## 5. Customising Part Design and the Sketcher

{% include step-tuto.html
greyBackground = true
title="Model merging and checking"
content="Go to `Edit > Preferences`, then `Part Design > General`. Tick the options as in the picture opposite. This automates the merging of models and the checking of parts.  
Apply the settings by clicking `Apply`."
image="2021-12-20-17-16-15.png" %}

{% include step-tuto.html
title="Random colours"
content="In `Part Design > Shape appearance > Shape color`, tick the `random` box. Each new part created will then take a random colour, which makes the various parts easier to tell apart.  
Apply the settings by clicking `Apply`."
image="2021-12-20-13-41-57.png" %}

{% include step-tuto.html
greyBackground = true
title="Sketcher"
content="In `Sketcher > General`, tick the boxes as shown in the picture opposite. This makes creating sketches simpler.  
Apply the settings by clicking `Apply`."
image="2021-12-20-17-22-02.png" %}

---

## 6. Additional addons

{% include step-tuto.html
greyBackground = true
title="Install workbenches"
content="In `Tools > Addon manager`, you can install addons that add features to FreeCAD in the form of extra workbenches. We recommend the following workbenches:

- **Fasteners:** screws and fasteners
- **Gears:** creating gears
- **Sheet Metal:** for sheet metal work or plastic bending  
**Restart FreeCAD to apply the changes."
image="2021-12-20-17-31-44.png" %}

{% include step-tuto.html
greyBackground = false
title="Organise the workbenches"
content="In `Tools > Customize > Workbenches`, you can reorder the workbenches as you like, to bring forward those you use most often and set aside those you do not use. We recommend bringing forward the `Part Design` workbench, which is the one you will find most useful when using FreeCAD for mechanical design.  
**Restart FreeCAD to apply the changes."
image="2021-12-20-17-28-35.png" %}

---

## 7. Rearranging your window and your tools

{% include step-tuto.html
greyBackground = true
title="Organise the tools"
content=" In each workbench, the toolbars can be moved to any of the 4 sides of your window. Depending on your screen resolution, some adjustment may be needed to show all the toolbars.
![](2021-12-20-17-38-30.png)"
image="changeMenu.gif" %}

{% include step-tuto.html
greyBackground = false
title="Add tools"
content="In a workbench, you can add tools from another workbench. This can be useful if you regularly need a tool that lives in a different workbench from the one you usually use.  
Here, we will add the move tool of the **Draft** workbench to the **PartDesign** workbench. Go to `Tools > Customize > Toolbars` "
image="accesMenuBarreOutils.gif" %}

{% include step-tuto.html
greyBackground = false
content="Create a new toolbar by clicking `New`. Give it a name (for example `Move` in our case), then add the `move` and `rotate` tools of the `Draft` workbench.
**You will need to open the `Draft` workbench once to load the toolbar."
image="ajoutMenuBarreOutils.gif" %}

---

## 7. Going further

**Tutorials**

- [RealThunder wiki](https://github.com/realthunder/FreeCAD_assembly3/wiki)
- [Full tutorial - Your first part in FreeCAD](https://wiki.freecadweb.org/Creating_a_simple_part_with_PartDesign)
- [Video - FreeCAD - Modelling basics (in French)](https://www.youtube.com/watch?v=5drucFyzOJM)
- [jp willm - FreeCAD tutorial channel (FR)](https://www.youtube.com/channel/UCJwHW5GwrK1fq16cxUoBOUw)
- [Maker Tales - FreeCAD tutorial channel (EN)](https://www.youtube.com/playlist?list=PL6Fiih6ItYsWCE20KtUJYpiDPrCA2rVpN)
- [OfficineRobotica - FreeCAD LinkBranch channel](https://www.youtube.com/channel/UC4PIO2pZaFKzI97uumFTNSg)
