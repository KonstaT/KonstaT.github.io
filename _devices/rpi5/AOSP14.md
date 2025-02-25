---
layout: rom
title: AOSP (Android 14)
subtitle: for Raspberry Pi 5
date: 2024-07-04
tags: [rpi5, AOSP]
social-share: true
comments: true
---

Here's my build of AOSP (Android 14) for Raspberry Pi 5. It's for **advanced users** only.

<span style="color:#FF0000;">Important!</span> Raspberry Pi hardware specific implementation in this build is based on source code released on my [Raspberry Vanilla](https://github.com/raspberry-vanilla) project but this build offers various additional features and enhancements. This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}/img/rpi5/AOSP14/Screenshot_20231123-160251.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

[**AOSP14-20240704-KonstaKANG-rpi5.zip**](https://app.filen.io/#/d/c44b1c68-7eac-4e09-8f80-d5c8ef2077cd%23gywbrLAPGA8VdZZzr5cN18kkg7PnSV0v)  
sha256:ddd5ea92ad10e4b216e97e82f39c8190404efcb47ab4e3b38da91b97782e29e4

[**AOSP14-20240704-KonstaKANG-rpi5-ota.zip**](https://app.filen.io/#/d/71efb507-fa4f-412c-91cc-b16b7f9aad2e%23FMo3vSVq5ePwqGEzJZLI9b5foQe6vm1J) (TWRP flashable OTA package)  
sha256:f925271e3eeb314ca8b5bfc9593b8ea518ef70b554607e0bc69b9d90eb754c7f

[**AOSP14-20240704-KonstaKANG-rpi5-6.6-kernel.zip**](https://app.filen.io/#/d/8d894d8c-e615-4ab0-bb3b-c8e3d83ecebe%23urWTu6GBed6p0bBQlGcTF6SDwVlPDaSC) (optional add-on)  
sha256:2ae6febc290430a1084e657ee009404698cc613f9418126faadb7d36f38d1e3a

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

- [Android](https://github.com/raspberry-vanilla/android_local_manifest/tree/android-14.0)
- [Linux kernel](https://github.com/raspberry-vanilla/android_kernel_manifest/tree/android-14.0)

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

1. Download AOSP14-xxxxxxxx-KonstaKANG-rpi5-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install AOSP14-xxxxxxxx-KonstaKANG-rpi5-ota.zip from your selected storage
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
*A: AOSP doesn't have reboot to recovery option in power menu. You can boot to TWRP by selecting option in Settings -> System -> Raspberry Pi settings -> Reboot to recovery.*

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

Q: Settings -> Storage shows total system size of 7 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 7 GB image, remaining space on your sdcard will remain unallocated.*

1. Download [KonstaKANG-rpi-resize.zip](https://app.filen.io/#/d/359e14ab-fe03-4fa5-8382-d8bab79de308%23OcYCkizytCC8RXhUGHoeP1c3ejocPZDr) (sha256:851d67e03b5c290c3a223d0322f80fa1afba8ee4cb136938a743b1db7c95894e) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-resize.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Widevine L3?  
*A:*

1. Download [KonstaKANG-rpi-widevine-14.zip](https://app.filen.io/#/d/7f70cf5e-ba21-4782-916b-339ff4cd015e%238DVGs1Ded1foeul5yIeX96JC1vFqd0ZZ) (sha256:1d42fbddfef6d74813f35084b67723c3b73a2adca754cee0aebbcecbcd5c74c4) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-widevine-14.zip from your selected storage
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

1. Download GApps-14.0-arm64-xxxxxxxx.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install GApps-14.0-arm64-xxxxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)
6. [Register Google Services Framework Android ID](https://www.google.com/android/uncertified/) if/when prompted

----
<!--block-->

**4.7. changelog:**

- update to latest AOSP release (Android 14 QPR3 - android-14.0.0_r52)
- update to libcamera master/v0.3.0, libpisp v1.0.6
- update to FFmpeg 7.0.1, AOSP dav1d 1.4.2
- update to alsa-lib/alsa-utils v1.2.12
- update to Mesa 24.1.3
- update to Linux 6.1.90 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 July 2024

Linux 6.6 kernel: (optional add-on)
- update to Linux 6.6.36 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**8.5. changelog:**

- update to latest AOSP release (Android 14 QPR2 - android-14.0.0_r34)
- move serial console to the UART connector
- switch external camera HAL to AIDL (improves boot time)
- sensor HAL fixes (thanks to Kethen)
- update to libcamera master/v0.2.0, libpisp v1.0.5
- update to FFmpeg 6.0.2, AOSP dav1d 1.4.1
- update to alsa-lib/alsa-utils v1.2.11
- update to Mesa 24.0.6
- update to Linux 6.1.80 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 May 2024

Linux 6.6 kernel: (optional add-on)
- new Raspberry Pi Android kernel bring-up based on AOSP android15-6.6
- update to Linux 6.6.29 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**4.1. 2024 changelog:**

- update to latest AOSP release (Android 14 QPR1 - android-14.0.0_r20)
- fix HDMI-CEC issue (affected DSI displays, displays on secondary HDMI port, and headless mode)
- fix USB-C (requires EEPROM update to 2023-12-06 or newer)
- update to Mesa 23.3.2
- update to Linux 6.1.65 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 January 2024

**23.11. changelog:**

- initial release (android-14.0.0_r14)
- Mesa 23.3.0-rc4
- FFmpeg 6.0.1, AOSP dav1d 1.3.0
- alsa-lib/alsa-utils v1.2.10
- libcamera master/v0.1.0
- Linux 6.1.61 kernel
- Android security patch level: 1 November 2023

----

**Previous builds:**

- [Download](https://app.filen.io/#/f/41665b1b-5219-4e2d-be29-a76513781ca7%23ODBUchxPILc2xstSoaVYLpmxb8xpqyP9)

----
