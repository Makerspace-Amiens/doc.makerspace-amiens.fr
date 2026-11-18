---
layout: documentation
lang: en
image: bambulab_a1_mini.png
hide_hero: false
hero_image: bambulab_a1_mini.png
hero_darken: true
component_toc: true
doc_header: true
type: tutorial
tag: additive-manufacturing

title: Replacing a spool - A1 mini
subtitle: How to replace a spool on an A1 mini printer
description: 
author: Adrien Bracq

time: 1
difficulty: 1

prerequisites:
  - label: Have refilled a spool
    link: "../change-bobine"

softwares: 
  - label: None
    link: ""

todo: 100
---

## 1.Why replace a filament spool?

In 3D printing, filament is the raw material of your printed objects. It is consumed continuously throughout the printing process. It is therefore essential to know how to replace a spool, for several reasons:

- **The spool is empty:** This is the most common situation. When the filament runs out, it must be replaced to avoid an incomplete print or an abrupt stop of the machine.
- **Change of material:** Some projects need specific properties (flexibility, heat resistance, solubility and so on) or materials compatible with others (PLA, PETG, TPU and so on). Changing the spool lets you match the filament to what the part needs.
- **Change of colour:** Whether for looks or to tell apart areas of the same print, it is often useful to switch from one spool to another of a different colour.
- **Bad winding or defect:** A filament may be badly wound or damaged (moisture, breaks, irregular diameter…). Replacing it as a precaution avoids incidents during printing (jams, under-extrusion…).

Mastering this operation is therefore an essential basic skill for any 3D printer user, whether for teaching, personal or professional use.

{% include message.html
title="Warning"
message="Follow the instructions below scrupulously. Handling filament spools takes PRECISION and CARE.  
A sudden movement, a bad insertion or a forced part can DAMAGE the extrusion system or cause a print FAILURE.  
  
- NEVER force the filament in.  
- Check the alignment and the winding direction.
- If in doubt, ask a supervisor for advice.  
  
Failing to follow these instructions can make the spool **UNUSABLE** or put the machine temporarily **OUT OF SERVICE**."
status="is-danger"
dismissable="false"
icon="fas fa-exclamation-triangle"
%}

---

## 2. Unloading your old spool

{% include message.html
title="Note"
message="If your spool is completely empty or **if there is no** spool in your printer, you can go to the next step."
status="is-info"
dismissable="false"
%}

{% include step-tuto.html
greyBackground = true
content="First, we will unload the existing filament or spool. To do so, go to the menu of your printer. Press the **Filament** menu, then **Décharger** (unload), and wait for the nozzle to heat up to continue the procedure."
image="image.png"
image_2="image-1.png"
image_3="image-2.png" %}

{% include step-tuto.html
greyBackground = true
content="Once the temperature is reached, the printer makes a movement that cuts and retracts the filament. Wait for the end of this sequence: the printer will then ask you to remove the filament from the extruder (see picture). Pull gently on the filament to extract it: it should come out without forcing. If it does not, stop the procedure immediately and contact a supervisor. "
image="image-3.png"
image_2="image-4.png"
image_3="image-5.png" %}

{% include step-tuto.html
greyBackground = true
content="Once the filament is out of the extruder, tuck its end into one of the notches of the spool so that it does not unwind, then take the spool off its holder."
image="image-6.png"
image_2="image-7.png" %}

{% include message.html
title="Warning – Do not cross the filament!"
message="When you remove a spool, **immediately tuck the end of the filament into one of the notches provided**.  
**Never let it wind freely around the spool**, and above all **do not cross it** over the remaining turns.  
A tangled filament may **form a knot**, which could **jam the printer completely during a print** and **seriously damage the extrusion system**."
status="is-danger"
dismissable="false"
icon="fas fa-exclamation-triangle"
%}

---

## 3. Loading your new filament

{% include step-tuto.html
greyBackground = true
content="Select your filament and take care to check its type (PLA, PETG, TPU and so on). Make sure it is compatible with your printer and suited to the print you want to make.

If you use a special filament, make sure you remove your spool at the end of your print and put back a more standard filament (such as PLA) so as not to catch out the next users.

Once you have chosen your spool, put it on the spool holder. Do not take the filament out of its notch yet."
image="image-8.png" %}

{% include step-tuto.html
greyBackground = true
content="In the printer's **Filament** menu, press **Charger** (load), then wait for the nozzle to reach the required temperature."
image="image-9.png"
image_2="image-10.png" %}

{% include step-tuto.html
greyBackground = true
content=" As soon as the printer tells you to insert the filament, gently take its end out of its notch, then slide it carefully into the extruder.

After a moment, the printer's sensor will detect the filament and start feeding it automatically. You should see the small yellow wheel of the extruder turning slowly.

From that moment, let the machine do the work and do not push the filament by hand any more.

If nothing happens or if you hear a clicking noise, stop the procedure immediately and contact a supervisor. "
image="image-11.png"
image_2="image-12.png"
image_3="image-13.png" %}

{% include step-tuto.html
greyBackground = true
content="The extruder will now extrude a small amount of filament to check that the nozzle is not clogged and that the filament has been picked up by the drive gears.

You should see a small amount of filament coming out of the nozzle.

- If so, press Terminé (finished).
- If nothing comes out, press Réessayer (retry).

⚠️ If the colour of the filament coming out is not the same as that of your spool, this is perfectly normal: the filament of the previous spool will be purged in the next step. "
image="image-14.png"
image_2="image-15.png" %}

{% include step-tuto.html
greyBackground = true
content="Once the filament is inserted, the machine automatically purges the old filament.
Wait for the end of this purge and for the printer to clean the nozzle. "
image="Animation.gif" %}

{% include step-tuto.html
greyBackground = true
content="Last step: check the type of filament shown on the machine's screen.
If the type displayed does not match the one you have just loaded, press **Modifier** (edit), then select the right filament in the list."
image="image-16.png"
image_2="image-17.png" %}

---

{% include message.html
title="Spool change complete!"
message="You have finished replacing your filament spool.  
Before starting your print, **make sure the right type of filament is selected**, that the spool is free to turn, and that the bed is clean.  

🧼 *Remember to remove the bits of extruded filament around the nozzle to avoid residue on the first layer.*  
If you have any doubt or problem, do not hesitate to ask a supervisor for advice."
status="is-info"
dismissable="false"
icon="fas fa-check-circle"
%}

---

{%
  include card_collections.html
  title="Going further"
  description="Explore other tutorials to deepen your knowledge"
  type="tutorial"
%}
