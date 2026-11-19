---
layout: slides
lang: en
title: Engineer's Portfolio
subtitle: "Session 2: your introduction and your CV"
description: Slides for the second session of the Engineer's Portfolio workshop (2 h, including 30 minutes of presentation) on Markdown, the site's identity, the About me page and the CV.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/portfolio-ingenieur/
---

## On the agenda

1. Writing in Markdown
2. Putting your name on the site
3. Introducing yourself: About me and CV
4. Your turn: customise your site

<aside class="notes" markdown="1">
Plan: 30 min of presentation (parts 1 to 3, activity included), then 1 h 30 on PC with the Markdown syntax and Customising your portfolio tutorials. Goal for the end of the session: a site in their name, with a photo (or the default avatar), links, and an About me page and CV under way.
</aside>

---

## Where are you at?

- Your site opens at `https://pseudo.github.io`
- Its repo is cloned in **VSCode**
- You have pushed a **first commit**
- The link is posted on **Moodle**

First of all: open VSCode and **sync**.
{: .highlight-red}

<aside class="notes" markdown="1">
Take stock with a show of hands. Those who did not finish session 1 go back to the session 1 tutorials during the practical part, before customising.
</aside>

---

<!-- .slide: class="slide-section" -->

## Writing in Markdown

Plain text, formatted with a few symbols

---

## Five moves are enough

| You type | You get |
|---|---|
| `## My background` | A section heading |
| `**important**` | **important** in bold |
| `- an item` | A list item |
| `[my GitHub](https://github.com/...)` | A clickable link |
| `![My robot](/assets/images/robot.jpg)` | An image |
{: .table-dense}

To see the result while you type: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> in VSCode.
{: .caption}

[Markdown syntax](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/?project=portfolio-ingenieur){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Your identity

The site still shows "Prénom Nom": time to make it yours

---

## It all starts in `_config.yml`

```yaml
title: "Camille Martin"
author:
  name: "Camille Martin"
  bio: "First-year engineering student, into embedded electronics."
  avatar: "/assets/images/photo-profil.jpg"
```

- **Indentation** matters: 2 spaces, never a tab
- Texts go **between quotes**
- The bottom of the file makes the theme work: **leave it alone**

[Customising your portfolio](/workshops/portfolio-ingenieur/tutorials/personnaliser-portfolio/){: .doc-link}

---

## A photo that introduces you

<div class="columns" markdown="1">
<div markdown="1">

### Do

- Framed on your face
- A plain background
- Square, in JPG
- Named `photo-profil.jpg`

</div>
<div markdown="1">

### Avoid

- A holiday selfie
- A cropped group photo
- A party photo
- A name like `IMG 2034.JPG`

</div>
</div>

No good photo yet? Keep the default avatar for now.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## Introducing yourself

The About me page and your CV

---

## Three questions to introduce yourself

<p class="activity-meta"><span><i class="fas fa-user"></i>Individual</span><span><i class="far fa-clock"></i>5 min</span><span><i class="fas fa-pen"></i>No PC</span></p>

Write one or two sentences for each question:

- **Where do you come from?** Your background, what led you here
- **What interests you?** Fields, techniques, projects
- **What are you looking for?** An internship, a work-study, even if it is still vague

These notes become the first draft of your **About me** page.
{: .caption}

<aside class="notes" markdown="1">
Insist on the first person and a simple tone: as you would introduce yourself to an engineer in an interview. Two or three volunteers read their answer to the third question.
</aside>

---

## The CV, in `_data/cv.yml`

```yaml
sections:
  - titre: "Formation"
    icon: graduation-cap
    elements:
      - periode: "2026 à aujourd'hui"
        titre: "Cycle ingénieur, I1"
        organisme: "UniLaSalle Amiens"
```

- One **section** per heading: education, experience, involvement
- It is shown below your text, on the **About me** page
- A PDF CV in `assets/cv/` adds a download button

<aside class="notes" markdown="1">
The step-by-step CV guide is still to be written in the workshop. Meanwhile, point to part 4 of the theme's student guide and to the examples in the template's `cv.yml`. The keys (`titre`, `elements`...) are in French in the theme: they must not be translated.
</aside>

---

## A first article

The template contains an example article: rewrite it to announce your site.

- It is in `_posts/`, named `YYYY-MM-DD-short-title.md`
- The **date in the name** is mandatory
- An article dated in the future is not shown yet

The blog will also hold your **logbook**, in session 4.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## Your turn

Today, your site takes your name

---

## The tutorials of the session

<p class="activity-meta"><span><i class="fas fa-user"></i>Individual</span><span><i class="fas fa-laptop"></i>With PC</span></p>

1. **Discover** Markdown: read the tutorial and do its exercise
2. **Customise** your site: name, photo, links, About me page
3. **Start** your CV in `_data/cv.yml`
4. **Rewrite** the example article

[Markdown syntax](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/?project=portfolio-ingenieur){: .doc-link} [Customising your portfolio](/workshops/portfolio-ingenieur/tutorials/personnaliser-portfolio/){: .doc-link}

<aside class="notes" markdown="1">
Most common error: a red cross in Actions after editing `_config.yml` (indentation, missing quote). Show how to read the faulty line in the failed run.
</aside>

---

## Before you leave

- Your **name**, **photo** and **links** show on the home page
- Your **About me** page contains your introduction
- Your **CV** has at least your education
- Everything is **synced**: your online site is up to date

Nothing changed? Reload without the cache: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>.
{: .caption}

---

## Next time

**Session 3**: you present a project on your site.

- Choose **a project** now: from a course, a club, or a personal one
- Gather what you have: **photos**, diagrams, measurements, CAD files
- Write down what **you** did in it

A photo taken today beats a photo you cannot find in six months.
{: .highlight-red}
