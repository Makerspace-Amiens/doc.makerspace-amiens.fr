---
layout: slides
lang: en
title: Additive manufacturing
subtitle: "Part 2: technologies and materials"
description: Course slides on 3D printing technologies (fused filament, resin, powder) and filaments, with the MakerSpace machines.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/fab-additive/
---

## On the agenda

1. Three main families
2. Fused filament (FDM)
3. Resin (SLA)
4. Powder and the other processes
5. Materials

<aside class="notes" markdown="1">
The written version of the course is the concept page "Printing technologies".
</aside>

---

## Three main families

| | Fused filament (FDM) | Resin (SLA) | Powder (SLS) |
|---|---|---|---|
| **Material** | Plastic filament | Liquid resin | Fine powder |
| **Hardened by** | Cooling | UV light | Laser (sintering) |
| **For** | Functional parts | Fine details, jewellery | Industrial parts |
| **Strength** | Affordable, simple | Precision, smooth surface | No supports |
| **Limit** | Visible layers | Toxic, post-processing | High cost |
{: .table-dense}

[Three main families](/docs/concepts/3d-printing-technologies/#three-main-families){: .doc-link}

---

## No universal technology

![Failed FDM print, a tangle of filament](/workshops/fab-additive/slides/technologies-materiaux/impression-ratee.jpg){: .img-md}

Each process has its advantages, its limits and its failures: you choose according to the need.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## Fused filament (FDM)

The most widespread technology, and the one used by most MakerSpace printers

---

## The principle

<div class="columns" markdown="1">
<div markdown="1">

![Molten filament deposited layer by layer](/docs/concepts/3d-printing-technologies/slide_68_image_4.png){: .img-md}

</div>
<div markdown="1">

- **1.75 mm** filament melted in a nozzle
- Laid down in beads, layer by layer
- Layers of **0.05 to 0.3 mm**
- Safer than resin

</div>
</div>

[Fused filament deposition](/docs/concepts/3d-printing-technologies/#fused-filament-deposition-fdm--fff){: .doc-link}

<aside class="notes" markdown="1">
FDM (Fused Deposition Modeling) is a Stratasys trademark; the free term, which comes from RepRap, is FFF (Fused Filament Fabrication). Layers of 0.05 to 0.3 mm with a 0.4 mm nozzle; they remain visible to the naked eye.
</aside>

---

## Four machine architectures

| Architecture | Strength | Limit | At the MakerSpace |
|---|---|---|---|
| Bed slinger | Simple, inexpensive | Inertia of the bed | Artillery |
| Cantilever | Compact, light | Arm flexing | Bambu Lab A1 Mini |
| CoreXY | Fast, precise | Belts to adjust | Bambu Lab P1P, X1C |
| Delta | Fast, tall build | Tricky calibration | |
{: .table-dense}

The following slides show each architecture in motion.
{: .caption}

[Machine architectures](/docs/concepts/3d-printing-technologies/#machine-architectures){: .doc-link} [Bambu Lab P1P](/docs/references/machines/bambulab_p1p/){: .doc-link} [Bambu Lab A1 Mini](/docs/references/machines/bambulab_a1_mini/){: .doc-link}

---

## Bed slinger: the bed moves

<div class="columns" markdown="1">
<div markdown="1">

![Diagram of a bed slinger printer](/docs/concepts/3d-printing-technologies/slide_69_image_4.png){: .img-md}

</div>
<div markdown="1">

![Bed slinger printer](/docs/concepts/3d-printing-technologies/slide_69_image_5.png){: .img-md}

</div>
</div>

Three orthogonal axes X, Y, Z; the bed moves along Y. Simple, but its mass limits the speed.
{: .caption}

---

## Cantilever: the head on a single arm

<div class="columns" markdown="1">
<div markdown="1">

![Cantilever printer](/docs/concepts/3d-printing-technologies/slide_70_image_4.jpg){: .img-md}

</div>
<div markdown="1">

![Cantilever printer](/docs/concepts/3d-printing-technologies/slide_70_image_5.jpg){: .img-md}

</div>
</div>

A minimalist, light and cheap structure; the arm can flex or vibrate on large formats.
{: .caption}

---

## CoreXY: two motors for X and Y

<div class="columns is-3" markdown="1">
<div markdown="1">

![Belts of a CoreXY kinematic system](/docs/concepts/3d-printing-technologies/slide_71_image_7.png){: .img-md}

Two crossed belts
{: .caption}

</div>
<div markdown="1">

![Both motors turning the same way](/docs/concepts/3d-printing-technologies/slide_72_image_3.gif){: .img-md}

Same direction: X
{: .caption}

</div>
<div markdown="1">

![Both motors turning opposite ways](/docs/concepts/3d-printing-technologies/slide_72_image_4.gif){: .img-md}

Opposite directions: Y
{: .caption}

</div>
</div>

Only the light head moves in X and Y; the bed only moves down in Z.
{: .caption}

[CoreXY theory](https://corexy.com/theory.html){: .doc-link}

---

## CoreXY: examples

<div class="columns" markdown="1">
<div markdown="1">

![Enclosed CoreXY printer](/docs/concepts/3d-printing-technologies/slide_71_image_4.jpg){: .img-md}

Enclosed CoreXY machine
{: .caption}

</div>
<div markdown="1">

![Bambu Lab P1P](/docs/concepts/3d-printing-technologies/slide_71_image_5.jpg){: .img-md}

Bambu Lab P1P, at the MakerSpace
{: .caption}

</div>
</div>

Faster and more precise, but more expensive and sensitive to belt adjustment.
{: .caption}

[Bambu Lab P1P](/docs/references/machines/bambulab_p1p/){: .doc-link} [Bambu Lab X1C](/docs/references/machines/bambulab_x1c/){: .doc-link}

---

## Delta: three arms

<div class="columns" markdown="1">
<div markdown="1">

![Diagram of a delta printer](/docs/concepts/3d-printing-technologies/slide_73_image_4.png){: .img-md}

</div>
<div markdown="1">

![Delta printer](/docs/concepts/3d-printing-technologies/slide_73_image_5.png){: .img-md}

</div>
</div>

Three arms on three columns move the head together: fast and tall, but a round bed and tricky calibration.
{: .caption}

---

## Extrusion: direct drive or Bowden

<div class="columns" markdown="1">
<div markdown="1">

![Direct drive and Bowden](/docs/concepts/3d-printing-technologies/slide_75_image_4.png){: .img-md}

</div>
<div markdown="1">

**Direct drive**: the motor sits on the head. Better control, ideal for flexible filaments (TPU), but a heavier head.

**Bowden**: the motor is remote and pushes the filament through a tube. A light, fast head, but poorly suited to flexible filaments.

</div>
</div>

[Direct drive and Bowden](/docs/concepts/3d-printing-technologies/#direct-drive-or-bowden){: .doc-link}

<aside class="notes" markdown="1">
The extrusion assembly: a motor, drive wheels that grip and push the filament, and the hotend that melts it.
</aside>

---

## The extruder

<div class="columns is-3" markdown="1">
<div markdown="1">

![Extruder mounted on a stepper motor](/docs/concepts/3d-printing-technologies/slide_76_image_4.jpg){: .img-md}

Motor and extruder
{: .caption}

</div>
<div markdown="1">

![Gears of a dual-drive extruder](/docs/concepts/3d-printing-technologies/slide_76_image_5.jpg){: .img-md}

Dual drive
{: .caption}

</div>
<div markdown="1">

![Extruder inside a print head](/docs/concepts/3d-printing-technologies/slide_76_image_6.jpg){: .img-md}

Built into the head
{: .caption}

</div>
</div>

It pushes the filament and sets the flow, without jamming, even with TPU.
{: .caption}

[The extruder](/docs/concepts/3d-printing-technologies/#the-extruder){: .doc-link}

---

## The hotend

<div class="columns" markdown="1">
<div markdown="1">

![Cross-section of a hotend](/docs/concepts/3d-printing-technologies/slide_77_image_4.png){: .img-md}

</div>
<div markdown="1">

1. PTFE tube
2. Heatsink
3. Fan
4. Heat break
5. Heater block
6. Nozzle

</div>
</div>

The block heats to 180-260 °C; above the heat break, the filament stays cold.
{: .caption}

[The hotend](/docs/concepts/3d-printing-technologies/#the-hotend){: .doc-link}

---

## The nozzle

| Diameter | Advantage | Limit |
|---|---|---|
| 0.2 mm | Fine details | Slow printing |
| **0.4 mm** | **The standard: a good compromise** | |
| 0.6 to 1 mm | Large parts, fast | Less fine detail |
{: .table-dense}

- **Brass**: the standard (PLA, PETG, ABS), but wears quickly with filled filaments
- **Hardened steel**: for abrasive filaments (carbon, metal)

[The nozzle](/docs/concepts/3d-printing-technologies/#the-nozzle){: .doc-link}

---

## Nozzles

<div class="columns" markdown="1">
<div markdown="1">

![Brass nozzles](/docs/concepts/3d-printing-technologies/slide_78_image_4.jpg){: .img-md}

Brass nozzles: the standard
{: .caption}

</div>
<div markdown="1">

![Nozzles of different materials and sizes](/docs/concepts/3d-printing-technologies/slide_79_image_4.jpg){: .img-md}

Brass, hardened steel, coatings
{: .caption}

</div>
</div>

[The nozzle](/docs/concepts/3d-printing-technologies/#the-nozzle){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Resin (SLA)

Solidifying a liquid with light

---

## The principle

<div class="columns" markdown="1">
<div markdown="1">

![Resin part coming out of the printer](/docs/concepts/3d-printing-technologies/slide_81_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- A **photosensitive** resin hardens under UV light
- The platform rises by one layer at each pass
- Almost invisible layers, smooth surface
- Small volume, slower printing

</div>
</div>

[Vat photopolymerisation](/docs/concepts/3d-printing-technologies/#vat-photopolymerisation-sla-dlp-msla){: .doc-link}

---

## Inside a resin printer

<div class="columns" markdown="1">
<div markdown="1">

![Diagram of an SLA printer](/workshops/fab-additive/slides/technologies-materiaux/schema-sla.png){: .img-md}

</div>
<div markdown="1">

1. Build platform
2. Lead screw
3. Z axis
4. Resin tank
5. Liquid resin
6. Stepper motor
7. Printed object

</div>
</div>

[Principle of resin printing](/docs/concepts/3d-printing-technologies/#principle-1){: .doc-link}

<aside class="notes" markdown="1">
The platform goes down into the resin, leaving a thin layer against the bottom of the tank; the UV light solidifies it; the platform rises slightly; and so on until the object is finished. The object is therefore printed upside down.
</aside>

---

## Three ways of lighting the resin

| Process | Light source | Time per layer | Resolution |
|---|---|---|---|
| Laser SLA | Laser steered by two mirrors | Depends on the area | Fineness of the laser |
| DLP | Digital projector | Constant | That of the projector |
| MSLA | UV LED and masking LCD screen | Constant | That of the screen |
{: .table-dense}

At the MakerSpace: the Phrozen Sonic Mighty 4K, an MSLA printer. DLP and MSLA expose the whole layer at once.
{: .caption}

[Phrozen Sonic Mighty 4K](/docs/references/machines/phrozen_mighty_4k/){: .doc-link}

---

## Laser SLA

![Principle of laser SLA](/docs/concepts/3d-printing-technologies/slide_84_image_4.png){: .img-md}

The laser "draws" each layer: very precise, but the more parts there are, the longer it takes.
{: .caption}

---

## DLP

![Principle of DLP](/docs/concepts/3d-printing-technologies/slide_85_image_5.png){: .img-md}

A projector exposes the whole layer at once: constant time, resolution limited by the projector.
{: .caption}

---

## MSLA

![Principle of MSLA](/docs/concepts/3d-printing-technologies/slide_86_image_5.png){: .img-md}

An LCD screen masks the light from a UV LED: fast and affordable, but the screen wears out over time.
{: .caption}

---

## After printing: wash, cure, protect yourself

1. **Wash** the part in isopropyl alcohol (IPA) to remove the liquid resin
2. **Cure** the part under UV to finish the polymerisation

- **Nitrile gloves** mandatory: liquid resin irritates and sensitises the skin
- **Ventilation**: IPA is flammable, and its vapours, like those of resin, are irritating

At the MakerSpace, resin is a level 2 safety module: supervised sessions.
{: .caption}

[Resin safety module](/workshops/certification-securite/modules/resine/){: .doc-link} [UV wash and cure station](/docs/references/machines/station-lavage-polymerisation-uv/){: .doc-link}

---

## Wash, then cure

![Wash station on the left, UV curing station on the right](/workshops/fab-additive/slides/technologies-materiaux/lavage-polymerisation-uv.jpg){: .img-md}

A wash station in IPA, then a UV curing station: consistent results.
{: .caption}

[UV wash and cure station](/docs/references/machines/station-lavage-polymerisation-uv/){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Powder and the other processes

Sintering, binder, material jetting

---

## Laser sintering (SLS)

<div class="columns" markdown="1">
<div markdown="1">

![Sintered part in its powder bed](/docs/concepts/3d-printing-technologies/slide_88_image_0.jpg){: .img-md}

</div>
<div markdown="1">

1. A roller spreads a thin layer of powder
2. The laser sinters the shape of the layer
3. The bed moves down, and it starts again

</div>
</div>

The surrounding powder supports the part: **no supports**, and the unsintered powder is reused. DMLS applies the same principle to metals.
{: .caption}

[Powder bed fusion](/docs/concepts/3d-printing-technologies/#powder-bed-fusion-sls-dmls){: .doc-link}

---

## Inside an SLS machine

<div class="columns" markdown="1">
<div markdown="1">

![Diagram of an SLS machine](/docs/concepts/3d-printing-technologies/slide_89_image_4.png){: .img-md}

</div>
<div markdown="1">

![SLS parts taken out of the powder](/docs/concepts/3d-printing-technologies/slide_88_image_6.jpg){: .img-md}

</div>
</div>

The machines cost at least €5,500: a mostly industrial process (automotive, aerospace, medical).
{: .caption}

---

## Depowdering the parts

![SLS part extracted and cleaned of its powder](/docs/concepts/3d-printing-technologies/slide_88_image_5.jpg){: .img-md}

Each part is taken out of the bin, then cleared of the unsintered powder, which will be reused.
{: .caption}

---

## Binder Jetting and PolyJet

<div class="columns" markdown="1">
<div markdown="1">

![Binder Jetting parts](/docs/concepts/3d-printing-technologies/slide_91_image_5.jpg){: .img-md}

**Binder Jetting**: powder and binder
{: .caption}

</div>
<div markdown="1">

![PolyJet parts](/docs/concepts/3d-printing-technologies/slide_92_image_4.jpg){: .img-md}

**PolyJet**: multicolour resin
{: .caption}

</div>
</div>

[Other processes](/docs/concepts/3d-printing-technologies/#other-processes){: .doc-link}

---

## Binder Jetting

<div class="columns" markdown="1">
<div markdown="1">

![Binder Jetting print head depositing the binder](/docs/concepts/3d-printing-technologies/slide_91_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- A layer of powder: metal, sand, ceramic
- A head deposits a **binder** where needed
- Fast: the whole layer at once
- The part is then sintered or infiltrated

</div>
</div>

[Binder Jetting](/docs/concepts/3d-printing-technologies/#binder-jetting){: .doc-link}

---

## PolyJet

<div class="columns" markdown="1">
<div markdown="1">

![PolyJet printer during a print](/docs/concepts/3d-printing-technologies/slide_92_image_5.jpg){: .img-md}

</div>
<div markdown="1">

- Droplets of **resin** are jetted
- Cured at once by UV
- 16 micron layers
- Mixed colours and materials

</div>
</div>

[PolyJet](/docs/concepts/3d-printing-technologies/#polyjet){: .doc-link}

---

## Activity: which technology to choose?

<p class="activity-meta"><span><i class="fas fa-user-friends"></i>Pairs</span><span><i class="far fa-clock"></i>3 min</span></p>

1. A highly detailed 3 cm figurine<span class="fragment">: **resin (MSLA)**</span>
2. A sensor mount to fix onto a chassis<span class="fragment">: **fused filament (PETG)**</span>
3. 50 nylon gears for a small series<span class="fragment">: **sintering (SLS)**</span>
4. A realistic multicolour model for a trade show<span class="fragment">: **PolyJet**</span>

For each case, one technology and one reason.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## Materials

To each technology its material

---

## Families of materials

| Technology | Material | Examples |
|---|---|---|
| FDM | Filaments | PLA, PETG, TPU, ABS |
| SLA, DLP, MSLA | Resins | Standard, flexible, high strength |
| SLS, Binder Jetting | Powders | Nylon, metals, ceramics |
| PolyJet | Photopolymers | Multi-material, colours |
{: .table-dense}

From here on, we focus on **filaments**: those of FDM printers.
{: .caption}

[Materials](/docs/concepts/3d-printing-technologies/#materials){: .doc-link}

---

## Filament, resin, powder

<div class="columns is-3" markdown="1">
<div markdown="1">

![Spool of filament](/docs/concepts/3d-printing-technologies/slide_94_image_4.jpg){: .img-md}

Filament (FDM)
{: .caption}

</div>
<div markdown="1">

![Bottle of resin and printed parts](/docs/concepts/3d-printing-technologies/slide_94_image_5.jpg){: .img-md}

Resin (SLA, MSLA)
{: .caption}

</div>
<div markdown="1">

![Bottle of powder](/docs/concepts/3d-printing-technologies/slide_94_image_6.jpg){: .img-md}

Powder (SLS)
{: .caption}

</div>
</div>

---

## Common filaments

| Filament | Nozzle | Strength | Limit |
|---|---|---|---|
| **PLA** | 190-220 °C | Easy, little warping | Brittle, dislikes heat |
| **PETG** | 220-250 °C | Strong, withstands moisture | Stringing |
| **TPU** | 200-250 °C | Flexible and elastic | Direct drive extruder |
| **ABS** | 220-250 °C | Impact and heat | Warping, fumes |
| **PVA** | 180-210 °C | Water-soluble support | Dislikes moisture |
{: .table-dense}

PLA to get started and for prototypes, PETG as soon as the part has to do real work.
{: .caption}

[Common filaments](/docs/concepts/3d-printing-technologies/#common-filaments){: .doc-link}

---

## PLA: polylactic acid

<div class="columns" markdown="1">
<div markdown="1">

![Spool of PLA and printed part](/docs/concepts/3d-printing-technologies/slide_96_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- **190-220 °C**
- Bio-based, easy to print
- Decorative objects, prototypes
- Brittle, dislikes heat

</div>
</div>

[Common filaments](/docs/concepts/3d-printing-technologies/#common-filaments){: .doc-link}

---

## PETG

<div class="columns" markdown="1">
<div markdown="1">

![Spool of PETG and printed part](/docs/concepts/3d-printing-technologies/slide_97_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- **220-250 °C**
- Strong, good layer adhesion
- Functional parts
- Dislikes moisture, strings

</div>
</div>

[Common filaments](/docs/concepts/3d-printing-technologies/#common-filaments){: .doc-link}

---

## TPU: the flexible filament

<div class="columns" markdown="1">
<div markdown="1">

![Spool of TPU and flexible part](/docs/concepts/3d-printing-technologies/slide_98_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- **200-250 °C**
- Flexible, elastic, very tough
- Seals, soles, dampers
- Needs a direct drive extruder

</div>
</div>

[Common filaments](/docs/concepts/3d-printing-technologies/#common-filaments){: .doc-link}

---

## ABS

<div class="columns" markdown="1">
<div markdown="1">

![ABS building bricks](/docs/concepts/3d-printing-technologies/slide_99_image_4.jpg){: .img-md}

LEGO bricks are made of ABS
{: .caption}

</div>
<div markdown="1">

![Spool of ABS and printed part](/docs/concepts/3d-printing-technologies/slide_99_image_5.jpg){: .img-md}

220-250 °C
{: .caption}

</div>
</div>

Withstands impact and heat; an enclosure and ventilation are recommended.
{: .caption}

[Common filaments](/docs/concepts/3d-printing-technologies/#common-filaments){: .doc-link}

---

## PVA: the soluble support

<div class="columns" markdown="1">
<div markdown="1">

![Part whose PVA support dissolves in water](/docs/concepts/3d-printing-technologies/slide_100_image_4.jpg){: .img-md}

The support dissolves in water
{: .caption}

</div>
<div markdown="1">

![Spool of PVA and complex part](/docs/concepts/3d-printing-technologies/slide_100_image_5.jpg){: .img-md}

180-210 °C, with dual extrusion
{: .caption}

</div>
</div>

Frees up geometries that could not be supported otherwise; store it dry.
{: .caption}

[Common filaments](/docs/concepts/3d-printing-technologies/#common-filaments){: .doc-link}

---

## Engineering filaments

| Filament | Use |
|---|---|
| **HIPS** | Soluble support (limonene) for ABS |
| **Nylon** | Gears, mechanical parts; dislikes moisture |
| **PC** | Very resistant to impact and heat |
| **PP** | Flexible, resists chemicals |
| **ASA** | A UV-resistant ABS: outdoor parts |
| **Composites** | PLA or ABS filled with wood, metal, carbon |
| **PEEK, PEI** | High performance, industrial printers |
{: .table-dense}

[Engineering filaments](/docs/concepts/3d-printing-technologies/#engineering-filaments){: .doc-link}

---

## Key takeaways

- No universal technology: **fused filament, resin, powder**
- In FDM, the architecture, the extrusion and the nozzle make the machine
- Resin gives fine details, at the cost of post-processing and precautions
- **PLA** to get started, **PETG** for a functional part, **TPU** for flexibility

Technology diagrams: "The basics of 3D printing", Prusa Research.
{: .caption}

[Part 3: the workflow](/workshops/fab-additive/slides/workflow-impression-3d/){: .doc-link} [The basics of 3D printing (Prusa)](/docs/references/others/bases-de-limpression-prusa/){: .doc-link}
