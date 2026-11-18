---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.jpg
hero_height: is-small
hero_darken: true
image: hero.jpg
component_toc: true
doc_header: true

title: Creating your repo from the template
subtitle: The technical starting point, before everything else
description: Create your own repo on GitHub from a MakerSpace template (project or portfolio), directly from your browser.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: A GitHub account
    link: "https://github.com/signup"
softwares:
  - label: A web browser
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

<div data-project-hide="portfolio-ingenieur" markdown="1">

{% include message.html title="The repo may already exist" message="For a project repo, your supervisor has often already created your team's repo from the template. In that case, this tutorial does not concern you: go straight to [Publishing your site with GitHub Pages](/workshops/methodologie-de-projet/tutorials/publier-son-site/)." status="is-warning" icon="fas fa-exclamation-triangle" %}

</div>

## The vocabulary, before you start

If this is the first time you have touched GitHub, two words come up
constantly in this tutorial:

- **Repo** (repository): a folder tracked by Git,
  hosted on GitHub. It is the equivalent of a shared folder, but one that
  keeps the history of every change.
- **Template**: a repo that serves as a starting point. The
  "Use this template" button creates an independent copy for you, not a link
  to the original.

This whole tutorial is done in your browser, on github.com: nothing to
install. Getting the repo onto your computer and editing it with
VSCode comes right after, once the site is published.

## What you are going to do

{% capture tab_projet %}The MakerSpace [template-project](https://github.com/Makerspace-Amiens/template-project)
repo already contains the basic structure of a project: a
`docs/` folder for the documentation site and a `project/` folder for your
project files. You are not going to modify this template: you are going to create
**your team's repo**, an independent copy that you can
change freely, without ever affecting the original.

This template is not an empty skeleton: it is a complete **example**
project, to be replaced by your own. That replacement is the subject of the tutorial
[Customising your project template](/workshops/methodologie-de-projet/tutorials/personnaliser-template/).{% endcapture %}
{% capture tab_portfolio %}The MakerSpace [portfolio-template](https://github.com/Makerspace-Amiens/portfolio-template)
repo contains a ready-made personal site: home page, "Qui
suis-je" (about me) page and CV, projects, logbook, documentation and skills
radar. You are not going to modify this template: you are going to create
**your own repo**, an independent copy that will become your site.

This site is filled with **example** content (one project, one article and one
documentation page), which you will replace with your own over the course of the workshop.{% endcapture %}
{% include content-tabs.html
  id="ce-que-vous-allez-faire"
  tab_title1="Project repo"
  tab_project1="methodologie-de-projet"
  tab1=tab_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=tab_portfolio
%}

## Creating the repo

{% capture step1_projet %}Go to [github.com/Makerspace-Amiens/template-project](https://github.com/Makerspace-Amiens/template-project) in your browser. You arrive on a page that lists the files of the repo (`docs/` and `project/` folders, `README.md` file...): this is the content you are going to copy.{% endcapture %}
{% capture step1_portfolio %}Go to [github.com/Makerspace-Amiens/portfolio-template](https://github.com/Makerspace-Amiens/portfolio-template) in your browser. You arrive on a page that lists the files of the repo (`_config.yml`, `about.md`, `_projets/` and `_posts/` folders...): this is the content you are going to copy.{% endcapture %}
{% capture step1 %}{% include content-tabs.html
  id="etape-1"
  tab_title1="Project repo"
  tab_project1="methodologie-de-projet"
  tab1=step1_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=step1_portfolio
%}{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 1: Open the template"
  content=step1
  image="step1-use-this-template.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Step 2: Click \"Use this template\""
  content="At the top of the page, on the right, there is a green **Use this template** button. Click it, then choose **Create a new repository** in the small menu that appears (not the other options)."
  image="step1b-menu-use-this-template.png" %}

{% capture step3_projet %}

- **Owner**: your personal account (already selected by default), or the MakerSpace organisation if your supervisor asked you to.
- **Repository name**: the name of your project, in lower case, words separated by hyphens, with no spaces or accents: for example `robot-tri-dechets`, not `Robot de Tri des Déchets`.
- **Description** (optional): a sentence summing up the project.
- **Public / Private**: leave **Public**, selected by default, unless your supervisor explicitly asks you otherwise.{% endcapture %}
{% capture step3_portfolio %}

- **Owner**: your personal account, already selected by default. Never an organisation: this site is yours.
- **Repository name**: it **must be** `username.github.io`, where `username` is exactly your GitHub account name, the one shown in **Owner**. If your account is called `firstname-surname`, the repo is called `firstname-surname.github.io`, and your site will be online at `https://firstname-surname.github.io`.
- **Description** (optional): for example "Portfolio of First name Surname, engineering student at UniLaSalle Amiens".
- **Public / Private**: **Public**, without exception. A portfolio is made to be seen, and GitHub Pages only publishes public repos for free.

{% include message.html title="Your address is your business card" message="It will appear on your CV, your LinkedIn profile and your internship applications. If your GitHub username is not presentable (`xXdarkgamerXx`), change it **before** creating the repo: on GitHub, your profile picture at the top right, **Settings**, **Account**, **Change username**. A simple name like `firstname-surname` is ideal." status="is-info" icon="fas fa-id-card" %}{% endcapture %}
{% capture step3 %}A form is displayed, with several fields to fill in:

{% include content-tabs.html
  id="etape-3"
  tab_title1="Project repo"
  tab_project1="methodologie-de-projet"
  tab1=step3_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=step3_portfolio
%}

Once it is filled in, click the green **Create repository** button at the bottom of the page.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 3: Fill in the form"
  content=step3
  image="step2-formulaire-creation.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Step 4: Check"
  content="You are redirected to your new repo: the URL in the address bar now contains your account and the name you chose, and no longer `Makerspace-Amiens/...`. The same files as the template appear in it."
  image="step3-repo-cree.png" %}

## Checking that everything is in order

{% capture verif_projet %}

- The `docs/` folder does contain `index.md`, `_config.yml`, the pages `objectifs.md`, `equipe.md`, `etudes.md` and `tests.md`, as well as the `conception/`, `fabrication/` and `journal/` folders.
- The `project/` folder contains the sub-folders `mcad/`, `ecad/`, `firmware/` and `software/`.
- At the top of the page, the name of your repo is displayed, not "template-project".{% endcapture %}
{% capture verif_portfolio %}

- At the root: `_config.yml`, `index.md`, `about.md`, `projets.md`, `blog.md`, `docs.md` and `competences.md`.
- The `_projets/`, `_posts/`, `_docs/`, `_data/` and `assets/` folders.
- At the top of the page, the name of the repo is exactly `username.github.io`, with **your** username, the same as the one shown just before the slash.{% endcapture %}
{% include content-tabs.html
  id="verifier"
  tab_title1="Project repo"
  tab_project1="methodologie-de-projet"
  tab1=verif_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=verif_portfolio
%}

{% include message.html title="Your repo is independent of the template" message="The repo you have just created is a completely independent copy. Any change you make in your repo never affects the original template, and vice versa." status="is-success" icon="fas fa-check-circle" %}

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| No "Use this template" button visible | You are not on the template repo, but on a copy | Check the address: `github.com/Makerspace-Amiens/template-project` or `github.com/Makerspace-Amiens/portfolio-template` |
| Portfolio: "The repository already exists" | You already have a `username.github.io` repo on your account | Delete it if it is empty or useless (**Settings**, right at the bottom, **Delete this repository**), or ask your supervisor for advice |
| Portfolio: the name of the repo does not match your username | Typo, or username changed after creation | **Settings**, **General**, **Repository name** field: rename the repo to `username.github.io`, with your exact username |

## Exercise

{% capture exo_projet %}As a team: create your project repo right now if it has not
been done already, and check that each member of the team can open it on
GitHub.{% endcapture %}
{% capture exo_portfolio %}Create your `username.github.io` repo right now, and note its
address: you will submit it with that of your site at the end of the next
tutorial.{% endcapture %}
{% include content-tabs.html
  id="exercice"
  tab_title1="Project repo"
  tab_project1="methodologie-de-projet"
  tab1=exo_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=exo_portfolio
%}

Next step: put your site online with
[Publishing your site with GitHub Pages](/workshops/methodologie-de-projet/tutorials/publier-son-site/).

---

*Photo credit: "a computer screen with a bunch of code on it" by Chris Ried, via [Unsplash](https://unsplash.com/photos/ieic5Tq8YMk), under the [Unsplash licence](https://unsplash.com/license).*
{: .is-size-7 .has-text-grey }
