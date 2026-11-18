---
layout: documentation
lang: en
hide_hero: false
hero_image: "page_1_img_20.png"
hero_darken: true
image: "page_1_img_20.png"
component_toc: true
doc_header: true
type: how-to
tags: additive-manufacturing, otto-mks

title: Design rules and tips
subtitle: Designing for 3D printing
description: A set of rules and tips for designing better parts for 3D printing
author: Adrien Bracq - Derivated from hydraresearch3d.com

time: 2
difficulty: 1

---

{% include step-tuto.html
greyBackground = true
title = "Base chamfers"
content="
**Recommended value**: ~0.3 mm (first layer height + layer height)

To improve the accuracy of the bottom edges of your part, it is advisable to add a small chamfer of about ~0.3 mm to every edge that will be in contact with the build surface. This reduces the risk that a slightly over-squished first layer creates a burr around the base of the part. This only matters if you print your part without a brim. If you print with a brim, you will need a deburring tool or a hobby knife to remove the brim and clean up the base of the part."
image="page_1_img_20.png" %}

{% include step-tuto.html
greyBackground = true
title = "Base corners"
content="
**Recommended value**: R > 4 mm

For larger parts, it is recommended to round the corners in contact with the build surface. Sharp corners concentrate the shrinkage forces that occur as the part cools (warping), whereas rounded corners spread these forces. The larger the radius of the rounded corners, the better your chances of reducing warping, at least in theory. A corner radius of 4 mm or more is recommended."
image="page_1_img_21.png" %}

{% include step-tuto.html
greyBackground = true
title = "Bridging"
content="
**Recommended value**: < 10 mm

Unsupported horizontal bridges should not exceed 10 mm, to avoid print defects and failures. Build vertical structures into your model to support the bridge, or enable printed supports when slicing. You may find that you can span much larger gaps depending on the material and layer height, but keeping bridges <10 mm is a good starting point."
image="page_1_img_22.png" %}

{% include step-tuto.html
greyBackground = true
title = "Clearance"
content="
**Recommended values**:

- ~0.3 mm for a loose fit
- ~0.15 mm for a tight fit

When 3D-printed parts have to fit together, a clearance of ~0.3 mm for a loose fit and ~0.15 mm for a tight fit is recommended to guarantee a good fit. The clearance needed can vary slightly with the material and the geometry."
image="page_1_img_23.png" %}

{% include step-tuto.html
greyBackground = true
title = "Embossing and engraving (horizontal)"
content="
**Recommended**:

- **Embossing**: >0.9 mm wide (2x extrusion width) x <0.9 mm high
- **Engraving**:  >0.5 mm wide x <0.9 mm deep (2x extrusion width)

To make sure embossed or engraved details on a vertical surface are well defined and visible, the line width must be at least twice your nozzle diameter in depth. They can be a little larger, but may sag if they are too bulky."
image="page_1_img_24.png" %}

{% include step-tuto.html
greyBackground = true
title = "Embossing and engraving (vertical)"
content="
**Recommended**:

- **Embossing**: >0.9 mm wide (2x extrusion width) x <2 mm high
- **Engraving**: >0.5 mm wide x <2 mm deep

To make sure embossed or engraved details on a horizontal surface are well defined, the line width must be at least 0.5 mm for engravings and 0.9 mm for embossing. There is no limit to the height of the details, but modelling them 2 mm high will make the features clearly visible."
image="page_1_img_25.png" %}

{% include step-tuto.html
greyBackground = true
title = "Detail size"
content="
**Recommended value**: >1.8 mm (4x extrusion width)

The minimum detail size for printed structures is 4 times the extrusion line width. A general rule for modelling is not to create details smaller than 1.8 mm."
image="page_1_img_26.png" %}

{% include step-tuto.html
greyBackground = true
title = "Fillets"
content="
**Recommended value**: > ø1 mm

Fillets are an excellent way to remove sharp corners or reduce stress concentrations at corners. However, modelling downward-facing fillets on 3D-printed parts is not recommended. Chamfers are a good alternative for downward-facing edges you want to soften. Downward-facing fillets will not make the print fail, but they are likely to give poor cosmetic or surface quality."
image="page_1_img_27.png" %}

{% include step-tuto.html
greyBackground = true
title = "Hole size"
content="
**Recommended value**: > ø2 mm

Modelling holes with a diameter below 2 mm is not recommended if you want them well defined. If a hole of a precise size is needed, model it slightly smaller, then drill it out to get the right tolerance."
image="page_1_img_28.png" %}

{% include step-tuto.html
greyBackground = true
title = "Holes (horizontal)"
content="
**Recommended offset**: a ≈ 0.3 mm

To print horizontal holes with a better tolerance, it is recommended to model the extra features shown in the picture, where the offset distance a matches the layer height of your print. If you use a small layer height such as 100 μm, use 2*a. This compensates for any sagging in the steep overhanging sections of printed horizontal holes, as well as the flattening of the bottom of the holes due to the layering process."
image="page_1_img_29.png" %}

{% include step-tuto.html
greyBackground = true
title = "Overhangs"
content="
**Recommended value**: < 50°

To prevent layers from sagging or curling on printed overhangs, it is recommended to avoid printing unsupported overhangs at angles greater than 50° (measured from the vertical axis downwards). Overhang quality can also depend on the material used, some materials needing support at shallower angles than others."
image="page_1_img_30.png" %}

{% include step-tuto.html
greyBackground = true
title = "Pins"
content="
**Recommended value**: > ø1.8 mm (4x extrusion width)

To make sure pins are well defined, their diameter must be at least four times the extrusion line width, so that at least two full perimeters are printed. A good general rule is a diameter of ø1.8 mm. If your model needs functional pins, it may be better to use off-the-shelf pins and model holes in both sides of the joint."
image="page_1_img_31.png" %}

{% include step-tuto.html
greyBackground = true
title = "Threads (modelled)"
content="
**Recommended value**: > M5 or UNC #10

Threads modelled for 3D printing can work well for larger thread sizes. Modelling threads smaller than M5 or UNC #10 is not recommended if you want them to work effectively. If you need threads smaller than M5 or #10, they must be added with post-processing techniques such as tapping or heat-set threaded inserts. DO NOT use modelled/printed threads for horizontal holes."
image="page_1_img_32.png" %}

{% include step-tuto.html
greyBackground = true
title = "Threads (post-processing)"
content="

- **Tapping**: Model a hole at 90% of the thread diameter.
- **Self-tapping**: Model a hole at 96% of the thread diameter.
- **Heat-set inserts**: Model a hole at 98% of the outside diameter of the insert.

Threads can be added in post-processing in several ways. You can tap the hole, in which case model the hole at 90% of the thread diameter. You can drive a self-tapping screw into an unthreaded hole, in which case model the hole at 96% of the thread diameter. You can also use heat-set threaded inserts, in which case model the hole at 98% of the outside diameter of the insert."
image="page_1_img_33.png" %}

{% include step-tuto.html
greyBackground = true
title = "Unsupported edges"
content="
**Recommended value**: < 0.9 mm (2x extrusion width)

It is generally recommended to avoid printing unsupported horizontal structures wider than two extrusion line widths; a good general rule is 0.9 mm. Wider unsupported edges are unlikely to cause print failures, but they will cause significant cosmetic problems. If your model needs such structures, changing the print orientation and/or enabling supports will make them printable."
image="page_1_img_34.png" %}

{% include step-tuto.html
greyBackground = true
title = "Unsupported holes"
content="
**Recommended value**: Extrusion 1 = layer height, Extrusion 2 = layer height x 2

Without special design considerations, holes going through unsupported bridges will not print correctly. This technique can be used to print such holes without adding supports to your model.

When designing your part, extrude two rectangles tangent to your hole:

- The first extrusion must have a thickness equal to the layer height you plan to print at.
- The second extrusion must have a thickness equal to twice the layer height you plan to print at.

This technique can be a little hard to picture until you have tried it a few times."
image="page_1_img_35.jpeg" %}

{% include step-tuto.html
greyBackground = true
title = "Wall thickness"
content="
**Recommended value**: > 0.9 mm (2x extrusion width)

It is strongly recommended to model walls at least two extrusion widths thick, generally 0.9 mm. Thinner walls can cause printing problems and will not be very strong. Perimeters are the main source of strength in a 3D-printed part, so if strength matters, it is recommended to make walls thicker than two perimeters. Increasing the number of perimeters will require adjustments in modelling and slicing."
image="page_1_img_36.png" %}

---

{% include message.html
title="Information"
message="This content is derived from the website [https://www.hydraresearch3d.com](https://www.hydraresearch3d.com) under the
[**CC BY-SA 4.0** (Attribution-ShareAlike 4.0 International)](https://creativecommons.org/licenses/by-sa/4.0/) licence"
status="is-info"
icon="fas fa-info-circle" %}

---

{%
  include card_collections.html
  title="Going further"
  description="Explore other courses to deepen your knowledge"
  type="course"
%}
