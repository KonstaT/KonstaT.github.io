---
layout: rom
title: TWRP 3.0.2-0
subtitle: for Nexbox A95X
date: 2016-07-24
tags: [nexbox_a95x, TWRP]
social-share: true
comments: true
---

This is my build of Dees-Troy's [Team Win Recovery Project](http://teamw.in/project/twrp2/) (TWRP) 3.0.2-0 for Nexbox A95X (Amlogic S905 with Android 5.1) TV box. You need to connect a mouse to your device to use this recovery.

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this thread instead.

**recovery-twrp3020-nexbox_a95x.img**  
[https://www.androidfilehost.com/?fid=24659325368664651](https://www.androidfilehost.com/?fid=24659325368664651)  
md5:ae69ee66d014d5a1229c747107aaeca2

**recovery-twrp-3.0.2-0-nexbox_a95x.zip** (TWRP/stock recovery flashable)  
[https://www.androidfilehost.com/?fid=24659325368664652](https://www.androidfilehost.com/?fid=24659325368664652)  
md5:64881a9061fb0149c709d94ce38fac81

This device is rooted out-of-the-box and it has unlocked bootloader. Stock recovery also allows flashing zips that are signed with generic test key. I haven't found a way to use adb when connected with an USB cable. There's no way to boot the device into bootloader to use fastboot either. There's still about a dozen ways to install TWRP - here's a few.

**Booting from SD card:**

- Download recovery-twrp3020-nexbox_a95x.img and rename it as recovery.img
- Copy TWRP recovery.img to the root of your external SD card
- Power down your device
- Power up your device by pressing (and holding) reset button found in AV port (use a thin non-metal object - e.g. toothpick, plastic straw, etc)
- Your device will boot into TWRP
- Use TWRP to install the recovery flashable TWRP zip or use TWRP's 'flash image' option to install the TWRP recovery.img
- Reboot recovery

**Using stock recovery:**

- Download recovery-twrp-3.0.2-0-nexbox_a95x.zip and copy it to your external SD card or USB stick
- Power down your device
- Power up your device by pressing (and holding) reset button found in AV port (use a thin non-metal object - e.g. toothpick, plastic straw, etc)
- Select 'apply update from EXT' -> 'update from sdcard/udisk' -> recovery-twrp-3.0.2-0-nexbox_a95x.zip
- Reboot recovery

**Using shell:**

- Download recovery-twrp3020-nexbox_a95x.img and rename it as recovery.img
- Copy TWRP recovery.img to your internal storage, external SD card, or USB stick
- Open e.g. [Terminal Emulator](https://play.google.com/store/apps/details?id=jackpal.androidterm) and change into the directory you saved the TWRP recovery.img (/sdcard, /storage/sdcard1, or /storage/udisk0, respectively)
- Execute following commands

> su

> dd if=recovery.img of=/dev/block/recovery

- Reboot recovery

**How to install proper root management:**

- Download [SuperSU](http://download.chainfire.eu/supersu-stable) zip and copy it to your device's sdcards or USB stick
- Boot to TWRP recovery
- Install SuperSU zip in TWRP

**How to restore stock recovery:**

- Download zip below and use any of the methods described above
- Reboot recovery

**recovery-stock-NEXBOX-A95X-201608151721.zip**  
[https://www.androidfilehost.com/?fid=385035244224406499](https://www.androidfilehost.com/?fid=385035244224406499)  
md5:62477d5abc1872e5e40e56de30baf054

**recovery-stock-NEXBOX-A95X-201606282036.zip**  
[https://www.androidfilehost.com/?fid=24659325368664653](https://www.androidfilehost.com/?fid=24659325368664653)  
md5:d536cf298d3b578bcab49a33b2f142a3

**Sources:**

- [Device](https://github.com/KonstaT/android_device_amlogic_nexbox_a95x/tree/android-5.1)

----
----

**24.7. changelog:**

- initial release

----
----
