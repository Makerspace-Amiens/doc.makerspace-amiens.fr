---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.jpg
hero_height: is-small
hero_darken: true
image: hero.jpg
component_toc: true
doc_header: true
type: tutorial

title: SPI display and game loop
subtitle: Wire the display, draw the first shapes and bounce a ball
description: Drive an ST7789 TFT display over SPI with the Adafruit library, then build a non-blocking game loop with a paddle and a ball.
author: Alban Petit

time: 3
difficulty: 3

prerequisites:
  - label: "The kit modules"
    link: /workshops/microcontroleur/tutorials/entrees-boutons-joystick/
  - label: "Concept: Communication buses"
    link: /workshops/microcontroleur/concepts/bus-communication/

softwares:
  - label: PlatformIO IDE (VSCode extension)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Seeed Studio XIAO ESP32S3 board
    link: /docs/references/hardware/xiao-esp32s3/
  - label: ST7789 SPI TFT display, 240 × 320
    link: /docs/references/hardware/ecran-tft-spi-st7789/

todo: 90
---

## SPI display and game loop

This tutorial adds a **display** to a XIAO ESP32S3 setup that already has a joystick, wired and calibrated as in the tutorial [The kit modules](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/) (from which it reuses the `calibrateJoystick()` and `normalizeJoystick()` functions). By the end, a paddle follows the joystick and a ball bounces off the edges of the screen: the first visual building blocks of a game.

### Additional workshop wiring

| Signal | XIAO pin | Role |
|---|---|---|
| SCK | D9 (GPIO8) | SPI clock |
| MOSI | D10 (GPIO9) | Data, CPU → display |
| DC | D8 (GPIO7) | Command / data switch |
| RESET | D7 (GPIO44) | Hardware reset of the display |
| CS | GND | Display permanently selected |
| LED (backlight) | 3V3 | Backlight always on |
| VCC / GND | 3V3 / GND | Display power |

```mermaid
graph LR
  SCK --> D9["D9"]
  MOSI --> D10["D10"]
  DC --> D8["D8"]
  RESET --> D7["D7"]
  CS --> GND["GND"]
  LED --> V33["3V3"]
```

This is the wiring of the project PCB. It saves two pins: **CS** is tied to GND, because the display is the only device on the SPI bus and can therefore stay selected permanently; the **backlight** is connected straight to 3V3. With the buttons, the joystick and the I2C connector, all 11 pins of the XIAO are thus in use.

{% include message.html title="The SPI clock is not on D8" message="The XIAO's default SCK is D8, but the PCB puts it on **D9** (and DC on D8). The ESP32-S3 routes SPI to any pin thanks to its GPIO matrix: you just need to pass the right pins to `SPI.begin()` (step 2). An example found online for the XIAO would use the default pins and leave the screen black." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include message.html title="MISO not used" message="The display never sends useful data back to the ESP32: only the CPU → display direction (MOSI) is wired. That is the difference between a full SPI bus and this write-only use: see the concept [Communication buses](/workshops/microcontroleur/concepts/bus-communication/)." status="is-info" icon="fas fa-info-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 1: Add the display library"
content="There is no need to rewrite the protocol of the ST7789 controller: the **Adafruit ST7735 and ST7789** library takes care of it. Add it to your `platformio.ini`; PlatformIO also downloads its dependency **Adafruit GFX**, which provides the drawing functions (rectangles, circles, text)."
%}

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
monitor_speed = 115200
lib_deps =
    adafruit/Adafruit ST7735 and ST7789 Library@^1.11.0
```

Then add the display pinout and its dimensions at the end of `include/config.h`. Portrait mode is used: the screen is 240 pixels wide and 320 high.

```cpp
// ST7789 240x320 TFT display (connector J1)
constexpr int PIN_TFT_RESET = D7;
constexpr int PIN_TFT_DC    = D8;   // Data/Command: 0 = command, 1 = data
constexpr int PIN_TFT_SCK   = D9;   // SPI clock
constexpr int PIN_TFT_MOSI  = D10;  // SPI data (microcontroller -> display)
constexpr int PIN_TFT_CS    = -1;   // CS is tied to GND on the board: the display
                                    // is always selected (-1 = no pin)

constexpr uint32_t TFT_SPI_FREQUENCY = 40000000;  // 40 MHz

// Rotation 0 = portrait, 2 = portrait rotated by 180 degrees
constexpr int SCREEN_ROTATION = 2;
constexpr int SCREEN_WIDTH    = 240;
constexpr int SCREEN_HEIGHT   = 320;
```

{% include step-tuto.html
greyBackground=true
title="Step 2: Initialise the display and draw"
content="The `tft` object represents the display. Before drawing, start the SPI bus **on the PCB pins**, then initialise the display. The coordinate system has its origin `(0, 0)` at the **top left**: x increases to the right, y **downwards**."
%}

```cpp
#include <Arduino.h>
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7789.h>

#include "config.h"

Adafruit_ST7789 tft(&SPI, PIN_TFT_CS, PIN_TFT_DC, PIN_TFT_RESET);

void setup() {
    // SPI pins of the PCB (no MISO: the display sends nothing back)
    SPI.begin(PIN_TFT_SCK, -1, PIN_TFT_MOSI, PIN_TFT_CS);

    tft.init(SCREEN_WIDTH, SCREEN_HEIGHT, SPI_MODE3);
    tft.setSPISpeed(TFT_SPI_FREQUENCY);
    tft.setRotation(SCREEN_ROTATION);
    tft.fillScreen(ST77XX_BLACK);

    tft.setTextSize(4);                 // 6 x 8 pixel font, multiplied by 4
    tft.setTextColor(ST77XX_WHITE);
    tft.setCursor(72, 40);              // (240 - 4 letters x 6 x 4) / 2 = 72: centred
    tft.print("PONG");

    tft.drawRect(20, 120, 200, 60, ST77XX_WHITE);   // rectangle (outline)
    tft.fillCircle(120, 250, 20, ST77XX_YELLOW);    // disc (filled)
}

void loop() {}
```

{% include message.html title="Why SPI_MODE3?" message="SPI has four modes, depending on the idle state of the clock and the edge on which data is read. With an active CS, the display knows when a frame starts. Here, CS is permanently tied to GND: the ST7789 then relies on the clock, which must **idle high**. That is **mode 3**. With the default mode, a display without CS often stays black even though everything compiles." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include message.html title="Black screen after flashing?" message="Check in this order: is the backlight (LED/BLK) powered from 3V3? Does `SPI.begin()` really receive D9 and D10? Is `tft.init()` called with `SPI_MODE3`? Are DC (D8) and RESET (D7) swapped in the wiring? These points cover almost all black screens. Full diagnosis: [Troubleshooting an SPI TFT display that shows nothing](/docs/how-to-guides/ecran-tft-noir/)." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include message.html title="Checkpoint" message="You should see the text « PONG » at the top, centred, a white rectangle and a yellow disc. If the image is upside down, try `SCREEN_ROTATION = 0`." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 3: The non-blocking game loop"
content="A game advances **frame by frame**. We want one frame every 16 ms (about 60 frames per second), and on every frame the same three actions: **read** the controls, **compute** the new position of the objects, **draw** the result.

`delay(16)` would block the whole board during the wait. Instead, compare `millis()` with the time of the last frame: as long as 16 ms have not elapsed, `loop()` returns immediately without doing anything."
%}

Add the duration of a frame to `include/config.h`:

```cpp
constexpr uint32_t FRAME_TIME_MS = 16;  // Duration of one frame: ~60 frames/s
```

Then give `src/main.cpp` its final structure:

```cpp
void update(float joystickX) {
    // 2. Compute the new frame (steps 4 and 5)
}

void draw() {
    // 3. Draw it (steps 4 and 5)
}

void loop() {
    static uint32_t lastFrameMs = 0;   // static: keeps its value from one pass to the next
    uint32_t nowMs = millis();
    if (nowMs - lastFrameMs < FRAME_TIME_MS) {
        return;
    }
    lastFrameMs = nowMs;

    float joystickX = normalizeJoystick(analogRead(PIN_JOYSTICK_X), joystickCenterX);  // 1. Read
    update(joystickX);                 // 2. Compute
    draw();                            // 3. Draw
}
```

Do not forget to call `calibrateJoystick()` in `setup()` (the joystick must not be touched during calibration). You can remove the text and shapes from step 2.

This **read → compute → draw** structure is the framework for everything that follows: a complete game, such as [Pong on the console](/workshops/microcontroleur/tutorials/collisions-fsm-pong/), only adds to `update()` and `draw()`.

{% include step-tuto.html
greyBackground=true
title="Step 4: A paddle that follows the joystick"
content="Player 1's paddle is at the bottom of the screen. It is not placed where the joystick points: it moves **at a speed proportional** to the tilt. `normalizeJoystick()` already returns a value between -1 and +1: just multiply it by a maximum speed, in pixels per frame.

The position is a `float`: at half tilt, the paddle moves 2.5 pixels per frame, and the half pixels add up instead of being lost. It is only converted to `int` at drawing time.

For display, **erase the old paddle before drawing the new one**, and only if it has moved: without erasing, it would leave a white trail; without the test, useless pixels would be sent on every frame."
%}

```cpp
// include/config.h
constexpr int   PADDLE_WIDTH     = 40;
constexpr int   PADDLE_HEIGHT    = 6;
constexpr int   PADDLE_MARGIN    = 10;    // Distance between the paddle and the edge
constexpr float PADDLE_MAX_SPEED = 5.0f;  // In pixels per frame
```

```cpp
// src/main.cpp
constexpr int PADDLE_Y = SCREEN_HEIGHT - PADDLE_MARGIN - PADDLE_HEIGHT;

float paddleX = (SCREEN_WIDTH - PADDLE_WIDTH) / 2.0f;  // computed position
int   drawnPaddleX = (int)paddleX;                     // displayed position

void update(float joystickX) {
    paddleX += joystickX * PADDLE_MAX_SPEED;
    paddleX = constrain(paddleX, 0.0f, (float)(SCREEN_WIDTH - PADDLE_WIDTH));
}

void draw() {
    int x = (int)paddleX;
    if (x != drawnPaddleX) {
        tft.fillRect(drawnPaddleX, PADDLE_Y, PADDLE_WIDTH, PADDLE_HEIGHT, ST77XX_BLACK);  // erase
        tft.fillRect(x, PADDLE_Y, PADDLE_WIDTH, PADDLE_HEIGHT, ST77XX_WHITE);             // draw
        drawnPaddleX = x;
    }
}
```

Also draw the paddle once at the end of `setup()`, after the `fillScreen`: `draw()` only redraws it if it moves.

{% include message.html title="Two variables for one paddle" message="`paddleX` is the position **computed** by the game, `drawnPaddleX` the one **actually displayed**. Keeping the two separate is what tells you what to erase. The final Pong generalises this idea: the rendering module remembers everything that is on screen." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="Checkpoint" message="The paddle moves faster the more the joystick is tilted, stops when it is released and does not leave the screen, without leaving a trail. If it goes the wrong way, change `JOYSTICK_INVERT_X` in `config.h`." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 5: A bouncing ball"
content="The ball is a 6-pixel square, located by its top left corner `(ballX, ballY)` and by its **velocity** `(ballVX, ballVY)` in pixels per frame. On every frame, the velocity is added to the position.

When the ball goes past an edge, reverse the velocity component concerned **and put the ball back against the edge**. Without this, a ball that has overshot by 2 pixels could still be outside on the next frame: its velocity would be reversed a second time and it would stay stuck to the edge."
%}

```cpp
// include/config.h
constexpr int BALL_SIZE = 6;
```

```cpp
// src/main.cpp
float ballX  = (SCREEN_WIDTH - BALL_SIZE) / 2.0f;
float ballY  = (SCREEN_HEIGHT - BALL_SIZE) / 2.0f;
float ballVX = 2.0f;  // pixels per frame
float ballVY = 3.0f;

int drawnBallX = (int)ballX;
int drawnBallY = (int)ballY;

void moveBall() {
    ballX += ballVX;
    ballY += ballVY;

    if (ballX < 0) {
        ballX = 0;
        ballVX = -ballVX;
    } else if (ballX + BALL_SIZE > SCREEN_WIDTH) {
        ballX = SCREEN_WIDTH - BALL_SIZE;
        ballVX = -ballVX;
    }

    if (ballY < 0) {
        ballY = 0;
        ballVY = -ballVY;
    } else if (ballY + BALL_SIZE > SCREEN_HEIGHT) {
        ballY = SCREEN_HEIGHT - BALL_SIZE;
        ballVY = -ballVY;
    }
}

void drawBall() {
    int x = (int)ballX;
    int y = (int)ballY;
    if (x == drawnBallX && y == drawnBallY) {
        return;
    }
    tft.fillRect(drawnBallX, drawnBallY, BALL_SIZE, BALL_SIZE, ST77XX_BLACK);  // erase
    tft.fillRect(x, y, BALL_SIZE, BALL_SIZE, ST77XX_WHITE);                    // draw
    drawnBallX = x;
    drawnBallY = y;
}
```

Call `moveBall()` at the end of `update()`, and `drawBall()` at the end of `draw()`.

{% include message.html title="Checkpoint" message="The ball moves continuously and bounces off all four edges, with no flicker or trail, while the paddle follows the joystick. Watch what happens when it passes over the paddle: it goes **through** it and leaves a black **hole** in it. This is normal, and it is the starting point of the next tutorial." status="is-success" icon="fas fa-check-circle" %}

## Expected result

The project contains `include/config.h` and a `src/main.cpp` organised as a game loop: the paddle follows the joystick at the bottom of the screen, and a ball bounces off all four edges.

Two flaws remain visible, on purpose:

- the ball goes through the paddle instead of bouncing off it (the **collision** is missing);
- as it passes, it erases part of the paddle (erasing does not take into account what is underneath).

{% include message.html title="Next step" message="The tutorial [Pong on the console](/workshops/microcontroleur/tutorials/collisions-fsm-pong/) fixes both flaws, and adds lives, the score and the home / game / end screens." status="is-success" icon="fas fa-check-circle" %}
