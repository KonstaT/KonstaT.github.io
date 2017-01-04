---
layout: rom
title: CAF Firefox OS - B2G
subtitle: for Motorola Moto G
date: 2015-08-01
tags: [falcon, FirefoxOS]
comments: true
---

This is my build of [Firefox OS](https://www.mozilla.org/en-US/firefox/os/) for Moto G. This is not meant for daily use (or any use really), it's just something for **advanced users** to play with. I've only tested this on my retail xt1032 but there is also support for the GPE variant as well as xt1033's converted to GPE. Telephony is not working on dual-SIM xt1033.

This build is based on [CAF release](https://www.codeaurora.org/xwiki/bin/FirefoxOS/release) LNX.LF.3.5.1-11900-8x10.0 and it's Boot2Gecko 2.0.0.0-prerelease.

![screenshot]({{ site.url }}/devices/falcon/FirefoxOS/2014-08-26-16-22-19.png)  
![screenshot]({{ site.url }}/devices/falcon/FirefoxOS/2014-08-26-16-22-46.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this thread instead.

**b2g-20150801-falcon.zip**  
[https://www.androidfilehost.com/?fid=24591000424952111](https://www.androidfilehost.com/?fid=24591000424952111)  
md5:3b0e17793e5cf3d132383f0c2a3842b1

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
- SD card
- Charging & adb
- USB-tethering
- Wifi-tethering
- Touchscreen/multi-touch
- Sensors
- LEDs

**Not working:**

- USB-storage (B2G doesn't support MTP - Moto G doesn't support UMS) - adb push/pull to/from sdcard works after 'adb root'

**Issues:**

- rotation doesn't properly work in the camera app - rotate your device before opening the camera app
- browser's back/next/bookmark/share bar is missing/overlapped by software navigation bar when in portrait mode

**Sources:**

- [Device](https://github.com/KonstaT/android_device_motorola_falcon/tree/b2g_kk_3.5)
- [Kernel](https://github.com/KonstaT/android_kernel_motorola_msm8226/tree/b2g_kk_3.5)
- [Proprietaries](https://github.com/KonstaT/proprietary_vendor_motorola/tree/b2g_kk_3.5)
- [B2G-CAF](https://github.com/B2G-CAF)

**Thanks:**

- CAF & Mozilla/B2G
- CyanogenMod team & dhacker29 for CAF AOSP bring up

----
----

**1.8. changelog:**

- fix camera (rotation still not working properly - rotate your device before opening the camera app)
- audio updates (switch to using platform parser in audio HAL & include calibration data)
- port seccomp support to kernel (if someone wants to test shallow flashing B2G >2.0)
- add kexec hardboot support to kernel for multi-ROM support
- patch recently disclosed stagefright vulnerabilities (more info)

**4.1. 2015 changelog:**

- updated to CAF release LNX.LF.3.5.1-11900-8x10.0
- add few more locales and keyboard layouts (Nederlands, Russia, Turkey)

**26.8. changelog:**

- updated to CAF release LNX.LF.3.5.1-03500-8x10.0
- Boot2Gecko 2.0.0.0-prerelease

**5.6. changelog:**

- updated to the latest CAF release

**21.5. changelog:**

- fixed RIL
- enabled more language support

**18.5. changelog:**

- initial release

----
----
