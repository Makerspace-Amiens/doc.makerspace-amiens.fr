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

title: Markdown syntax
subtitle: Write documentation without ever touching HTML
description: The basics of Markdown syntax, enough to write all the documentation of your project.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 70

prerequisites:
  - label: No prerequisites
    link: ""
softwares:
  - label: A text editor (VSCode for example)
    link: "https://code.visualstudio.com"
hardwares:
  - label: No machine required
    link: ""
---

## Why Markdown

All the documentation of your project (`docs/`) is written in Markdown: a
lightweight markup language, in plain text, which is turned automatically
into formatted web pages. No need to know HTML: a few
symbols are enough.

### A text that stays readable even when not converted

Markdown was created in 2004 by John Gruber, with the help of Aaron Swartz,
with a precise goal:
that a text written in Markdown should stay **readable and understandable as it is**,
even without being turned into a web page, unlike HTML.

{% capture tab_html %}

```html
<h2>Objectives</h2>
<p>Design a robot able to sort <strong>3 categories</strong>
of waste, for a demonstration at the Forum des Sciences.</p>
<ul>
  <li>Plastic</li>
  <li>Glass</li>
  <li>Metal</li>
</ul>
```

{% endcapture %}

{% capture tab_md %}

```markdown
## Objectives

Design a robot able to sort **3 categories** of waste, for
a demonstration at the Forum des Sciences.

- Plastic
- Glass
- Metal
```

{% endcapture %}

{% include content-tabs.html
  id="html-vs-markdown"
  tab_title1="❌ HTML"
  tab_title2="✅ Markdown"
  tab1=tab_html
  tab2=tab_md
%}

The same content, but the Markdown can be read directly: no need to
mentally strip out tags to understand the text.

### Why not Word or Google Docs

- **Plain text file**: Git tracks it like any code
  file, with a clear line-by-line history. Try producing a
  readable diff of a `.docx` to see the difference.
- **No proprietary format**: an `.md` file opens with absolutely
  any text editor, on any system, and still will
  in 20 years. A `.docx` depends on Word (or compatible software)
  to stay readable.
- **Lives in the same place as the rest of the project**: the documentation is
  versioned in the same repo as the code and the CAD files, not
  lost in a separate Drive. This ties in directly with
  [Documenting as you go](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/).

### Where you will meet it, beyond this project

Markdown is not specific to this site. It has become a kind of common
language of technical documentation:

- **GitHub and GitLab**: READMEs, Issues, Pull Requests, comments
  (everything you have already written in the previous tutorials).
- **Discord and Slack**: message formatting (`**bold**`,
  `*italic*`, `` `code` ``) largely follows Markdown syntax.
- **Notion, Obsidian** and most recent note-taking tools.
- **Static site generators**: this site runs on Jekyll,
  but Hugo, Docusaurus or MkDocs (widely used for technical
  documentation in companies) work on the same principle.
- **Jupyter Notebook and R Markdown**, in scientific research, to
  mix explanatory text and executable code.
- **Reddit, Stack Overflow** and a good share of technical forums.

Learning Markdown now gives you a skill you can reuse
directly well beyond this workshop.

## The basics

### Headings

```markdown
# Level 1 heading
## Level 2 heading
### Level 3 heading
```

{% include message.html title="Only one level 1 per page" message="On this site, the level 1 heading is generated automatically from the title field of the front matter. Always start the body of your pages at ##, never at #." status="is-warning" icon="fas fa-exclamation-triangle" %}

### Text formatting

{% capture tab1 %}

```markdown
**Bold text**
*Italic text*
***Bold and italic***
```

{% endcapture %}

{% capture tab2 %}

**Bold text**
*Italic text*
***Bold and italic***

{% endcapture %}

{% include content-tabs.html
  id="markdown-emphase"
  tab_title1="Source"
  tab_title2="Result"
  tab1=tab1
  tab2=tab2
%}

### Lists

{% capture tab3 %}

```markdown
- Item 1
- Item 2
  - Sub-item

1. First
2. Second
```

{% endcapture %}

{% capture tab4 %}

- Item 1
- Item 2
  - Sub-item

1. First
2. Second

{% endcapture %}

{% include content-tabs.html
  id="markdown-listes"
  tab_title1="Source"
  tab_title2="Result"
  tab1=tab3
  tab2=tab4
%}

### Links and images

```markdown
[Link text](https://example.com)
![Alternative text](path/to/image.png)
```

### Quotes and code

{% capture tab5 %}

````markdown
> A quote.

Some `inline code`.

```cpp
void setup() {
  pinMode(13, OUTPUT);
}
```
````

{% endcapture %}

{% capture tab6 %}

> A quote.

Some `inline code`.

```cpp
void setup() {
  pinMode(13, OUTPUT);
}
```

{% endcapture %}

{% include content-tabs.html
  id="markdown-code"
  tab_title1="Source"
  tab_title2="Result"
  tab1=tab5
  tab2=tab6
%}

{% include message.html title="Always name the language" message="After the three opening backticks, give the language (`cpp`, `python`, `bash`...): it turns on syntax highlighting. See the \"Code in your documentation\" section below." status="is-info" icon="fas fa-info-circle" %}

### Tables

```markdown
| Header 1 | Header 2 |
|---|---|
| Cell 1 | Cell 2 |
```

This is the format used for most of the templates in this workshop. See
for example the table of milestones in
[Managing time and milestones](/workshops/methodologie-de-projet/concepts/gerer-temps-jalons/).

## Code in your documentation

A project's documentation often contains code: a firmware
excerpt, a command to type, a configuration file. Markdown has two
ways of writing it.

| | Inline code | Code block |
|---|---|---|
| How to write it | One backtick on each side: `` `word` `` | Three backticks on a line of their own, before and after the code |
| Use it for | A word or a short expression in the middle of a sentence | Several lines to read or copy |
| Examples | `platformio.ini`, `pinMode()`, `docs/_config.yml` | A firmware excerpt, a series of commands |

After the three opening backticks of a block, always write the
**language**: `cpp` for Arduino or ESP32 code, `python`, `bash` for
commands, `text` for anything that is not code. It turns on syntax
highlighting (keywords, strings and comments in colour).

A convention to follow throughout your documentation: what you **read or
type** (file names, commands, functions, values) goes in `code`, what
you **click** (buttons, menus) goes in **bold**. For example: open
**File > Export**, then save the file as `projet.step`.

To show a code block inside another one (as the examples in this
tutorial do), surround the whole with **four** backticks instead of
three: otherwise, the first three inner backticks close the block too early.

{% include message.html title="And for presenting code well?" message="Which excerpt to show, how to introduce it, which languages to use depending on the project files, how to present a command and its response: all that is in [Documenting your code and firmware](/workshops/methodologie-de-projet/tutorials/documenter-code-firmware/)." status="is-info" icon="fas fa-info-circle" %}

## Going further on your project's Jekyll site

Your project's Jekyll site (`docs/` folder of your repo) is based
on the [Just the Docs](https://just-the-docs.com) theme, which adds a few
useful extras to standard Markdown that you can use directly in your
pages. It is worth browsing its documentation to see all
the possibilities; here are two examples to whet your appetite:

**A coloured callout**, without writing HTML: add `{: .note }` (blue) or
`{: .warning }` (red) just before a quote.

```markdown
{: .warning }
> Never forget to test your prototype before the demonstration.
```

These two callouts are already defined in the template's configuration
(`docs/_config.yml`, `callouts` entry). It defines two more, which are used to
flag what remains to be done: `{: .a_modifier }` (yellow) for example
content to replace, `{: .a_supprimer }` (red) for instructions to
remove before the submission. See
[Customising your project template](/workshops/methodologie-de-projet/tutorials/personnaliser-template/).

**A link turned into a button**: add `{: .btn }` after a link.

```markdown
[See the project on Onshape](https://cad.onshape.com/...){: .btn .btn-blue }
```

The "Notre projet sur Onshape" button on the home page of your
template already uses this syntax. Open `docs/index.md` to see
the real example.

**A diagram**, written as text: a code block whose language is `mermaid`.
The template contains one in `docs/conception/index.md` (block diagram of the
project) and one in `docs/etudes.md` (FAST diagram): edit them
directly in the file.

**A mathematical formula**, between two `$$`: see
[Documenting tests and results](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/).

## Exercise

Open your project's `docs/objectifs.md` (filled in during the tutorial on the
specification) and check that it uses headings, a
list, and at least one link correctly. Fix it if needed.

---

*Image credit: "Markdown" icon by [Icons8](https://icons8.com/icon/pSIyj3XGA9SW/markdown), used under the [Icons8 free licence](https://icons8.com/license) (link to [icons8.com](https://icons8.com) required).*
{: .is-size-7 .has-text-grey }
