---
layout: rom
title: LineageOS 18.1 Android TV (Android 11)
subtitle: for Raspberry Pi 4
date: 2022-05-12
tags: [rpi4, LineageOS, LOS18, AndroidTV]
social-share: true
comments: true
---

Here's my build of LineageOS 18.1 Android TV for Raspberry Pi 4 Model B, Pi 400, and Compute Module 4. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}/img/rpi4/LineageOS18/Screenshot_20210306-163341_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-18.1-20220512-UNOFFICIAL-KonstaKANG-rpi4-atv.zip**  
[https://www.androidfilehost.com/?fid=14655340768118473161](https://www.androidfilehost.com/?fid=14655340768118473161)  
md5:1f8ab4ef6fb1c6f21c3b719d77a28293

**lineage-18.1-20220512-UNOFFICIAL-KonstaKANG-rpi4-atv-ota.zip** (TWRP flashable OTA package)  
[https://www.androidfilehost.com/?fid=14655340768118473159](https://www.androidfilehost.com/?fid=14655340768118473159)  
md5:cd227a742a623eb3976e4fc6e11348e5

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
- Sensors (using external GPIO I2C modules e.g. MPU6050, LSM6DS3, LSM303DLHC, BME280/BMP280, and APDS9930 accelerometer, gyroscope, magnetometer, temperature, pressure, humidity, ambient light, and proximity)
- Serial console (using external GPIO serial console adapters e.g. PL2303)
- SPI
- Touchscreen/multi-touch (USB touchscreens, Waveshare SPI touchscreens)
- USB (mouse, keyboard, storage, etc)
- USB-C (ADB, MTP, PTP, USB tethering)
- Wifi (and wifi tethering)

**Not working:**

- Hardware video decoding & encoding (software decoding & encoding works)

**Issues:**

- Chromecast functionality is not supported on uncertified Android TV devices
- SELinux is in permissive mode
- and more...

**Sources:**

- [kernel](https://github.com/lineage-rpi/android_kernel_brcm_rpi/tree/lineage-18.1)

**Thanks:**

- Peter Yoon and android-rpi project
- Roman Stratiienko and GloDroid project
- AOSP reference board developers (dragonboard, hikey, yukawa)
- E. Anholt for V3D graphics driver
- Maxime Ripard for Pi 4 KMS driver
- Android-x86 project
- LineageOS team and everyone who has contributed to LineageOS 18.1

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

If you're running a recent build (20220121 or newer) you can also update to newer builds using TWRP flashable OTA packages. OTA updates pushed through the built-in Updater app are stored at /data/lineageos_updates/.

1. Download lineage-18.1-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-atv-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install lineage-18.1-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-atv-ota.zip from your selected storage
4. (Flash Magisk/other add-ons you had previously installed)
5. Boot out of recovery (see FAQ)

Changes that are backed up and restored flashing OTAs:

- Device specific settings changed using Settings -> System -> Raspberry Pi settings
- Manual changes to /boot/resolution.txt and /boot/rc_keymap.txt
- USB boot configuration in /boot/config.txt
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
*A: This is a 7 GB image, remaining space on your sdcard will remain unallocated. Easiest way to extend /data partition is to simply flash my [resize](https://www.androidfilehost.com/?fid=2981970449027577728) zip in TWRP.*

*Alternative option is to use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space. Resizing the partition manually will break support for encrypting /data. Format /data in TWRP recovery (Wipe -> Format data) after resizing to leave required space for crypto footer.*

Q: Raspberry Pi doesn't have a power button. How to power off/reboot device?  
*A: Following keyboard keys work as Android buttons: F1 = Home, F2 = Back, F3 = Multi-tasking, F4 = Menu, F5 = Power, F11 = Volume down, and F12 = Volume up. You can also use one of many third party reboot applications.*

Q: How to create a DIY hardware power button?  
*A: You can send power button events by connecting GPIO21 to ground.*

![fritzing]({{ site.url }}/img/rpi4/LineageOS18/powerbutton.png)

*You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Power button.*

*You can also use the DIY power button to boot the device to TWRP recovery. Press and hold the button while powering on the device until you see the TWRP screen.*

Q: How to enable audio through 3.5mm jack?  
*A: You can enable the feature by using a settings option found in Settings -> System -> Raspberry Pi settings -> Audio device.*

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
*A: You can boot to TWRP by selecting Settings -> System -> Reboot -> Recovery after enabling advanced restart options.*

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

Q: How to install Magisk?  
*A:*

1. Download [lineage-18.1-rpi-magisk-v25.2.zip](https://www.androidfilehost.com/?fid=15664248565197202534) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v25.2.apk](https://github.com/topjohnwu/Magisk/releases/tag/v25.2)
3. Boot to TWRP recovery (see FAQ)
4. Install lineage-18.1-rpi-magisk-v25.2.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v25.2.apk using Android's built-in file manager/```adb install```/etc.

Q: How to install Google apps?  
*A:*

1. Download [open_gapps-arm64-11.0-tvstock-xxxxxxxx.zip](https://opengapps.org/?arch=arm64&api=11.0&variant=tvstock) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install open_gapps-arm64-11.0-tvstock-xxxxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-18.1+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**12.5. changelog:**

- also available as OTA package
- add support for Compute Module 4
  - fix DAC audio device selection on CM4 & Pi 400 that don't have 3.5mm audio jack
  - fix USB storage (Pi 400 as well?)
  - add support for the RTC on the I/O board
  - use OTG mode for USB to support ADB, MTP, PTP, USB tethering on the micro-USB port on the I/O board
- update boot firmware for newer Pi 4 hardware revisions
- various drm_hwcomposer updates e.g. support for headless mode (thanks to Roman Stratiienko)
- automatically set density based on display resolution
- add support for APDS9930 ambient light/proximity sensor
- update to TWRP 3.6.1_11-1-KonstaKANG
- update to Mesa 21.3.8
- update to Linux 5.4.191 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 May 2022 (merged)

**21.1. 2022 changelog:**

- fix reboots related to Hotspot 2.0 networks/ANQP requests (see [issue #6](https://github.com/lineage-rpi/android_kernel_brcm_rpi/issues/6))
- Vulkan 1.1 (thanks to people at Igalia for Vulkan 1.1 conformance and Roman Stratiienko for latest Mesa fixes)
- add new options to Raspberry Pi settings (force rotation & CPU governor)
- prepare for OTAs
- update to TWRP 3.6.0_11-1-KonstaKANG
- update to Mesa 21.3.4
- update to Linux 5.4.173 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 January 2022 (merged)

**23.11. changelog:**

- add support for BME280/BMP280 temperature/pressure/humidity sensors
- add option to select HDMI-CEC device
- show IP address and port for SSH/VNC options
- setup wizard improvements for TV devices (merged)
- fix resizing data partition that broke with previous build
- update to TWRP 3.6.0_11-0-KonstaKANG
- update to Mesa 21.3.0
- update to Linux 5.4.161 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 November 2021 (merged)

**26.10. changelog:**

- switch to 64-bit kernel & userspace
- switch to minigbm gbm_mesa and gralloc@4 API (thanks to Roman Stratiienko)
- update to Mesa 21.2.4
- update to Linux 5.4.155 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)

**11.10. changelog:**

- add support for Vulkan
- rework bluetooth (thanks to android-rpi)
- switch to new two-panel settings UI (merged)
- update to Mesa 21.1.8
- update to Linux 5.4.152 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 1 October 2021 (merged)

**20.7. changelog:**

- add support for HDMI-CEC
- add built-in VNC server
- update to Mesa 21.1.5
- update to Linux 5.4.132 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 July 2021 (merged)

**6.3. changelog:**

- initial Android TV build
- update to Linux 5.4.102 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 March 2021 (merged)

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=321633)

----
