---
layout: documentation
lang: en
hide_hero: false
hero_image: OttoIkea.png
hero_darken: true
image: OttoIkea.png
component_toc: true
doc_header: true
tag: otto-mks

title: Assemble your Otto-MKS
subtitle: Otto-MKS assembly guide
description: Follow these steps to assemble your Otto-MKS!

author: Adrien BRACQ & Rémi LACOMBE

time: 4
difficulty: 2

---
Now that your parts are printed, follow this guide to assemble your Otto-MKS!

{% include message.html title="Warning" message="**Before assembling your robot**, and for the build to go as smoothly as possible, you must have followed all the [**previous tutorials**](../pages/tutoriels/)!

**Take your time** at each step and check your assembly regularly, in particular the **type of screw** to use." status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include step-tuto.html
greyBackground = false
image = "BOM.png"
title="Parts"

content="To begin, check that you have all the hardware and the printed parts" %}

{% include step-tuto.html
greyBackground = false
image = "step 1.png"
title="Step 1 - Assembling the body"

content="Insert the servo motors into the **Body** part, in the slots provided." %}

{% include step-tuto.html
greyBackground = false
image = "step 2.png"
title="Step 2 - Screwing in the servo motors"

content="**⚠️ Careful: check the type of screw**" %}

{% include step-tuto.html
greyBackground = false
image = "step 3.png"
title="Step 3 - Fitting the servo horns"

content="**Cut** two servo horns as shown, then insert them into the **Leg** parts.  
Push the horns **all the way into the slots provided.**" %}

{% include message.html title="Warning" message="For the next step, you will need the code written earlier in [**the servo motor tutorial**](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/08-servomotor/), which sets them to **90°**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include message.html title="Warning" message="Servo motors are **very fragile**: **avoid forcing them to rotate by hand as far as possible**, or you risk damaging the internal mechanical parts!" status="is-danger" dismissable="true" icon="fas fa-solid fa-skull-crossbones" %}

{% include step-tuto.html
greyBackground = false
image = "step 4.png"
title="Step 4 - Fitting the legs"

content="Connect the two servo motors to the **electronic board** and run your [**90° positioning** code](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/08-servomotor/).  
Then fit the **legs** onto the **servo shafts**, in the **position shown**.
Unplug the servo motors and check that the **end stops** are at **90° either side of the neutral position**.
" %}

{% include step-tuto.html
greyBackground = false
image = "step 5.png"
title="Step 5 - Screwing on the legs"

content="Screw the legs onto the servo shafts.  
**⚠️ Check the type of screw**
" %}

{% include step-tuto.html
greyBackground = false
image = "step 6.png"
title="Step 6 - Fitting the foot servo horns"

content="Insert the servo horns into the **Left_Foot** and **Right_Foot** parts until they stop.
" %}

{% include step-tuto.html
greyBackground = false
image = "step 7.png"
title="Step 7 - Screwing in the foot servo horns"

content="Screw the servo horns in firmly.  
**⚠️ Check the type of screw**
" %}

{% include message.html title="Warning" message="For the next step, you will need the code written earlier in [**the servo motor tutorial**](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/08-servomotor/), which sets them to **90°**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include step-tuto.html
greyBackground = false
image = "step 8A.png"
image_2 = "step 8B.png"
title="Step 8 - Fitting the foot servo motors"

content="Connect the two servo motors to the **electronic board** and run your [**90° positioning** code](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/08-servomotor/).  
  
Then insert the **servo motors** into the **Foot** parts in the **position shown**.
  
Unplug the servo motors and check that the **end stops** are at **90° either side of the neutral position**.
" %}

{% include step-tuto.html
greyBackground = false
image = "step 9.png"
title="Step 9 - Screwing in the foot servo motors"

content="Screw in the servo shafts.  
  
**⚠️ Check the type of screw**
" %}

{% include step-tuto.html
greyBackground = false
image = "step 10A.png"
image_2 = "step 10B.png"
image_3 = "step 10C.png"
title="Step 10 - Fitting the feet"

content="Insert the feet into the slots provided in the **Leg** parts.  
Make sure you pass the wires through the holes of the **Body** part.
" %}

{% include step-tuto.html
greyBackground = false
image = "step 11.png"
title="Step 11 - Screwing on the feet"

content="Screw in the second screw of the servo motors.  
  
**⚠️ Check the type of screw**  
" %}

{% include step-tuto.html
greyBackground = false
image = "step 12.png"
title="Step 12 - Fitting the ultrasonic sensor"

content="Slide the sensor into the **Head** part in the position and direction shown.  

**⚠️ Careful: the front grilles of the sensors are very fragile; avoid pressing on them**  
" %}

{% include step-tuto.html
greyBackground = false
image = "duck.png"
title="BONUS step - Duck break"

content="Take a break to look at the **yellow duck** in your kit: if you have run into problems since the start of the build, it will **listen to you with compassion**!

[**source**](https://rubberduckdebugging.com)
" %}

{% include step-tuto.html
greyBackground = false
image = "step 13.png"
title="Step 13 - Preparing the electronic board"

content="**Unscrew** and **keep** the washer and the nut of the switch.
" %}

{% include step-tuto.html
greyBackground = false
image = "step 14.png"
title="Step 14 - Installing the electronic board"

content="Gently insert the board into the **Head** part.  
Check that the **pins of the ultrasonic sensor** go into the **connector** properly and that the **switch is pushed in until it stops**.
" %}

{% include step-tuto.html
greyBackground = false
image = "step 15.png"
title="Step 15 - Assembling the head"

content="Finish assembling the head by putting the washer back and screwing the nut back on.  
  
**⚠️ Important: the tab of the washer must go into one of the two holes provided**
" %}

{% include step-tuto.html
greyBackground = false
image = "step 16.png"
title="Step 16 - Installing the battery"

content="Fit the **9V clip** onto the **battery**.  
  
**⚠️ Careful: the board must NEVER be connected the wrong way round, or it will be damaged**  

Then insert the battery into its **slot**, with the cables pointing **upwards**.
" %}

{% include step-tuto.html
greyBackground = false
image = "step 17.png"
title="Step 17 - Wiring"

content="**Connect the servo motors to the board**, **following the order shown** to avoid any problem when programming.
  
**⚠️ Check that the servo connectors are the right way round by checking the colours (brown on ⏚, red on +5V, and yellow on the signal)**  
  
Finally **connect the battery** to the **power connector**.  

Use the hook-and-loop strip supplied to **tidy the cables** neatly.
" %}

{% include step-tuto.html
greyBackground = false
image = "step 18.png"
title="Step 18 - Final assembly"

content="**Finish the assembly** by closing **the head onto the body**.  
Press lightly on the sides to help it clip together.  
  
**⚠️ Check that no cable is trapped between the two parts**
" %}

{% include step-tuto.html
greyBackground = false
image = "step 19.png"
title="Over to you!"

content="**Congratulations!** 🎉  
Your Otto is now up and running!
You can now program and modify it to take part in, and perhaps win, the events of the tournament, whose rules are [available here](/workshops/otto-mks/concepts/ottolympiades/).
" %}
