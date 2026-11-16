---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 5

title: "KiCad: importing libraries"
subtitle: Add component libraries to KiCad
description: Learn how to import symbol and footprint libraries into KiCad, in particular the Makerspace Amiens library, which lists the components available in stock.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: KiCad installed on your computer
    link: "/docs/tutorials/software/kicad/installation-kicad/"

softwares:
  - label: KiCad (version 8.0 or later)
    link: "https://www.kicad.org/"

hardwares:
  - label: Computer with a mouse
    link: ""

todo: 100
---

## Introduction

KiCad organises its components in two complementary types of libraries:

- **Symbol libraries** (`.kicad_sym`): the schematic representations of components, used in Eeschema
- **Footprint libraries** (`.pretty` folders containing `.kicad_mod` files): the PCB footprints used in Pcbnew

Makerspace Amiens maintains a KiCad library listing all the components available in stock. By adding it to your KiCad project, you have direct access to these components when designing your schematics and PCBs.

{% include message.html
title="Makerspace Amiens library"
message="The library is available on GitHub: [https://github.com/Makerspace-Amiens/kicad-library](https://github.com/Makerspace-Amiens/kicad-library). It is updated regularly as new components are added to the stock."
status="is-info"
icon="fas fa-info-circle" %}

---

## Downloading the library

{% include step-tuto.html
greyBackground = true
title = "Step 1: Download the ZIP archive"
content="Go to the GitHub repository of the library:

**[https://github.com/Makerspace-Amiens/kicad-library](https://github.com/Makerspace-Amiens/kicad-library)**

1. Click the **Code** button (green button at the top right)
2. Select **Download ZIP**
3. Extract the archive into a folder of your project or to an easily accessible location"
image="download-zip.png" %}

{% include step-tuto.html
greyBackground = true
title = "Structure of the library"
content="Once extracted, the library contains:

- A `.kicad_sym` file: the **symbol** library (schematic components)
- A `.pretty` folder: the PCB **footprint** library
- A `3dmodels` folder (optional): the 3D models of the components

Note the full path of the folder; you will need it for the next steps." %}

---

## Importing the symbol library

{% include step-tuto.html
greyBackground = true
title = "Step 1: Open the symbol library manager"
content="In KiCad, open your project, then start **Eeschema**. Go to:

**Preferences > Manage Symbol Libraries...**

The library management window opens with two tabs:

- **Global Libraries**: available for all your projects
- **Project Specific Libraries**: only for the current project

Select the **Project Specific Libraries** tab."
image="gestionnaire-librairies-symboles.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Add the symbol library"
content="In the **Project Specific Libraries** tab:

1. Click the **Add existing library** icon (folder symbol)
2. Browse to the extracted folder
3. Select the `.kicad_sym` file of the Makerspace library
4. The library appears in the list with a **Nickname** (short name) and its path
5. You can rename the nickname to `Makerspace-Amiens` to find it easily
6. Click **OK** to confirm"
image="ajouter-librairie-symboles.png" %}

---

## Importing the footprint library

{% include step-tuto.html
greyBackground = true
title = "Step 1: Open the footprint library manager"
content="In KiCad, open **Pcbnew** or the footprint editor. Go to:

**Preferences > Manage Footprint Libraries...**

The window works the same way as for symbols. Select the **Project Specific Libraries** tab."
image="gestionnaire-librairies-empreintes.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Add the footprint library"
content="In the **Project Specific Libraries** tab:

1. Click the **Add existing library** icon (folder with a +)
2. Browse to the extracted folder of the library
3. Select the **`.pretty` folder** (not an individual file)
4. The library is added with its nickname
5. Rename the nickname to `Makerspace-Amiens` for consistency with the symbol library
6. Click **OK** to confirm"
image="ajouter-librairie-empreintes.png" %}

---

## Checking the import

{% include step-tuto.html
greyBackground = true
title = "Step 1: Check the symbol library"
content="In Eeschema, press **A** to open the add component window. In the search bar, type `Makerspace` or the name of a component in stock.

The components of the Makerspace Amiens library should appear in the list, prefixed with the name of the library (`Makerspace-Amiens:ComponentName`)."
image="verifier-librairie-symboles.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Check the footprint library"
content="In Pcbnew, open the footprint editor or add a footprint from the menu. Search for `Makerspace` in the search bar.

The footprints of the Makerspace Amiens library should be listed and previewed correctly."
image="verifier-librairie-empreintes.png" %}

{% include message.html
title="Library updated?"
message="If the library is updated on GitHub (new components in stock), download the ZIP again and replace the extracted folder. KiCad picks up the changes the next time it starts."
status="is-warning"
icon="fas fa-sync-alt" %}
