---
layout: documentation
lang: en
image: tiroir_servante.jpg
hide_hero: false
hero_image: Vis.jpg
hero_darken: true
component_toc: true
doc_header: true
type: how-to
tags: additive-manufacturing, otto-mks

title: Assembly, which screw to choose?
subtitle: A screw selection guide for mechanical prototyping
description: A screw selection guide for mechanical prototyping (3D printing, laser cutting)
author: Rémi Lacombe

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

<!-- markdownlint-disable MD024 -- sous-titres "Dimensions standard / Avantages / Intégration" répétés par type de vis, chacun imbriqué sous un h3 distinct rendu par step-tuto.html (invisible au linter) -->

## Choosing the right screw diameter

The choice of screw diameter (M3, M4, M5, M6…) depends mainly on three criteria:

### What the assembled part is for

- **M3 screws** suit **small technical parts**, hinges, electronics enclosures, or thin elements.
- **M4 screws** are a good compromise between **size** and **mechanical strength**. They are well suited to **light or modular structural assemblies**.
- **M5** and **M6 screws** are bulkier and suited to **large parts**, subject to **significant loads** or frequent handling.

### Material thickness

- In **3D printing**, it is important to leave enough material around the hole so that tightening the screw does not weaken the part.
- In **laser cutting**, make sure the material stays rigid after tightening, especially in areas close to the edges.

**As a general rule:**

- Avoid using screws that are too large on thin walls.
- Prefer M3 or M5 screws for most common applications.

{% include message.html
title="Tip"
message="It is possible to screw directly into the material by using a hole diameter slightly smaller than the thread. The screw then cuts its own thread in the plastic.

👉 However, this method has its limits: after a few screwing/unscrewing cycles, the thread can wear or deform.  
For a **more durable assembly**, especially if the part has to be taken apart regularly, it is strongly recommended to use a **threaded insert**."
status="is-info"
dismissable="false"
icon="fas fa-lightbulb"
%}

{% include card_collections.html
  title=""
  description=""
  type="insert"
%}

## Including screws in an assembly

### 3D printing

3D printing requires you to **allow a functional clearance** in holes to compensate for the inaccuracies of material deposition (FDM). Here are the recommendations per thread:

| Thread | Clearance hole (Ø) | Screwing into the material (Ø)  | Hole for threaded insert (Ø)|
|----------|---------------------|------------------------------|-----------------------------|
| M3       | 3.3 mm              | 2.7 mm                       | 4.2 mm                      |
| M4       | 4.3 mm              | 3.5 mm                       | 5.8 mm                      |
| M5       | 5.3 mm              | 4.2 mm                       | 6.5 mm                      |
| M6       | 6.3 mm              | 5.0 mm                       | -                           |

> 💡 Consider printing a test piece with several diameters if in doubt.

---

### Laser cutting

In laser cutting, the **tolerance is produced automatically** by the **kerf** (the cutting width of the beam), which varies with the material (~0.1 to 0.2 mm per side). There is therefore no need to add clearance in the design file.

| Thread | Diameter to draw  |
|----------|----------------------|
| M3       | 3.0 mm               |
| M4       | 4.0 mm               |
| M5       | 5.0 mm               |
| M6       | 6.0 mm               |

> 💡 Tip: if your screwed assembly is a little too tight after cutting, a few strokes of a round file or a hand drill quickly correct the fit.

---

In a **mechanical prototyping** project, choosing the right type of screw directly affects **strength**, **appearance** and **ease of assembly**. At the MakerSpace, there are **three types of screws**:

{% include step-tuto.html
title = "CHC: socket head cap screw"
greyBackground = true
content="

**CHC** screws (DIN 912) are the most common in mechanical assemblies. Their **tall cylindrical head** with a hex socket allows **strong tightening** and excellent mechanical hold.

#### 📏 Standard dimensions

| Thread (**d**) | Head Ø (**dk**) | Head height (**k**) | Allen key (**s**) | Socket depth (**t**) |
|------------------|------------------|-----------------------|-------------------|-------------------------------|
| **M3**           | 5.5 mm           | 3.0 mm                | 2 mm              | 1.5 mm                        |
| **M4**           | 7.0 mm           | 4.0 mm                | 2.5 mm            | 2.0 mm                        |
| **M5**           | 8.5 mm           | 5.0 mm                | 4 mm              | 2.5 mm                        |
| **M6**           | 10.0 mm          | 6.0 mm                | 5 mm              | 3.0 mm                        |

#### ✅ Advantages

- **Powerful tightening**: perfect for parts subject to mechanical loads.
- **Deep head**: the hex socket holds the key well, without slipping.
- **Widely used**: compatible with most off-the-shelf mechanical components.
- **Easy to recess**: the cylindrical head is ideal for a simple counterbore.

#### 🔩 Integration

For a clean finish, and so that the head does not stick out of the part, a **cylindrical counterbore** is recommended:

- The counterbore diameter must be **slightly larger than the head** (about +0.2 mm).
- The counterbore depth equals the **head height**, or a little more if you want the head slightly sunk.

**For example, in Onshape:**  
You can use the **Point** tool ![Point](Point.png) in a sketch to quickly define the centres of all your holes.
Then use the **Hole** tool ![Percage](Percage.png) (see the picture below) to generate all the holes in a single parametric feature, which makes changes easier. Select the **Counterbore** option and the screw diameter, here for an **M3 CHC screw going through**:

"
image="CHC.png"
image_2 = "Lamage.png"
%}

{% include step-tuto.html
title = "BHC: button head screw"
greyBackground = true
content="

**BHC** screws (DIN 7380) are recognisable by their **low, rounded head** with a hex socket. They offer a good compromise between mechanical hold and a neat appearance.

#### 📏 Standard dimensions

| Thread (**d**) | Head Ø (**dk**) | Head height (**dk**) | Allen key (**s**) | Socket depth (**t**) |
|------------------|------------------|----------------------|-------------------|-------------------------------|
| **M3**           | 5.7 mm           | 1.65 mm              | 2 mm              | 1.03 mm                       |
| **M4**           | 7.6 mm           | 2.2 mm               | 2.5 mm            | 1.3 mm                        |
| **M5**           | 9.5 mm           | 2.75 mm              | 3 mm              | 1.56 mm                       |
| **M6**           | 10.5 mm          | 3.3 mm               | 4 mm              | 2.08 mm                       |

#### ✅ Advantages

- **Appearance**: the button head gives a clean, understated, professional look.
- **Low profile**: more discreet than a CHC screw, ideal if you want to avoid a head that sticks out too much.
- **Pleasant to the touch**: no sharp edge, nothing to catch on.
- **No counterbore needed**: they can be screwed directly onto the surface, handy on thin parts.
- **Good bearing surface**: spreads the pressure well under the head.

"
image="BHC.png" %}

{% include step-tuto.html
title = "FHC: countersunk screw"
greyBackground = true
content="

**FHC** screws (DIN 7991) have a **90° conical head** that sinks completely into the part when tightened. They allow a **flush fit**, ideal for surfaces that must stay flat or for neat finishes.

#### 📏 Standard dimensions

| Thread (**d**) | Head Ø (**dk**) | Head height (**k**) | Allen key (**s**) | Socket depth (**t**) |
|------------------|------------------|-----------------------|-------------------|-------------------------------|
| **M3**           | 6.0 mm           | 1.86 mm               | 2 mm              | 1.2 mm                        |
| **M4**           | 8.0 mm           | 2.48 mm               | 2.5 mm            | 1.5 mm                        |
| **M5**           | 10.0 mm          | 3.10 mm               | 3 mm              | 2.0 mm                        |
| **M6**           | 12.0 mm          | 3.72 mm               | 4 mm              | 2.4 mm                        |

#### ✅ Advantages

- **Perfectly flush**: the head is completely sunk into the material.
- **Clean look**: ideal for visible or handled faces.
- **Self-centring**: the conical shape helps align the parts.
- **No mechanical interference**: nothing protrudes from the surface.

#### 🔩 Integration

For a **flush fixing** (where the head does not protrude), a **90° countersink** is needed.

- The countersink diameter must be **slightly larger than the head** (about +0.2 mm).
- The depth equals the **height of the conical head**, so that the head is perfectly sunk into the part.

**For example, in Onshape:**  
As for CHC screws, use the **Point** tool ![Point](Point.png) in a sketch to define the centres of the holes.  
Then use the **Hole** tool ![Percage](Percage.png) with the **Countersink** option to create a suitable seat.
Here, for an **M3 FHC screw going through**.

> **Laser tip:** Although laser cutting cannot create a countersink, it is perfectly possible to **chamfer the holes by hand** with a **90° V-shaped countersink bit** (or a drill bit). This lets the head of an FHC screw sit neatly in a sheet so that it is **flush**, without changing your design.

"
image="FHC.png"
image_2 = "Fraisure.png"%}

{% include card_collections.html
  title="Going further"
  description="See also our guide on threaded inserts and the use of captive nuts."
  type="tutorial"
%}
