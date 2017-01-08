---
layout: rom
title: ClockWorkMod 6.0.3.6
subtitle: for ZTE Blade V
date: 2013-09-19
tags: [bladev, CWM]
social-share: true
comments: true
---

This is my build of Koush's [ClockWorkMod](https://www.clockworkmod.com/) Recovery 6.0.3.6 for ZTE Blade V.

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**recovery-cwm6036-8225.img** (supports only external sdcard)  
[https://www.androidfilehost.com/?fid=24591000424952106](https://www.androidfilehost.com/?fid=24591000424952106)  
md5:27c86b75c2c83eb668a5827708c2050a

**recovery-cwm6036-8225-v2.img** (support for both internal and external sdcards)  
[https://www.androidfilehost.com/?fid=24591000424952107](https://www.androidfilehost.com/?fid=24591000424952107)  
md5:cd0a200baf4fe24e57805ee576e6ad4a

<span style="color:#ff0000;">Do not use this recovery to flash official updates from ZTE website!</span> You need to repack them for ClockWorkMod or use the stock recovery to install.

**How to make clean ROM dump/backup of your device (before you root or install cwm):** (<span style="color:#ff0000;">recommended</span>)

- download [ZTE USB drivers](http://download.ztedevice.com/device/global/support/product/560/1132/soft/P020121013422016358160.7z)
- download Android SDK platform-tools ([Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip), [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)) to get adb and fastboot
- download recovery-cwm6036-8225.img recovery image
- create a new directory somewhere and copy adb.exe, fastboot.exe and recovery-cwm6036-8225.img into it
- plug in your device via USB cable and install drivers (make sure you've enabled USB debugging on your device)
- cd into the directory you created and execute following commands in terminal window (boots into recovery instead of flashing it)

> adb reboot bootloader

> fastboot boot recovery-cwm6036-8225.img

- select backup & restore -> backup (Seriously, always backup your device before you install anything!)

**How to install ClockWorkMod Recovery:** (windows)

- download [ZTE USB drivers](http://download.ztedevice.com/device/global/support/product/560/1132/soft/P020121013422016358160.7z)
- download Android SDK platform-tools ([Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip), [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)) to get adb and fastboot
- download recovery-cwm6036-8225.img recovery image
- create a new directory somewhere and copy adb.exe, fastboot.exe and recovery-cwm6036-8225.img into it
- plug in your device via USB cable and install drivers (make sure you've enabled USB debugging on your device)
- cd into the directory you created and execute following commands in terminal window

> adb reboot bootloader

> fastboot flash recovery recovery-cwm6036-8225.img

> fastboot reboot

- congratulations, you have installed cwm on to your device
- boot into ClockWorkMod by pressing volume down while powering on or using 'adb reboot recovery'
- select backup & restore -> backup (Seriously, always backup your device before you install anything!)

**How to root your device via recovery:**

- download latest Superuser and su binary from [Superuser website](http://androidsu.com/superuser/) and save it to your sdcard
- follow instructions on how to install clockworkmod recovery
- boot into clockworkmod
- install zip from sdcard -> choose zip from sdcard -> Superuser-3.2-arm-signed.zip

**If you have already gained root access with some other [root method](http://forum.xda-developers.com/showthread.php?t=1886460), you can flash recovery using [Terminal Emulator](https://play.google.com/store/apps/details?id=jackpal.androidterm&hl=en):**

- copy recovery-cwm6036-8225.img to the root of your phone's sdcard
- execute following commands in terminal emulator

> su

> dd if=/sdcard/recovery-cwm6036-8225.img of=/dev/block/platform/msm_sdcc.3/by-num/p16

----
----

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/forums/topic/365228-clockworkmod-6036/)

----
----
