---
layout: documentation
lang: en
hide_hero: false
hero_image: IMG_20250128_151446-EDIT.jpg
hero_darken: true
image: IMG_20250128_151446-EDIT.jpg
component_toc: true
doc_header: true
tag: otto-mks

title: Discover the Otto board!
subtitle: Its components, how it works, what it can do...
description: Here you will discover the electronic board that drives the OttoMks robot

time: 1
difficulty: 1

author: Adrien BRACQ & Rémi LACOMBE
---

## About the board

The board of the **Otto-MKS** robot was designed by the **MakerSpace of UniLaSalle Amiens** to make the Otto robot easier to use. It includes a microcontroller and drives Otto and its various elements.

### Main features

- **ESP32-C3 microcontroller** on a **XIAO** module (see details below).
- **Connection for a rechargeable 9V battery**.
- **Toggle switch** for power.
- **Power indicator LED**.
- **Connector for an HC-SR04 ultrasonic sensor**.
- **4 connectors for 9g servo motors**.
- Built-in **buzzer** for sound signals.

### Extra options

Additional features can be added by soldering connectors to fit:

- A **0.91" I2C OLED display**.
- A **PCA9685 16-servo expander**.
- An **MPU6050 6DOF sensor**, comprising:
  - 3-axis accelerometer.
  - 3-axis gyroscope.
- **Two extra servo motors**

### Technical specifications

- **Dimensions**: 50 x 60 mm  
- **Mounting**: By the thread of the switch  
- **Battery supply**: standard 9V (Vmin: 7V, Vmax: 12V)  
- **5V regulation**: 1A for the servo motors  
- **3.3V regulation**: Built into the XIAO module, 700 mA max  

---

{% include image-row.html
image_1 = "IMG_20250128_151541-EDIT.jpg"
image_2 = "IMG_20250128_151625-EDIT.jpg"
%}

---

{% include 3d-model.html model="Otto-ESP32-XIAO-Lite.glb" poster="kicanvas-example.webp" %}

---

## Schematics and routing of the board

Below are the interactive schematics and PCB of the **Otto-MKS** board. The sources of the board are available in our [GitHub repository](https://github.com/Makerspace-Amiens/otto-mks/tree/main/sources/Electronics/Otto-ESP32-XIAO-Lite).  

<kicanvas-embed src="Otto-ESP32-XIAO-Lite.kicad_sch" controls="basic">
</kicanvas-embed>

<kicanvas-embed src="Otto-ESP32-XIAO-Lite.kicad_pcb" controls="advanced">
</kicanvas-embed>

## About the microcontroller

The Otto board, designed by the MakerSpace, is based on the XIAO-ESP32C3 module. This module includes an ESP32-C3 microcontroller and all the components it needs to work by itself.

{% include image-row.html
image_1 = "xiao-c3.png"
image_2 = "xiao-c3-34.png"
image_3 = "xiao-c3-antenna.png"
%}

The [**Seeed Studio XIAO ESP32C3**](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/) is a small development board designed for IoT (connected object) projects. It uses Espressif's **ESP32-C3** chip, which includes a **32-bit RISC-V** processor with good performance and low power consumption. This board makes it easy to connect to the Internet over **Wi-Fi (802.11 b/g/n)** and to communicate with other devices over **Bluetooth 5 (BLE)**.  

An **external antenna** is included to improve the range of the wireless signal. The board is compact and can easily be built into different projects thanks to its easy-to-solder design.  

It has **11 digital pins**, usable to control components such as LEDs or motors (PWM), and **3 analog pins** to measure signals such as light or temperature (ADC). It also supports several types of communication, such as:  

- **UART** (to communicate with other boards),  
- **I2C** (to connect sensors),  
- **SPI** (to exchange data quickly with other components).  

The board also has a **reset button** and a button to enter **programming mode (bootloader)**.  

Thanks to its low cost and low power consumption, this board is ideal for simple IoT projects, such as battery-powered connected objects or portable devices.  

## Features of the XIAO ESP32C3

## Performance and connectivity

- **Powerful processor**: ESP32-C3, a single-core 32-bit RISC-V processor running at up to 160 MHz.
- **Built-in Wi-Fi**: Compatible with the IEEE 802.11 b/g/n protocol, supporting several modes: Station, SoftAP, SoftAP + Station and promiscuous mode.
- **Bluetooth 5.0**: Support for Bluetooth Low Energy (BLE) and Bluetooth Mesh.
- **Low power consumption**: About 43μA in deep sleep mode.
- **External antenna**: Supplied to improve wireless reception.

## Additional features

- **Battery management**: Built-in charging chip to manage the charging and discharging of lithium batteries.
- **On-board memory**: 400 KB of RAM and 4 MB of on-board Flash memory.
- **Ultra-compact size**: Only 21 x 17.8 mm, ideal for portable projects and connected objects.
- **Advanced security**: Hardware accelerators for AES-128/256 encryption, Hash, RSA, HMAC, digital signature and secure boot.
- **Multiple interfaces**:
  - 1x I2C
  - 1x SPI
  - 2x UART
  - 11x GPIO (PWM)
  - 4x ADC
  - 1x JTAG interface
- **Practical design**: Components mounted on one side only, for easy assembly.

---

## Specification comparison

| Feature                | XIAO ESP32C3          | Seeeduino XIAO     | XIAO RP2040         | XIAO nRF52840       |
|-----------------------|----------------------|-------------------|--------------------|--------------------|
| **Processor**          | ESP32-C3 @160MHz      | SAMD21 M0+@48MHz   | RP2040 Dual-core @133MHz | nRF52840 M4F@64MHz |
| **Connectivity**       | WiFi & Bluetooth 5.0  | N/A               | N/A                | BLE/NFC             |
| **Memory**             | 400KB RAM, 4MB Flash  | 32KB RAM, 256KB Flash | 264KB RAM, 2MB Flash | 256KB RAM, 2MB Flash |
| **Built-in sensors**   | N/A                   | N/A               | N/A                | N/A                 |
| **Interfaces**         | I2C/UART/SPI          | I2C/UART/SPI       | I2C/UART/SPI        | I2C/UART/SPI        |
| **PWM/ADC**            | 11/4                   | 11/11              | 11/4                | 11/6                |
| **Buttons**            | Reset/Boot            | N/A               | Reset/Boot          | Reset               |
| **Built-in LEDs**      | Charge LED            | N/A               | RGB LED             | RGB/Charge LED      |
| **Battery charging**   | Built in               | N/A               | N/A                 | BQ25101             |
| **Languages**          | Arduino/MicroPython   | Arduino/CircuitPython | Arduino/MicroPython/CircuitPython | Arduino/MicroPython |

---

## Hardware overview

### Pinout

![alt text](pinout-xiao-c3.png)

- **A3 (GP105)**: Uses ADC2, which can be affected by stray signals. For reliable readings, use the ADC1 pins (A0, A1, A2). See the official ESP32-C3 documentation.

---

## Power pins in detail

{% include image-row.html
image_1 = "details-xiao-C3.png"
image_2 = "details-xiao-C3-rear.png"
%}

- **5V**: 5V output from the USB port. Can be used as a power input with a protection diode (Schottky or other).
- **3V3**: Regulated 3.3V output with a maximum current of 700mA.
- **GND**: Ground for power and signals.
