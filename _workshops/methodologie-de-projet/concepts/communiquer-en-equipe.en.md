---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.jpg
hero_darken: true
image: hero.jpg
component_toc: true
doc_header: true

title: Communicating as a team
subtitle: A project tool, not just "getting on well"
description: Set up regular sync meetings and make sure that what is decided out loud ends up in writing, to avoid silent blockers.
author: Adrien Bracq

todo: 70
---

## A tool, not a human quality

Communicating well as a team is not a matter of getting on well: a
team that gets on very well can still work in silos because
nobody takes the time to say where they are at. It is a set of
concrete practices to put in place, like any other project
tool.

## Regular, short sync meetings

A 15-minute team meeting every week, with a simple format,
is better than a two-hour meeting once a month:

- What have I done since last time?
- What is blocking me, if anything?
- What am I doing next?

{% capture tab1 %}

**Communicating the blocker**: "it's not going too well on the motor
part."

**What is missing**: nobody knows whether to worry, help, or
wait. The blocker drags on for another week before someone
really understands the problem.

{% endcapture %}

{% capture tab2 %}

**Communicating the blocker**: "The stepper motor does not turn, and the
A4988 driver gets abnormally hot after 10 seconds. I have checked the
wiring twice; it may come from the current setting. I need
an opinion tomorrow morning before going on."

**What this allows**: anyone in the team (or the supervisor) can
help immediately, or at least know that it is serious.

{% endcapture %}

{% include content-tabs.html
  id="communiquer-blocage"
  tab_title1="❌ Vague"
  tab_title2="✅ Precise"
  tab1=tab1
  tab2=tab2
%}

## What is decided out loud must end up in writing

A decision taken in a meeting and never noted down no longer exists as soon
as someone forgets it or remembers it differently. The reflex: at the end of
each sync meeting, one person notes in 2-3 lines what was
decided, in the [logbook](/workshops/methodologie-de-projet/tutorials/journal-de-bord/):
it is a direct application of
[documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/).

{% include message.html title="No need for formal minutes" message="2-3 lines are enough: who decided what, and why. The aim is for someone who missed the meeting to understand the decision in 30 seconds, not to produce official minutes." status="is-info" icon="fas fa-info-circle" %}

## Communicating with the outside

The academic supervisor, the jury, or anyone outside the project
must be able to understand where you are at without rereading the whole history.
Two useful reflexes:

- Check in regularly with the supervisor, not only at the final submission:
  it lets you correct course early if something drifts away from the need.
- Be able to sum up the state of the project in 30 seconds at any time:
  where you are at, what works, what is blocked.

## Exercise

As a team, now:

1. Set a recurring day and time for your weekly sync
   meeting. Note it somewhere the whole team can see it.
2. At the end of your next meeting, decide who notes the decisions in
   the logbook, and actually do it, not "we'll remember".

---

*Photo credit: "Group of diverse young students collaborating on a project with a laptop in a modern office" by Giuseppe Lombardo, via [Noun Project](https://thenounproject.com/photo/group-of-diverse-young-students-collaborating-on-a-project-with-a-laptop-in-a-modern-office-5ljgjo/), licensed under [CC BY-NC-ND 2.0](https://creativecommons.org/licenses/by-nc-nd/2.0/).*
{: .is-size-7 .has-text-grey }
