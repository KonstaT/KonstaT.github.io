---
layout: rom
title: Remix OS 2.0 (Android 5.1.1)
subtitle: for Chuwi Vi10 Plus, Hi10 Plus, Hi10 Pro, Hibook, Hibook Pro & Hi12
date: 2016-12-13
tags: [chuwi_vi10plus, RemixOS]
social-share: true
comments: true
---

This is my port of [Remix OS 2.0](http://www.jide.com/remixos) for Chuwi Vi10 Plus. Chuwi Hi10 Plus, Hi10 Pro, Hibook, Hibook Pro & Hi12 are supported with compatibility patch (see installation instructions below). This ROM is based on Chuwi Hi10 Plus official Remix OS release build B2016092102.

![screenshot]({{ site.url }}/devices/chuwi_vi10plus/RemixOS/Screenshot_2016-12-11-17-38-09.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**RemixOS-B2016092102-chuwi_vi10plus.zip**  
[https://www.androidfilehost.com/?fid=745425885120693269](https://www.androidfilehost.com/?fid=745425885120693269)  
md5:bae3c864d458192ed782d1ded5b10c9f

**Working:**

- Wifi
- Audio (playback/input/routing/headphones/etc)
- Bluetooth
- Camera
- Hardware video decoding & encoding
- Hardware acceleration and OpenGL rendering
- HDMI
- Keyboard dock
- Network/wifi location
- SD cards
- Stylus pen (HiPen H2)
- USB storage (MTP and PTP) & adb
- USB OTG (storage, mouse, keyboard)
- Touchscreen/multi-touch
- Sensors

**Not working:**

- ???

**Changes I've made compared to the original firmware:**

- include source built kernel with updated mmc drivers to fix 'freezing issue' on Vi10/Hi10 Plus
- add configs for external keyboard docks to fix 'keyboard dock wake issue'
- remove suspicious [TeleyService](https://www.virustotal.com/en/file/15932aa7ce6a40bff85a09697bff15f0eb5d3d420b3ca7c237042275cf3a44af/analysis/1481196805/) & [YouTubeOem](https://www.virustotal.com/en/file/d9a120506f4a1df8f763829be44a1b3d7aa2ffff8e48d6415dd1b36c3f1f9dec/analysis/1481630439/) apps that are bundled with stock Remix OS on Chuwi devices
- add Widevine blobs from Cube iWork8 Ultimate to fix playback of DRM protected content with various media streaming apps
- disable dm-verity
- enable/disable 'reboot to Windows' option on different devices

**Sources:**

- [Kernel](https://github.com/CM-CHT/android_kernel_intel_cherrytrail/tree/lollipop)

**Thanks:**

- Jide for Remix OS
- Jide Technology for releasing Linux kernel source code for Chuwi Vi10 Plus
- festlv for the keybord dock wake fix
- matrixsoul for B2016092102 dump

----

**How to install:**

1. boot into [TWRP recovery](/devices/chuwi_vi10plus/TWRP)
2. backup -> backup (create a nandroid backup of your current ROM)
3. wipe -> advanced wipe -> wipe /system
4. wipe -> factory reset
5. install RemixOS-Bxxxxxxxxxx-chuwi_vi10plus.zip
6. (install Hi10 Plus/Hi10 Pro/Hibook/Hibook Pro/Hi12 patch if necessary - see FAQ below)
7. reboot system

**FAQ:**

Q: I don't have root. I don't have busybox. What should I do?  
*A: Download [SuperSU](http://download.chainfire.eu/supersu-stable) and/or [BusyBox](http://forum.xda-developers.com/attachment.php?attachmentid=3932008&d=1478780582) flashable zip and install it in TWRP.*

Q: Official Xposed Framework is not working with Intel stock ROMs. What should I do?  
*A: You can use [this modified build](http://amiduos.com/support/knowledge-base/article/xposed-framework-support-in-amiduos) with Intel stock ROMs.*

Q: I can't find developer options, why?  
*A: Settings -> About tablet -> Click 'Build number' several times*

Q: I have Hi10 Plus. What should I do?  
*A: Download patch below and install it in TWRP.*

**RemixOS-B2016092102-chuwi_vi10plus-Hi10Plus.zip**  
[https://www.androidfilehost.com/?fid=673368273298916089](https://www.androidfilehost.com/?fid=673368273298916089)  
md5:ae62311171bf3ff5c964fc2d8d4400c3

Q: I have Hi10 Pro. What should I do?  
*A: Download patch below and install it in TWRP.*

**RemixOS-B2016092102-chuwi_vi10plus-Hi10Pro.zip**  
[https://www.androidfilehost.com/?fid=457095661767123941](https://www.androidfilehost.com/?fid=457095661767123941)  
md5:6caa1a7344655f782365b9461442ae8e

**RemixOS-B2016092102-chuwi_vi10plus-Hi10Pro-HQ64.zip** (latest batch - serial no HQ64)  
[https://www.androidfilehost.com/?fid=673368273298922118](https://www.androidfilehost.com/?fid=673368273298922118)  
md5:e1ba1d733e6533d06b2688d0ab7d899e

Q: I have Hibook. What should I do?  
*A: Download patch below and install it in TWRP.*

**RemixOS-B2016092102-chuwi_vi10plus-Hibook.zip**  
[https://www.androidfilehost.com/?fid=673368273298930091](https://www.androidfilehost.com/?fid=673368273298930091)  
md5:60595eb22f26f25470fa9b28e874ba36

Q: I have Hibook Pro. What should I do?  
*A: Download patch below and install it in TWRP.*

**RemixOS-B2016092102-chuwi_vi10plus-HibookPro.zip**  
[https://www.androidfilehost.com/?fid=529152257862689658](https://www.androidfilehost.com/?fid=529152257862689658)  
md5:2bb06f2e2535271a8c7aa2dc9080a335

Q: I have Hi12. What should I do?  
*A: Download patch below and install it in TWRP.*

**RemixOS-B2016092102-chuwi_vi10plus-Hi12.zip**  
[https://www.androidfilehost.com/?fid=673368273298916095](https://www.androidfilehost.com/?fid=673368273298916095)  
md5:3ceb8d817c1113480b5e31971cc45b0f

**RemixOS-B2016092102-chuwi_vi10plus-Hi12-451609XXX.zip** (latest batch - serial no 451609XXX)  
[https://www.androidfilehost.com/?fid=529152257862689659](https://www.androidfilehost.com/?fid=529152257862689659)  
md5:0df88ff0ca593747433af94b7585267e

----

**13.12. changelog:**

- remove suspicious YouTubeOem app that's bundled with stock Remix OS on Chuwi devices (see virustotal)
- add Widevine blobs from Cube iWork8 Ultimate to fix playback of DRM protected content with various media streaming apps

**11.12. changelog:**

- B2016092102
- initial release

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=133629)

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/forums/topic/378166-remix-os-20/)

----
