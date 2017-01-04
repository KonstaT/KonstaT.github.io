---
layout: rom
title: Remix OS 2.0 (Android 5.1.1)
subtitle: for Nexbox A95X
date: 2016-08-12
tags: [nexbox_a95x, RemixOS]
comments: true
---

This is my port of [Remix OS](http://www.jide.com/remixos) 2.0 for Nexbox A95X (Amlogic S905 with Android 5.1) TV box. This ROM is based on Vensmile U1 official Remix OS release build B2016062801.

![screenshot]({{ site.url }}/devices/nexbox_a95x/RemixOS/Screenshot_2016-08-12-17-23-16.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this thread instead.

**RemixOS-20160812-nexbox_a95x.zip**  
[https://www.androidfilehost.com/?fid=24671318762848889](https://www.androidfilehost.com/?fid=24671318762848889)  
md5:30f5f0de965e75cac148b701d9cdc406

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

- There's bluetooth options in few places even though this device doesn't have bluetooth
- SELinux is in permissive mode (same as stock - bootloader passes this on cmdline and there's nothing I can do about it)
- It's still an early release - expect minor problems

**Thanks:**

- Jide for Remix OS

----
----

**12.8. changelog:**

- Remix OS 2.0.300 B2016062801 (Vensmile U1)
- Remote control improvements
  - Pressing CloudTV button alternates between Remix OS desktop and MboxLauncher
  - Pressing Kodi button launches Kodi app if installed
- Change display density to something more suitable for TV box

**3.8. changelog:**

- Remix OS 2.0.200 B2016041201 (Sen5 S905)
- initial release

----
----

**How to install:**

1. boot into [TWRP recovery](/devices/nexbox_a95x/TWRP)
2. backup -> backup (create a nandroid backup of your current ROM)
3. wipe -> advanced wipe -> wipe /system
4. wipe -> factory reset
5. install RemixOS-2016xxxx-nexbox_a95x.zip
6. reboot system

**FAQ:**

Q: I don't have root. What should I do?  
*A: Download [SuperSU](http://download.chainfire.eu/supersu-stable) flashable zip and install it in TWRP*

Q: I can't find developer options, why?  
*A: Settings -> About phone -> Click 'Build number' several times*

----
----
