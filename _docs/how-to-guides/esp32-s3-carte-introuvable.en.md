---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true
type: how-to

title: Recovering an ESP32-S3 board that no longer shows up
subtitle: Serial port not found, upload impossible, BOOT mode
description: Find the port of a native-USB ESP32-S3 board (XIAO ESP32S3, DevKitC) again and reflash it when the upload fails.
author: Alban Petit

time: 1
difficulty: 2
todo: 90

prerequisites:
  - label: A PlatformIO project that compiles for the board
    link: /docs/tutorials/software/vscode-platformio/installation-platformio/
softwares:
  - label: PlatformIO IDE (VSCode extension)
    link: /docs/references/software/platformIO/
hardwares:
  - label: Seeed Studio XIAO ESP32S3 board (or another ESP32-S3 board)
    link: /docs/references/hardware/xiao-esp32s3/
---

## Context

This guide applies when the board can no longer be programmed: the serial port no longer appears on the computer, or the upload fails with a message such as `Failed to connect to ESP32-S3: No serial data received`, `Could not open port` or `No such file or directory`. Most of the time, there is nothing wrong with the board: the running program, the cable or the port is to blame.

{% include message.html title="Why the port disappears" message="On the XIAO ESP32S3, there is no USB-to-serial chip: the USB port is handled by the chip itself, **while your program is running**. A program that crashes in a loop, puts the board into deep sleep or uses the USB pins (GPIO19/20) makes the port disappear. BOOT mode bypasses the program: the chip starts by itself and opens its own port." status="is-info" icon="fas fa-info-circle" %}

## Procedure

Follow the steps in order: each one deals with the most common cases before moving on to the next.

### 1. Check the cable and the USB port

- Use a USB-C cable that carries **data**: many cables only charge. If in doubt, try a cable that has already been used to program a board.
- Plug the board **directly** into the computer, with no hub or extension, and try another USB port.

### 2. See whether the port exists

| System | Where to look | Expected name |
|---|---|---|
| Windows | Device Manager, **Ports (COM & LPT)** section | `USB Serial Device (COMx)` |
| macOS | Terminal: `ls /dev/cu.usbmodem*` | `/dev/cu.usbmodem...` |
| Linux | Terminal: `ls /dev/ttyACM*` | `/dev/ttyACM0` |

PlatformIO also lists the ports under **Devices** (PlatformIO sidebar), or with the `pio device list` command in its terminal. Unplug the board and plug it back in while watching the list: the port that appears is its port.

### 3. Free the port

A port can only be opened once. If it exists but the upload fails with `Access denied`, `port busy` or `Resource busy`, close everything that may be holding it: an open serial monitor (even in another VSCode window), the Arduino IDE, a plotting program (TelePlot, Processing). Then start the upload again.

### 4. Force BOOT mode

1. **Unplug** the board.
2. **Hold down** the **BOOT** button (marked `B` on the XIAO, next to the USB-C connector).
3. **Plug the cable back in**, with the button still held down.
4. **Release** BOOT.

The board then starts on its internal bootloader, without running your program: a port reappears (sometimes under another name or number). Start the upload; PlatformIO finds the port by itself. Once the upload is finished, press **RESET** (marked `R`): your new program starts.

{% include message.html title="Reflash a known-good program" message="In BOOT mode, upload a program you are sure of (the Blink from [Checking the toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/), for example). If the board works again, the problem came from your program: reread your last change before reflashing it." status="is-success" icon="fas fa-check-circle" %}

### 5. Erase the whole Flash memory

If BOOT mode works but the problem comes back as soon as your program starts, erase the Flash completely, still in BOOT mode:

- in the PlatformIO sidebar: **Project Tasks**, your environment, **Platform**, **Erase Flash**;
- or in the PlatformIO terminal: `pio run -t erase`.

Then upload the Blink, then your program.

### 6. Grant access to the port (Linux)

If the port exists but the upload fails with `Permission denied`, your user is not allowed to open the port. Add it to the `dialout` group (the name can vary with the distribution), then log out and log back in:

```bash
sudo usermod -aG dialout $USER
```

PlatformIO also provides `udev` rules for its boards: see its documentation, section *FAQ > Troubleshooting > 99-platformio-udev.rules*.

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| No port, whatever the cable | Charge-only cable | Step 1: another cable, one that carries data |
| The port appears then disappears in a loop | Program that crashes and restarts (*panic*, watchdog) | Step 4, then reflash a known-good program; read the error in the serial monitor if it shows |
| The port disappears as soon as the program starts | Deep sleep, USB pins (GPIO19/20) in use | Step 4, then remove the sleep or those pins from the program |
| `Access denied`, `port busy` | Serial monitor or other software open | Step 3 |
| `Permission denied` (Linux) | User not in the `dialout` group | Step 6 |
| The upload succeeds, but nothing happens | The board stayed in BOOT mode | Press RESET |
| The first messages of `setup()` do not appear | The serial monitor reopens after the reset, too late | Add `delay(1500);` after `Serial.begin()` |
| The board gets hot, or the computer reports a USB power surge | Short circuit on the board or the circuit | Unplug immediately, inspect the wiring or the solder joints |

## See also

- The sheet [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/): native USB, BOOT and RESET buttons, reserved pins.
- The concept [From hardware to software](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/): the boot sequence and the role of the BOOT button.
