---
layout: rom
title: LineageOS 19 (Android 12L)
subtitle: for Raspberry Pi 4
date: 2023-03-13
tags: [rpi4, LineageOS, LOS19]
social-share: true
comments: true
---

Here's my build of LineageOS 19 for Raspberry Pi 4 Model B, Pi 400, and Compute Module 4. It is unofficial and unsupported by the LineageOS team. It's for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.

<span style="color:#FF0000;">Important!</span> This image includes parts that are licensed under non-commercial license ([Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/)). You may use this build freely in personal/educational/etc use. Commercial use is not allowed with this build! You can contact me by email to discuss creating customized Android builds for commercial purposes.

![screenshot]({{ site.url }}/img/rpi4/LineageOS19/Screenshot_20220313-200456_Settings.png)

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**lineage-19.1-20230313-UNOFFICIAL-KonstaKANG-rpi4.zip**  
[https://www.androidfilehost.com/?fid=4279422670115728040](https://www.androidfilehost.com/?fid=4279422670115728040)  
md5:9fa07f1e3f8063f291e5546e26e424e3

**lineage-19.1-20230313-UNOFFICIAL-KonstaKANG-rpi4-ota.zip** (TWRP flashable OTA package)  
[https://www.androidfilehost.com/?fid=4279422670115728038](https://www.androidfilehost.com/?fid=4279422670115728038)  
md5:bbf64fc8d278c9ce78daf367f0bd062d

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

- Camcorder (i.e. recording videos) & some third party camera apps don't work with official Pi camera modules (works with UVC USB webcams)
- SELinux is in permissive mode
- and more...

**Sources:**

- [kernel](https://github.com/lineage-rpi/android_kernel_brcm_rpi/tree/lineage-19.1)

**Thanks:**

- Peter Yoon and android-rpi project
- Roman Stratiienko and GloDroid project
- AOSP reference board developers (dragonboard, hikey, yukawa)
- E. Anholt for V3D graphics driver
- Maxime Ripard for Pi 4 KMS driver
- Android-x86 project
- LineageOS team and everyone who has contributed to LineageOS 19

----
<!--block-->

**How to install:**

1. Follow the official [Raspberry Pi instructions](https://www.raspberrypi.org/documentation/computers/getting-started.html#installing-the-operating-system) for writing the image to the SD card.

If you're running a recent build (20220114 or newer) you can also update to newer builds using TWRP flashable OTA packages. OTA updates pushed through the built-in Updater app are stored at /data/lineageos_updates/.

1. Download lineage-19.1-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-ota.zip and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install lineage-19.1-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-ota.zip from your selected storage
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
*A: Settings -> System -> Buttons -> Power menu -> Advanced restart*

Q: How to enable developer options?  
*A: Settings -> About tablet -> Click 'Build number' several times.*

Q: How to enable root access?  
*A: LineageOS no longer has built-in root management for applications. You can have root access via ADB after enabling Settings -> System -> Developer options -> Rooted debugging, SSH (see FAQ below), or serial console. It is also possible to install Magisk following instructions later in the FAQ.*

Q: My display is not working. I can only see the rainbow screen but no Android boot animation. What should I do?  
*A: This build only supports HDMI displays that report supported resolutions using EDID. 1920x1080 resolution is used by default with this build. You can change value in /boot/resolution.txt to use a different resolution that your display supports. Removing /boot/resolution.txt will use the preferred resolution of your display.*

Q: How to use the official 7" DSI touchscreen display?  
*A: You can enable required configurations using a settings option found in Settings -> System -> Raspberry Pi settings -> Touchscreen. You need to disconnect any HDMI display when using the DSI display.*

Q: Settings -> Storage shows total system size of 7 GB. There's unallocated space on my sdcard. What should I do?  
*A: This is a 7 GB image, remaining space on your sdcard will remain unallocated. Easiest way to extend /data partition is to simply flash my [resize](https://www.androidfilehost.com/?fid=2981970449027575180) zip in TWRP.*

*Alternative option is to use e.g. GParted and extend /data partition (/dev/block/mmcblk0p4) to cover the unallocated space. Resizing the partition manually will break support for encrypting /data. Format /data in TWRP recovery (Wipe -> Format data) after resizing to leave required space for crypto footer.*

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

*Android doesn't have user accounts with passwords so key based authentication is used with SSH instead. Necessary keys are generated on the first boot and you need to pull the private key to your computer (or alternatively you can push your own previously generated keys to the device). See Settings -> About tablet -> IP address for your device's IP address (192.168.0.100 is assumed here). Enable Android debugging & Rooted debugging under Settings -> System -> Developer options.*

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
*A: You can boot to TWRP by selecting recovery option in Android power menu after enabling advanced restart options.*

*If mouse cursor doesn't appear, try replugging your mouse.*

Q: How to boot out of TWRP recovery?  
*A: You can boot out of recovery by simply selecting reboot to system option in TWRP.*

Q: My device keeps booting into TWRP recovery. What should I do?  
*A: If you have GPIO21 connected to ground (or if you have something drawing power from it) your device will always boot to TWRP recovery (see FAQ section about DIY power button). If you have a hardware failure on GPIO21 you can edit /boot/config.txt to remove the GPIO21 related logic (see 'Ramdisk' and 'Graphics acceleration' sections).*

Q: How to install Magisk?  
*A:*

1. Download [KonstaKANG-rpi-magisk-v27.0.zip](https://dlupload.com/filedetail/1539729598) (md5:8f30779aa302a6d053a721ffdfdcebce) and save it to your device's internal storage or use an external USB drive
2. Download [Magisk-v27.0.apk](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)
3. Boot to TWRP recovery (see FAQ)
4. Install KonstaKANG-rpi-magisk-v27.0.zip from your selected storage
5. Boot out of recovery (see FAQ)
6. Install Magisk-v27.0.apk using Android's built-in file manager/```adb install```/etc.

Q: How to install Google apps?  
*A:*

1. Download [MindTheGapps-12.1.0-arm64-xxxxxxxx_xxxxxx.zip](https://github.com/MindTheGapps/12.1.0-arm64/releases/latest) and save it to your device's internal storage or use an external USB drive
2. Boot to TWRP recovery (see FAQ)
3. Install MindTheGapps-12.1.0-arm64-xxxxxxxx_xxxxxx.zip from your selected storage
4. Wipe -> Factory reset!
5. Boot out of recovery (see FAQ)

----
<!--block-->

[Merged commits](https://review.lineageos.org/#/q/status:merged+branch:lineage-19.1+-project:%255E.*device.*+-project:%255E.*kernel.*) not mentioned in the changelog.

**13.3. 2023 changelog:**

- H.265 hardware video decoding, H.264 hardware video decoding and encoding
  - FFmpeg 5.1.2 (thanks to John Cox for Raspberry Pi hw codecs support and Android-x86 for AOSP build patches)
  - implement codec2 plugin to integrate FFmpeg into Android multimedia framework (thanks to Michael Goffioul)
  - FFmpeg hevc_v4l2request hwaccel H.265 hw decoding (default), h264_v4l2m2m H.264 hw decoding (optional)
  - v4l2_codec2 H.264 hardware video decoding and encoding (default)
  - FFmpeg software decoders support
- HDMI audio improvements
  - implement audio HAL that uses alsa directly to get rid off using alsa loopback for HDMI audio (thanks to nename0)
  - update alsa-lib and alsa-utils to v1.2.8
- update to TWRP 3.7.0_11-0-KonstaKANG
- update to Linux 5.10.169 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 February 2023 (merged)

**23.9. changelog:**

- switch to clang kernel build
- allow VNC input to wake the device
- add /boot/config_user.txt for user specific options to backup/restore during OTAs
- update to Mesa 22.1.7
- update to Linux 5.10.144 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 September 2022 (merged)

**11.8. changelog:**

- add option to restrict new USB connections
- add option for left-handed mouse
- include Raspberry Pi userland tools (vcgencmd, etc) and libdrm modetest
- update to Mesa 22.0.5
- update to Linux 5.10.135 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 August 2022 (merged)

**11.5. changelog:**

- add support for Compute Module 4
  - fix HDMI/DAC audio device selection on CM4 & Pi 400 that don't have 3.5mm audio jack
  - fix USB storage (Pi 400 as well?)
  - fix issue with webview/browser
  - add support for the RTC on the I/O board
  - use OTG mode for USB to support ADB, MTP, PTP, USB tethering on the micro-USB port on the I/O board
- add support for APDS9930 ambient light/proximity sensor
- update to TWRP 3.6.1_11-1-KonstaKANG
- update to Mesa 22.0.3
- update to Linux 5.10.112 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 May 2022 (merged)

**7.4. changelog:**

- automatically set density based on display resolution
- add option to disable tablet taskbar and show traditional navigation bar instead
- update to TWRP 3.6.1_11-0-KonstaKANG
- update to Mesa 22.0.1
- update to Linux 5.10.109 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 April 2022 (merged)

**14.3. changelog:**

- Android 12L / LineageOS 19.1
- update to TWRP 3.6.0_11-2-KonstaKANG
- update to Mesa 22.0.0
- update to Linux 5.10.102 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 March 2022 (merged)

**11.2. changelog:**

- also available as OTA package
- various drm_hwcomposer updates e.g. support for dual-HDMI displays and headless mode (thanks to Roman Stratiienko)
- update to Mesa 21.3.6
- update to Linux 5.10.99 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 February 2022 (merged)

**14.1. 2022 changelog:**

- add new options to Raspberry Pi settings (force rotation & CPU governor)
- fix GPS issue caused by incomplete location data
- small improvements to HDMI audio support
- prepare for OTAs
- update to TWRP 3.6.0_11-1-KonstaKANG
- update to Mesa 21.3.4
- update to Linux 5.10.90 kernel and patch known vulnerabilities (CVE-xxxx-xxxx, and more)
- Android security patch level: 5 January 2022 (merged)

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
