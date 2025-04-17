---
layout: rom
title: AOSP (Android 15)
subtitle: for Raspberry Pi 4
date: 2025-03-06
tags: [rpi4, AOSP]
social-share: true
comments: true
---

Here's my build of AOSP (Android 15) for Raspberry Pi 4 Model B, Pi 400, and Compute Module 4. It's for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> Raspberry Pi hardware specific implementation in this build is based on source code released on my [Raspberry Vanilla](https://github.com/raspberry-vanilla) project but this build offers various additional features and enhancements. This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}/img/rpi4/AOSP15/Screenshot_20240904-142031.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

[**AOSP15-20250306-KonstaKANG-rpi4.zip**](https://app.filen.io/#/d/5301a938-01cb-469e-aaf8-36a4eea378ff%23LgIij9eZ3NcTBpJ05AnYDG1L2TsHufnr)  
sha256:f29f1e5820dd65b7dfb8e9ccb1612f78efaf0d691af27530346ba732f3b94797

[**AOSP15-20250306-KonstaKANG-rpi4-ota.zip**](https://app.filen.io/#/d/c8c51895-356f-4bb4-bd75-3b04bae5bf6a%23uWjoPEwhethesIrwpGzDsCmCMAaGU0mH) (TWRP flashable OTA package)  
sha256:d7ede4fcf9e6b91feddfd66b19eb09310b4beeb2b94a5ddb36ab4e3c37d29ae6

[**AOSP15-20250306-KonstaKANG-rpi4-6.12-kernel.zip**](https://app.filen.io/#/d/2c51f25f-aeaa-4f73-828e-f29a3eb6ace5%239T0nJ03atxLYxzY1gfghUh63x8ictJPp) (optional add-on)  
sha256:ff6681534876175ca2f82405e83849c62acb09a99e42046e44fedb899ccb1c05

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

- [Android](https://github.com/raspberry-vanilla/android_local_manifest/tree/android-15.0)
- [Linux kernel](https://github.com/raspberry-vanilla/android_kernel_manifest/tree/android-15.0)

**Thanks:**

- Roman Stratiienko and GloDroid project
- Peter Yoon and android-rpi project
- AOSP reference board developers (dragonboard, hikey, yukawa)
- Android-x86 project

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

You can also update to newer builds using TWRP flashable OTA packages.

1. Download AOSP15-xxxxxxxx-KonstaKANG-rpi4-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install AOSP15-xxxxxxxx-KonstaKANG-rpi4-ota.zip from your selected storage
4. (Flash GApps/Magisk/Widevine/other add-ons you had previously installed)
5. Boot out of recovery (see FAQ)

Changes that are backed up and restored flashing OTAs:

- Device specific settings changed using Settings -> System -> Raspberry Pi settings
- Manual changes to /boot/resolution.txt and /boot/rc_keymap.txt
- USB boot configuration in /boot/config.txt
- User specific options in /boot/config_user.txt

Changes that are not backed up and restored flashing OTAs:

- Manual changes to /boot/config.txt (and any other manual changes to /boot partition)
- GApps
- Magisk
- Widevine

**FAQ:**

Q: How to find several Raspberry Pi specific settings options?  
*A: Settings -> System -> Raspberry Pi settings*

*Most options in this menu require you to reboot your device for the setting to take effect.*

Q: How to enable developer options?  
*A: Settings -> About tablet -> Click 'Build number' several times.*

Q: How to enable root access?  
*A: You can have root access via ADB after ```adb root```, SSH (see FAQ below), or serial console. It is also possible to install Magisk following instructions later in the FAQ.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. 1920x1080 resolution is used by default with this build. You can change value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will use the preferred resolution of your display.*

Q: How to use the official 7" DSI touchscreen display?  
*A: You can enable required configurations using a settings option found in Settings -> System -> Raspberry Pi settings -> Touchscreen. You need to disconnect any HDMI display when using the DSI display.*

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
*A: AOSP doesn't have reboot to recovery option in power menu. You can boot to TWRP by selecting option in Settings -> System -> Raspberry Pi settings -> Reboot to recovery.*

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

1. Download [KonstaKANG-rpi-widevine-15.zip](https://app.filen.io/#/d/8693f72d-5699-4183-99b3-ac3370b212d2%23FgXDdgZlW7DxjZ5F81V55jFxV7tV2bBS) (sha256:5d5b37d546028acc5c22ad72a45b8bf0b7928919ef5f91e6d1f4c34493ba5b2a) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-widevine-15.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Magisk?  
*A:*

1. Download [KonstaKANG-rpi-magisk-v28.0.zip](https://app.filen.io/#/d/d74dc693-9ee2-40ee-9fa4-5a8849e775c8%238apHUATWC2xwkdPII1gnayb8zcoO0bde) (sha256:41be2439544777942432b968be66ae48c523b6649bc3b5e7c57b189c7cee0c15) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v28.0.apk](https://github.com/topjohnwu/Magisk/releases/tag/v28.0)
3. Boot to TWRP recovery (see FAQ)
4. Install KonstaKANG-rpi-magisk-v28.0.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v28.0.apk using Android's built-in file manager/```adb install```/etc.
7. Ignore suggestions to reinstall Magisk within the app and/or warning about the installation method

Q: How to install Google apps?  
*A:*

1. Download GApps-15.0-arm64-xxxxxxxx.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install GApps-15.0-arm64-xxxxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)
6. [Register Google Services Framework Android ID](https://www.google.com/android/uncertified/) if/when prompted

----
<!--block-->

**6.3. 2025 changelog:**

- update to latest AOSP release (Android 15 QPR2 - android-15.0.0_r20)
- Raspberry Pi settings improvements
  - add support for more audio DACs
  - add support for more DSI displays
  - add zRAM options
- switch to AIDL graphics allocator HAL and gralloc5 mapper
- increase flashable image size to fit 16GB storage device
- update HDMI-CEC HAL
- fix adjusting brightness on official 7" DSI Touch Display & Touch Display 2
- add password protection to VNC server
- enable bluetooth A2DP sink
- enable NUMA
- update to libcamera master/v0.4.0, libpisp v1.1.0
- update to Mesa 25.0.1
- update to Linux 6.6.78 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 March 2025

Linux 6.12 kernel: (optional add-on)
- new Raspberry Pi Android kernel bring-up based on AOSP android16-6.12
- update to Linux 6.12.17 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**10.12. changelog:**

- update to latest AOSP release (Android 15 QPR1 - android-15.0.0_r6)
- switch to HWC3
- switch to AIDL bluetooth HAL
- switch to AIDL USB gadget HAL
- update to libcamera master/v0.3.2, libpisp v1.0.7
- update to alsa-lib/alsa-utils v1.2.13
- update to dav1d 1.5.0
- update to Mesa 24.3.1
- update to Linux 6.6.58 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 December 2024

**5.9. changelog:**

- initial release (android-15.0.0_r1)
- Mesa 24.2.1
- FFmpeg 7.0.2, AOSP dav1d 1.4.2
- alsa-lib/alsa-utils v1.2.12
- libcamera master/v0.3.0
- Linux 6.6.47 kernel
- Android security patch level: 5 September 2024

----

**Previous builds:**

- [Download](https://app.filen.io/#/f/678c7563-5f44-42d8-a652-2a9edd5d1fa8%23kdlwGFwK1eWsn2ScZE4bfTqyeDlg01N1)

----
