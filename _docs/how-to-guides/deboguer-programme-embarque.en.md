---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true
type: how-to

title: Debugging an embedded program
subtitle: Finding out why the board does not do what you expect
description: "A step-by-step method for finding a bug on an ESP32 microcontroller: describe, check the hardware, trace, isolate, read a crash."
author: Alban Petit

time: 1
difficulty: 2
todo: 90

prerequisites:
  - label: Know how to upload a program and open the serial monitor
    link: /docs/tutorials/electronics/vscode-port-serie/
softwares:
  - label: PlatformIO IDE (VSCode extension)
    link: /docs/references/software/platformIO/
hardwares:
  - label: ESP32 board (XIAO ESP32S3 in the workshop)
    link: /docs/references/hardware/xiao-esp32s3/
---

## Context

This guide applies when the program compiles and uploads, but the board does not do what you expect: nothing happens, the behaviour is wrong, or the board restarts in a loop. On a microcontroller, there is no error screen and no debugger at hand: the method matters more than the tool. Work from the simplest to the finest, changing **only one thing at a time**.

## Procedure

### 1. Describe the problem precisely

Before touching the code, write in one sentence **what you expect** and **what you observe**: "when I press the stick, the game should start; the screen stays on the home screen". Also note **when** it happens: always, at start-up, after a few minutes, after a specific action.

A problem you can reproduce is already half solved. A problem that "happens sometimes" first requires finding what triggers it.

### 2. Rule out the hardware

One bug in two is not in the code. Check in this order:

- power: is the board really powered, is the 3.3 V present?
- wiring: is every wire on the right pin, pushed firmly into the breadboard (or every solder joint sound on the board)?
- the pin in the code: does it match the wiring (`D5` and not `5`, which means GPIO5)?

The test programs of Lab 2 ([The kit modules](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/)) check each module separately: if they work, the hardware is not to blame. For a board that no longer shows up or a display that stays black, see the guides [Recovering an ESP32-S3 board that no longer shows up](/docs/how-to-guides/esp32-s3-carte-introuvable/) and [Troubleshooting an SPI TFT display that shows nothing](/docs/how-to-guides/ecran-tft-noir/).

### 3. Make the program talkative

The serial monitor is your first debugging tool. Print what the program is doing, and above all **the values** it is handling:

```cpp
void setup() {
    Serial.begin(115200);
    delay(1500);                         // lets the serial monitor reopen
    Serial.println("Starting");
}

void loop() {
    // ...
    Serial.printf("[%lu ms] state=%d x=%.2f score=%d\n",
                  millis(), (int)game.state, joystickX, game.score);
}
```

A few rules for useful traces:

- **timestamp** with `millis()`: you see what happens when, and how often;
- print **transitions** rather than a message on every pass of `loop()` (otherwise the monitor scrolls too fast to read): for example only when the state changes;
- **never** call `Serial.print()` in an interrupt function: raise a flag there, and let `loop()` print;
- a trace that **does not appear** is information too: the program never went that way.

### 4. Isolate the fault

Reduce the problem to the smallest part that still shows it:

1. **Go back to what worked**: what was the last change before the bug appeared? With Git, `git diff` shows what has changed since the last commit, and `git stash` sets your changes aside while you check that the old version works.
2. **Cut in half**: disable half of the program (by commenting out its calls in `loop()`). If the bug disappears, it is in that half; otherwise, in the other. Start again on the right half.
3. **Write a minimal program**: a twenty-line `main.cpp` that only does the thing causing trouble. If it works, the fault comes from an interaction with the rest of the program.

### 5. Test one hypothesis at a time

State a hypothesis ("the button is read the wrong way round"), think of the test that would confirm or refute it ("print `digitalRead()` with the button released, then pressed"), run that test, then make only **one** change. Changing three things at once means never knowing which one solved the problem, or which one created another.

Write down your hypotheses and results in your logbook: it is the best way not to go round in circles, and it is exactly what is expected in the project documentation.

### 6. Read a crash

When the ESP32 crashes, it writes the cause to the serial monitor before restarting. Do not close the monitor: read the first line.

| Message | What it means | Common causes |
|---|---|---|
| `Guru Meditation Error: Core 1 panic'ed (LoadProhibited)` or `(StoreProhibited)` | Read or write at a forbidden address | Null pointer, array index out of bounds |
| `Stack canary watchpoint triggered (loopTask)` | The **stack** of `loop()` overflowed | Large array declared in a function, recursion |
| `Task watchdog got triggered` | A task did not yield in time | `while` loop that never ends, busy waiting |
| Restarts in a loop with no readable message | Crash right at start-up | Error in `setup()`, insufficient power supply |

The crash comes with a `Backtrace:` line full of addresses. PlatformIO can translate it into function names and line numbers: add this filter to `platformio.ini`, then restart the monitor.

```ini
monitor_filters = esp32_exception_decoder
```

### 7. Ask for help effectively

When you are stuck, a good question saves everyone time. It contains:

- what you expect and what you observe (step 1);
- what you have already checked and tried, with the results;
- the **smallest** piece of code that shows the problem, and the exact message from the serial monitor.

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| Nothing appears in the serial monitor | Speed different from `Serial.begin()`, messages sent before the port opened | Same speed on both sides (115,200); `delay(1500)` after `Serial.begin()` |
| Unreadable characters in the monitor | Monitor speed different from the program's | Set `monitor_speed = 115200` in `platformio.ini` |
| The program works, then freezes after a while | Counter overflow, heap fragmentation, endless wait | Trace with `millis()` to date the freeze, then isolate (step 4) |
| A button counts several presses | Contact bounce | Debounce with `millis()` |
| A value changes "by itself" | Variable modified by an interrupt without `volatile`, or overwritten by an array that is too small | `volatile` on shared variables; check array sizes |
| The behaviour changes when you add a trace | Timing problem (a trace slows the loop down) | Suspect a `delay()`, a wait or a time-dependent order of operations |

## See also

- The concept [From hardware to software](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/): compiling, linking and reading errors.
- The concept [Architecture of a microcontroller](/workshops/microcontroleur/concepts/architecture-microcontroleur/): the stack, the heap and interrupts.
- [Keeping a logbook](/workshops/methodologie-de-projet/tutorials/journal-de-bord/): keeping track of what you try.
