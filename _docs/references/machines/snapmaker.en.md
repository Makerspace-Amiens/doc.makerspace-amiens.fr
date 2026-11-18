---
layout: documentation
lang: en
hide_hero: false
hero_image: "2022-09-27-11-27-09.png"
hero_darken: true
image: "2022-09-27-11-27-09.png"
component_toc: true
doc_header: true
type: equipment
tag: additive-manufacturing

title: SnapMaker 2.0 A350T
subtitle: Modular 3-in-1 CNC
description: Modular 3-in-1 machine (3D printing, laser cutting/engraving, CNC milling) with interchangeable heads, used at the MakerSpace for its CNC milling module.
author: Adrien Bracq

manufacturer:
  - name: Snapmaker
    link: "https://www.snapmaker.com"

working_area: 320 x 335 mm (varies with the module)
access_level: 1

todo: 40
---
{% include safety-banner.html machine="SnapMaker 2.0 A350T (milling module)" link="/workshops/certification-securite/modules/cnc/" %}

## Overview

The SnapMaker 2.0 A350T is a modular machine: a single frame (XYZ linear structure) accepts three interchangeable heads (FDM 3D printing, laser cutting/engraving and CNC milling) driven by the same software (Snapmaker Luban / Snapmaker Orca).

At the MakerSpace, this machine is made available for its **CNC milling module**: machining flat parts in wood, acrylic, PCB or carbon sheets from a toolpath file.

## Technical specifications

| Parameter | Module | Value |
|---|---|---|
| Work area | 3D printing | 320 x 335 x 310 mm (single extrusion) |
| Work area | Laser | 320 x 335 mm |
| Work area | CNC | 320 x 335 mm |
| Power / tool | Laser | 1600 mW, 450 nm wavelength, 0.2 x 0.3 mm spot |
| Spindle speed | CNC | 6,000 to 12,000 rpm, ER11 collet (Ø 0.5 to 6.35 mm cutters) |
| Overall dimensions | - | 495 x 506 x 580 mm |
| Connectivity | - | Wi-Fi, USB, USB stick |

## Capabilities and limitations

### a. Capabilities

- CNC milling of flat parts in wood, acrylic, PCB and carbon fibre sheets.
- FDM 3D printing (PLA, ABS, PETG, TPU, Wood PLA). Module not open for free use at the MakerSpace, see Notes.
- Laser cutting and engraving (wood, leather, non-transparent plastic, fabric, paper). Module not open for free use at the MakerSpace, see Notes.

### b. Limitations

- Work area limited to 320 x 335 mm whichever module is used.
- Cutters limited to a shank diameter of 0.5 to 6.35 mm (ER11 collet).
- Manual module change: it is impossible to switch from one module to another during a job.
- Rigidity and throughput well below an industrial CNC: suited to prototyping, not to series production.

## Usable materials

**CNC milling:** wood, acrylic, PCB, carbon fibre sheets, jade (soft materials only).

**3D printing:** PLA, ABS, PETG, TPU (hardness ≥ 95 Shore A), Wood PLA.

**Laser:** wood, leather, non-transparent plastic, fabric, paper.

## Notes

At the MakerSpace, only the **CNC milling module** is currently covered by a safety certification module and open for use. See the [safety instructions of the CNC module](/workshops/certification-securite/modules/cnc/) before any use (rotating tool, entanglement, flying debris).

The laser and 3D printing modules of this machine are not open for free use for now.
