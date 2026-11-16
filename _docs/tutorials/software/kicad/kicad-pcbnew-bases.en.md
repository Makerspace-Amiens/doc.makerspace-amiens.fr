---
layout: documentation
lang: en
hide_hero: false
hero_image: "/docs/tutorial/kicad-pcbnew-bases/hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 4

title: "KiCad Pcbnew: the basics"
subtitle: Design your first printed circuit board
description: This tutorial covers the basic features of Pcbnew, the KiCad PCB editor.
author: Alban Petit

time: 4
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: KiCad installed on your computer
    link: "/docs/tutorials/software/kicad/installation-kicad/"
  - label: Schematic created with Eeschema
    link: "/docs/tutorials/software/kicad/kicad-eeschema-bases/"

softwares:
  - label: KiCad (version 8.0 or later)
    link: "https://www.kicad.org/"

hardwares:
  - label: Computer with a mouse
    link: ""

todo: 100
---

## Introduction

Pcbnew is the printed circuit board (PCB) editor built into KiCad. After creating your schematic in Eeschema, Pcbnew lets you design the physical board: place the components, route the connections, define the board outline and generate the manufacturing files.

This tutorial guides you through the basics of Pcbnew: from moving from the schematic to the PCB, to generating the Gerber files for manufacturing.

{% include message.html
title="Important prerequisite"
message="This tutorial assumes you have already created a schematic with Eeschema, with the components annotated and the footprints assigned. If not, see our Eeschema tutorial first."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Opening Pcbnew and importing the schematic

{% include step-tuto.html
greyBackground = true
title = "Step 1: Open Pcbnew from the project"
content="From the KiCad project manager, double-click the .kicad_pcb file or click the **PCB Editor** icon. Pcbnew opens with a blank PCB or your existing PCB."
image="ouvrir-pcbnew.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Update the PCB from the schematic"
content="To import or update the components from your schematic, go to **Tools > Update PCB from Schematic** or press **F8**. A window opens listing all the changes." %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Import the components"
content="In the update window:

- Check the list of components to add
- Tick 'Delete footprints with no symbols' if necessary
- Click **Update PCB**

All your components appear stacked, ready to be placed. The connections (ratsnest) are visible."
image="composants-importation.png" %}

{% include message.html
title="The ratsnest"
message="The thin white lines linking the components are called the 'ratsnest'. They represent the logical connections of your schematic and guide you when routing your tracks."
status="is-info"
icon="fas fa-project-diagram" %}

---

## Discovering the Pcbnew interface

{% include step-tuto.html
greyBackground = true
title = "The areas of the interface"
content="The Pcbnew interface is organised in several areas:

**1. Top toolbar**: Main tools (save, undo, zoom, layers)
**2. Right vertical toolbar**: Drawing and routing tools
**3. Central drawing area**: Your PCB
**4. Appearance panel on the right**: Visibility of layers and items
**5. Message bar at the bottom**: Coordinates and information"
image="interface-pcbnew.png" %}

{% include step-tuto.html
greyBackground = true
title = "The layers of the PCB"
content="A PCB is made of several stacked layers:

**F.Cu (Front Copper)**: Front copper layer (red)
**B.Cu (Back Copper)**: Back copper layer (green)
**F.SilkS (Front Silkscreen)**: Front silkscreen (markings)
**B.SilkS (Back Silkscreen)**: Back silkscreen
**Edge.Cuts**: Board cutting outline

For PCBs with 4 layers or more, there are inner layers (In1.Cu, In2.Cu and so on)" %}

{% include step-tuto.html
greyBackground = true
title = "Essential keyboard shortcuts"
content="Memorise these shortcuts to work more efficiently:

**M**: Move a component
**R**: Rotate a component
**F**: Flip a component (front/back side)
**X**: Start a track (route)
**V**: Place a via
**D**: Drag a track
**U**: Select the whole track
**Delete**: Delete an item
**Page Up/Down**: Change the active layer
**Esc**: Cancel the current action" %}

{% include message.html
title="Tip: navigation"
message="Use the wheel to zoom, and hold the middle button to pan the view. Press F11 to switch to full screen and gain working space."
status="is-success"
icon="fas fa-mouse" %}

---

## Assigning footprints

{% include step-tuto.html
greyBackground = true
title = "What is a footprint?"
content="A footprint is the physical representation of a component on the PCB: the solder pads, the outline, the silkscreen. Every symbol of your schematic must have a footprint assigned in order to be placed on the PCB."
image="empreinte-exemple.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 1: Open the footprint assignment tool"
content="From Eeschema, go to **Tools > Assign Footprints**. A window opens with three columns:

- Left: Footprint libraries
- Centre: Available footprints
- Right: Your list of components"
image="assigner-empreintes.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Assign footprints to the components"
content="For each component of your schematic:

1. Select it in the right-hand column
2. Look for the matching footprint (e.g. for an 0805 SMD resistor, search for 'R_0805')
3. Double-click the footprint or use the button to assign it
4. The footprint appears next to the component

**Common footprints:**

- SMD resistors/capacitors: R_0805, C_0603
- Through-hole resistors: R_Axial_DIN0207
- SMD LED: LED_0805
- Through-hole LED: LED_D3.0mm or LED_D5.0mm" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Use the filters"
content="Use the filters at the top of the window to find footprints quickly:

- **By keywords**: Type '0805', 'SOIC', 'QFN' and so on
- **By pin count**: Filter by number of pins
- **By library**: Select a specific library on the left

View the footprint before assigning it with the preview panel."
image="filtres-empreintes.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Confirm and save"
content="Once all the footprints are assigned:

1. Check that no component shows '**<none>**'
2. Click **OK** or **Apply, Save Schematic & Continue**
3. The footprints are now linked to your components

Go back to Pcbnew and update the PCB (F8) to see the new footprints." %}

{% include message.html
title="Footprint libraries"
message="KiCad includes thousands of standard footprints. For specific components, check the manufacturers' websites or use SnapEDA/Ultra Librarian to download ready-made footprints. To import additional footprint libraries, see our tutorial [KiCad: importing libraries](/docs/tutorials/software/kicad/kicad-import-librairies/)."
status="is-info"
icon="fas fa-download" %}

---

## Placing the components

{% include step-tuto.html
greyBackground = true
title = "Step 1: Separate the components"
content="After the import, all the components are stacked in the same place. Click and drag to separate them roughly. Do not worry about their final position yet; just spread them out so that you can see clearly."
image="separer-composants.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Plan the layout"
content="Before fine placement, think about the logical organisation:

- Group the components by function (power, microcontroller, connectors and so on)
- Identify the components that must be close together (e.g. decoupling capacitors near the µC)
- Think about the direction of signal flow (input → processing → output)
- Consider the mechanical constraints (mounting holes, connectors at the edge)" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Place the components one by one"
content="Place each component following these principles:

1. Select a component and press **M** to move it
2. Press **R** to rotate it (90° rotation)
3. Press **F** to flip it (from the front side to the back side)
4. Watch the ratsnest: the lines should be short and cross as little as possible
5. Align the components on the grid (right-click > Grid to change the spacing)

Place the critical components first (connectors, µC), then the passives around them." %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Optimise the placement"
content="Good placement makes routing easier. Check:

- **Minimal ratsnest**: The connections cross as little as possible
- **Enough spacing**: Leave room to route between components
- **Logical orientation**: Align the components with the signal direction
- **Accessibility**: Test points and components to be soldered are accessible

Do not hesitate to rearrange several times until you are satisfied."
image="placement-optimise.png" %}

{% include message.html
title="Decoupling capacitors"
message="Decoupling (bypass) capacitors must be placed AS CLOSE AS POSSIBLE to the power pins of integrated circuits, with short, direct tracks. This is critical for proper operation."
status="is-warning"
icon="fas fa-bolt" %}

---

## Defining the board outline

{% include step-tuto.html
greyBackground = true
title = "Step 1: Select the Edge.Cuts layer"
content="Before drawing the outline, select the **Edge.Cuts** layer in the layer selector at the top. This layer defines where the board will be cut during manufacturing."
image="selectionner-edge-cuts.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Draw a simple rectangle"
content="For a simple rectangular PCB:

1. Click the **Rectangle** icon in the right toolbar
2. Click to set the first corner
3. Stretch the rectangle to enclose all your components with some margin
4. Click to finish

Leave at least 3-5mm of margin around the components."
image="contour-rectangle.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Draw a custom outline"
content="For a more complex shape, use the **Line** tool:

1. Select the line tool on the Edge.Cuts layer
2. Draw the outline segment by segment
3. For curves, use the **Arc** tool
4. The outline must form a complete closed loop

You can add corner fillets with the appropriate tool." %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Add mounting holes"
content="To add mounting holes:

1. Go to **Place > Footprint** or press **O**
2. Search for 'MountingHole' in the library
3. Choose the appropriate diameter (e.g. MountingHole_3.2mm_M3)
4. Place the holes at the four corners or wherever you need them

Respect the minimum distances from the edges (generally 3mm minimum)."
image="trous-fixation.png" %}

{% include message.html
title="Standard dimensions"
message="Common PCB dimensions are: 100x100mm, 100x80mm, 50x50mm. Check your manufacturer's prices: some dimensions are cheaper than others."
status="is-info"
icon="fas fa-ruler" %}

---

## Setting the design rules

{% include step-tuto.html
greyBackground = true
title = "What are design rules?"
content="Design rules define the manufacturing constraints:

- Minimum track width
- Minimum spacing between tracks
- Via diameter
- Clearance (safety distance)

These values depend on the capabilities of your PCB manufacturer." %}

{% include step-tuto.html
greyBackground = true
title = "Step 1: Open the setup"
content="Go to **File > Board Setup**. Several tabs appear: Layers, Design Rules, Net Classes and so on."
image="ouvrir-config.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Set the constraints"
content="In the **Constraints** tab, set the minimum values:

**For a standard 2-layer PCB:**

- Minimum clearance: `0.2mm`
- Minimum track width: `0.2mm`
- Maximum track width: `2mm` (or more as needed)
- Minimum via diameter: `0.6mm`
- Via drill diameter: `0.3mm`

These values work with most standard manufacturers (PCBWay, JLCPCB and so on)." %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Net classes (optional)"
content="For specific tracks (power, high-speed signals), create net classes:

1. Go to the **Net Classes** tab
2. Create a class (e.g. 'Power' for the supply)
3. Set a larger track width (e.g. 0.5mm or 1mm)
4. Assign the matching nets (VCC, GND, +5V and so on)

Power tracks will automatically be wider."
image="classes-nets.png" %}

{% include message.html
title="Check with your manufacturer"
message="Before finalising your rules, read the technical specifications of your PCB manufacturer. Each manufacturer has its own capabilities and constraints. Respecting these specifications avoids manufacturing errors."
status="is-warning"
icon="fas fa-industry" %}

---

## Routing the tracks

{% include step-tuto.html
greyBackground = true
title = "Step 1: Start a track"
content="To route a connection:

1. Press **X** or click the 'Route tracks' icon
2. Click a starting pad
3. Follow the ratsnest (white line) to the destination
4. Click to create segments
5. Finish on the destination pad

The track appears in the colour of the active layer."
image="router-piste.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Change layer with vias"
content="To go from one layer to the other while routing:

1. While drawing a track, press **V**
2. A via (plated hole) is placed automatically
3. The active layer switches (F.Cu ↔ B.Cu)
4. Keep routing on the new layer

Use vias wisely to avoid crossing tracks."
image="via-changement-couche.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Routing modes"
content="Pcbnew offers several routing modes (switch with **/** or **\\**):

**Mode 1, 45°**: Tracks follow 45° angles (recommended)
**Mode 2, 90°**: Right angles (to be avoided for fast signals)
**Mode 3, free**: Any angle (for special cases)
**Push and shove**: Existing tracks are pushed aside automatically

In most cases, use the 45° mode with push and shove enabled." %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Route the signals"
content="Recommended routing order:

1. **Critical signals**: Clocks, high-speed signals, differential pairs
2. **Main power**: VCC, GND (or use ground planes)
3. **Normal signals**: GPIO, I2C, SPI, UART and so on
4. **Secondary signals**: LEDs, buttons, auxiliary connectors

Keep tracks short and direct. Avoid sharp 90° angles." %}

{% include step-tuto.html
greyBackground = true
title = "Step 5: Track width"
content="Adapt the width to the current:

- **0.2-0.3mm**: Low-current signals (<100mA)
- **0.5mm**: Medium signals (100-500mA)
- **1-2mm**: High-current supply (500mA-3A)
- **>2mm**: Very high current (>3A)

Change the width while routing: press **W**, then type the value.
Use online calculators to size tracks precisely for the current."%}

{% include message.html
title="Tip: moving tracks"
message="To move a track that is already routed, press **D** (Drag) instead of **M** (Move). This moves the track while keeping the connections, which is much more convenient."
status="is-success"
icon="fas fa-arrows-alt" %}

---

## Ground planes and copper zones

{% include step-tuto.html
greyBackground = true
title = "What is a ground plane?"
content="A ground plane (or copper pour) is a large area of copper connected to ground (GND). Advantages:

- Reduces electromagnetic interference (EMI)
- Makes routing easier (no need to route every GND)
- Improves heat dissipation
- Lowers ground impedance

It is good practice for almost every PCB." %}

{% include step-tuto.html
greyBackground = true
title = "Step 1: Create a copper zone"
content="To create a ground plane on the back side:

1. Select the **F.Cu** layer (front copper)
2. Click the **Add a filled zone** icon (or press **Ctrl+Shift+Z**)
3. A window opens: select the **GND** net
4. Click to draw the outline of the zone (generally the whole PCB)
5. Double-click to finish"
image="creer-zone-cuivre.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Configure the zone"
content="In the zone configuration window, set:

**Net**: GND (or the net you want)
**Clearance**: 0.2mm (safety distance)
**Pad connection**: Thermal reliefs
**Priority**: 0 (for the main ground plane)
**Fill type**: Solid

Thermal reliefs make soldering easier by limiting heat drain."
image="configurer-zone.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Fill the zone"
content="To see the copper fill:

1. Press **B** to fill all zones (Fill all zones)
2. The ground plane fills in, automatically avoiding the other tracks and pads
3. To unfill (in order to edit), press **Ctrl+B** (Unfill all zones)

The plane adapts automatically when you change the routing."
image="remplir-zone.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Add a ground plane on the other side"
content="For 2-layer PCBs, also add a ground plane on F.Cu:

1. Select the **F.Cu** layer
2. Repeat the previous steps
3. Fill with **B**

You now have a ground plane on both sides, which greatly improves electrical performance."
image="plan-double-face.png" %}

{% include message.html
title="Thermal reliefs"
message="Thermal reliefs are essential: they connect the pads to the ground plane through thin 'spokes'. Without them, soldering would be very difficult, because the whole plane would act as a heat sink."
status="is-info"
icon="fas fa-fire" %}

---

## DRC (Design Rule Check)

{% include step-tuto.html
greyBackground = true
title = "What is the DRC?"
content="The DRC (Design Rule Check) automatically checks that your PCB respects the design rules defined:

- Spacing between tracks
- Minimum track width
- Forbidden overlaps
- Missing connections (unrouted ratsnest)
- Vias too close to the edges

It is essential before sending the files for manufacturing." %}

{% include step-tuto.html
greyBackground = true
title = "Importing a DRC configuration from another project"
content="You can import preconfigured design rules from another project or from a PCB manufacturer:

1. Open the setup window: **File > Board Setup**
2. Click **Design Rules > Constraints**
3. In the **Constraints** tab, click **Import Settings from Another Board**
4. Select the `.kicad_pro` or `.kicad_dru` file of the source project
5. The rules are imported: confirm with **OK**

**Recommended DRC configuration**: Use your manufacturer's DRC configuration to guarantee compatibility. For example, **Aisler** provides ready-to-use DRC configuration files on its GitHub repository: [https://github.com/AislerHQ/aisler-support/tree/master/kicad](https://github.com/AislerHQ/aisler-support/tree/master/kicad)

Importing these rules ensures your PCB will respect the manufacturing capabilities (minimum spacing, track widths, via sizes and so on)." %}

{% include step-tuto.html
greyBackground = true
title = "Step 1: Start the DRC"
content="Go to **Inspect > Design Rules Checker** or click the ladybird icon. The DRC window opens with several tabs."
image="lancer-drc.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Run the check"
content="In the DRC window:

1. Click **Run DRC**
2. The tool analyses your PCB (this can take a few seconds)
3. The errors and warnings appear in the list
4. The counter shows the number of problems detected

Double-click an error to jump to the location concerned." %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Fix the errors"
content="Common types of errors and solutions:

**Clearance violation**: Two tracks too close → Move them apart or change the routing
**Track width**: Track too thin → Widen the track
**Unconnected items**: Unrouted ratsnest → Finish the routing, or delete it if it is a mistake
**Via too close to edge**: Via too close to the edge → Move the via

Fix all the errors one by one, then run the DRC again until you get 0 errors." %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Check the warnings"
content="Warnings do not block manufacturing but deserve attention:

- **Silkscreen over pad**: Silkscreen on a pad (it will be removed)
- **Courtyard overlap**: Components too close together (potential assembly problem)
- **Missing courtyard**: Footprint with no courtyard defined

Assess each warning: some are acceptable, others must be fixed."
image="avertissements-drc.png" %}

{% include message.html
title="Goal: 0 errors"
message="A PCB ready for manufacturing must have 0 DRC errors. Warnings can sometimes be accepted depending on the context, but ALL errors must be fixed."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Silkscreen and finishing touches

{% include step-tuto.html
greyBackground = true
title = "Add text to the silkscreen"
content="The silkscreen shows information on the finished PCB:

1. Select the **F.SilkS** layer (front silkscreen)
2. Click the **Add text** icon (or press **Ctrl+Shift+T**)
3. Type your text (project name, version, your name, date and so on)
4. Place it and adjust the size (generally 1-1.5mm high)

Add useful information: project name, version, date, your logo and so on."
image="ajouter-texte.png" %}

{% include step-tuto.html
greyBackground = true
title = "Tidy up the component references"
content="References (R1, C1, U1...) are placed automatically but are often badly positioned:

1. Move them so that they are readable and overlap nothing
2. Orient them the same way if possible
3. To hide a reference: select it, press **E** and untick 'Visible'
4. Check that no reference overlaps a pad

A clean silkscreen makes assembly and debugging much easier."
image="references-composants.png" %}

{% include step-tuto.html
greyBackground = true
title = "Check the PCB visually"
content="Before generating the manufacturing files, do a full visual check:

- All tracks are routed (no white ratsnest left)
- The ground planes are filled correctly
- The component references are readable
- The silkscreen does not overlap the pads
- The Edge.Cuts outline is closed and clean
- Mounting holes are present if needed

Take the time to check: it is easier now than after manufacturing!" %}

{% include message.html
title="Tip: 3D view"
message="Use the 3D view (Alt+3 or View > 3D Viewer) to see your PCB in three dimensions. It is excellent for spotting problems and getting a preview of the final result."
status="is-success"
icon="fas fa-cube" %}

---

## Next steps and resources

Congratulations! You now master the basics of Pcbnew. You know how to create a complete PCB, from the schematic to the manufacturing files.

### Going further

Once you are comfortable with the basics, explore these advanced features:

- **Automatic routing**: Using autorouters (Freerouting and others)
- **Multi-layer PCBs**: 4, 6, 8 layers or more
- **Differential pairs**: Routing high-speed signals (USB, HDMI and so on)
- **Impedance calculations**: Impedance matching for RF and high speed
- **Track length**: Length matching for synchronous signals (DDR and so on)
- **Flex or rigid-flex PCBs**: Flexible circuits
- **SMD assembly**: Generating Pick-and-Place files for automated assembly

{% include message.html
title="Assembling the PCB"
message="Once you receive your PCBs, they have to be assembled (the components soldered). Order your components from Mouser, Digikey, Farnell or RS Components. For SMD, manufacturers (JLCPCB, PCBWay) also offer inexpensive assembly services."
status="is-info"
icon="fas fa-microchip" %}

---

## Good PCB design practice

### Placement and routing

- **Logical signal flow**: Organise input → processing → output
- **Short sensitive signals**: Clocks and fast signals as short as possible
- **Decoupling close by**: Decoupling capacitors as close as possible to the ICs
- **Ground return**: Ensure a short return path for every signal
- **Avoid loops**: Current loops create interference

### Thermal and mechanical

- **Heat dissipation**: Wide copper areas for hot components
- **Mechanical stress**: Reinforce stressed areas (connectors and so on)
- **Mounting holes**: Always plan mounting points
- **Mechanical clearance**: Check the heights of components and enclosures

### Manufacturing and assembly

- **Edge margins**: 3-5mm minimum from the edges for components and tracks
- **Component orientation**: Same orientation if possible (makes assembly easier)
- **Test points**: Add test points for debugging
- **Logical numbering**: References in order (left to right, top to bottom)
- **Documentation**: Version notes, schematics, BOM on/with the PCB

---

## Further resources

To deepen your knowledge of Pcbnew and PCB design:

- [Official Pcbnew documentation](https://docs.kicad.org/master/en/pcbnew/pcbnew.html)
- [KiCad forum](https://forum.kicad.info/)
- [EEVblog: PCB tutorials](https://www.eevblog.com/)

{% include message.html
title="Keep practising!"
message="PCB design is an art that improves with practice. Start simple, learn from each project, and do not be afraid of making mistakes (that is how you learn!). Happy routing!"
status="is-success"
icon="fas fa-graduation-cap" %}
