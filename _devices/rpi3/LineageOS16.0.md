---
layout: rom
title: LineageOS 16.0 (Android 9)
subtitle: for Raspberry Pi 3
date: 2019-06-27
tags: [rpi3, LineageOS, LOS16.0]
social-share: true
comments: true
---

Here's my build of LineageOS 16.0 for Raspberry Pi 3 Model B and Model B+. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build!

![screenshot]({{ site.url }}/img/rpi3/LineageOS16.0/Screenshot_20190627-114323_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-16.0-20190627-UNOFFICIAL-KonstaKANG-rpi3.zip**  
[https://www.androidfilehost.com/?fid=6006931924117904151](https://www.androidfilehost.com/?fid=6006931924117904151)  
md5:13cdd420f2050fcd60532d8d3b7aeafe

**Sources:**

- [kernel](https://github.com/lineage-rpi/android_kernel_brcm_rpi3/tree/lineage-16.0)

**Thanks:**

- peyo-hd and everyone who's contributed to android-rpi
- brobwind for graphics and bluetooth fixes
- Eric Anholt for VC4 graphics driver
- LineageOS team & everyone who's been working on LineageOS 16.0

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

Q: Raspberry Pi doesn't have power button, how do I power off/reboot my device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi3/LineageOS16.0/powerbutton.png)

*Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> System -> Developer options -> Local terminal) to enable the feature and reboot your device:*

```
su
rpi3-powerbutton.sh
```

Q: How to boot from USB device?  
*A: Warning, this is an experimental feature and there's still some issues with it. Android shows USB storage notification for each partition and you should ignore these. TWRP shows errors in few places but everything seems to be working regardless of this.*

1. Follow the [official instructions](https://www.raspberrypi.org/documentation/hardware/raspberrypi/bootmodes/msd.md) on how to enable USB boot on Pi 3 B (this step is not needed on Pi 3 B+)
2. Write image to your USB device as above
3. Mount the USB device on your computer and rename following files on the boot partition:
```
mv ramdisk.img ramdisk-sdcard.img
mv ramdisk-usb.img ramdisk.img
mv ramdisk-recovery.img ramdisk-recovery-sdcard.img
mv ramdisk-recovery-usb.img ramdisk-recovery.img
```
4. Plug in the USB device to your Raspberry Pi, remove any sdcard, and boot

Q: How to boot to TWRP recovery?  
*A: There's currently no proper way to boot between Android and TWRP, but this can achieved by renaming the ramdisk you want to boot. Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> System -> Developer options -> Local terminal) and reboot your device:*

```
su
rpi3-recovery.sh
```

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can execute the same script in TWRP terminal (Advanced->Terminal) if you have boot and system partitions mounted (Mount->Boot & Mount->System):*

```
rpi3-recovery.sh boot
```

*Or you can flash my [recovery2boot](https://www.androidfilehost.com/?fid=6006931924117903444) zip in TWRP. If you are booting from an USB device as above you need to use [recovery2boot-usb](https://www.androidfilehost.com/?fid=6006931924117903445) instead.*

Q: How to install Google apps?  
*A: Warning, installing gapps slows things down especially on low-end devices with limited amount of RAM such as this one.*

1. Download [open_gapps-arm-9.0-pico-xxxxxxxx.zip](https://opengapps.org/?arch=arm&api=9.0&variant=pico) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install open_gapps-arm-9.0-pico-xxxxxxxx.zip from your selected storage
4. Wipe->Factory reset!
5. Boot out of recovery (see FAQ)

----

[Merged commits](https://review.lineageos.org/#/q/status:merged++branch:lineage-16.0+-project:%255E.*device.*+-project:%255E.*kernel.*,n,z) not mentioned in the changelog.

**27.6. changelog:**

- initial LineageOS 16.0 build
- hardware accelerated graphics (thanks to brobwind for putting the final pieces together)
  - VC4 using Mesa 19.1 with drm_hwcomposer & minigbm gralloc
- fix bluetooth on Pi 3 B+ (thanks to brobwind)
- add initial support for booting from USB devices (see FAQ)
- add support for DIY hardware power button (see FAQ)
- update TWRP to 3.3.1-0
- update to Linux 4.14.129 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 June 2019 (merged)

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=296025)

----
