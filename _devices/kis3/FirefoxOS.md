---
layout: rom
title: CAF Firefox OS - B2G
subtitle: for ZTE Open C / Kis 3
date: 2015-08-02
tags: [kis3, CAF, FirefoxOS]
social-share: true
comments: true
---

This is my build of [Firefox OS](https://www.mozilla.org/en-US/firefox/os/) for ZTE Open C / Kis 3 (Beeline Smart2, Moche/MEO Smart A16, <s>ZTE V811W</s>, ZTE V811, Skinny V811, Optus Hop Smart, <s>ZTE Blade M</s>, etc). This is not meant for daily use (or any use really), it's just something for **advanced users** to play with.

This build is based on the latest [CAF release](https://www.codeaurora.org/xwiki/bin/FirefoxOS/release) LNX.LF.3.5.1-11900-8x10.0 and it's Boot2Gecko 2.0.0.0-prerelease.

<span style="color:#ff0000;">Important. Prerequisites!!!</span> You need to install Android KitKat on your Open C first (e.g. [EU_FFOS+to+Android.zip](https://www.androidfilehost.com/?fid=4349826312261607875) will do). Yes, that's right - this build is based on KitKat unlike the official ZTE Open C Firefox OS firmware. You also need to have this [ClockWorkMod](/devices/kis3/CWM) recovery installed ([TWRP](/devices/kis3/TWRP) seems to have some issues with CAF otapackages :o).

![screenshot]({{ site.url }}/img/kis3/FirefoxOS/2014-08-20-15-10-38.png)  
![screenshot]({{ site.url }}/img/kis3/FirefoxOS/2014-08-20-15-13-00.png)

<span style="color:#ff0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**b2g-20150802-kis3.zip**  
[https://www.androidfilehost.com/?fid=4349826312261607382](https://www.androidfilehost.com/?fid=4349826312261607382)  
md5:3e22cb7e766e1450cc993df95290bbf0

**Working:**

- RIL (mobile network, data & SMS)
- Wifi
- Audio (playback/input/routing/headphones/etc)
- Bluetooth
- Camera (photos & camcorder)
- FM radio
- GPS
- Hardware acceleration and OpenGL rendering
- Hardware video decoding & encoding
- SD card (only external)
- USB-storage (on external sdcard) & adb
- USB-tethering
- Wifi-tethering
- Touchscreen/multi-touch
- Sensors
- LEDs

**Not working:**

- ???

**Issues:**

- Something wrong with media scanner - everything works fine after visiting 'Settings->Media storage' once and letting it fetch SD card statistics.
- Camera is a bit temperamental sometimes - it's recommended to close the camera app from multi-tasking view after using.

**Sources:**

- [Device](https://github.com/KonstaT/android_device_zte_kis3/tree/b2g_kk_3.5)
- [Kernel](https://github.com/KonstaT/android_kernel_zte_msm8610/tree/b2g_kk_3.5)
- [Proprietaries](https://github.com/KonstaT/proprietary_vendor_zte/tree/b2g_kk_3.5)
- [B2G-CAF](https://github.com/B2G-CAF)

**Thanks:**

- CAF & Mozilla/B2G

----

**2.8. changelog:**

- updates from new ZTE kernel source release (i.e. Goodix GT960F touchscreen support)
- patch recently disclosed stagefright vulnerabilities (more info)

**6.3. 2015 changelog:**

- use userspace implementation to set correct wlan MAC address
- add camera wrapper to disable unsupported HDR mode
- add few more locales and keyboard layouts (Nederlands, Russia, Turkey)
- enable seccomp in kernel (required for shallow flashing B2G > 2.0?)

**5.11. changelog:**

- update to the latest CAF release LNX.LF.3.5.1-11900-8x10.0
- set correct wifi MAC address from file (/persist/wifimac.dat) with ZTE kernel driver
- unload wifi driver when switching tethering mode
- update bluetooth configuration

**13.9. changelog:**

- update to the latest CAF release LNX.LF.3.5.1-06900-8x10.0

**20.8. changelog:**

- initial release

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=89975)

----
