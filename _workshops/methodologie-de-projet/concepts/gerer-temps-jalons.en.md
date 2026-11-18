---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Managing time and milestones
subtitle: The time a physical project takes cannot be compressed by working harder
description: Anticipate the external lead times that do not depend on you, break the project down into verifiable milestones, and keep a safety margin.
author: Adrien Bracq

todo: 70
---

## Time works differently on a physical project

On a purely software project, working harder or longer
generally compresses the time needed. On a project with hardware,
that is no longer true: a 3D printed part takes the time it takes,
a component order takes the time it takes to arrive, a circuit
board manufactured outside comes back after a fixed lead time. No
extra energy speeds that up.

{% include message.html title="The real schedule risk" message="It is almost never the team's work that makes a maker project schedule slip. It is an external lead time identified too late: a component out of stock discovered in week 6, when it should have been ordered in week 1." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Identifying external lead times from the start

As soon as the specification is written, list everything that depends on a
third party and not on your own working pace:

- delivery of components or materials,
- 3D printing or laser cutting slots at the MakerSpace (often
  shared with other projects),
- printed circuit boards manufactured outside (often 1-2 weeks),
- availability of a machine or a supervisor for prior
  training.

Order or book these items **as early as possible**, even if the
rest of the project is not yet ready for them.

## Breaking down into verifiable milestones

A milestone is only useful if it lets you say, without ambiguity, whether it
has been reached or not. "Good progress on the electronics" is not a milestone.
"The circuit powers up and the microcontroller answers on the serial port"
is one.

| Week | Milestone | Verifiable by |
|---|---|---|
| 1 | Specification approved by the team | Document filled in and read aloud |
| 2 | Research into existing solutions done, critical components ordered | Comparison table filled in, orders placed |
| 4 | First prototype that sorts at least 1 category | Filmed test, even an imperfect one |
| 6 | Robot sorts the 3 categories, rate ≥ 80% over 20 trials | Real measurement, noted in the logbook |
| 7 | Documentation up to date, poster prepared | Peer review by another member |
| 8 | Demonstration at the Forum des Sciences | D-day |

{% capture snippet_jalons %}| Week | Milestone | Verifiable by |
|---|---|---|
| ... | ... | ... |
| ... | ... | ... |{% endcapture %}
{% include code-snippet.html label="Copy the table (Markdown)" content=snippet_jalons %}

These milestones take the success criteria of the specification
directly: they are not made-up dates, they are the same thresholds,
placed in time.

## A simple schedule is enough

No need for a detailed Gantt chart for a project lasting a few
weeks: a table like the one above, or the milestones
of GitHub Projects, are more than enough. What matters is not the tool,
it is that the milestones are written down, dated and verifiable.

## Keeping a safety margin

Never plan your last technical milestone on the very day of the
deadline. A margin of at least one week before the final submission absorbs the
almost certain surprises: a component that arrives late, a
last-minute bug, a part to reprint. Without this margin, the slightest
surprise becomes a crisis.

## Exercise

As a team, on your project:

1. List all the external lead times that concern you (orders,
   printing, manufacturing) and their estimated durations. Order or book
   today whatever can be.
2. Build a table of milestones like the one above, with your own
   dates, starting from the success criteria of your specification.
3. Check that at least one week of margin remains between your last
   technical milestone and the final deadline.
