---
layout: documentation
lang: en
image: image-17.png
hide_hero: false
hero_image: image.png
hero_darken: true
component_toc: true
doc_header: true
type: how-to
tags: additive-manufacturing, otto-mks

title: Using threaded inserts
subtitle: How to include threaded inserts in your design
description: 
author: Adrien Bracq

time: 1
difficulty: 1
compatibilities-os: win,mac,lin

prerequisites:
  - label: None
    link: ""

softwares: 
  - label: None
    link: ""

todo: 100
---

## 1. Why use threaded inserts in 3D printing?

In many projects using 3D-printed parts, different elements have to be assembled with screws. But screwing directly into plastic (even reinforced plastic) quickly becomes a problem: the thread gets damaged, deforms, or ends up giving way after a few screwing/unscrewing cycles. This is especially true with materials such as PLA or PETG.

Threaded inserts, often made of brass, create metal threads embedded in printed parts. Once installed, they offer:

- greater mechanical strength,
- reliable repeatability for frequent screwing,
- and better resistance to tightening torque.

They are particularly useful for:

- technical parts that have to be taken apart and reassembled,
- covers, enclosures and chassis of electronic devices,
- mechanical systems (shafts, fixings, joints).

Drawbacks and limits to be aware of:

- Including them takes preparation at the modelling stage: a dedicated pocket, the right tolerances.
- If badly installed, an insert can end up off-axis or weaken the part, especially if it is too close to the edge or poorly centred.
- The cost, although modest per unit, can become significant over large series.

If you still doubt the strength of this type of fixing, the video below shows in detail how threaded inserts work and demonstrates their excellent mechanical strength, in particular under repeated screwing or pull-out loads. It helps to understand why they are widely used in demanding technical applications.

<iframe width="100%" height="250" src="https://www.youtube.com/embed/iR6OBlSzp7I?si=jm8kIIdCQgjNGL22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

{% include message.html
   title="Info"
   message="In the explanations that follow, we use the threaded inserts available at the MakerSpace (brass inserts, designed for heat-set installation). If you choose another type or brand of insert, make sure you adapt the dimensions of the pocket in your 3D model.

It is strongly recommended to run a trial on a test piece before making your final part, to check the fit and how the material behaves during insertion."
   status="is-info"
   dismissable="false"
   icon="fas fa-exclamation-triangle"
%}

{% include message.html
   title="Warning"
   message="The insert is installed with a heating tool (soldering iron type). Handle this tool with care, avoid any direct contact with the tip, work on a clear surface, and unplug the iron as soon as you have finished to avoid any risk of burns or fire."
   status="is-danger"
   dismissable="false"
   icon="fas fa-exclamation-triangle"
%}

---

## 2. Designing a part with an insert

{% include step-tuto.html
greyBackground = true
content="Before designing your part, start by choosing the type of insert you want to use. The MakerSpace provides several types of metric threaded inserts. You will find them in the fasteners tool trolley, in the dedicated area of the MakerSpace.

Each insert has a specific hole diameter and a minimum insertion length that must be respected to guarantee a good mechanical hold. Take these dimensions into account from the modelling stage of your part."
image="image-12.png"
image_2="image-9.png"
image_3="image-10.png"
image_4="image-11.png"%}

{% include step-tuto.html
greyBackground = true
content="To determine the hole diameter and the insertion length to allow for, you can refer to the measurements below, which correspond to the threaded inserts commonly used at the MakerSpace:

- M3: hole diameter 4.2 mm, minimum depth 6 mm
- M4: hole diameter 5.8 mm, minimum depth 8 mm
- M5: hole diameter 6.5 mm, minimum depth 10 mm

If in doubt, or if you are using an insert that is not stocked in the trolley, you will have to measure for yourself:

- the length of the insert,
- its outside diameter at the insertion collar (see pictures).

Then add a 0.2 mm margin to the measured diameter to make heat-setting easier.

For a more precise validation, we recommend modelling a test piece with several holes of varying diameters. This lets you find by experiment the diameter best suited to your machine and to the material used (see the example in the photo).
"
image="image-15.png"
image_2="image-16.png"
image_3="image-14.png"
image_4="image-13.png"%}

{% include step-tuto.html
greyBackground = true
content="The first way to include inserts is to make a hole with a chamfer at its entrance. The hole diameter must suit the type of insert you are using (outside diameter and insertion tolerance). The chamfer makes it easier to place the insert during preparation, and gives better centring at the start of heat-setting.

The depth of the hole also depends on the type of insert chosen. We advise allowing a safety margin or, ideally, modelling a through hole if the geometry of the part allows it. This makes adjustment easier and avoids problems if the insert protrudes slightly.

For the chamfer, a value between 0.4 mm and 0.8 mm is generally recommended. In most cases, with standard machines fitted with 0.4 mm nozzles, a 0.4 mm chamfer is enough and does the job perfectly."
image="image-1.png"
image_2="image-2.png"
image_3="image-3.png"
image_4="image-4.png"%}

{% include step-tuto.html
greyBackground = true
content="If you have to make a large number of holes, creating them one by one by hand is not advisable.

You can use the **Point** tool ![alt text](image-8.png) to quickly define the centres of all your holes. Then use the **Hole** tool ![alt text](image-7.png) (see the picture below) to generate all the holes in a single parametric feature, which makes changes easier and guarantees consistent positioning."
image="image-6.png"
image_2="image-5.png"%}

---

## 3. Installing the insert in its pocket

{% include step-tuto.html
greyBackground = true
content="Once your part is 3D printed, start by checking the quality of the holes and make sure the chamfers have formed properly. If you see leftover plastic strings (stringing) or surface defects in the holes, feel free to use a suitable drill bit to clean out the hole by hand before putting the insert in.

For the rest, we will use the MakerSpace insert press (see photo). It is a soldering iron fitted with a tip specific to inserts, mounted on a vertical press that gives straight, controlled and safe insertion."
image="image-18.png"
image_2="image-21.png"%}

{% include message.html
   title="Important"
   message="The insert press must be used only for installing threaded inserts.  
Do not use the iron to modify or « rework » a part by heating the plastic directly.  
Another tool is available at the MakerSpace for that."
   status="is-warning"
   dismissable="false"
   icon="fas fa-exclamation-circle"
%}

{% include message.html
   title="Note"
   message="If you use inserts of a different diameter, it is recommended to change the tip of the iron to match the diameter of the insert.

Although it is sometimes possible to install M4 or M5 inserts with an M3 tip, this practice is strongly discouraged: the insert will not be guided properly, which increases the risk of misalignment or deformation during insertion."
   status="is-info"
   dismissable="false"
   icon="fas fa-info-circle"
%}

{% include step-tuto.html
greyBackground = true
content="Plug in the soldering iron and wait until it reaches the set temperature.
The temperature should generally be set about 20 °C above the printing temperature of the plastic used.

For example:

- For PLA, a temperature of 250 °C is perfectly suitable.
- For PETG, you can go up to around 270 °C."
image="image-19.png"
image_2="image-20.png"%}

{% include message.html
   title="Warning"
   message="Do not set the iron too hot in the hope of saving time. You risk melting the plastic too quickly, which can lead to a misaligned insert or permanent deformation of the part.

⚠️ Do not exceed 280 °C, especially with standard brass inserts, or you risk damaging the part or spoiling the coating of the insert."
   status="is-danger"
   dismissable="false"
   icon="fas fa-exclamation-triangle"
%}

{% include step-tuto.html
greyBackground = true
content="Once the temperature is reached, place the insert in the hole of the part.
Thanks to the modelled chamfer, the insert should stay in place without forcing, simply held by gravity or a light fit. Do not push it in by hand.

Then bring the soldering iron up and put it in direct contact with the insert.
Let the insert heat for about 3 to 5 seconds, no more.

Then apply light vertical pressure downwards. The insert should sink slowly into the molten plastic, in a controlled way.
Never force the insertion: it is the heat, not the force, that lets the insert seat properly.

When the insert is flush with the surface of the part, in its final position, raise the iron gently and let it cool without touching it for a few seconds."
image="image-22.png"
image_2="image-23.png"
image_3="image-24.png"
image_4="image-25.png"%}

{% include step-tuto.html
greyBackground = true
content="All that remains is to let your insert and your part cool for a few seconds before handling them or driving in a screw.

⚠️ Do not forget to unplug the insert press or the soldering iron once you have finished, for safety reasons and to look after the equipment."
image="image-26.png"
image_2="image-27.png"
image_3="image-28.png"
image_4="image-29.png"%}

---

{%
  include card_collections.html
  title="Going further"
  description="Explore other tutorials to deepen your knowledge"
  type="tutorial"
%}
