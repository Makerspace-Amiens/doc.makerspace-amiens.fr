---
layout: documentation
lang: en
hide_hero: false
hero_image: "hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 10

title: Installing PlatformIO
subtitle: Set up your development environment for microcontrollers
description: This tutorial explains how to install PlatformIO to program Arduino, ESP32, STM32 and many other microcontrollers.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Administrator rights on your computer
    link: ""

softwares:
  - label: Visual Studio Code (latest version)
    link: "https://code.visualstudio.com/"
  - label: PlatformIO IDE (VSCode extension)
    link: "https://platformio.org/"

hardwares:
  - label: Computer with at least 4GB of RAM
    link: ""
  - label: Internet connection to download the tools
    link: ""

todo: 100
---

## Introduction

**PlatformIO** is a professional development platform for microcontrollers that integrates into VSCode as an extension.

Together, VSCode + PlatformIO offer:

- Support for hundreds of development boards (Arduino, ESP32, ESP8266, STM32, Raspberry Pi Pico...)
- Automatic management of libraries and dependencies
- Built-in compiling, uploading and debugging
- IntelliSense (smart autocompletion)
- Multi-platform project management

This tutorial guides you through the complete installation on Windows, macOS and Linux.

{% include message.html
title="Why PlatformIO rather than the Arduino IDE?"
message="PlatformIO offers advanced project management, faster builds, better library management, support for several platforms in the same project, and professional debugging tools. It is the reference tool for serious projects."
status="is-info"
icon="fas fa-info-circle" %}

---

## Installing PlatformIO

Now that VSCode is installed, we will add the PlatformIO extension, which turns VSCode into a complete IDE for microcontrollers.

{% include step-tuto.html
greyBackground = true
title = "Step 1: Open the extension manager"
content="In VSCode, click the **Extensions** icon in the activity bar on the left (stacked squares icon) or use the shortcut:

- Windows/Linux: **Ctrl+Shift+X**
- macOS: **Cmd+Shift+X**" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Search for PlatformIO"
content="In the extensions search bar, type **platformio**. You should see the **PlatformIO IDE** extension by PlatformIO." image="platformio-install.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Install the extension"
content="Click the **Install** button. Installation takes a few minutes because PlatformIO automatically downloads:

- Python (if needed)
- PlatformIO Core
- The build tools

**Be patient, and do not close VSCode during the installation!**" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Wait for the installation to finish"
content="Once the installation is complete, you will see:

- A PlatformIO icon (alien head) in the activity bar on the left
- A notification saying that PlatformIO is ready
- Possibly a request to restart VSCode

If asked, click **Reload Now**." %}

{% include message.html
title="A long first installation"
message="The first installation of PlatformIO can take 5-10 minutes depending on your internet connection. PlatformIO downloads all the tools needed (compilers, flashing tools and so on). This is normal, be patient!"
status="is-info"
icon="fas fa-clock" %}

---

## Checking the PlatformIO installation

{% include step-tuto.html
greyBackground = true
title = "Step 1: Open PlatformIO Home"
content="Click the **PlatformIO** icon (alien head) in the activity bar on the left. A panel opens with several options. Click **PIO Home** then **Open**." image="platformio-navbar.png" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: The PlatformIO Home interface"
content="The PlatformIO home page opens with several sections:

- **New Project**: Create a new project
- **Open Project**: Open an existing project
- **Platforms**: Manage the supported platforms
- **Libraries**: Manage libraries
- **Boards**: See the supported boards

If you see this page, **congratulations**! PlatformIO is correctly installed." image="platformio-home.png" %}

---

## Configuring USB permissions (Linux only)

On Linux, you must configure permissions to access USB ports without sudo.

{% include step-tuto.html
greyBackground = true
title = "Add the user to the dialout group"
content="Open a terminal and run:

```bash
sudo usermod -a -G dialout $USER
sudo usermod -a -G plugdev $USER

```

**Log out and log back in** (or restart the computer) for the changes to take effect." %}

{% include step-tuto.html
greyBackground = true
title = "Install the udev rules (optional)"
content="For better support of some boards (ESP32, STM32...), install the PlatformIO udev rules:

```bash

curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core/master/scripts/99-platformio-udev.rules | sudo tee /etc/udev/rules.d/99-platformio-udev.rules

```

Then reload the rules:

```bash

sudo udevadm control --reload-rules
sudo udevadm trigger

```" %}

{% include message.html
title="Restart required"
message="After adding your user to the dialout and plugdev groups, you MUST log out and log back in (or restart) for the permissions to take effect. Otherwise PlatformIO will not be able to access the USB ports."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

{% include step-tuto.html
greyBackground = true
title = "PlatformIO keyboard shortcuts"
content="Memorise these essential shortcuts:

**Windows/Linux:**
- **Ctrl+Alt+B**: Build
- **Ctrl+Alt+U**: Upload
- **Ctrl+Alt+S**: Serial monitor
- **Ctrl+Alt+T**: Run task (a specific task)

**macOS:**
- **Cmd+Alt+B**: Build
- **Cmd+Alt+U**: Upload
- **Cmd+Alt+S**: Serial monitor" %}

---

## Troubleshooting

### Problem: PlatformIO does not start after installation

{% include step-tuto.html
greyBackground = true
title = "Solution 1: Reinstall PlatformIO"
content="1. Uninstall the PlatformIO extension in VSCode
2. Close VSCode completely
3. Delete the `~/.platformio` folder (Linux/macOS) or `C:\\Users\\YourName\\.platformio` (Windows)
4. Reopen VSCode and reinstall PlatformIO" %}

{% include step-tuto.html
greyBackground = true
title = "Solution 2: Python problem"
content="PlatformIO needs Python. Check that Python is installed:
`python --version` or `python3 --version`

If Python is not installed, download it from [python.org](https://www.python.org/) and reinstall PlatformIO." %}

### Problem: USB port not detected (Linux)

{% include step-tuto.html
greyBackground = true
title = "Check the USB permissions"
content="Make sure you have followed the USB configuration steps (previous section):
```bash

sudo usermod -a -G dialout $USER
sudo usermod -a -G plugdev $USER

```

Then log out and log back in." %}

### Problem: "tool-chain not found" compilation error

{% include step-tuto.html
greyBackground = true
title = "Reinstall the platform"
content="1. Open PlatformIO Home
2. Go to **Platforms > Installed**
3. Find your platform (e.g. Espressif 32) and click **Uninstall**
4. Reinstall the platform from **Platforms > Embedded**
5. Try compiling again" %}

---

## Creating your first PlatformIO project

Let us test the installation by creating a simple "Blink" project.

{% include step-tuto.html
greyBackground = true
title = "Step 1: New project"
content="1. Click the PlatformIO icon in the left bar
2. Click **PIO Home > Open**
3. Click **+ New Project**" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Project configuration"
content="Fill in the following fields:

- **Name**: `test_blink`
- **Board**: Select your board (for example: `Arduino Uno`, `Seeed Studio XIAO ESP32S3`, `ESP32 Dev Module`...)
- **Framework**: Leave `Arduino`, the default
- **Location**: Leave the default path or choose a folder

Click **Finish**. PlatformIO creates the project and downloads the tools needed for your board." %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Test code"
content="PlatformIO automatically creates the project structure. Open the file **src/main.cpp**. Replace its contents with this Blink test code:

```cpp
#include <Arduino.h>

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```" %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Build the project"
content="To build the project:

1. Click the **✓** (tick) icon in the status bar at the bottom (Build)
2. Or use the shortcut: **Ctrl+Alt+B** (Windows/Linux) / **Cmd+Alt+B** (macOS)

PlatformIO compiles the code. If all goes well, you will see **SUCCESS** in the terminal." %}

{% include message.html
title="A long first build"
message="The first build of a project for a new platform can take several minutes, because PlatformIO downloads the compiler, libraries and frameworks needed. Later builds will be much faster!"
status="is-info"
icon="fas fa-hourglass-half" %}

{% include step-tuto.html
greyBackground = true
title = "Step 5: Upload to the board (optional)"
content="If you have a board connected, you can upload the program:

1. Plug in your board over USB
2. Click the **→** (arrow) icon in the status bar (Upload)
3. Or use the shortcut: **Ctrl+Alt+U** (Windows/Linux) / **Cmd+Alt+U** (macOS)

PlatformIO compiles and uploads automatically. The LED of your board should blink!" %}

{% include message.html
title="Installation successful!"
message="If the build succeeds, your VSCode + PlatformIO installation is complete and working. You are ready to develop your embedded projects!"
status="is-success"
icon="fas fa-check-circle" %}

---

## Installing libraries

Libraries are declared directly in the `platformio.ini` file with the `lib_deps` key. This is the recommended method: dependencies are versioned with the project and installed automatically at build time.

{% include step-tuto.html
greyBackground = true
title = "Step 1: Find the identifier of the library"
content="Go to the official registry [registry.platformio.org](https://registry.platformio.org/) and search for the library you want. Note its identifier in the `author/LibName` format (e.g. `waspinator/AccelStepper`)." %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Add lib_deps to platformio.ini"
content="Open the `platformio.ini` file at the root of your project and add the `lib_deps` key:

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
lib_deps =
    waspinator/AccelStepper@^1.64
```

To add several libraries, list them one under the other:

```ini
lib_deps =
    waspinator/AccelStepper@^1.64
    bblanchon/ArduinoJson@^7.0.0
```" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Build to install"
content="Start a build with **Ctrl+Alt+B** (Windows/Linux) or **Cmd+Alt+B** (macOS). PlatformIO automatically downloads and installs all the libraries listed in `lib_deps` before compiling." %}

{% include message.html
title="Version format"
message="The **^** symbol means « compatible version » (e.g. `^1.64` accepts 1.64, 1.65... but not 2.0). Use `@*` to always take the latest version, or an exact number such as `@1.64.0` to pin the version."
status="is-info"
icon="fas fa-tag" %}

---

## Resources and going further

### Official documentation

- [PlatformIO documentation](https://docs.platformio.org/)
- [VSCode Documentation](https://code.visualstudio.com/docs)
- [PlatformIO Boards](https://platformio.org/boards): full list of supported boards
- [PlatformIO Libraries](https://platformio.org/lib): library registry

### Tutorials and guides

- [PlatformIO Getting Started](https://docs.platformio.org/en/latest/integration/ide/vscode.html)
- [PlatformIO forum](https://community.platformio.org/)

### Useful CLI commands

If you prefer to use PlatformIO from the command line:

```bash
# Create a new project
pio project init --board <board_name>

# Build
pio run

# Upload
pio run --target upload

# Open the serial monitor
pio device monitor

# List the available boards
pio boards

# Search for a library
pio lib search <lib_name>

# Install a library
pio lib install <lib_name>
```

### Structure of a PlatformIO project

```text
my_project/
├── .pio/               # Build files (generated automatically)
├── include/            # Header files (.h)
├── lib/                # Private libraries
├── src/                # Source code (.cpp, .c)
│   └── main.cpp        # Main file
├── test/               # Unit tests
├── platformio.ini      # Project configuration
└── .gitignore          # Files for Git to ignore
```

The **platformio.ini** file configures the project:

```ini
[env:myboard]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
lib_deps =
    adafruit/Adafruit Sensor@^1.1.4
    bblanchon/ArduinoJson@^6.21.0
```

{% include message.html
title="Next steps"
message="Now that VSCode and PlatformIO are installed, you are ready to develop your embedded projects! Explore the examples included, try different boards, and do not hesitate to read the documentation."
status="is-success"
icon="fas fa-rocket" %}
