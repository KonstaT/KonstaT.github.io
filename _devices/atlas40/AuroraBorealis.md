---
layout: rom
title: Aurora Borealis RLS1 (Android 4.0.4)
subtitle: for ZTE Blade III
date: 2013-01-20
tags: [atlas40]
social-share: true
comments: true
---

This ROM is based on the latest generic update [ICS_P772N10V1.0.0B10](http://wwwen.zte.com.cn/endata/mobile/Macedonia/Macedonia_SoftWare/201212/P020121226586794303608.zip). ZTE apps have been removed or replaced with CM/AOSP apps where necessary. Most of the ZTE customizations have been removed to give this ROM a clean AOSP look.

![screenshot]({{ site.url }}/img/atlas40/AuroraBorealis/post-834050-0-30106600-1358682096.png)  
![screenshot]({{ site.url }}/img/atlas40/AuroraBorealis/post-834050-0-05510700-1358682253.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**Aurora-Borealis-RLS1.zip**  
[https://www.androidfilehost.com/?fid=24591000424952089](https://www.androidfilehost.com/?fid=24591000424952089)  
md5:5bce3bd69e8fe7399a5bac1c4b24f112

**Features**:

- rooted
- busyboxed
- deodexed, optimized, resigned and zipaligned
- init.d support (and userinit.d support)
- unsecured boot image
- AOSP lockscreen that shows next alarm time from any app
- reboot options in power menu (thanks to [kahvitahra](http://forum.xda-developers.com/showpost.php?p=24303020&postcount=13))
- modified notification power widgets (layout, button order, ringer mode)
- CRT screen off animation
- AOSP ringtones (silenced low battery alarm)
- [Apex Launcher](https://play.google.com/store/apps/details?id=com.anddoes.launcher&hl=en)
- CM9 LatinIME (with volume key cursor controls)
- CM9 Browser
- CM9 Deskclock
- CM9 [Calculator](https://play.google.com/store/apps/details?id=com.android2.calculator3)
- [No-frills CPU Control](https://play.google.com/store/apps/details?id=it.sineo.android.noFrillsCPU)
- [Superuser](https://play.google.com/store/apps/details?id=com.noshufou.android.su)
- [Terminal Emulator](https://play.google.com/store/apps/details?id=jackpal.androidterm)
- Updated Google apps
- [AdAway](https://play.google.com/store/apps/details?id=org.adaway) hosts file (please support app developers by purchasing their apps instead)
- CM9 APNs list
- accurate kernel information in 'About phone' settings
- and much more...

**Kernel:**

- overclock support (up to 1,267 GHz)
- cpu governors: savagedzen, interactivex, smartassv2, ondemand, etc
- i/o schedulers: noop, cfq, bfq, vr and sio
- swap, cifs, zram, ksm, etc

[Kernel source](https://github.com/KonstaT/zte-kernel-msm7x27a/tree/047ea17da8e20a0236b03897fd948e9dcf1d291e)

**Add-ons:**

**Aurora-Borealis-Stock-Kernel.zip** (just in case)  
[https://www.androidfilehost.com/?fid=24591000424952088](https://www.androidfilehost.com/?fid=24591000424952088)  
md5:038fc490091480b6e50c393debe7976a

----

**How to install:**

1. Copy Aurora-Borealis-RLSx.zip to your phone's sdcard
2. Boot into [ClockWorkMod recovery](/devices/atlas40/CWM)
3. Make a nandroid backup of your previous ROM: backup & restore -> backup
4. Install ROM: install .zip from sdcard -> choose .zip from sdcard -> Aurora-Borealis-RLSx.zip
5. wipe data & factory reset (!)
6. reboot now

----

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/topic/360392-aurora-borealis-rls1/)

----
