---
title: LineageOS 23.0 Android TV (Android 16)
subtitle: for Raspberry Pi 4
date: 2025-11-11
tags: [rpi4, LineageOS, LOS23, AndroidTV]
screenshot: /img/rpi4/LineageOS23/Screenshot_20251014-120000_Settings.png
---

Here's my build of LineageOS 23.0 Android TV for Raspberry Pi 4 Model B, Pi 400, and Compute Module 4. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> Raspberry Pi hardware specific implementation in this build is based on source code released on my [Raspberry Vanilla](https://github.com/raspberry-vanilla) project but this build offers various additional features and enhancements. This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}{{ page.screenshot }})

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

[**lineage-23.0-20251111-UNOFFICIAL-KonstaKANG-rpi4-atv.zip**](https://app.filen.io/#/d/89eece6f-7076-42ca-b13f-704c0e75d6d3%23694e716434636a755a41534f3843553856493963535964573670515846415437)  
sha256:4619c7e43603dc5d07ec161fa72f1274de72841ae08931e98ad5d4fb98ee4478

<span style="color:#FF0000;">Note!</span> It's not possible to OTA update from builds older than 20250417. Clean installation is required!

[**lineage-23.0-20251111-UNOFFICIAL-KonstaKANG-rpi4-atv-ota.zip**](https://app.filen.io/#/d/d2534a2c-afbd-4f94-83dd-d359e2c5a118%236e304571324531522d546f5252363056574e415839764d42556e677a3148716e) (TWRP flashable OTA package)  
sha256:65d60b02f660637cccd6b0929881b89ceeafc001af7f937e45709e004c0c9c37

**Working:**

- Audio (HDMI, 3.5mm jack, USB microphones, bluetooth speakers/headphones, etc)
- Audio DAC (using GPIO DACs e.g. Hifiberry DAC+)
- Bluetooth (and bluetooth tethering)
- Camera (using official Pi camera modules & UVC USB webcams)
- GPIO
- GPS (using external USB modules e.g. U-Blox 7)
- Ethernet
- Hardware accelerated graphics (V3D, OpenGL & Vulkan)
- Hardware video decoding & encoding (H.265 decoding, H.264 decoding & encoding)
- HDMI display (and HDMI-CEC)
- I2C
- IR remotes (using external GPIO IR modules e.g. TSOP4838)
- RTC (using external GPIO I2C modules e.g. DS3231)
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

- [kernel](https://github.com/raspberry-vanilla/android_kernel_manifest/tree/android-16.0)

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

**How to update:**

You can also update to newer builds using TWRP flashable OTA packages. OTA updates pushed through the built-in Updater app are stored at /data/lineageos_updates/.

<span style="color:#FF0000;">Note!</span> It's not possible to OTA update from builds older than 20250417. Clean installation is required!

1. Download lineage-23.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-atv-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install lineage-23.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-atv-ota.zip from your selected storage
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

Q: Raspberry Pi doesn't have a power button. How to power off/reboot device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi-common/powerbutton.png)

*You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Power button.*

*You can also use the DIY power button to boot the device to TWRP recovery. Press and hold the button while powering on the device until you see the TWRP screen.*

Q: How to enable audio through HDMI?  
*A: 3.5mm jack is used for audio by default. You can select the audio device you want to use by using a settings option found in Settings -> System -> Raspberry Pi settings -> Audio device.*

Q: How to use IR remote?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Infrared remote.*

*You can place a keymap for your remote as /boot/rc_keymap.txt to be automatically loaded on boot. See [available keymaps](https://github.com/lineage-rpi/android_external_ir-keytable/tree/lineage-18.1/rc_keymaps) for reference. You can use ```ir-keytable -p all -t``` in rooted shell to figure out the keycodes for the remote you're using.*

Q: How to use RTC?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Real time clock.*

*System time is automatically read and set from the RTC on boot once you've enabled the feature. You need to write the system time you want to use to the RTC in rooted shell:*

```
hwclock -w -f /dev/rtc0
```

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

Q: How to use VNC?  
*A: You can start/stop the built-in VNC server by using a settings option found in Settings -> System -> Raspberry Pi settings -> VNC.*

*Default password for VNC is 'KonstaKANG'. You can change the password and create additional view-only password by using ```vncpasswd``` in rooted shell.*

Q: How to boot from USB device?  
*A:*

1. Install EEPROM that supports booting from USB
2. Write image to your USB/NVME storage device as above
3. Mount the USB/NVME device on your computer and modify /boot/config.txt under 'Boot device' section (e.g. for USB boot):
```
#dtoverlay=android-sdcard
dtoverlay=android-usb
#dtoverlay=android-nvme
```
4. Connect the USB/NVME device to your Raspberry Pi, remove any sdcard, and boot

Q: How to boot to TWRP recovery?  
*A: You can boot to TWRP by selecting Settings -> System -> Power and Energy -> Restart -> Recovery after enabling advanced restart options.*

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

Q: Settings -> Storage shows total system size of 15.5 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 15.5 GB image, remaining space on your sdcard will remain unallocated.*

1. Download [KonstaKANG-rpi-resize.zip](https://app.filen.io/#/d/359e14ab-fe03-4fa5-8382-d8bab79de308%23OcYCkizytCC8RXhUGHoeP1c3ejocPZDr) (sha256:851d67e03b5c290c3a223d0322f80fa1afba8ee4cb136938a743b1db7c95894e) and save it to your device's internal storage or use an external USB drive
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

1. Download [KonstaKANG-rpi-magisk-v30.6.zip](https://app.filen.io/#/d/683fb7f9-0372-49cb-b4ff-2b0eb14ed008%23695a714d56645166523836765870744f59694e716f64474344387a4c37445948) (sha256:67e49ef52867a7b714bf0f09663d192696d5682cb78d899180d24b0ab7e27161) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v30.6.apk](https://github.com/topjohnwu/Magisk/releases/tag/v30.6)
3. Boot to TWRP recovery (see FAQ)
4. Install KonstaKANG-rpi-magisk-v30.6.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v30.6.apk using Android's built-in file manager/```adb install```/etc.
7. Ignore suggestions to reinstall Magisk within the app and/or warning about the installation method

Q: How to install Google apps?  
*A:*

1. Download [MindTheGapps-16.0.0-arm64-only-ATV-xxxxxxxx.zip](https://app.filen.io/#/d/b52500de-6851-422e-bc16-c317e0107cba%23356e79454e67526d587535547949376342636239637155413052527577715f76) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install MindTheGapps-16.0.0-arm64-only-ATV-xxxxxxxx_xxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-23.0+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**11.11. changelog:**

- update to AIDL audio HAL
- convert v4l2_codec2 to AIDL and switch to AIDL codec2 framework
- convert ffmpeg_codec2 and v4l2_codec2 HALs to APEX
- convert libcamera, external camera, and minigbm gralloc HALs to APEX
- convert vulkan to APEX
- all HALs that are part of Raspberry Vanilla have been updated to AIDL and packaged into APEX! \o/
- fix kernel wifi driver issue with ANQP/Hotspot 2.0 networks (upstream)
- read model from device tree
- update to Mesa 25.2.6
- update to Linux 6.12.53 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 1 November 2025

**14.10. changelog:**

- initial LineageOS 23.0 Android TV release
- Mesa 25.2.4
- FFmpeg 8.0, AOSP dav1d 1.5.0
- libcamera master/v0.5.2, libpisp v1.2.1
- alsa-lib/alsa-utils v1.2.14
- v4l-utils 1.32.0
- TWRP 3.7.0_11-2-KonstaKANG
- Linux 6.12.49 kernel
- Android security patch level: 1 October 2025

----

**Previous builds:**

- [Download](https://app.filen.io/#/f/207698ed-6204-4f2a-a168-5d04537cc692%234b735645716f464d62364c676e366868725f6171344e732d594c493049303634)

----
