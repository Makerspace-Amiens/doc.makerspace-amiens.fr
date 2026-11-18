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

title: Documenting tests and results
subtitle: The proof that the project works, not just the claim
description: Write a simple test protocol and present measured results, to prove (not just claim) that your project meets the need.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Have a testable prototype
    link: ""
softwares:
  - label: No software required
    link: ""
hardwares:
  - label: No machine required
    link: ""
---

## The great forgotten part of documentation

A lot of project documentation stops at "here is how it works",
without ever showing "here is the measured proof that it really works". Yet
tests and their results are what separates a claim
from a proof.

## Starting again from the success criteria

Your tests are not invented at the last minute: they follow directly
from the success criteria of the specification. See
[Defining your need](/workshops/methodologie-de-projet/concepts/definir-son-besoin/)
and its table of functions. If the criterion is "sorting rate ≥ 80% over 20
trials", the test literally consists of running the 20 trials and counting.

## A simple test protocol

The `docs/tests.md` page of your template follows this structure: a
**summary** table at the top (criterion, expected value, measured value, validated or
not), then one section per test. Duplicate the example section for each
criterion of your specification.

{% capture snippet_protocole %}## Test: rate of correct sorting

**Target criterion:** ≥ 80% over 20 trials (see the specification)

**Method:** place 20 known items of waste (a mix of plastic/glass/metal)
one by one on the belt, and note the category detected by the robot.

**Conditions:** lighting of the Forum des Sciences (simulated with ...),
room temperature.

## Results

| Trial | Real waste | Detection | Correct? |
|---|---|---|---|
| 1 | Plastic | Plastic | ✅ |
| 2 | Glass | Metal | ❌ |
| ... | ... | ... | ... |

**Result:** 17/20 = 85%; criterion met.
{% endcapture %}
{% include code-snippet.html label="Copy the protocol template (Markdown)" content=snippet_protocole %}

## Presenting the results clearly

- **A table** for repeated measurements (as above).
- **A short video** for dynamic behaviour (a mechanism that
  moves, a system in operation): often more telling than a
  written description.
- **A chart** if you have continuous measurements (temperature over
  time, speed against load). The template can plot one from
  a CSV file (see just below).

### Plotting a chart from a CSV file

Export your measurements as CSV (spreadsheet, serial monitor...) with a header
row: the first column is used as the X axis, each other column is a
curve, and the column names are used as the legend. Put the file in
`docs/assets/data/`, then in your page:

{% raw %}
```liquid
{% include graphique.html csv="assets/data/mesures.csv" titre="Battery discharge" y="Voltage (V)" %}
```
{% endraw %}

The `type="bar"` option plots a bar chart, `type="scatter"` points
only. A download link for the CSV is displayed below the chart. The
template contains a complete example in `docs/tests.md`, to be replaced by
your measurements.

{% include message.html title="Show the failures too" message="A test that fails (3 failed trials out of 20 in the example above) is not to be hidden. Note under what conditions it fails: that is information as useful as the success rate, and it ties in with the \"Known limitations\" section seen in Making your project transferable." status="is-info" icon="fas fa-info-circle" %}

## Proving by calculation, not only by measurement

A measured result only takes on its full meaning when compared with an expected
value. For anything to do with mechanics, electricity or
energy, that value is calculated in advance: this is the **derivation**.
It answers "why should it work?" before the test answers
"does it work?".

When you compare the calculation and the measurement, three cases are possible:

- **They agree**: you have solid proof, and the formula tells you
  how far you can push (maximum load, battery life, speed...).
- **They differ a little**: a gap is normal (friction, tolerances,
  imperfect components), provided you quantify and explain it.
- **They differ a lot**: one of your assumptions is wrong. That is
  valuable information, to be documented as a failure (see the box
  above).

A readable derivation always follows the same five steps:

1. **Assumptions**: what you assume (full battery, constant current,
   friction neglected...).
2. **Formula**: the physical law or the relation used, with the meaning of
   each symbol and its unit.
3. **Symbolic calculation**: isolate the quantity you are looking for *before* replacing
   with numbers.
4. **Numerical application**: replace with the values, keeping the
   units.
5. **Comparison with the measurement**: gap, explanation, conclusion.

{% include message.html title="A calculation is not a measurement" message="The calculation gives the value in an ideal world, the measurement gives that of your real prototype. Neither replaces the other: the calculation explains, the measurement confirms." status="is-info" icon="fas fa-info-circle" %}

## Writing a formula in a Markdown page

Markdown cannot write mathematics. Your project's site
relies on **MathJax**, a library that reads a formula written in
**LaTeX** (the formula language of scientists) and draws it in the
browser. So you write only text, and the formatting is done
at display time. The route, from your file to the screen:

1. You write the formula in LaTeX, between two `$$`, in your
   `.md` file.
2. Jekyll (the site generator) spots the `$$` and sets the formula
   aside, without applying the Markdown rules to it: the `_` and `*`
   of a formula therefore do not become italics.
3. MathJax, loaded in every page, spots these formulas and draws them.

**Always two `$$`, never a single `$`.** A single `$` is not recognised:
the formula would be displayed as plain text, and Markdown could even
distort it (an `*x*` would become italic).

Depending on where you place the `$$`, the formula stays in the text or
stands apart, centred:

| You want | You write | Result |
|---|---|---|
| A formula **in a sentence** | the `$$` in the middle of a line of text | the formula stays in the line |
| A **centred** formula, set apart | the `$$` alone on their line, with **an empty line before and one after** | the formula is centred, on its own line |

The empty line is essential: without it, the formula stays attached to the
previous paragraph and becomes an "in the text" formula again.

Here is what you write in the file:

```markdown
With a battery of capacity $$C = 2000\ \text{mAh}$$ and an average current
of $$I_{\text{avg}} = 570\ \text{mA}$$, the theoretical battery life is:

$$
t = \frac{C}{I_{\text{avg}}} = \frac{2000}{570} \approx 3.5\ \text{h}
$$
```

And here is what the reader sees:

With a battery of capacity $$C = 2000\ \text{mAh}$$ and an average current
of $$I_{\text{avg}} = 570\ \text{mA}$$, the theoretical battery life is:

$$
t = \frac{C}{I_{\text{avg}}} = \frac{2000}{570} \approx 3.5\ \text{h}
$$

### The most useful commands

| To write | You type | Result |
|---|---|---|
| A fraction | `\frac{a}{b}` | $$\frac{a}{b}$$ |
| An exponent | `x^{2}` | $$x^{2}$$ |
| A subscript | `I_{\text{avg}}` | $$I_{\text{avg}}$$ |
| A square root | `\sqrt{x}` | $$\sqrt{x}$$ |
| Multiply, approximately, compare | `\times` `\approx` `\geq` `\leq` | $$\times\ \approx\ \geq\ \leq$$ |
| Greek letters | `\tau` `\Omega` `\pi` `\Delta` | $$\tau\ \Omega\ \pi\ \Delta$$ |
| A value with its unit | `2000\ \text{mAh}` | $$2000\ \text{mAh}$$ |
| A decimal comma (French notation) | `3{,}5` | $$3{,}5$$ |
| A percentage | `85\,\%` | $$85\,\%$$ |

Three classic pitfalls:

- **The decimal comma**, if you write your numbers the French way, is written `{,}`: with a
  bare comma, LaTeX adds a space after it and `3,5` is displayed as "3, 5".
- **The percentage** is written `\%`: a bare `%` is taken for a
  comment, and the rest of the line is ignored.
- **Words and units** go in `\text{...}`: without it, `mAh` is
  displayed in italics like a product of three variables `m`, `A` and `h`.
  A space is written with a backslash followed by a space (as in
  `2000\ \text{mAh}`) or with `\,` (thin space).

{% include message.html title="The formula is displayed as it is?" message="If you see the `$$` and the `\frac` as plain text, MathJax is not loaded in your site. Check that the file `docs/_includes/head_custom.html` contains the line below (create it, along with the `_includes` folder, if it does not exist). If it already exists, add the line at the end without deleting anything." status="is-warning" icon="fas fa-exclamation-triangle" %}

```html
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js"></script>
```

To go further (the basics of Markdown are in
[Markdown syntax](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/)):

- [MathJax documentation](https://docs.mathjax.org/en/latest/): the
  official reference.
- [TeX/LaTeX commands recognised by MathJax](https://docs.mathjax.org/en/latest/input/tex/macros/index.html):
  the complete list of usable commands.
- [MathJax cheat sheet (Mathematics Stack Exchange)](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference):
  a widely used tutorial and quick reference.
- [Greek letters and mathematical symbols (Overleaf)](https://www.overleaf.com/learn/latex/List_of_Greek_letters_and_math_symbols):
  to find the command for a symbol.

## Complete example: the battery life of the sorting robot

Let us take the criterion "battery life ≥ 4 h" and go through the five steps of the
derivation.

**1. Assumptions.** Full battery, constant average current for the whole
duration, usable capacity equal to the rated capacity (no loss).

**2. Formula.** The capacity of a battery is the electric charge it
can supply: it equals the current multiplied by the duration.

$$
C = I_{\text{avg}} \times t
$$

with $$C$$ the capacity (in mAh), $$I_{\text{avg}}$$ the average current (in mA) and
$$t$$ the duration (in h).

**3. Symbolic calculation.** We isolate $$t$$, the quantity we are looking for. The `&` align
the equals signs and `\\` starts a new line:

```markdown
$$
\begin{aligned}
C &= I_{\text{avg}} \times t \\
t &= \frac{C}{I_{\text{avg}}}
\end{aligned}
$$
```

$$
\begin{aligned}
C &= I_{\text{avg}} \times t \\
t &= \frac{C}{I_{\text{avg}}}
\end{aligned}
$$

**4. Numerical application.** We replace, units included:

$$
t = \frac{2000\ \text{mAh}}{570\ \text{mA}} \approx 3.5\ \text{h}
$$

The units do simplify to hours ($$\text{mAh} / \text{mA} = \text{h}$$):
it is a free check. If you get a unit other than the one
expected, the formula is wrong.

**5. Comparison with the measurement.** The test gives 3 h 30, that is $$3.5\ \text{h}$$:
the calculation and the measurement agree, the model is good. But the criterion of the
specification (≥ 4 h) is not met, and the same formula says what
to change:

$$
I_{\text{avg}} \leq \frac{C}{t_{\text{target}}} = \frac{2000}{4} = 500\ \text{mA}
\qquad \text{or} \qquad
C \geq I_{\text{avg}} \times t_{\text{target}} = 570 \times 4 = 2280\ \text{mAh}
$$

So you need to bring the average consumption down from 570 mA to 500 mA (putting
the sensor to sleep between two items of waste, for example), or move to a battery
of at least 2280 mAh. It is this derivation, and not only the measured
figure, that makes your choice of solution credible.

{% capture snippet_demo %}## Derivation: theoretical battery life

**Assumptions**: full battery, constant average current, no loss.

**Formula**:

$$
t = \frac{C}{I_{\text{avg}}}
$$

with $$C$$ the capacity (mAh), $$I_{\text{avg}}$$ the average current (mA) and
$$t$$ the duration (h).

**Numerical application**:

$$
t = \frac{... \text{ mAh}}{... \text{ mA}} \approx ...\ \text{h}
$$

**Measurement**: ... h. **Gap**: ... %. **Conclusion**: ...
{% endcapture %}
{% include code-snippet.html label="Copy the derivation template (Markdown)" content=snippet_demo %}

## Exercise

Choose a success criterion from your specification, write its
test protocol with the template above, actually run it, and
note the results, failures included.

If your criterion is numerical (a mass lifted, a current, a speed,
a duration...), first write the derivation that predicts the result, with
the formulas, then compare it with what you measured.
