---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Researching existing solutions and studying feasibility
subtitle: Do not reinvent what already exists, or hit a wall in week 6
description: How to look for what has already been done, find reliable documentation, and quickly check that an idea holds up technically before committing to it.
author: Adrien Bracq

todo: 70
---

## Researching existing solutions is what engineers do

Building on existing work is a normal and expected practice in
engineering. No serious project starts from a blank page, and a good
engineer always begins by looking at what has already been done before
designing their own solution. It is neither copy-and-paste nor
plagiarism, **provided you always cite your sources**.

{% include message.html title="Citing sources is not optional" message="Reusing an idea, a schematic, a piece of code or a CAD part from an existing project is perfectly legitimate, provided you say clearly where it comes from and respect its licence when there is one. Presenting work done by someone else as your own, without citing it, is a matter of intellectual property, not only of good manners." status="is-warning" icon="fas fa-balance-scale" %}

Every source used (project, schematic, piece of code, datasheet) must
be cited in your documentation, with a link and, if possible, the date
you consulted it. See the "Documentary research" section below for the
details, and the guide
[Understanding the intellectual property of your project](/docs/how-to-guides/propriete-intellectuelle-projet/)
for the basics of intellectual property and how to cite correctly.

## Why research before designing

The specification says *what* to do. Before deciding *how* to do
it, there is a short step that is often skipped: looking at what already exists.
Without it, two frequent risks:

- **Reinventing a wheel that has already been invented**: spending three weeks designing
  a mechanism that someone has already documented in detail, mistakes included.
- **Discovering a blocking constraint too late**: learning in week 6
  that a key component does not exist in the size wanted, or costs three times the
  budget, when 30 minutes of research would have revealed it from the
  start.

## Researching existing solutions

Look for projects that resemble yours, even partially:

- **At the MakerSpace**: projects from previous years may already have
  dealt with a similar problem.
- **Online**: Hackaday, Instructables, GitHub, specialist forums,
  demonstration videos.
- **On the market**: existing products that do something
  similar, even in a different context.

For each project found, note above all **how they solved the
problem** and **what difficulties they ran into**: that is what
saves you time, not just the final result.

### Look for what does not work too

Do not look only for successes. Abandoned projects, documented
failures, or simply the approaches you do not like for your
own project are worth noting, with the reason. This serves
two purposes: avoiding a trap already identified by
someone else, and being able to justify later *why* you did not
follow a given approach, rather than answering "we didn't feel like it".
It is exactly the raw material for the "Options considered" section of the
trade-off format seen in
[Recording your technical choices](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/).

{% include message.html title="Keep it light" message="The point is not to produce an exhaustive literature review. 3 to 5 similar projects, looked at for 15 minutes each, are more than enough for a project lasting a few weeks, including the failures and the approaches ruled out." status="is-info" icon="fas fa-info-circle" %}

## Documentary research

Not all sources are equal. For the technical information that
will shape your choices (dimensions, tolerances, electrical
characteristics), prefer primary sources:

{% capture tab1 %}

**Source**: a comment found on a forum, with no date and no reference to
the exact component used.

**Problem**: impossible to check whether the information applies to your
version of the component, or whether it is still valid.

{% endcapture %}

{% capture tab2 %}

**Source**: the official datasheet of the component, electrical
characteristics section, with the exact part number.

**Advantage**: data that is verifiable, traceable, and does not change depending on who
wrote it.

{% endcapture %}

{% include content-tabs.html
  id="sources-fiables"
  tab_title1="❌ Unreliable source"
  tab_title2="✅ Primary source"
  tab1=tab1
  tab2=tab2
%}

As soon as you find a useful source, **archive it straight away** in
your documentation (link + date consulted). It is a direct
application of [documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/):
a browser tab gets closed, a link in your docs stays.

## Feasibility pre-study

Before designing the final version, quickly test the points that
worry you most. A 30-minute test on a breadboard is
better than a week of design based on a false assumption.

Example, on the sorting robot used as an example in this workshop: before
designing the complete sorting mechanism, the team tested in 20 minutes whether a
cheap colour sensor correctly told apart plastic, glass and
metal under the real lighting of the Forum des Sciences (a risk
identified as early as the specification).

{% include message.html title="A pre-study is not a finished prototype" message="The aim is to answer a precise question (\"does it work well enough?\") with the quickest possible setup, not to produce something clean or presentable." status="is-warning" icon="fas fa-exclamation-triangle" %}

## How to present it

A short summary is enough: it lives in the `docs/etudes.md` page of your
repo, in the **Recherche de l'existant** (research into existing solutions) and **Pré-étude de faisabilité** (feasibility pre-study) sections.
A comparison table is often the most useful format:

| Solution studied | Source | Advantages | Drawbacks | What we take from it |
|---|---|---|---|---|
| TCS3200 colour sensor | Similar Hackaday project | Cheap, well documented | Sensitive to ambient light | To be tested under real lighting before approval |
| Sorting by weight (scale) | Existing commercial product | Reliable, few components | Does not tell apart glass/plastic of the same weight | Ruled out: does not meet the need |
| Camera vision | Robotics forum | Accurate, flexible | Too complex for the budget/deadline | Ruled out for this project, an option for a v2 |

{% capture snippet_comparatif %}| Solution studied | Source | Advantages | Drawbacks | What we take from it |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |
| ... | ... | ... | ... | Ruled out: ... |{% endcapture %}
{% include code-snippet.html label="Copy the table (Markdown)" content=snippet_comparatif %}

## Exercise

As a team, on your project:

1. Find 2 to 3 existing projects that resemble yours. For each one, note
   how they solved the main problem.
2. Identify the technical point that worries you most. Run a quick
   test (30 minutes at most) to check whether it holds, before designing
   the complete solution.
3. Fill in a comparison table like the one above in your
   documentation.
