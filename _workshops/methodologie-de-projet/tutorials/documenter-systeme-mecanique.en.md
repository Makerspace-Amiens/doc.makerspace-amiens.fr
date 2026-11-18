---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Documenting a mechanical system
subtitle: Drawings that can really be reused, not just looked at
description: Document your mechanical part with clear views of the model, a bill of materials, and the choices of materials and tolerances.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: A finished CAD model (Onshape, FreeCAD, SolidWorks...)
    link: /docs/tutorials/software/freecad/freecad-installation/
softwares:
  - label: CAD software
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

{% include message.html title="The template already displays your 3D model" message="Your project template provides a ready-to-use component that displays a 3D model you can manipulate (rotate, zoom) directly in a page. This tutorial explains where to store your CAD files, how to export the model and display it, and a fallback method using images." status="is-info" icon="fas fa-info-circle" %}

## What needs documenting

Beyond the 3D model itself: the material chosen and why, the
important tolerances (a clearance that is too tight will not print, a clearance that is too
loose becomes unstable), and the parts that took several
iterations. See [Prototyping and iterating](/workshops/methodologie-de-projet/concepts/prototyper-iterer/).

## Where to store the files

The template separates the project **sources** (in `project/`) from what the
**site displays** (in `docs/assets/`):

| Location | Content | Role |
|---|---|---|
| `project/mcad/` | `projet.step` (STEP export of the complete assembly), Onshape link, date of the last export | The version usable by everyone, without an Onshape account |
| `project/mcad/3d-print/` | One `.3mf` file per part, and the table of print settings | Redoing the print |
| `project/mcad/laser-cutting/` | One `.svg` or `.dxf` file per part, and the table of material and thickness | Redoing the cut |
| `docs/assets/models/` | The `.glb` model (under **25 MB**) | What the site displays |

Two rules to know:

- For 3D printing, store **`.3mf`** files (they keep the
  slicer settings). `.stl` files are ignored by the template's `.gitignore`:
  they will not appear in GitHub Desktop.
- If you do not use Onshape (Fusion, SolidWorks, FreeCAD...), also store
  your native files in `project/mcad/` **in addition to** the STEP export:
  unlike with Onshape, they are not saved anywhere else.

## Exporting from Onshape

Onshape keeps the history of your work, but your repo must contain
a version usable without an Onshape account. In both cases, right-click
the assembly tab then **Export**:

- **STEP format**: save it in `project/mcad/` under the name `projet.step`.
- **GLB format**: save it in `docs/assets/models/`.

Re-export at each important version, and update the date of the last
export in `project/mcad/README.md`. With other software, export as
STEP, and as glTF/GLB if your software allows it (otherwise, use the fallback
method with images further down).

## Displaying the 3D model

{% capture step_mv_1 %}The `docs/conception/mecanique/` folder contains the example page `boitier.md`. Copy it into the same folder, name the copy after your subassembly (for example `pince.md`), then change its `title` and its `nav_order`. Its `parent` ("Mécanique") and its `grand_parent` ("Conception") stay the same. See [Customising your project template](/workshops/methodologie-de-projet/tutorials/personnaliser-template/) for how the menu works.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 1: Duplicate the example page"
  content=step_mv_1 %}

{% include step-tuto.html
  greyBackground=true
  title="Step 2: Copy the GLB model"
  content="Copy your `.glb` file into `docs/assets/models/`, with a name with no spaces or accents (`pince.glb`). Check that it is under **25 MB**: above that, the CI workflow of your repo reports an error." %}

{% capture step_mv_3 %}In your page, replace the example line. The path is given **from the `docs/` folder**:

```liquid
{% raw %}{% include model3d.html src="assets/models/pince.glb" alt="3D model of the gripper" %}{% endraw %}
```

The `hauteur="600px"` option enlarges the display area (400 px by default). The reader can rotate and zoom the model with the mouse.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 3: Display the model"
  content=step_mv_3 %}

{% include step-tuto.html
  greyBackground=true
  title="Step 4: Delete the example"
  content="Once your model is displayed, delete `Otto.glb` from `docs/assets/models/` (it is also used by the home page: change the file name there before deleting it) and the **À modifier** (to be edited) block from your page." %}

## The manufacturing files

Each part to be made has **one row** in the table of the `README.md` of
its folder, so that someone else can remake it identically.

{% capture snippet_impression %}| Part | File | Material | Nozzle | Layer | Infill | Supports | Quantity |
|---|---|---|---|---|---|---|---|
| Motor mount | `support-moteur.3mf` | PLA | 0.4 mm | 0.2 mm | 20% | No | 2 |{% endcapture %}
{% include code-snippet.html label="Copy the 3D printing table (Markdown)" content=snippet_impression %}

{% capture snippet_laser %}| Part | File | Material | Thickness | Quantity |
|---|---|---|---|---|
| Enclosure | `boitier.svg` | Poplar plywood | 3 mm | 1 |{% endcapture %}
{% include code-snippet.html label="Copy the laser cutting table (Markdown)" content=snippet_laser %}

On the documentation page of your subassembly, the
**Fabrication** (manufacturing) heading points to these two folders (the template already does so
in `boitier.md`).

## The bill of materials

On the subassembly page, a summary bill of materials gathers **all**
the parts, whatever the process (printed, cut, bought):

{% capture snippet_nomenclature %}| Part | Material | Quantity | Process | Note |
|---|---|---|---|---|
| Sensor mount | PLA | 1 | 3D printing | +0.2 mm tolerance on the housing |
| Rotation shaft | Stainless steel | 1 | Bought off the shelf | 6 mm diameter |
| Chassis | 5 mm plywood | 1 | Laser cutting | ... |{% endcapture %}
{% include code-snippet.html label="Copy the bill of materials template (Markdown)" content=snippet_nomenclature %}

## Fallback method: exporting an image

For a fixed figure (an exploded view for a poster, for example), or if your
software does not export to GLB, export an image. It is the method that
always works, without installing anything more.

{% include step-tuto.html
  greyBackground=true
  title="Step 1: Frame the view"
  content="In your CAD software, position the 3D view as you want it to appear in the documentation (orientation, zoom). In FreeCAD, use the predefined views (isometric, front, top...) available in the **View** menu for a clean, reproducible framing." %}

{% include step-tuto.html
  greyBackground=true
  title="Step 2: Export as an image"
  content="**In FreeCAD**: menu **Tools > Save picture...**. Choose a file name, a format (PNG), and optionally a standard size in the drop-down list, then **Save**.

**In Onshape**: right-click the 3D view, **Save as image**, or use the software's built-in capture function.

**In SolidWorks**: **File > Save As**, choose an image format (PNG, JPEG)." %}

{% capture step_img_3 %}Copy the image into `docs/assets/images/` (under **2 MB**), then in your page (here a page two folder levels deep, such as `docs/conception/mecanique/pince.md`):

```markdown
![View of the chassis](../../assets/images/chassis.png)
```

The number of `../` depends on the depth of the page. Repeat the operation for each important part or view (exploded view, detail of an assembly).{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 3: Insert the image in your page"
  content=step_img_3 %}

## Photos of the real assembly

As with electronics, the CAD model shows the intention; a photo
shows what was really assembled, with the adjustments made
along the way. Put them in `docs/assets/images/`.

## Exercise

Export your assembly as STEP (in `project/mcad/`) and as GLB (in
`docs/assets/models/`), display the model on the page of your
subassembly, and fill in the manufacturing tables of `project/mcad/` and
the bill of materials of your page with your real parts (material, process,
important tolerances).
