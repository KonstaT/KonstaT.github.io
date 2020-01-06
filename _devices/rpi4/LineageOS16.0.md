---
layout: rom
title: LineageOS 16.0 (Android 9)
subtitle: for Raspberry Pi 4
date: 2020-01-06
tags: [rpi4, LineageOS, LOS16.0]
social-share: true
comments: true
---

Here's my build of LineageOS 16.0 for Raspberry Pi 4 Model B. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. This build currently uses Google's SwiftShader software renderer so graphics performance is probably not what you'd expect. This build is not suitable for media device use or graphics intensive gaming. I'd also recommend using Pi 4 models with 2GB or 4GB of RAM to run this build.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build!

![screenshot]({{ site.url }}/img/rpi4/LineageOS16.0/Screenshot_20200105-125543_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-16.0-20200106-UNOFFICIAL-KonstaKANG-rpi4.zip**  
[https://www.androidfilehost.com/?fid=4349826312261694601](https://www.androidfilehost.com/?fid=4349826312261694601)  
md5:4d440798dca478eaea6b5ae057883f21

**Sources:**

- [kernel](https://github.com/lineage-rpi/android_kernel_brcm_rpi4/tree/lineage-16.0)

**Thanks:**

- peyo-hd and everyone who has contributed to android-rpi
- brobwind for bluetooth fixes
- Google for Android Things platform
- LineageOS team & everyone who has contributed to LineageOS 16.0

----

**How to install:**

1. Follow the official Raspberry Pi instructions for writing the image to the SD card ([Linux](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md), [Mac](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md), [Windows](https://www.raspberrypi.org/documentation/installation/installing-images/windows.md)).

**FAQ:**

Q: I can't find developer options, why?  
*A: Settings -> About tablet -> Click 'Build number' several times*

Q: I have no root, why? What is that hashtag on my status bar?  
*A: You need enable root access under Settings -> System -> Developer options -> Root access. Root management is now integrated as part of LineageOS' Privacy Guard and you can manage per app permissions under Settings -> System -> Developer options -> Manage root access. You'll have a persistent notification in the status bar when you're running an app that uses root permissions.*

Q: Settings -> Storage shows xx GB used by system. There's unallocated space on my sdcard. What should I do?  
*A: This is a 4 GB image, remaining space on your sdcard will remain unallocated. Settings app shows unallocated space as used by system which in reality it is not. You can use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space. Resizing the partition manually will break support for encrypting /data. Format /data in TWRP recovery (Wipe->Format data) after resizing to leave required space for crypto footer.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build uses 1280x720 resolution by default so you need to use a HDMI display that supports it. See [this page](https://www.raspberrypi.org/documentation/configuration/config-txt/video.md) under 'Which values are valid for my monitor?' to see how to check which resolutions your display supports using Raspbian. If your display doesn't support 1280x720 resolution, you can try changing values in /boot/config.txt to something it does (see [this page](https://www.raspberrypi.org/documentation/configuration/config-txt/video.md)). 720p is still the maximum resolution that is supported by the graphics drivers used in this build.*

Q: I have official 7" LCD display and touchscreen. What should I do?  
*A: Official 7" touchscreen is supported without any modifications. You will only need to change display size under Settings -> Display -> Display size (or change ro.sf.lcd_density to 120 in /system/build.prop) to adapt to the smaller resolution.*

Q: Raspberry Pi doesn't have power button, how do I power off/reboot my device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi4/LineageOS16.0/powerbutton.png)

*Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> System -> Developer options -> Local terminal) to enable the feature and reboot your device:*

```
su
rpi4-powerbutton.sh
```

*You can also use the DIY power button to boot the device to TWRP recovery. Press and hold the button while powering on the device until you see the TWRP screen. If you use this method to boot to recovery, you can ignore what is said about booting into/out of TWRP later in the FAQ.*

Q: How to enable audio through 3.5mm jack?  
*Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> System -> Developer options -> Local terminal) to enable the feature and reboot your device:*

```
su
rpi4-audio-jack.sh
```

Q: How to boot to TWRP recovery?  
*A: There's currently no proper way to boot between Android and TWRP, but this can achieved by renaming the ramdisk you want to boot. Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> System -> Developer options -> Local terminal) and reboot your device:*

```
su
rpi4-recovery.sh
```

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can execute the same script in TWRP terminal (Advanced->Terminal) if you have boot and system partitions mounted (Mount->Boot & Mount->System):*

```
rpi4-recovery.sh boot
```

*Or you can flash my [recovery2boot](https://www.androidfilehost.com/?fid=4349826312261694552) zip in TWRP.*

Q: How to install Google apps?  
*A: <span style="color:#FF0000;">Warning</span>, Raspberry Pi is not a Google Play certified device and you will need to register this build as an exception. You can find more information on [this page](https://lineageos.org/Google-Play-Certification/). Acquiring Google Services Framework Android ID requires some extra steps so I'd recommend [getting familiar with the process](https://www.google.com/android/uncertified/) before proceeding to install gapps. If you are not too familiar executing commands in adb shell'/serial console/terminal I have also created a TWRP [flashable zip](https://www.androidfilehost.com/?fid=4349826312261699299) that will read and print the GSFAID you need to register.*

1. Download [open_gapps-arm-9.0-pico-xxxxxxxx.zip](https://opengapps.org/?arch=arm&api=9.0&variant=pico) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install open_gapps-arm-9.0-pico-xxxxxxxx.zip from your selected storage
4. Wipe->Factory reset!
5. Boot out of recovery (see FAQ)

----

[Merged commits](https://review.lineageos.org/#/q/status:merged++branch:lineage-16.0+-project:%255E.*device.*+-project:%255E.*kernel.*,n,z) not mentioned in the changelog.

**6.1. changelog:**

- initial LineageOS 16.0 build
- use SwiftShader software renderer for graphics
- option to use DIY hardware power button to boot to TWRP recovery (see FAQ)
- initial support for IR modules and remotes (tested with TSOP4838)
- include TWRP 3.3.1-0
- use Linux 4.19.84 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 December 2019 (merged)

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=303982)

----
