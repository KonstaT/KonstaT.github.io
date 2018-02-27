---
layout: rom
title: TWRP 3.0.2-0
subtitle: for Cube iWork8 Ultimate & iWork8 Air
date: 2016-05-31
tags: [cube_iwork8ultimate, TWRP]
social-share: true
comments: true
---

This is my build of Dees-Troy's [Team Win Recovery Project](http://teamw.in/project/twrp2/) (TWRP) 3.0.2-0 for Cube iWork8 Ultimate (I1-T/I1-TD/I1-TWB/I1-TC) and iWork8 Air (I1-TF/I1-TBF). There's (at least) seven different batches of iWork8 Ultimate & iWork8 Air with slightly different hardware. Choose the right image for your model! I1-TWB image is reported working on I1-TF-20161108 and I1-TFB devices.

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**recovery-twrp3020-cht_cr_mrd.img** (I1-T)  
[https://www.androidfilehost.com/?fid=24659325368664657](https://www.androidfilehost.com/?fid=24659325368664657)  
md5:e0e1fd387d1b53a0c0348684e9a482d6

**recovery-twrp-3.0.2-0-cht_cr_mrd.zip** (I1-T - TWRP flashable)  
[https://www.androidfilehost.com/?fid=24659325368664664](https://www.androidfilehost.com/?fid=24659325368664664)  
md5:d0f5954b5b6c1643eb12c432c1bd55b4

**recovery-twrp3020-cht_cr_mrd-I1-TD.img** (I1-TD)  
[https://www.androidfilehost.com/?fid=24659325368664658](https://www.androidfilehost.com/?fid=24659325368664658)  
md5:685f49cd2afea43244f4d87b4108be42

**recovery-twrp-3.0.2-0-cht_cr_mrd-I1-TD.zip** (I1-TD - TWRP flashable)  
[https://www.androidfilehost.com/?fid=24659325368664663](https://www.androidfilehost.com/?fid=24659325368664663)  
md5:52622da1825ae72f860068918b327ecf

**recovery-twrp3020-cht_cr_mrd-I1-TWB.img** (I1-TWB)  
[https://www.androidfilehost.com/?fid=24659325368664659](https://www.androidfilehost.com/?fid=24659325368664659)  
md5:7070c1fef6875f66ea86c57f154eb10d

**recovery-twrp-3.0.2-0-cht_cr_mrd-I1-TWB.zip** (I1-TWB - TWRP flashable)  
[https://www.androidfilehost.com/?fid=24659325368664661](https://www.androidfilehost.com/?fid=24659325368664661)  
md5:8d706944a8c6faeb9bcab3aa60a4c1f9

**recovery-twrp3020-cht_cr_mrd-I1-TC.img** (I1-TC)  
[https://www.androidfilehost.com/?fid=24591000424954409](https://www.androidfilehost.com/?fid=24591000424954409)  
md5:0f16e31fa86b8a291c76e680134140b8

**recovery-twrp-3.0.2-0-cht_cr_mrd-I1-TC.zip** (I1-TC - TWRP flashable)  
[https://www.androidfilehost.com/?fid=24591000424954410](https://www.androidfilehost.com/?fid=24591000424954410)  
md5:48e23993871c6378a946de2c133371a5

**recovery-twrp3020-cht_cr_mrd-I1-TF.img** (I1-TF)  
[https://www.androidfilehost.com/?fid=24659325368664660](https://www.androidfilehost.com/?fid=24659325368664660)  
md5:5e227464fa775f216d60bddefc34d1ea

**recovery-twrp-3.0.2-0-cht_cr_mrd-I1-TF.zip** (I1-TF - TWRP flashable)  
[https://www.androidfilehost.com/?fid=24659325368664662](https://www.androidfilehost.com/?fid=24659325368664662)  
md5:d843481ca2e07a4697f678d52eeb875b

**Prerequisites:**

- Download and install [Intel Android USB driver](https://software.intel.com/en-us/android/articles/intel-usb-driver-for-android-devices) (Windows) or setup udev rules (Linux).
- Download Android SDK platform-tools ([Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip), [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)) to get adb and fastboot.

**Unlocking the bootloader:**

- Enable developer settings by clicking 'Settings -> About tablet -> Build number' several times. Enable 'Settings -> Developer options -> OEM unlocking' (not sure if necessary) and 'Settings -> Developer options -> Android debugging'.
- Plug in your device via USB cable and open terminal window as an administrator (Windows). Boot device into bootloader by executing

```
adb reboot bootloader
```

You can also boot to bootloader by holding volume down button in dual boot menu and selecting to boot to Android.

- Execute in terminal

```
fastboot oem unlock
```

Menu appears on the device warning that unlocking the bootloader will erase the device. Use volume keys to select the option to approve and use power key to confirm. It will try to format the data partition but fails because the bootloader is pretty useless (see below). Bootloader will be unlocked, though.

**Notes about the bootloader:**  
Android bootloader is not working properly because of how Windows partition are named (not prepended with 'android_' what the bootloader expects). You can see a warning message when booted to bootloader and some bootloader functions are not working properly. You can't use fastboot to flash any image! Good thing is that you can still use fastboot to boot images. It also possible to fix this by booting the tablet to Windows and use something like '[GPT fdisk](https://sourceforge.net/projects/gptfdisk/)' tool to rename the Windows partitions (add 'android_' prefix). This is not absolutely necessary though if you're not planning to use fastboot to flash images.

**Installing TWRP:**

- Download both TWRP recovery image and TWRP flashable zip from this post. Save the TWRP flashable zip to your device's sdcard. Save the TWRP recovery image to a place you can access in terminal window.
- Change into the directory you saved the TWRP recovery image, boot to bootloader as above, and execute

```
fastboot boot recovery-twrp3020-cht_cr_mrd.img
```

- Install TWRP flashable zip from sdcard once booted to TWRP.
- Reboot recovery.

You can boot to TWRP by executing 'adb reboot recovery'. It's also possible to boot to recovery by booting to bootloader first (as above), using volume keys to select 'recovery' option and using power key to confirm.

If you've renamed Windows partitions (see above), you can use 'fastboot flash recovery recovery-twrp3020-cht_cr_mrd.img' to install the recovery image.

Stock ROM is encrypted by default which means data partition is not accessible in TWRP before you format it (select 'Wipe -> Format Data' - doing a factory reset is not enough). <span style="color:#FF0000;">Important!</span> This will erase your data including internal sdcard. It's recommended to do this once when installing [dm-verity disabled/unencrypted boot image](/devices/cube_iwork8ultimate/stock-disable-dmverity) or flashing a custom ROM ([CyanogenMod 12.1](/devices/cube_iwork8ultimate/CM12.1), [CyanogenMod 13](/devices/cube_iwork8ultimate/CM13), [Remix OS](/devices/cube_iwork8ultimate/RemixOS)).

**Sources:**

- [Device](https://github.com/CM-CHT/android_device_intel_cube_iwork8ultimate/tree/android-5.1)

----

**31.5. changelog**

- initial release

----

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/forums/topic/377298-twrp-3020/)

----
