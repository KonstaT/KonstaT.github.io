---
layout: rom
title: LineageOS 17.1 (Android 10)
subtitle: for Raspberry Pi 3
date: 2020-11-08
tags: [rpi3, LineageOS, LOS17.1]
social-share: true
comments: true
---

Here's my build of LineageOS 17.1 for Raspberry Pi 3 Model B and Model B+. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build!

![screenshot]({{ site.url }}/img/rpi3/LineageOS17.1/Screenshot_20200727-112252_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-17.1-20201108-UNOFFICIAL-KonstaKANG-rpi3.zip**  
[https://www.androidfilehost.com/?fid=10763459528675579938](https://www.androidfilehost.com/?fid=10763459528675579938)  
md5:2f0d503a5bbea5a4e15fbec22d767aff

**Working:**

- Audio (HDMI, 3.5mm jack, USB microphones, bluetooth speakers/headsets, etc)
- Audio DAC (using PCM512x DACs e.g. Hifiberry DAC+)
- Bluetooth
- Camera (using official Pi camera modules & UVC USB webcams)
- GPIO
- GPS (using external USB modules e.g. U-Blox 7)
- Ethernet
- Hardware accelerated graphics (VC4)
- HDMI display
- I2C
- IR remotes (using external GPIO IR modules e.g. TSOP4838)
- RTC (using external GPIO I2C modules e.g. DS3231)
- Serial console (using external GPIO serial console adapters e.g. PL2303)
- SPI
- Touchscreen/multi-touch (USB touchscreens, Waveshare SPI touchscreens, official 7" touchscreen using SwiftShader software renderer)
- USB (mouse, keyboard, storage, etc)
- Wifi
- Wifi tethering

**Not working:**

- Hardware video decoding & encoding (software decoding & encoding works)

**Issues:**

- SELinux is in permissive mode
- and more...

**Sources:**

- [kernel](https://github.com/lineage-rpi/android_kernel_brcm_rpi/tree/lineage-17.1-4.19)

**Thanks:**

- Peter Yoon and everyone who has contributed to android-rpi
- brobwind for graphics and bluetooth fixes
- Eric Anholt for VC4 graphics driver
- Google for Android Things platform
- Android-x86 project
- LineageOS team & everyone who has contributed to LineageOS 17.1

----

**How to install:**

1. Follow the official Raspberry Pi instructions for writing the image to the SD card ([Linux](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md), [Mac](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md), [Windows](https://www.raspberrypi.org/documentation/installation/installing-images/windows.md)).

**FAQ:**

Q: How to enable developer options?  
*A: Settings -> About tablet -> Click 'Build number' several times. You need to 'drag' the settings menu to reach the 'About tablet' section that is last on the list.*

Q: How to enable root access?  
*A: You can enable root access under Settings -> System -> Developer options -> Root access. LineageOS no longer has built-in root management for applications. You should keep this option disabled at all times when you are not using an app that explicitly requires root access.*

Q: How to enable local terminal application?  
*A: Settings -> System -> Developer options -> Local terminal*

Q: How to enable advanced reboot options?  
*A: Settings -> System -> Developer options -> Advanced restart*

Q: How to find several Raspberry Pi specific settings options?  
*A: Settings -> System -> Advanced settings*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. See [this page](https://www.raspberrypi.org/documentation/configuration/config-txt/video.md) under 'Which values are valid for my monitor?' to see how to check in Raspberry Pi OS which resolutions your display supports. 1280x720 resolution is used by default with this build. You can try changing value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will try to use the preferred resolution for your display.*

Q: Settings -> Storage shows total system size of 7 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 7 GB image, remaining space on your sdcard will remain unallocated. Easiest way to extend /data partition is to simply flash my [resize](https://www.androidfilehost.com/?fid=8889791610682901036) zip in TWRP.*

*Alternative option is to use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space. Resizing the partition manually will break support for encrypting /data. Format /data in TWRP recovery (Wipe -> Format data) after resizing to leave required space for crypto footer.*

Q: I have official 7" LCD display and touchscreen. What should I do?  
*A: Official 7" touchscreen is only supported using SwiftShader software renderer. See below how to switch between different graphics drivers. You will also need to change display size under Settings -> Display -> Display size (or change ro.sf.lcd_density to 120 in /vendor/build.prop) to adapt to the smaller resolution.*

Q: I need to use SwiftShader software renderer to use the official 7" display or I want to boot without any display connected. What should I do?  
*A: <span style="color:#FF0000;">Warning</span>, SwiftShader is a software renderer and using it affects graphics performance. You can switch between MESA and SwiftShader graphics drivers using a settings option found in Settings -> System -> Advanced settings -> Graphics drivers.*

*Also the previous method of executing following commands in 'adb shell'/serial console/terminal still works:*

```
su
rpi3-graphics.sh swiftshader
```
```
su
rpi3-graphics.sh mesa
```

Q: Raspberry Pi doesn't have a power button. How to power off/reboot device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi3/LineageOS17.1/powerbutton.png)

*You can enable the feature by using a settings option found in Settings -> System -> Advanced settings -> Power button.*

*Also the previous method of executing following commands in 'adb shell'/serial console/terminal still works:*

```
su
rpi3-powerbutton.sh
```

*You can also use the DIY power button to boot the device to TWRP recovery. Press and hold the button while powering on the device until you see the TWRP screen.*

Q: How to enable audio through 3.5mm jack?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Advanced settings -> Audio device.*

*Also the previous method of executing following commands in 'adb shell'/serial console/terminal still works:*

```
su
rpi3-audio.sh jack
```
```
su
rpi3-audio.sh hdmi
```
```
su
rpi3-audio.sh dac
```

Q: How to use IR remote?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Advanced settings -> Infrared remote.*

*You can place a keymap for your remote as /boot/rc_keymap to be automatically loaded on boot (see [available keymaps](https://github.com/lineage-rpi/android_external_ir-keytable/tree/lineage-17.1/rc_keymaps) for reference).*

Q: How to use RTC?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Advanced settings -> Real time clock.*

*System time is automatically read and set from the RTC on boot once you've enabled the feature. You need to write the system time you want to use to the RTC:*

```
su
hwclock -w -f /dev/rtc0
```

Q: How to boot from USB device?  
*A: <span style="color:#FF0000;">Warning</span>, this is still an experimental feature. Especially TWRP seems to have some issues with USB boot.*

1. Follow the [official instructions](https://www.raspberrypi.org/documentation/hardware/raspberrypi/bootmodes/msd.md) on how to enable USB boot on Pi 3 B (this step is not needed on Pi 3 B+)
2. Write image to your USB device as above
3. Mount the USB device on your computer and make following changes to /boot/config.txt under 'Boot device' section:
```
#dtoverlay=android-sdcard
dtoverlay=android-usb
```
4. Plug in the USB device to your Raspberry Pi, remove any sdcard, and boot

Q: How to boot to TWRP recovery?  
*A: You can boot to TWRP by selecting recovery option in Android power menu after enabling advanced restart options.*

*Also the previous method of executing following commands in 'adb shell'/serial console/terminal still works:*

```
su
rpi3-recovery.sh
```

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: How to update from previous LineageOS 17.1 build without losing data?  
*A:*

1. Boot to TWRP recovery with the build you want to keep the data (see FAQ)
2. Plug in an external USB storage device and select 'Backup'
3. Use 'Select Storage' to choose the USB device and 'Swipe to backup' (it's only necessary to backup the data partition so you can uncheck other partitions to speed up the process)
4. Write new LineageOS 17.1 image to the sdcard following installation instructions
5. Boot to TWRP recovery with the new build (see FAQ)
6. Select 'Restore' and find the backup you created from the USB device ('Select Storage')
7. Make sure you only have data selected as partitions to restore (uncheck other partitions if available) and select 'Swipe to Restore'
8. (Flash Google apps package/other add-ons you had previously installed)
9. Boot out of recovery (see FAQ)

Q: How to install Google apps?  
*A: <span style="color:#FF0000;">Warning</span>, installing gapps slows things down especially on low-end devices with limited amount of RAM such as this one. I would strongly recommend against installing Google Apps on this device. Raspberry Pi 3 doesn't have enough memory to provide decent user experience with Google Apps.*

1. Download [open_gapps-arm-10.0-pico-xxxxxxxx.zip](https://opengapps.org/?arch=arm&api=10.0&variant=pico) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install open_gapps-arm-10.0-pico-xxxxxxxx.zip from your selected storage
4. Wipe->Factory reset!
5. Boot out of recovery (see FAQ)

----

[Merged commits](https://review.lineageos.org/#/q/status:merged++branch:lineage-17.1+-project:%255E.*device.*+-project:%255E.*kernel.*,n,z) not mentioned in the changelog.

**8.11. changelog:**

- initial device settings for various Raspberry Pi specific options (Settings -> System -> Advanced settings)
  - audio device option (HDMI/3.5mm jack/audio DAC)
  - display options (graphics drivers, display resolution, display rotation)
  - options for IR remote, hardware keys, and RTC
- simplify booting to/out of TWRP recovery (see FAQ)
- improve support for booting from USB devices (see FAQ, thanks to maxwen)
- improve support for RTC & IR remotes (see FAQ)
- add more options for rotating touch input on Waveshare SPI (ADS7846) touchscreens (thanks to mikenon)
- allow switching display off with power button
- map right mouse button to back key
- update to TWRP 3.4.0-1
- update to Mesa 20.2.2 and latest upstream version of drm_hwcomposer
- update to Linux 4.19.155 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 November 2020 (merged)

**13.8. changelog:**

- bring back forced landscape orientation for portrait apps
- bring back support for running scripts from /system/etc/init.d/
- read resolution from /boot/resolution.txt
- fix issue with drm video playback
- initial support for SSH server
- update Mesa to 20.1.5
- update to Linux 4.19.139 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 August 2020 (merged)

**27.7. changelog:**

- initial LineageOS 17.1 build
- hardware accelerated graphics
  - VC4 using Mesa 20.1.4 with drm_hwcomposer & minigbm gralloc
  - 1280x720 resolution
- update TWRP to 3.4.0-0
- update to Linux 4.19.134 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 July 2020 (merged)

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=315543)

----
