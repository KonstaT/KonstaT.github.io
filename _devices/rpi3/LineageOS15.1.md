---
layout: rom
title: LineageOS 15.1 (Android 8.1.0)
subtitle: for Raspberry Pi 3
date: 2018-06-13
tags: [rpi3, LineageOS, LOS15.1]
social-share: true
comments: true
---

Here's my build of LineageOS 15.1 for Raspberry Pi 3. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. This build currently uses Google's SwiftShader software renderer so display performance is probably not what you'd expect. This build is not meant as a daily driver and it's certainly not suitable for media device use.

![screenshot]({{ site.url }}/img/rpi3/LineageOS15.1/Screenshot_Settings_20180303-133238.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-15.1-20180613-UNOFFICIAL-KonstaKANG-rpi3.zip**  
[https://www.androidfilehost.com/?fid=962339331458998347](https://www.androidfilehost.com/?fid=962339331458998347)  
md5:6bcabeffa149fc155c348127a3a1f9fc

**Sources:**

- [lineage-rpi](https://github.com/lineage-rpi)

**Thanks:**

- Google for Android Things platform
- LineageOS team & everyone who's been working on LineageOS 15.1

----

**FAQ:**

Q: I can't find developer options, why?  
*A: Settings -> About phone -> Click 'Build number' several times*

Q: I don't have reboot options in power menu, why?  
*A: Settings -> Developer options -> Advanced restart*

Q: I have no root, why? What is that hashtag on my status bar?  
*A: You need enable root access under Settings -> Developer options -> Root access. Root management is now integrated as part of LineageOS' Privacy Guard and you can manage per app permissions under Settings -> Developer options -> Manage root access. You'll have a persistent notification in the status bar when you're running an app that uses root permissions.*

Q: Settings -> Storage shows xx GB used by system. There's unallocated space on my sdcard. What should I do?  
*A: This is a 4 GB image, remaining space on your sdcard will remain unallocated. Settings app shows unallocated space as used by system which in reality it is not. You can use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space.*

Q: Raspberry Pi doesn't have power button, how do I power off/reboot my device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

----

[Merged commits](https://review.lineageos.org/#/q/status:merged++branch:lineage-15.1+-project:%255E.*device.*+-project:%255E.*kernel.*,n,z) not mentioned in the changelog.

**13.6. changelog:**

- update display drivers from Android Things 1.0
- add support for USB webcams (UVC) with third party USB webcam apps
- default to noop I/O scheduler
- update to Linux 4.4.136 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 June 2018 (merged)

**7.3. changelog:**

- update display drivers from Android Things DP 7
- update wifi firmware
- update to Linux 4.4.120 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 March 2018 (merged)

**3.3. changelog:**

- initial release

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=254102)

----
