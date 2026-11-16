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

title: Documenting assembly and build
subtitle: A guide that can be followed without having seen the prototype before
description: Write a step-by-step assembly guide so that someone else can reproduce your build, not just admire it in a photo.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Have a prototype assembled at least once
    link: ""
softwares:
  - label: No software required
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

## Different from the static building-block sheets

The previous tutorials (electronics, mechanics) document each
building block separately. An assembly guide documents **the order and the
way** to put them together: the information that is most often
missing, even though it is the most useful to anyone who wants to reproduce the project.

## How the template organises the guide

The **Fabrication et assemblage** (manufacturing and assembly) section of the site menu matches the
`docs/fabrication/` folder of your repo:

```text
docs/fabrication/
├── index.md      equipment, tools, machines, then list of steps
├── etape-1.md    one step per page
└── etape-2.md
```

**One step per page**, with photos taken **during** assembly: it is
the easiest format to follow for someone who has never seen the
prototype. The two steps of the template are examples to replace.

## The home page of the section

The `docs/fabrication/index.md` page lists the equipment, tools and
machines needed **before** the steps, and points to the manufacturing
files of the repo (3D printing, laser cutting). The template already puts
these links there: they point to the folders of `project/mcad/`.

{% capture snippet_materiel %}## Equipment needed

- Phillips screwdriver
- 4 M3x10 screws, 4 M3 nuts
- Crimping pliers (for the Dupont connectors)

## Estimated time

~45 minutes
{% endcapture %}
{% include code-snippet.html label="Copy the equipment template (Markdown)" content=snippet_materiel %}

## One page per step

To add a step: copy `etape-2.md` into the same folder, name the
copy `etape-3.md`, then change the `title` and the `nav_order` in its
header. The `parent: Fabrication et assemblage` field stays the same. See
[Customising your project template](/workshops/methodologie-de-projet/tutorials/personnaliser-template/)
for how the menu works.

{% capture snippet_step %}---
layout: default
title: "Step 3: wiring the board"
parent: Fabrication et assemblage
nav_order: 3
---

# Step 3: wiring the board

## Equipment

- Main board, Dupont wires, soldering iron

## Procedure

1. **Solder** the power connector onto the board, copper side.
2. **Plug** the sensor into connector J2, red wire at the top.
3. **Check** continuity with a multimeter before powering up.

![Wired board, top view](../assets/images/etape3-cablage.jpg)

## Checks

- No wire touches another contact.

## Common problems

| Problem | Solution |
|---|---|
| The LED does not light up | Check the orientation of the power connector |
{% endcapture %}
{% include code-snippet.html label="Copy the step page template (Markdown)" content=snippet_step %}

## What a good step contains

- **The precise action**: not "fit the motor", rather "screw the motor
  onto its mount with the 2 screws supplied, cable pointing down".
- **The order that matters**: say explicitly if one step absolutely
  has to come before another (e.g. "do not tighten before step 3").
- **A photo taken during the real assembly**, not a CAD render (see
  [Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/)).
- **The checks**: how to know that the step has succeeded before
  moving on to the next one.
- **The common problems**: what went wrong for you, and how
  you fixed it.

## Adding photos

Put each photo in `docs/assets/images/`, with a descriptive name with no
spaces or accents (`etape3-cablage.jpg`), then insert it in the page with
`![Description](../assets/images/etape3-cablage.jpg)`. The pages of
`docs/fabrication/` are one folder level below `docs/`: that is why the
path starts with a single `../`.

Each image must weigh **less than 2 MB**: above that, the CI workflow of your
repo shows a warning. Reduce the resolution of the photo (a
smartphone often produces images far too large for a screen).

{% include message.html title="Test your own guide" message="The best test: follow your own assembly guide, step by step, without improvising anything or relying on what you already know. Each hesitation during the test points to a step that needs clarifying." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Exercise

Replace the two example steps with the assembly guide for your
prototype, one step per page and per significant action, then have it
followed by a classmate who has never assembled the project. Note everything that
blocked them or made them hesitate.
