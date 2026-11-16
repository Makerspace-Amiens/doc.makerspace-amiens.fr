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

title: Installing VSCode
subtitle: Set up your development environment for microcontrollers
description: This tutorial explains how to install Visual Studio Code and PlatformIO to program Arduino, ESP32, STM32 and many other microcontrollers.
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

**Visual Studio Code** (VSCode) is a lightweight, powerful code editor developed by Microsoft.

This tutorial guides you through the complete installation on Windows, macOS and Linux.

## Installing Visual Studio Code

### Installing on Windows

{% include step-tuto.html
greyBackground = true
title = "Step 1: Download"
content="Go to the official VSCode website at [https://code.visualstudio.com/](https://code.visualstudio.com/). Click the download button for Windows. The installation file (**VSCodeUserSetup-x64.exe**) will be downloaded." %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Run the installer"
content="Double-click the downloaded file to start the installation. Accept the licence terms." %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Installation options"
content="Tick the following (recommended) options:

- Add 'Open with Code' action to the file context menu
- Add 'Open with Code' action to the directory context menu
- Add to PATH (important for PlatformIO)
- Create a desktop icon

Click **Next** then **Install**." %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Finishing"
content="Once the installation is complete, tick **Launch Visual Studio Code** and click **Finish**. VSCode starts for the first time." %}

### Installing on macOS

{% include step-tuto.html
greyBackground = true
title = "Step 1: Download"
content="Go to [https://code.visualstudio.com/](https://code.visualstudio.com/). Download the version that matches your processor:

- **Apple Silicon** (M1, M2, M3, M4): Download .zip
- **Intel**: Download .zip" %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Installation"
content="1. Double-click the downloaded .zip file to extract it
2. Drag and drop **Visual Studio Code.app** into the **Applications** folder
3. Open the Applications folder and double-click Visual Studio Code" %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: First launch"
content="If macOS shows a security message, go to **System Settings > Privacy & Security**, then allow Visual Studio Code to run." %}

{% include step-tuto.html
greyBackground = true
title = "Step 4: Install 'code' in the PATH"
content="To use VSCode from the terminal (useful for PlatformIO):

1. Open VSCode
2. Press **Cmd+Shift+P** to open the command palette
3. Type **shell command**
4. Select **Shell Command: Install 'code' command in PATH**
5. Confirm with Enter" %}

### Installing on Linux

{% include step-tuto.html
greyBackground = true
title = "Ubuntu / Debian (recommended method)"
content="Download and install the .deb package from the official website:

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Download the **.deb** file
3. Install it with:
`sudo apt install ./code_*.deb`

Or through the official repository:

```bash
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo \"deb [arch=amd64] https://packages.microsoft.com/repos/code stable main\" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```" %}

{% include step-tuto.html
greyBackground = true
title = "Fedora / Red Hat / CentOS"
content="Install the RPM package:

```bash

sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e \"[code]\\nname=Visual Studio Code\\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc\" > /etc/yum.repos.d/vscode.repo'

```

Then:

```bash

sudo dnf check-update
sudo dnf install code

```" %}

{% include step-tuto.html
greyBackground = true
title = "Arch Linux"
content="VSCode is available in the AUR:

`yay -S visual-studio-code-bin`

Or use Snap:
`sudo snap install code --classic`" %}

{% include message.html
title="USB permissions on Linux"
message="On Linux, you will have to configure USB permissions to program microcontrollers. This is explained further on, in the dedicated section."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

## Checking the VSCode installation

{% include step-tuto.html
greyBackground = true
title = "Check that VSCode works"
content="Start Visual Studio Code. You should see:

- The main window with the welcome page
- The activity bar on the left (Explorer, Search, Extensions...)
- An empty editor in the centre

If you see this interface, VSCode is correctly installed!" %}

## Recommended VSCode configuration

Here are a few useful settings to improve your development experience.

{% include step-tuto.html
greyBackground = true
title = "Useful VSCode extensions"
content="Install these extensions to improve your productivity:

- **C/C++** (Microsoft): IntelliSense for C/C++
- **Better C++ Syntax**: Better syntax highlighting
- **Bracket Pair Colorizer 2**: Colours matching pairs of brackets" %}

## Resources and going further

[VSCode Documentation](https://code.visualstudio.com/docs)

{% include message.html
title="Next steps"
message="Now that VSCode is installed, you are ready to install PlatformIO and then build your embedded projects! Explore the examples included, try different boards, and do not hesitate to read the documentation."
status="is-success"
icon="fas fa-rocket" %}
