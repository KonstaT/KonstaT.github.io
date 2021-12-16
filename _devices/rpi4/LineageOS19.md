---
layout: rom
title: LineageOS 19.0 (Android 12)
subtitle: for Raspberry Pi 4
date: 2021-12-16
tags: [rpi4, LineageOS, LOS19]
social-share: true
comments: true
---

Here's my build of LineageOS 19.0 for Raspberry Pi 4 Model B and Pi 400. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build!

![screenshot]({{ site.url }}/img/rpi4/LineageOS19/Screenshot_20211103-211529.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-19.0-20211216-UNOFFICIAL-KonstaKANG-rpi4.zip**  
[https://www.androidfilehost.com/?fid=17825722713688251114](https://www.androidfilehost.com/?fid=17825722713688251114)  
md5:0b70c8ff922cb8ffad7dab230a239bd3

**Working:**

- Audio (HDMI, 3.5mm jack, USB microphones, bluetooth speakers/headphones, etc)
- Audio DAC (using GPIO DACs e.g. Hifiberry DAC+)
- Bluetooth (and bluetooth tethering)
- Camera (using official Pi camera modules & UVC USB webcams)
- GPIO
- GPS (using external USB modules e.g. U-Blox 7)
- Ethernet
- Hardware accelerated graphics (V3D, OpenGL & Vulkan)
- HDMI display (and HDMI-CEC)
- I2C
- IR remotes (using external GPIO IR modules e.g. TSOP4838)
- RTC (using external GPIO I2C modules e.g. DS3231)
- Sensors (using external GPIO I2C modules e.g. MPU6050, LSM6DS3, LSM303DLHC & BME280/BMP280 accelerometer/gyroscope/magnetometer/temperature/pressure/humidity)
- Serial console (using external GPIO serial console adapters e.g. PL2303)
- SPI
- Touchscreen/multi-touch (official 7" touchscreen, USB touchscreens, Waveshare SPI touchscreens)
- USB (mouse, keyboard, storage, etc)
- USB-C (ADB, MTP, PTP, USB tethering)
- Wifi (and wifi tethering)

**Not working:**

- Hardware video decoding & encoding (software decoding & encoding works, option to test highly experimental H.264 hardware video decoding)

**Issues:**

- Camcorder & some third party camera apps don't work with official Pi camera modules
- SELinux is in permissive mode
- and more...

**Sources:**

- [kernel](https://github.com/lineage-rpi/android_kernel_brcm_rpi/tree/lineage-19.0)

**Thanks:**

- Peter Yoon and android-rpi project
- Roman Stratiienko and GloDroid project
- AOSP reference board developers (dragonboard, hikey, yukawa)
- E. Anholt for V3D graphics driver
- Maxime Ripard for Pi 4 KMS driver
- Android-x86 project
- LineageOS team and everyone who has contributed to LineageOS 19.0

----

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

**FAQ:**

Q: How to enable developer options?  
*A: Settings -> About tablet -> Click 'Build number' several times.*

Q: How to enable root access?  
*A: LineageOS no longer has built-in root management for applications. You can have root access via ADB after 'adb root', SSH (see FAQ below), or serial console. It is also possible to install Magisk following instructions later in the FAQ.*

Q: How to find several Raspberry Pi specific settings options?  
*A: Settings -> System -> Advanced settings*

*Most options in this menu require you to reboot your device for the setting to take effect.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. 1920x1080 resolution is used by default with this build. You can change value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will use the preferred resolution of your display.*

Q: How to use official 7" touchscreen display?  
*A: You can enable required configurations using a settings option found in Settings -> System -> Advanced settings -> Touchscreen.*

Q: Settings -> Storage shows total system size of 7 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 7 GB image, remaining space on your sdcard will remain unallocated. Easiest way to extend /data partition is to simply flash my [resize](https://www.androidfilehost.com/?fid=7161016148664832950) zip in TWRP.*

*Alternative option is to use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space. Resizing the partition manually will break support for encrypting /data. Format /data in TWRP recovery (Wipe -> Format data) after resizing to leave required space for crypto footer.*

Q: Raspberry Pi doesn't have a power button. How to power off/reboot device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi4/LineageOS19/powerbutton.png)

*You can enable the feature by using a settings option found in Settings -> System -> Advanced settings -> Power button.*

*You can also use the DIY power button to boot the device to TWRP recovery. Press and hold the button while powering on the device until you see the TWRP screen.*

Q: How to enable audio through HDMI?  
*A: 3.5mm jack is used for audio by default. You can select the audio device you want to use by using a settings option found in Settings -> System -> Advanced settings -> Audio device.*

Q: How to use IR remote?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Advanced settings -> Infrared remote.*

*You can place a keymap for your remote as /boot/rc_keymap.txt to be automatically loaded on boot (see [available keymaps](https://github.com/lineage-rpi/android_external_v4l-utils/tree/lineage-19.0/utils/keytable/rc_keymaps) for reference).*

Q: How to use RTC?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Advanced settings -> Real time clock.*

*System time is automatically read and set from the RTC on boot once you've enabled the feature. You need to write the system time you want to use to the RTC in rooted shell:*

```
hwclock -w -f /dev/rtc0
```

Q: How to use SSH?  
*A: You can start/stop the built-in SSH server by using a settings option found in Settings -> System -> Advanced settings -> SSH.*

*Android doesn't have user accounts with passwords so key based authentication is used with SSH instead. Necessary keys are generated on the first boot and you need to pull the private key to your computer (or alternatively you can push your own previously generated keys to the device). See Settings -> About tablet -> IP address for your device's IP address (192.168.0.100 is assumed here). Enable Android debugging & Rooted debugging under Settings -> System -> Developer options.*

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
*A: LineageOS 19 doesn't yet have advanced reboot options so there is a temporary switch in Settings -> System -> Advanced settings -> Reboot to recovery.*

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: How to update from previous LineageOS 19.0 build without losing data?  
*A:*

1. Boot to TWRP recovery with the build you want to keep the data (see FAQ)
2. Plug in an external USB storage device and select 'Backup'
3. Use 'Select Storage' to choose the USB device and 'Swipe to backup' (it's only necessary to backup the data partition so you can uncheck other partitions to speed up the process)
4. Write new LineageOS 19.0 image to the sdcard following installation instructions
5. Boot to TWRP recovery with the new build (see FAQ)
6. Select 'Restore' and find the backup you created from the USB device ('Select Storage')
7. Make sure you only have data selected as partitions to restore (uncheck other partitions if available) and select 'Swipe to Restore'
8. (Flash Google apps package/other add-ons you had previously installed)
9. Boot out of recovery (see FAQ)

Q: How to install Magisk?  
*A:*

1. Download [lineage-19.0-rpi-magisk.zip](https://www.androidfilehost.com/?fid=7161016148664832952) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v23.0.apk](https://github.com/topjohnwu/Magisk/releases/tag/v23.0)
3. Boot to TWRP recovery (see FAQ)
4. Install lineage-19.0-rpi-magisk.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v23.0.apk using Android's built-in file manager/'adb install'/etc.

Q: How to install Google apps?  
*A: It's still very early days for Android 12 so OpenGApps are not available yet. You can probably find alternative gapps packages for Android 12 but I'm not making any recommendations.*

1. Download open_gapps-arm64-12.0-pico-xxxxxxxx.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install open_gapps-arm64-12.0-pico-xxxxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-19.0+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**16.12. changelog:**

- switch to Linux 5.10 kernel by default
- fix VC4 HDMI audio with 5.10 kernel (3.5mm jack is now used by default so select the right HDMI device from the settings)
- add support for the official 7" touchscreen display with hw accelerated graphics (enable configurations for the touchscreen from the settings)
- minor brightness fixes for the official 7" display
- add support for Pi camera modules using libcamera, preview & photos work - camcorder doesn't (thanks to Roman Stratiienko)
- fix UVC USB webcams that use external camera HAL (camera needs to support MJPG format - preview, photos & camcorder works)
- add option to enable currently very WIP H.264 hardware video decoding using v4l2_codec2 (enable experimental feature from the settings)
- fix reboots related to Hotspot 2.0 networks/ANQP requests (see [issue #6](https://github.com/lineage-rpi/android_kernel_brcm_rpi/issues/6))
- Vulkan 1.1 (thanks to people at Igalia for Vulkan 1.1 conformance and Roman Stratiienko for latest Mesa fixes)
- update to Mesa 21.3.1
- update to Linux 5.10.83 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 December 2021 (merged)

**25.11. changelog:**

- add option to show virtual volume down, volume up, and power keys on navigation bar (requires reboot)
- add option for old TCP-based ADB over network
- show IP address and port for ADB/SSH/VNC options
- update to TWRP 3.6.0_11-0-KonstaKANG
- update to Mesa 21.3.0
- update to Linux 5.4.161 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 November 2021 (merged)

Linux 5.10 kernel: (optional add-on)
- various KMS driver improvements (DSI display support, etc)
- support for Pi camera modules using libcamera, preview & photos work - camcorder doesn't (thanks to Roman Stratiienko)
- option to test currently very WIP H.264 hardware video decoding using v4l2_codec2 (Settings -> System -> Advanced settings -> Hardware video decoding)
- HDMI audio is not supported! (see [issue #4651](https://github.com/raspberrypi/linux/issues/4651) & [issue #4654](https://github.com/raspberrypi/linux/issues/4654))
- new Raspberry Pi Android kernel bring-up based on AOSP android12-5.10-lts
- update to Linux 5.10.81 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**4.11. changelog:**

- initial LineageOS 19.0 build
- switch to codec2 software decoders/encoders
- add support for BME280/BMP280 temperature/pressure/humidity sensors
- add option to select HDMI-CEC device
- drop old v1 camera HAL and use external camera HAL for UVC USB webcams (camera needs to support MJPG format)
- update to TWRP 3.5.2_11-0-KonstaKANG
- update to Mesa 21.2.5
- new Raspberry Pi Android kernel bring-up based on AOSP android12-5.4-lts
- update to Linux 5.4.156 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 October 2021 (merged)

----

**Previous builds:**

- [AndroidFileHost](https://androidfilehost.com/?w=files&flid=329390)

----
