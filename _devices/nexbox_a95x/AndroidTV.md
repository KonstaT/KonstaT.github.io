---
layout: rom
title: Android TV (Android 5.1.1)
subtitle: for Nexbox A95X
date: 2017-01-22
tags: [nexbox_a95x, AndroidTV]
social-share: true
comments: true
---

This is my port of Android TV for Nexbox A95X (Amlogic S905 with Android 5.1) TV box. This ROM is based on Ugoos AM1 official Android TV release build V0.0.7.tv.

![screenshot]({{ site.url }}/img/nexbox_a95x/AndroidTV/Screenshot_2017-01-22-19-12-23.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**AndroidTV-20170122-nexbox_a95x.zip**  
[https://www.androidfilehost.com/?fid=529152257862697453](https://www.androidfilehost.com/?fid=529152257862697453)  
md5:91170c7e8265aa2ee14661f69927e44a

**Working:**

- Wifi
- Audio
- Ethernet
- Hardware video decoding & encoding
- Hardware acceleration and OpenGL rendering
- HDMI
- Remote control
- SD cards
- USB OTG (storage, mouse, keyboard)

**Not working:**

- ???

**Issues:**

- Some Ugoos settings don't do anything on this device
- SELinux is in permissive mode (same as stock - bootloader passes this on cmdline and there's nothing I can do about it)
- It's still an early release - expect minor problems

----

**How to install:**

1. boot into [TWRP recovery](/devices/nexbox_a95x/TWRP)
2. backup -> backup (create a nandroid backup of your current ROM)
3. wipe -> advanced wipe -> wipe /system
4. wipe -> factory reset
5. install AndroidTV-2017xxxx-nexbox_a95x.zip
6. reboot system

**FAQ:**

Q: I don't have root. What should I do?  
*A: Download [SuperSU](http://download.chainfire.eu/supersu-stable) flashable zip and install it in TWRP or select Settings -> Ugoos settings/system -> Root*

Q: I can't find developer options, why?  
*A: Settings -> More settings -> About MediaBox -> Click 'Build number' several times*

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=137212)

----
