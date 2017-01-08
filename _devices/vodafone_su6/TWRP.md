---
layout: rom
title: TWRP 3.0.2-0
subtitle: for Vodafone Smart Ultra 6
date: 2016-04-27
tags: [vodafone_su6, TWRP]
social-share: true
comments: true
---

This is my build of Dees-Troy's [Team Win Recovery Project](http://teamw.in/project/twrp2/) (TWRP) 3.0.2-0 for Vodafone Smart Ultra 6.

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**recovery-twrp3020-p839v55.img**  
[https://www.androidfilehost.com/?fid=24591000424952165](https://www.androidfilehost.com/?fid=24591000424952165)  
md5:3e66436321b08e4104657e3560961bcd

**recovery-twrp-3.0.2-0-p839v55.zip** (TWRP flashable)  
[https://www.androidfilehost.com/?fid=24591000424952166](https://www.androidfilehost.com/?fid=24591000424952166)  
md5:e49bed24c5087946d29fa7a05167aa3e

<span style="color:#FF0000;">Do not use this recovery to flash official updates from ZTE website!</span> You need to repack them for custom recovery or use the stock recovery to install.

**How to install:**

- Root your Android ([MobileGo](http://mobilego.wondershare.com/) Windows and [KingRoot](http://androidxda.com/download-kingroot-application) are reported to work)
- Download TWRP recovery image, rename it to recovery.img and copy it to the root of your internal sdcard
- Execute following two commands in 'adb shell'/[Terminal Emulator](https://play.google.com/store/apps/details?id=jackpal.androidterm) (make sure not to typo!)

> su

> dd if=/sdcard/recovery.img of=/dev/block/bootdevice/by-name/recovery

- Boot into TWRP recovery using volume up + power key combination or 'adb reboot recovery'

**How to update:**  
If you already have TWRP installed, you can use a flashable zip to update it.

- Download TWRP flashable zip and copy it to your sdcard
- Install the zip in TWRP
- Reboot recovery

**How to restore stock recovery?**

- Download TWRP flashable zip that matches your stock firmware version from [stock ROMs thread](http://www.modaco.com/forums/topic/375788-vodafone-smart-ultra-6-stock-roms-otas-and-recoveries/) and copy it to your sdcard
- Install the zip in TWRP
- Reboot recovery

**Sources:**

- [Device](https://gitlab.com/Konsta/android_device_zte_p839v55)

----

**27.4. 2016 changelog:**

- TWRP 3.0.2-0
- prebuilt kernel/dt from VDF-995NB01-UK07b
- fix USB mass storage on external sdcard

**27.11. changelog**

- use stock kernel from Turkish 5.1.1 update

**6.8. changelog:**

- better method to ignore accelerometer input events that caused issues with touchscreen
- set CPU parameters and add performance profiles

**5.8. changelog:**

- initial release

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=89959)

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/forums/topic/375554-twrp-3020/)

----
