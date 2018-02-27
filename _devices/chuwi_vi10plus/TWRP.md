---
layout: rom
title: TWRP 3.0.2-0
subtitle: for Chuwi Vi10 Plus, Hi10 Plus, Hi10 Pro, Hibook & Hibook Pro
date: 2016-10-12
tags: [chuwi_vi10plus, TWRP]
social-share: true
comments: true
---

This is my build of Dees-Troy's [Team Win Recovery Project](http://teamw.in/project/twrp2/) (TWRP) 3.0.2-0 for Chuwi Vi10 Plus, Hi10 Plus, Hi10 Pro, Hibook & Hibook Pro. Choose the right image for your device.

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**recovery-twrp3020-cht_cr_mrd_w.img** (Vi10 Plus & Hi10 Plus)  
[https://www.androidfilehost.com/?fid=457095661767101048](https://www.androidfilehost.com/?fid=457095661767101048)  
md5:ac613a8e828e911f99bd0f9953048dca

**recovery-twrp-3.0.2-0-cht_cr_mrd_w.zip** (Vi10 Plus & Hi10 Plus - TWRP flashable)  
[https://www.androidfilehost.com/?fid=457095661767101049](https://www.androidfilehost.com/?fid=457095661767101049)  
md5:8eb021562386b542ffd0370c44e5808b

**recovery-twrp3020-cht_cr_mrd_w-Hi10Pro.img** (Hi10 Pro)  
[https://www.androidfilehost.com/?fid=457095661767112686](https://www.androidfilehost.com/?fid=457095661767112686)  
md5:bcea52fbb395a490f150c5593aeca68c

**recovery-twrp-3.0.2-0-cht_cr_mrd_w-Hi10Pro.zip** (Hi10 Pro - TWRP flashable)  
[https://www.androidfilehost.com/?fid=457095661767112687](https://www.androidfilehost.com/?fid=457095661767112687)  
md5:ca0df8c1fc1c8e73b10d48b2f936c18a

**recovery-twrp3020-cht_cr_mrd_w-Hi10Pro-HQ64.img** (Hi10 Pro - z8350 - serial no HQ64G42170100000-HQ64G42170900000)  
[https://www.androidfilehost.com/?fid=673368273298921365](https://www.androidfilehost.com/?fid=673368273298921365)  
md5:07059b0311f781a1e1e75db368688ad0

**recovery-twrp-3.0.2-0-cht_cr_mrd_w-Hi10Pro-HQ64.zip** (Hi10 Pro - z8350 - serial no HQ64G42170100000-HQ64G42170900000 - TWRP flashable)  
[https://www.androidfilehost.com/?fid=457095661767127485](https://www.androidfilehost.com/?fid=457095661767127485)  
md5:821e809924566528fdecb07354197103

**recovery-twrp3020-cht_cr_mrd_w-Hi10Pro-HQ64-20170720.img** (Hi10 Pro - z8350 - serial no HQ64G42170900000->)  
[https://www.androidfilehost.com/?fid=745849072291686624](https://www.androidfilehost.com/?fid=745849072291686624)  
md5:74fdd208fc443267f2395dd5d1bc2238

**recovery-twrp-3.0.2-0-cht_cr_mrd_w-Hi10Pro-HQ64-20170720.zip** (Hi10 Pro - z8350 - serial no HQ64G42170900000-> - TWRP flashable)  
[https://www.androidfilehost.com/?fid=673791459329059121](https://www.androidfilehost.com/?fid=673791459329059121)  
md5:74d560035ca644feb17dbba93779fe5d

**recovery-twrp3020-cht_cr_mrd_w-Hibook.img** (Hibook)  
[https://www.androidfilehost.com/?fid=529152257862701895](https://www.androidfilehost.com/?fid=529152257862701895)  
md5:c2b4a2fbf963d64c70b9c0a4cc7f86df

**recovery-twrp-3.0.2-0-cht_cr_mrd_w-Hibook.zip** (Hibook - TWRP flashable)  
[https://www.androidfilehost.com/?fid=745425885120706901](https://www.androidfilehost.com/?fid=745425885120706901)  
md5:03226dc7e12bd4d0e374e2721eb1c8c0

**recovery-twrp3020-cht_cr_mrd_w-HibookPro.img** (Hibook Pro)  
[https://www.androidfilehost.com/?fid=457095661767103931](https://www.androidfilehost.com/?fid=457095661767103931)  
md5:ddfbe54fb14cd741dc57db6936c5f27e

**recovery-twrp-3.0.2-0-cht_cr_mrd_w-HibookPro.zip** (Hibook Pro - TWRP flashable)  
[https://www.androidfilehost.com/?fid=385035244224387031](https://www.androidfilehost.com/?fid=385035244224387031)  
md5:4cc514d8b72fce7c0a7a045e4d8d3741

**Prerequisites:**

- Download and install [Intel Android USB driver](https://software.intel.com/en-us/android/articles/intel-usb-driver-for-android-devices) (Windows) or setup udev rules (Linux).
- Download Android SDK platform-tools ([Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip), [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)) to get adb and fastboot.

**Unlocking bootloader:**

- Enable developer settings by clicking 'Settings -> About tablet -> Build number' several times. Enable 'Settings -> Developer options -> OEM unlocking' (not sure if necessary) and 'Settings -> Developer options -> Android debugging'.
- Plug in your device via USB cable and open terminal window as an administrator (Windows). Boot device into bootloader by executing

```
adb reboot bootloader
```

You can also boot to bootloader by holding volume down button when powering on the device (or when selecting to boot to Android if you have a dual-boot device).

- Execute in terminal

```
fastboot oem unlock
```

Unlocking bootloader doesn't erase userdata on this device.

**Installing TWRP:**

- Change into the directory you saved the TWRP recovery image, boot to bootloader as above, and execute

```
fastboot flash recovery recovery-twrp3020-cht_cr_mrd_w.img
```

You can also just boot TWRP recovery image by executing

```
fastboot boot recovery-twrp3020-cht_cr_mrd_w.img
```

You can boot to TWRP by executing 'adb reboot recovery'. It's also possible to boot to recovery by booting to bootloader first (as above), using volume keys to select 'recovery' option and using power key to confirm.

- Install [boot image that disables dm-verity](/devices/chuwi_vi10plus/stock-disable-dmverity) before you modify your /system partition in any way. Otherwise dm-verity will prevent your device from booting.

**Sources:**

- [Device](https://github.com/CM-CHT/android_device_intel_chuwi_vi10plus/tree/android-5.1)

----

**12.10. changelog**

- initial release

----

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/forums/topic/377883-twrp-3020/)

----
