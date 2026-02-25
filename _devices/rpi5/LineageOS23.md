---
title: LineageOS 23.2 (Android 16)
subtitle: for Raspberry Pi 5
date: 2026-01-28
tags: [rpi5, LineageOS, LOS23]
screenshot: /img/rpi5/LineageOS23/Screenshot_20260128-150000_Settings.png
---

Here's my build of LineageOS 23.2 for Raspberry Pi 5, Pi 500, and Compute Module 5. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. Pi 5 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> Raspberry Pi hardware specific implementation in this build is based on source code released on my [Raspberry Vanilla](https://github.com/raspberry-vanilla) project but this build offers various additional features and enhancements. This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}{{ page.screenshot }})

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

[**lineage-23.2-20260128-UNOFFICIAL-KonstaKANG-rpi5.zip**](https://app.filen.io/#/d/618bc70e-5dd2-4aaa-80dd-4c88d7ffba54%23416c795169324f45767831306b527079615671416b7248556b72353544733531)  
sha256:0d9098f118d3faf170c26373f5094b63c81849f77fefecfe4b469f1a8515f96c

<span style="color:#FF0000;">Note!</span> It's not possible to OTA update from builds older than 20260128. Clean installation is required!

[**lineage-23.2-20260128-UNOFFICIAL-KonstaKANG-rpi5-ota.zip**](https://app.filen.io/#/d/25bd6905-a3c3-4848-b6a4-8caf9243a278%236152444a51776633335a656e6335673231476f59706954714d4850335a6a5171) (TWRP flashable OTA package)  
sha256:e901759d0933da17db8e78e5430da2c05c37021fc2183c50756edb15c3f98e51

**Working:**

- Audio (HDMI, USB microphones, bluetooth speakers/headphones, etc)
- Audio DAC (using GPIO DACs e.g. Hifiberry DAC+)
- Bluetooth (and bluetooth tethering)
- Camera (using official Pi camera modules & UVC USB webcams)
- GPIO
- GPS (using external USB modules e.g. U-Blox 7)
- Ethernet
- Hardware accelerated graphics (V3D, OpenGL & Vulkan)
- Hardware video decoding (H.265 decoding)
- HDMI display (and HDMI-CEC)
- I2C
- IR remotes (using external GPIO IR modules e.g. TSOP4838)
- Power button
- RTC
- Sensors (using external GPIO I2C modules e.g. MPU6050, LSM6DS3, LSM303DLHC, BME280/BMP280, and APDS9930 accelerometer, gyroscope, magnetometer, temperature, pressure, humidity, ambient light, and proximity)
- Serial console (using external GPIO serial console adapters e.g. PL2303)
- SPI
- Touchscreen/multi-touch (official 7" touchscreen, USB touchscreens, Waveshare SPI touchscreens)
- USB (mouse, keyboard, storage, etc)
- USB-C (ADB, MTP, PTP, USB tethering)
- Wifi (and wifi tethering)

**Issues:**

- Various issues with CSI camera modules
- SELinux is in permissive mode
- Encrypting userdata is not supported
- and more...

**Sources:**

- [kernel](https://github.com/raspberry-vanilla/android_kernel_manifest/tree/android-16.0)

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

**How to update:**

You can also update to newer builds using TWRP flashable OTA packages. OTA updates pushed through the built-in Updater app are stored at /data/lineageos_updates/.

<span style="color:#FF0000;">Note!</span> It's not possible to OTA update from builds older than 20260128. Clean installation is required!

1. Download lineage-23.2-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi5-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install lineage-23.2-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi5-ota.zip from your selected storage
4. (Flash Magisk/other add-ons you had previously installed)
5. Boot out of recovery (see FAQ)

Changes that are backed up and restored flashing OTAs:

- Device specific settings changed using Settings -> System -> Raspberry Pi settings
- Manual changes to /boot/resolution.txt and /boot/rc_keymap.txt
- USB boot configuration in /boot/config.txt
- User specific options in /boot/config_user.txt
- GApps

Changes that are not backed up and restored flashing OTAs:

- Manual changes to /boot/config.txt (and any other manual changes to /boot partition)
- Magisk
- Widevine

**FAQ:**

Q: How to find several Raspberry Pi specific settings options?  
*A: Settings -> System -> Raspberry Pi settings*

*Most options in this menu require you to reboot your device for the setting to take effect.*

Q: How to enable advanced reboot options?  
*A: Settings -> System -> Buttons -> Power menu -> Advanced restart*

Q: How to enable developer options?  
*A: Settings -> About tablet -> Click 'Build number' several times.*

Q: How to enable root access?  
*A: LineageOS no longer has built-in root management for applications. You can have root access via ADB after enabling Settings -> System -> Developer options -> Rooted debugging or serial console. It is also possible to install Magisk following instructions later in the FAQ.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. 1920x1080 resolution is used by default with this build. You can change value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will use the preferred resolution of your display.*

Q: How to use DSI touchscreen displays?  
*A: You can enable required configurations using a settings option found in Settings -> System -> Raspberry Pi settings -> DSI display. You need to disconnect any HDMI display when using the DSI display.*

Q: How to use desktop mode on primary display?  
*A: Enable Settings -> System -> Raspberry Pi settings -> Desktop mode and reboot the device.*

Q: Is there any keyboard shortcuts for Android system functions?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi-common/powerbutton.png)

*You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Power button.*

*You can also use the DIY power button to boot the device to TWRP recovery. Press and hold the button while powering on the device until you see the TWRP screen.*

Q: How to use IR remote?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Infrared remote.*

*You can place a keymap for your remote as /boot/rc_keymap.txt to be automatically loaded on boot. See [available keymaps](https://github.com/lineage-rpi/android_external_ir-keytable/tree/lineage-18.1/rc_keymaps) for reference. You can use ```ir-keytable -p all -t``` in rooted shell to figure out the keycodes for the remote you're using.*

Q: How to boot from USB or NVME device?  
*A:*

1. Write image to your USB/NVME storage device as above
2. Mount the USB/NVME device on your computer and modify /boot/config.txt under 'Boot device' section (e.g. for USB boot):
```
#dtoverlay=android-sdcard
dtoverlay=android-usb
#dtoverlay=android-nvme
```
3. Connect the USB/NVME device to your Raspberry Pi, remove any sdcard, and boot

Q: How to boot to TWRP recovery?  
*A: You can boot to TWRP by selecting recovery option in Android power menu after enabling advanced restart options.*

*If mouse cursor doesn't appear, try replugging your mouse.*

*Booting to TWRP is not supported with DSI displays. HDMI display must be used when booting to recovery mode.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

Q: Settings -> Storage shows total system size of 15.5 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 15.5 GB image, remaining space on your sdcard will remain unallocated.*

1. Download [KonstaKANG-rpi-resize.zip](https://app.filen.io/#/d/00b60e66-e76f-407d-8bcf-d2bdeb727a9f%235f4d384e744f3952755837347a737a2d48774f466f39377833536579674e664a) (sha256:6e84ccce8682db905668e337d51f986b76d58cfb91b57edd7fd118f4c52ade92) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-resize.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Widevine L3?  
*A:*

1. Download [KonstaKANG-rpi-widevine-16.zip](https://app.filen.io/#/d/8a3a5db5-6f11-4e8a-b954-ad5e6237ee5b%23ZY4caco1Htxyu1zQcW8DmXeOzYmPC3Kw) (sha256:454026bf89e1755fef03c428e52980a9200afb4655b1b35da07124492745504a) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-widevine-16.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Magisk?  
*A:*

1. Download [KonstaKANG-rpi-magisk-v30.7.zip](https://app.filen.io/#/d/1ede1dd2-73c7-4bf3-a272-d2d2d1114af9%23696e55746c536d50336632745048412d57464c3646374442503955376e5a554e) (sha256:8f7dfab3653107cc76b5ff050f01acb04d939e059d86535f82cc305635b031fc) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v30.7.apk](https://github.com/topjohnwu/Magisk/releases/tag/v30.7)
3. Boot to TWRP recovery (see FAQ)
4. Install KonstaKANG-rpi-magisk-v30.7.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v30.7.apk using Android's built-in file manager/```adb install```/etc.
7. Ignore suggestions to reinstall Magisk within the app and/or warning about the installation method

Q: How to install Google apps?  
*A:*

1. Download [MindTheGapps-16.0.0-arm64-xxxxxxxx_xxxxxx.zip](https://github.com/MindTheGapps/16.0.0-arm64/releases/latest) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install MindTheGapps-16.0.0-arm64-xxxxxxxx_xxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-23.2+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**28.1. 2026 changelog:**

- LineageOS 23.2 (Android 16 QPR2)
- add option to enable desktop mode on primary display
- add options to set GPS serial device and baud rate
- remove built-in VNC server (no longer maintainable due to upstream changes)
- add support for effects with the new audio HAL
- add metadata partition for new aconfig storage
- update Raspberry Pi settings theme to Material 3 Expressive
- convert Mesa EGL to APEX
- update to TWRP 3.7.0_11-3-KonstaKANG
- update to libcamera v0.6.0, libpisp v1.3.0
- update to FFmpeg 8.0.1
- update to alsa-lib v1.2.15.3, alsa-utils v1.2.15.2
- update to Mesa 25.3.4
- update to Linux 6.12.67 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 1 January 2026

**11.11. changelog:**

- update to AIDL audio HAL
- convert ffmpeg_codec2 HAL to APEX
- convert libcamera, external camera, and minigbm gralloc HALs to APEX
- convert vulkan to APEX
- all HALs that are part of Raspberry Vanilla have been updated to AIDL and packaged into APEX! \o/
- fix kernel DRM driver issue with YVU formats (upstream)
- fix kernel wifi driver issue with ANQP/Hotspot 2.0 networks (upstream)
- read model from device tree
- update to v4l-utils 1.32.0
- update to Mesa 25.2.6
- update to Linux 6.12.53 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 1 November 2025

**7.10. changelog:**

- initial LineageOS 23.0 release
- Mesa 25.2.4
- FFmpeg 8.0, AOSP dav1d 1.5.0
- libcamera master/v0.5.2, libpisp v1.2.1
- alsa-lib/alsa-utils v1.2.14
- v4l-utils master/1.29.0
- TWRP 3.7.0_11-2-KonstaKANG
- Linux 6.12.49 kernel
- Android security patch level: 1 September 2025

----

**Previous builds:**

- [Download](https://app.filen.io/#/f/a476803e-6ce1-48d0-8d09-73e149a0a226%2354366a565f5470715936424e53596a756a644b42704d48633976686c6d69306a)

----
