---
layout: rom
title: OmniROM (Android 4.3)
subtitle: for ZTE Blade III
date: 2013-10-20
tags: [atlas40, OmniROM]
social-share: true
comments: true
---

This is my port of [OmniROM](https://omnirom.org/) for ZTE Blade III. It is unofficial and **unsupported** by the Omni team (or anyone else for that matter :P). It's for **advanced users** and for **testing purposes** only.

I've included some features that are not yet merged to OmniROM (e.g. multi-window support) and fixed few things that are not working in OmniROM in general. Please note that OmniROM is still very very early in development. Only reason I'm releasing this now is to have a quite clean AOSP build (with all the hardware working) without too many additional features. Root access needs to be enabled by using a separate package (SuperSU).

![screenshot]({{ site.url }}/img/atlas40/OmniROM/Screenshot_2013-10-20-11-31-06.png)  
![screenshot]({{ site.url }}/img/atlas40/OmniROM/Screenshot_2013-10-20-11-31-54.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**omni-4.3.0-20131020-atlas40-KonstaKANG.zip**  
[https://www.androidfilehost.com/?fid=24591000424952096](https://www.androidfilehost.com/?fid=24591000424952096)  
md5:b44660f4c485c88128426b0b2d388f5c

**Working:**

- RIL (mobile network & data)
- Wifi
- Bluetooth
- GPS
- Audio (playback/input/routing/headphones/etc)
- Camera (photos, camcorder & panorama)
- Hardware acceleration and OpenGL rendering
- Hardware video decoding & encoding
- 'Project Butter'
- SDcard
- USB-storage (on external sdcard, MTP and PTP only) & adb
- USB-tethering
- Wifi-tethering
- Touchscreen/multi-touch
- Sensors
- LEDs
- FM radio

**Not working:**

- ???

**Sources:**

- [Device](https://github.com/KonstaT/android_device_zte_atlas40/tree/android-4.3)
- [Proprietaries](https://github.com/KonstaT/proprietary_vendor_zte/tree/cm-10.2)
- [Kernel](https://github.com/KonstaT/android_kernel_zte_msm7x27a/tree/cm-10.2)

**Thanks:**

- OmniROM team

----

**How to install:**

1. boot into [ClockWorkMod recovery](/devices/atlas40/CWM)
2. backup and restore -> backup (makes a nandroid backup of your previous ROM)
3. mounts and storage -> format /system
4. wipe data and factory reset
5. install omni-4.3.0-xxxxxxxx-atlas40-KonstaKANG.zip
6. install gapps-jb-xxxxxxxx-signed.zip
7. reboot now

**FAQ:**

Q: I can't find developer options and performance settings, why?  
*A: Settings -> About phone -> Click 'Build number' several times*

Q: I don't have reboot options in power menu, why?  
*A: Settings -> Developer options -> Advanced reboot*

----

[Merged commits](https://gerrit.omnirom.org/#/q/status:merged,n,z) not mentioned in the changelog.

**20.10. changelog:**

- initial release

----

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/topic/365936-omnirom-43/)

----
