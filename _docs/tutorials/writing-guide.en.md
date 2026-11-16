---
layout: documentation
lang: en
hide_hero: false
hero_image: "placeholder.png"
hero_darken: true
image: "placeholder.png"
component_toc: true
doc_header: true

title: Example tutorial
subtitle: Follow these steps to complete your task
description: This tutorial explains the basic steps to carry out a task.
author: Your Name

manufacturer:
  - name: Manufacturer
    link: "https://example.com/manufacturer"

working_area: 200x200x200mm
materials:
  - name: PLA
    link: "https://example.com/pla"
  - name: PETG
    link: "https://example.com/petg"
file_extensions:
  - name: STL
    link: "https://example.com/pla"
  - name: 3MF
    link: "https://example.com/petg"
  - name: OBJ
    link: "https://example.com/petg"
precision: 0.15mm
speed: 4
access_level: 0

time: 2
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: No prerequisites
    link: ""

softwares: 
  - label: No software required
    link: ""

hardwares: 
  - label: No machine required
    link: ""

responsible:
  - name: "Adrien Bracq"
    link: "mailto:makerspace@unilasalle.fr"
  - name: "Rémi Lacombe"
    link: "mailto:makerspace@unilasalle.fr"

capacity: 8
access_conditions: "Open access during MakerNight slots or on request."
safety_rules: "Level 1 training is mandatory to use the machines."
opening_hours: "Monday to Friday – 9 am to 6 pm"

typical_activities:
  - 3D printing
  - Prototype design
  - Training of I2 students
virtual_tour: "https://makerspace-amiens.fr/tour/printerlab"

todo: 100
---

## Introduction

Welcome to the feature demonstration page. This template offers several modular elements that you can easily include in your documentation pages. Here are a few examples of the features available.

## 1. Custom content section

You can also add custom content sections for detailed explanations, project examples or summaries of instructions.

---

## 2. Alert messages

```liquid
{% raw %}
{% include message.html title="Information" message="This is an information message. Use it to draw the user's attention to an important point." status="is-info" icon="fas fa-info-circle" %}
{% endraw %}
```

{% include message.html title="Information" message="This is an information message. Use it to draw the user's attention to an important point." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="Warning" message="This is a warning message. Use it to flag a risk or a precaution." status="is-warning"  icon="fas fa-exclamation-triangle" %}

{% include message.html title="Danger" message="This is a danger message. Use it to warn the user of a major risk." status="is-danger" icon="fas fa-exclamation-triangle" %}

---

## 3. Image rows

You can place images side by side, up to 4 images of your choice.

{% include image-row.html
image_1 = "placeholder.png"
image_2 = "placeholder.png"
%}

{% include image-row.html
image_1 = "placeholder.png"
image_2 = "placeholder.png"
image_3 = "placeholder.png"
image_4 = "placeholder.png"
%}

```liquid
{% raw %}{% include image-row.html 
image_1 = "placeholder.png" 
image_2 = "placeholder.png"
%}{% endraw %}
```

---

## 4. Header card parameters

You can configure several parameters to customise the card displayed at the top of each tutorial or documentation page. Here is an explanation of each available parameter:

- **layout**: Sets the type of page layout. Here, `documentation` indicates a documentation page.
- **hide_hero**: Boolean to show or hide the hero image (the large header image). `true` to hide, `false` to show.
- **hero_image**: Path of the image displayed in the header.
- **hero_darken**: Darkens the hero image to make the text easier to read. `true` to enable, `false` to disable.
- **image**: Image used for the preview card.
- **component_toc**: Displays the table of contents. `true` to enable it, `false` to disable it.
- **doc_header**: Enables the documentation header. `true` to show, `false` to hide.
- **type**: Type of content, such as `tutorial` or `documentation`.
- **title**: Title of the page.
- **subtitle**: Subtitle for a quick description.
- **description**: Short description of the page to clarify its content.
- **author**: Name of the author.

### Machine-specific parameters

- **manufacturer**: Information about the equipment manufacturer, with `name` for the name and `link` for the link to the manufacturer's website.
- **working_area**: Size of the machine's work area (e.g. `200x200x200mm`).
- **materials**: List of materials compatible with the machine, each material having a `name` and a `link`.
- **file_extensions**: File formats accepted by the machine (e.g. STL, OBJ).
- **precision**: Precision of the machine, given in millimetres (e.g. `0.15mm`).
- **speed**: Operating speed of the machine, expressed here in an arbitrary unit (`4`).
- **access_level**: Access level required to use this machine (e.g. `0` for open access).

### Tutorial parameters

- **time**: Estimated time to complete the tutorial.
- **difficulty**: Difficulty level (1 for easy, 5 for expert).
- **compatibilities-os**: Compatible operating systems (win, mac, lin).
- **prerequisites**: List of prerequisites, with `label` for the name and `link` for the link.
- **softwares**: Software required for the tutorial, also defined by `label` and `link`.
- **hardwares**: Machines required for the tutorial, also defined by `label` and `link`.
- **todo**: Gives the completion percentage (from 0 to 100) for a quick overview of progress.

These parameters are flexible and can be adapted to the specific needs of each page.

---

## 5. Tutorial steps

### Example step

{% include step-tuto.html
greyBackground = true
content="This step shows how to present a step in the tutorial. You can include a description here."
image="placeholder.png" %}

{% include step-tuto.html
greyBackground = true
title = "Title"
content="You can complete your step with a title and with several images (up to 4) if you wish."
image="placeholder.png"
image_2="placeholder.png"
image_3="placeholder.png"
%}

{% include step-tuto.html
greyBackground = true
content="You can also use a GIF rather than an image. But do not overload the page with heavy GIFs: it can hurt the readability of your documentation page."
image="placeholder.gif" %}

---

## 6. Embedding 3D models

{% include 3d-model.html model="astronaut.glb" poster="astronaut_poster.webp" fullscreen_modal=true%}

To embed 3D models in your documentation, we use the [**model-viewer**](https://modelviewer.dev) library. It displays interactive 3D files directly in the browser. There are two ways to embed them: using the [**model-viewer**](https://modelviewer.dev/editor/) API directly, or going through an include file.

### Method 1: Direct embedding with model-viewer

You can embed a 3D model using the `model-viewer` HTML component directly. To do so, go to the [model-viewer editor](https://modelviewer.dev/editor/), import your model and customise how it is displayed. You can then click **Download Scene** to get the files needed to include it on your page.

### Method 2: Using the include file

To make embedding simpler, you can also use the `3d-model.html` include file, which adds a model with or without a preview image (poster).

#### Example with a poster

Use this method to display a preview image before the model loads.

```liquid
{% raw %}{% include 3d-model.html model="astronaut.glb" poster="astronaut_poster.webp" fullscreen_modal=true %}{% endraw %}
```

- **model**: Path to the 3D file (for example, `astronaut.glb`).
- **poster** (optional): Path to a preview image (.webp format recommended for fast loading).

#### Example without a poster

If you do not want to display a preview image, simply leave the `poster` parameter empty.

```liquid
{% raw %}{% include 3d-model.html model="astronaut.glb" fullscreen_modal=true %}{% endraw %}
```

This method is useful to guarantee quick, simple embedding while keeping a consistent look for all embedded 3D models.

---

## 7. Embedding PCBs - schematics and boards with Kicanvas

We use [**Kicanvas**](https://kicanvas.org) to embed PCB schematics and board layouts in your documentation.
Kicanvas embeds KiCad project files (.kicad_sch for schematics and .kicad_pcb for boards) for interactive viewing directly on the page.

### Direct embedding with Kicanvas

Use the `<kicanvas-embed>` tag to embed your PCB and schematic files, specifying the path of the source file.
You can adjust the controls to your liking with the `controls` attribute.

#### Example: embedding a schematic

```html
<kicanvas-embed src="path/to/your-schematic.kicad_sch" controls="basic">
</kicanvas-embed>
```

- **src**: Path to the schematic file (.kicad_sch) or the board (.kicad_pcb).
- **controls**: Sets the level of interface controls (for example, `basic` for basic controls).

<kicanvas-embed src="kicanvas-example.kicad_sch" controls="basic"></kicanvas-embed>

#### Example: embedding a board

```html
<kicanvas-embed src="path/to/your-board.kicad_pcb" controls="advanced">
</kicanvas-embed>
```

- **src**: Path to the schematic file (.kicad_sch) or the board (.kicad_pcb).
- **controls**: Sets the level of interface controls (for example, `advanced` for advanced controls).

<kicanvas-embed src="kicanvas-example.kicad_pcb" controls="advanced"></kicanvas-embed>

### Control options for Kicanvas

- **basic**: Includes the basic viewing commands.
- **advanced**: Gives access to advanced controls for exploring the schematic or the board in detail.

This lets users explore your PCBs and schematics interactively, making the circuits easier to understand.

{% include message.html title="Documentation" message="For more information, see the documentation of the [**Kicanvas**](https://kicanvas.org) module." status="is-info" dismissable="false" icon="fas fa-info-circle" %}

### PCB in 3D

To view the board in 3D, you can still use the model-viewer module described above.

{% include 3d-model.html model="kicanvas-example.glb" poster="kicanvas-example.webp" %}

---

## 8. Collection cards

You can embed collection cards by naming the collection you want to show. Ideal for pointing your readers to similar or related tutorials.

{%
  include card_collections.html
  title="Going further"
  description="Explore other tutorials to deepen your knowledge"
  type="tutorial"
%}

---

## 9. Tabs

{% capture tab1 %}

### Introduction

Welcome to the introduction tab.
You can use any Markdown you like here.
{% endcapture %}

{% capture tab2 %}

### Technical details

- Step 1
- Step 2
{% endcapture %}

{% capture tab3 %}

### Gallery

![Image](https://picsum.photos/300)
{% endcapture %}

{% capture tab4 %}
{%
  include card_collections.html
  title="Going further"
  description="Explore other tutorials to deepen your knowledge"
  type="tutorial"
%}
{% endcapture %}

{% include content-tabs.html
  id="exemple-tabs"
  tab_title1="Intro"
  tab_title2="Details"
  tab_title3="Gallery"
  tab_title4="Cards"
  tab1=tab1
  tab2=tab2
  tab3=tab3
  tab4=tab4
%}

```liquid
{% raw %}

{% capture tab1 %}
### Introduction
Welcome to the introduction tab.
You can use any Markdown you like here.
{% endcapture %}

{% capture tab2 %}
### Technical details
- Step 1
- Step 2
{% endcapture %}

{% capture tab3 %}
### Gallery
![Image](https://picsum.photos/300)
{% endcapture %}

{% capture tab4 %}
{%
  include card_collections.html
  title="Going further"
  description="Explore other tutorials to deepen your knowledge"
  type="tutorial"
%}
{% endcapture %}

{% include content-tabs.html
  id="exemple-tabs"
  tab_title1="Intro"
  tab_title2="Details"
  tab_title3="Gallery"
  tab_title4="Cards"
  tab1=tab1
  tab2=tab2
  tab3=tab3
  tab4=tab4
%}

{% endraw %}
```

---

## 10. 3D Graph

The graph is generated from a YAML file stored in the `_data` folder:

```yaml

nodes:
  - id: "MakerSpace"
    url: ""
    group: "Lieu"
    color: "#4fa3ff"          # text colour
    point_color: "#4fa3ff"    # point colour
    point_size: 10            # point size
    text_size: 2              # text size (new)
    desc: "Espace de prototypage de UniLaSalle Amiens"

  - id: "Concepts"
    url: ""
    point_color: "#ffcc00"
    point_size: 12
    text_size: 2
    desc: "Technologie de fabrication additive"

links:
  - source: "MakerSpace"
    target: "Concepts"
  - source: "MakerSpace"
    target: "Tutoriels"

```

{% include graph3d-base.html
   id="graph-makerspace-2"
   data=site.data.graph_test
   transparent=true
%}

```liquid
{% raw %}

{% include graph3d-base.html 
   id="graph-makerspace-2"
   data=site.data.graph_test
   transparent=true
%}

{% endraw %}
```

The same graph, but as a banner with a title and a subtitle.

{% include graph3d-hero.html
   id="graph-makerspace"
   data=site.data.graph_test
   title="MakerSpace Network"
   subtitle="Discover the links between our projects and our machines"
%}

```liquid
{% raw %}

{% include graph3d-hero.html 
   id="graph-makerspace"
   data=site.data.graph_test
   title="MakerSpace Network"
   subtitle="Discover the links between our projects and our machines"
%}

{% endraw %}
```

---

You can also include the 3D graph as a Hero banner in a "default" page. Specify the following parameters:

```markdown
---
title: Fabrication Additive
subtitle: Ressources pour la fabrication additive au MakerSpace - UniLaSalle Amiens
layout: default

hide_content: true

graph3d-hero: true
graph3d-id: graph-makerspace
graph3d-data: graph_test
graph3d-title: MakerSpace Network
graph3d-subtitle: Découvrez les liens entre nos projets et nos machines
---
```

---

## 11. Radar chart

For a skills profile or a self-assessment: the `graphique.html` include with `type="radar"`. The axes are given by `x_valeurs`, each profile by `y_valeurs` / `serie` (up to three). All the options are detailed in the next section.

{% include graphique.html type="radar" x_valeurs="CAD,3D printing,Electronics,Programming,Documentation" y_valeurs="80,85,70,75,90" serie="Current" y_valeurs2="90,95,85,80,100" serie2="Target" titre="Maker profile" hauteur="420" %}

```liquid
{% raw %}{% include graphique.html type="radar" x_valeurs="CAD,3D printing,Electronics,Programming,Documentation" y_valeurs="80,85,70,75,90" serie="Current" y_valeurs2="90,95,85,80,100" serie2="Target" titre="Maker profile" hauteur="420" %}{% endraw %}
```

## 12. Chart from data

The `graphique.html` include draws a chart with [Chart.js](https://www.chartjs.org/). It uses the same parameters as the include of the same name in the student project template: an example can be copied from one to the other.

### From a CSV file

Put the CSV in the page's subfolder (like the images): one header row, the first column for the X axis, one column per curve. Separator `,` or `;` (French spreadsheet export, decimal comma accepted). Sample data:

{% include graphique.html csv="decharge-batterie.csv" titre="Battery discharge" y="Voltage (V)" %}

```liquid
{% raw %}{% include graphique.html csv="decharge-batterie.csv" titre="Battery discharge" y="Voltage (V)" %}{% endraw %}
```

### With the data written in the page

For a few points, without a file: `x_valeurs` for the X axis, then up to three curves (`y_valeurs` / `serie`, `y_valeurs2` / `serie2`, `y_valeurs3` / `serie3`).

{% include graphique.html type="bar" x_valeurs="Mon,Tue,Wed,Thu,Fri" y_valeurs="4,7,5,9,6" serie="3D prints" y_valeurs2="2,3,6,4,5" serie2="Laser cuts" titre="Machine usage (example)" y="Number of jobs" %}

```liquid
{% raw %}{% include graphique.html type="bar" x_valeurs="Mon,Tue,Wed,Thu,Fri" y_valeurs="4,7,5,9,6" serie="3D prints" y_valeurs2="2,3,6,4,5" serie2="Laser cuts" titre="Machine usage (example)" y="Number of jobs" %}{% endraw %}
```

Options: `type` (`line` by default, `bar`, `scatter`, `radar`), `titre` (title), `x` and `y` (axis titles), `hauteur` (height in pixels). The chart also works in slides (`layout: slides`), with a fixed height of 360 px by default.
