---
layout: slides
lang: en
title: Engineer's Portfolio
subtitle: "Session 3: presenting a project"
description: Slides for the third session of the Engineer's Portfolio workshop (2 h, including 30 minutes of presentation) on the project page, your personal role and the media that show your work.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/portfolio-ingenieur/
---

## On the agenda

1. What a project page tells
2. Your role, the part that matters
3. Show rather than tell
4. Your turn: write your project page

<aside class="notes" markdown="1">
Plan: 30 min of presentation (parts 1 to 3, activity included), then 1 h 30 on PC. Goal for the end of the session: a complete project page, with at least one image or medium, published.
</aside>

---

## Where are you at?

- Your site shows your **name**, **photo** and **links**
- Your **About me** page and **CV** are under way
- You have chosen **a project** and gathered a few photos

First of all: open VSCode and **sync**.
{: .highlight-red}

---

<!-- .slide: class="slide-section" -->

## A project page

What you did, how, and what you learned from it

---

## Which project to present?

<p class="activity-meta"><span><i class="fas fa-user-friends"></i>In pairs</span><span><i class="far fa-clock"></i>5 min</span><span><i class="fas fa-pen"></i>No PC</span></p>

Present your project to your neighbour in one minute, then swap.

- What was the **need**?
- What did **you** do?
- What do you have **to show**: a photo, a diagram, a measurement?

Your neighbour notes the question you found hardest to answer.
{: .caption}

<aside class="notes" markdown="1">
The second question is almost always the hardest: students tell the team's project. It leads into the "My role" slide.
</aside>

---

## The five parts of a project page

| Part | What it tells |
|---|---|
| **Context** | The setting (course, club, personal) and the initial need |
| **My role** | What **you** did in the team |
| **Approach** | The main steps, your choices and their reasons |
| **Results** | Photos, measurements, graphs: what works, what does not |
| **What I take away** | The difficulties, what you would do differently |
{: .table-dense}

The template `_projets/mon-premier-projet.md` already has these headings (in French): copy it.
{: .caption}

---

## My role: the part that matters

<div class="columns" markdown="1">
<div markdown="1">

### Too vague

"We designed a line-following robot. I took part in the electronics."

</div>
<div markdown="1">

### Precise

"I chose the infrared sensors, drew the schematic in KiCad and soldered the board. I also wrote the calibration program."

</div>
</div>

A recruiter looks for what **you** can do, not what the team built.
{: .highlight-red}

---

## The page header

```yaml
---
title: "Line-following robot"
description: "A robot that follows a black line, built in I1."
date: 2026-12-01
image: /assets/images/robot-suiveur.jpg
statut: "Terminé"
cadre: "Projet I1, MakerSpace"
equipe: "4 personnes"
tags: [robotics, electronics]
---
```

The project card appears on its own on the **Projects** page, and on the home page if it is among the three most recent.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## Show rather than tell

A photo and a measurement beat a paragraph

---

## What you can show

| To show | Use |
|---|---|
| The prototype, the assembly | A **photo** (JPG) |
| How it works | A Mermaid **diagram** |
| Measurements, tests | A **chart** |
| A part designed in CAD | A **3D model** (GLB format) |
| An electronic board | The **KiCad schematic** |
| The working prototype | A YouTube **video** |
{: .table-dense}

The code to copy for each one is in the theme's toolbox. **↓** to see it.
{: .caption}

<!-- .down -->

## The toolbox

<iframe class="page-preview" data-src="https://makerspace-amiens.fr/portfolio-theme/docs/boite-a-outils/" title="Portfolio theme toolbox"></iframe>

`makerspace-amiens.fr/portfolio-theme/docs/boite-a-outils/`
{: .caption}

---

## Example: a chart of measurements

{% raw %}

```text
{% include chart.html type="bar" titre="Robot speed"
   labels="3 V,5 V,7 V" valeurs="40,85,120" legende="mm/s" %}
```

{% endraw %}

{% include graphique.html type="bar" x_valeurs="3 V,5 V,7 V" y_valeurs="40,85,120" serie="Speed (mm/s)" %}

<aside class="notes" markdown="1">
The code at the top is the portfolio theme's (`chart.html`); the chart on the slide is rendered by this site's include, to show the result.
</aside>

---

## Your images, and other people's

- Photos in **JPG**, 1600 pixels wide at most
- Names **without spaces, accents or capitals**
- No photo of a person **without their consent**
- An image found online: only if its licence allows it, with the **author's name**
- An internship project: only what the company **allows**

[Understanding the intellectual property of your project](/docs/how-to-guides/propriete-intellectuelle-projet/){: .doc-link}

---

## Your project already has a site?

The repo of a **Project Methodology** project documents everything, for the team.

Your project page **sums it up**, for an outside reader:

- the essentials of the project on one page
- **your** role, which the project site does not detail
- a **link** to the project site for those who want the details

[Project Methodology](/workshops/methodologie-de-projet/){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Your turn

Today, your first project goes online

---

## Your project page

<p class="activity-meta"><span><i class="fas fa-user"></i>Individual</span><span><i class="fas fa-laptop"></i>With PC</span></p>

1. **Copy** `_projets/mon-premier-projet.md` under a new name, then delete the example
2. **Fill in** the header: title, description, date, setting, team
3. **Write** the five parts, starting with **My role**
4. **Add** at least one image or medium

[Markdown syntax](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/?project=portfolio-ingenieur){: .doc-link}

<aside class="notes" markdown="1">
The "Adding a project" and "Enriching your pages" guides are still to be written in the workshop: add their links here once they exist. Meanwhile, point to parts 5 and 6 of the theme's student guide.
</aside>

---

## Before you leave

- Your project appears on your site's **Projects** page
- The **My role** part says what **you** did
- The page contains at least one **image** or **medium**
- The example project is gone

A red cross in **Actions**? Open the run: it names the faulty file and line.
{: .caption}

---

## Next time

**Session 4**: documentation and the logbook.

- Think of **a skill** you learned recently: a machine, a piece of software, a technique
- During your project sessions, note **what you do** and what gets stuck

These notes will become your first logbook entries.
{: .caption}
