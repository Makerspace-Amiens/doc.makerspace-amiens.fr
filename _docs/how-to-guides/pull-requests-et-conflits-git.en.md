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
type: how-to

title: Using Pull Requests and resolving a Git conflict
subtitle: Advanced use of Git, not essential for every project
description: Have your work reviewed before merging it into the main branch through a Pull Request, and cleanly resolve a conflict when two changes collide.
author: Adrien Bracq

time: 1
difficulty: 3

prerequisites:
  - label: Know the stage / commit / push cycle
    link: /workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/
softwares:
  - label: GitHub Desktop or VSCode
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

## Context

{% include message.html title="Not essential for every project" message="Most small teams work perfectly well directly on main with the basic stage / commit / push cycle. This guide becomes useful when the team grows, when several people often touch the same files, or when you want a teammate to review the code before it goes into the project. Do not feel you have to be at that point." status="is-info" icon="fas fa-info-circle" %}

This guide combines two related skills: proposing your work through a
**Pull Request** so that it is reviewed before reaching the main
branch, and resolving a **Git conflict**, which happens most
often precisely when merging a Pull Request.

## Prerequisites

- Be comfortable with the basic stage / commit / push cycle: see
  [Git, GitHub Desktop and VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/).

## Procedure

### 1. Why not push directly to `main`

Working directly on the main branch (`main`) works as long as
you are alone. With several people, it quickly leads to conflicts and to
unreviewed code that breaks what used to work. A **Pull Request** (PR) proposes your
changes, makes them visible before they reach `main`, and
gives someone else the chance to review them.

```mermaid!
graph LR
    A[Create a branch] --> B[Work, commit]
    B --> C[Open a Pull Request]
    C --> D[Review by a teammate]
    D -->|to fix| B
    D -->|approved| E[Merge into main]
    E -.sometimes.-> F[Conflict to resolve]
```

### 2. Create a branch

{% include step-tuto.html
  greyBackground=true
  title="New branch"
  content="**With GitHub Desktop**: `Current branch` at the top, then `New branch`; give it a short name describing the task (e.g. `moteur-pas-a-pas`, not `fix` or `test`).

**With VSCode**: click the branch name at the bottom left, `Create new branch`, enter the name.

Work and commit as usual on this branch: see [Git, GitHub Desktop and VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/)." %}

### 3. Open the Pull Request

{% include step-tuto.html
  greyBackground=true
  title="Create the PR"
  content="Once your commits are pushed to the branch, go to GitHub.com: a banner offers **Compare & pull request** straight away. Otherwise, **Pull requests** tab, **New pull request** button, choose your branch.

Give it a clear title and a description: what changed, why, and what should be checked in particular. In the right-hand panel, add a **Reviewer** (the person who will review it)." %}

### 4. Review a teammate's work

{% include step-tuto.html
  greyBackground=true
  title="Doing a review"
  content="On the PR, **Files changed** tab: every modified line is shown with a `+`/`-`. Hover over a line and click the blue `+` to leave a comment on it. Once the review is finished, **Review changes** button at the top right: choose **Comment** (remarks without blocking), **Approve** (validated), or **Request changes** (to fix before merging)." %}

{% include message.html title="Reviewing is not just saying yes" message="A good review asks questions: « why this choice? », « does it also work in such a case? ». It is not an administrative hurdle, it is the moment when a second pair of eyes catches what the first one missed." status="is-info" icon="fas fa-info-circle" %}

### 5. Merge

{% include step-tuto.html
  greyBackground=true
  title="Merge"
  content="Once the PR is approved, **Merge pull request** button then **Confirm merge**. Then delete the branch (button offered right after): it has done its job, and keeping it serves no purpose.

If GitHub shows **This branch has conflicts that must be resolved**, go to the next section before you can merge." %}

### 6. If a conflict appears

A conflict happens when two people have modified **the same lines**
of the same file, on different branches. Git can automatically
merge changes on different lines. On the
same lines, it cannot guess which one to keep, and asks you.

{% include message.html title="It is not an error" message="A conflict is not a sign that you did something wrong. It is how Git normally works as soon as a team works in parallel on the same files." status="is-info" icon="fas fa-info-circle" %}

It usually appears during a `git pull`, a merge, or when trying
to merge a Pull Request. Git shows a message such as
`CONFLICT (content): Merge conflict in <file>`, and the file concerned
contains special markers:

```text
<<<<<<< HEAD
Your version of the conflicting lines
=======
The version from the other branch
>>>>>>> branch-name
```

{% include step-tuto.html
  greyBackground=true
  title="Open the conflicting file in VSCode"
  content="VSCode automatically detects the conflict markers and shows, above each block, clickable links: **Accept Current Change** (keep your version), **Accept Incoming Change** (keep the other one), **Accept Both Changes** (keep both), or **Compare Changes** (see both side by side)." %}

{% include step-tuto.html
  greyBackground=true
  title="Choose the right version"
  content="Do not click at random: read both versions and, if needed, discuss them with the person who wrote the other one. The final result must contain **no** leftover `<<<<<<<`, `=======`, `>>>>>>>` marker: check by rereading the whole file once you are done." %}

{% include step-tuto.html
  greyBackground=true
  title="Finish"
  content="Once all the conflicts in the file are resolved: stage the file, commit with a message such as « Resolve conflict on main.ino », then push as usual." %}

{% include message.html title="If in doubt" message="A badly resolved conflict can silently make someone's work disappear. If in doubt, contact the person whose work you may be overwriting rather than deciding alone." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Why conflicts happen less often than you might think

Small, frequent commits, rather than huge commits piled up
over days, greatly reduce the frequency and size of
conflicts: see [Git, GitHub Desktop and VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/).
Working on separate branches per building block of the project (see
[Building and organising your team](/workshops/methodologie-de-projet/concepts/constituer-organiser-equipe/))
also helps, since the same files are then modified by fewer
people in parallel.

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| "Merge" button greyed out | A reviewer requested changes that are not resolved yet | Fix them, push again to the same branch; the PR updates automatically |
| Nobody ever reviews the PRs | No reviewer assigned, or no team habit established | Always assign a reviewer, decided at the sync meeting |
| The file still contains `<<<<<<<` after the commit | Markers forgotten, not removed before committing | Reopen the file, delete the remaining markers, commit again |
| Conflict on almost every file | The two branches have diverged too far | Do more frequent `pull`s/merges in future to stay close to `main` |
| Afraid of losing work while resolving | Understandable, but Git keeps the history | Both versions stay visible in the commit history; nothing is lost for good |

## Exercise

On your project, make a PR for your next small change:
create a branch, commit, open the PR, ask a teammate to
review it before merging. If a conflict comes up on that occasion (or
cause one on purpose with a partner, with nothing really at stake, to
practise), resolve it by following the procedure above.
