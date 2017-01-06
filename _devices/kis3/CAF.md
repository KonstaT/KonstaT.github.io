---
layout: rom
title: CAF Android (Android 4.4.2)
subtitle: for ZTE Open C / Kis 3
date: 2014-11-04
tags: [kis3, CAF]
social-share: true
comments: true
---

This is my build of CAF Android for ZTE Open C / Kis 3 (Beeline Smart2, Moche/MEO Smart A16, ZTE V811W, ZTE V811, Skinny V811, Optus Hop Smart, ZTE Blade M, etc). It's for **advanced users** only.

This build is based on the same [CAF release](https://www.codeaurora.org/xwiki/bin/QAEP/release) LNX.LA.3.5.1-00710-8x10.0 that ZTE initially started off with their stock firmware.

<span style="color:#ff0000;">Important. Prerequisites!!!</span> You need to install Android KitKat on your Open C first (e.g. [EU_FFOS+to+Android.zip](https://www.androidfilehost.com/?fid=673368273298921576) will do). You also need to have this [ClockWorkMod](/devices/kis3/CWM) recovery installed ([TWRP](/devices/kis3/TWRP) seems to have some issues with CAF otapackages :o).

![screenshot]({{ site.url }}/devices/kis3/CAF/Screenshot_2014-10-24-18-13-31.png)  
![screenshot]({{ site.url }}/devices/kis3/CAF/Screenshot_2014-10-24-18-22-26.png)

<span style="color:#ff0000;">Do not mirror my builds!</span> Please post a link to this thread instead.

**caf-20141104-kis3.zip**  
[https://www.androidfilehost.com/?fid=24591000424952223](https://www.androidfilehost.com/?fid=24591000424952223)  
md5:0b05a7c3a03e344e26a007d73fb7711f

**caf-kis3-stock-kernel.zip** (kernel and wifi drivers from EE_UK_P821E10V1.0.0B06 - for devices with GT960F touchscreen)  
[https://www.androidfilehost.com/?fid=24591000424952224](https://www.androidfilehost.com/?fid=24591000424952224)  
md5:32c116d1a7496ce0cc1a9113c405e1c9

**Google Apps:**  
[Google Apps - CyanogenMod](https://wiki.cyanogenmod.org/w/Google_Apps)  
[[GAPPS][4.4.x] OFFICIAL Up-to-Date PA-GOOGLE APPS (All ROM's)](http://forum.xda-developers.com/showthread.php?t=2397942)

**Root:**  
[SuperSU](http://download.chainfire.eu/supersu)  
[SuperUser](http://koush.com/post/superuser)

**Working:**

- RIL (mobile network, SMS & data) - dual-SIM (V811W)
- Wifi
- Audio (playback/input/routing/headphones/etc)
- Bluetooth
- Camera (photos, camcorder & panorama)
- FM radio
- GPS
- Hardware acceleration and OpenGL rendering
- Hardware video decoding & encoding
- SD card (only external)
- USB-storage (MTP - no UMS) & adb
- USB-tethering
- Wifi-tethering
- Touchscreen/multi-touch
- Sensors
- LEDs

**Not working:**

- ???

**Issues:**

- Generally unpolished - recommended to use third party launcher and camera apps

**Sources:**

- [Device](https://github.com/KonstaT/android_device_zte_kis3/tree/LNX.LA.3.5.1)
- [Kernel](https://github.com/KonstaT/android_kernel_zte_msm8610/tree/LNX.LA.3.5.1)
- [Proprietaries](https://github.com/KonstaT/proprietary_vendor_zte/tree/LNX.LA.3.5.1)

**Thanks:**

- CAF

----
----

**4.11. changelog:**

- don't automatically enable dual-SIM according to hwversion
- update bluetooth configuration
- fix layouts in notification area and dual-SIM keyguard screen

**25.10. changelog:**
- initial release
- LNX.LA.3.5.1-00710-8x10.0

----
----
