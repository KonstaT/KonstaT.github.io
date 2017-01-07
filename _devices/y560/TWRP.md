---
layout: rom
title: TWRP 3.0.2-0
subtitle: for Huawei Y5
date: 2016-11-13
tags: [y560, TWRP]
social-share: true
comments: true
---

This is my build of Dees-Troy's [Team Win Recovery Project](http://teamw.in/project/twrp2/) (TWRP) 3.0.2-0 for Huawei Y5 (Y560-L01/L02/L03/L23/U23).

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**recovery-twrp-3.0.2-1-y560.zip** (TWRP flashable)  
[https://www.androidfilehost.com/?fid=457095661767115307](https://www.androidfilehost.com/?fid=457095661767115307)  
md5:f3a01b94338a0272e0cc7e3be537c78e

**recovery-twrp3021-y560.img**  
[https://www.androidfilehost.com/?fid=457095661767115308](https://www.androidfilehost.com/?fid=457095661767115308)  
md5:7af4f29e20d5c3b474dca80342451132

<span style="color:#FF0000;">Do not use this recovery to flash official updates from Huawei website!</span> You need to repack them for custom recovery or use the stock recovery to install.

**How to install:**

- Download and install Huawei USB drivers (windows) or setup udev rules (linux)
- Download Android SDK platform-tools ([Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip), [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)) to get adb and fastboot
- Download recovery-twrpxxxx-y560.img recovery image and rename it to recovery.img
- Create a new directory somewhere and copy adb(.exe), fastboot(.exe) and recovery.img into it
- Enable USB debugging and OEM unlocking on your device (Settings -> Developer options -> Android debugging & Settings -> Developer options -> OEM unlocking)
- Plug in your device via USB cable and install drivers if necessary
- Open terminal window, change into the directory you've created and execute following command in terminal window to boot into bootloader

> adb reboot bootloader

- Unlock bootloader (<span style="color:#FF0000;">this will wipe your device!</span>)

> fastboot oem unlock-go

- Boot recovery image to make a clean backup of your firmware

> fastboot boot recovery.img

- Reboot back to bootloader and flash recovery image to recovery partition

> fastboot flash recovery recovery.img

**How to root your Android using TWRP?**

- Download Chainfire's [SuperSU](http://download.chainfire.eu/supersu) and copy it to your sdcard
- Follow instructions on how to install/boot TWRP recovery
- Install the SuperSU zip in TWRP

**How to restore stock recovery?**

- Download TWRP flashable zip below and copy it to your sdcard
- Install the zip in TWRP
- Reboot recovery

**recovery-stock-Y560-L01V100R001C577B040.zip**  
[https://www.androidfilehost.com/?fid=24591000424952169](https://www.androidfilehost.com/?fid=24591000424952169)  
md5:f8595a3bd3bfa924c006450f2f8d3266

**Sources:**

- [Device](https://github.com/KonstaT/android_device_huawei_y560/tree/android-5.1)

----
----

**13.11. changelog:**

- bump to 3.0.2-1 version number because of device specific changes
- fix rare issue where device only reboots back to recovery (misc partition)
- add option to backup recovery partition

**20.4. changelog:**

- TWRP 3.0.2-0

**19.1. changelog:**

- initial release

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=90103)

----
----
