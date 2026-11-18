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

title: Customising your project template
subtitle: What to edit, what to delete, and in what order
description: Spot the example items in the template, replace them with your project's content and delete the instructions before the submission.
author: Adrien Bracq

time: 2
difficulty: 1
todo: 60

prerequisites:
  - label: Have created and cloned your repo from the template
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: VSCode (or GitHub's web editor)
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

## A template is a complete example, not an empty skeleton

The repo you have just created contains an **example** project (the Otto
robot, a waste sorting robot) documented page by page: each page
shows what good documentation looks like. Your job is to
replace this example with your project, without breaking the structure.

The template is written in French. It helps you forget nothing with two markers:

| Marker | Colour on the site | What it means | What to do |
|---|---|---|---|
| **À modifier** (to be edited) | Yellow | Example content | Replace it with your own, then delete the block |
| **À supprimer** (to be deleted) | Red | Template instruction | Read it, apply it, then delete the block before the final submission |

In the files, a marker is a quote block preceded by a line
`{: .a_modifier }` or `{: .a_supprimer }`:

```markdown
{: .a_modifier }
> Remplacez ce texte par la présentation de votre projet.
```

In the `README.md` files (root and `project/` folder), the same idea
is written with a GitHub alert: `> [!IMPORTANT]` followed by **À modifier**.

{% include message.html title="The repo tells you what remains to be done" message="At every push, GitHub Actions counts the \"À modifier\" and \"À supprimer\" blocks that remain: **Actions** tab of your repo, last run of the **CI** workflow, summary \"Blocs du template restants\" (template blocks remaining). Each block is also flagged by a warning on its file. This does not block the publication of the site: your goal before the final submission is simply to get to 0." status="is-info" icon="fas fa-info-circle" %}

## 1. Configuring the site (`docs/_config.yml`)

This is the **very first thing to edit**, before any page.
Three lines are marked `À MODIFIER`:

```yaml
title: Robot de tri de déchets
description: Robot qui trie les déchets pour le Forum des Sciences d'Amiens
gh_edit_repository: "https://github.com/votre-compte/robot-tri-dechets"
```

- `title`: the name of your project, displayed at the top of the site menu.
- `description`: a sentence that sums up the project.
- `gh_edit_repository`: the address **of your repo** (with no `/` at the end).

{% include message.html title="Do not forget gh_edit_repository" message="This address feeds the \"Notre repo GitHub\" (our GitHub repo) button on the home page, the links to your file folders, and the \"Modifier cette page sur GitHub\" (edit this page on GitHub) link at the bottom of each page. If you forget it, they all point to the template repo, on which you have no write access." status="is-warning" icon="fas fa-exclamation-triangle" %}

Everything below the line "NE RIEN MODIFIER CI-DESSOUS" (do not change anything below: theme,
search, diagrams, callouts) makes the site work: leave it as it
is.

## 2. Replacing the README

The `README.md` at the root is the shop window of your repo on GitHub. The
template provides a very short one: replace the name, the one-sentence
presentation and the list of the team, put the right link to your published
site, then delete the **À modifier** block at the top. The full method
is in [Writing an effective project README](/workshops/methodologie-de-projet/tutorials/readme-efficace/).

The address of your published site is of the form
`https://your-account.github.io/repo-name/`: it is the one shown in
**Settings > Pages** (see
[Publishing your site with GitHub Pages](/workshops/methodologie-de-projet/tutorials/publier-son-site/)).

## 3. Customising the home page (`docs/index.md`)

The home page contains five items to replace:

| Item | Where | What to do |
|---|---|---|
| Title and presentation | Start of the file | Rewrite: purpose of the project, audience, problem solved |
| "Notre projet sur Onshape" button | Below the presentation | Put the sharing link of your Onshape document |
| 3D model | "Le projet en 3D" section | Export your assembly as `.glb`, put it in `docs/assets/models/`, change the name in the page, delete `Otto.glb` |
| Poster | "Poster" section | Replace `docs/assets/images/poster.jpg` with your poster |
| Video | "Vidéo" section | Replace `docs/assets/images/intro_amiens.mp4` with your video |

The weight limits to respect (25 MB for the 3D model and the video, 2 MB
for an image) and the procedure for the poster and the video are in
[Creating the poster and the presentation video](/workshops/methodologie-de-projet/tutorials/poster-video-presentation/).
You can leave these three example items in place until the end of the
project: they cost nothing, but do not forget them.

## 4. Filling in the documentation pages

Each page of the `docs/` folder corresponds to a stage of the project, in
the order of the menu. Each one contains instructions ("À supprimer"), an example
("À modifier") and a link to the tutorial that explains how to fill it in.

| Page | What it contains | Related tutorial or concept |
|---|---|---|
| `objectifs.md` | Context, problem and audience, specification (table of functions) | [Defining your need and your specification](/workshops/methodologie-de-projet/concepts/definir-son-besoin/) |
| `equipe.md` | Members, roles (one lead and one backup), how the team works, task tracking | [Building and organising your team](/workshops/methodologie-de-projet/concepts/constituer-organiser-equipe/) |
| `etudes.md` | Research into existing solutions, feasibility pre-study, technical choices | [Researching existing solutions](/workshops/methodologie-de-projet/concepts/rechercher-existant-faisabilite/), [Recording your technical choices](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/) |
| `conception/` | Overall architecture, then one page per subsystem (mechanics, electronics, firmware, software) | [Mechanics](/workshops/methodologie-de-projet/tutorials/documenter-systeme-mecanique/), [Electronics](/workshops/methodologie-de-projet/tutorials/documenter-carte-electronique/), [Code](/workshops/methodologie-de-projet/tutorials/documenter-code-firmware/) |
| `fabrication/` | Guide to remaking the project, one step per page | [Documenting assembly and build](/workshops/methodologie-de-projet/tutorials/documenter-assemblage-montage/) |
| `tests.md` | Test protocols and measured results | [Documenting tests and results](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/) |
| `journal/` | One logbook per student, one page per session | [Keeping a logbook](/workshops/methodologie-de-projet/tutorials/journal-de-bord/) |

This breakdown is a **starting point**: you can add, rename,
split or delete pages to suit your project (no software part?
delete `software.md`).

## 5. Adding, renaming or deleting a page

The site menu is built from the header (the *front matter*, between
the two `---` lines) of each page:

| Field | Role |
|---|---|
| `title` | Name of the page in the menu and title displayed |
| `nav_order` | Position in the menu (1, 2, 3...) |
| `parent` | **Exactly** the `title` of the parent page |
| `grand_parent` | The `title` of the parent page's parent page (three-level pages) |
| `has_children: true` | To put on a page that has sub-pages |

To add a subsystem (a gripper, for example): copy the example
page `docs/conception/mecanique/boitier.md` into the same folder, name
the copy `pince.md`, then change its `title` and its `nav_order`. Its
`parent` and its `grand_parent` stay the same.

{% include message.html title="A page that does not appear in the menu" message="Almost always, the `parent` does not exactly match the `title` of the parent page (a capital letter, an accent or a space of difference), or the `nav_order` is the same as another page's. Compare with an example page that works." status="is-warning" icon="fas fa-exclamation-triangle" %}

## 6. Completing the `project/` folder

The `project/` folder contains the **sources** of your project, what
someone must be able to retrieve to remake or modify your work.
Each sub-folder has a `README.md` with an **À modifier** block.

| Folder | What to fill in |
|---|---|
| `project/README.md` | The list of folders you keep (delete the others) |
| `project/mcad/` | Onshape link, date of the last export, `projet.step` export of the assembly |
| `project/mcad/3d-print/` | One `.3mf` file per part and the table of print settings |
| `project/mcad/laser-cutting/` | One `.svg` or `.dxf` file per part and the table of material and thickness |
| `project/ecad/` | One folder per KiCad project (`.kicad_pro`, `.kicad_sch`, `.kicad_pcb`) |
| `project/firmware/` | One folder per PlatformIO project, with the target board and the libraries |
| `project/software/` | Language, dependencies, installation procedure |

What is displayed **on the site** (images, `.glb` model, copy of the KiCad
files) goes in `docs/assets/`, not in `project/`. See
[Documenting a mechanical system](/workshops/methodologie-de-projet/tutorials/documenter-systeme-mecanique/)
and [Documenting a circuit board](/workshops/methodologie-de-projet/tutorials/documenter-carte-electronique/).

## 7. Deleting the example files

When your own files are in place, delete those of the template:

- `docs/assets/models/Otto.glb`
- `docs/assets/kicad/Otto-ESP32-XIAO-REFEREE.kicad_sch` and `.kicad_pcb`
- `docs/assets/images/poster.jpg` and `intro_amiens.mp4` (if replaced by files with different names)
- `docs/assets/data/decharge-batterie.csv`
- `docs/journal/etudiant-1/2026-09-23.md` (example session)

Delete them **only after** changing the pages that use them: a
page that looks for a missing file displays an empty area or an error.

## The ready-to-use components

The template provides four components that you can use in
any page. The path of a file is given **from the
`docs/` folder**, whatever the page.

{% raw %}

| To display | What you write |
|---|---|
| A 3D model | `{% include model3d.html src="assets/models/mon-modele.glb" alt="Description" %}` |
| A KiCad schematic or PCB | `{% include kicad.html src="assets/kicad/ma-carte.kicad_sch" %}` |
| A chart plotted from a CSV | `{% include graphique.html csv="assets/data/mesures.csv" titre="Title" y="Unit" %}` |
| A diagram | A `mermaid` code block (see the Conception page of the template) |
| A formula | `$$ ... $$` (see [Documenting tests and results](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/)) |

{% endraw %}

## The rules for the repo's files

- **File names**: no spaces or accents (`support-moteur.step`, not
  `Support Moteur.step`). They break the site's links.
- **Weight**: above **25 MB**, the CI workflow fails (compress the
  file or host it elsewhere). An image over **2 MB** triggers a
  warning: reduce its resolution.
- **Files ignored by Git**: the template does not track certain files
  (`.stl`, `.csv` or `.xml` bill of materials exports outside `docs/`, `.zip`
  archives, `.hex`...). If a file does not appear in GitHub Desktop, it is
  probably the `.gitignore`. For 3D printing, use the `.3mf` format
  rather than `.stl`.

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| The "Modifier cette page sur GitHub" link opens the template repo | `gh_edit_repository` not changed | Fix the line in `docs/_config.yml` (step 1) |
| The CI workflow reports remaining blocks | "À modifier" or "À supprimer" blocks are still in your files | Open the summary of the run: the list gives each file and each line |
| The CI workflow fails on "Poids des fichiers" (file weight) | A file exceeds 25 MB | Compress it (video in 720p for example) or host it elsewhere |
| The 3D model or the KiCad schematic displays empty | Wrong path, or file left in `project/` | The file must be in `docs/assets/`, and the path is given from `docs/` |
| A formula is displayed as plain text | A single `$` instead of `$$` | Always use two `$$` |

## Exercise

As a team, in this order: configure `docs/_config.yml`, replace the
README, then go through the CI summary on GitHub (**Actions** tab) to
note how many blocks remain. Then share out the pages among the
team members, according to your roles.
