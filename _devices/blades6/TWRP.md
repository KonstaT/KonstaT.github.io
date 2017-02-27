---
layout: rom
title: TWRP 3.0.2-0
subtitle: for ZTE Blade S6, ZTE Blade S6 Plus & Turkcell T60
date: 2016-04-27
tags: [blades6, TWRP]
social-share: true
comments: true
---

These are my builds of Dees-Troy's [Team Win Recovery Project](http://teamw.in/project/twrp2/) (TWRP) 3.0.2-0 for ZTE Blade S6 (p839f30), ZTE Blade S6 Plus (p839f50) and Turkcell T60 (p839t60).

<span style="color:#FF0000;">Important!</span> Partition layout is different between Blade S6 AS/EU/AU/etc devices (physical internal sdcard partition vs. emulated internal sdcard). Select the right version for you device.

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**recovery-twrp3020-p839f30-physical.img** (Blade S6 - physical internal sdcard partition - AS&EU variants)  
[https://www.androidfilehost.com/?fid=24591000424952155](https://www.androidfilehost.com/?fid=24591000424952155)  
md5:316edc647b60fe409bfb76803e878df2

**recovery-twrp3020-p839f30-emulated.img** (Blade S6 - emulated internal sdcard [/data/media] - AU variant)  
[https://www.androidfilehost.com/?fid=24591000424952154](https://www.androidfilehost.com/?fid=24591000424952154)  
md5:e70c2a6aa7d1ce8a0a86fd4fce10eb61

**recovery-twrp3020-p839f50.img** (Blade S6 Plus)  
[https://www.androidfilehost.com/?fid=24591000424952157](https://www.androidfilehost.com/?fid=24591000424952157)  
md5:0542c4d822e3955cd1acad0752f9c42e

**recovery-twrp3020-p839t60.img** (Turkcell T60)  
[https://www.androidfilehost.com/?fid=24591000424952159](https://www.androidfilehost.com/?fid=24591000424952159)  
md5:de2b286dbbd4300eef4692daef613209

<span style="color:#FF0000;">Do not use this recovery to flash official updates from ZTE website!</span> You need to repack them for custom recovery or use the stock recovery to install.

**How to install:**

- Gain root access in Android with root exploit of your choice
- Download TWRP recovery image of you choice, rename it to recovery.img and copy it to the root of your internal sdcard
- Execute following two commands in 'adb shell'/[Terminal Emulator](https://play.google.com/store/apps/details?id=jackpal.androidterm) (make sure not to typo!)

>su

>dd if=/sdcard/recovery.img of=/dev/block/bootdevice/by-name/recovery

- Boot into TWRP recovery using volume up + power key combination or 'adb reboot recovery'

**How to restore stock recovery?**

1. Flash the zip below in TWRP
2. Reboot recovery

**recovery-stock-ZTE_AS_Blade_S6V1.0.0B12.zip** (Blade S6 - AS)  
[https://www.androidfilehost.com/?fid=24591000424952131](https://www.androidfilehost.com/?fid=24591000424952131)  
md5:5d05cf6859ccd926daadf8df77a2631b

**recovery-stock-ZTE_ES_Blade_S6V1.0.0B05.zip** (Blade S6 - ES)  
[https://www.androidfilehost.com/?fid=24591000424952132](https://www.androidfilehost.com/?fid=24591000424952132)  
md5:224880ca761d2e53446ef94c06b7bdc3

**recovery-stock-GEN_AS_P839F50V1.0.0B06.zip** (Blade S6 Plus - AS)  
[https://www.androidfilehost.com/?fid=24591000424952133](https://www.androidfilehost.com/?fid=24591000424952133)  
ms5:a82215d59bd9ce67d796c1a9682928f8

**recovery-stock-TC_TR_P839T60V1.0.0B12.zip** (Turkcell T60)  
[https://www.androidfilehost.com/?fid=24591000424952134](https://www.androidfilehost.com/?fid=24591000424952134)  
md5:3cf082152acf382c40beaab563a2f87c

**Sources:**

- [Device](https://gitlab.com/Konsta/android_device_zte_p839f30) (Blade S6)
- [Device](https://gitlab.com/Konsta/android_device_zte_p839f50) (Blade S6 Plus)
- [Device](https://gitlab.com/Konsta/android_device_zte_p839t60) (Turkcell T60)

----

**27.4 changelog:**

- TWRP 3.0.2-0

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=89959)

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/forums/topic/375597-twrp-3020/)

----
