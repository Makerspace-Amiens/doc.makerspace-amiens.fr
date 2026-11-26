---
layout: documentation
lang: en
image: hero-motor-calculator.jpg
hide_hero: false
hero_image: hero-motor-calculator.jpg
hero_darken: true
component_toc: true
doc_header: true

title: Robot drive motor sizing tool
subtitle: An online calculator to size your motors
description: Compute the rotation speed and the torque each motor of a wheeled mobile robot must deliver, with the step-by-step calculation and a traction check.
author: Adrien Bracq

---

## What the tool does

For **each motor** of a wheeled mobile robot, the calculator gives the **operating point** to meet: the torque the motor must deliver, and at what rotation speed. You then check this point on the torque/speed curve of a candidate motor.

Every step is shown below the results ("Step-by-step calculation"), so that the calculation can be done again by hand. The method is explained in the concept [Motorising a mobile robot](/docs/concepts/motoriser-robot-mobile/).

## Calculator

{% include calculator-motor.html %}

## The method

The calculation assumes the **worst case**: the robot accelerates as hard as possible, up the steepest slope, at its top speed.

1. The wheel **rotation speed** follows from the robot speed: $\omega = v / r$.
2. The total **traction force** adds three terms:

   $$F = \underbrace{m\,a}_{\text{accelerate}} + \underbrace{m\,g\,\sin\theta}_{\text{climb}} + \underbrace{C_{rr}\,m\,g\,\cos\theta}_{\text{roll}}$$

3. This force is shared between the $n$ drive wheels, and the transmission loses part of it (efficiency $\eta$): $C = \frac{F \cdot r}{n \cdot \eta}$.
4. This torque is multiplied by a **safety factor** $k$ to cover everything the calculation ignores.

### Why a safety factor

The calculation knows nothing about bumps, impacts, an object to push or another robot in the way, and friction is poorly known. Without a margin, the slightest surprise stalls a DC motor or makes a stepper motor skip. A factor of **2** is a good starting point; it can be reduced if the robot is light and the ground well known.

### Why the actual slope

The slope is the one the robot must **really** climb: 0° on a flat table. Surprises are handled by the safety factor, not by a fictitious slope: both stay easy to read.

## Checking traction

A powerful enough motor is useless if the wheels **slip**. The force a wheel can pass on to the ground is limited by:

$$F_{max} = \mu \cdot N$$

where $\mu$ is the **friction coefficient** between wheel and ground, and $N$ the part of the weight resting on the drive wheels. On a differential robot, part of the weight rests on the ball casters or free wheels: it does not help traction.

Both values are hard to estimate beforehand: it is best to **measure** them, on a prototype or on a single wheel.

### Measuring the friction coefficient: the tilting board

1. Place the wheel (weighted, locked so it cannot turn) or the robot, motors off and wheels locked, on a board covered with the same material as the real ground.
2. Slowly tilt the board until the wheel starts to slide.
3. Measure the board angle $\alpha$ (inclinometer app on a phone): the coefficient is $\mu = \tan\alpha$.

Orders of magnitude, to be confirmed by measurement:

| Wheel / ground | $\mu$ |
|---|---|
| Hard plastic or 3D print on smooth ground | 0.2 to 0.4 |
| Rubber on wood or painted surface | 0.6 to 0.9 |
| Silicone or O-ring on clean ground | 0.8 to 1 |

### Measuring the share of weight on the drive wheels

Place **only the drive wheels** on a kitchen scale, the rest of the robot on a block of the same height. The share is: reading / total mass.

If the wheels slip, there are three levers: reduce the acceleration, move masses (battery) above the drive wheels, or choose grippier wheels.

## Origin

The tool builds on the method published by [cbenson](https://www.robotshop.com/community/user/cbenson) on the [RobotShop](https://www.robotshop.com/community/blog/show/dimensionnement-dun-moteur-dentranement) blog in 2013 (torque, acceleration, slope and efficiency). It adds rolling resistance, the safety factor, the traction check and the step-by-step calculation; battery sizing is no longer part of it.
