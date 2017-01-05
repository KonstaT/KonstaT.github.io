---
layout: rom
title: TWRP 3.0.2-0
subtitle: for ZTE Open C / Kis 3
date: 2016-04-20
tags: [kis3, TWRP]
social-share: true
comments: true
---

This is my build of Dees-Troy's [Team Win Recovery Project](http://teamw.in/project/twrp2) (TWRP) 3.0.2-0 for ZTE Open C / Kis 3 (Beeline Smart2, Moche/MEO Smart A16, ZTE V811W, ZTE V811, Skinny V811, Optus Hop Smart, ZTE Blade M, etc). TWRP is a popular touch based recovery and everything should be working in this build. Internal sdcard is handled differently on Open C and Kis 3 so this recovery only supports external sdcard.

<span style="color:#ff0000;">Do not mirror my builds!</span> Please post a link to this thread instead.

**recovery-twrp-3.0.2-0-kis3.zip** (CWM/TWRP flashable)  
[https://www.androidfilehost.com/?fid=24591000424952196](https://www.androidfilehost.com/?fid=24591000424952196)  
md5:7eeb358cd5e6f0d5a7231b7fda2f401f

**recovery-twrp3020-kis3.img**  
[https://www.androidfilehost.com/?fid=24591000424952195](https://www.androidfilehost.com/?fid=24591000424952195)  
md5:98ca1ea09aa5931cc5dd4a8916e76679

<span style="color:#ff0000;">Do not use this recovery to flash official updates from ZTE website!</span> You need to repack them for custom recovery or use the stock recovery to install.

**How to install:**

- The same you would install any other recovery image (e.g. [ClockWorkMod](/devices/kis3/CWM)).

Source for the recovery is available in [my github](https://github.com/KonstaT/android_device_zte_kis3). You can compile it yourself using CM12.1 source tree by cloning TWRP source from [omnirom](https://github.com/omnirom/android_bootable_recovery) to bootable/recovery-twrp and cherry-picking [this commit](https://github.com/KonstaT/android_device_zte_kis3/commit/ba633bf49fcfe614e66ffe0f0153b3eaf7c549b8) for the kis3 device tree.

----
----

**20.4. 2016 changelog:**

- TWRP 3.0.2-0
- fix backup timestaps
- fix Goodix GT960F touchscreen

**13.2. 2015 changelog:**

- TWRP 2.8.5.0

**25.8. changelog:**

- TWRP 2.7.1.0 - initial release

**Previous builds:**

- [AndroidFileHost](https://www.androidfilehost.com/?w=files&flid=90055)

----
----
