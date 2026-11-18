---
title: LineageOS 24.0 (Android 17)
subtitle: for Raspberry Pi 4
date: 2026-11-18
tags: [rpi4, LineageOS, LOS24]
screenshot: /img/rpi4/LineageOS24/Screenshot_20261118-175926_Settings.png
---

Here's my build of LineageOS 24.0 for Raspberry Pi 4 Model B, Pi 400, and Compute Module 4. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> Raspberry Pi hardware specific implementation in this build is based on source code released on my [Raspberry Vanilla](https://github.com/raspberry-vanilla) project but this build offers various additional features and enhancements. This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}{{ page.screenshot }})

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

[**lineage-24.0-20261118-UNOFFICIAL-KonstaKANG-rpi4.zip**](https://app.filen.io/#/d/ebb0bb78-a80f-45cd-8492-b8e3b3c56b4e%23376f727a5958317851586d475f7a4b6c5531516b797a6d716e7a6545386f646d)  
sha256:127efdcf6cec06c019a469c9faef5e8bd96b98cc6cb4c44f082097fa4953bde0

<span style="color:#FF0000;">Note!</span> It's not possible to OTA update from builds older than 20260128. Clean installation is required!

[**lineage-24.0-20261118-UNOFFICIAL-KonstaKANG-rpi4-ota.zip**](https://app.filen.io/#/d/66cd1d2b-73d3-4e45-94d0-48491823665c%23616a33304e3946726d7850587567316d6150626a376d50515f326c7a70705970) (recovery flashable OTA package)  
sha256:e7a2a1a31e24bd1c87ff3a60ef1e9ac67289093517cd2b9e854b6c99fd24a89c

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

- Various issues with CSI camera modules
- SELinux is in permissive mode
- Encrypting userdata is not supported
- and more...

**Sources:**

- [kernel](https://github.com/raspberry-vanilla/android_kernel_manifest/tree/android-17.0)

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

**How to update:**

You can also update to newer builds using recovery flashable OTA packages. OTA updates pushed through the built-in Updater app are stored at /data/lineageos_updates/.

<span style="color:#FF0000;">Note!</span> It's not possible to OTA update from builds older than 20260128. Clean installation is required!

1. Download lineage-24.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to recovery mode (see FAQ)
3. Install lineage-24.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-ota.zip from your selected storage
4. (Flash Magisk/other add-ons you had previously installed)
5. Boot out of recovery mode

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
*A: LineageOS no longer has built-in root management for applications. You can have root access via ADB after enabling Settings -> System -> Developer options -> Rooted debugging, SSH (see FAQ below), or serial console. It is also possible to install Magisk following instructions later in the FAQ.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. 1920x1080 resolution is used by default with this build. You can change value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will use the preferred resolution of your display.*

Q: How to use DSI touchscreen displays?  
*A: Official Raspberry Pi Touch Displays are automatically detected and require no additional configuration. For third party DSI displays, you can enable required configurations using a settings option found in Settings -> System -> Raspberry Pi settings -> DSI display. You need to disconnect any HDMI display when using the DSI display.*

Q: How to use desktop mode on primary display?  
*A: Enable Settings -> System -> Raspberry Pi settings -> Desktop mode and reboot the device.*

Q: Raspberry Pi doesn't have a power button. How to power off/reboot device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi-common/powerbutton.png)

*You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Power button.*

*You can also use the DIY power button to boot the device to recovery mode. Press and hold the button while powering on the device until you see the recovery mode screen.*

Q: How to enable audio through HDMI?  
*A: 3.5mm jack is used for audio by default. You can select the audio device you want to use by using a settings option found in Settings -> System -> Raspberry Pi settings -> Audio device.*

Q: How to use IR remote?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Infrared remote.*

*You can place a keymap for your remote as /boot/rc_keymap.txt to be automatically loaded on boot. See [available keymaps](https://github.com/lineage-rpi/android_external_ir-keytable/tree/lineage-18.1/rc_keymaps) for reference. You can use ```ir-keytable -p all -t``` in rooted shell to figure out the keycodes for the remote you're using.*

Q: How to use SSH?  
*A: You can start/stop the built-in SSH server by using a settings option found in Settings -> System -> Raspberry Pi settings -> SSH.*

*Android doesn't have user accounts with passwords so key based authentication is used with SSH instead. Necessary keys are generated on the first boot and you need to pull the private key to your computer (or alternatively you can push your own previously generated keys to the device). See Settings -> About tablet -> IP address for your device's IP address (192.168.0.100 is assumed here). Enable Settings -> System -> Raspberry Pi settings -> ADB.*

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

Q: How to use RTC?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Real time clock.*

*System time is automatically read and set from the RTC on boot once you've enabled the feature. You need to write the system time you want to use to the RTC in rooted shell:*

```
hwclock -w -f /dev/rtc0
```

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

Q: How to boot to recovery mode?  
*A: You can boot to recovery mode by selecting recovery option in Android power menu after enabling advanced restart options.*

Q: My device keeps booting into recovery mode. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to recovery mode (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' section).*

Q: Settings -> Storage shows total system size of 15.5 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 15.5 GB image, remaining space on your sdcard will remain unallocated.*

1. Download [KonstaKANG-rpi-resize.zip](https://app.filen.io/#/d/dd1377f4-d493-447f-84f7-82c53dff605b%237372514857456d416533552d38726e30414236355472364f4f65746b4d366772) (sha256:f495955633afe38ae36fee5e550602aec490a3703c3d7f455342800ac394bef4) and save it to your device's internal storage or use an external USB drive
2. Boot to recovery mode (see FAQ)
3. Install KonstaKANG-rpi-resize.zip from your selected storage
4. Boot out of recovery mode

Q: How to install Widevine L3?  
*A:*

1. Download [KonstaKANG-rpi-widevine-17.zip](https://app.filen.io/#/d/91465e0d-19d2-4a80-8820-24afe9845dfb%23366d4a48516b595636785f74784b7a46446b683054684f79314f6e6b68683745) (sha256:fdd225c8704f35876d5f32dd6457b152ca56738cbbfc3373c00978e7a1914b66) and save it to your device's internal storage or use an external USB drive
2. Boot to recovery mode (see FAQ)
3. Install KonstaKANG-rpi-widevine-17.zip from your selected storage
4. Boot out of recovery mode

Q: How to install Magisk?  
*A:*

1. Download [KonstaKANG-rpi-magisk-v31.1.zip](https://app.filen.io/#/d/73d008d9-bfdd-494e-91f6-81c835ba4a1a%236e3747396e5f6a35597878614e6d74596e4c6a503877576a4a7078576a2d5754) (sha256:c0a2c55ea224cce20c56a7dca44da41683c9734c4617a0cb0bfeea232be90180) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v31.1.apk](https://github.com/topjohnwu/Magisk/releases/tag/v31.1)
3. Boot to recovery mode (see FAQ)
4. Install KonstaKANG-rpi-magisk-v31.1.zip from your selected storage
5. Boot out of recovery mode
6. Install Magisk-v31.1.apk using Android's built-in file manager/```adb install```/etc.
7. Ignore suggestions to reinstall Magisk within the app and/or warning about the installation method

Q: How to install Google apps?  
*A:*

1. Download [MindTheGapps-17.0.0-arm64-xxxxxxxx_xxxxxx.zip](https://github.com/MindTheGapps/17.0.0-arm64/releases/latest) and save it to your device's internal storage or use an external USB drive
2. Boot to recovery mode (see FAQ)
3. Install MindTheGapps-17.0.0-arm64-xxxxxxxx_xxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery mode

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-24.0+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**18.11. changelog:**

- initial LineageOS 24.0 release
- implement new recovery mode
- add support for wifi direct
- various DSI display improvements
  - auto-detect official Raspberry Pi DSI displays
  - force display resolution only on HDMI displays
  - touch to wake on DSI and USB touchscreens
  - use drm_hwcomposer for adjusting display backlight brightness
  - support using DSI displays in recovery mode
- Mesa 26.3.0
- FFmpeg 9.0.2
- libcamera v0.8.0, libpisp v1.5.0
- alsa-lib v1.2.16.1, alsa-utils v1.2.16
- Linux 6.18.62 kernel
- Android security patch level: 1 November 2026

----

**Previous builds:**

- [Download](https://app.filen.io/#/f/53644dac-f34c-45b8-959d-cf56d6b57e1f%2349552d444c437854674e4778624f483974436c59585a68544b4b456138797544)

----
