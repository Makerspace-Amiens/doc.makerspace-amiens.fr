---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Course syllabus
subtitle: Objectives, organisation and session outline
description: What the Project Methodology course teaches you, how it is organised and what happens in each session.
author: Adrien Bracq

todo: 70
---

## In brief

| | |
|---|---|
| **Audience** | Students working on a project, in tutorial groups |
| **Hours** | 7 h: a first session of 1 h 30, then about 5 h 30 that are mostly hands-on |
| **Format** | Short inputs, then activities on **your** project and in your team's repo |
| **Equipment** | A PC (your own or one from the room), your GitHub account, your team's repo |
| **Assessment** | On the final state of the repo, on the project management side: see [Course assessment](/workshops/methodologie-de-projet/evaluation/) |

## Objectives

By the end of the course, you will be able to:

- **Scope a project**: state the need and write a specification with measurable criteria
- **Organise a team**: share out the roles, track tasks with issues and milestones
- **Document as you go**: keep a logbook, and keep photos, videos and sources at the time they are produced
- **Record your choices**: write down the alternatives considered and the reason for each decision
- **Make a project transferable**: documentation that another team can pick up without you

The course is about **managing** the project. The technical side (mechanics, electronics, code) is assessed as part of the project itself.

## Organisation

The sessions take place in **tutorial groups**, which do not necessarily match the project teams. The activities are therefore designed for that:

- **individual** work is about your own project, in particular your logbook;
- discussions take place in **pairs from different projects**: an outside view is the best test of clarity for documentation;
- **team** work is done between sessions, with a precise assignment given at the end of each one.

{% include message.html title="Document the methodology sessions too" message="One logbook entry per session, **including** those of this course: what you did, why, and what remains to be done." status="is-info" icon="fas fa-info-circle" %}

## Session outline

### Session 1: starting the process (1 h 30)

| Part | Content |
|---|---|
| Without a PC (30 min) | What can go wrong in a project, the assessment, the stages of a project, defining your need |
| With a PC (1 h) | Correction on an example, documenting as you go, first logbook entry, peer review |
| For the next session | Need and roles in the repo, start of the research into existing solutions |

Material: [slides for session 1](/workshops/methodologie-de-projet/slides/introduction-methodologie/).

### Following sessions (about 5 h 30)

Each session follows the same pattern: a short input, work on your documentation, then a peer review.

| Topic | In the repo |
|---|---|
| Session 2: Git and GitHub check-in, complete specification, research into existing solutions ([slides](/workshops/methodologie-de-projet/slides/seance-2-cahier-des-charges-existant/)) | `objectifs.md`, `etudes.md` |
| Session 3: functional breakdown of the machine, starting from what it must do rather than from solutions ([slides](/workshops/methodologie-de-projet/slides/seance-3-sous-systemes-organisation/)) | `conception/index.md`, `objectifs.md`, `equipe.md` |
| Session 4: choosing the solutions for each subsystem, recording your choices, organising the work with a GitHub Project ([slides](/workshops/methodologie-de-projet/slides/seance-4-choisir-documenter/)) | `etudes.md`, `conception/`, issues, milestones and Project |
| Session 5: peer review with the assessment grid | Corrections, plan for the rest of the project |

{% include message.html title="Provisional outline" message="The breakdown of the following sessions may change depending on how the projects progress. The dates will be given to you in class." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Between sessions

- One logbook entry **at every session**, project and methodology alike
- The team assignment given at the end of the session
- An up-to-date repo: commit and push at the end of each work session
