---
layout: rom
title: AOSP (Android 14)
subtitle: for Raspberry Pi 5
date: 2024-05-08
tags: [rpi5, AOSP]
social-share: true
comments: true
---

Here's my build of AOSP (Android 14) for Raspberry Pi 5. It's for **advanced users** only.

<span style="color:#FF0000;">Important!</span> Raspberry Pi hardware specific implementation in this build is based on source code released on my [Raspberry Vanilla](https://github.com/raspberry-vanilla) project but this build still offers various additional features and enhancements over that. This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}/img/rpi5/AOSP14/Screenshot_20231123-160251.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**AOSP14-20240508-KonstaKANG-rpi5.zip**  
[https://dlupload.com/filedetail/2098729460](https://dlupload.com/filedetail/2098729460)  
md5:626ee0f7dc4661a074aa4722923f6d3e

**AOSP14-20240508-KonstaKANG-rpi5-ota.zip** (TWRP flashable OTA package)  
[https://dlupload.com/filedetail/461208469](https://dlupload.com/filedetail/461208469)  
md5:add6e03731b56348f6302169913d2bb6

**AOSP14-20240508-KonstaKANG-rpi5-6.6-kernel.zip** (optional add-on)  
[https://dlupload.com/filedetail/1388611532](https://dlupload.com/filedetail/1388611532)  
md5:df10f25d624400d475ebf402db708ff9

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
- Some audio DACs need additional configuration ([Issue#5743](https://github.com/raspberrypi/linux/issues/5743))
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

Q: Settings -> Storage shows total system size of 7 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 7 GB image, remaining space on your sdcard will remain unallocated. Easiest way to extend /data partition is to simply flash my [resize](https://www.androidfilehost.com/?fid=11701882489785035282) zip in TWRP.*

*Alternative option is to use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space.*

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

Q: How to install Widevine L3?  
*A:*

1. Download [AOSP14-rpi-widevine.zip](https://www.androidfilehost.com/?fid=10620683726822086033) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install AOSP14-rpi-widevine.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Magisk?  
*A:*

1. Download [KonstaKANG-rpi-magisk-v27.0.zip](https://dlupload.com/filedetail/1539729598) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v27.0.apk](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)
3. Boot to TWRP recovery (see FAQ)
4. Install KonstaKANG-rpi-magisk-v27.0.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v27.0.apk using Android's built-in file manager/```adb install```/etc.

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

- [AndroidFileHost](https://androidfilehost.com/?w=files&flid=340542)

----
