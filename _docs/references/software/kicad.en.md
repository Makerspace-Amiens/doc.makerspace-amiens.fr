---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: KiCad
subtitle: The free and open-source PCB design suite
description: "KiCad reference sheet: what it is for, its tools, how to install it and where to learn it."
author: Alban Petit

manufacturer:
  - name: KiCad (projet libre)
    link: "https://www.kicad.org/"

todo: 80
---

## Overview

**KiCad** is a free and open-source electronic design suite: you draw the **schematic** of a circuit, then the **printed circuit board** (PCB) that implements it, all the way to the files sent to the manufacturer. It is developed by an international community, with support from CERN, and runs on Windows, macOS and Linux.

At the MakerSpace, it is the tool used for every electronic board, in particular in the Microcontrollers and Stepper Controller Board workshops.

## The tools

| Tool | Purpose |
|---|---|
| **Schematic Editor** (Eeschema) | Draw the schematic: symbols, wires, labels, power |
| **PCB Editor** (Pcbnew) | Place the footprints and route the tracks of the board |
| **Symbol and Footprint Editors** | Create a component missing from the libraries |
| **3D Viewer** | See the assembled board in 3D before manufacturing |
| **Gerber Viewer** | Check the manufacturing files |
| **Plugin and Content Manager** | Install libraries and extensions (including SparkFun's) |

Two automatic checks support the design work: the **ERC** (electrical rules check) on the schematic, and the **DRC** (design rules check) on the PCB.

## Installation

KiCad can be downloaded from [kicad.org/download](https://www.kicad.org/download/). The step-by-step procedure, for each operating system, is in the tutorial [Installing KiCad](/docs/tutorials/software/kicad/installation-kicad/).

## Learning KiCad at the MakerSpace

| Tutorial | Content |
|---|---|
| [Installing KiCad](/docs/tutorials/software/kicad/installation-kicad/) | Install KiCad and its libraries |
| [KiCad: importing libraries](/docs/tutorials/software/kicad/kicad-import-librairies/) | Add the MakerSpace library or a manufacturer's library |
| [KiCad Eeschema: the basics](/docs/tutorials/software/kicad/kicad-eeschema-bases/) | Draw a schematic, annotate, check (ERC) |
| [KiCad Pcbnew: the basics](/docs/tutorials/software/kicad/kicad-pcbnew-bases/) | Place, route, check (DRC) |
| [PCB manufacturing](/docs/tutorials/software/kicad/kicad-fabrication-pcb/) | Generate the files and order the board |

## Resources

- [Official KiCad documentation](https://docs.kicad.org/)
- [MakerSpace Amiens KiCad library](https://github.com/Makerspace-Amiens/kicad-library)
- [SparkFun KiCad libraries](https://github.com/sparkfun/SparkFun-KiCad-Libraries)
- [Seeed Studio KiCad library](https://github.com/Seeed-Studio/OPL_Kicad_Library), including the XIAO series
