---
layout: documentation
lang: en
hide_hero: false
hero_image: "/docs/tutorial/kicad-fabrication-pcb/hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 5

title: PCB manufacturing
subtitle: From KiCad to the physical board
description: Learn to generate Gerber files, understand the manufacturing parameters and order your printed circuit boards.
author: Alban Petit

time: 2
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: PCB finished and checked in Pcbnew
    link: "/docs/tutorials/software/kicad/kicad-pcbnew-bases/"

softwares:
  - label: KiCad (version 8.0 or later)
    link: "https://www.kicad.org/"

hardwares:
  - label: Computer with an internet connection
    link: ""

todo: 100
---

## Introduction

Once your PCB is designed and checked in Pcbnew, the next step is to have it manufactured. This tutorial guides you through:

- Exporting the Gerber files (the standard manufacturing format)
- Understanding the manufacturing parameters
- Using the Aisler service to order your PCBs

{% include message.html
title="Important prerequisite"
message="Before exporting your manufacturing files, make sure your PCB is completely finished: routing done, DRC passed with no errors, ground planes filled, and silkscreen finalised."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Understanding Gerber files

{% include step-tuto.html
greyBackground = true
title = "What is a Gerber file?"
content="Gerber files (RS-274X or Gerber X2 format) are the industry standard for PCB manufacturing. They describe each layer of your board:

- Copper layers (F.Cu, B.Cu, inner layers)
- Solder mask
- Silkscreen
- Cutting outline (Edge.Cuts)
- Drill files

The manufacturer uses these files to create the photomasks and drive the production machines." %}

{% include step-tuto.html
greyBackground = true
title = "Drill files"
content="Alongside the Gerbers, the drill files describe all the holes:

- Plated holes (vias, through-hole pads)
- Non-plated holes (mounting holes)

Format: generally Excellon (.drl) or Gerber

These files give the position, diameter and type of each hole." %}

{% include message.html
title="A complete set"
message="A complete set of Gerber files typically contains 8-12 files for a 2-layer PCB: top/bottom copper, top/bottom solder mask, top/bottom silkscreen, outline, drill, and sometimes a paste file for SMD assembly."
status="is-info"
icon="fas fa-file-archive" %}

---

## Viewing and checking the Gerber files

{% include step-tuto.html
greyBackground = true
title = "Use the KiCad Gerber viewer"
content="KiCad includes a built-in Gerber viewer. From the project manager, click **Gerber Viewer**, or go to File > Open Gerber Viewer from Pcbnew."
image="ouvrir-visualiseur.png" %}

{% include step-tuto.html
greyBackground = true
title = "Load the Gerber files"
content="In the viewer:

1. Go to **File > Open Gerber Plot File(s)**
2. Select ALL your .gbr files in the gerber folder
3. Also open the .drl drill files
4. All the files appear in the left panel

Turn layers on and off to inspect each element." %}

{% include step-tuto.html
greyBackground = true
title = "Points to check"
content="Check visually in the Gerber viewer:

✓ The Edge.Cuts outline is complete and closed
✓ All tracks and copper zones are present
✓ The solder mask covers the copper (except the pads)
✓ The silkscreen is readable and does not overlap the pads
✓ The drill holes are correctly positioned on the pads
✓ No empty or missing area

Compare with your PCB in Pcbnew to confirm."
image="verification-gerber.png" %}

{% include message.html
title="Common errors to check for"
message="Frequent problems in Gerbers: outline not closed (the board will not be cut properly), silkscreen over pads (it will be removed), misaligned holes, unfilled copper zones. Fix them in Pcbnew and export again if necessary."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Understanding the manufacturing parameters

{% include step-tuto.html
greyBackground = true
title = "Number of layers"
content="**2 layers**: The most common and cheapest. Top + bottom copper.
**4 layers**: Adds 2 inner layers, useful for complex boards with many signals or for dedicated power planes.
**6+ layers**: For very complex circuits, high speed or controlled impedance.

To get started: 2 layers are enough for 90% of projects." %}

{% include step-tuto.html
greyBackground = true
title = "PCB thickness"
content="**Standard: 1.6mm** (the most common and cheapest)
**Others: 0.8mm, 1.0mm, 2.0mm**

**Choice by use:**

- **1.6mm**: General use, a good stiffness/cost compromise
- **1.0mm**: More compact boards, portable electronics
- **2.0mm**: Mechanical applications, high stresses

Check your connectors: some are designed for a specific thickness." %}

{% include step-tuto.html
greyBackground = true
title = "Copper thickness"
content="Expressed in oz (ounces per square foot) or µm:

**1 oz (35µm)**: Standard, enough for most applications
**2 oz (70µm)**: For higher currents (>3A per track)
**0.5 oz (18µm)**: Less common, for very fine circuits

More copper = better conduction but higher cost.
To get started: **1 oz** is the standard choice." %}

{% include step-tuto.html
greyBackground = true
title = "Solder mask colour"
content="The solder mask protects the copper and gives the PCB its colour:

**Green**: Standard, the cheapest
**Blue**: Popular, slightly more expensive
**Red, black, white, yellow**: Other colours available
**Transparent/None**: No mask (rare, special applications)

The colour does not affect performance; it is purely cosmetic.
**Green = best price**, other colours = extra cost." %}

{% include step-tuto.html
greyBackground = true
title = "Silkscreen colour"
content="The silkscreen prints the markings, references and texts:

**White**: Standard on green/blue/red/black mask
**Black**: On white/light yellow mask
**Yellow, red**: Available from some manufacturers

Contrast matters: white on a dark background, black on a light one.
The silkscreen is optional but strongly recommended for assembly." %}

{% include step-tuto.html
greyBackground = true
title = "Surface finish"
content="The finish protects the copper of the pads and makes soldering easier:

**HASL (Hot Air Solder Leveling)**:

- Hot air tinning, the cheapest
- Slightly uneven surface
- Good for hand soldering, borderline for fine-pitch SMD

**Lead-free HASL**:

- Like HASL but RoHS compliant
- Recommended for commercial products

**ENIG (Electroless Nickel Immersion Gold)**:

- Flat, gold-plated surface
- Excellent for fine-pitch SMD, contacts, RF
- More expensive but better quality
- Long shelf life

To get started: **lead-free HASL** (a good compromise)" %}

{% include message.html
title="Recommended standard configuration"
message="**To get started, a budget configuration:**

• 2 layers
• 1.6mm thickness
• 1 oz copper
• Green + white silkscreen
• Lead-free HASL
• Tented vias

This configuration is the cheapest and perfectly suited to 90% of projects."
status="is-success"
icon="fas fa-star" %}

---

## Ordering from Aisler

{% include step-tuto.html
greyBackground = true
title = "What is Aisler?"
content="**Aisler** is a European PCB manufacturer (Germany) offering:

- Competitive prices for small runs (3-20 PCBs)
- Certified European quality
- Fast delivery in Europe (5-10 days)
- Direct integration with GitHub
- A KiCad plugin for simpler ordering
- Support in English/German

Website: [aisler.net](https://aisler.net/)" %}

{% include step-tuto.html
greyBackground = true
title = "Create an Aisler account"
content="1. Go to [aisler.net](https://aisler.net/)
2. Click **Sign up** at the top right
3. Register with your email or GitHub account
4. Confirm your email
5. Complete your profile (delivery address)

Registration is free; you only pay when you order." %}

{% include step-tuto.html
greyBackground = true
title = "Method 1: Uploading the Gerbers manually"
content="The classic way to order:

1. Log in to your Aisler account
2. Click **Upload Project** or **New Project**
3. Compress your Gerber files into a .zip: select all the .gbr and .drl files, right-click > Compress
4. Drag and drop the .zip file onto the Aisler upload area
5. Aisler analyses the files automatically
6. Check the automatically generated preview"
image="upload-gerber-aisler.png" %}

{% include step-tuto.html
greyBackground = true
title = "Set the manufacturing parameters"
content="After the upload, configure your order:

**Quantity**: Number of PCBs (often 3 minimum)
**Layers**: 2 layers (detected automatically)
**Thickness**: 1.6mm (standard)
**Color**: Choose the solder mask colour
**Surface finish**: HASL lead-free or ENIG
**Copper weight**: 1 oz (35µm)

Aisler detects most parameters automatically from your Gerbers."
image="configurer-aisler.png" %}

{% include step-tuto.html
greyBackground = true
title = "Check and confirm"
content="Before ordering:

1. **Check the preview**: Aisler shows a 3D view of your PCB
2. **Check the dimensions**: Make sure the size is correct
3. **Read the warnings**: Aisler reports potential problems (tracks too thin, borderline spacing and so on)
4. **Check the price**: The price is shown according to the quantity and the options
5. Click **Add to cart**, then proceed to payment" %}

{% include message.html
title="Manufacturing lead times"
message="Aisler generally offers 2 options:

**Standard**: 10-15 days (cheaper)
**Express**: 5-7 days (extra cost)

Lead times include manufacturing + shipping within Europe. Add 3-5 days for assembly if you order SMD assembly."
status="is-info"
icon="fas fa-shipping-fast" %}

---

## KiCad plugin for Aisler

{% include step-tuto.html
greyBackground = true
title = "Install the Aisler plugin"
content="Aisler offers a KiCad plugin for ordering directly from Pcbnew:

**Installation through the plugin manager:**

1. In KiCad, open Pcbnew
2. Go to **Tools > External Plugins > Open Plugin Manager**
3. Look for **Aisler** in the list
4. Click **Install**
5. Restart KiCad

The plugin then appears in the menu Tools > External Plugins > Aisler."
image="installer-plugin-aisler.png" %}

{% include step-tuto.html
greyBackground = true
title = "Use the Aisler plugin"
content="Once installed, to order directly:

1. Open your PCB in Pcbnew
2. Go to **Tools > External Plugins > Aisler Push**
3. The plugin generates the Gerbers automatically
4. Log in to your Aisler account (if you have not already)
5. The files are uploaded automatically
6. Your browser opens on the Aisler configuration page
7. Set the parameters and order

**A huge time saver!** No more exporting the Gerbers by hand."
image="utiliser-plugin-aisler.png" %}

{% include message.html
title="Advantage of the plugin"
message="The Aisler plugin automates the whole process: Gerber export + upload + checking in one click. It also guarantees that the right export settings are used for compatibility with Aisler."
status="is-success"
icon="fas fa-rocket" %}

---

## Other popular PCB manufacturers

{% include step-tuto.html
greyBackground = true
title = "JLCPCB (China)"
content="**JLCPCB**: [jlcpcb.com](https://jlcpcb.com/)

**Advantages:**

- Very competitive prices (5 PCBs for $2)
- Built-in SMD assembly service
- Components in stock for assembly
- Decent quality

**Drawbacks:**

- Long delivery times (15-30 days)
- Possible customs duties
- Support in English

A good choice for cheap prototypes if lead time is not critical." %}

{% include step-tuto.html
greyBackground = true
title = "PCBWay (China)"
content="**PCBWay**: [pcbway.com](https://www.pcbway.com/)

**Advantages:**

- Competitive prices
- SMD assembly available
- Wide range of finishes and options
- Good quality

**Drawbacks:**

- Similar to JLCPCB: long lead times, customs

An interesting alternative to JLCPCB with similar options." %}

{% include step-tuto.html
greyBackground = true
title = "Eurocircuits (Europe)"
content="**Eurocircuits**: [eurocircuits.com](https://www.eurocircuits.com/)

**Advantages:**

- European manufacturing (Belgium)
- Excellent professional quality
- Fast delivery in Europe
- Powerful online viewer
- Industrial certifications

**Drawbacks:**

- Higher prices
- Minimum order sometimes higher

For professional projects needing certified quality." %}

{% include step-tuto.html
greyBackground = true
title = "OSH Park (USA)"
content="**OSH Park**: [oshpark.com](https://oshpark.com/)

**Advantages:**

- Distinctive purple PCBs (ENIG)
- Excellent quality
- Supports open source
- Direct upload from GitHub

**Drawbacks:**

- Priced per square inch (can be expensive for large boards)
- Delivery to Europe is costly and slow

Popular in the American maker community." %}

---

## Additional manufacturing files

{% include step-tuto.html
greyBackground = true
title = "BOM (Bill of Materials)"
content="The BOM lists all the components of your PCB:

- Reference (R1, C1, U1...)
- Value (220R, 100nF, ATmega328...)
- Footprint (0805, SOIC-8...)
- Quantity
- Manufacturer / distributor part number

**Generating the BOM from KiCad:**

In Eeschema: **Tools > Generate Bill of Materials**
Export as CSV or use a custom script." %}

{% include step-tuto.html
greyBackground = true
title = "Solder paste file (stencil)"
content="To solder SMD components, a stencil applies the solder paste:

The F.Paste and B.Paste files in your Gerbers define the openings of the stencil.

You can order a metal or plastic stencil with your PCB from most manufacturers.

**Common thicknesses:**

- 0.1mm (100µm): Fine components (0402, fine-pitch QFN)
- 0.12-0.15mm: Standard for 0603, 0805, SOIC
- 0.2mm: Larger components" %}

{% include message.html
title="Complete manufacturing package"
message="For a professional order, prepare a complete package:

• Gerber (.gbr) + drill (.drl) files
• BOM (list of components)
• PDF schematic
• Manufacturing notes (if there are special requirements)
• Pick-and-Place (if assembly is ordered)

Compress everything into a .zip with a clear name: `ProjectName_v1.0_2026-02-09.zip`"
status="is-success"
icon="fas fa-archive" %}

---

## Resources and going further

### Manufacturer capabilities

Read the capabilities (manufacturing limits) of your manufacturer:

- **Aisler**: [Capabilities](https://aisler.net/help/capabilities)
- **JLCPCB**: [Capabilities](https://jlcpcb.com/capabilities/Capabilities)
- **PCBWay**: [Capabilities](https://www.pcbway.com/capabilities.html)

### Guides and standards

- [IPC Standards](https://www.ipc.org/): PCB industry standards
- [KiCad documentation: Gerber](https://docs.kicad.org/master/en/pcbnew/pcbnew.html#generate-fabrication-files)

{% include message.html
title="Keep learning"
message="PCB manufacturing gets easier with experience. Start simple, look at the results, and adjust for the next versions. Do not be afraid of making mistakes: that is how you learn!"
status="is-success"
icon="fas fa-graduation-cap" %}

---

## Going further

### SMD assembly (SMT assembly)

Once you receive your PCBs, you can:

- **Solder by hand**: Soldering iron + flux for SMD (0805 components and larger)
- **Hot air rework station**: Hot air gun for fine-pitch SMD
- **Reflow oven**: Solder paste + stencil + reflow oven (precise, for fine components)
- **Assembly service**: JLCPCB and PCBWay offer automated assembly at an affordable price

### Advanced PCBs

Explore advanced features:

- **Multi-layer PCBs**: 4, 6, 8 layers for complex circuits
- **Flex/rigid-flex PCBs**: Flexible circuits for portable electronics
- **Impedance control**: For high-frequency signals (RF, USB 3.0, HDMI)
- **HDI (High Density Interconnect)**: Microvias, blind/buried vias
- **Embedded components**: Components buried in the PCB

### Certifications and standards

For commercial products, consider:

- **RoHS**: Free of hazardous substances (lead and so on)
- **UL**: Safety certification (flame retardancy and so on)
- **IPC Class 2/3**: Manufacturing quality (Class 3 = aerospace, medical)
- **CE marking**: European conformity

{%
  include card_collections.html
  title="KiCad tutorials"
  description="Explore other tutorials to master KiCad"
  type="tutorial"
%}
