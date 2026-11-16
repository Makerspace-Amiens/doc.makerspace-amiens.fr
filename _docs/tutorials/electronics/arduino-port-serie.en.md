---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: tutorial

title: Arduino serial port
subtitle: Read and plot serial port data with the Arduino IDE monitor
description: Set up a serial link between an Arduino board and a PC, then use the serial monitor and serial plotter built into the Arduino IDE to read and visualise the data sent.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Basic knowledge of C++ (Arduino framework)
    link: ""

softwares:
  - label: Arduino IDE
    link: /docs/references/software/arduino-ide/

hardwares:
  - label: Arduino-compatible board (UNO, ESP32, etc.)
    link: /docs/references/hardware/arduino-uno/
---

## 1 - Introduction

### 1.1 - Overview

Most "Arduino-type" boards can communicate serially over USB (this is the case of Arduino UNO boards). It is therefore possible to receive and send instructions through this port and display them in a terminal on the host computer.

To do this, we will set up serial communication between the µC and the PC.

A serial link provides point-to-point communication over two lines:

- **TX: transmission** - The line that sends the message to the other party
- **RX: reception** - The line that receives a message from the other party

Since the lines are specific and tied to pins of the µC (on a UNO: RX = pin 0 and TX = pin 1), do not forget to cross the communication wires as shown in this example:

![schema](schema-connexion-tx-rx.png)

To communicate, the two devices must be synchronised on the same transmission speed, called the [**baud**](https://en.wikipedia.org/wiki/Baud) rate.

If you want to know more about serial links (in French):
[La liaison série - Zeste de savoir](https://zestedesavoir.com/tutoriels/686/arduino-premiers-pas-en-informatique-embarquee/744_la-communication-avec-arduino/3426_generalites-sur-la-voie-serie/)

### 1.2 - First example

In our example, we will send a stream of data (a sine wave) and display it in the serial monitor.

The code used is as follows:

``` c++
#include <Arduino.h>
float i=0;

void setup() 
{
  Serial.begin(115200);
}

void loop() 
{
  i+=0.1;
  Serial.print("sin:");
  Serial.println(sin(i));
  delay(10);
}

```

- `Serial.begin(115200)`   : Initialises serial communication at 115200 baud
- `Serial.print(">sin:")`   : Sends the character string `">sin:"` to the serial port
- `Serial.println(sin(i))`  : Sends the result of `sin(i)` to the serial port, followed by a line break

To learn more about using the serial port in the Arduino framework: [Arduino reference - Serial](https://www.arduino.cc/reference/en/language/functions/communication/serial/)

{% include message.html
message="**Problem:** the data is sent every 10 ms. It is therefore hard to see and to make sense of in the serial terminal."
status="is-warning" %}

We will therefore see next how to make the serial port easier to read when there is a lot of data sent at a high rate.

## 2 - Arduino IDE

The serial terminal included in the Arduino IDE is particularly simple and effective. It can both:

- Display the raw data from the serial port
- Plot data curves

You do not need to have written the code in the IDE, or to have an Arduino board, to use the serial monitor. Any serial port from any source can be used.

### 2.1 - Basic use of the monitor

Let us use the previous example to test the serial monitor for reading

{% include step-tuto.html
content="In the Arduino IDE, go to ***Tools > Port*** and select the COM port of the board you want to use. Then click ***Serial Monitor*** at the top right to open the monitor.  
![](arduino-ide-bouton-moniteur-serie.png)"
image="arduino-ide-outils-port.png" %}

{% include step-tuto.html
content="The serial terminal window opens and shows the data received. Make sure, though, that the baud rate is set correctly in the bottom right menu.  
![](arduino-ide-terminal-serie.png)  
You can also show timestamps and turn off autoscroll."
image="arduino-ide-reglage-vitesse-baud.png" %}

The Arduino monitor has the advantage of offering the features of the PIO monitor in VSCode with simpler access to the serial port settings, which makes it easier to use and to configure

### 2.2 - Using the graphical mode

It is also possible to show the data received on a graphical display and to plot the curves of the data received. To do so:

{% include step-tuto.html
content="Click ***Tools > Serial Plotter***. The serial plotter window should open."
image="arduino-ide-menu-traceur-serie.png" %}

{% include step-tuto.html
content="The window then shows the curve of the data received. As in the text window, you can also change the speed settings and send data."
image="hero.png" %}

{% include message.html
message="**Warning:** one limitation of the Arduino IDE is that it cannot run the text monitor **and** the graphical monitor at the same time. This can, however, be done with another utility described further down.  
![](arduino-ide-limitation-moniteur-plotter.png)"
status="is-danger" %}

### 2.3 - Advanced use of the plotter

#### a. Displaying several plots

It is possible to display several plots in the Arduino IDE serial interface. To do so, use the `comma` separator `","` between each piece of data sent.

For example, to display a curve of `sin(i)` and the curve of `cos(i)` at the same time, you can proceed as follows:

``` c++
void loop() 
{
    i+=0.1;
    Serial.print(sin(i));
    Serial.print(",");
    Serial.println(cos(i));
    delay(10);
}
```

![](plotter-graphique-sin-cos.png)

It is of course possible to display more curves (no limit is given in the IDE documentation). The colours of the plots are set automatically, and the order in which the data is sent affects the choice of colour.

It is also possible to display labels identifying the curves. To do so, put the label of the curve before each value sent, with a `colon` character `:` between the label and the value:

``` c++
void loop() 
{
    i+=0.1;
    Serial.print("sin:");
    Serial.print(sin(i));
    Serial.print(",");
    Serial.print("cos:");
    Serial.println(cos(i));
    delay(10);
}
```

![](plotter-graphique-labels.png)

#### b. Managing auto-scale

The Arduino IDE serial plotter automatically adapts the vertical scale of the display to the minimum and maximum data received. This can sometimes make the plots awkward to read. One solution is to send two constant min and max curves that force the vertical scale.

**Be careful, though:** if the curves go beyond the min and/or max values, automatic scaling starts changing the display scale again.

{% include message.html
message="The scale cannot go below -5 and +5, even with this method. To study the limits of autoscaling, we will therefore multiply the values displayed here."
status="info" %}

In the example below, we display two min and max lines at `-15` and `+30` respectively, then the value of `10*cos(i)`.

``` c++
void loop() 
{
    i+=0.1;
    Serial.print("min:");
    Serial.print(-15);
    Serial.print(",");
    Serial.print("cos:");
    Serial.print(10*cos(i));
    Serial.print(",");
    Serial.print("max:");
    Serial.println(30);
    delay(10);
}
```

![](plotter-graphique-autoscale.png)

#### c. Helper function

If you want to simplify the code you write to display plots, you can use the following function (or a similar one) in your code:

``` c++
void plot(String label, float value, bool last)
{
    Serial.print(label);
    Serial.print(":");
    Serial.print(value);
    if(!last) Serial.print(",");
    else Serial.println();
}
```

- `String label`    : The name of your label
- `float value`     : The value to display
- `bool last`       : `false` if other values are to follow, `true` if it is the last value

You can then have the following code to display two labelled curves:

``` c++
void loop() 
{
  i+=0.1;
  plot("cos", 10*cos(i), false);
  plot("sin", 5*sin(i), true);
  delay(10);
}
```

![](plotter-graphique-fonction-plot.png)

### 2.4 - Limitations

- The X axis scrolls endlessly and the scrolling cannot be paused other than by disconnecting the physical link.
- It is not possible to display a point at (X,Y)
- Automatic scaling of the Y axis seems a good idea at first sight, but can quickly become very annoying in some cases.
- It is impossible to zoom in on part of the curve
- It is impossible to view other data from the serial port at the same time as the curves.

For these reasons, it is worth looking for other display options. At present there is no real alternative built directly into VSCode by PlatformIO or by Arduino.

This is why the **TelePlot** extension was developed; it is explained in this tutorial: [VSCode and PlatformIO: serial port](/docs/tutorials/electronics/vscode-port-serie/).

## Sources

- [Youtube - ElektorTV - How To Use Arduino's Serial Plotter](https://www.youtube.com/watch?v=WnxBNxX_WDc)  
- [ElektorMAG - How-to Use Arduino's Serial Plotter](https://www.elektormagazine.com/labs/how-to-use-arduinos-serial-plotter)
- [TelePlot](https://github.com/nesnes/teleplot)
