---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Measuring memory and inference time
subtitle: Find out whether a model fits on the board, and whether it answers fast enough
description: "Measure the Flash and RAM used by a model on an ESP32-S3, and the duration of an inference, to compare two versions of a model."
author: Alban Petit

time: 1
difficulty: 2
todo: 60

prerequisites:
  - label: What is TinyML?
    link: /workshops/tinyml/concepts/qu-est-ce-que-le-tinyml/
  - label: The serial port in VSCode
    link: /docs/tutorials/electronics/vscode-port-serie/
---

## Context

A model that works on the computer can be too big for the board, or too slow to react in time. Before choosing between two versions (more layers, quantised or not), measure three things: the **Flash** it takes up, the **RAM** it needs to compute, and the **time** of one inference.

## Procedure

### 1. Read the usage at build time

On every build, PlatformIO prints the memory usage:

```text
RAM:   [==        ]  15.2% (used 49812 bytes from 327680 bytes)
Flash: [===       ]  28.4% (used 949201 bytes from 3342336 bytes)
```

- **Flash**: the program and the model, stored as a constant array. It is the size of the model that makes it climb.
- **RAM**: here, only the global and `static` variables, including the model's working area if it is declared globally.

Build once **without** the model and once **with** it: the difference is what the model costs.

### 2. Measure RAM at run time

The build does not see the memory allocated at run time (the heap). Print it from the program, before and after loading the model:

```cpp
Serial.printf("Free heap: %lu bytes\n", (unsigned long)ESP.getFreeHeap());
Serial.printf("Lowest reached since start-up: %lu bytes\n", (unsigned long)ESP.getMinFreeHeap());
```

`ESP.getMinFreeHeap()` is the figure that matters: the minimum reached since start-up. If it drops below a few tens of kilobytes, Wi-Fi or a `String` can be enough to crash the board.

### 3. Time an inference

Surround the call to the model with two readings of `micros()`, and average over several calls: the first inference is often slower than the following ones.

```cpp
constexpr int RUNS = 50;

uint32_t start = micros();
for (int i = 0; i < RUNS; i++) {
    runInference();          // replace with the real call to the model
}
unsigned long averageUs = (micros() - start) / RUNS;
Serial.printf("Inference: %lu µs on average\n", averageUs);
```

Compare this time with your constraint: for gestures sampled every 2 seconds, 50 ms is more than enough; for a game paced at 16 ms per frame, the inference must fit within that budget, or run on the other core.

### 4. Record the results

Record each version in a table, in your logbook:

| Model version | Flash | RAM (minimum free) | Inference | Accuracy |
|---|---|---|---|---|
| float32 | | | | |
| int8 (quantised) | | | | |

This table is what justifies the final choice, in writing as well as orally.

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| `region 'dram0_0_seg' overflowed` at build time | Too many global variables, or the model's working area is too large | Reduce the working area, or put it in PSRAM |
| The board restarts when the model loads | Not enough heap left | Check `ESP.getMinFreeHeap()`, avoid `String`s, quantise the model |
| Very variable inference time | Wi-Fi interrupts the computation | Measure with Wi-Fi off, then with Wi-Fi on, and keep the worst case |
| The time printed is 0 | A single inference, shorter than a measurable microsecond, or optimised away by the compiler | Average over several calls, and use the result of the inference |

## See also

- [Debugging an embedded program](/docs/how-to-guides/deboguer-programme-embarque/): reading a crash in the serial monitor.
- The concept [Architecture of a microcontroller](/workshops/microcontroleur/concepts/architecture-microcontroleur/): Flash, RAM, stack and heap.
