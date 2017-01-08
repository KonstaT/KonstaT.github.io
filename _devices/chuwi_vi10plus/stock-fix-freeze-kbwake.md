---
layout: rom
title: How to fix 'freezing issue' & 'keyboard dock wake issue'
subtitle: for Chuwi Vi10 Plus, Hi10 Plus, Hi10 Pro & Hibook Pro
date: 2016-12-01
tags: [chuwi_vi10plus, stockmod]
social-share: true
comments: true
---

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

Here's how to fix 'freezing issue' & 'keyboard dock wake issue' plaguing Chuwi Vi10 Plus & Hi10 Plus. This patch will:

- install source built kernel with updated mmc drivers to fix 'freezing issue'
- add configs for external keyboard docks to fix 'keyboard dock wake issue'
- disable dm-verity (because it's needed to modify /system partition)

**Prerequisites:**  
You need to have the latest stock firmware and TWRP recovery installed. See 'Settings -> About Tablet' on your device and choose the file that matches your stock firmware version. Do not install these files on mismatching firmware versions!

**How to install:**

1. Download zip below matching your stock firmware and copy it to your device's sdcard.
2. Boot into [TWRP recovery](/devices/chuwi_vi10plus/TWRP).
3. Install zip in TWRP.

**vi10plus-fix-freeze-kbwake-RemixOS-B2016080801.zip**  
[https://www.androidfilehost.com/?fid=457095661767120024](https://www.androidfilehost.com/?fid=457095661767120024)  
md5:968beb706a3bad6d53bcf12219b792be

**vi10plus-fix-freeze-kbwake-Android-20160803.zip**  
[https://www.androidfilehost.com/?fid=529152257862686043](https://www.androidfilehost.com/?fid=529152257862686043)  
md5:d7243d2ccd6081896bf7032e840940b1

----

Here's how to fix 'keyboard dock wake issue' on Hi10 Plus, Hi10 Pro & Hibook Pro devices that don't need fix for 'freezing issue'. This patch will:

- add configs for external keyboard docks to fix 'keyboard dock wake issue'

**How to install:**

1. Disable [dm-verity](/devices/chuwi_vi10plus/stock-disable-dmverity).
2. Download zip below and copy it to your device's sdcard.
3. Boot into [TWRP recovery](/devices/chuwi_vi10plus/TWRP).
4. Install zip in TWRP.

**vi10plus-fix-kbwake.zip**  
[https://www.androidfilehost.com/?fid=673368273298915355](https://www.androidfilehost.com/?fid=673368273298915355)  
md5:b298502a706299087fcdec74de0efc7b

----

Here's how to add Widevide support on Vi10 Plus, Hi10 Plus, Hi10 Pro, Hibook Pro & Hi12 to fix playback of DRM protected content with various media streaming apps. This patch will:

- add Widewine blobs from Cube iWork8 Ultimate

**How to install:**

1. Disable [dm-verity](/devices/chuwi_vi10plus/stock-disable-dmverity).
2. Download zip below and copy it to your device's sdcard.
3. Boot into [TWRP recovery](/devices/chuwi_vi10plus/TWRP).
4. Install zip in TWRP.

**vi10plus-widevine.zip**  
[https://www.androidfilehost.com/?fid=529152257862688297](https://www.androidfilehost.com/?fid=529152257862688297)  
md5:09892471a4b74585937da8f53a43dfd3

----

**Sources:**

- [Kernel](https://github.com/CM-CHT/android_kernel_intel_cherrytrail/tree/lollipop)

**Thanks:**

- Jide Technology for releasing Linux kernel source code for Chuwi Vi10 Plus
- festlv for the keybord dock wake fix

----
----

**1.12. changelog:**

- initial release

**Previous discussion:**

- [MoDaCo](http://www.modaco.com/forums/topic/378147-howto-fix-freezing-issue-keyboard-dock-wake-issue/)

----
----
