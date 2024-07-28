---
layout: rom
title: LineageOS 21 (Android 14)
subtitle: for Raspberry Pi 5
date: 2024-06-18
tags: [rpi5, LineageOS, LOS21]
social-share: true
comments: true
---

Here's my build of LineageOS 21 for Raspberry Pi 5. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}/img/rpi5/LineageOS21/Screenshot_20240215-181823_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-21.0-20240618-UNOFFICIAL-KonstaKANG-rpi5.zip**  
[https://dlupload.com/filedetail/1461679046](https://dlupload.com/filedetail/1461679046)  
md5:eeebe2686d7a10a5f471f3c70791a22f

**lineage-21.0-20240618-UNOFFICIAL-KonstaKANG-rpi5-ota.zip** (TWRP flashable OTA package)  
[https://dlupload.com/filedetail/1094321884](https://dlupload.com/filedetail/1094321884)  
md5:ddb66e18e53bae937d0a527686df0958

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

- Issues with DSI displays ([Issue#58](https://github.com/raspberry-vanilla/android_local_manifest/issues/58))
- Various issues with CSI camera modules
- SELinux is in permissive mode
- Encrypting userdata is not supported
- and more...

**Sources:**

- [kernel](https://github.com/raspberry-vanilla/android_kernel_manifest/tree/android-14.0)

**Thanks:**

- Roman Stratiienko and GloDroid project
- Peter Yoon and android-rpi project
- AOSP reference board developers (dragonboard, hikey, yukawa)
- Android-x86 project
- LineageOS team and everyone who has contributed to LineageOS 21

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

You can also update to newer builds using TWRP flashable OTA packages. OTA updates pushed through the built-in Updater app are stored at /data/lineageos_updates/.

1. Download lineage-21.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi5-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install lineage-21.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi5-ota.zip from your selected storage
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

**FAQ:**

Q: How to find several Raspberry Pi specific settings options?  
*A: Settings -> System -> Raspberry Pi settings*

*Most options in this menu require you to reboot your device for the setting to take effect.*

Q: How to enable advanced reboot options?  
*A: Settings -> System -> Buttons -> Power menu -> Advanced restart*

Q: How to enable developer options?  
*A: Settings -> About tablet -> Click 'Build number' several times.*

Q: How to enable root access?  
*A: LineageOS no longer has built-in root management for applications. You can have root access via ADB after enabling Settings -> System -> Developer options -> Rooted debugging, SSH (see FAQ below), or serial console. It is also possible to install Magisk following instructions later in the FAQ.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. 1920x1080 resolution is used by default with this build. You can change value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will use the preferred resolution of your display.*

Q: How to use the official 7" DSI touchscreen display?  
*A: You can enable required configurations using a settings option found in Settings -> System -> Raspberry Pi settings -> Touchscreen. You need to disconnect any HDMI display when using the DSI display.*

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

*Android doesn't have user accounts with passwords so key based authentication is used with SSH instead. Necessary keys are generated on the first boot and you need to pull the private key to your computer (or alternatively you can push your own previously generated keys to the device). See Settings -> About tablet -> IP address for your device's IP address (192.168.0.100 is assumed here). Enable Android debugging & Rooted debugging under Settings -> System -> Developer options.*

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
*A: You can boot to TWRP by selecting recovery option in Android power menu after enabling advanced restart options.*

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

1. Download [KonstaKANG-rpi-widevine-14.zip](https://dlupload.com/filedetail/1682189432) (md5:3de5b04da3262fd3e0aa382b30915591) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-widevine-14.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Magisk?  
*A:*

1. Download [KonstaKANG-rpi-magisk-v27.0.zip](https://dlupload.com/filedetail/1539729598) (md5:8f30779aa302a6d053a721ffdfdcebce) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v27.0.apk](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)
3. Boot to TWRP recovery (see FAQ)
4. Install KonstaKANG-rpi-magisk-v27.0.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v27.0.apk using Android's built-in file manager/```adb install```/etc.

Q: How to install Google apps?  
*A:*

1. Download [MindTheGapps-14.0.0-arm64-xxxxxxxx_xxxxxx.zip](https://github.com/MindTheGapps/14.0.0-arm64/releases/latest) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install MindTheGapps-14.0.0-arm64-xxxxxxxx_xxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-21.0+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**18.6. changelog:**

- Android 14 QPR2
- microG support (merged)
- sensor HAL fixes (thanks to Kethen)
- update to libcamera master/v0.2.0, libpisp v1.0.5
- update to FFmpeg 7.0.1, AOSP dav1d 1.4.2
- update to Mesa 24.1.1
- update to Linux 6.1.84 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 May 2024 (merged)

**16.2. changelog:**

- initial LineageOS 21 release
- move serial console to the UART connector
- switch external camera HAL to AIDL (improves boot time)
- update to alsa-lib/alsa-utils v1.2.11
- update to Mesa 24.0.1
- update to Linux 6.1.74 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 February 2024

----

**Previous builds:**

- [AndroidFileHost](https://androidfilehost.com/?w=files&flid=340888)

----
