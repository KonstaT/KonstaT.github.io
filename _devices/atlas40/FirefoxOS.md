---
layout: rom
title: Firefox OS - B2G
subtitle: for ZTE Blade III
date: 2014-05-21
tags: [atlas40, FirefoxOS]
social-share: true
comments: true
---

This is my build of [Firefox OS](https://www.mozilla.org/en-US/firefoxos/) for ZTE Blade III. This is not meant for daily use (or any use really), it's just something to play with.

![screenshot]({{ site.url }}/devices/atlas40/FirefoxOS/screenshot-20140521-155653.png)  
![screenshot]({{ site.url }}/devices/atlas40/FirefoxOS/screenshot-20140521-155819.png)

**b2g-20140521-atlas40.zip**  
[https://www.androidfilehost.com/?fid=24591000424952057](https://www.androidfilehost.com/?fid=24591000424952057)  
md5:380603759b700b99b7a575808725ffef

**Working:**

- RIL (mobile network, data & SMS)
- Wifi
- Bluetooth
- GPS
- Audio (playback/input/routing/headphones/etc)
- Camera (photos & camcorder)
- Hardware acceleration and OpenGL rendering
- Hardware video decoding & encoding
- SD card
- USB-storage (on external sdcard) & adb
- USB-tethering
- Wifi-tethering
- Touchscreen/multi-touch
- Sensors
- LEDs
- FM radio

**Not working:**

- ???

**Sources:**

- [Device](https://github.com/KonstaT/android_device_zte_atlas40/tree/b2g)
- [Kernel](https://github.com/KonstaT/android_kernel_zte_msm7x27a/tree/ics_chocolate_rb4.2)
- [Proprietaries](https://github.com/KonstaT/proprietary_vendor_zte/tree/ics_chocolate_rb4.2)
- [mozilla-b2g](https://github.com/mozilla-b2g)

**Thanks:**

- Mozilla/B2G/CAF

----
----

**21.5. changelog:**

- Boot2Gecko 2.0.0.0-prerelease
- fixed display scaling (finally - that didn't take long :P)

**9.4. changelog:**

- build kernel from source
- cleanup ramdisk
- add busybox

**5.4. changelog:**

- Boot2Gecko 1.5.0.0-prerelease
- production build (userdebug, no test apps etc)

**30.9. changelog:**

- fixed random reboots
- fixed proximity sensor

**28.9. changelog:**

- fixed all the things :P
- based on ZTE Open (inari) official Mozilla developers sources
- Boot2Gecko 1.3.0.0-prerelease

**2.3. changelog:**

- some scaling fixes
- fixed display backlight

**24.2. changelog:**

- initial release

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=89887)

----
----

**How to install:**

1. Copy b2g-xxxxxxxx-atlas40.zip to your phone's sdcard
2. Boot into [ClockWorkMod](/devices/atlas40/CWM) recovery
3. Make a nandroid backup of your previous ROM: backup & restore -> backup
4. wipe data & factory reset (It's very important that you do this before you flash the zip - it also writes to data partition)
5. Install ROM: install .zip from sdcard -> choose .zip from sdcard -> b2g-xxxxxxxx-atlas40.zip
6. reboot now

----
----
