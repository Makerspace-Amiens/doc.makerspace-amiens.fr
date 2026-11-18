---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Documenting as you go
subtitle: The most important principle of this workshop
description: Why a project's documentation is built continuously, from day one, and not in the last few days before the submission.
author: Adrien Bracq

todo: 70
---

{% include message.html title="The most important point of this workshop" message="If you remember only one thing from the whole workshop, let it be this: documenting at the end almost never works. What works is documenting a little at every session, from day one." status="is-danger" icon="fas fa-star" %}

## It is not one person's job

Documenting is not a role you give to someone in the team,
the way you assign the mechanics or the electronics. See
[Building and organising your team](/workshops/methodologie-de-projet/concepts/constituer-organiser-equipe/).
**Each member documents their own part**, as they do the
work. A team where a single person "looks after the docs" almost
always produces incomplete documentation, written second-hand,
and late, since that person discovers the others' work at the
time of writing it up, not at the time it was done.

## The "we'll document at the end" trap

It is the promise every team makes to itself, and almost none
keeps. Here is why:

- At the end of the project, everyone is tired and under pressure from the
  deadline: it is never the right time to write properly.
- Memory fades fast: the exact reason for a technical choice made in
  week 2 is often forgotten by week 8.
- Visual evidence disappears: a photo of the broken prototype, an
  intermediate state of the code, an earlier version of the printed part:
  if you do not capture them at the time, they no longer exist afterwards.
- If someone in the team is absent or changes along the way, everything
  that was not written down leaves with them.

## Two teams, two results

{% capture tab1 %}

**Week 8, the day before the submission**: the team meets to "do the docs".
Nobody remembers exactly why the initial servo motor was
replaced by a stepper motor. The photos of the first prototype were
deleted from the phone of someone who has changed phones since.
The documentation produced in one evening is vague, generic, and says
almost nothing that the code or the CAD do not already show.

{% endcapture %}

{% capture tab2 %}

**Every week, 10 minutes at the end of the session**: the team notes what
was done, why, and what remains to be done. In week 8, all that is left
is to reread, correct and format what already exists. The
final documentation clearly explains why the stepper motor
replaced the servo (insufficient torque, measured), with the photos taken at
the time of the change.

{% endcapture %}

{% include content-tabs.html
  id="deux-equipes"
  tab_title1="❌ Docs at the end"
  tab_title2="✅ Docs as you go"
  tab1=tab1
  tab2=tab2
%}

## What to document, and when

- **After each work session**, 5 to 10 minutes: what was done,
  why, what remains to be done. That is the role of the logbook. See
  [Keeping a logbook](/workshops/methodologie-de-projet/tutorials/journal-de-bord/)
  to set it up in practice (in the repo created with
  [Creating your repo from the template](/workshops/methodologie-de-projet/tutorials/creer-repo-template/)).
- **At each technical decision**, straight away: what, why, what was
  ruled out and for what reason. An unwritten decision is a
  decision that will have to be reopened from scratch in a debate in week 6.
- **At each stage completed** (scoping finished, first prototype that
  works, choice of a component): update the matching page of the
  documentation site, not just a loose note.
- **With photos and screenshots taken at the time**, not reconstructed
  afterwards: a broken or failed intermediate state is as useful to
  show as a result that works.

{% include message.html title="An example of a logbook entry" message="12/03. Replaced the servo motor with a stepper motor + A4988 driver: the servo stalls above 200 g, measured with a force gauge. Driver ordered, delivery within 3 days. Still to do: rewrite the motor control code." status="is-success" icon="fas fa-check-circle" %}

## The final summary pass is not a first draft

That does not mean there is nothing to do at the end of the project. A pass
of proofreading and formatting is still needed:

- reread the whole and correct what is no longer up to date,
- fill the gaps that remain in spite of everything,
- reorganise so that an outside reader can find their way,
- make the documentation presentable (formatting, images, structure).

The essential difference: it is a job of **proofreading and editing**
material that already exists, not a complete write-up in a rush
from nothing.

## Exercise

As a team, now, not at the end of the week:

1. Open your project's documentation file and add an entry
   for what you did today or this week, even a brief one.
2. Decide, as a team, on a fixed, recurring time (e.g. "10 minutes at the
   end of each session") to get into this habit. Note it somewhere
   the whole team can see it.
