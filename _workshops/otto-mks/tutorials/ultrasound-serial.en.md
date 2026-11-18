---
layout: documentation
lang: en
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true
tag: otto-mks

title: Ultrasonic sensor and serial link
subtitle: Get a piece of information and display it
description: This page guides you through using the serial link and the ultrasonic sensor.

time: 3
difficulty: 2

author: Adrien BRACQ & Rémi LACOMBE
---
## Introduction to the serial link

## What is a serial link?

A serial link is a communication protocol for exchanging data between two devices by sending the information bit by bit over a single data line. It is widely used in embedded systems, in communication between microcontrollers and computers, and in many electronic devices.

Unlike a parallel link, which sends several bits at once over several lines, a serial link sends the data sequentially, which reduces the number of wires needed and allows transmission over longer distances.

## How does a serial link work?

Serial communication relies on sending and receiving data serially, according to a defined protocol. The key parameters of a serial link are:

- **Baud rate**: sets the transmission speed in bits per second (bps). For example, 9600 baud means 9600 bits per second.
- **Data bits**: the number of bits used to represent each character (generally 8 bits).
- **Parity bit**: optional, used to detect transmission errors.
- **Stop bits**: mark the end of a character to tell the other device that a new transmission can begin.

In general, a serial link uses two main wires:

- **TX (transmit)**: to send data.
- **RX (receive)**: to receive data.

On XIAO-type and other ESP32 modules, the serial link can go through the USB cable. This USB connection relies on a built-in serial-to-USB converter, which turns a conventional serial link into USB. Using this converter sometimes requires installing specific drivers on the computer.

In addition, this serial link is generally used to upload programs to the board from an IDE such as the Arduino IDE, which makes development and debugging easier.

## How to send information over a serial link

On platforms such as the Arduino or the ESP32, serial communication is handled by a hardware or software serial port. Here is how to send information over a serial link using the Arduino IDE.

### Example Arduino code

```cpp
void setup() {
  Serial.begin(9600);  // Initialise the serial link at 9600 baud
  Serial.println("Starting serial communication");
}

void loop() {
  Serial.println("Hello, ESP32!");  // Sends a message over the serial link
  delay(1000);  // Wait 1 second before sending again
}
```

### Explanation of the code

1. **`Serial.begin(9600);`** → Initialises the serial link at 9600 baud.
2. **`Serial.println("Starting serial communication");`** → Sends an initialisation message.
3. **`Serial.println("Hello, ESP32!");`** → Sends a message every second.
4. **`delay(1000);`** → Adds a one-second delay before the next message.

With the serial monitor of the Arduino IDE, you can see the messages sent by the board and use them for debugging and for communicating with other devices.

{% include step-tuto.html
greyBackground = true
content="To do so, click **Serial Monitor** at the top right ![alt text](Arduino_IDE_Ld1OnYlOJU.png). A tab opens below your window, next to the Output tab, showing what your board sends.
"
image="Arduino_IDE_cnrdkHFnpj.png"
%}

{% include message.html
title="Warning"
message="Because serial communication is shared with code upload, you will have to close the serial communication tab before you can upload your code again."
status="is-danger"
icon="fas fa-triangle-exclamation" %}

---

The serial link is a simple, effective way to exchange data between electronic components, and is easy to set up on platforms such as the Arduino and the ESP32. We will now use it to send information from the ultrasonic sensor.

---

## Testing the ultrasonic sensor

Ultrasonic sensors are devices commonly used to measure distances by sending sound pulses and measuring the time they take to return after bouncing off an obstacle. They are very popular in robotics and obstacle detection applications.

### Operating principle

An ultrasonic sensor works on the principle of echolocation:

1. A sound pulse is emitted by the sensor through the **Trig** pin.
2. This pulse travels through the air at about 343 m/s.
3. When it meets an obstacle, it is reflected back to the sensor.
4. The sensor detects the echo through the **Echo** pin, and the round-trip time is measured.

With the following formula, the distance of the object can be calculated from the travel time and the speed of sound in air:

``` Distance = (Round-trip time × Speed of sound) / 2 ```

Where the speed of sound in air is about 343 m/s at room temperature.

### Connecting the sensor to the ESP32

We use the following pins to connect our ultrasonic sensor:

```cpp
const int trig_pin = D2;
const int echo_pin = D1;
```

### Approach to getting the measurement

To measure the distance, we follow these steps:

1. Configure the sensor pins (Trig as output and Echo as input).
2. Send an ultrasonic pulse on the Trig pin.
3. Measure the return duration on the Echo pin.
4. Convert this duration into a distance.

Here is example code that carries out these steps:

```cpp
const int trig_pin = D2;
const int echo_pin = D1;

void setup() {
  Serial.begin(9600);
  pinMode(trig_pin, OUTPUT);
  pinMode(echo_pin, INPUT);
}

void loop() {
  digitalWrite(trig_pin, LOW);
  delayMicroseconds(2);
  digitalWrite(trig_pin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig_pin, LOW);

  long duration = pulseIn(echo_pin, HIGH);
  float distance = (duration * 0.0343) / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(1000);
}
```

### Explanation of the code

1. **Initialisation**: The serial link and the sensor pins are configured.
2. **Sending the pulse**: A 10 µs pulse is sent on the Trig pin.
3. **Measuring the return time**: The `pulseIn()` function measures how long the echo is received.
4. **Calculating the distance**: The duration is converted into a distance.
5. **Display**: The measured distance is printed in the serial monitor.

This solution detects objects and gives their distance accurately.

---

{% include message.html
title="To do"
message="
**Level 1:**

- Write a function that gets the distance from the sensor and returns it
- Write a function that displays the distance

**Level 2:**

- Create a global boolean `debug` which, when set to `true`, prints the measured distance on the serial port in the display function

This variable can be used in the code to turn the display of debug information on the serial port on or off."
status="is-info"
icon="fas fa-pen" %}
