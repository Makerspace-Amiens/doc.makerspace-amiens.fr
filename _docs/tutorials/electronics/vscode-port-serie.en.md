---
layout: documentation
lang: en
hide_hero: false
hero_image: teleplot-interface.png
hero_height: is-small
hero_darken: true
image: teleplot-interface.png
component_toc: true
doc_header: true
type: tutorial

title: "VSCode and PlatformIO: serial port"
subtitle: Read and plot serial port data with PlatformIO and TelePlot
description: Use the PlatformIO serial monitor, then the TelePlot extension, to view in real time curves of data sent over the serial port.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Installing VSCode and PlatformIO
    link: /docs/tutorials/software/vscode-platformio/installation-vscode/
  - label: Create a PlatformIO project for the XIAO ESP32S3
    link: /workshops/microcontroleur/tutorials/toolchain-blink/
  - label: Basic knowledge of C++ (Arduino framework)
    link: ""

softwares:
  - label: PlatformIO IDE (VSCode extension)
    link: /docs/references/software/platformIO/
  - label: TelePlot (VSCode extension)
    link: "https://github.com/nesnes/teleplot-vscode"

hardwares:
  - label: XIAO ESP32S3 board (or any ESP32 board)
    link: /docs/references/hardware/xiao-esp32s3/

todo: 90
---


## Introduction

### Overview

Most current microcontroller development boards can communicate serially over USB (this is the case of the Arduino Uno and the XIAO ESP32S3). It is therefore possible to receive and send instructions through this port and display them in a terminal on the host computer.

To do this, we will set up serial communication between the µC and the PC.

A serial link provides point-to-point communication over two lines:

- **TX (transmission)**: the line that sends the message to the other party;
- **RX (reception)**: the line that receives messages from the other party.

The lines are tied to specific pins of the µC (on the XIAO ESP32S3, the hardware UART is on D6 for TX and D7 for RX; these pins are free on a breadboard, but not on the console board of the Microcontrollers workshop, where they are used for button SW2 and the display): to connect two boards, do not forget to cross the communication wires, as in this example:

![schema](schema-connexion-tx-rx.png)

{% include message.html title="On the XIAO ESP32S3" message="The XIAO has no USB-to-serial chip: `Serial` goes directly through the **native USB** of the ESP32-S3, and there are no TX/RX wires to cross. As a result, the port disappears for a moment at every reset or upload, and messages sent in the very first milliseconds of `setup()` can be lost. See the sheet [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/)." status="is-info" icon="fas fa-info-circle" %}

To communicate, the two devices must be synchronised on the same transmission speed, called the [**baud**](https://en.wikipedia.org/wiki/Baud) rate.

If you want to know more about serial links (in French):
[La liaison série (Zeste de Savoir)](https://zestedesavoir.com/tutoriels/686/arduino-premiers-pas-en-informatique-embarquee/744_la-communication-avec-arduino/3426_generalites-sur-la-voie-serie/)

### First example

In our example, we will send a stream of data (a sine wave) and display it in the serial monitor.

The code used is as follows:

```cpp
#include <Arduino.h>

float i = 0;

void setup()
{
  Serial.begin(115200);
  delay(1500);   // native USB: gives the PC time to reopen the port
}

void loop()
{
  i += 0.1;
  Serial.print("sin:");
  Serial.println(sin(i));
  delay(10);
}
```

- `Serial.begin(115200)`   : initialises serial communication at 115200 baud
- `delay(1500)`            : on the XIAO, the serial port disappears at every reset; without this pause, the first messages of `setup()` leave before the PC has reopened it, and are lost
- `Serial.print("sin:")`   : sends the character string `"sin:"` to the serial port
- `Serial.println(sin(i))`  : sends the result of `sin(i)` to the serial port, followed by a line break

To learn more about using the serial port in the Arduino framework: [Arduino reference: Serial](https://www.arduino.cc/reference/en/language/functions/communication/serial/)

For the serial monitor to read the serial port, PlatformIO must be told the communication speed with the line `monitor_speed = 115200` in the **platformio.ini** configuration file:

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
monitor_speed = 115200
```

The `seeed_xiao_esp32s3` configuration already enables `ARDUINO_USB_CDC_ON_BOOT=1`: this is what routes `Serial` through the USB-C connector, with no extra cable or adapter.

You can then open the **Serial Monitor** from the menu bar at the bottom left:

![](platformio-bouton-moniteur-serie.png)

The serial monitor opens and shows all the data exchanged between your board and your computer.

![](platformio-moniteur-serie-ouvert.png)

{% include message.html title="Upload, then listen" message="An upload closes the serial monitor, since the port disappears during flashing. The **Upload and Monitor** command in the PlatformIO menu chains the two and reopens the monitor as soon as the board restarts. If the board crashes, add `monitor_filters = esp32_exception_decoder` to `platformio.ini`: see [Debugging an embedded program](/docs/how-to-guides/deboguer-programme-embarque/)." status="is-info" icon="fas fa-info-circle" %}

{% include message.html
message="**Problem:** the data is sent every 10 ms. It is therefore hard to follow and to interpret in the serial terminal."
status="is-warning" %}

We will therefore see next how to make the serial port easier to read when there is a lot of data sent at a high rate.

## TelePlot

[![](teleplot-logo.png)](https://github.com/nesnes/teleplot-vscode)

TelePlot is a telemetry plotting tool developed by [Alexandre Bremer](https://github.com/nesnes). Originally, the application displayed data received as UDP packets; it was adapted into a VSCode extension to display data coming from a serial port.

{% include message.html
message="The extension is still under development. Please report bugs directly [on the GitHub repo](https://github.com/nesnes/teleplot-vscode) of the project."
status="is-info" %}

### Installation

The extension is simply installed through the VSCode extension manager.

![](teleplot-installation-vscode.png)

Once installed, the extension is available through the button in the bottom left menu ![](teleplot-icone-menu.png).

### What it can do

The extension integrates directly into the VSCode interface when opened and is used as a tab. The interface lets you:

- Display several curves separately
- Display a text serial monitor containing the data that is not tied to plots
- Display statistics on the plots
- Choose the display scale in X
- Zoom in on a curve
- Export the data (in JSON format for now)

![](teleplot-interface.png)

Finally, all data is timestamped, and a cursor shows precisely the values received at the instant pointed to.

![](teleplot-curseur-valeurs.gif)

### Usage

To display curves in TelePlot, a number of conventions must be followed, as with the Arduino IDE.

#### a. Text monitor only

To display a piece of data in the text monitor, just send it to the serial port as with Arduino.

```cpp
void loop()
{
  i += 0.1;
  Serial.print("loop - i=");
  Serial.println(i);
  delay(10);
}
```

{% include step-tuto.html
content="In this case, only the text display is active and the lines appear in this terminal."
image="teleplot-moniteur-textuel.png" %}

#### b. Curves only

To display a curve in TelePlot, use the `>` character just before the label of the curve, to tell the tool that the next value sent belongs to the plot with that label. End the data with a line break, using the `println()` function for example.

```cpp
void loop()
{
  i += 0.1;

  Serial.print(">sin:");
  Serial.println(sin(i));

  Serial.print(">cos:");
  Serial.println(cos(i));

  delay(10);
}
```

{% include step-tuto.html
content="Here, the two curves `sin` and `cos` are displayed and the text terminal is hidden."
image="teleplot-courbes-sin-cos.png" %}

#### c. Curves and data

It is also possible to display curves and data at the same time by combining the two previous programs.

```cpp
void loop()
{
  i += 0.1;

  Serial.print("loop - i=");
  Serial.println(i);

  Serial.print(">sin:");
  Serial.println(sin(i));

  Serial.print(">cos:");
  Serial.println(cos(i));

  delay(10);
}
```

![](teleplot-demo-demarrage.gif)

#### d. Helper function

On the ESP32, `Serial.printf()` formats a whole line in a single call, like C's `printf`. The helper function then fits on one line:

```cpp
void teleplot(const char* label, float value)
{
  Serial.printf(">%s:%.3f\n", label, value);
}

void loop()
{
  i += 0.1;
  teleplot("sin", sin(i));
  teleplot("cos", cos(i));
  delay(10);
}
```

- `const char* label`: the name of the curve, for example `"sin"`
- `float value`      : the value to display
- `%s` inserts the text, `%.3f` the number with three decimals, `\n` ends the line

The label is a `const char*` rather than a `String`: a `String` allocates memory on the heap at every call, which ends up fragmenting it in a program that runs for a long time.

## Sources

- [ElektorTV (YouTube): How To Use Arduino's Serial Plotter](https://www.youtube.com/watch?v=WnxBNxX_WDc)  
- [ElektorMAG: How-to Use Arduino's Serial Plotter](https://www.elektormagazine.com/labs/how-to-use-arduinos-serial-plotter)
- [TelePlot](https://github.com/nesnes/teleplot)
