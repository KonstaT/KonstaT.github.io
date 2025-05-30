---
title: LineageOS 17.1 Android TV (Android 10)
subtitle: for Raspberry Pi 4
date: 2021-01-22
tags: [rpi4, LineageOS, LOS17.1, AndroidTV]
screenshot: /img/rpi4/LineageOS17.1/Screenshot_20200815-143204_Settings.png
---

Here's my build of LineageOS 17.1 Android TV for Raspberry Pi 4 Model B and Pi 400. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build!

![screenshot]({{ site.url }}{{ page.screenshot }})

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

<span style="color:#FF0000;">Note!</span> This release is discontinued from development, seriously outdated, and no longer available. Please use more recent Android releases instead.

**lineage-17.1-20210122-UNOFFICIAL-KonstaKANG-rpi4-atv.zip**  
md5:c3f1a2e0f48f6a388b6d3930d8d2e0a3

**Working:**

- Audio (HDMI, 3.5mm jack, USB microphones, bluetooth speakers/headsets, etc)
- Audio DAC (using GPIO DACs e.g. Hifiberry DAC+)
- Bluetooth
- Camera (using official Pi camera modules & UVC USB webcams)
- GPIO
- GPS (using external USB modules e.g. U-Blox 7)
- Ethernet
- Hardware accelerated graphics (V3D)
- HDMI display
- I2C
- IR remotes (using external GPIO IR modules e.g. TSOP4838)
- RTC (using external GPIO I2C modules e.g. DS3231)
- Sensors (using external GPIO I2C modules e.g. MPU6050, LSM6DS3 & LSM303DLHC accelerometer/gyroscope/magnetometer)
- Serial console (using external GPIO serial console adapters e.g. PL2303)
- SPI
- Touchscreen/multi-touch (USB touchscreens, Waveshare SPI touchscreens, official 7" touchscreen using SwiftShader software renderer)
- USB (mouse, keyboard, storage, etc)
- USB-C (ADB, MTP, PTP, USB-tethering)
- Wifi
- Wifi tethering

**Not working:**

- Hardware video decoding & encoding (software decoding & encoding works)

**Issues:**

- Chromecast functionality is not supported on uncertified Android TV devices
- SELinux is in permissive mode
- and more...

**Sources:**

- [kernel](https://github.com/lineage-rpi/android_kernel_brcm_rpi/tree/lineage-17.1)

**Thanks:**

- Peter Yoon and everyone who has contributed to android-rpi
- brobwind for bluetooth fixes
- Roman Stratiienko and GloDroid project for graphics fixes
- Eric Anholt for V3D graphics driver
- Maxime Ripard for Pi 4 KMS driver
- Google for Android Things platform
- Android-x86 project
- LineageOS team & everyone who has contributed to LineageOS 17.1

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

**FAQ:**

Q: How to enable developer options?  
*A: Settings -> Device Preferences -> About -> Click 'Build number' several times.*

Q: How to enable root access?  
*A: You can enable root access under Settings -> Device Preferences -> Developer options -> Root access. LineageOS no longer has built-in root management for applications. You should keep this option disabled at all times when you are not using an app that explicitly requires root access.*

Q: How to enable local terminal application?  
*A: Settings -> Device Preferences -> Developer options -> Local terminal*

Q: How to enable advanced reboot options?  
*A: Settings -> Device Preferences -> Developer options -> Advanced reboot*

Q: How to find several Raspberry Pi specific settings options?  
*A: Settings -> Device Preferences -> Raspberry Pi settings*

*Most options in this menu require you to reboot your device for the setting to take effect.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. 1920x1080 resolution is used by default with this build. You can change value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will use the preferred resolution of your display.*

Q: Settings -> Storage shows total system size of 7 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 7 GB image, remaining space on your sdcard will remain unallocated. Easiest way to extend /data partition is to simply flash my [resize](https://www.androidfilehost.com/?fid=8889791610682901036) zip in TWRP.*

*Alternative option is to use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space. Resizing the partition manually will break support for encrypting /data. Format /data in TWRP recovery (Wipe -> Format data) after resizing to leave required space for crypto footer.*

Q: Raspberry Pi doesn't have a power button. How to power off/reboot device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi-common/powerbutton.png)

*You can enable the feature by using a settings option found in Settings -> Device Preferences -> Raspberry Pi settings -> Power button.*

*Also the previous method of executing following commands in 'adb shell'/serial console/terminal still works:*

```
su
rpi4-powerbutton.sh
```

*You can also use the DIY power button to boot the device to TWRP recovery. Press and hold the button while powering on the device until you see the TWRP screen.*

Q: How to enable audio through 3.5mm jack?  
*A: You can enable the feature by using a settings option found in Settings -> Device Preferences -> Raspberry Pi settings -> Audio device.*

*Also the previous method of executing following commands in 'adb shell'/serial console/terminal still works:*

```
su
rpi4-audio.sh jack
```
```
su
rpi4-audio.sh hdmi
```
```
su
rpi4-audio.sh dac
```

Q: How to use IR remote?  
*A: You can enable the feature by using a settings option found in Settings -> Device Preferences -> Raspberry Pi settings -> Infrared remote.*

*You can place a keymap for your remote as /boot/rc_keymap to be automatically loaded on boot (see [available keymaps](https://github.com/lineage-rpi/android_external_ir-keytable/tree/lineage-17.1/rc_keymaps) for reference).*

Q: How to use RTC?  
*A: You can enable the feature by using a settings option found in Settings -> Device Preferences -> Raspberry Pi settings -> Real time clock.*

*System time is automatically read and set from the RTC on boot once you've enabled the feature. You need to write the system time you want to use to the RTC in rooted shell:*

```
su
hwclock -w -f /dev/rtc0
```

Q: How to use SSH?  
*A: You can start/stop the built-in SSH server by using a settings option found in Settings -> Device Preferences -> Raspberry Pi settings -> SSH.*

*Android doesn't have user accounts with passwords so key based authentication is used with SSH instead. Necessary keys are generated on the first boot and you need to pull the private key to your computer (or alternatively you can push your own previously generated keys to the device). See Settings -> Device Preferences -> About -> Status -> IP address for your device's IP address (192.168.0.100 is assumed here). Enable Android debugging & Rooted debugging under Settings -> Device Preferences -> Developer options.*

```
adb connect 192.168.0.100
adb root
adb pull /data/ssh/ssh_host_rsa_key my_private_key
```

```
ssh -i my_private_key root@192.168.0.100
```

*It's recommended to disable adb after this.*

Q: How to boot from USB device?  
*A: <span style="color:#FF0000;">Warning</span>, this is still an experimental feature. Especially TWRP seems to have some issues with USB boot.*

1. Install EEPROM that supports booting from USB
2. Write image to your USB device as above
3. Mount the USB device on your computer and make following changes to /boot/config.txt under 'Boot device' section:
```
#dtoverlay=android-sdcard
dtoverlay=android-usb
```
4. Plug in the USB device to your Raspberry Pi, remove any sdcard, and boot

Q: How to boot to TWRP recovery?  
*A: You can boot to TWRP by selecting Settings -> Device preferences -> About -> Restart -> Recovery after enabling advanced restart options.*

*Also the previous method of executing following commands in 'adb shell'/serial console/terminal still works:*

```
su
rpi4-recovery.sh
```

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

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
*A:*

1. Download [open_gapps-arm-10.0-tvstock-xxxxxxxx.zip](https://opengapps.org/?arch=arm&api=10.0&variant=tvstock) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install open_gapps-arm-10.0-tvstock-xxxxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged++branch:lineage-17.1+-project:%255E.*device.*+-project:%255E.*kernel.*,n,z) not mentioned in the changelog.

**22.1. 2021 changelog:**

- add support for sensors (MPU6050, LSM6DS3 & LSM303DLHC accelerometer/gyroscope/magnetometer on I2C)
- add support for more serial GPS devices
- add support for USB-C (ADB, MTP, PTP, USB-tethering)
- enable bluetooth tethering
- add settings option for mouse back button feature
- update to TWRP 3.5.0_9-0-KonstaKANG
- update to Mesa 20.3.3
- update to Linux 5.4.91 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 January 2021 (merged)

**21.11. changelog:**

- initial device settings for various Raspberry Pi specific options (Settings -> Device Preferences -> Raspberry Pi settings)
  - audio device option (HDMI/3.5mm jack/audio DAC)
  - display options (graphics drivers, display resolution, display rotation)
  - options for IR remote, hardware keys, CPU overclock, SSH, and RTC
- fix wifi & bluetooth on Pi 400, should be fully functional now (Compute Module 4 support still untested)
- support using HDMI:1 (fix HDMI audio in Android & fix display in TWRP)
- fix touch input on Fondar USB touchscreen (thanks to maxwen)
- update to Linux 5.4.77 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**9.11. changelog:**

- fix official remote control app
- include files app
- fix wrong color format used in some games (thanks to Roman Stratiienko)
- simplify booting to/out of TWRP recovery (see FAQ)
- improve support for booting from USB devices (see FAQ, thanks to maxwen)
- improve support for RTC & IR remotes (see FAQ)
- allow switching display off with power button
- initial support for Pi Compute Module 4 & Pi 400 (untested)
- update to TWRP 3.4.0-1
- update to Mesa 20.2.2 and latest upstream version of drm_hwcomposer
- update to Linux 5.4.75 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 November 2020 (merged)

**15.8. changelog:**

- initial Android TV build
- map right mouse button to back key

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=315544)

----
