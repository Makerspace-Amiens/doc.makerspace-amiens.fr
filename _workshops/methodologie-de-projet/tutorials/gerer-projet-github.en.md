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

title: Managing your project with GitHub - Issues and Projects
subtitle: Sharing out and tracking tasks without sticky notes or an Excel file
description: Use GitHub Issues and Projects to break the work down into tasks, assign them, and track progress as a team.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Have a project repo created
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: No software required (GitHub web interface)
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

{% include message.html title="Screenshots to come" message="The GitHub interface changes regularly: the button labels below match the current interface." status="is-info" icon="fas fa-camera" %}

## Why not just a list on paper

A sticky note or a shared list works for the first two weeks,
then gets lost. GitHub Issues and Projects live in the same place as
the code and the documentation, stay visible to the whole team, and
keep a history: who did what, and when.

## The vocabulary

- **Issue**: a card representing a task, a bug or a question to
  settle. It has a title, a description, and can be assigned to
  someone.
- **Assignee**: the person responsible for this Issue. An Issue with no
  assignee will probably not be done by anyone.
- **Label**: a coloured tag to sort Issues (`bug`,
  `mechanics`, `urgent`...).
- **Project**: a visual board (kanban) that displays your Issues as
  cards, spread across columns according to their progress.

## Creating an Issue

An Issue represents a task, a bug, or a question to settle.

{% include step-tuto.html
  greyBackground=true
  title="Create an Issue"
  content="On your GitHub repo, **Issues** tab, **New issue** button. Give a precise title (not \"Do the electronics\", rather \"Choose and order the motor driver\"), and a description: what, why, how we know it is finished. In the right-hand panel, add an **Assignee** (who takes care of it) and optionally a **Label** (`bug`, `mechanics`, `urgent`...)." %}

{% capture tab1 %}

**Title**: "Motor problem"

**Description**: (empty)

{% endcapture %}

{% capture tab2 %}

**Title**: "The stepper motor does not turn with the A4988 driver"

**Description**: The motor stays stuck, the driver heats up after 10
seconds. Wiring checked twice. Lead: wrong current setting
on the driver's potentiometer. Need an opinion before tomorrow morning.

{% endcapture %}

{% include content-tabs.html
  id="issue-vague-precise"
  tab_title1="❌ Vague Issue"
  tab_title2="✅ Actionable Issue"
  tab1=tab1
  tab2=tab2
%}

## Tracking progress with a Project

A GitHub Project is a kanban board (columns *To do* / *In progress* /
*Done*) that displays your Issues.

{% include step-tuto.html
  greyBackground=true
  title="Create a Project"
  content="On your repo, **Projects** tab, **New project** button, choose the **Board** template. Three columns appear by default: `Todo`, `In Progress`, `Done` (they can be renamed)." %}

{% include step-tuto.html
  greyBackground=true
  title="Link your Issues to the Project"
  content="In the Project, click `+ Add item`, then search for and select the Issues already created. They appear as cards that you drag from one column to another as work progresses." %}

{% include step-tuto.html
  greyBackground=true
  title="Link it to the Team page of your site"
  content="The `docs/equipe.md` page of your template contains an optional section \"Suivi des tâches\" (task tracking) with a **Tableau de suivi du projet** (project tracking board) button. It opens the **Projects** tab of your repo: for your board to appear there, in that tab, click **Link a project**, then choose your Project. If your team does not use a Project, delete this section from the page." %}

{% include message.html title="A Project reflects reality, not intention" message="A card has been sitting in \"In progress\" for 3 weeks? That is a signal to talk about it at the next sync meeting (see [Communicating as a team](/workshops/methodologie-de-projet/concepts/communiquer-en-equipe/)), not just a number to ignore." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Sharing out the tasks

Go back to the table of roles from
[Building and organising your team](/workshops/methodologie-de-projet/concepts/constituer-organiser-equipe/):
each major building block has a lead, who creates and assigns the Issues of their
block. An Issue with no assignee is a task nobody will do.

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| The Project is empty although Issues have been created | The Issues are not linked to the Project yet | Use `+ Add item` in the Project |
| Nobody knows who does what | Issues created without an Assignee | Get into the habit of assigning at creation, not afterwards |
| Too many open Issues, unreadable | Granularity too fine or tasks never closed | Close finished Issues, group micro-tasks together |

## Going further, advanced use

The above is enough for most teams. If your team
grows or several people often work on the same
files, the guide
[Using Pull Requests and resolving a Git conflict](/docs/how-to-guides/pull-requests-et-conflits-git/)
goes further: having your work reviewed before merging it into
`main`, and getting out cleanly when two changes
collide. Not a mandatory step: only if the need
arises.

## Exercise

As a team: create one Issue per remaining task on your project (precise,
as in the ✅ example above), assign them, and set up a
Project to track them.
