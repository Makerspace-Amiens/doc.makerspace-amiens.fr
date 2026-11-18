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

title: Creating the poster and the presentation video
subtitle: Summing up weeks of work in one image and 90 seconds
description: Prepare the poster and the short presentation video expected at the end of the project, reusing what has already been documented as you went.
author: Adrien Bracq

time: 2
difficulty: 1
todo: 55

prerequisites:
  - label: Have a working, documented prototype
    link: ""
softwares:
  - label: Video editing software (even on a smartphone)
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

## What is already in place

The home page of your site (`docs/index.md`) provides two slots,
with an example to replace: `docs/assets/images/poster.jpg` and
`docs/assets/images/intro_amiens.mp4`. If you have followed
[Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/),
you already have most of the content: photos taken during assembly,
test results, description of the need. The poster and the video are
not a new piece of writing, but a summary of what already exists.

## The poster

A presentation poster answers, visually, in a few seconds of
reading: what problem, what solution, what results.

- **Context/problem**: one sentence, taken from your specification.
- **Solution**: a picture of the prototype, a real photo, not just a CAD
  render.
- **Results**: one striking figure (e.g. "sorting rate: 85%"), taken from
  [Documenting tests and results](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/).
- **Team and contact**: who did the project, how to find out more
  (link to the repo).

{% include message.html title="Less text than you think" message="A poster is read standing up, in a few seconds, not like a report. If a visitor has to stop to read everything, the poster contains too much text." status="is-warning" icon="fas fa-exclamation-triangle" %}

## The video (~90 seconds, vertical format)

A structure that works for this short format:

1. **Presentation of the project** (10-15s): who, what, why.
2. **Explanation of how it works** (20-30s): how it works,
   with shots of the mechanism or the assembly.
3. **Views of the prototype / application** (30-40s): the prototype in action, the
   test results if they can be filmed.
4. **Conclusion** (10-15s): what it made possible, what you would do
   differently.

{% include message.html title="Reuse your existing footage" message="The photos and short videos taken during assembly (see [Documenting assembly and build](/workshops/methodologie-de-projet/tutorials/documenter-assemblage-montage/)) often serve directly as shots for this video: no need to film everything again at the end." status="is-info" icon="fas fa-info-circle" %}

## Adding both to the site

The simplest way: **replace the two example files** of the template with
your own, keeping the same names. The home page already displays them.

| File to replace | Constraints |
|---|---|
| `docs/assets/images/poster.jpg` | Image under **2 MB** |
| `docs/assets/images/intro_amiens.mp4` | 1 min 30 in vertical format, under **25 MB** |

If you prefer other file names (with no spaces or accents),
change them in `docs/index.md` too, in the two places where they
appear:

```markdown
![Poster du projet](assets/images/poster.jpg)

<video src="assets/images/intro_amiens.mp4" controls title="Présentation du projet" style="width: 100%;"></video>
```

{% include message.html title="Watch the file sizes" message="Above **25 MB**, the CI workflow of your repo fails (**Actions** tab), and an image over **2 MB** triggers a warning. For the video, export in **720p** (for example with the free software HandBrake): that is more than enough for a vertical format. If it is still too heavy, host it elsewhere (see just below)." status="is-warning" icon="fas fa-exclamation-triangle" %}

For a video hosted on YouTube rather than stored in the repo,
use a classic `<iframe>` tag in place of the `<video>` tag;
it works on any site, including yours based on
Just the Docs:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Project presentation" frameborder="0" allowfullscreen></iframe>
```

Replace `YOUR_VIDEO_ID` with the identifier found in the URL of your
YouTube video (after `watch?v=`).

## Exercise

List, among the photos/videos already taken during the project, those that
can be reused for the poster and the video. Identify only what
still needs to be filmed or photographed, probably less than expected if
the documentation was done as you went.
