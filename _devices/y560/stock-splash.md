---
layout: rom
title: How to change splash screen
subtitle: for Huawei Y5
date: 2016-02-07
tags: [y560, stockmod]
social-share: true
comments: true
---

**How to create your own splash screen:**

- Create a 480x854 bitmap in e.g. GIMP image editor
- Flip image vertically
- Save as 24-bit Windows bitmap (RGB888)
- Remove bitmap header (54 bytes) - splash.img should be 1229760 bytes in size

> dd if=splash.bmp of=splash.img skip=54 bs=1

- Place splash.img inside the flashable zip below (drag&drop with your favorite zip tool) and install the zip in TWRP recovery

**How to restore stock splash screen:**

- Install the zip below in TWRP recovery

**splash-stock-y560.zip**  
[https://www.androidfilehost.com/?fid=24591000424952167](https://www.androidfilehost.com/?fid=24591000424952167)  
md5:038563ed5f404d7589ecbb02ea8112aa

![screenshot]({{ site.url }}/devices/y560/stock-splash/splash.png)

----
----
