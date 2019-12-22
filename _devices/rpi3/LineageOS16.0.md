---
layout: rom
title: LineageOS 16.0 (Android 9)
subtitle: for Raspberry Pi 3
date: 2019-12-22
tags: [rpi3, LineageOS, LOS16.0]
social-share: true
comments: true
---

Here's my build of LineageOS 16.0 for Raspberry Pi 3 Model B and Model B+. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build!

![screenshot]({{ site.url }}/img/rpi3/LineageOS16.0/Screenshot_20190627-114323_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-16.0-20191222-UNOFFICIAL-KonstaKANG-rpi3.zip**  
[https://www.androidfilehost.com/?fid=4349826312261681719](https://www.androidfilehost.com/?fid=4349826312261681719)  
md5:956962b364583917b47046ef8556db85

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

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. See [this page](https://www.raspberrypi.org/documentation/configuration/config-txt/video.md) under 'Which values are valid for my monitor?' to see how to check which resolutions your display supports using Raspbian. 1280x720 resolution is used by default with this build. If your display doesn't support 1280x720 resolution, you can try changing value in /boot/resolution.txt to something it does.*

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

Q: How to enable audio through 3.5mm jack?  
*Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> System -> Developer options -> Local terminal) to enable the feature and reboot your device:*

```
su
rpi3-audio-jack.sh
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

Q: How to update from previous LineageOS 16.0 build without losing data?  
*A:*

1. Boot to TWRP recovery with the build you want to keep the data (see FAQ)
2. Plug in an external USB storage device and select 'Backup'
3. Use 'Select Storage' to choose the USB device and 'Swipe to backup' (it's only necessary to backup the data partition so you can uncheck other partitions to speed up the process)
4. Write new LineageOS 16.0 image to the sdcard following installation instructions
5. Boot to TWRP recovery with the new build (see FAQ)
6. Select 'Restore' and find the backup you created from the USB device ('Select Storage')
7. Make sure you only have data selected as partitions to restore (uncheck other partitions if available) and select 'Swipe to Restore'
8. (Flash Google apps package/other add-ons you had previously installed)
9. Boot out of recovery (see FAQ)

Q: How to install Google apps?  
*A: Warning, installing gapps slows things down especially on low-end devices with limited amount of RAM such as this one.*

1. Download [open_gapps-arm-9.0-pico-xxxxxxxx.zip](https://opengapps.org/?arch=arm&api=9.0&variant=pico) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install open_gapps-arm-9.0-pico-xxxxxxxx.zip from your selected storage
4. Wipe->Factory reset!
5. Boot out of recovery (see FAQ)

----

[Merged commits](https://review.lineageos.org/#/q/status:merged++branch:lineage-16.0+-project:%255E.*device.*+-project:%255E.*kernel.*,n,z) not mentioned in the changelog.

**22.12. changelog:**

- update to MESA 19.3 and latest upstream versions of minigbm gralloc, drm_hwcomposer, and libdrm
- set default resolution using a configuration file (see FAQ)
- add vendor init library to set serial number, revision, and resolution properties
- add health HAL to fake battery/charging
- add script to enable audio through 3.5mm jack (see FAQ)
- add initial support for RTC hardware (tested with DS3231)
- update to Linux 4.14.160 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 December 2019 (merged)

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
