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
type: tutorial

title: Soldering an XT60, XT30 or XT90 connector
subtitle: Wire a power connector cleanly, from cutting the wire to the heat shrink tubing
description: Strip, tin and solder a wire into the cup of an XT60 (or XT30, XT90) connector, then insulate it with heat shrink tubing.
author: Adrien Bracq

time: 1
difficulty: 2

todo: 90

prerequisites:
  - label: Safety certification, soldering
    link: /workshops/certification-securite/modules/soudure/
softwares:
  - label: No software required
    link: ""
hardwares:
  - label: Weller WT 1010
    link: /docs/references/machines/weller-wt-1010/
  - label: Hot air station
    link: ""
---

## Goal

XT connectors (XT30, XT60, XT90) are the most common power connectors for linking a LiPo battery, a bench power supply or a motor controller. This tutorial shows how to solder a wire into an XT60 connector, then insulate it with heat shrink tubing. The method is the same for an XT30 or an XT90: only the wire gauge and the strip length change.

At the end, the connector holds mechanically, carries current without heating up and has no bare metal left.

{% include message.html title="Safety" message="The soldering iron and the hot air station run above 350 °C. Complete the [soldering module of the safety certification](/workshops/certification-securite/modules/soudure/) before starting, wear safety glasses and always put the iron back in its stand." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Choosing a connector

![Female XT60 connector](connecteur-xt60.jpg)

The number in the name roughly matches the peak current. The continuous current rating is lower:

| Connector | Continuous current | Peak current | Recommended wire | Strip length (approx.) |
|---|---|---|---|---|
| XT30 | 15 A | 30 A | 1 to 1.5 mm² (16 to 18 AWG) | 4 to 5 mm |
| XT60 | 30 A | 60 A | 2 to 3.3 mm² (12 to 14 AWG) | 6 mm |
| XT90 | 40 A | 90 A | 5 to 8 mm² (8 to 10 AWG) | 8 mm |

Indicative values: check the manufacturer's datasheet (Amass) when working close to the limits.

Two rules to know before soldering:

- **Polarity**: the `+` and `−` signs are moulded on the housing. The red wire goes to `+`, the black wire to `−`. One side of the housing is bevelled, so it cannot be plugged in backwards.
- **Male or female**: the energy source (battery, power supply) gets the **female** connector, whose contacts are shielded inside the housing. The male connector, with exposed pins, goes on the powered device.

## Required equipment

- an XT60 (or XT30, XT90) connector;
- flexible silicone-insulated wire, red and black, of a suitable gauge (see the table);
- two pieces of heat shrink tubing, slightly wider than the connector cup;
- an adjustable soldering iron with a wide (chisel) tip, and solder wire;
- a hot air station or heat gun;
- flush cutters and a wire stripper;
- a holding vise (here a Stickvise);
- a fume extractor.

{% include image-row.html image_1="pince-coupante-pince-a-denuder.jpg" image_2="cable-silicone-rouge.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Step 1: Prepare the soldering station"
content="Clear the work mat and gather the wires, tubing and connector. Switch on the fume extractor and point its nozzle at the soldering area: flux fumes are irritating."
image="plan-de-travail.jpg"
image_2="poste-soudure.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Step 2: Set the soldering iron"
content="Set the iron to about **390 °C**. The cup of an XT connector is a massive part that soaks up a lot of heat: at too low a temperature, the solder stays pasty and heating takes longer, which melts the plastic housing.

Use a wide tip (chisel or screwdriver) rather than a fine one: it transfers more heat to the cup."
image="station-weller-390.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Step 3: Cut and strip the wire"
content="Cut the wire to the desired length with the flush cutters.

Set the wire stripper's length stop to the value in the table (6 mm for an XT60), insert the wire up to the stop and squeeze: the stripper cuts the insulation and pulls it off in one motion. Then lightly twist the strands so that none sticks out."
image="denudage-pince.jpg"
image_2="denudage-reglage.jpg"
image_3="denudage-resultat.jpg"
image_4="fil-noir-denude.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Step 4: Check that the wire fits the cup"
content="Dry-fit the wire in the connector cup. The bare part must fill the whole depth of the cup, and the insulation must reach the cup's edge.

If copper sticks out, trim the wire shorter. If copper is missing, strip a little more. If the wire does not fit, its gauge is too large for this connector."
image="essai-fil-dans-godet.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Step 5: Slide on the heat shrink tubing"
content="Cut a piece of tubing long enough to cover the whole cup plus a few millimetres of insulation (about 2 cm for an XT60), and **slide it onto the wire now**, away from the end so that the iron's heat does not shrink it.

Once the wire is soldered, it can no longer be added: this is the most common mistake."
image="gaine-enfilee.jpg"
image_2="gaines-thermoretractables.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Step 6: Tin the wire"
content="Place the tip under the bare end and feed the solder from the other side, onto the copper and not onto the tip. The solder must melt on contact with the wire and wick between the strands.

The wire is well tinned when it is shiny and evenly silver, with no blob at the end. It becomes stiff and will slide into the cup more easily."
image="etamage-fil.jpg"
image_2="fil-etame.jpg"
image_3="fil-etame-gros-plan.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Step 7: Hold the connector"
content="Clamp the connector in the vise, cups facing up, to keep both hands free.

Tip: plug a mating connector onto the one being soldered. If the plastic softens under the heat, the pins stay aligned and the connector will still mate."
image="connecteur-dans-etau.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Step 8: Fill the cup with solder"
content="Heat the cup with the tip resting against its outer wall and melt solder into it until it is about three quarters full. The solder must wet the whole inner wall and form a smooth, shiny surface."
image="godet-rempli.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Step 9: Solder the wire"
content="Keep the tip against the cup to remelt the solder, then push the tinned wire all the way in. Remove the iron and **hold the wire still** for a few seconds, until the solder sets: a wire that moves while cooling gives a dull, brittle joint.

Check: shiny solder filling the cup, no stray strand, insulation neither melted nor pulled back. Repeat steps 3 to 9 for the second wire, respecting polarity."
image="fil-soude.jpg"
image_2="fil-soude-3.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Step 10: Position the tubing"
content="Once the cup has cooled down, slide the tubing up to the connector housing. It must cover all the metal of the cup and a few millimetres of the wire insulation."
image="gaine-en-place.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Step 11: Set the hot air station"
content="Switch on the hot air station and set a moderate temperature, around **200 °C**, with medium airflow. The tubing shrinks well below this temperature; a higher setting may melt the connector's nylon housing."
image="station-air-chaud-reglage.jpg"
image_2="station-air-chaud.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Step 12: Shrink the tubing"
content="Aim the hot air at the tubing from a few centimetres away, moving around the wire. The tubing tightens and takes the shape of the cup in a few seconds. Stop as soon as it fits snugly: insisting does not tighten it further and damages the connector.

Put the hot air handpiece back in its stand and let it cool before handling."
image="chauffe-gaine.jpg"
image_2="chauffe-gaine-3.jpg" %}

## Expected result

![XT60 connector soldered and insulated](hero.jpg)

The wire comes straight out of the connector, the tubing covers all the metal and no trace of melted plastic is visible. Before plugging in a battery, check:

- **mechanical strength**: pull firmly on each wire, it must not move;
- **no short circuit**: with a multimeter in continuity mode, the two connector pins must not be connected;
- **polarity**: the red wire goes to `+`, the black one to `−`.

---

Photos: Adrien Bracq, MakerSpace UniLaSalle Amiens.
{: .is-size-7 .has-text-grey }
