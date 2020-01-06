---
layout: rom
title: LineageOS 15.1 (Android 8.1.0)
subtitle: for Raspberry Pi 3
date: 2018-07-06
tags: [rpi3, LineageOS, LOS15.1]
social-share: true
comments: true
---

Here's my build of LineageOS 15.1 for Raspberry Pi 3 Model B and Model B+ (bluetooth does not currently work on the new plus model). It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. This build currently uses Google's SwiftShader software renderer so graphics performance is probably not what you'd expect. This build is not meant as a daily driver and it's certainly not suitable for media device use.

![screenshot]({{ site.url }}/img/rpi3/LineageOS15.1/Screenshot_Settings_20180630-144620.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-15.1-20180706-UNOFFICIAL-KonstaKANG-rpi3.zip**  
[https://www.androidfilehost.com/?fid=1395089523397922440](https://www.androidfilehost.com/?fid=1395089523397922440)  
md5:257ade2f567223cf792023e2d75e5b75

**Sources:**

- [lineage-rpi](https://github.com/lineage-rpi)

**Thanks:**

- Google for Android Things platform
- peyo-hd and everyone who's contributed to android-rpi
- LineageOS team & everyone who's been working on LineageOS 15.1

----

**How to install:**

1. Follow the official Raspberry Pi instructions for writing the image to the SD card ([Linux](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md), [Mac](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md), [Windows](https://www.raspberrypi.org/documentation/installation/installing-images/windows.md)).

**FAQ:**

Q: I can't find developer options, why?  
*A: Settings -> About phone -> Click 'Build number' several times*

Q: I have no root, why? What is that hashtag on my status bar?  
*A: You need enable root access under Settings -> Developer options -> Root access. Root management is now integrated as part of LineageOS' Privacy Guard and you can manage per app permissions under Settings -> Developer options -> Manage root access. You'll have a persistent notification in the status bar when you're running an app that uses root permissions.*

Q: Settings -> Storage shows xx GB used by system. There's unallocated space on my sdcard. What should I do?  
*A: This is a 4 GB image, remaining space on your sdcard will remain unallocated. Settings app shows unallocated space as used by system which in reality it is not. You can use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space. Resizing the partition manually will break support for encrypting /data. Format /data in TWRP recovery (Wipe->Format data) after resizing to leave required space for crypto footer.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build uses 1280x720 resolution by default so you need to use a HDMI display that supports it. See [this page](https://www.raspberrypi.org/documentation/configuration/config-txt/video.md) under 'Which values are valid for my monitor?' to see how to check which resolutions your display supports using Raspbian. If your display doesn't support 1280x720 resolution, you can try changing values in /boot/config.txt to something it does (see [this page](https://www.raspberrypi.org/documentation/configuration/config-txt/video.md)). 720p is still the maximum resolution that is supported by the graphics drivers used in this build.*

Q: I have official 7" LCD display and touchscreen. What should I do?  
*A: Official 7" touchscreen is supported without any modifications. You will only need to change display size under Settings -> Display -> Display size (or change ro.sf.lcd_density to 120 in /system/build.prop) to adapt to the smaller resolution.*

Q: Raspberry Pi doesn't have power button, how do I power off/reboot my device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to boot to TWRP recovery?  
*A: There's currently no proper way to boot between Android and TWRP, but this can achieved by renaming the ramdisk you want to boot. Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> Developer options -> Local terminal) and reboot your device:*

```
su
rpi3-recovery.sh
```

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can execute the same script in TWRP terminal (Advanced->Terminal) if you have system partition mounted (Mount->System):*

```
rpi3-recovery.sh boot
```

*Or you can flash my [recovery2boot](https://www.androidfilehost.com/?fid=5862345805528041368) zip in TWRP.*

Q: How to install Google apps?  

1. Download [MindTheGapps-8.1.0-arm-XXXXXXXX_XXXXXX.zip](https://androidfilehost.com/?flid=170282&w=files) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install MindTheGapps-8.1.0-arm-XXXXXXXX_XXXXXX.zip from your selected storage
4. Wipe->Factory reset!
5. Boot out of recovery (see FAQ)

----

[Merged commits](https://review.lineageos.org/#/q/status:merged++branch:lineage-15.1+-project:%255E.*device.*+-project:%255E.*kernel.*,n,z) not mentioned in the changelog.

**6.7. changelog:**

- update to Linux 4.14.53 kernel
- add initial support for Pi 3 Model B+ (bluetooth does not currently work)
- include TWRP 3.2.2-0 custom recovery (see FAQ how to boot)
- build SwiftShader from source and update to master branch (improves graphics performance)
- add support for encrypting the device

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
