---
layout: documentation
lang: en
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: tutorial

title: First program - Buzzer and functions!
subtitle: Your first steps with Arduino
description: This page guides you through using the buzzer of the Otto-MKS board and revising the basics of C/C++

time: 3
difficulty: 2

author: Adrien BRACQ & Rémi LACOMBE
---

## Introduction

The ESP32 is a powerful, versatile development board that offers many features for electronics projects. Among them, generating sounds with the `tone()` function is particularly useful for audible alerts or for playing simple melodies. This tutorial guides you step by step through using the `tone()` function on the ESP32, using pin **D0** of your OttoMKS board

## About the `tone()` function

`tone()` is a native Arduino function that generates PWM signals on a given pin to produce a sound on a passive buzzer. It is now compatible with the ESP32, allowing a quick, simple implementation without extra libraries.

### Main features of `tone()`

- **Tone generation**: Produces a sound of a set frequency on a given pin.
- **Optional duration**: You can specify how long the sound is played, for precise control.
- **Works with `noTone()`**: A function that stops the current tone at any time.
- **Intuitive use**: Works as on classic Arduino boards, making it easy for beginners and experts alike.

## Main functions

Here are the main functions associated with `tone()`:

1. **`tone(pin, frequency)`**  
   - Generates a tone on the specified pin at the given frequency (in hertz).
   - Example: `tone(D0, 1000);` → Plays a 1000 Hz tone on pin D0.

2. **`tone(pin, frequency, duration)`**  
   - Generates a tone for a specific duration (in milliseconds).
   - Example: `tone(D0, 1000, 2000);` → Plays a 1000 Hz tone for 2 seconds.

3. **`noTone(pin)`**  
   - Stops the current tone on the specified pin.
   - Example: `noTone(D0);` → Stops the sound on pin D0.

## Generating sounds with tone

Before implementing a start-up sound function, we will test a succession of sounds directly in `setup()`. This validates that the buzzer works and helps to understand how the `tone()` function behaves.

Here is example code that generates a series of sounds in the `setup()` function:

```cpp
#define BUZZER_PIN D0  // Buzzer pin definition

void setup() {
  tone(BUZZER_PIN, 500, 300);  // Plays a 500 Hz sound for 300 ms
  delay(500);
  tone(BUZZER_PIN, 1000, 300); // Plays a 1000 Hz sound for 300 ms
  delay(500);
  tone(BUZZER_PIN, 1500, 300); // Plays a 1500 Hz sound for 300 ms
  delay(500);
  noTone(BUZZER_PIN);          // Silence after the series of sounds
}

void loop() {
  // Nothing to do in the main loop
}
```

Once these tests are done, we can wrap this logic in a function to improve the structure of the program.

## Creating a start-up sound

We will now create a start-up sound for our robot. To do so, we will wrap the sound generation in a dedicated function. Remember that functions in C/C++ group instructions under a single name, which makes code easier to reuse and to read.

### How functions work in C/C++

A function is a block of code that performs a specific task. It is defined once and can be called as many times as needed in the program. In general, a function is defined by:

- A return type (void if nothing needs to be returned)
- A meaningful name
- Optional parameters
- A block of instructions between braces `{}`

Example function:

```cpp
void myFunction(int value) {
  Serial.println(value);
}
```

### Creating the start-up sound function

We will now create a `startupSound()` function to generate a start-up sound:

```cpp
#define BUZZER_PIN D0  // Buzzer pin definition

void startupSound() {
  tone(BUZZER_PIN, 1000, 200);  // First short 200 ms beep
  delay(400);
  tone(BUZZER_PIN, 1500, 200);  // Second short 200 ms beep
  delay(400);
  noTone(BUZZER_PIN);           // Silence after the beeps
}

void setup() {
  startupSound();  // Calls the function at start-up
}

void loop() {
  // Nothing to do in the main loop
}
```

### Why using functions matters

Using functions in a project:

- Makes the code more readable and organised
- Makes maintenance and reuse easier
- Reduces errors by avoiding code duplication

## Going further: generating musical notes

To go further with the `tone()` function, you can generate complete melodies using a predefined list of notes. Each musical note corresponds to a specific frequency in hertz.

### Putting a list of notes in a separate file

To organise the code and make it more modular, we can define a list of musical note frequencies in a separate file. This makes the musical data easier to manage and to reuse in different projects.

#### Step 1: Creating a new `notes` tab in the Arduino IDE

{% include step-tuto.html

greyBackground = true

content="In the Arduino IDE, you can organise your code by creating a new tab to store the definitions of the note frequencies. To add a tab to the current project, click the three dots at the top right, then **New Tab**. Name this tab **notes.h** . This **header** file will hold definitions.
"
image="Arduino_IDE_5FpIFuQHin.png"
image_2="Arduino_IDE_5FpIFuQHin.png"
%}

Then add the following definitions in this tab:

```cpp
#ifndef NOTES_H
#define NOTES_H

#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_A4  440
#define NOTE_B4  494

#endif
```

#### Step 2: Using the list of notes in the main program

Include the `notes.h` file in your main program and use the notes defined:

```cpp
#include "notes.h"

#define BUZZER_PIN D0  // Buzzer pin definition

void startupSound() {
  tone(BUZZER_PIN, NOTE_G4, 200);  // First short 200 ms beep
  delay(400);
  tone(BUZZER_PIN, NOTE_B4, 200);  // Second short 200 ms beep
  delay(400);
  noTone(BUZZER_PIN);           // Silence after the beeps
}

void setup() {
  startupSound();  // Calls the function at start-up
}

void loop() {
  // Nothing to do in the main loop
}
```

## Understanding header files in C/C++

In C and C++, header files, recognisable by their `.h` extension, are used to declare functions, variables, constants and classes that can be used in several source files. They help structure and organise the code by separating the declaration of elements from their implementation.

### Why use header files?

Using header files has several advantages:

1. **Modularity**  
   - They split the code into reusable modules, which makes the project easier to maintain and to extend.

2. **Readability and organisation**  
   - By separating declarations from implementations, the code becomes easier to understand and to manage.

3. **Reuse**  
   - A `.h` file can be included in several `.cpp` source files, avoiding code duplication.

4. **Easier compilation**  
   - They centralise declarations and avoid conflicts at compile time by providing clear definitions.

### Structure of a header file

A header file generally contains:

- **Constant definitions** (`#define`)
- **Declarations of functions** and global variables
- **Declarations of structures and classes**
- **Protection against multiple inclusion** using preprocessor directives.

Typical example of a `notes.h` file:

```cpp
#ifndef NOTES_H  // Checks whether NOTES_H is not already defined
#define NOTES_H  // Defines NOTES_H

#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_A4  440
#define NOTE_B4  494

#endif  // End of the protection against multiple inclusion
```

### How to use a header file in a program

To include a header file in a `.ino` or `.cpp` source file, use the `#include` directive as follows:

```cpp
#include "notes.h"

void setup() {
  tone(D0, NOTE_C4, 500);  // Plays the note C for 500 ms
}

void loop() {
  // Main code
}
```

### Protection against multiple inclusion

To avoid compilation errors caused by multiple inclusion, it is recommended to use **include guards**, as seen above with `#ifndef`, `#define` and `#endif`. A modern alternative is the `#pragma once` directive:

```cpp
#pragma once

#define NOTE_C4  262
#define NOTE_D4  294
```

This directive is more concise and ensures the file is included only once.

---

By using header files in your projects, you can make your code more modular, readable and reusable, and so easier to extend and maintain.

---

{% include message.html
title="To do"
message="Before moving on:

**Level 1:**

- Complete the list of notes with the matching frequencies
- Create the start-up sound of your robot

**Level 2:**

- Write a function that plays a melody stored in an array of integers

```cpp
int melody[] = {NOTE_C4, NOTE_D4, NOTE_OFF, NOTE_F4, ...};
```

**Level 3:**

- Write a function that handles the duration of each note of the melody
 "
status="is-info"
icon="fas fa-pen" %}
