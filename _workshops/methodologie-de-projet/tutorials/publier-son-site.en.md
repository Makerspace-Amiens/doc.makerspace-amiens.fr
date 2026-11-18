---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Publishing your site with GitHub Pages
subtitle: Put your site online and check that everything works
description: Enable GitHub Pages on your repo, follow the site build in the Actions tab, then open your site online to check that everything works.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Have created your repo from the template
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: A web browser
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

{% include message.html title="Screenshots to come" message="The button labels below match the current GitHub interface." status="is-info" icon="fas fa-camera" %}

## What you are going to do

Your repo already contains everything needed to become a website:
Markdown files and a Jekyll configuration. But until GitHub is
allowed to publish it, it is only a folder of files. In this
tutorial, you enable **GitHub Pages**, GitHub's free service that
turns your repo into a site, then you open your site online.

It is also the check that your repo is in good shape: a site that
displays with the template's example content proves that everything works,
**before** you start changing it. If something breaks
later, you will know that the error comes from your changes.

{% include message.html title="To be done once only" message="Enabling is done once and for all, right after the repo is created. After that, GitHub rebuilds and republishes your site by itself at every change sent to the repo." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Enabling GitHub Pages

{% capture step1_projet %}Under **Build and deployment**, **Source** field, choose **GitHub Actions** (not "Deploy from a branch").

The template already contains the build instructions (in `.github/workflows/`): GitHub uses them as soon as this option is chosen.{% endcapture %}
{% capture step1_portfolio %}Under **Build and deployment**:

- **Source** field: **Deploy from a branch**;
- **Branch** field: **main**, and the **/ (root)** folder;
- click **Save**.

GitHub may already have made this setting by itself, because your repo is called `username.github.io`: simply check that these are the values.{% endcapture %}
{% capture step1 %}On your repo page, **Settings** tab (top right), then **Pages** in the left-hand menu.

{% include content-tabs.html
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
  title="Step 1: Enable GitHub Pages"
  content=step1
  image="activer-pages-settings.png" %}

{% capture step2_projet %}Two workflows start:

- **Deploy Jekyll site to Pages** builds and publishes your site;
- **CI** rebuilds the site to check that there are no errors, lists the "À modifier" (to be edited) and "À supprimer" (to be deleted) blocks that remain in your files, and checks the weight of the files.

If nothing starts, open **Deploy Jekyll site to Pages** in the list on the left and click **Run workflow**.{% endcapture %}
{% capture step2_portfolio %}A workflow named **pages build and deployment** starts: this is GitHub building your site with the MakerSpace theme, then publishing it.

If nothing starts, go back to step 1 and check that you did click **Save**.{% endcapture %}
{% capture step2 %}Open the **Actions** tab of your repo.

{% include content-tabs.html
  id="etape-2"
  tab_title1="Project repo"
  tab_project1="methodologie-de-projet"
  tab1=step2_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=step2_portfolio
%}

An orange circle 🟠 means "in progress". Wait for the green tick ✅: allow 1 to 2 minutes. A red cross ❌ means an error: open the run to read it (see [Troubleshooting](#troubleshooting)).{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 2: Follow the build"
  content=step2 %}

{% capture step3_projet %}The address is of the form `https://account.github.io/repo-name/`. You should see the template's example site: home page, navigation menu, Objectifs and Équipe pages, etc.{% endcapture %}
{% capture step3_portfolio %}The address is `https://username.github.io`, with your username. You should see the example site: avatar, name "Prénom Nom", menu (Accueil, Projets, Compétences, Blog, Docs, Qui suis-je), one example project and one example article. Click **Compétences** (skills): the radar chart must be displayed.

It is this example content that you will replace with your own in the rest of the workshop.{% endcapture %}
{% capture step3 %}Go back to **Settings > Pages**: at the top, a line **Your site is live at** shows the address of your site, with a **Visit site** button. Open it.

{% include content-tabs.html
  id="etape-3"
  tab_title1="Project repo"
  tab_project1="methodologie-de-projet"
  tab1=step3_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=step3_portfolio
%}

Browse a few pages: if everything displays with its layout, your repo is ready.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Step 3: Open your site"
  content=step3 %}

## Making the site visible from the repo

{% include step-tuto.html
  greyBackground=true
  title="Step 4: Update the \"About\""
  content="On the home page of your repo, the **About** card (on the right) is empty by default. Click the gear icon ⚙️ next to its title: tick **Use your GitHub Pages website** (the link to your site then appears in this card, visible to anyone arriving on the repo), and take the opportunity to fill in the **Description** field with a sentence that sums up your repo."
  image="about-vide.png"
  image_2="edit-repository-details.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Step 5: Preview image (optional)"
  content="In **Settings > General**, right at the bottom: **Social preview**. Upload an image (1280×640px recommended): it is what is shown as a preview when the link to your repo is shared (Discord, social media...). For a project repo, the same image as the one used at the top of your [README](/workshops/methodologie-de-projet/tutorials/readme-efficace/) works very well here."
  image="social-preview.png" %}

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| Red cross ❌ in the **Actions** tab | Error in a file (often the YAML front matter: indentation, quotes) | Open the failed run: the file name and the line at fault are given |
| No **Your site is live at** line in **Settings > Pages** | GitHub Pages is not enabled, or the first build is not finished | Redo step 1, then wait for the green tick in **Actions** |
| 404 error at the site address | The build is not finished, or the address was copied wrongly | Wait for the green tick, then use the **Visit site** button rather than typing the address |
| The site displays without its layout (plain text, broken links) | Portfolio: the `baseurl` field of `_config.yml` has been changed | For a `username.github.io` repo, it must be `""` |
| The site does not update after a change | The build failed, or is not finished; for a project repo, only the `docs/` folder triggers publication | **Actions** tab: wait for the green tick or read the error, then reload the page with <kbd>Ctrl</kbd> + <kbd>F5</kbd> |

## Exercise

{% capture exo_projet %}As a team: one person only enables GitHub Pages (you need to be
an administrator of the repo). Then everyone opens the site on their own
computer and checks that it displays.{% endcapture %}
{% capture exo_portfolio %}Enable GitHub Pages, open your site, then submit **the address of
your site** and **the address of your repo** in the place indicated by your
supervisor.{% endcapture %}
{% include content-tabs.html
  id="exercice"
  tab_title1="Project repo"
  tab_project1="methodologie-de-projet"
  tab1=exo_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=exo_portfolio
%}

Next step: get the repo onto your computer to edit it
with VSCode, in [Git, GitHub Desktop and VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/).
