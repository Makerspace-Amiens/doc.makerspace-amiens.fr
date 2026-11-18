---
layout: documentation
lang: en
hide_hero: false
hero_image: "/docs/tutorial/kicad-eeschema-bases/hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 3

title: "KiCad Eeschema: the basics"
subtitle: Learn to create your first electronic schematics
description: This tutorial covers the basic features of Eeschema, the KiCad schematic editor.
author: Alban Petit

time: 3
difficulty: 2
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

Eeschema is the schematic editor built into KiCad. It lets you create circuit schematics, add components, connect them together, and check the consistency of your design before moving on to the PCB.

This tutorial guides you through the basics of Eeschema: creating a project, placing components, wiring, annotation and electrical checking.

{% include message.html
title="Prerequisites"
message="Make sure you have KiCad installed and are familiar with its main interface. If not, see our installation tutorial."
status="is-info"
icon="fas fa-info-circle" %}

---

## Creating a new project

{% include step-tuto.html
greyBackground = true
title = "Step 1: Start KiCad"
content="Open KiCad. You arrive at the Project Manager, the main interface of KiCad."
image="kicad-main.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Create a new project"
content="Click **File > New Project** or use the shortcut **Ctrl+N** (Cmd+N on macOS). Choose a location for your project and give it a meaningful name, for example 'mon-premier-schema'." %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Open the schematic editor"
content="Once the project is created, double-click the .kicad_sch file in the project manager, or click the **Schematic Editor** icon in the toolbar. Eeschema opens with a blank sheet."
image="ouvrir-eeschema.png" %}

{% include message.html
title="File organisation"
message="KiCad automatically creates several files for your project: .kicad_pro (project), .kicad_sch (schematic), and later .kicad_pcb (printed circuit board). Keep all these files in the same folder."
status="is-info"
icon="fas fa-folder" %}

---

## Discovering the Eeschema interface

{% include step-tuto.html
greyBackground = true
title = "The areas of the interface"
content="The Eeschema interface is divided into several areas:

- **1. Top toolbar**: Main tools (save, undo, zoom and so on)
- **2. Right vertical toolbar**: Drawing and placement tools
- **3. Central drawing area**: Your schematic
- **4. Tree on the left**: Navigation between sheets
- **5. Message bar at the bottom**: Information and coordinates"
image="interface-eeschema.png" %}

{% include step-tuto.html
greyBackground = true
title = "Essential keyboard shortcuts"
content="Memorise these shortcuts to work more efficiently:

- **A**: Add a component (Add symbol)
- **W**: Draw a wire
- **L**: Add a label
- **M**: Move an item
- **R**: Rotate an item
- **E**: Edit properties
- **Delete**: Delete an item
- **Esc**: Cancel the current action" %}

{% include message.html
title="Tip: zoom"
message="Use the mouse wheel to zoom in/out. Hold down the middle button (wheel) to pan the view. Double-click the wheel to fit the zoom to the page."
status="is-success"
icon="fas fa-mouse" %}

---

## Placing components

{% include step-tuto.html
greyBackground = true
title = "Step 1: Open the component chooser"
content="Press the **A** key or click the 'Add a symbol' icon in the right toolbar. A component selection window opens."
image="ajouter-composant.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Search for a component"
content="In the search field, type the name of the component you want. For example:

- `R` for a resistor
- `C` for a capacitor
- `LED` for an LED
- `GND` for ground

Use the filters to narrow your search if necessary."
image="recherche-composant.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Place the component"
content="Double-click the component chosen or press **Enter**. The component attaches to your cursor. Move it to the location you want and click to place it. You can:

- Press **R** to rotate it before clicking
- Press **X** or **Y** to flip it horizontally/vertically
- Press **Esc** to cancel"
image="placer-composant.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Place several components"
content="Let us create a simple LED circuit with a resistor:

1. Place an **LED** (search for 'LED')
2. Place a **resistor** (search for 'R')
3. Place a **+5V** symbol (search for '+5V' in Device)
4. Place two **GND** (ground) symbols

Arrange them logically on your schematic."
image="placer-composant.png" %}

{% include message.html
title="Component libraries"
message="Components are organised in themed libraries: Device (generic components), Connector (connectors), MCU (microcontrollers) and so on. Feel free to explore the various libraries. To import additional libraries (such as the Makerspace Amiens library), see our tutorial [KiCad: importing libraries](/docs/tutorials/software/kicad/kicad-import-librairies/)."
status="is-info"
icon="fas fa-book" %}

---

## Connecting the components

{% include step-tuto.html
greyBackground = true
title = "Step 1: Select the wire tool"
content="Press the **W** key (Wire) or click the 'Draw a wire' icon in the right toolbar. The cursor turns into a cross."
image="outil-fil.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Draw connections"
content="Click the end of a component pin to start the wire. The wire follows your cursor. Click again to create an anchor point or to finish on another pin. The wire turns green when it is correctly connected to a pin.

**Tips:**

- Double-click to end the wire without a connection
- Wires connect to pins automatically when you are over them
- Press **Esc** to cancel"
image="tracer-fils.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Create junctions"
content="When two wires cross and must be connected, place a **junction** (connection dot). KiCad usually does this automatically, but you can add one manually: click the junction icon or use the right-click menu > Add Junction."
image="jonctions.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Wire your LED circuit"
content="Connect the components of your circuit:

1. Connect **+5V** to one pin of the resistor
2. Connect the other pin of the resistor to the anode of the LED (+ pin)
3. Connect the cathode of the LED (- pin) to **GND**

Your first circuit is now wired!" %}

{% include message.html
title="Warning: power symbols"
message="Power symbols (+5V, GND, +3.3V and so on) are implicit connections: all symbols with the same name are connected together automatically, even with no visible wire."
status="is-warning"
icon="fas fa-bolt" %}

---

## Adding labels and values

{% include step-tuto.html
greyBackground = true
title = "Step 1: Edit component values"
content="Hover over a component and press **E** (Edit) or double-click it. A properties window opens. Change:

- **Value**: the value of the component (e.g. 220R for a 220Ω resistor)
- **Reference**: will be generated automatically during annotation
- **Footprint**: the physical footprint (we will see that later)

Confirm with OK."
image="editer-valeur.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Give your components values"
content="Edit your components to give them realistic values:

- Resistor: `220R` or `220`
- LED: `Red` or `LED_Red`

This information appears on the schematic and will be useful later."
image="valeurs-composants.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Add net labels"
content="Labels name connections without drawing wires. Press **L** (Label) or click the matching icon. Type a name (e.g. 'LED_ANODE') and place the label on a wire. All wires carrying the same label are connected together.

This is particularly useful for complex or multi-sheet schematics."
image="labels.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Add notes and text"
content="To document your schematic, you can add free text. Click the 'T' (Text) icon in the right toolbar, or go to **Place > Text**. Add comments, version notes or any relevant information." %}

{% include message.html
title="Good practice: documentation"
message="Always document your schematics: add a title, your name, the date, and notes explaining how the circuit works. Your future self will thank you in 6 months!"
status="is-success"
icon="fas fa-file-alt" %}

---

## Annotating the components

{% include step-tuto.html
greyBackground = true
title = "What is annotation?"
content="Annotation automatically assigns unique references to all your components. For example:

- Resistors become R1, R2, R3...
- Capacitors become C1, C2, C3...
- Integrated circuits become U1, U2, U3...

It is an essential step before creating the PCB." %}

{% include step-tuto.html
greyBackground = true
title = "Step 1: Open the annotation tool"
content="Go to **Tools > Annotate Schematic** or click the matching icon in the toolbar. An annotation window opens with several options."
image="annoter.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Configure and annotate"
content="In the annotation window:

- **Scope**: Select 'Entire schematic' to annotate everything
- **Order**: Preferably choose 'Sort symbols by X position' or 'Sort symbols by Y position'
- **Options**: Leave the default options to begin with

Click **Annotate**, then **OK** to confirm."
image="annoter.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Check the annotation"
content="After annotating, check that all your components have received a unique reference (R1, LED1 and so on). References appear above or next to the symbols. If you modify your schematic, run the annotation again to update it." %}

{% include message.html
title="Re-annotation"
message="If you add new components after annotating, run the annotation tool again. You can choose to number only the new components or to re-annotate everything from the start."
status="is-info"
icon="fas fa-redo" %}

---

## Electrical rules check (ERC)

{% include step-tuto.html
greyBackground = true
title = "What is the ERC?"
content="The ERC (Electrical Rules Check) is a tool that automatically checks your schematic for common errors:

- Unconnected pins
- Conflicts between outputs
- Unused labels
- Missing power symbols

It is a crucial step before moving on to the PCB." %}

{% include step-tuto.html
greyBackground = true
title = "Step 1: Start the ERC"
content="Go to **Inspect > Electrical Rules Checker** or click the ladybird/check icon in the toolbar. The ERC window opens."
image="lancer-erc.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Run the check"
content="Click the **Run ERC** button. The tool analyses your schematic and shows the errors and warnings found. Each problem is listed with:

- Its type (error or warning)
- A description of the problem
- Its location on the schematic"
image="executer-erc.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Fix the errors"
content="Double-click an error in the list to jump to the item concerned on the schematic. Fix the problems:

- Connect the unconnected pins
- Add 'No Connect' flags on pins left unused on purpose
- Check the power connections

Run the ERC again until you get 0 errors."
image="corriger-erreurs.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: No Connect flags"
content="For pins left unconnected on purpose, place a 'No Connect' flag to tell the ERC that it is intended. Click the 'X' icon in the right toolbar or press **Q**, then click the pin."
image="no-connect.png" %}

{% include message.html
title="Warnings vs errors"
message="Errors (red) must be fixed. Warnings (yellow) have to be assessed: some are legitimate, others can be ignored depending on your design. A clean schematic should have 0 errors and as few warnings as possible."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Completing the schematic information

{% include step-tuto.html
greyBackground = true
title = "Step 1: Title block"
content="In the bottom right corner of your schematic is the title block. Click it to edit it. Fill in:

- **Title**: The title of your project
- **Company**: Your name or organisation
- **Date**: Date of creation/modification
- **Revision**: Version of the schematic (v1.0, v1.1 and so on)
- **Comment**: Additional notes"
image="cartouche.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Save your work"
content="Save your schematic regularly with **Ctrl+S** (Cmd+S on macOS) or **File > Save**. KiCad automatically creates backup files to avoid data loss." %}

{% include message.html
title="Tip: versioning"
message="For important projects, use a version control system (Git) to track how your schematics evolve and to be able to go back if necessary."
status="is-success"
icon="fas fa-code-branch" %}

---

## Exporting your schematic

{% include step-tuto.html
greyBackground = true
title = "Export as PDF"
content="To share or archive your schematic, export it as a PDF:

1. Go to **File > Plot**
2. Select the **PDF** format
3. Choose the options (colour or black & white, one page or the whole schematic)
4. Click **Plot All Pages**

The PDF is created in your project folder."
image="export-pdf.png" %}

---

## Next steps

Congratulations! You now master the basics of Eeschema. You know how to create a schematic, place and connect components, annotate them and check your design.

### What to do next?

Once your schematic is finished and checked, the next steps are:

1. **Assign footprints**: Give each component its physical footprint for the PCB
2. **Create the PCB**: Move to Pcbnew to route your printed circuit board
3. **Generate the manufacturing files**: Create the Gerber files to have your board manufactured

{% include message.html
title="Keep learning"
message="See our advanced tutorials to learn how to create multi-sheet hierarchical schematics, create your own symbols and master the advanced features of Eeschema."
status="is-success"
icon="fas fa-graduation-cap" %}

---

## Tips and good practice

### Organising the schematic

- **Be logical**: Organise your schematic from left to right (input to output)
- **Space out the components**: Leave room for better readability
- **Align the components**: Use the grid to align items
- **Group by function**: Put functionally related components together

### Naming

- **Explicit labels**: Use clear names (e.g. 'LED_POWER' rather than 'NET1')
- **Complete values**: Give the unit (220R, 100nF, 10uH)
- **Important notes**: Add comments for critical choices

### Checking

- **Regular ERC**: Run the ERC after every significant change
- **Visual check**: Reread your schematic as if you were discovering it
- **Peer review**: Have someone else review your schematic if possible

### Saving

- **Save often**: Ctrl+S should become a reflex
- **Versioning**: Use Git or make dated manual copies
- **External backup**: Back up regularly to an external drive or the cloud

---

## Full keyboard shortcuts

Here is the full list of the most useful shortcuts in Eeschema:

### Placement and editing

- **A**: Add a symbol
- **P**: Add a power symbol
- **W**: Draw a wire
- **B**: Draw a bus
- **L**: Place a label
- **H**: Place a hierarchical label
- **G**: Place a global label
- **Q**: Place a No Connect flag
- **T**: Place text

### Manipulation

- **M**: Move an item
- **G**: Drag an item, keeping its wires attached
- **C**: Copy an item
- **R**: Rotate an item
- **X**: Flip horizontally
- **Y**: Flip vertically
- **E**: Edit properties
- **Delete**: Delete an item
- **Ctrl+D**: Duplicate an item

### Navigation and display

- **Wheel**: Zoom in/out
- **Ctrl+Wheel**: Vertical scroll
- **Shift+Wheel**: Horizontal scroll
- **Middle button held**: Pan the view
- **F1**: Zoom to fit everything
- **Home**: Recentre the cursor

### General

- **Ctrl+S**: Save
- **Ctrl+Z**: Undo
- **Ctrl+Y**: Redo
- **Esc**: Cancel the current action
- **Ctrl+F**: Find
- **F11**: Toggle full screen

---

## Further resources

To deepen your knowledge of Eeschema and KiCad:

- [Official Eeschema documentation](https://docs.kicad.org/master/en/eeschema/eeschema.html)
- [KiCad forum](https://forum.kicad.info/)
- [KiCad video tutorials](https://www.youtube.com/results?search_query=kicad+eeschema+tutorial)
- [KiCad Library](https://kicad.github.io/)

{% include message.html
title="Ready for the PCB?"
message="Once your schematic is finished, annotated and checked, you are ready to move to Pcbnew to create your printed circuit board. See our next tutorial, on Pcbnew, for what comes next!"
status="is-success"
icon="fas fa-arrow-right" %}

---

## Going further

{%
  include card_collections.html
  title="KiCad tutorials"
  description="Explore other tutorials to master KiCad"
  type="tutorial"
%}
