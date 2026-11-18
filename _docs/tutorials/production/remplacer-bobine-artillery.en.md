---
layout: documentation
lang: en
image: artillery_genius.jpg
hide_hero: false
hero_image: artillery_genius.jpg
hero_darken: true
component_toc: true
doc_header: true
type: tutorial
tag: additive-manufacturing

title: Replacing a spool - Artillery
subtitle: How to replace a spool on an Artillery printer
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
content="First, we will unload the existing filament or spool. To do so, go to the menu of your printer. Press the **TOOLS** menu, then **CHANGE** and finally **OUT**, and wait for the nozzle to heat up to continue the procedure."
image="image.png"
image_2="image-1.png"
image_3="image-2.png"
image_4="image-3.png" %}

{% include step-tuto.html
greyBackground = true
content="Once the temperature is reached, press **Confirm**; the printer makes a movement that retracts the filament. Wait for the end of this sequence (see picture). Once it has finished, push the lever backwards and pull gently on the filament to extract it: it should come out without forcing. If it does not, stop the procedure immediately and contact a supervisor. "
image="image-4.png"
image_2="image-5.png"
image_3="image-6.png" %}

{% include step-tuto.html
greyBackground = true
content="Once the filament is out of the extruder, tuck its end into one of the notches of the spool so that it does not unwind, then take the spool off its holder."
image="image-7.png"
image_2="image-8.png" %}

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
image="image-9.png" %}

{% include step-tuto.html
greyBackground = true
content="In the printer's **TOOLS** menu, press **FILAMENT** then **IN**, then wait for the nozzle to reach the required temperature."
image="image-10.png"
image_2="image-3.png" %}

{% include step-tuto.html
greyBackground = true
content="As soon as the printer tells you to insert the filament, gently take its end out of its notch, then slide it carefully into the extruder.

Push the lever backwards and insert the filament into the extruder. Do not force it; the machine will then extrude and purge the nozzle automatically. Once the filament is in place, press **Confirm**.

From that moment, let the machine do the work and do not push the filament by hand any more.

If nothing happens or if you hear a clicking noise, stop the procedure immediately and contact a supervisor. "
image="image-11.png"
image_2="image-12.png"
image_3="image-13.png" %}

{% include step-tuto.html
greyBackground = true
content="The extruder will now extrude a small amount of filament to check that the nozzle is not clogged and that the filament has been picked up by the drive gears.

You should see filament coming out of the nozzle.

- If so, press Confirm.
- If nothing comes out, press Confirm and start the procedure again (or contact a supervisor).
"
image="image-14.png"
image_2="image-15.png" %}

{% include step-tuto.html
greyBackground = true
content="Once the filament is loaded, if you do not plan to use the machine straight away, remember to check the heating and turn it off if need be.

If the filament stays at 200 °C for too long without moving, it can form a plug in the nozzle and damage the printer.

To turn off the heating:

- Go to the **TOOLS** menu
- Then select **HEAT**
- And press **CLOSE** "
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
