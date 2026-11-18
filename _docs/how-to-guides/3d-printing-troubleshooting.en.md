---
layout: documentation
lang: en
hide_hero: false
hero_image: "DroopingOverhang1000.png"
hero_darken: true
image: "DroopingOverhang1000.png"
component_toc: true
doc_header: true
type: how-to
tags: additive-manufacturing, otto-mks

title: Solving 3D print quality problems
subtitle: 
description: This guide is designed to help you solve common 3D print quality problems.
author: Adrien Bracq - Derivated from hydraresearch3d.com

time: 2
difficulty: 1

---

{% include step-tuto.html
greyBackground = true
title = "Curling overhangs"
content="Curling is the problem that usually occurs on overhangs, where extrusions curl upwards, resulting in a rough or distorted surface. It is more likely to happen with plastics that cannot be printed with the cooling fan on. Plastic is extruded at high temperature and, if it is not cooled quickly, can distort, especially on overhangs. The steeper the overhang, the more likely curling is.

**Solutions**

- You can reduce curling by lowering the printing temperature and/or increasing part cooling. However, the plastics most prone to this problem (ABS, ASA, and so on) can have layer adhesion problems if you lower the printing temperature or increase cooling, especially for large parts.
- Design your parts with less pronounced overhang geometry.
- Orient your part on the bed in your slicer to minimise large overhangs.
"
image="Curling.png" %}

{% include step-tuto.html
greyBackground = true
title = "Discolouration (black/brown specks)"
content="
This problem is usually seen on light-coloured plastics, in particular white and transparent ones. You may notice small black or brown specks on your part. It can have three main causes. First, molten plastic has built up on the outside of the nozzle and falls onto the print. Second, there is residual material left from a previous plastic. Third, your printing temperature may be too high, causing the plastic to burn or discolour.

**Solutions**

- Check whether plastic has built up on the outside of your nozzle. If so, heat the print head and clean it with a wire brush.
- If you have just switched from a dark colour to a light one, manually extrude plastic after loading the material until you are sure the new colour comes out clean.
- Lower the printing temperature by 5 to 10 °C.
"
image="image-asset.png" %}

{% include step-tuto.html
greyBackground = true
title = "Drooping overhangs"
content="
Overhangs are sloped sections of the part with no supporting structure underneath. It is advisable to avoid overhangs greater than 45° measured from the Z axis downwards. However, some materials such as PLA and co-polyesters can handle steep angles, while others such as ABS, ASA and nylon can have problems from 45°, especially with larger layer heights.

**Solutions**

- Use support structures. The interface between the part and the support will have a rougher surface finish, but overhangs will be much more reliable.
- Increase cooling with the cooling fan, although this can cause warping and layer splitting with large parts or high-shrinkage materials such as ABS, ASA and nylon.
- Print with a smaller layer height.
- Lower the printing temperature by 5 to 10 °C, although this can increase the risk of layer splitting.
- Reduce the extrusion multiplier (called **Flow** in the material settings of your slicer). This is unlikely to have a significant effect, but can help in some cases.
"
image="DroopingOverhang1000.png" %}

{% include step-tuto.html
greyBackground = true
title = "First layer too close"
content="
Printing the first layer with the nozzle too close to the bed can cause various printing problems. It can prevent extrusion during the first layer or cause an « elephant's foot » effect, making your first layers wider than the rest of the print. This problem can vary from one material to another. It can also be caused by an incorrect Z offset or by printing after a failed bed levelling.

**Solutions**

- Adjust your Z offset value, which you can find in your printer's menu. If you rarely need to adjust the Z offset, or only for certain materials, this can be an effective solution.
- Recalibrate your Z offset if you find you need to make large adjustments or if the problem persists.
- If the levelling probe fails, it can cause Z height problems. If your printer does not run its levelling procedure, or if you notice the red light of the BLTouch probe flashing, the probe is in alarm mode. This can be fixed by restarting the print, because the BLTouch is reset before levelling at the start of every print.
"
image="FirstLayerTooClose.png" %}

{% include step-tuto.html
greyBackground = true
title = "First layer too far"
content="
Printing the first layer with the nozzle too far from the bed can cause the part to come off the bed or leave gaps in the first layer extrusions. This problem can vary from one material to another. It can also be caused by an incorrect Z offset or by printing after a failed bed levelling.

**Solutions**

- Adjust your Z offset value, which you can find in your printer's menu. If you rarely need to adjust the Z offset, or only for certain materials, this can be an effective solution.
- Recalibrate your Z offset if you find you need to make large adjustments or if the problem persists.
- If the levelling probe fails, it can cause Z height problems. If your printer does not run its levelling procedure, or if you notice the red light of the BLTouch probe flashing, the probe is in alarm mode. This can be fixed by restarting the print, because the BLTouch is reset before levelling at the start of every print.
"
image="FirstLayerTooFar.png" %}

{% include step-tuto.html
greyBackground = true
title = "Bed adhesion (the part does not stick)"
content="
Bed adhesion is the ability of the first layer to stay firmly stuck to the build surface for the whole print. When it is insufficient, the part comes loose during printing: it moves with the nozzle, detaches completely, or you find a tangle of filament (« spaghetti ») instead of your object. Unlike **warping**, where only the corners lift, an adhesion failure prevents the first layer from holding right from the start. It is one of the most frequent causes of failure in 3D printing.

**Solutions**

- **Clean the bed.** Fingerprints (grease) are the number one cause. Clean the surface with isopropyl alcohol (IPA) before every print, and handle the bed by its edges. For textured PEI beds, an occasional wash with warm water and washing-up liquid restores adhesion.
- **Check the levelling and the Z offset.** A badly set first layer is the main mechanical cause. Refer to the sections **First layer too close** and **First layer too far** above: the nozzle must « squish » the first layer slightly against the bed, without being too close.
- **Raise the bed temperature.** Use the temperature recommended for your material (generally 55–65 °C for PLA, 90–110 °C for ABS/ASA, 70–80 °C for PETG) and raise it by 5 to 10 °C if the part comes loose.
- **Slow down the first layer.** A reduced first layer speed (15–25 mm/s) gives the plastic time to spread out and stick.
- **Reduce or turn off the fan on the first layer.** Most materials stick better if part cooling is off for the very first layers.
- **Use the right surface and the right adhesive.** Depending on the material, a glue stick, hairspray or a specific adhesive clearly improves grip. Make sure the build surface suits the filament used.
- **Add a brim or a raft.** A brim increases the contact area with the bed, which is particularly useful for parts with a small footprint or sharp corners.
- **Increase the first layer width/flow.** A first layer that is slightly wider, or with a slightly higher flow, squishes more material against the bed and strengthens the grip.
"
image="bed-adhesion.jpg" %}

{% include step-tuto.html
greyBackground = true
title = "Layer splitting"
content="
Layer splitting happens when the layers of a part do not bond firmly and the shrinkage forces during cooling are enough to break the bond between layers. It is much more common with materials that shrink a lot as they cool, such as ASA, ABS, nylon and so on.

This problem also appears more often on large parts. To fix it, the aim is to increase the bond between the printed layer and the one beneath it.

**Solutions**

- Reduce or turn off the cooling fan in your slicer.
- Raise the printing temperature by 5 to 10 °C. This can improve the bond between layers.
- Raise the bed temperature by 5 to 10 °C. This raises the ambient temperature inside the printer, which can slow down the cooling of the printed part, giving better layer bonding.
- Use a larger nozzle. A wider extrusion almost always gives a stronger part.
- If you have changed the layer height manually, make sure you never use a layer height greater than 70% of your nozzle diameter.
"
image="LayerSplitting.png" %}

{% include step-tuto.html
greyBackground = true
title = "Pillowing"
content="
« Pillowing » usually refers to the plastic forming small bumps on the top surface, but it also includes the related problem where the top layer does not fill in properly.

These problems are usually caused by too few top solid layers over a low-density infill. Printing temperature and part cooling can also play a part.

**Solutions**

- Increase the number/thickness of top solid layers. This setting is in the shell settings section of your slicer.
- Increase the infill percentage. Pillowing problems can appear at infill percentages of 10% or less.
- You can also improve results by increasing part cooling or lowering the bed temperature, but this can cause warping and layer splitting problems for large parts and materials such as ABS, ASA and nylon.
"
image="Pillowing500.png" %}

{% include step-tuto.html
greyBackground = true
title = "Stringing"
content="
Stringing happens when material keeps coming out of the nozzle while the print head travels to a new location on the print. This problem is easy to diagnose: you will see thin strings or blobs of material on the sides of your parts or across gaps in the model.

Some materials are more prone to this problem, such as co-polyesters and flexible materials. Stringing can be caused by wet filament, insufficient retraction, printing too hot or frequent travel moves across gaps in the model.

**Solutions**

- Dry your filament in a dehydrator; this can take up to 24 hours.
- Print from a dry filament box.
- Increase the retraction distance; most materials need no more than 1 to 2 mm of retraction with a direct drive extruder.
- Increase pressure advance. Values between 0.01 and 0.1 should work for most rigid materials, while higher values (still below 1) will be needed for flexible materials.
- Lower the printing temperature by 5 to 10 °C.
- Try enabling « combing » in your slicer. It keeps the nozzle over the infill during travel moves, which can slightly increase print time but hides the strings inside the part. Note that with « combing » enabled, the nozzle does not lift during travel moves, which increases the risk of layer shifts or of knocking the part over.
"
image="Stringing.png" %}

{% include step-tuto.html
greyBackground = true
title = "Supports falling over"
content="
This problem is when a support structure comes loose during printing, probably causing problems for the area of the part that was meant to be supported. Several reasons can explain it. A tall, thin support structure may not have enough area in contact with the bed to stay attached reliably. Supports can also come loose if they are built on a steeply sloped area of the printed object, or if your printer's tool head does not lift during travel moves (known as Z-hop).

**Solutions**

- If you have tall, thin supports, try adding a brim to your supports, which you will find in the support settings section of your slicer. You can also lower the support overhang angle, which generates more support structures and makes them less likely to come loose.
- If supports are generated on part of the object rather than on the bed, it can be trickier. Support structures are usually designed with a small gap between the support and the model. Because this gap is usually calculated vertically, steeply sloped surfaces can lead to a larger gap. You can set the support Z distance to 0, but that can make the support structure harder to remove. The support Z distance is usually set to the layer height you are using.
- Check that the **Z-hop** option is still enabled if you have problems with supports coming loose. The Z-hop setting is in the travel section of your slicer settings.
"
image="supportsfallover.png" %}

{% include step-tuto.html
greyBackground = true
title = "Warping"
content="
Warping is when the corners of your part start to lift off the build surface, even though the first layers of your part stuck to it well. It is particularly common with large parts and/or materials that shrink a lot as they cool, such as ABS, ASA, nylon and so on.

**Solutions**

- Use a bed adhesive to reduce the risk of warping.
- Make sure you are using the right build surface and the right adhesive for the material you are trying to print.
- Add a brim. A brim is a number of extra perimeters added around your part on the first layer. It helps hold your part on the build surface.
- Use an enclosed printer.
- Reduce or turn off the cooling fan in your slicer.
- Raise the bed temperature by 5 to 10 °C. This raises the ambient temperature inside the printer, which can slow down the cooling of the printed part and reduce the risk of warping.
"
image="Warping.png" %}

{% include step-tuto.html
greyBackground = true
title = "Wet filament (poor surfaces, crackling noises, jams)"
content="
If you hear crackling noises, see steam escaping from your nozzle, or notice bubbles/rough surfaces on your printed parts, your filament is probably wet. These problems are caused by the moisture in your filament expanding and turning into gas when heated in the print head. This can lead to poor layer adhesion, weak parts, a rough surface finish, stringing and, in some cases, a complete stop of extrusion.

**Solutions**

- Dry your filament.
- Once dry, store your filament in a dry box and print from it. When the hygrometer of your dry box shows a humidity above 30%, take the material out and dry it again.
"
image="WetvDry1000.png" %}

{% include step-tuto.html
greyBackground = true
title = "Over-extrusion"
content="
Over-extrusion happens when the amount of plastic extruded is not consistent between the G-code and what the machine actually extrudes. Most 3D printers cannot monitor the actual amount of plastic extruded. If the extrusion settings are badly configured, the printer can extrude more plastic than intended, leading to an excess that can alter the outer dimensions of the part.

To solve this problem:

- Check your extrusion settings.
- Look at the settings related to under-extrusion (but adjust them in the opposite direction). For example, if increasing the extrusion multiplier fixes under-extrusion, lowering this multiplier can solve over-extrusion.
- You may also be using incorrect nozzle settings. Check that you have selected the right machine with the nozzle settings suited to the print process.
"
image="over-extruding-1024x1024-1.jpg" %}

{% include step-tuto.html
greyBackground = true
title = "Under-extrusion"
content="
Every profile in your slicer includes settings that determine how much plastic the 3D printer should extrude. However, because the printer gives no feedback on the actual amount of plastic leaving the nozzle, less plastic may be extruded than the software expects (this is called under-extrusion). If this happens, you may start to notice gaps between adjacent extrusions in each layer.

The most reliable way to check whether your printer is extruding enough plastic is to print a simple cube 20 mm high with at least 3 perimeters. At the top of the cube, check whether the 3 perimeters are firmly bonded. If there are gaps between the 3 perimeters, that indicates under-extrusion. If the 3 perimeters touch and have no gaps, you are probably facing a different problem.

If you determine that you are under-extruding, there are several possible causes to consider, summarised below.

**Solutions**

- **Incorrect filament diameter:**

  The first thing to check is that the software knows the diameter of the filament you are using. Check that this value matches the filament loaded in your machine. It can be useful to measure your filament yourself with a caliper to confirm that the diameter specified in the software is correct. The most common filament diameters are 1.75 mm and 2.85 mm. Most spools also show the correct diameter on the packaging.

- **Increase the extrusion multiplier:**

  If the filament diameter is correct but you still have under-extrusion problems, you will need to adjust the extrusion multiplier. This very useful setting in your slicer lets you easily change the amount of plastic extruded (also called flow rate in some software).

  You can find this setting in the settings. Each extruder of your printer can have its own extrusion multiplier, so if you are trying to change the flow for a specific extruder, make sure you select the right machine.

  For example, if your extrusion multiplier was previously set to 1.0 and you change it to 1.05, you will extrude 5% more plastic than before. For PLA, a typical extrusion multiplier is around 0.9, while ABS tends to be closer to 1.0. Try increasing your extrusion multiplier by 5%, then reprint the test cube to see whether the gaps between perimeters have gone."
image="under-extruding.jpg" %}

{% include step-tuto.html
greyBackground = true
title = "Small features not printed"
content="
Most 3D printers have a fixed nozzle size that determines the resolution of parts in the XY direction, the most popular nozzle size being 0.4 mm. Although this works well for most parts, you can run into problems when trying to print extremely fine details, smaller than the nozzle size. For example, if you try to print a wall 0.2 mm thick with a 0.4 mm nozzle, this thin wall may not show up in your slicer preview. If you often need to print very fine features, here are the best options to consider for those prints.

**Common solutions**

- **Enable Arachne mode for thin walls**

  Orca Slicer offers Arachne mode, designed to improve the printing of very thin walls and complex outer features. This mode dynamically adjusts the extrusion width to better fit the narrow areas of the model. To enable this mode:

  - Open the settings of your Orca Slicer slicer.
  - In the Extrusion tab (or a similar tab), look for the Extrusion mode option.
  - Enable Arachne mode.
  - Once it is enabled, refresh the model preview. You will notice that small details are now printed with extrusions optimised for these fine features.

  Arachne mode reduces the need to modify the model or the settings by hand for narrow areas, while keeping optimal print quality for the other sections. This setting is particularly useful for prints with walls thinner than the standard extrusion width.

- **Redesign the part with thicker details**
  
  If these fine features keep causing trouble, another option is to redesign the part so that it only includes details larger than your nozzle diameter. This usually means modifying the 3D model in the original CAD software to adjust the size of the small details. Once the features have been thickened, re-import the model into your slicer to check that your printer can reproduce the 3D shape you created.

- **Fit a nozzle with a smaller diameter**
  
  In many cases, the original 3D model cannot be modified. For example, it may be a part designed by someone else or downloaded from the Internet. In that case, consider getting a second nozzle for your 3D printer that can print finer details. Many printers have a removable nozzle, which makes these aftermarket changes fairly simple. For example, many users buy a 0.3 or 0.2 mm nozzle in addition to a 0.4 or 0.6 mm nozzle so as to have two options. Check with your printer's manufacturer for precise instructions on fitting a smaller nozzle.
"
image="small-features-not-printed2-1024x1024-1.jpg" %}

{% include step-tuto.html
greyBackground = true
title = "Extrusion stops mid-print"
content="
If your printer was extruding properly at the start of the print but suddenly stopped extruding later, there are usually a few likely causes. Here are the explanations for each common cause and the matching solutions. If extrusion was not working from the very start of the print, see the section on no extrusion at the start of the print.

**Common solutions**

- **Out of filament**
  
  It may seem obvious, but before exploring other causes, check that there is still filament going into the nozzle. If the spool is empty, load a new spool before resuming the print.

- **The filament has been stripped by the drive gear**
  
  During printing, the extruder motor turns constantly to push the filament into the nozzle. If you try to print too fast or extrude too much plastic, this motor can grind the filament away until the drive gear has no grip left. If the extruder motor is turning but the filament is not moving, this is probably the cause. See the section on ground filament for more details on solving this problem.

- **The extruder is clogged**
  
  If the previous causes do not apply, the extruder is very probably clogged. If this happens mid-print, check that the filament is clean and that the spool is not covered in dust. Enough dust building up on the filament can cause a clog inside the nozzle.

- **Overheated extruder motor driver**
  
  The extruder motor works hard throughout the print. It makes rapid movements to push and pull the plastic. These movements need a lot of current, and if the printer's electronics are not cooled enough, the motor driver can overheat. These drivers usually have a thermal cut-off that stops them when the temperature gets too high. If this happens, the X and Y axis motors keep running, but the extruder motor stays still. The only solution is to switch off the printer and let the components cool. If the problem persists, consider adding an extra cooling fan.
"
image="stops-extruding-mid-print-1024x1024-1.jpg" %}

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
