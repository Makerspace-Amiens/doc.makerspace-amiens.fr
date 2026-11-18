---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Making your project transferable
subtitle: A project is not finished when it works, but when someone else can pick it up
description: The concrete criteria that distinguish a project that works from a project that can really be handed over to the next team.
author: Adrien Bracq

todo: 70
---

## A working prototype is not enough

A project can work perfectly on demonstration day and
still be unusable by anyone who did not take part in it. This is
the most frequent case: the code can only be understood by its author,
the CAD files are scattered about with no clear names, and nobody knows
why certain choices were made. Making a project transferable is
a job in its own right, not an automatic consequence of the fact that it
works.

## The total stranger test

{% include message.html title="A good test" message="Give access to your repo to someone who has never touched the project, without talking to them. Can they understand in 10 minutes what the project does, and get it working again from your documentation? If the answer is no, it is not transferable yet." status="is-warning" icon="fas fa-exclamation-triangle" %}

## What makes a project transferable

- **A clear README at the root of the repo**: what the project does, how
  to run it, where to find the full documentation.
- **Up-to-date documentation**, produced as you go rather than in
  a rush. See
  [Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/).
- **The technical choices explained**, not only the final result.
  See [Recording your technical choices](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/).
- **The known limitations, stated honestly**: what does not work yet,
  what was tested but ruled out, what should be improved. The
  next team wastes precious time rediscovering on its own limitations
  that you already knew about.
- **A licence or a reuse notice**, even a simple one (e.g. "free
  to reuse, please credit this project"): without it, the question
  comes up every time a project reuses yours.

{% capture tab1 %}

**README**: "Sorting robot project for the Forum des Sciences."

**What is missing**: how to get it working, where the code is, what
the known limitations are. The next team starts again from scratch.

{% endcapture %}

{% capture tab2 %}

**README**: title, a one-sentence description, a "Quick start" section
(how to flash the code, how to power the robot), a link to the full
documentation site, a "Known limitations" section (sorting accuracy ~80%,
not tested in bright light), a link to the licence.

**What this allows**: the next team knows in 2 minutes whether this project
meets its need, and how to pick it up if so.

{% endcapture %}

{% include content-tabs.html
  id="readme-transmissible"
  tab_title1="❌ Minimal README"
  tab_title2="✅ Transferable README"
  tab1=tab1
  tab2=tab2
%}

## It is prepared before the end, not on the last day

As with continuous documentation, transferability is not a
document you write in one evening before the submission. It follows directly
from the good practices already seen in this workshop, applied throughout:
documenting as you go, recording your choices, keeping a logbook. The
only thing to do specifically at the end is a verification
checklist, not writing from scratch.

## Exercise

On your project, as a team:

1. Do the total stranger test: show your repo (README included)
   to someone outside the project and ask them what they understand in
   5 minutes, without help.
2. Add a "Known limitations" section to your documentation, even if
   the project is not finished: three honest lines are enough.
