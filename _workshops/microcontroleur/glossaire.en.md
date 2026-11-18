---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Course glossary
subtitle: The words of the microcontroller, one sentence each
description: The technical terms of the Microcontrollers course defined in one sentence, with a link to the concept that explains them.
author: Alban Petit

todo: 80
---

## How to read this glossary

Each term is defined in one sentence. To go deeper, follow the link to the concept that explains it. The terms are grouped by topic, in the order the course covers them.

## The microcontroller

| Term | Definition | See |
|---|---|---|
| **Microcontroller** (µC, MCU) | A complete computer on a single chip: processor, memories and peripherals | [What is a microcontroller?](/workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/) |
| **SoC** | *System on Chip*: a chip that holds a complete system, here the processor, the peripherals and the Wi-Fi radio of the ESP32-S3 | same |
| **Development board** | A board that carries the microcontroller with everything needed to use it right away (USB, regulator, pins at a 2.54 mm pitch), like the XIAO ESP32S3 | same |
| **Datasheet** | The manufacturer's document giving the electrical characteristics and the pinout of a component | same |
| **Peripheral** | A hardware block built into the chip that performs a function without the processor: GPIO, ADC, UART, SPI, timer... | [Architecture of a microcontroller](/workshops/microcontroleur/concepts/architecture-microcontroleur/) |
| **Register** | A small memory cell that controls a peripheral: writing a bit into a register turns a pin on, for example | same |
| **Flash memory** | The non-volatile memory that keeps the program when the board is switched off | same |
| **RAM** (SRAM) | The working memory, fast and erased at every power cut: it holds the variables | same |
| **Stack** | The RAM area where the local variables of functions live, freed when each function returns | same |
| **Heap** | The RAM area where the program reserves memory on demand; it fragments over time | same |
| **Interrupt** (ISR) | A function called by the hardware as soon as an event occurs, suspending the running program | same |
| **`volatile`** | The keyword that forbids the compiler from caching a variable: mandatory if an interrupt modifies it | same |
| **Watchdog** | A timer that restarts the chip if the program has not shown a sign of life in time | same |

## From the code to the chip

| Term | Definition | See |
|---|---|---|
| **Compiler** | The program that translates C or C++ code into machine instructions for a given processor | [From hardware to software](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/) |
| **Compiled / interpreted** | A compiled language is translated once and for all before execution; an interpreted language is read and executed line by line, every time it runs | same |
| **Linking** | The step that assembles the compiled files and the libraries into a single program | same |
| **Firmware** | The program running on the microcontroller | same |
| **Bootloader** | A small program, started at boot, that can receive a new firmware and write it to flash | same |
| **Toolchain** | The set of tools that turn the source code into uploaded firmware: compiler, linker, flashing tool | same |
| **PlatformIO** | The VSCode extension that drives the toolchain, the libraries and the upload | [PlatformIO](/docs/references/software/platformIO/) |
| **Arduino framework** | The library that provides `setup()`, `loop()`, `digitalWrite()`... for many boards, including the ESP32 (Arduino-ESP32) | [From hardware to software](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/) |
| **Serial monitor** | The window that displays what the board sends through `Serial`, and the first debugging tool | [Debugging an embedded program](/docs/how-to-guides/deboguer-programme-embarque/) |

## Inputs and outputs

| Term | Definition | See |
|---|---|---|
| **GPIO** | A general-purpose pin, configurable as a digital input or output | [GPIO & the digital world](/workshops/microcontroleur/concepts/gpio-monde-numerique/) |
| **Logic level** | The state of a digital signal: `HIGH` (3.3 V on the ESP32) or `LOW` (0 V) | same |
| **Floating input** | An input connected to nothing, which reads a random level | same |
| **Pull-up / pull-down resistor** | A resistor that forces a default level on an input, towards 3.3 V or towards ground | same |
| **Bounce** | The spurious openings and closings of a mechanical contact for a few milliseconds | same |
| **Edge** | The change from one level to the other: rising (`LOW` to `HIGH`) or falling | same |
| **Open-drain** | An output that can only pull the line to ground; a pull-up resistor brings it back to the high level | [Communication buses](/workshops/microcontroleur/concepts/bus-communication/) |
| **ADC** | The converter that turns a voltage into a number (from 0 to 4095 on 12 bits) | [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/) |
| **Resolution** | The number of bits of a conversion, and therefore the number of possible values | same |
| **PWM** | A square signal whose duty cycle is varied to simulate an average voltage or produce a note | same |
| **Duty cycle** | The share of time a PWM signal is high, as a percentage | same |

## Communication buses

| Term | Definition | See |
|---|---|---|
| **Serial / parallel link** | The bits travel one after the other on one wire (serial), or all at once on several wires (parallel) | [Communication buses](/workshops/microcontroleur/concepts/bus-communication/) |
| **Synchronous / asynchronous** | A synchronous link carries a clock with the data; an asynchronous link relies on a speed agreed in advance | same |
| **Master / slave** | The master leads the exchanges and generates the clock; the slaves answer when it calls on them | same |
| **UART** | An asynchronous point-to-point serial link over two wires, TX and RX | same |
| **Baud** | The speed of a serial link, in symbols per second (115,200 baud for the serial monitor) | same |
| **I2C** | A two-wire bus (SDA, SCL) where each slave has an address | same |
| **SPI** | A fast four-wire bus (SCK, MOSI, MISO, CS), used by the console's display | same |

## The game

| Term | Definition | See |
|---|---|---|
| **State machine** (FSM) | A way of organising a program into states (welcome, game, game over) and transitions triggered by events | [Finite state machine](/workshops/microcontroleur/concepts/machine-etats-finis/) |
| **Game loop** | The cycle read the inputs, update the game, draw, repeated continuously without ever blocking | same |
| **`millis()`** | The number of milliseconds elapsed since boot, to measure time without `delay()` | same |
| **Blocking program** | A program that waits (`delay()`, waiting loop) and does nothing else in the meantime | same |

## The board

| Term | Definition | See |
|---|---|---|
| **Schematic** | The drawing of the components and their electrical connections | [KiCad](/docs/references/software/kicad/) |
| **Footprint** | The shape of the copper pads a component is soldered onto | same |
| **Routing** | The layout of the copper tracks that make the connections of the schematic | same |
| **ERC / DRC** | The automatic checks of the schematic (electrical rules) and of the printed circuit board (manufacturing rules) | same |
| **Decoupling capacitor** | A capacitor placed as close as possible to a component's power supply to filter current spikes | [Designing the console board](/workshops/microcontroleur/tutorials/conception-carte-kicad/) |
| **SMD** | Surface-mount device, soldered onto pads without going through the board | [Soldering and testing the board](/workshops/microcontroleur/tutorials/souder-tester-carte/) |

## The network

| Term | Definition | See |
|---|---|---|
| **Access point** (AP) | The mode where the ESP32 creates its own Wi-Fi network, which the phone connects to | [Wi-Fi, HTTP and WebSocket](/docs/concepts/reseau-wifi-websocket/) |
| **Web server** | The program that answers the browser's HTTP requests by sending it the page | same |
| **WebSocket** | A connection that stays open between the browser and the console, to exchange messages both ways in real time | same |
| **Protocol** | The list of messages exchanged, their format and their meaning | same |
| **JSON** | A text format for structuring messages, for example `{"type":"score","value":3}` | same |
