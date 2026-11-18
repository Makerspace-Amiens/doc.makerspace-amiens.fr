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

title: Project closing checklist
subtitle: The last pass, not the first draft
description: A checklist to go through before the final submission, to make sure that everything done over the course of the workshop is in place.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 55

prerequisites:
  - label: Be close to the end of the project
    link: ""
softwares:
  - label: No software required
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

## What this checklist is not

This is not the time to start documenting: if you have followed
[Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/)
throughout the project, the job here is to **reread and check**, not to
write from nothing. Plan this pass in your schedule with some
margin. See [Managing time and milestones](/workshops/methodologie-de-projet/concepts/gerer-temps-jalons/).

## The checklist

### Scoping and method

- [ ] The specification (`docs/objectifs.md`) reflects the final project,
      not only the initial intention. See
      [Defining your need](/workshops/methodologie-de-projet/concepts/definir-son-besoin/).
- [ ] The important technical choices are recorded with their reasons
      (`docs/etudes.md`):
      [Recording your technical choices](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/).
- [ ] The sources used (existing projects, schematics, pieces of code,
      datasheets) are cited. See
      [Researching existing solutions](/workshops/methodologie-de-projet/concepts/rechercher-existant-faisabilite/).
- [ ] The Team page (`docs/equipe.md`) is up to date: members, roles,
      how the team works.
- [ ] The logbook (`docs/journal/`) covers the whole project, for
      **each** member, not just the first few weeks.

### Documentation of each building block

- [ ] Each subassembly is documented in all its dimensions
      (mechanics, electronics, code): a reader finds in one place, or
      through direct links, everything that concerns it.
- [ ] Circuit board(s): schematic and PCB displayed (up-to-date files in
      `docs/assets/kicad/`), bill of materials, photos of the real assembly, sources
      in `project/ecad/`.
- [ ] Pinout: all the pins are in `pins.h`, and the pinout
      table on the board's page says **exactly** the same thing as
      `pins.h` and the KiCad schematic. See
      [Documenting a circuit board](/workshops/methodologie-de-projet/tutorials/documenter-carte-electronique/).
- [ ] Mechanical system(s): 3D model displayed, bill of materials, materials;
      `projet.step` export and manufacturing files up to date in
      `project/mcad/`.
- [ ] Code/firmware: useful comments, architecture page
      (`docs/conception/firmware.md`) and README of `project/firmware/`, which
      lets someone build and upload without help.
- [ ] The logic of the code is described by at least one diagram (flowchart or
      state diagram), up to date with the final version of the code. See
      [Documenting your code and firmware](/workshops/methodologie-de-projet/tutorials/documenter-code-firmware/).
- [ ] The code excerpts in the documentation are copied from the real code, with
      the language given on each block. See
      [Documenting your code and firmware](/workshops/methodologie-de-projet/tutorials/documenter-code-firmware/).
- [ ] Assembly guide (`docs/fabrication/`) tested by someone outside
      the project.
- [ ] Test results (`docs/tests.md`) presented with real
      measurements, failures included, and an up-to-date summary table.
- [ ] For each numerical criterion, the calculated value (derivation with
      its assumptions and formulas) is compared with the measured value, and
      the gap is explained. See
      [Documenting tests and results](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/).

### Transferability

- [ ] The README answers: what it is, where to find more details, what
      limitations, who did the project. See
      [Making your project transferable](/workshops/methodologie-de-projet/concepts/rendre-projet-transmissible/).
- [ ] A licence has been chosen and is present (`LICENSE` at the root). See
      [Understanding the intellectual property of your project](/docs/how-to-guides/propriete-intellectuelle-projet/).
- [ ] The "total stranger test" has been done: an outsider
      understands the project in a few minutes, with the docs alone.
- [ ] The known limitations are stated honestly, not hidden.

### Presentation

- [ ] Poster ready (`docs/assets/images/poster.jpg`), readable in a few
      seconds.
- [ ] Presentation video ready, in the expected format (1 min 30, vertical,
      under 25 MB).

### Cleaning up the template

- [ ] The summary of the **CI** workflow (**Actions** tab) reports
      **0 template blocks remaining**: no "À modifier" (to be edited) or
      "À supprimer" (to be deleted) left. See
      [Customising your project template](/workshops/methodologie-de-projet/tutorials/personnaliser-template/).
- [ ] `docs/_config.yml` is filled in: `title`, `description` and
      `gh_edit_repository` (address of **your** repo).
- [ ] The example files of the template are deleted: `Otto.glb` model,
      `Otto-ESP32-XIAO-REFEREE` files, example logbook session,
      unused example pages.
- [ ] The `README.md` files of the `project/` folder are completed, and the folders
      that do not concern your project are deleted.
- [ ] The **CI** workflow is green (no file over 25 MB, no
      image over 2 MB) and the published site displays without errors.

{% include message.html title="Tick the boxes with the team, not alone" message="Do this review with several people. One person alone does not notice what seems obvious to them: that is precisely what an outside reader most often lacks." status="is-warning" icon="fas fa-exclamation-triangle" %}

## The template to copy

{% capture snippet_checklist %}## Closing checklist

### Scoping and method

- [ ] Specification up to date
- [ ] Technical choices recorded
- [ ] Sources cited
- [ ] Team page up to date
- [ ] Logbook complete, for each member

### Documentation of the building blocks

- [ ] Each subassembly documented (mechanics, electronics, code)
- [ ] Electronics
- [ ] Pinout: `pins.h`, table and KiCad schematic consistent
- [ ] Mechanics
- [ ] Code/firmware (architecture, README, build)
- [ ] Diagram of the code logic up to date
- [ ] Exact code excerpts, language given
- [ ] Assembly guide tested
- [ ] Test results, summary up to date
- [ ] Calculation compared with measurement for the numerical criteria

### Transferability

- [ ] README complete
- [ ] Licence chosen
- [ ] Total stranger test done
- [ ] Known limitations documented

### Presentation

- [ ] Poster ready
- [ ] Video ready

### Cleaning up the template

- [ ] 0 "À modifier" / "À supprimer" blocks remaining (CI summary)
- [ ] `docs/_config.yml` filled in
- [ ] Example files deleted
- [ ] READMEs of the `project/` folder completed
- [ ] CI green, site published without errors
{% endcapture %}
{% include code-snippet.html label="Copy the checklist (Markdown)" content=snippet_checklist %}

## Exercise

Copy this checklist into a file of your documentation, go through it
as a team, and for each unticked box, decide who takes care of it and
by what date.
