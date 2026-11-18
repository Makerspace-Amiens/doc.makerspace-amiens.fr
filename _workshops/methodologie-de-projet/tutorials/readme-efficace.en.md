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

title: Writing an effective project README
subtitle: The first (and sometimes only) thing someone will read
description: Structure the README at the root of your repo so that it gives, in 2 minutes of reading, everything there is to know before digging deeper.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 65

prerequisites:
  - label: Have a project repo created
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: A text editor
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

## Why the README matters so much

The `README.md` file at the root of your repo is displayed automatically
on the project's GitHub page: it is often the very first thing that
a jury, a supervisor or a future team will read, **before** even
opening your documentation site. See also
[Making your project transferable](/workshops/methodologie-de-projet/concepts/rendre-projet-transmissible/)
for the general principle.

{% include message.html title="The 30-second test" message="Show your README to someone who has never seen your project, stopwatch in hand. In 30 seconds, they must be able to say what the project does and whether it interests them. If not, it is not a writing problem, it is a structure problem (see below)." status="is-warning" icon="fas fa-clock" %}

## What each section must do, precisely

A good README answers four questions, in this order (each has a
precise role, not just "a bit more info"):

- **Title + one sentence**: the name of the project (not a description in place
  of a title), then a single sentence that says *what it does*, not *how
  you did it*. "Waste sorting robot for the Forum des Sciences",
  not "Project carried out as part of the Methodology course".
- **Full documentation**: a link, not a summary. The README points
  to the `docs/` site, it does not duplicate it (see just below).
- **Known limitations**: what does not work yet, or not perfectly
  (see [Making your project transferable](/workshops/methodologie-de-projet/concepts/rendre-projet-transmissible/)
  for why it is important to say so).
- **Team and licence**: who did the project (and how to
  contact you), and under what licence it can be reused (see
  [Understanding the intellectual property of your project](/docs/how-to-guides/propriete-intellectuelle-projet/)).

{% include message.html title="No \"how to run it\" in the README" message="How to get your project working or reproduce it belongs in the documentation site (docs/), not in the README: that is precisely the role of the full documentation. The README points to it, it does not redo the job." status="is-info" icon="fas fa-info-circle" %}

## The README supplied by the template

Your repo already contains a very short `README.md` (in French), to be completed:

```markdown
# Nom du projet

> [!IMPORTANT]
> **À modifier** : ce repo a été créé depuis le template de projet ...

Une phrase qui explique ce que fait le projet et pour qui.

- **Documentation :** [site du projet](...) (sources dans `docs/`)
- **Fichiers du projet :** `project/` (CAO, électronique, code)

## Équipe

- Prénom Nom
```

To do, in order:

1. Replace the **project name** and the **one-sentence presentation**.
2. Put the right link to your published site, of the form
   `https://your-account.github.io/repo-name/`.
3. List the **team** (see the structure below for the contact).
4. Add the missing sections: **Known limitations** and **Licence**.
5. Delete the `> [!IMPORTANT]` **À modifier** (to be edited) block: it must no longer
   appear in your final README (the CI workflow of your repo
   flags it for as long as it remains).

## A picture is worth a thousand lines of text

A photo or a GIF of your prototype in action, right after the title,
convinces faster than any paragraph. Take it at the moment when
you already have a visual result (see
[Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/)),
not at the last minute before the submission.

```markdown
![The sorting robot in operation](docs/assets/images/robot-en-action.gif)
```

## Vague vs structured: an example

{% capture tab1 %}

```markdown
# Sorting robot project

Project carried out at the MakerSpace for the Forum des Sciences.
```

{% endcapture %}

{% capture tab2 %}

```markdown
# Waste sorting robot

![The robot in action](docs/assets/images/robot-en-action.gif)

Robot able to sort 3 categories of waste (plastic, glass, metal),
designed for an educational demonstration at the Forum des Sciences in Amiens.

## Full documentation

See the [documentation site](https://your-account.github.io/repo-name/) for the
details of the design, the technical choices and the tests.

## Known limitations

- Rate of correct sorting: ~80% (see the detailed test results)
- Not tested in strong direct light

## Team

Project carried out by [First name Surname](mailto:...), [First name Surname](mailto:...)
(MakerSpace UniLaSalle Amiens, 2026).

## Licence

MIT (see [LICENSE](LICENSE))
```

{% endcapture %}

{% include content-tabs.html
  id="readme-avant-apres"
  tab_title1="❌ Minimal README"
  tab_title2="✅ Structured README"
  tab1=tab1
  tab2=tab2
%}

## A template to copy

{% capture snippet_readme %}# Project name

![The project in action](docs/assets/images/apercu.gif)

A one-sentence description: what the project does, and for whom.

## Full documentation

See the [documentation site](...). The project files (CAD,
electronics, code) are in the [`project/`](project/) folder.

## Known limitations

- ...

## Team

Project carried out by [First name Surname](mailto:...), [First name Surname](mailto:...)

## Licence

... (see [LICENSE](LICENSE))
{% endcapture %}
{% include code-snippet.html label="Copy the template (Markdown)" content=snippet_readme %}

{% include message.html title="A README is not the full documentation" message="It points to it, it does not replace it. If your README is longer than one screen, a good part of its content should probably live in docs/ instead." status="is-info" icon="fas fa-info-circle" %}

## An optional extra: badges

The small coloured badges at the top of many GitHub READMEs
(licence, build status...) can be generated for free on
[shields.io](https://shields.io), without installing anything. A licence
badge, for example:

```markdown
![License: MIT](https://img.shields.io/badge/license-MIT-green)
```

It is only useful decoration. Do not spend time on it if the
rest of the README is not already solid.

## Common mistakes

| Mistake | Why it is a problem | What to do instead |
|---|---|---|
| The title is a long descriptive sentence | Does not read like a project name | A short name, with the description just below |
| Copying all the technical docs into the README | Becomes unreadable, never up to date in both places | A link to `docs/`, nothing more |
| No limitations mentioned | Gives a false impression of a finished project | See the structured README above |
| Written once, never reread | Becomes obsolete as soon as the project evolves | Reread at each important milestone (see [Managing time and milestones](/workshops/methodologie-de-projet/concepts/gerer-temps-jalons/)) |

## Exercise

Open the `README.md` of your repo (supplied by the template, with its
**À modifier** block) and rewrite it following the structure above, with the
real content of your project. Have it reread by someone outside
the team with the 30-second test.
