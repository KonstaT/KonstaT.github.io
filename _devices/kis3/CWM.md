---
layout: rom
title: ClockWorkMod 6.0.5.1
subtitle: for ZTE Open C / Kis 3
date: 2016-04-20
tags: [kis3, CWM]
social-share: true
comments: true
---

This is my build of Koush's [ClockWorkMod](https://www.clockworkmod.com/) Recovery 6.0.5.1 for ZTE Open C / Kis 3 (Beeline Smart2, Moche/MEO Smart A16, ZTE V811W, ZTE V811, Skinny V811, Optus Hop Smart, ZTE Blade M, etc).

<span style="color:#ff0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**recovery-clockwork-6.0.5.1-kis3.zip** (CWM/TWRP flashable)  
[https://www.androidfilehost.com/?fid=24591000424952211](https://www.androidfilehost.com/?fid=24591000424952211)  
md5:a1eb8af7d8e2606df9eaa7734c180076

**recovery-cwm6051-kis3.img**  
[https://www.androidfilehost.com/?fid=24591000424952212](https://www.androidfilehost.com/?fid=24591000424952212)  
md5:3571bf70f64e59fb73d8f1f229158d1c

This recovery is fully working with goodies such as repeatable keys and adb sideload support. Use volume keys to navigate menus and power button to select. Internal sdcard is handled differently on Open C and Kis 3 so this recovery only supports external sdcard.

<span style="color:#ff0000;">Do not use this recovery to flash official updates from ZTE website!</span> You need to repack them for ClockWorkMod or use the stock recovery to install.

**How to make clean ROM dump/backup of your device (before you root or install CWM):** (<span style="color:#ff0000;">recommended</span>)

- Download and install [ZTE USB drivers](https://dl.dropboxusercontent.com/u/35834778/ZTE-Kis3-Usb-Driver-Setup.exe) (windows) or setup udev rules (linux)
- Download and install [Android SDK tools](https://developer.android.com/sdk/index.html) and platform-tools to get adb and fastboot
- Download recovery-cwm60xx-kis3.img recovery image and rename it to recovery.img
- Create a new directory somewhere and copy adb(.exe), fastboot(.exe) and recovery.img into it
- Enable USB debugging on your device (Firefox OS - Settings -> Device information -> More Information -> Developer -> Remote Debugging --- Android - Settings->Developer options -> Android debugging)
- Plug in your device via USB cable and install drivers if necessary
- Open terminal window as an administrator (windows) or execute adb commands with sudo (linux)
- Change into the directory you've created and execute following commands in terminal window (boots into recovery instead of flashing it)

> adb reboot bootloader

> fastboot boot recovery.img

- select backup & restore -> backup (Seriously, always backup your device before you install anything!)

**How to install ClockWorkMod Recovery:**

- Download and install [ZTE USB drivers](https://dl.dropboxusercontent.com/u/35834778/ZTE-Kis3-Usb-Driver-Setup.exe) (windows) or setup udev rules (linux)
- Download and install [Android SDK tools](https://developer.android.com/sdk/index.html) and platform-tools to get adb and fastboot
- Download recovery-cwm60xx-kis3.img recovery image and rename it to recovery.img
- Create a new directory somewhere and copy adb(.exe), fastboot(.exe) and recovery.img into it
- Enable USB debugging on your device (Firefox OS - Settings -> Device information -> More Information -> Developer -> Remote Debugging --- Android - Settings -> Developer options -> Android debugging)
- Plug in your device via USB cable and install drivers if necessary
- Open terminal window as an administrator (windows) or execute adb commands with sudo (linux)
- Change into the directory you've created and execute following commands in terminal window

> adb reboot bootloader

> fastboot flash recovery recovery.img

> fastboot reboot

- Congratulations, you have installed CWM to your device
- Boot into ClockWorkMod by pressing volume up while powering on or using 'adb reboot recovery'
- Select backup & restore -> backup (Seriously, always backup your device before you install anything!)

**How to root your (Android) firmware via recovery:**

- Download root app of your choice ([Koush's Superuser](http://koush.com/post/superuser) or [Chainfire's SuperSU](http://download.chainfire.eu/supersu)) and save it to your sdcard
- Follow instructions on how to install/boot ClockWorkMod recovery
- Install zip from sdcard -> choose zip from sdcard -> root-app-of-your-choice.zip

**Sources:**

- [Device](https://github.com/KonstaT/android_device_zte_kis3)

----
----

**28.3. 2015 changelog:**

- ClockWorkMod 6.0.5.1

**14.8. changelog:**

- initial release

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=90023)

----
----
