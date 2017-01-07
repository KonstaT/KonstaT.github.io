---
layout: rom
title: MIUI v5 (Android 4.1.2)
subtitle: for ZTE Blade III
date: 2013-04-04
tags: [atlas40, MIUI]
social-share: true
comments: true
---

This ROM is based on official [ZTE N880E MIUI](http://www.miui.com/getrom.php?r=49). Funny thing is that N880E MIUI builds are based on the CM10 device sources that I've released, so thanks to me. ;)

![screenshot]({{ site.url }}/devices/atlas40/MIUI/Screenshot_2013-05-21-12-10-41.png)  
![screenshot]({{ site.url }}/devices/atlas40/MIUI/Screenshot_2013-05-21-12-11-15.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**miui_atlas40_4.4.4_4.1.zip**  
[https://www.androidfilehost.com/?fid=24591000424952069](https://www.androidfilehost.com/?fid=24591000424952069)  
md5:a5a46d1fae01efb3a84ed7a008f5219b  

**Changes to N880E version:**

- fixed wifi and bluetooth (N880E has Broadcom wifi/bt, we have Atheros/Qualcomm)
- added [Google Keyboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin)
- added Play Store
- removed Chinese MIUI apps
- used Blade III CM10 kernel ([source](https://github.com/KonstaT/android_kernel_zte_msm7x27a))
- used Blade III [proprietaries](https://github.com/KonstaT/proprietary_vendor_zte/tree/jellybean/atlas40)

Everything should work to CM10 standards except FM radio. Don't expect anything to be fixed (fix it yourself). I don't plan to use/support this ROM. It was just something I played around with for couple of hours. I just thought I'd share it because it's been requested several times and it seems to work well enough.

----
----

MIUI changes not mentioned in the changelog. See [MIUI changelog](http://www.miui.com/changelog.html).

**4.4. changelog:**

- MIUI 4.4.4
- added support for emulated internal sdcard
- updated Play Store and Google Keyboard to the latest versions
- disabled MIUI updater

**13.8. changelog:**

- MIUI 3.8.9
- updated to latest CM10 kernel

**9.6 changelog:**

- MIUI 3.6.7
- included [Google Keyboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin) instead of CM10 LatinIME
- removed Chinese MIUI apps
- fixed soft reboot after PIN input

**3.6. changelog:**

- MIUI 3.5.31
- updated Play Store (4.1.10)

**21.5. changelog:**

- MIUI 3.5.17
- initial release

----
----

**How to install:**

1. boot into [ClockWorkMod recovery](/devices/atlas40/CWM)
2. mounts and storage -> format system
3. wipe data and factory reset
4. install zip from sdcard -> choose zip from sdcard -> miui_atlas40_x.x.x_4.1.zip
5. reboot

**How to port:**  
I wrote a simple tool for porting from N880E. You'll need a linux system with few basic packages installed (git, java, zip). Place an official N880E MIUI ROM to the root of the porting tool directory (_place_rom_here_) and run the tool.

> ./port.sh

**miui-porting-atlas40.tar.gz**  
[https://www.androidfilehost.com/?fid=24591000424952068](https://www.androidfilehost.com/?fid=24591000424952068)

----
----
