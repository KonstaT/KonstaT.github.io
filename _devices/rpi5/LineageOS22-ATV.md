---
layout: rom
title: LineageOS 22 Android TV (Android 15)
subtitle: for Raspberry Pi 5
date: 2024-12-17
tags: [rpi4, LineageOS, LOS22, AndroidTV]
social-share: true
comments: true
---

Here's my build of LineageOS 22 Android TV for Raspberry Pi 5, Pi 500, and Compute Module 5. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}/img/rpi5/LineageOS22/Screenshot_20241217-150000_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-22.0-20241217-UNOFFICIAL-KonstaKANG-rpi5-atv.zip**  
[https://dlupload.com/filedetail/736075137](https://dlupload.com/filedetail/736075137)  
md5:a8d15ede3575bfe5a0722dfbbf93e518

**lineage-22.0-20241217-UNOFFICIAL-KonstaKANG-rpi5-atv-ota.zip** (TWRP flashable OTA package)  
[https://dlupload.com/filedetail/1291250955](https://dlupload.com/filedetail/1291250955)  
md5:a30ca496d0c1b183b092ee3cf68e8aa7

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

- Chromecast functionality is not supported on uncertified Android TV devices
- Various issues with CSI camera modules
- SELinux is in permissive mode
- Encrypting userdata is not supported
- and more...

**Sources:**

- [kernel](https://github.com/raspberry-vanilla/android_kernel_manifest/tree/android-15.0)

**Thanks:**

- Roman Stratiienko and GloDroid project
- Peter Yoon and android-rpi project
- AOSP reference board developers (dragonboard, hikey, yukawa)
- Android-x86 project
- LineageOS team and everyone who has contributed to LineageOS 22

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

You can also update to newer builds using TWRP flashable OTA packages. OTA updates pushed through the built-in Updater app are stored at /data/lineageos_updates/.

1. Download lineage-22.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi5-atv-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install lineage-22.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi5-atv-ota.zip from your selected storage
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
*A: Settings -> System -> Buttons -> Advanced restart*

Q: How to enable developer options?  
*A: Settings -> System -> About -> Click 'Build number' several times.*

Q: How to enable root access?  
*A: LineageOS no longer has built-in root management for applications. You can have root access via ADB after enabling Settings -> System -> Developer options -> Rooted debugging, SSH (see FAQ below), or serial console. It is also possible to install Magisk following instructions later in the FAQ.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. 1920x1080 resolution is used by default with this build. You can change value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will use the preferred resolution of your display.*

Q: How to use DSI touchscreen displays?  
*A: You can enable required configurations using a settings option found in Settings -> System -> Raspberry Pi settings -> DSI display. You need to disconnect any HDMI display when using the DSI display.*

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

Q: How to use SSH?  
*A: You can start/stop the built-in SSH server by using a settings option found in Settings -> System -> Raspberry Pi settings -> SSH.*

*Android doesn't have user accounts with passwords so key based authentication is used with SSH instead. Necessary keys are generated on the first boot and you need to pull the private key to your computer (or alternatively you can push your own previously generated keys to the device). See Settings -> System -> About -> Status -> IP address for your device's IP address (192.168.0.100 is assumed here). Enable Android debugging & Rooted debugging under Settings -> System -> Developer options.*

```
adb connect 192.168.0.100
adb root
adb pull /data/ssh/ssh_host_ed25519_key my_private_key
```

```
chmod 600 my_private_key
ssh -i my_private_key root@192.168.0.100
```

*It's recommended to disable adb after this.*

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
*A: You can boot to TWRP by selecting Settings -> System -> Power and Energy -> Restart -> Recovery after enabling advanced restart options.*

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

Q: Settings -> Storage shows total system size of 7 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 7 GB image, remaining space on your sdcard will remain unallocated.*

1. Download [KonstaKANG-rpi-resize.zip](https://dlupload.com/filedetail/1485615052) (md5:31a1d26e80cf4544a1fcd689e8799d7b) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-resize.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Widevine L3?  
*A:*

1. Download [KonstaKANG-rpi-widevine-15.zip](https://dlupload.com/filedetail/413405961) (md5:3de5b04da3262fd3e0aa382b30915591) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-widevine-15.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Magisk?  
*A:*

1. Download [KonstaKANG-rpi-magisk-v28.0.zip](https://dlupload.com/filedetail/1971832604) (md5:754565dbf60e8527784a7676838b6a66) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v28.0.apk](https://github.com/topjohnwu/Magisk/releases/tag/v28.0)
3. Boot to TWRP recovery (see FAQ)
4. Install KonstaKANG-rpi-magisk-v28.0.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v28.0.apk using Android's built-in file manager/```adb install```/etc.
7. Ignore suggestions to reinstall Magisk within the app and/or warning about the installation method

Q: How to install Google apps?  
*A:*

1. Download [MindTheGapps-15.0.0-arm64-ATV-xxxxxxxx_xxxxxx.zip](https://github.com/MindTheGapps/15.0.0-arm64-ATV/releases/latest) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install MindTheGapps-15.0.0-arm64-ATV-xxxxxxxx_xxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-22.0+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**17.12. changelog:**

- initial LineageOS 22 release
- Raspberry Pi settings improvements
  - use leanback layout on Android TV
  - add support for more audio DACs
  - add support for more DSI displays
- add initial support for Pi 5 with D0 stepping, Pi 500, and Compute Module 5 (untested)
- switch to AIDL graphics allocator HAL and gralloc5 mapper
- switch to AIDL HWC3 graphics composer HAL
- switch to AIDL bluetooth HAL
- switch to AIDL USB gadget HAL
- update to libcamera master/v0.3.2, libpisp v1.0.7
- update to alsa-lib/alsa-utils v1.2.13
- update to FFmpeg 7.0.2, AOSP dav1d 1.5.0
- update to Mesa 24.3.1
- update to Linux 6.6.60 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 November 2024

----

**Previous builds:**

- [AndroidFileHost]()

----