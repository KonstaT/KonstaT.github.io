---
title: Ubuntu Touch
subtitle: for ZTE Blade III
date: 2013-06-25
tags: [atlas40, UbuntuTouch]
---

This is my port of [Ubuntu Touch](http://www.ubuntu.com/phone) for ZTE Blade III. Ubuntu for phones is still in very early development and almost nothing works! This **developer preview** is only to give you some idea what Ubuntu Touch will feel like in a mobile device.

![screenshot]({{ site.url }}/img/atlas40/UbuntuTouch/screenshot2.png)  
![screenshot]({{ site.url }}/img/atlas40/UbuntuTouch/screenshot3.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**saucy-preinstalled-armel+atlas40.zip**  
[https://www.androidfilehost.com/?fid=673368273298921573](https://www.androidfilehost.com/?fid=673368273298921573)  
md5:125c782e322e3f217c662c49670b6f49

**saucy-preinstalled-phablet-armhf.zip**  
[https://www.androidfilehost.com/?fid=385035244224410539](https://www.androidfilehost.com/?fid=385035244224410539)  
md5:f00724d112caa25d759f686acd6bf682

**Sources:**

- [Device](https://github.com/KonstaT/android_device_zte_atlas40/tree/ubuntu)
- [Kernel](https://github.com/KonstaT/zte-kernel-msm7x27a/tree/ubuntu)
- [Proprietaries](https://github.com/KonstaT/proprietary_vendor_zte)
- [phablet.ubuntu.com](http://phablet.ubuntu.com/gitweb)

**Thanks:**

- Canonical/Ubuntu
- CyanogenMod team

----

**How to install:**

1. copy the above packages to your phone's sdcard
2. boot into [ClockWorkMod recovery](/devices/atlas40/CWM)
3. make a nandroid backup of your previous ROM: backup & restore -> backup
4. wipe data & factory reset
5. flash device specific package: install .zip from sdcard -> choose .zip from sdcard -> saucy-preinstalled-armel+atlas40.zip
6. flash Ubuntu image: install .zip from sdcard -> choose .zip from sdcard -> saucy-preinstalled-phablet-armhf.zip
7. reboot now

**How to access Ubuntu shell:**

```
adb root
adb shell
ubuntu_chroot shell
```

----

**25.6. changelog:**

- updated for Ubuntu Touch 13.10 Saucy Salamander
- fixed screen density

**7.6. changelog:**

- updated for Ubuntu Touch 13.04 Raring Ringtail
- camera sort of works

**26.2. changelog:**

- initial release for MWC2013 developer preview (Ubuntu Touch 12.10 Quantal Quetzal)

----
