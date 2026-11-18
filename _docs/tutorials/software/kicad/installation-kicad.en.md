---
layout: documentation
lang: en
hide_hero: false
hero_image: "/docs/tutorial/installation-kicad/hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 2

title: Installing KiCad
subtitle: Install KiCad on your operating system
description: This tutorial explains how to install KiCad on Windows, macOS and Linux.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Administrator rights on your computer
    link: ""

softwares:
  - label: KiCad (version 8.0 or later recommended)
    link: "https://www.kicad.org/"

hardwares:
  - label: Computer with at least 4GB of RAM
    link: ""

todo: 100
---

## Introduction

KiCad is free and open-source software for designing electronic circuits and printed circuit boards (PCBs). It lets you create schematics, draw PCBs and generate the files needed to manufacture your boards.

This tutorial guides you through installing KiCad on the three main operating systems: Windows, macOS and Linux.

{% include message.html
title="Recommended version"
message="We recommend installing the latest stable version of KiCad (version 8.0 or later) to benefit from the latest features and bug fixes."
status="is-info"
icon="fas fa-info-circle" %}

---

## Installing on Windows

{% include step-tuto.html
greyBackground = true
title = "Step 1: Download"
content="Go to the official KiCad website at [https://www.kicad.org/download/windows/](https://www.kicad.org/download/windows/). Download the latest stable version for Windows (.exe file)." %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Run the installer"
content="Double-click the downloaded file to start the installation. If Windows asks for permission to run the file, click 'Yes'." %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Installation settings"
content="Follow the instructions of the installation wizard. It is recommended to keep the default settings:

- Full installation (including the component libraries)
- Default installation path: C:\\Program Files\\KiCAD
- Creation of desktop shortcuts" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Finishing"
content="Click 'Install' and wait while it installs. Once it has finished, click 'Finish'. You can now start KiCad from the Start menu or the desktop shortcut." %}

{% include message.html
title="Tip"
message="On first launch, KiCad may take a few moments to initialise the component libraries. This is normal."
status="is-success"
icon="fas fa-check-circle" %}

---

## Installing on macOS

{% include step-tuto.html
greyBackground = true
title = "Step 1: Download"
content="Go to the official KiCad website at [https://www.kicad.org/download/macos/](https://www.kicad.org/download/macos/). Download the version that matches your processor:

- KiCad for Apple Silicon (M1, M2, M3, M4): .dmg file
- KiCad for Intel: .dmg file" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Open the DMG file"
content="Double-click the downloaded .dmg file to mount it. A window opens with the KiCad icon and the Applications folder." %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Installation"
content="Drag and drop the KiCad icon into the Applications folder. Wait for the copy to finish." %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: First launch"
content="Open the Applications folder and double-click KiCad. If macOS shows a security message, go to System Settings > Privacy & Security, then allow KiCad to run." %}

{% include message.html
title="Important: macOS security"
message="On first launch, macOS may block KiCad because it was not downloaded from the App Store. This is normal; simply follow the instructions above to allow the application."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Installing on Linux

KiCad can be installed on most Linux distributions. Here are the methods for the most popular ones.

### Ubuntu / Debian

{% include step-tuto.html
greyBackground = true
title = "Method 1: Install from the PPA (recommended)"
content="Open a terminal and run the following commands to add the official KiCad PPA and install the latest version:

```bash
sudo add-apt-repository ppa:kicad/kicad-8.0-releases
sudo apt update
sudo apt install kicad
```" %}

{% include step-tuto.html
greyBackground = true
title = "Method 2: Install with Snap"
content="If you prefer to use Snap, simply run:

`sudo snap install kicad`" %}

### Fedora

{% include step-tuto.html
greyBackground = true
title = "Installing on Fedora"
content="Open a terminal and run:

`sudo dnf install kicad`" %}

### Arch Linux

{% include step-tuto.html
greyBackground = true
title = "Installing on Arch Linux"
content="Open a terminal and run:

`sudo pacman -S kicad`" %}

### Flatpak (all distributions)

{% include step-tuto.html
greyBackground = true
title = "Install with Flatpak"
content="If your distribution supports Flatpak, you can install KiCad with:

`flatpak install flathub org.kicad.KiCad`

And start it with:
`flatpak run org.kicad.KiCad`" %}

{% include message.html
title="Component libraries"
message="On Linux, the component libraries are generally installed automatically with the main package. If they are not, also install the kicad-libraries or kicad-symbols package."
status="is-info"
icon="fas fa-info-circle" %}

---

## Checking the installation

{% include step-tuto.html
greyBackground = true
title = "Check that KiCad works"
content="Once the installation is complete, start KiCad. You should see the main project manager window with several icons:

- Eeschema (schematic editor)
- Pcbnew (PCB editor)
- GerbView (Gerber viewer)
- And other tools

If you see this interface, congratulations! KiCad is correctly installed." %}

---

## Initial configuration (optional)

{% include step-tuto.html
greyBackground = true
title = "Set your preferences"
content="Before starting your first project, you can customise KiCad:

1. Go to Preferences > Preferences
2. Set your preferred units (mm or inches)
3. Adjust the working grid to your needs
4. Configure the paths to the libraries if necessary" %}

{% include step-tuto.html
greyBackground = true
title = "Install additional libraries"
content="KiCad ships with many components, but you can add more:

- From the library manager (Preferences > Manage Symbol/Footprint Libraries)
- By downloading third-party libraries from GitHub
- By creating your own custom libraries

To learn how to import additional libraries into KiCad, see our tutorial [KiCad: importing libraries](/docs/tutorials/software/kicad/kicad-import-librairies/)." %}

---

## Useful resources

Once KiCad is installed, here are a few resources to get off to a good start:

- [Official KiCad documentation](https://docs.kicad.org/)
- [KiCad forums](https://forum.kicad.info/)
- [Video tutorials on YouTube](https://www.youtube.com/results?search_query=kicad+tutorial)
- [Community component libraries](https://kicad.github.io/)

{% include message.html
title="Next steps"
message="Now that KiCad is installed, you are ready to create your first project! See our other tutorials to learn how to design your first electronic board."
status="is-success"
icon="fas fa-rocket" %}

---

## Going further

{%
  include card_collections.html
  title="KiCad tutorials"
  description="Explore other tutorials to master KiCad"
  type="tutorial"
%}
