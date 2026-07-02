---
title: AOSP (Android 17)
subtitle: for Raspberry Pi 5
date: 2026-07-02
tags: [rpi5, AOSP]
screenshot: /img/rpi5/AOSP17/Screenshot_20260702-131747.png
---

Here's my build of AOSP (Android 17) for Raspberry Pi 5, Pi 500, and Compute Module 5. It's for **advanced users** only. Pi 5 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> Raspberry Pi hardware specific implementation in this build is based on source code released on my [Raspberry Vanilla](https://github.com/raspberry-vanilla) project but this build offers various additional features and enhancements. This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}{{ page.screenshot }})

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

[**AOSP17-20260702-KonstaKANG-rpi5.zip**](https://app.filen.io/#/d/4fdad5d9-27e5-491e-a1c2-d3e77997a4c1%23396f51655f50344c2d34384b3674514f6b7a68513938746c3947546461315876)  
sha256:a83cf6f9cd596d0fd33063ad6095d6ab42762c88ded11ab58be15a51ebf1c179

<span style="color:#FF0000;">Note!</span> It's not possible to OTA update from builds older than 20251124. Clean installation is required!

[**AOSP17-20260702-KonstaKANG-rpi5-ota.zip**](https://app.filen.io/#/d/50451fd4-14f3-42b7-b97f-1a96dca88685%237a6630784876794b3543306a5f4673334f656f6d336d74666b64766c63686248) (TWRP flashable OTA package)  
sha256:1b85520f5707128caffff71e041d885bc3a46a83c4ff589e0eef1bf9d9293cc2

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

- Various issues with CSI camera modules
- SELinux is in permissive mode
- Encrypting userdata is not supported
- and more...

**Sources:**

- [Android](https://github.com/raspberry-vanilla/android_local_manifest/tree/android-17.0)
- [Linux kernel](https://github.com/raspberry-vanilla/android_kernel_manifest/tree/android-17.0)

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

**How to update:**

You can also update to newer builds using TWRP flashable OTA packages.

<span style="color:#FF0000;">Note!</span> It's not possible to OTA update from builds older than 20251124. Clean installation is required!

1. Download AOSP17-xxxxxxxx-KonstaKANG-rpi5-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install AOSP17-xxxxxxxx-KonstaKANG-rpi5-ota.zip from your selected storage
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

Q: How to use DSI touchscreen displays?  
*A: You can enable required configurations using a settings option found in Settings -> System -> Raspberry Pi settings -> DSI display. You need to disconnect any HDMI display when using the DSI display.*

Q: How to use desktop mode on primary display?  
*A: Enable Settings -> System -> Raspberry Pi settings -> Desktop mode and reboot the device.*

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

*Booting to TWRP is not supported with DSI displays. HDMI display must be used when booting to recovery mode.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

Q: Settings -> Storage shows total system size of 15.5 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 15.5 GB image, remaining space on your sdcard will remain unallocated.*

1. Download [KonstaKANG-rpi-resize.zip](https://app.filen.io/#/d/00b60e66-e76f-407d-8bcf-d2bdeb727a9f%235f4d384e744f3952755837347a737a2d48774f466f39377833536579674e664a) (sha256:6e84ccce8682db905668e337d51f986b76d58cfb91b57edd7fd118f4c52ade92) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-resize.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Widevine L3?  
*A:*

1. Download [KonstaKANG-rpi-widevine-17.zip](https://app.filen.io/#/d/88cf7973-28db-45f0-a5bd-88a2bcc3be23%23724e542d70496867472d73547a7876594737706664334b754e66317638646764) (sha256:db546d791bc8ae1e035284d985d7a38ea77d309ce46b434e8e1d427795faeee2) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install KonstaKANG-rpi-widevine-17.zip from your selected storage
4. Boot out of recovery (see FAQ)

Q: How to install Magisk?  
*A:*

1. Download [KonstaKANG-rpi-magisk-v30.7.zip](https://app.filen.io/#/d/1ede1dd2-73c7-4bf3-a272-d2d2d1114af9%23696e55746c536d50336632745048412d57464c3646374442503955376e5a554e) (sha256:8f7dfab3653107cc76b5ff050f01acb04d939e059d86535f82cc305635b031fc) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v30.7.apk](https://github.com/topjohnwu/Magisk/releases/tag/v30.7)
3. Boot to TWRP recovery (see FAQ)
4. Install KonstaKANG-rpi-magisk-v30.7.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v30.7.apk using Android's built-in file manager/```adb install```/etc.
7. Ignore suggestions to reinstall Magisk within the app and/or warning about the installation method

Q: How to install Google apps?  
*A:*

1. Download GApps-17.0-arm64-xxxxxxxx.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install GApps-17.0-arm64-xxxxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)
6. Settings -> Google -> Sign in
7. [Register Google Services Framework Android ID](https://www.google.com/android/uncertified/) with the same Google account you've signed in
8. Wait for a while and reboot the device until you've signed into your Google account successfully

----
<!--block-->

**30.6. changelog:**

- initial release (android-17.0.0_r1)
- Mesa 26.1.4
- FFMpeg 8.1.2
- libcamera v0.7.1
- alsa-lib v1.2.16.1, alsa-utils v1.2.16
- Linux 6.18.26 kernel
- Android security patch level: 5 June 2026

----

**Previous builds:**

- [Download](https://app.filen.io/#/f/899982de-8ad5-4bb8-922c-7edf368467b9%23624730714f564b6367745a732d4174734565763369396233526a79316e476a71)

----
