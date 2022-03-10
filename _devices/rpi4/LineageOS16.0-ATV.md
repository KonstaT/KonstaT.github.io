---
layout: rom
title: LineageOS 16.0 Android TV (Android 9)
subtitle: for Raspberry Pi 4
date: 2020-07-14
tags: [rpi4, LineageOS, LOS16.0, AndroidTV]
social-share: true
comments: true
---

Here's my build of LineageOS 16.0 Android TV for Raspberry Pi 4 Model B. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. This build currently uses Google's SwiftShader software renderer so graphics performance is probably not what you'd expect. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build!

![screenshot]({{ site.url }}/img/rpi4/LineageOS16.0/Screenshot_20200714-163900_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-16.0-20200714-UNOFFICIAL-KonstaKANG-rpi4-atv.zip**  
[https://www.androidfilehost.com/?fid=8889791610682892519](https://www.androidfilehost.com/?fid=8889791610682892519)  
md5:9596253ce6ae8623fdd3c68fc633488f

**Working:**

- Audio (HDMI, 3.5mm jack, USB microphones, bluetooth speakers/headsets, etc)
- Audio DAC (using PCM512x DACs e.g. Hifiberry DAC+)
- Bluetooth
- Camera (using official Pi camera modules & UVC USB webcams)
- GPIO
- GPS (using external USB modules e.g. U-Blox 7)
- Ethernet
- HDMI display
- I2C
- IR remotes (using external GPIO IR modules e.g. TSOP4838)
- RTC (using external GPIO I2C modules e.g. DS3231)
- Serial console (using external GPIO serial console adapters e.g. PL2303)
- SPI
- Touchscreen/multi-touch (using official 7" display)
- USB (mouse, keyboard, storage, etc)
- Wifi
- Wifi tethering

**Not working:**

- Hardware accelerated graphics (V3D)
- Hardware video decoding & encoding

**Issues:**

- Chromecast functionality is not supported on uncertified Android TV devices
- SELinux is in permissive mode
- and more...

**Sources:**

- [kernel](https://github.com/lineage-rpi/android_kernel_brcm_rpi/tree/lineage-16.0)

**Thanks:**

- peyo-hd and everyone who has contributed to android-rpi
- brobwind for bluetooth fixes
- Google for Android Things platform
- Android-x86 project
- LineageOS team & everyone who has contributed to LineageOS 16.0

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

**FAQ:**

Q: I can't find developer options, why?  
*A: Settings -> Device Preferences -> About -> Click 'Build number' several times*

Q: I have no root, why? What is that hashtag on my status bar?  
*A: You need enable root access under Settings -> Device Preferences -> Developer options -> Root access. Root management is now integrated as part of LineageOS' Privacy Guard and you can manage per app permissions under Settings -> Device Preferences -> Developer options -> Manage root access. You'll have a persistent notification in the status bar when you're running an app that uses root permissions.*

Q: Settings -> Storage shows total system size of 4 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 4 GB image, remaining space on your sdcard will remain unallocated. Easiest way to extend /data partition is to simply flash my [resize](https://www.androidfilehost.com/?fid=8889791610682891659) zip in TWRP.*

*Alternative option is to use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space. Resizing the partition manually will break support for encrypting /data. Format /data in TWRP recovery (Wipe -> Format data) after resizing to leave required space for crypto footer.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build uses 1280x720 resolution by default so you need to use a HDMI display that supports it. If your display doesn't support 1280x720 resolution, you can try changing values in /boot/config.txt to something it does (see [this page](https://www.raspberrypi.org/documentation/computers/config_txt.html#hdmi-mode)). 720p is still the maximum resolution that is supported by the graphics drivers used in this build.*

Q: I have official 7" LCD display and touchscreen. What should I do?  
*A: Official 7" touchscreen is supported without any modifications. You will only need to change display size under Settings -> Display -> Display size (or change ro.sf.lcd_density to 120 in /system/build.prop) to adapt to the smaller resolution.*

Q: Raspberry Pi doesn't have power button, how do I power off/reboot my device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi4/LineageOS16.0/powerbutton.png)

*Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> Device Preferences -> Developer options -> Local terminal) to enable the feature and reboot your device:*

```
su
rpi4-powerbutton.sh
```

*You can also use the DIY power button to boot the device to TWRP recovery. Press and hold the button while powering on the device until you see the TWRP screen. If you use this method to boot to recovery, you can ignore what is said about booting into/out of TWRP later in the FAQ.*

Q: How to enable audio through 3.5mm jack?  
*A: Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> Device Preferences -> Developer options -> Local terminal) to enable the feature and reboot your device:*

```
su
rpi4-audio-jack.sh
```

Q: How to boot from USB device?  
*A: Warning, this is an experimental feature and there's still some issues with it. Android shows USB storage notification for each partition and you should ignore these. TWRP shows errors in few places but everything seems to be working regardless of this.*

1. Install EEPROM that supports booting from USB
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
*A: There's currently no proper way to boot between Android and TWRP, but this can achieved by renaming the ramdisk you want to boot. Execute following commands in 'adb shell'/serial console/terminal (you can enable built-in terminal app from Settings -> Device Preferences -> Developer options -> Local terminal) and reboot your device:*

```
su
rpi4-recovery.sh
```

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can execute the same script in TWRP terminal (Advanced -> Terminal) if you have boot and system partitions mounted (Mount -> Boot & Mount -> System):*

```
rpi4-recovery.sh boot
```

*Or you can flash my [recovery2boot](https://www.androidfilehost.com/?fid=8889791610682891658) zip in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

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
*A:*

1. Download [open_gapps-arm-9.0-tvstock-xxxxxxxx.zip](https://opengapps.org/?arch=arm&api=9.0&variant=tvstock) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install open_gapps-arm-9.0-tvstock-xxxxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged++branch:lineage-16.0+-project:%255E.*device.*+-project:%255E.*kernel.*,n,z) not mentioned in the changelog.

**14.7. changelog:**

- initial Android TV build

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=303982)

----
