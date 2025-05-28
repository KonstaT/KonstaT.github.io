---
title: ClockWorkMod 6.0.4.9
subtitle: for ZTE Blade III
date: 2014-06-06
tags: [atlas40, CWM]
---

This is my build of Koush's [ClockWorkMod](https://www.clockworkmod.com/) Recovery 6.0.4.9. This recovery is common to all ZTE devices with board name atlas40 (e.g. ZTE Blade III, ZTE Acqua, V889D, V880E etc).

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**recovery-clockwork-6.0.4.9-atlas40.zip** (CWM/TWRP flashable)  
[https://www.androidfilehost.com/?fid=24591000424952062](https://www.androidfilehost.com/?fid=24591000424952062)  
md5:8240530c5e891f7a6f52bb7ac5c23663

**recovery-cwm6049-atlas40.img**  
[https://www.androidfilehost.com/?fid=24591000424952063](https://www.androidfilehost.com/?fid=24591000424952063)  
md5:e3e94f9e993f7be0f4193e83f4dc9338

This recovery is fully working with goodies such as repeatable keys and adb sideload support. Use volume keys to navigate menus and power button to select.

<span style="color:#ff0000;">Do not use this recovery to flash official updates from ZTE website!</span> You need to repack them for ClockWorkMod or use the stock recovery to install.

**How to make clean ROM dump/backup of your device (before you root or install cwm):** (<span style="color:#ff0000;">recommended</span>)

- download ZTE [USB drivers](http://download.ztedevice.com/device/global/support/product/560/1132/soft/P020121013422016358160.7z)
- download Android SDK platform-tools ([Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip), [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)) to get adb and fastboot
- download recovery-cwm60xx-atlas40.img recovery image
- create a new directory somewhere and copy adb.exe, fastboot.exe and recovery-cwm60xx-atlas40.img into it
- plug in your device via USB cable and install drivers (make sure you've enabled USB debugging on your device)
- change into the directory you've created and execute following commands in terminal window (boots into recovery instead of flashing it)

```
adb reboot bootloader
fastboot boot recovery-cwm60xx-atlas40.img
```

- select backup & restore -> backup (Seriously, always backup your device before you install anything!)  

**How to install ClockWorkMod Recovery (windows):**

- download ZTE [USB drivers](http://download.ztedevice.com/device/global/support/product/560/1132/soft/P020121013422016358160.7z)
- download Android SDK platform-tools ([Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip), [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)) to get adb and fastboot
- download recovery-cwm60xx-atlas40.img recovery image
- create a new directory somewhere and copy adb.exe, fastboot.exe and recovery-cwm60xx-atlas40.img into it
- plug in your device via USB cable and install drivers (make sure you've enabled USB debugging on your device)
- change into the directory you've created and execute following commands in terminal window

```
adb reboot bootloader
fastboot flash recovery recovery-cwm60xx-atlas40.img
fastboot reboot
```

- congratulations, you have installed cwm on to your device
- boot into ClockWorkMod by pressing volume up (or down) while powering on or using 'adb reboot recovery'
- select backup & restore -> backup (Seriously, always backup your device before you install anything!)

**How to root your device via recovery:**

- download SuperSU and save it to your sdcard
- follow instructions on how to install/boot ClockWorkMod recovery
- install SuperSU zip in ClockWorkMod recovery

**If you have already gained root access with some other [root method](http://forum.xda-developers.com/showthread.php?t=1886460), you can flash recovery using [Terminal Emulator](https://play.google.com/store/apps/details?id=jackpal.androidterm&hl=en):**

- copy recovery-cwm60xx-atlas40.img to the root of your phone's sdcard
- execute following commands in terminal emulator

```
su
dd if=/sdcard/recovery-cwm60xx-atlas40.img of=/dev/block/mmcblk0p17
```

**How to restore stock recovery:**

- Follow instructions in ZTE Blade III stock ROMs thread

**Sources:**

- [Device](https://github.com/KonstaT/android_device_zte_atlas40)

----

**6.6. 2014 changelog:**

- ClockWorkMod 6.0.4.9
- support file security labels

**18.4. 2013 changelog:**

- ClockWorkMod 6.0.3.2
- reverted internal storage support
- formatting data leaves trailing for crypto footer

**18.4. 2013 changelog:**

- ClockWorkMod 6.0.3.1
- add support for internal storage

----

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=89919)

----
