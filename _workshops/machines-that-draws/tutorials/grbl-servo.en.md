---
layout: documentation
lang: en
hide_hero: false
hero_image: image.png
hero_height: is-small
hero_darken: true
image: image.png
component_toc: true
doc_header: true
tag: machines-that-draws

title: "GRBL-Servo: servo calibration"
subtitle: Adjust the PWM pulses to control your servo
description: Adjust the PWM pulses to control your servo

time: 1
difficulty: 1

---

In this tutorial, you will adjust the GRBL-Servo settings to **adapt the signal** sent to your servo motor.

After flashing GRBL, the position of the servo can normally be controlled from **UGS** with **G-code** commands.

But in our case, the servo motor **vibrates**, **heats up** or **stays stuck against its end stop** instead of moving between its two positions.

This behaviour usually means that the **pulse (PWM) parameters** do not match the real range of your servo motor. We will therefore **adjust these settings** so that it works properly.

{% include prerequisites.html
  description="To understand the context and the topics covered in this tutorial, first read the following pages:"
  items="/docs/references/hardware/servomotor/,/docs/tutorials/electronics/servomotor/" %}

## Understanding GRBL-Servo

The **original GRBL** library is designed to control a **CNC milling machine**.  
**One G-code command** is therefore dedicated to **controlling the milling spindle**:

{% include message.html
message="**M3 S1000**  

- **M3** → starts the spindle
- **S1000** → sets the rotation speed (here 1000 rpm, for example)"

status="is-info" %}

**GRBL-Servo** repurposes this command, reassigning it to the control of a servo motor.  

{% include message.html
message="**M3 S0** → The servo goes to position **0°**  

**M3 S255** → The servo goes to position **180°**"
status="is-info" %}

## The source of the problem

In the **default configuration** of **GRBL-Servo**, the **PWM pulse durations** are set for a **different model** of servo motor.  
The **information** sent by the microcontroller to the servo is **misinterpreted** by the servo and produces **unwanted behaviour**.

## The solution

To **correct this setting**, the **configuration files** in the **GRBL-Servo library** must be modified:

{% include message.html
message="**Skip this step** if the library is already installed"

status="is-warning" %}

{% include step-tuto.html image="folder.png" greyBackground = false title = "Install GRBL-Servo" content="After **downloading** the library from the [**GitHub source**](https://github.com/vankesteren/grbl-servo), **extract** and **open** the **.zip**, then find the **grbl** folder and copy it into your **libraries** folder (Documents\\Arduino\\libraries)."%}

{% include step-tuto.html image="spindle_control.png" greyBackground = false title = "Open spindle_control.c" content="In the **grbl folder**, **find** and **open** the file **spindle_control.c** in a text editor."%}

{% include step-tuto.html image="edit_lines.png" greyBackground = false title = "Edit the values" content="Find the following lines:  

**#define RC_SERVO_SHORT      7**  
**#define RC_SERVO_LONG       17**  

According to the [**documentation provided**](https://www.feetechrc.com/6v-32kg-analog-steering-gear.html) by the **manufacturer**, **FS5103B** servos have a range of **pulse durations** of **600→2400 μsec**.

So replace them with:

**#define RC_SERVO_SHORT      9      // Corresponds to 600 µs**  
**#define RC_SERVO_LONG       34     // Corresponds to 2400 µs**
"%}

{% include step-tuto.html image="grbl_upload.png" greyBackground = false title = "Upload GRBL-Servo" content="
Open the **Arduino IDE**.  
Open the GRBL-Servo upload sketch, **File → Examples → grbl → grblUpload**.  
Finally click ![alt text](upload.png) to upload the firmware to your Arduino!
"%}

{% include message.html
message="Well done! Your servo should now work normally!"

status="is-info" %}
