---
title: LineageOS 20 Android TV (Android 13)
subtitle: for Raspberry Pi 4
date: 2024-01-11
tags: [rpi4, LineageOS, LOS20, AndroidTV]
screenshot: /img/rpi4/LineageOS20/Screenshot_20221109-103339_Settings.png
---

Here's my build of LineageOS 20 Android TV for Raspberry Pi 4 Model B, Pi 400, and Compute Module 4. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> Raspberry Pi hardware specific implementation in this build is based on source code released on my [Raspberry Vanilla](https://github.com/raspberry-vanilla) project but this build offers various additional features and enhancements. This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}{{ page.screenshot }})

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

<span style="color:#FF0000;">Note!</span> This release is discontinued from development, seriously outdated, and no longer available. Please use more recent Android releases instead.

**lineage-20.0-20240111-UNOFFICIAL-KonstaKANG-rpi4-atv.zip**  
sha256:40fbaed5bac7061afa5fa9b8a1f8da6107fd89e529737f4815896f296b6bdc9a

**lineage-20.0-20240111-UNOFFICIAL-KonstaKANG-rpi4-atv-ota.zip** (TWRP flashable OTA package)  
sha256:4b7816dfedd4c2e2776d5525e5740fc95da89571934144e5cb7415fa58a71d1c

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
- Some third party camera apps don't work with official Pi camera modules (works with UVC USB webcams)
- SELinux is in permissive mode
- Encrypting userdata is not supported
- and more...

**Sources:**

- [kernel](https://github.com/lineage-rpi/android_kernel_brcm_rpi/tree/lineage-20.0)

**Thanks:**

- Roman Stratiienko and GloDroid project
- Peter Yoon and android-rpi project
- AOSP reference board developers (dragonboard, hikey, yukawa)
- Android-x86 project
- LineageOS team and everyone who has contributed to LineageOS 20

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

**How to update:**

You can also update to newer builds using TWRP flashable OTA packages. OTA updates pushed through the built-in Updater app are stored at /data/lineageos_updates/.

1. Download lineage-20.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-atv-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install lineage-20.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-atv-ota.zip from your selected storage
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
*A: Settings -> System -> Buttons -> Advanced reboot*

Q: How to enable developer options?  
*A: Settings -> System -> About -> Click 'Build number' several times.*

Q: How to enable root access?  
*A: LineageOS no longer has built-in root management for applications. You can have root access via ADB after enabling Settings -> System -> Developer options -> Rooted debugging, SSH (see FAQ below), or serial console. It is also possible to install Magisk following instructions later in the FAQ.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. 1920x1080 resolution is used by default with this build. You can change value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will use the preferred resolution of your display.*

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
*A: You can boot to TWRP by selecting Settings -> System -> Reboot -> Recovery after enabling advanced restart options.*

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

1. Download [MindTheGapps-13.0.0-arm64-ATV-xxxxxxxx_xxxxxx.zip](https://github.com/MindTheGapps/13.0.0-arm64-ATV/releases/latest) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install MindTheGapps-13.0.0-arm64-ATV-xxxxxxxx_xxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-20.0+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**11.1. 2024 changelog:**

- implement USB gadget HAL
- add support for booting from NVME (custom CM4 I/O boards with M.2 slot)
- improve audio DAC detection
- improve CPU overclocking option (Pi 4B R1.4+ and Pi 400 clocked at 1800MHz by default)
- update to TWRP 3.7.0_11-1-KonstaKANG
- update to new Raspberry Pi utils (vcgencmd, pinctrl, etc)
- update to v4l-utils master/1.25.0
- update to alsa-lib/alsa-utils v1.2.10
- update to FFmpeg 6.0.1, AOSP dav1d 1.3.0
- update to Mesa 23.3.2
- update to Linux 5.15.145 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 January 2024 (merged)

**14.8. changelog:**

- Android 13 QPR3
- switch to btlinux bluetooth stack
- update bluetooth firmware to fix connecting BLE devices
- convert light and health HALs to AIDL
- update to Mesa 23.1.5
- update to Linux 5.15.122 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 August 2023 (merged)

**5.5. changelog:**

- add support for AV1 software video decoding using FFmpeg and dav1d
- update to FFmpeg 6.0
- update to libcamera master/v0.0.5
- update to alsa-lib/alsa-utils v1.2.9
- update to Mesa 23.0.3
- update to Linux 5.15.106 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 May 2023 (merged)

**21.3. changelog:**

- Android 13 QPR2
- HDMI audio improvements
  - implement audio HAL that uses alsa directly to get rid off using alsa loopback for HDMI audio (thanks to nename0)
  - update alsa-lib and alsa-utils to v1.2.8
- update to libcamera master/v0.0.4
  - fix camcorder (i.e. recording videos) with Pi camera modules
  - add support for Pi camera module v3 (untested)
- update to FFmpeg 5.1.3
- update to Mesa 22.3.7
- update to Linux 5.15.94 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 March 2023 (merged)

**14.2. changelog:**

- H.265 hardware video decoding, H.264 hardware video decoding and encoding
  - FFmpeg 5.1.2 (thanks to John Cox for Raspberry Pi hw codecs support and Android-x86 for AOSP build patches)
  - implement codec2 plugin to integrate FFmpeg into Android multimedia framework (thanks to Michael Goffioul)
  - FFmpeg hevc_v4l2request hwaccel H.265 hw decoding (default), h264_v4l2m2m H.264 hw decoding (optional)
  - v4l2_codec2 H.264 hardware video decoding and encoding (default)
  - FFmpeg software decoders support
- update to Mesa 22.3.5
- update to Linux 5.15.92 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 February 2023 (merged)

**9.1. 2023 changelog:**

- Android 13 QPR1
- fix pixel format on H.264 hardware video decoding
- enable H.264 hardware video encoding
- update to Mesa 22.3.2
- update to Linux 5.15.78 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 January 2023 (merged)

**9.11. changelog:**

- initial LineageOS 20 Android TV release
- Vulkan 1.2 (thanks to people at Igalia for Vulkan 1.2 conformance and Roman Stratiienko for latest Mesa fixes)
- fix Vulkan related issue on Chromium-based browsers
- add support for virtualization
- enable multi-gen LRU
- update to TWRP 3.7.0_11-0-KonstaKANG
- update to Mesa 22.2.3
- new Raspberry Pi Android kernel bring-up based on AOSP android13-5.15-lts
- update to Linux 5.15.74 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 November 2022 (merged)

----

**Previous builds:**

- [Download](https://app.filen.io/#/f/c043473a-17ee-4d87-bb79-7130b68fa82a%23eJRRHaMs7jZBirjvm537xsaEeOEbXz00)

----
