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

title: Git, GitHub Desktop and VSCode
subtitle: The day-to-day edit / commit / push cycle
description: Understand what Git does, and save and send your changes with GitHub Desktop or directly from VSCode.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Have created your repo and published your site
    link: /workshops/methodologie-de-projet/tutorials/publier-son-site/
  - label: Have installed VSCode
    link: /docs/tutorials/software/vscode-platformio/installation-vscode/
softwares:
  - label: VSCode
    link: /docs/tutorials/software/vscode-platformio/installation-vscode/
  - label: Git
    link: "https://git-scm.com/downloads"
hardwares:
  - label: No machine required
    link: ""
---

## What Git does, in one sentence

Git keeps a complete history of every change to your files, and
GitHub hosts a copy of that history online so that the whole
team works from the same base. The basic cycle, the one you will
repeat dozens of times a week:

```mermaid!
graph LR
    A[Edit files] --> B[Stage / select<br/>the changes]
    B --> C[Commit: save<br/>with a message]
    C --> D[Push: send<br/>to GitHub]
```

- **Edit**: you edit files as usual, in VSCode or
  elsewhere: nothing specific to Git at this stage.
- **Stage**: you choose which modified files
  go into the next commit. Useful if you have worked on two
  different things at once: you can commit one without
  the other.
- **Commit**: a snapshot of these changes, with a message that
  explains what and why. The commit stays **on your computer**
  until the next push: nobody else can see it yet.
- **Push**: your commits are sent to GitHub, where the rest of the team
  can fetch them.
- **Fetch / Pull**: the reverse of push (getting the commits that
  others have sent to GitHub, so that you have them on your machine too).
  **Fetch** looks at what has changed without downloading anything yet, **Pull**
  downloads and applies the changes.

{% include message.html title="Why not just Google Drive?" message="A shared folder overwrites files without warning when they are edited at the same time. Git keeps every version in the history and warns explicitly in case of conflict. See [Resolving a Git conflict](/docs/how-to-guides/pull-requests-et-conflits-git/)." status="is-info" icon="fas fa-info-circle" %}

## With GitHub Desktop

{% include step-tuto.html
  greyBackground=true
  title="Step 1: See the changes"
  content="Open GitHub Desktop and select your repo in the list at the top left. The **Changes** tab lists all the files modified since the last commit, with a preview of the lines added/removed."
  image="changes-github-desktop.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Step 2: Commit"
  content="Tick the files to include in this commit (all of them by default). At the bottom left, write a short summary (in the imperative, e.g. \"Add the motor speed calculation\") and, if needed, a longer description. Click **Commit to main**."
  image="commit-github-desktop.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Step 3: Send to GitHub"
  content="Click **Push origin** at the top. Your commits are now visible to the whole team on GitHub.com. Before starting work, also remember to click **Fetch origin** to get the others' changes."
  image="push-github-desktop.png"
  image_2="push-origin-bouton-zoom.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Step 4: Check in the history"
  content="**History** tab at the top: each commit sent appears in the list, with its message and author. This is where you find the complete history of the project, and where you can compare what changed at each commit."
  image="history-github-desktop.png" %}

## Directly from VSCode

VSCode includes the same functions without switching application: handy
if you already edit your code or your documentation in it. The cycle
is the same as in GitHub Desktop, just spread over four small
actions in the same panel. The screenshots show VSCode in French: the French
labels are given in brackets.

{% include step-tuto.html
  greyBackground=true
  title="See the changes"
  content="Click the branch icon in the left sidebar (or `Ctrl+Shift+G`). The modified files appear under **Changes** (*Modifications*), with an `M` (modified) icon."
  image="source-control-vscode.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Stage the files"
  content="Hover over a file and click the `+` to stage it (or the `+` at the top of the **Changes** list to stage everything at once). The files then move to a separate **Staged Changes** (*Changements indexés*) section."
  image="stage-vscode.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Write the message and commit"
  content="Type your commit message in the text field at the top of the panel, then click **Commit** (*Validation*, the blue ✓ button)."
  image="commit-message-vscode.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Send with Sync Changes"
  content="Once the commit is made, the button becomes **Sync Changes** (*Synchroniser les modifications*, with the number of pending commits): click it to push (and pull at the same time). The **Graph** (*Graphique*) panel (GitLens) at the bottom confirms the commit sent, attached to `main`."
  image="sync-vscode.png"
  image_2="sync-bouton-zoom.png"
  image_3="historique-graph-zoom.png" %}

{% include message.html title="Good practice" message="Small, frequent commits, with a precise message, are better than one giant commit at the end of the day with the message \"progress\". A commit should correspond to one coherent change that could be summed up in one sentence." status="is-success" icon="fas fa-check-circle" %}

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| "Push" fails with a rejection error | Someone else pushed before you, your local history is behind | Do **Fetch origin** then **Pull**, resolve any conflicts ([see the dedicated guide](/docs/how-to-guides/pull-requests-et-conflits-git/)), then push again |
| A file you do not want to track appears in Changes | Generated or temporary file not excluded | Add it to `.gitignore` |
| The Commit button stays greyed out | No commit message written, or no file staged | Check both |

## Going further

If you want a more leisurely explanation, in video, of the concepts seen
here (repository, branch, fork, pull request...):
[Git and GitHub for Poets](https://thecodingtrain.com/tracks/git-and-github-for-poets),
a series of 11 short videos by The Coding Train, very
accessible even with no technical vocabulary to start with.

## Exercise

Edit any file in your repo (for example, add a
line to `docs/objectifs.md`), then run the complete cycle: stage,
commit with a precise message, push. Check on GitHub.com that your
commit does appear in the history of the repo.
