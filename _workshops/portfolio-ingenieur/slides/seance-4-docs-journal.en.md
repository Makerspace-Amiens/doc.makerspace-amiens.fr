---
layout: slides
lang: en
title: Engineer's Portfolio
subtitle: "Session 4: documentation and logbook"
description: Slides for the fourth session of the Engineer's Portfolio workshop (2 h, including 30 minutes of presentation) on the logbook, documentation pages and keeping the site alive throughout the year.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/portfolio-ingenieur/
---

## On the agenda

1. Keeping a logbook
2. Writing a documentation page
3. Keeping your site alive all year
4. Your turn: one doc and two logbook entries

<aside class="notes" markdown="1">
Plan: 30 min of presentation (parts 1 to 3, activity included), then 1 h 30 on PC. Goal for the end of the session: one documentation page and two logbook entries published.
</aside>

---

## Where are you at?

- Your **Projects** page presents at least one project
- The **My role** part says what you did
- The example project is gone

First of all: open VSCode and **sync**.
{: .highlight-red}

---

<!-- .slide: class="slide-section" -->

## The logbook

Ten minutes at the end of each project session

---

## Why a logbook?

- **For you**: find what was done, and why
- **For your project page**: photos and measurements are already there when you write it
- **For a reader**: they see your approach progress, with its trials and errors

A logbook kept every week shows how you work. A page written the day before the assessment does not.
{: .highlight-red}

[Keeping a logbook](/workshops/methodologie-de-projet/tutorials/journal-de-bord/){: .doc-link} [Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/){: .doc-link}

---

## A logbook entry

```markdown
---
title: "Logbook, week 3"
description: "First tests of the sensors on the track."
categories: [journal]
---

## What was done
## Problems encountered
## Next step
```

One file per entry in `_posts/`, named `2026-12-08-logbook-week-3.md`.
{: .caption}

---

## Your last project session

<p class="activity-meta"><span><i class="fas fa-user"></i>Individual</span><span><i class="far fa-clock"></i>5 min</span><span><i class="fas fa-pen"></i>No PC</span></p>

Think back to your last project session and write down:

- one thing you **did**;
- a **problem** you met, even a small one;
- what you will do **next time**.

This is your first logbook entry: all that is left is to type it.
{: .caption}

<aside class="notes" markdown="1">
Have two or three "problems encountered" read out: they are often the most interesting parts of a logbook, and students hesitate to write them.
</aside>

---

<!-- .slide: class="slide-section" -->

## A documentation page

What you know how to do, explained for someone else

---

## Project, logbook or doc?

| Page | It answers | Example |
|---|---|---|
| **Project** | What did you build? | Line-following robot |
| **Logbook** | What happened this week? | Logbook, week 3 |
| **Doc** | How do you do it? | Flashing an ESP32 |
{: .table-dense}

A doc explains a skill step by step: someone else must be able to follow it.
{: .caption}

---

## The header of a doc

```yaml
---
title: "Flashing an ESP32"
description: "Uploading a program to the board from PlatformIO."
section: "Electronics"
nav_order: 10
---
```

- `section` groups your docs in the **left menu**
- `nav_order` sets their order: the smallest at the top
- The `##` and `###` headings build the **table of contents**

<aside class="notes" markdown="1">
The "Writing a documentation page" guide is still to be written in the workshop: meanwhile, point to part 8 of the theme's student guide and to the template's example doc (`_docs/ma-premiere-doc.md`).
</aside>

---

## Which doc to write?

A skill you learned, and that you would like to find again:

- setting up a machine: the 3D printer, the laser cutter
- using software: exporting a drawing, creating a part in CAD
- a technique: soldering a component, measuring a voltage

Write it as if a classmate had to follow it without you.
{: .highlight-red}

---

<!-- .slide: class="slide-section" -->

## Keeping your site alive

The four sessions end, your site goes on

---

## Throughout the year

| When | What you do |
|---|---|
| At each project session | A logbook entry, 10 minutes |
| At each step of a project | Update its page: results, photos |
| When you learn a skill | A documentation page |
| Before an assessment | Reread your projects and your logbook |
| Before applying | Reread everything, put the link on your CV |
{: .table-dense}

[Engineer's Portfolio](/workshops/portfolio-ingenieur/){: .doc-link}

---

## Good habits

- Clear **commit messages**: "Add the robot project", not "update"
- **Sync** before you start, and after each commit
- **Proofread**: your site is public
- Credit your **sources** and the authors of images

[Git and GitHub with VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/?project=portfolio-ingenieur){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Your turn

Today, one doc and two logbook entries

---

## The instructions for the session

<p class="activity-meta"><span><i class="fas fa-user"></i>Individual</span><span><i class="fas fa-laptop"></i>With PC</span></p>

1. **Type** the logbook entry you prepared earlier
2. **Write** a second entry: today's session, or a past one
3. **Write** a documentation page about a skill
4. **Delete** the example doc, then sync

[Keeping a logbook](/workshops/methodologie-de-projet/tutorials/journal-de-bord/){: .doc-link}

<aside class="notes" markdown="1">
Common error: an article that does not appear, because the file name has no date or the date is in the future.
</aside>

---

## Before you leave

- Two **logbook** entries on the **Blog** page
- A **documentation** page in the **Docs** menu
- No more example content on your site

Your site now presents your profile, a project, your logbook and a doc.
{: .highlight-red}

---

## What next?

- A logbook entry at **every project session**
- Each new project becomes a **project page**
- Your site's link on your **CV** and on **LinkedIn**

In a year, you will be able to show what you can do, with evidence to back it up.
{: .caption}
