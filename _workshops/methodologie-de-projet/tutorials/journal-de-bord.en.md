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

title: Keeping a logbook
subtitle: The practical tool for documenting as you go
description: Keep a personal logbook in the project template, one page per work session, to note what was done, what was decided, and what remains to be done.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Have a project repo created
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: A text editor (VSCode)
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

## What this tutorial is for

It is the practical application of
[Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/)
and of [Communicating as a team](/workshops/methodologie-de-projet/concepts/communiquer-en-equipe/):
one page per work session, which becomes the written memory of the project.

## How the template organises the logbook

Each team member keeps **their own** logbook: one page per session,
whether the session takes place during the scheduled slots or outside them. The
`docs/journal/` folder of the template is organised like this:

```text
docs/journal/
├── index.md              "Journal de bord" page (instructions)
├── _modele-seance.md     template to copy (invisible on the site)
├── etudiant-1/
│   ├── index.md          page of student 1
│   └── 2026-09-23.md     one session
└── etudiant-2/
    └── index.md          page of student 2
```

The site menu shows "Journal de bord" (logbook), then one sub-menu per student,
then one page per session in chronological order.

## Preparing your logbook (once only)

{% include step-tuto.html
  greyBackground=true
  title="Step 1: Rename your folder (optional)"
  content="In `docs/journal/`, you can rename the `etudiant-1` folder with your first name (for example `alice`), with no accents or spaces: it makes your files easier to find. If your team has more than two people, duplicate a student folder for each additional member." %}

{% capture step_journal_2 %}Open `docs/journal/alice/index.md` and replace "Étudiant 1" with your first name and surname **in the title**:

```yaml
---
layout: default
title: Alice Martin
parent: Journal de bord
has_children: true
---
```

Then delete the **À modifier** (to be edited) block that follows the header.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 2: Put your name on your page"
  content=step_journal_2 %}

{% include message.html title="The title is the link between your page and your sessions" message="The `parent` field of each of your sessions must be **exactly** the `title` of this page (here `Alice Martin`). If it differs by one letter, your sessions do not appear under your name in the menu." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Adding a session (at every session)

{% capture step_journal_3 %}Copy `docs/journal/_modele-seance.md` into **your** folder and rename the copy with today's date in `YYYY-MM-DD` format (for example `2026-09-23.md`). The file name starts with the date: that way the sessions are displayed in chronological order.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 1: Copy the template"
  content=step_journal_3 %}

{% capture step_journal_4 %}Edit the header of the copy:

```yaml
---
layout: default
title: "2026-09-23: laser cutting the enclosure"
parent: Alice Martin
grand_parent: Journal de bord
---
```

- `title`: the date, then the subject of the session.
- `parent`: the title of your student page, exactly.

Also delete the HTML comment (`<!-- ... -->`) at the top of the file: it is an instruction from the template.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 2: Fill in the header"
  content=step_journal_4 %}

{% include step-tuto.html
  greyBackground=true
  title="Step 3: Fill in the three headings"
  content="Give the type of session (scheduled or outside the slots), its duration, then the three headings: **Fait** (done), **Pourquoi** (why), **Reste à faire** (still to do). See the format below." %}

## The format of a session

Each page answers three questions, in a few lines: what was
done, why (the decisions taken), what remains to be done. Here is the
template's example page, translated:

{% capture snippet_journal %}# 2026-09-23: laser cutting the enclosure

**Session:** scheduled · **Duration:** 2 h

## Done

Cut the enclosure from 3 mm plywood. First dry-fit assembly.

## Why

The slots were too tight: added a compensation of 0.1 mm in the
cutting file (setting measured on an offcut).

## Still to do

- Recut the front panel with the compensation.
- Ask the electronics team for the final position of the USB connector.
{% endcapture %}
{% include code-snippet.html label="Copy the example session (Markdown)" content=snippet_journal %}

{% include message.html title="Short, but regular" message="5 to 10 minutes at the end of the session are enough. A short, systematic page is better than a detailed page written once a month. \"Why\" is the most valuable heading: it is the one a future team will look for." status="is-success" icon="fas fa-check-circle" %}

## When to write up a session

- At the end of each work session, even a short one, including **outside
  the scheduled slots**.
- At the end of each team sync meeting, with the decisions taken
  (see [Communicating as a team](/workshops/methodologie-de-projet/concepts/communiquer-en-equipe/)).
- As soon as an important technical choice is made (in addition, if the choice is
  significant, to the detailed format seen in
  [Recording your technical choices](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/)).

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| My sessions do not appear under my name in the menu | The `parent` of a session does not exactly match the `title` of your page | Copy the title of your student page into the `parent` of each session |
| The sessions are not in order | The title does not start with the date `YYYY-MM-DD` | Rename the title and the file with the date first |
| The `_modele-seance.md` template does not appear in the menu | That is normal: its name starts with "_", so it is invisible on the site | Copy it, do not edit it |
| The logbook stops after 2 weeks | Nobody explicitly looks after it | Decide on a systematic reminder at the end of meetings |
| Too long to reread at the end of the project | Sessions never summarised | See the final summary pass in [Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/) |

## Exercise

Prepare your student page (folder and title), delete the example
session `2026-09-23.md`, then create your first session with what
you did today, even if brief.
