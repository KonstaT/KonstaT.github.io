---
layout: rom
title: Sailfish OS
subtitle: for ZTE Open C / Kis 3
date: 2016-01-23
tags: [kis3, SailfishOS]
social-share: true
comments: true
---

This is my build of [Sailfish OS](https://sailfishos.org/) for ZTE Open C / Kis 3 (Beeline Smart2, Moche/MEO Smart A16, <s>ZTE V811W</s>, ZTE V811, Skinny V811, Optus Hop Smart, <s>ZTE Blade M</s>, etc). This is an early alpha build and it's not meant for daily use (or any use really), it's just something for **advanced users** to play with.

<span style="color:#FF0000;">Important. Prerequisites!!!</span> You need to install Android KitKat on your Open C first (e.g. [EU_FFOS+to+Android.zip](https://www.androidfilehost.com/?fid=673368273298921576) will do). You also need to have this [ClockWorkMod](/devices/kis3/CWM) or this [TWRP](/devices/kis3/TWRP) recovery installed.

![screenshot]({{ site.url }}/img/kis3/SailfishOS/20151004231859.png)  
![screenshot]({{ site.url }}/img/kis3/SailfishOS/20151004231941.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**cm-12.1-YOG3C-KonstaKANG-kis3.zip** (yes, you need to use this exact CM12.1 build as a base)  
[https://www.androidfilehost.com/?fid=24591000424952228](https://www.androidfilehost.com/?fid=24591000424952228)  
md5:23593b90fb7be93a7e14aec6a3a95f68

**sailfishos-kis3-release-2.0.0.10-20160123-alpha2.zip**  
[https://www.androidfilehost.com/?fid=24591000424952230](https://www.androidfilehost.com/?fid=24591000424952230)  
md5:bf5ac7346ed5e08e32c884fd0022409c

**Working:**

- Audio
- Bluetooth
- Camera (photos & camcorder)
- Display
- GPS
- Headphones (run 'systemctl restart ohmd.service' as root after each reboot)
- Media decoding/encoding with gstreamer codecs
- RIL (voice calls, SMS & mobile data)
- Sensors
- SD card
- Touchscreen
- USB storage (MTP only - choose 'PC connection' mode from settings)
- USB-tethering
- Vibrate
- Wifi
- Wifi-tethering

**Partially working:**

- FM radio - not hooked to UI yet - command line guide in [this post](http://www.modaco.com/forums/topic/375953-devrom231-sailfish-os-for-zte-open-c-kis-3/?do=findComment&comment=2271337)

**Not working:**

- and more...

**Issues:**

- Display auto-brightness is enabled by default on first boot so display is very dark on devices that don't have an ambient light sensor ('Settings -> System -> Display -> Adjust automatically' to disable)
- Display brightness setting allows decreasing brightness below 'minimum' which powers off the panel completely (don't do it ;))
- Proximity sensor disabled for now - wasn't working(?) and would cause display to switch (and stay) off during calls
- <s>There is some kind boot time race condition with systemd services and device fails to boot to Sailfish OS sometimes and reboots itself instead (remove battery, wait for stars to align better and try again :P)</s>

**Sources:**

- [mer-hybris](https://github.com/mer-hybris)
- [mer-hybris-kis3](https://github.com/mer-hybris-kis3)

**Thanks:**

- Jolla
- [Sailfish OS HADK](https://sailfishos.org/develop/hadk/) (Hardware Adaptation Development Kit)
- sledges, mal- & people at #sailfishos-porters

----

**How to install:**

1. boot into [ClockWorkMod recovery](/devices/kis3/CWM)
2. backup and restore -> backup (create a nandroid backup of your current ROM)
3. mounts and storage -> format /system
4. wipe data and factory reset
5. install cm-12.1-YOG3C-KonstaKANG-kis3.zip
6. install sailfishos-kis3-release-2.0.0.10-2016xxxx-alphax.zip
7. reboot now
8. if/when recovery asks to fix root - choose no

**FAQ:**

[Frequently Asked Question - SFE devices](http://forum.xda-developers.com/jolla-sailfish/general/qa-sailfish-n4-thread-devices-t2727330)

----

**23.1. 2016 changelog:**

- fix voice calls
- fix video decoding/encoding
- disable proximity sensor for now - wasn't working(?) and would cause display to switch (and stay) off during calls
- simplify installation process
- Sailfish OS 2.0.0.10

**1.10. changelog:**

- initial release
- Sailfish OS 1.1.9.28

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=90031)

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/forums/topic/375953-sailfish-os/)

----
