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

title: Understanding the intellectual property of your project
subtitle: Copyright, patents, open source and licences
description: "An overview of the intellectual property notions useful to an engineering project: copyright, industrial property, patents, open source, and how to choose a suitable licence."
author: Adrien Bracq

time: 1
difficulty: 2
todo: 60

prerequisites:
  - label: Have a project (code, CAD, documentation) to publish or share
    link: ""
softwares:
  - label: No software required
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

## Context

This guide is an overview of the intellectual property notions
useful to an engineering project: which rights we are talking about, what
is specific to France, what goes wrong with patents today, what
open source has changed and, among all that, how to choose a licence
and properly credit what you reuse.

{% include message.html title="This is not legal advice" message="This guide gives practical pointers for a student project, not a lawyer's consultation. For commercial use or a real doubt, consult a legal professional or the relevant department of your institution." status="is-info" icon="fas fa-info-circle" %}

## Prerequisites

- A project, or a building block of a project (code, CAD files, documentation),
  in which you reuse someone else's work, or which you
  want to make reusable by others.

## Two main families of rights

**Intellectual property** covers two fairly different
sets of rights:

- **Copyright** (*droit d'auteur* in France) automatically protects any original creation
  (code, schematic, text, photo, 3D model) as soon as it is created, with no formality
  or filing.
- **Industrial property** groups rights that have to be actively filed
  in order to exist: patents (technical inventions), trademarks,
  designs.

### The French case: moral rights, an important specific feature

French *droit d'auteur* grants the author two types of rights, a
distinction that does not exist in the same way in American copyright:

- **economic rights**: the economic exploitation of the work,
  transferable, limited in time (70 years after the author's death);
- a **moral right**: the link between the author and their work (being credited,
  objecting to a distorting modification...), **inalienable, perpetual,
  passed on to heirs**, which cannot be sold or transferred.

American copyright, by contrast, treats the author's right first as
an economic right transferable as a whole. Moral rights are
much more limited there. In practical terms for you: even if you transfer all
the exploitation rights of a project (to a company, a school...), under
French law you keep the right to be identified as the author.

Sources (in French): [droit d'auteur vs copyright](https://www.justifit.fr/b/guides/droit-propriete-intellectuelle/differences-droit-d-auteur-et-copyright/), [SGDL: droit d'auteur et copyright](https://www.sgdl.org/sgdl-accueil/presse/presse-acte-des-forums/auteurs-et-editeurs-de-nouvelles-relations/2518-droit-d-auteur-et-copyright-deux-environnements-differents-pour-les-relations-auteurs-editeurs).

{% include message.html title="What about your school project?" message="Many institutions have their own rules on who owns student projects (the school, the MakerSpace, or you). Before choosing a licence, ask your academic supervisor: this guide cannot settle that for you." status="is-warning" icon="fas fa-exclamation-triangle" %}

## The case of patents: a critical look

### What a patent is, in practice

A patent protects a **technical invention** (a solution to a technical
problem, not a mere idea): a mechanism, a manufacturing process,
a circuit, an algorithm in some cases. To obtain one, you have to actively
**file** it with a national or regional office (INPI in
France, the EPO at European level): unlike copyright, no
protection exists until it is filed.

In exchange for the **full publication** of the invention (anyone
can read how it works), the office grants its holder a
**temporary exclusive right**: only they can make, use, sell
or import the invention for the term of the patent, that is, 20 years from
filing, a term set by the international TRIPS agreement. After that,
the invention falls into the public domain and becomes freely reusable
by all. The original idea: to trade a temporary monopoly for the
public disclosure of know-how, rather than let everyone keep
their inventions secret indefinitely.

In practice, disclosure happens early and automatically: a patent
application is made public about 18 months after filing, **whether or not the
patent is eventually granted**. It feeds databases that
can be searched free of charge (INPI, Espacenet, Google Patents), with an
often very detailed technical description. A useful consequence for
you: these databases are a source of technical documentation in their own
right for [researching existing solutions](/workshops/methodologie-de-projet/concepts/rechercher-existant-faisabilite/),
even if you have no intention of filing anything: an
expired or abandoned patent often describes a complete technical solution
that can be reused freely.

### The conditions for a patent to be valid

A patent is only granted if the invention meets three conditions:

- **Novelty**: it has never been made public, anywhere in the
  world, before filing, including by you. A publication on
  your website, a forum post or a public demonstration is enough to
  destroy novelty.
- **Inventive step**: the solution must not be obvious to
  someone skilled in the field: a simple combination of known techniques is
  generally not enough.
- **Industrial applicability**: the invention must be able to be made
  or used in an industry, not remain a purely theoretical idea.

{% include message.html title="Tension with continuous documentation" message="If part of your project seems potentially patentable, do not publish it anywhere (documentation, social media, public demonstration) before filing an application: novelty is lost at the first public disclosure, even your own. This is a trade-off to make consciously, as a team and with your supervisor, and it goes against the « document as you go » logic of the rest of this workshop. In the vast majority of student projects, the question does not arise: opening up and documenting remains the right default reflex." status="is-warning" icon="fas fa-exclamation-triangle" %}

In current practice, several serious limits to this principle are
documented:

- **There is no such thing as a worldwide patent.** Protection is territorial:
  you have to file (and pay) in every country or region where you want to be
  protected, which puts patents largely out of reach of a student or
  a small organisation, and in effect reserves them for large companies.
- **"Patent trolls"** (entities that exploit no patent but use them
  only to sue) generate huge defence
  costs for innovative companies: research
  estimates the associated economic losses at several hundred
  billion dollars between 1990 and 2010 in the United States.
- **"Patent thickets"** (tangles of overlapping patents,
  common in software and electronics) make it hard to create
  anything without risking infringing an existing patent, a cost that is
  particularly heavy for small organisations that cannot afford
  a dedicated legal department.
- **A fast pace of technological innovation** sometimes makes a 20-year
  patent obsolete even before it expires, while it keeps legally
  blocking other players on an outdated idea.

Sources: [EFF: Fighting to Keep Bad Patents in Check](https://www.eff.org/deeplinks/2025/12/fighting-keep-bad-patents-check-2025-review), [Harvard Library: Criticism of the Patent System](https://guides.library.harvard.edu/patents/critics).

{% include message.html title="Not a universal judgement" message="This criticism is aimed mainly at software and consumer electronics, where the cost of reproducing an idea is low. In other sectors (pharmaceuticals for example), where the R&D cost is huge and the cost of copying very low, the case for patents remains stronger and is debated differently." status="is-info" icon="fas fa-info-circle" %}

## What open source has brought to modern engineering

Unlike patents, open source bets on sharing rather than
exclusivity, and the result is hard to ignore. Many
of the tools you already use at the MakerSpace come from it:
**KiCad** and **FreeCAD** (CAD and electronics), **Arduino** and its
open hardware ecosystem, **Python**, **Jekyll** (the generator of this
site), and on a larger scale **Linux**, **GCC/LLVM**, or **RISC-V** in
hardware. Scientific research follows a comparable movement with
open-access publication (arXiv) and the reproducibility of results.
The common principle: by making work reusable and verifiable by
all, collective innovation speeds up, at the cost, for the individual
author, of giving up commercial exclusivity.

## Choosing a licence for your project

With these foundations in place, choosing a licence for your own project
becomes a concrete decision, not a legal mystery. A maker project
often mixes several types of content, which do not have the same
families of licences.

### For code: permissive or copyleft

| Licence | Type | What it allows |
|---|---|---|
| MIT | Permissive | Almost unrestricted reuse, including commercial, with no obligation to share modifications |
| Apache 2.0 | Permissive | Like MIT, with explicit patent protection as well |
| GPL v3 | Copyleft | Free reuse, but any redistributed modified version must stay under the same licence |

The question to ask yourself: do you want modified versions of your
code to stay open no matter what (copyleft, GPL type), or do you accept
that they may become closed (permissive, MIT type)?

### For hardware

Hardware has its own licences, designed for schematics and CAD
files rather than code: **CERN-OHL** (v2, with permissive and
copyleft variants, developed at CERN) or the older **TAPR OHL**. The principle
is the same as for code, applied to hardware files.

### For documentation

For text, images and documentation: the
**Creative Commons** licences.

| Licence | What it allows |
|---|---|
| CC0 | Public domain, no restriction, not even attribution |
| CC-BY | Free reuse, provided the author is credited |
| CC-BY-SA | Free reuse with attribution; derivatives must stay under the same licence (this is Wikipedia's licence) |
| CC-BY-NC | Free non-commercial reuse, with attribution |

### Applying the licence

Add a `LICENSE` (or `LICENSE.md`) file at the root of your repo
with the full text of the chosen licence, and mention it in your
README. A project with no licence notice is, by default, considered
"all rights reserved": nobody can legally reuse it, even
if it is publicly visible on GitHub.

## Crediting the sources you reuse

For every external element you reuse (code, schematic, image, idea taken
from an existing project): name the source, give a link, and respect its
licence if it has one. See also
[Researching existing solutions and studying feasibility](/workshops/methodologie-de-projet/concepts/rechercher-existant-faisabilite/)
for the research practice that comes before this step.

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| I found useful code on GitHub, with no LICENSE file | By default = "all rights reserved", even if the repository is public | Contact the author to ask for permission, or look for an equivalent project with a clear licence |
| I do not know whether my school project belongs to me | Intellectual property policy specific to each institution | Ask your academic supervisor before choosing a licence |
| I reused a schematic without noting the source at the time | A common oversight in the middle of a project | Add the source as soon as you realise, better late than never |
| I want to protect an idea before it gets "stolen" | A common confusion between idea and implementation: an idea alone cannot be protected, only its concrete implementation can | Document and date what you have built (it also serves as proof of prior art) rather than trying to hide the idea |
