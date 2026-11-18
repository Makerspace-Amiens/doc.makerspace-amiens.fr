---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.jpg
hero_darken: true
image: hero.jpg
component_toc: true
doc_header: true

title: Building and organising your team
subtitle: Deciding who does what before it becomes a problem
description: How to share out the roles according to the team's skills and wishes, and avoid the project resting on a single person.
author: Adrien Bracq

todo: 70
---

## Why it is decided early

Roles are almost always shared out by default: "so-and-so knows about
electronics, so they do the electronics", without ever discussing it openly.
It sometimes works, but it also leaves gaps: nobody looks after
the documentation, nobody really follows the schedule, or a single
person carries all the mechanics without that being a choice the
team has owned.

Talking about it explicitly from the first meeting (at the same time as the
specification) avoids these gaps.

## Sharing out by skills, but also by wishes

Both count. Someone skilled in electronics but with
no wish to deal with it this semester will do a poorer job than a
motivated person who is learning.

- **Real skills**: what each person can already do, not what you
  hope to learn along the way (this ties in with the "constraints" of the
  specification).
- **Wishes**: what each person wants to explore further on this project. A
  student project is also an opportunity to learn, not only to produce.

## The risk of the silo

{% include message.html title="Only one person who knows" message="If only one person fully understands a building block of the project (the code, the circuit, the CAD...), the project becomes fragile: an absence, an illness, or a simple disagreement can block everything. That is no reason to have several people do everything, but each building block must have a partner, even an informal one, able to take over." status="is-warning" icon="fas fa-exclamation-triangle" %}

It is also one more argument for [documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/):
up-to-date documentation lets someone else pick up a building block
even without having worked on it from the start.

## What must be decided from the start

A role ("lead") does not mean "the only one allowed to touch this";
it means "carries the final decision and makes sure it moves forward".

| Role | Lead | Backup | What it covers |
|---|---|---|---|
| Mechanics / CAD | ... | ... | Design, printing, assembly |
| Electronics | ... | ... | Schematic, wiring, PCB |
| Software / firmware | ... | ... | Embedded code, software tests |
| Documentation coordination | ... | ... | Overall consistency of the site, structure, final proofreading |
| Coordination / schedule | ... | ... | Tracking deadlines, running meetings |

{% capture snippet_roles %}| Role | Lead | Backup | What it covers |
|---|---|---|---|
| Mechanics / CAD | ... | ... | Design, printing, assembly |
| Electronics | ... | ... | Schematic, wiring, PCB |
| Software / firmware | ... | ... | Embedded code, software tests |
| Documentation coordination | ... | ... | Overall consistency of the site, structure, final proofreading |
| Coordination / schedule | ... | ... | Tracking deadlines, running meetings |{% endcapture %}
{% include code-snippet.html label="Copy the table (Markdown)" content=snippet_roles %}

{% include message.html title="Documentation is not a role" message="Unlike the other rows of the table, \"Documentation coordination\" does not mean that one person writes the docs in place of the others. Each member documents their own part as they go. See [Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/). The coordination role ensures overall consistency and chases up those who fall behind; it does not write in their place." status="is-warning" icon="fas fa-exclamation-triangle" %}

Also decide, in one sentence, **how to settle a technical
disagreement** (vote, decision by the lead of the building block concerned,
arbitration by the academic supervisor...). An unanticipated blocker often
costs more than a poor technical choice settled quickly.

This table belongs in the `docs/equipe.md` page of your repo, which
also contains the list of members (with their GitHub accounts), how the
team works and, optionally, task tracking.

Once the roles are decided, [Managing your project with GitHub](/workshops/methodologie-de-projet/tutorials/gerer-projet-github/)
shows how to turn this allocation into tracked tasks (Issues,
Projects), not just a static table.

## Exercise

As a team, now:

1. Fill in the table above in `docs/equipe.md` for your project:
   one lead and one backup per role, not just "we'll see".
2. Agree in one sentence on how to settle a
   technical disagreement. Write it in the **Fonctionnement** (how the team works) section of
   `docs/equipe.md`.

---

*Photo credit: "Group of diverse young students collaborating on a project with a laptop in a modern office" by Giuseppe Lombardo, via [Noun Project](https://thenounproject.com/photo/group-of-diverse-young-students-collaborating-on-a-project-with-a-laptop-in-a-modern-office-5ljgjo/), licensed under [CC BY-NC-ND 2.0](https://creativecommons.org/licenses/by-nc-nd/2.0/).*
{: .is-size-7 .has-text-grey }
