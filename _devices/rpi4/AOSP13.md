---
title: AOSP (Android 13)
subtitle: for Raspberry Pi 4
date: 2023-06-15
tags: [rpi4, AOSP]
screenshot: /img/rpi4/AOSP13/Screenshot_20220819-154849.png
---

Here's my build of AOSP (Android 13) for Raspberry Pi 4 Model B, Pi 400, and Compute Module 4. It's for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> Raspberry Pi hardware specific implementation in this build is based on source code released on my [Raspberry Vanilla](https://github.com/raspberry-vanilla) project but this build offers various additional features and enhancements. This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}{{ page.screenshot }})

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

<span style="color:#FF0000;">Note!</span> This release is discontinued from development, seriously outdated, and no longer available. Please use more recent Android releases instead.

**AOSP13-20230615-KonstaKANG-rpi4.zip**  
md5:cb2cd4dfe0a656d7e5459ed6374e1fb3

**AOSP13-20230615-KonstaKANG-rpi4-ota.zip** (TWRP flashable OTA package)  
md5:e728d72eb0986d5c8d1fd9e1e0b694c3

**AOSP13-20230615-KonstaKANG-rpi4-6.1-kernel.zip** (optional add-on)  
md5:bab23ac0092cae252760033d9c74fbd4

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

- Some third party camera apps don't work with official Pi camera modules (works with UVC USB webcams)
- SELinux is in permissive mode
- Encrypting userdata is not supported
- and more...

**Sources:**

- [Android](https://github.com/raspberry-vanilla/android_local_manifest/tree/android-13.0)
- [Linux kernel](https://github.com/raspberry-vanilla/android_kernel_manifest/tree/android-13.0)

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

1. Download AOSP13-xxxxxxxx-KonstaKANG-rpi4-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install AOSP13-xxxxxxxx-KonstaKANG-rpi4-ota.zip from your selected storage
4. (Flash GApps/Magisk/other add-ons you had previously installed)
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

Q: How to boot from USB device?  
*A:*

1. Install EEPROM that supports booting from USB
2. Write image to your USB device as above
3. Mount the USB device on your computer and make following changes to /boot/config.txt under 'Boot device' section:
```
#dtoverlay=android-sdcard
dtoverlay=android-usb
```
4. Plug in the USB device to your Raspberry Pi, remove any sdcard, and boot

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

1. Download GApps-13.0-arm64-xxxxxxxx.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install GApps-13.0-arm64-xxxxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)
6. [Register Google Services Framework Android ID](https://www.google.com/android/uncertified/) if/when prompted

----
<!--block-->

**15.6. changelog:**

- update to latest AOSP release (Android 13 QPR3 - android-13.0.0_r52)
- update to libcamera master/v0.0.5
- update to dav1d 1.2.0
- update to alsa-lib/alsa-utils v1.2.9
- update to Mesa 23.1.2
- update to Linux 5.15.106 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 June 2023

Linux 6.1 kernel: (optional add-on)
- add support for Waveshare DSI touchscreens
- update to Linux 6.1.31 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**12.4. changelog:**

- update to latest AOSP release (android-13.0.0_r41)
- use USB audio input for camcorder videos with the built-in camera application
- add support for AV1 software video decoding using FFmpeg and dav1d
- update to FFmpeg 6.0
- update to Linux 5.15.98 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 April 2023

Linux 6.1 kernel: (optional add-on)
- update to Linux 6.1.23 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**14.3. changelog:**

- update to latest AOSP release (Android 13 QPR2 - android-13.0.0_r35)
- HDMI audio improvements
  - implement audio HAL that uses alsa directly to get rid off using alsa loopback for HDMI audio (thanks to nename0)
  - update alsa-lib and alsa-utils to v1.2.8
- update to libcamera master/v0.0.4
  - fix camcorder (i.e. recording videos) with Pi camera modules
  - add support for Pi camera module v3 (untested)
- fix H.265 hardware decoding on HEVC Main 10 profile videos
- update to Mesa 22.3.7
- update to Linux 5.15.94 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 March 2023

Linux 6.1 kernel: (optional add-on)
- update to Linux 6.1.15 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**30.1. changelog:**

- H.265 hardware video decoding, H.264 hardware video decoding and encoding
  - FFmpeg 5.1.2 (thanks to John Cox for Raspberry Pi hw codecs support and Android-x86 for AOSP build patches)
  - implement codec2 plugin to integrate FFmpeg into Android multimedia framework (thanks to Michael Goffioul)
  - FFmpeg hevc_v4l2request hwaccel H.265 hw decoding (default), h264_v4l2m2m H.264 hw decoding (optional)
  - v4l2_codec2 H.264 hardware video decoding and encoding (default)
  - FFmpeg software decoders support
- update to Mesa 22.3.4
- update to Linux 5.15.81 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

Linux 6.1 kernel: (optional add-on)
- forward port ion memory allocator
- update to Linux 6.1.8 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**4.1. 2023 changelog:**

- update to latest AOSP release (Android 13 QPR1 - android-13.0.0_r24)
- enable multi-gen LRU
- update to TWRP 3.7.0_11-0-KonstaKANG
- update to Mesa 22.3.2
- update to Linux 5.15.78 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 January 2023

Linux 6.1 kernel: (optional add-on)
- new Raspberry Pi Android kernel bring-up based on AOSP android14-6.1
- update to Linux 6.1.1 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**7.9. changelog:**

- update to latest AOSP release (android-13.0.0_r4)
- add support for virtualization
- tweak Launcher3 default workspace
- add /boot/config_user.txt for user specific options to backup/restore during OTAs
- update to Linux 5.15.64 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 September 2022

**1.9. changelog:**

- new Raspberry Pi Android kernel bring-up based on AOSP android13-5.15-lts
- update to Linux 5.15.63 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**26.8. changelog:**

- update to Mesa main (22.3.0-devel)
- Vulkan 1.2 (thanks to people at Igalia for Vulkan 1.2 conformance and Roman Stratiienko for latest Mesa fixes)
- fix Vulkan related issue on Chromium-based browsers

**21.8. changelog:**

- also available as OTA package
- fix issue with toggling bluetooth
- add built-in VNC server
- allow VNC input to wake the device
- fix AOSP Calendar app crash
- fix long press on power button behavior
- minor brightness fixes for the official 7" display

**19.8. changelog:**

- initial release (android-13.0.0_r3)
- Mesa 22.0.3
- Linux 5.10.136 kernel
- Android security patch level: 5 August 2022

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=335765)

----
