---
layout: rom
title: LineageOS 20 Android TV (Android 13)
subtitle: for Raspberry Pi 5
date: 2024-01-12
tags: [rpi5, LineageOS, LOS20, AndroidTV]
social-share: true
comments: true
---

Here's my build of LineageOS 20 Android TV for Raspberry Pi 5. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}/img/rpi5/LineageOS20/Screenshot_20240112-163705_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-20.0-20240112-UNOFFICIAL-KonstaKANG-rpi5-atv.zip**  
[https://dlupload.com/filedetail/649103027](https://dlupload.com/filedetail/649103027)  
md5:0f589bdc26da6f5202b0e3bf36e47eeb

**lineage-20.0-20240112-UNOFFICIAL-KonstaKANG-rpi5-atv-ota.zip** (TWRP flashable OTA package)  
[https://dlupload.com/filedetail/696676521](https://dlupload.com/filedetail/696676521)  
md5:7e8f8d86a04d1da716d9ca0f85657eaa

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
- Chromecast functionality is not supported on uncertified Android TV devices
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
- LineageOS team and everyone who has contributed to LineageOS 20

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

You can also update to newer builds using TWRP flashable OTA packages. OTA updates pushed through the built-in Updater app are stored at /data/lineageos_updates/.

1. Download lineage-20.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi5-atv-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install lineage-20.0-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi5-atv-ota.zip from your selected storage
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

Q: Settings -> System -> Storage shows total system size of 7 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 7 GB image, remaining space on your sdcard will remain unallocated. Easiest way to extend /data partition is to simply flash my [resize](https://www.androidfilehost.com/?fid=11701882489785035164) zip in TWRP.*

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
*A: You can boot to TWRP by selecting Settings -> System -> Reboot -> Recovery after enabling advanced restart options.*

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

Q: How to install Widevine L3?  
*A:*

1. Download [lineage-20.0-rpi-widevine.zip](https://androidfilehost.com/?fid=11701882489785033173) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install lineage-20.0-rpi-widevine.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Magisk?  
*A:*

1. Download [lineage-20.0-rpi-magisk-v25.2.zip](https://www.androidfilehost.com/?fid=14871746926876846664) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v25.2.apk](https://github.com/topjohnwu/Magisk/releases/tag/v25.2)
3. Boot to TWRP recovery (see FAQ)
4. Install lineage-20.0-rpi-magisk-v25.2.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v25.2.apk using Android's built-in file manager/```adb install```/etc.

Q: How to install Google apps?  
*A:*

1. Download [MindTheGapps-13.0.0-arm64-ATV-xxxxxxxx_xxxxxx.zip](https://github.com/MindTheGapps/13.0.0-arm64-ATV/releases/latest) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install MindTheGapps-13.0.0-arm64-ATV-xxxxxxxx_xxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)
6. [Register Google Services Framework Android ID](https://www.google.com/android/uncertified/) if/when prompted

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-20.0+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**12.1. changelog:**

- initial release
- Mesa 23.3.3
- FFmpeg 6.0.1, AOSP dav1d 1.3.0
- alsa-lib/alsa-utils v1.2.10
- libcamera master/v0.1.0
- Linux 6.1.68 kernel
- Android security patch level: 5 January 2024

----

**Previous builds:**

- [AndroidFileHost](https://androidfilehost.com/?w=files&flid=340887)

----
