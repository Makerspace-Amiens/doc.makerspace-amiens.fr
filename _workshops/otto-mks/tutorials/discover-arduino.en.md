---
layout: documentation
lang: en
hide_hero: false
hero_image: Arduino_IDE_Fia33YwlyJ.png
hero_darken: true
image: Arduino_IDE_Fia33YwlyJ.png
component_toc: true
doc_header: true
tag: otto-mks

title: Getting started with Arduino!
subtitle: Background and installing the tools
description: This page guides you through discovering Arduino and installing the various tools.

time: 3
difficulty: 2

author: Adrien BRACQ & Rémi LACOMBE
---

Arduino is an electronics prototyping platform for developing projects quickly with programmable electronic boards. To understand how Arduino and its alternatives work, it is important to tell three essential elements apart:

- **The firmware:** the internal software that handles the interactions between the hardware and the user program.
- **The boards:** the physical hardware that runs the code.
- **The IDE (Integrated Development Environment):** the software interface for writing, compiling and uploading code to the board.

## Difference between firmware, boards and IDE

**1. The Arduino firmware**

  Firmware is a software program embedded in the microcontroller board that executes the instructions of the user code by managing the hardware resources. In the Arduino ecosystem, the term "firmware" refers to the internal program of the board that provides its basic operation. Arduino boards are programmed in C/C++ and use libraries such as Arduino.h, which provide abstractions that make the hardware easier to control. In reality, users do not write "Arduino code" but C/C++ enriched by these libraries. This makes it possible to work with the hardware without handling the microcontroller's registers directly.

**2. Arduino boards**

  The original Arduino boards (such as the UNO, MEGA and so on) are designed to work natively with the Arduino IDE. However, there are compatible boards, such as the XIAO, that offer the same features with different performance and characteristics (smaller size, optimised power consumption, advanced connectivity and so on).

  Compatible boards such as the XIAO work with the same IDE and firmware, but may need specific libraries or drivers.

**3. The Arduino IDE**

  The Arduino IDE is a software environment for writing code and uploading it to boards. It supports several compatible boards, including some not made by Arduino, as long as they support the same architectures and communication protocols.

---

In our case, for example, we use a board specific to the Otto-MKS project, based on a XIAO ESP32C3 module. The XIAO board is compatible with the Arduino IDE and the Arduino firmware, which means that projects and programs developed with Arduino can easily be ported to it. It has advantages such as:

- An ultra-compact format.
- Low power consumption.
- Compatibility with Arduino libraries.

You can find a fuller description of the board [on the dedicated page.](../../tutoriels/04-discover-otto-pcb)

---

## Installing the development environment

To develop projects on boards compatible with the Arduino environment, there are two main options:

- The development tools provided by Arduino ([online or offline IDE](https://www.arduino.cc/en/software)).
- [PlatformIO](https://platformio.org), integrated into an IDE such as VS Code, for example.

While the second option is more advanced and gives access to more complete development environments, encouraging a more professional approach, it is the first that we look at here, as an introduction.

Keep in mind that the code and the language stay the same in every case, and that you can perfectly well move to another IDE later.

### Setting up the development environment

{% include step-tuto.html
greyBackground = true
content="We therefore start by installing the Arduino IDE, if it is not installed already.

To do so, go to [the Arduino website](https://www.arduino.cc/en/software) and download the version that suits your computer.
"
image="opera_lJptd4GUNO.png" %}

{% include step-tuto.html
greyBackground = true
content="Then install the application, following the installation steps carefully. If you are asked to install drivers at this point, accept them: they are needed to connect to the boards.  

Once the installation is finished, start the application.
"
image="arduino-ide_2.3.4_Windows_64bit_LlaPyfanrF.png"
image_2="arduino-ide_2.3.4_Windows_64bit_XiduRTIyac.png"
%}

{% include step-tuto.html
greyBackground = true
content="The **first** time the program starts, the software may run updates or install devices. Accept them so that you can connect to your development boards.
"
image="Arduino_IDE_5QyuDN0Tnf.png"
%}

{% include step-tuto.html
greyBackground = true
content="To be able to compile your program and upload it to your board, you must install the packages provided by the manufacturer.  

To do so, go to **File > Preferences**, then, in the **Additional Boards** field, add the following link:  

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```  

Take the opportunity to tick the various options, as shown in the picture, to get extra features and enable advanced debugging options.  

Click **OK**, then open the side panel on the **Boards** tab, type **ESP32**, and install the **ESP32** package *by Espressif Systems*. Wait for the installation to finish before going on. It can take a few minutes.
"
image="hczUEuM8gK.png"
image_2="Arduino_IDE_uLuPrFembp.png"
image_3="Arduino_IDE_ZZyHDG13fW.png"
%}

{% include step-tuto.html
greyBackground = true
content="We will test the link with your board to check that your computer recognises it and that code can be sent to it.  

Plug your board into a USB port of your computer (do not connect any other device for this unit test). Then check that the red LED next to the USB port is on or blinking.
"
image="opera_rwDHZZVYMd.png"
image_2="opera_cKFjuAidHG.png"
image_3="opera_Kb84cFbwtS.png"
%}

{% include step-tuto.html
greyBackground = true
content="Then open the **Select Board** drop-down menu. You should see your board appear on one of the COM ports of your computer.  

Click **Select Other Board**, then type **XIAO** in the search bar and select the **XIAO_ESP32C3** variant.  

Confirm your choice by clicking **OK**.
"
image="Arduino_IDE_qykVNLk9fH.png"
image_2="Arduino_IDE_gk3tQxMmN2.png"
image_3="Arduino_IDE_RMuNmI6o6q.png"
%}

{% include step-tuto.html
greyBackground = true
content="You are now ready to upload a first program to your board. For this first test, we use an empty program to check the connection: the basic program shown when a new project is created.  

At the top left are two icons:  

- ![alt text](verify.png) **Verify / Compile**: this option checks and compiles the project to prepare it for upload.  
- ![alt text](upload.png) **Upload**: this option sends the compiled code to the microcontroller. Clicking this button also checks and compiles the program before sending it.  

Click **Upload** and make sure the program has been transferred by checking that the message **Done uploading** is displayed.
"
image="Arduino_IDE_Fia33YwlyJ.png"
image_2="Arduino_IDE_pJ2c2oLC6n.png"
image_3="Arduino_IDE_tKkyM2M3dU.png"
%}

---

Your development environment is now correctly installed, and you are ready to start programming Otto MKS boards.  

We recommend following the next tutorials to get familiar with the basic features of the board.
