---
title: Swedish Snow RLS7 (Android 2.3.5)
subtitle: for ZTE Blade
date: 2012-04-13
tags: [blade]
---

This ROM is based on official Comviq/Tele2 ZTE Blade Gingerbread GB_TELE2_P729VV1.0.0B03 Android 2.3.5 (built Fri Nov 11 01:55:47 HKT 2011). This ROM will continue where I left with Moldovan Mile-High-Mountain-Pie.

![screenshot]({{ site.url }}/img/blade/SwedishSnow/post-834050-0-63480600-1326818950.png)  
![screenshot]({{ site.url }}/img/blade/SwedishSnow/post-834050-0-01830300-1334313808.png)

This ROM is for gen2 devices only. Wipe data/factory reset before installing. No wipe, no whine.

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**Swedish-Snow-RLS7.zip**  
[https://www.androidfilehost.com/?fid=24591000424952124](https://www.androidfilehost.com/?fid=24591000424952124)  
MD5:9A583543F97BC6511C0E67089C806CD7

**Add-ons:**

**SS-RLS7-Circle-Battery-Mod.zip** (classic gingerbread green circle battery mod)  
[https://www.androidfilehost.com/?fid=24591000424952127](https://www.androidfilehost.com/?fid=24591000424952127)  
MD5:608A6B5AFB2AF1470268E2B59AC815B2

**SS-RLS7-CenterClock-NoBattery.zip** (center clock and date, removes battery icon, rearranges statusbar icons - looks nice with the MIUI battery bar)  
[https://www.androidfilehost.com/?fid=24591000424952123](https://www.androidfilehost.com/?fid=24591000424952123)  
MD5:16811F4A02CE31BFBB2E1DCA2EBACC22

**SS-RLS7-ZTE-Dialer** (ZTE Smartdialer, contacts and messaging - requires full wipe)  
[https://www.androidfilehost.com/?fid=24591000424952130](https://www.androidfilehost.com/?fid=24591000424952130)  
MD5:5F4125CC9ACE5688553E41A1ACD9912D

**SS-RLS7-Toggle2G-0.2.4.zip** (thanks to [TheMasterBaron](http://forum.xda-developers.com/showthread.php?t=739530), full wipe recommended)  
[https://www.androidfilehost.com/?fid=24591000424952128](https://www.androidfilehost.com/?fid=24591000424952128)  
MD5:AC57C96D0BD3398C3BBF7AA969D80D89

**Optional kernels:**

**SS-RLS7-Old-Source-Kernel-Gen2.zip** (kernel based on the older Turies source and old wifi driver, complete source available [here](https://github.com/KonstaT/zte-turies-35/tree/master))  
[https://www.androidfilehost.com/?fid=24591000424952126](https://www.androidfilehost.com/?fid=24591000424952126)  
MD5:5090A2A17EB875ECFF0132BCDEB0FB50

**SS-RLS7-Stock-Kernel-Gen2.zip** (stock kernel with wifi driver, for people with hardware issues)  
[https://www.androidfilehost.com/?fid=24591000424952129](https://www.androidfilehost.com/?fid=24591000424952129)  
MD5:B058192E655BFC0EA26AF8B793693634

**SS-RLS7-New-Moldovan-Stock-Kernel-Gen2.zip** (latest stock kernel/wifi driver from Moldovan release 4G4G_GB_GENERIC_P729V1.0.0B19)  
[https://www.androidfilehost.com/?fid=24591000424952125](https://www.androidfilehost.com/?fid=24591000424952125)  
MD5:6B7A964C7E1C8C0832A39E80BB400125

**All-in-one TPT installation:**  
This will only work in phones that were sold with gen1 layout or updated to gen2 via TPT method. This won't work if your phone was sold gen2 or you have used windows tool to update.

- updates gen1->gen2
- repartitions internal storage (128mb /system, 326mb /data, 2mb /cache, 0,1mb /oem)
- installs Swedish Snow RLS7
- installs ClockWorkMod Recovery 4.0.1.5
- installs classic green android splash screen

**Swedish-Snow-RLS7-TPT.zip**  
[https://www.androidfilehost.com/?fid=24591000424952122](https://www.androidfilehost.com/?fid=24591000424952122)  
MD5:19DC81EDC75BA9E3A0E29EBCC5D09C64

**TPT instructions:**

- Unpack Swedish-Snow-RLS7-TPT.zip to your phones sdcard, so that you have 'image' folder on the root of your sdcard (inside this folder there are many .mbn and .img files).
- Install AFV (Android File Verifier) from market
- Use AFV to check that MD5 matches. Use 'verify nandroid backup' option to check /sdcard/image/nandroid.md5.
- Power off, pull battery out, put battery back in
- Press and hold VOLUME UP and MENU keys while you power on
- You should see green text on your screen. Installation is in progress and you can let go of the keys
- It takes about a minute after which your phone will boot into Swedish Snow RLS7 (first boot can take several minutes)

After completed installation, delete/move/rename 'image' folder so that you don't restart TPT by accident.

**Features:**

- rooted
- unsecured boot.img
- etc/init.d support
- [Superuser](https://market.android.com/details?id=com.noshufou.android.su&feature=search_result) and su binary
- [busybox](http://www.busybox.net/)
- [Darktremor A2SD](http://www.darktremor.info/)
- deodeoxed
- gen2 proprietary libs from ZTE update 4G4G_GENERIC_P729V1.0.0B25
- saunalahti RILs
- trimmed plenty of useless stuff
- removed Comviq/Tele2 branding
- apks resigned, compressed, optimized and zipaligned
- fully customisable CM7 look-a-like scrollable notification power widget with 11 toggles (thanks to [lidroid](http://forum.xda-developers.com/showthread.php?t=1289896))
*wifi, mobile data, GPS, bluetooth, sync, auto-rotate, flight mode, brightness, wifi tethering, network mode and sound/vibrate
- reboot and recovery options in power menu
- screenshot in power menu (thanks to Ceco for porting it to skate)
- MIUI style battery bar (thanks to [Pvy](http://forum.xda-developers.com/showthread.php?t=1371330))
- ROM settings embedded into settings menu
- CRT screen off animation
- transparent notification area
- changed default wallpaper
- silenced low battery sound
- updated Google apps
- [Terminal Emulator](https://market.android.com/details?id=jackpal.androidterm&feature=search_result)
- [No-frills CPU Control](https://market.android.com/details?id=it.sineo.android.noFrillsCPU&feature=search_result)
- [AppWidgetPicker](http://forum.xda-developers.com/showthread.php?t=780828)
- FM-Radio (thanks to andorko)
- USB Charging Commander (thanks to t0mm13b)
- [adfree](https://market.android.com/details?id=com.bigtincan.android.adfree&hl=en) hosts file - almost no ads (please support app developers by buying their apps instead)
- HSPA differentation
- cache2tmpfs when /cache is smaller than 20mb
- CM7 dialer, contacts & messaging
- CM7 gallery & deskclock
- CM7 DSP Manager
- CM7 keyboard
- replaced launcher
- added some language support
- fixed time format H.mm -> H:mm in finnish and norwegian locales
- support for RTL languages (thanks to [Madmack](http://blog.devasque.com/?page_id=11))
- support for bootsound (place the sound you want to play during boot to /system/media/audio/ui/bootsound.mp3)
- volume key music controls. When screen is off and music is playing long press on volume up/down keys changes next/prev music track. (thanks to CyanogenMod)
- statusbar brightness control. Sliding on closed statusbar changes screen brightness (thanks to [daryelv](https://github.com/daryelv/android_frameworks_base))
- lockscreen displays next alarm time from any app
- volume key cursor controls. Volume up/down keys can be used as d-pad left/right when in text fields. (thanks to azuwis)
- disabled scrolling cache (inspired by [AndroidON](http://forum.xda-developers.com/showthread.php?t=1411317))
- long press on back key kills foreground app. I've increased the long press delay to three times normal so this can't be used by accident. Use with caution, only for misbehaving apps! (thanks to CyanogenMod)
- change ringer mode (volume/vibrate/silent) using volume keys froyo style. (thanks to [mkasick](http://forum.xda-developers.com/showthread.php?t=1016556))
- checkbox preference for long press back key kills foreground app. Delay still three times normal.
- checkbox preference for volume key cursor controls
- statusbar software keys. HOME, MENU and BACK softkeys with long press functions. (thanks to CyanogenMod)
- checkbox preference for statusbar sofkeys. You need to reboot your phone for this setting to take effect.
- framework patch to support MVNOs (mobile virtual network operators). I'm not held responsible for any roaming charges. (Inspired by leromarinvit)
- checkbox preference for MVNO roaming. This equals ticking 'national roaming' box in CM7\. You need to reboot your phone or use airplane mode for the setting to take effect.
- swipe to clear notifications. Individual notifications can be cleared by swiping them to left or right (thanks to CyanogenMod)
- VOLUME UP key works as shutter button in camera app. Pressing the key focuses and releasing the key takes the photo. VOLUME UP key also starts/stops recording in camcorder.
- display correct kernel info in 'About phone'
- new Adreno libs to increase 3D performance
- checkbox preference for call connect vibrate
- extended partition info (used/total space on each partition) in ROM settings (thanks to squadzone)
- much more...

**Known bugs:**

- Some users might have to calibrate their proximity sensor. Go to Settings -> ROM settings -> Proximity sersor calibration -> calib.  

**Kernel info:**  
Kernel is built from burstlam's [source code](https://github.com/burstlam/zte-turies-35) with undervolt patch from [wbaw's source](https://github.com/John-Kenney/zte-turies-35). Complete source code to build kernel used in this ROM can be found in [my github](https://github.com/KonstaT/zte-turies-35).

**Kernel features:**

- overclock support
- AHB overclock
- undervolted CPU & wifi adapter
- overclocked GPU and AXI bus
- EXT4, TUN, CIFS, etc...
- support for [2-way-call-recording](https://code.google.com/p/2-way-call-recording/)
- governors: minmax, InteractiveX, lagfree, SmartassV2, SavagedZen, conservative, powersave, ondemand, performance
- I/O schedulers: noop, deadline, vr, bfq, cfq, sio
- much more...

**Credits & gratitude:**

- Thanks to burstlam for all of his work with the kernel source.
- Thanks to wbaw for the undervolting patch. Also thanks for the TPT method.
- Thanks to kallt_kaffe for everything that you made for Blade. Also thanks for the original Swedish Snow.
- Thanks to CyanogenMod Team.

----

**RLS7 changelog:** *13.4.2012*

- added checkbox preference for vibrate when call is connected
- added network mode toggle (2G-3G-2G/3G) to notification power widget (thanks to [hansip87](http://forum.xda-developers.com/showthread.php?t=1477330))
- added wifi tethering toggle to notification power widget (thanks to CyanogenMod)
- added extended partition info (used/total space on each partition) to ROM settings (thanks to squadzone)
- updated kernel with flipped dutch camera fix, AXI fix, etc. Kernel [changelog](https://github.com/KonstaT/zte-turies-35/commits/gbsource/).
- centered statusbar date on center clock mod
- added option for new stock kernel from Moldovan release ([4G4G_GB_GENERIC_P729V1.0.0B19](http://wwwen.zte.com.cn/endata/mobile/Moldova/Moldova_Instruction/201204/P020120401598037089469.zip))
- updated Toggle2G (available as an add-on, version 0.2.3)
- updated Google Play Shop
- updated Gmail, Maps & Street View
- updated No-Frills CPU Control
- updated hosts file & apns list
- ROM settings translated to spanish (thanks to Antonio Zru)
- ROM settings translated to turkish (thanks to wakeup12)
- fixed russian translations (thanks to StDannyDan)
- more translations (thanks to agpoli, wakeup12, StDannyDan, DarkCrono, KingsizeX, purplehead and Xinxe)
- few other minor tweaks

**RLS6 changelog:** *13.3.2012*

- new kernel based on the new ZTE Blade source (complete source available [here](https://github.com/KonstaT/zte-turies-35), thanks to burstlam)
- new wifi driver
- new [Adreno200 EGL libs](http://forum.xda-developers.com/showthread.php?t=1503477)
- re-wrote the about section in ROM settings. Pressing Swedish Snow opens MoDaCo thread in your browser.
- changed volume key ringer mode switch to work froyo style
- modified 'About device' to display accurate kernel name
- fixed blank statusbar at first boot bug
- fixed small layout bug in notifications
- fixed an issue with Google Backup transport
- updated Market to Google Play Shop
- updated Maps
- updated No-frills CPU Control
- fixed/added portuguese translations and fixed small display bug in application settings (thanks to DarkCrono)
- translated ROM settings to greek (thanks to purplehead)
- translated ROM settings to french (thanks to iMax11)
- translated ROM settings to dutch (thanks to Xinxe)
- added hungarian translations (thanks to agpoli)

**RLS5 changelog:** *6.3.2012*

- completely re-wrote the ROM settings and few of the features
- added checkbox preference for long press back key kills foreground app. Delay still three times normal.
- added checkbox preference for volume key cursor controls
- added statusbar software keys. HOME, MENU and BACK softkeys with long press functions. (thanks to CyanogenMod)
- added checkbox preference for statusbar sofkeys. You need to reboot your phone for this setting to take effect.
- added framework patch to support MVNOs (mobile virtual network operators). I'm not held responsible for any roaming charges. (Inspired by leromarinvit)
- added checkbox preference for MVNO roaming. This equals ticking 'national roaming' box in CM7\. You need to reboot your phone or use airplane mode for the setting to take effect.
- added swipe to clear notifications. Individual notifications can be cleared by swiping them to left or right (thanks to CyanogenMod)
- added VOLUME UP key works as shutter button in camera app. Pressing the key focuses and releasing the key takes the photo. VOLUME UP key also starts/stops recording in camcorder.
- kernel with overclocked GPU and AXI bus (thanks to wbaw for the patches)
- updated Maps and Youtube
- updated Google services framework
- removed flashlight
- tweaked TCP buffer sizes
- fixed some portuguese translations (thanks to jventura and HeartMode)
- updated hosts file
- switched to 128mb /system TPT. (thanks to [Amphoras](http://amphoras.co.uk/index.php/downloads/blade-tpts) for the layout)

**RLS4b changelog:** *9.2.2012*

- removed lockscreen music controls

**RLS4 changelog**: *8.2.2012*

- switched back to CM7 dialer
- added lockscreen music controls. Play/pause, previous and next buttons are displayd on locksreen when music is playing. (thanks to CyanogenMod)
- added volume key cursor controls. Volume up/down keys can be used as d-pad left/right when in text fields. (thanks to azuwis)
- disabled scrolling cache (inspired by [AndroidON](http://forum.xda-developers.com/showthread.php?t=1411317))
- added long press on back key kills foreground app. I've increased the long press delay to three times normal so this can't be used by accident. Use with caution, only for misbehaving apps! (thanks to CyanogenMod)
- added ability to toggle between ringer volume/vibrate/silent using volume keys. Volume down key can be used to toggle between vibrate/silent. (inspired by [mkasick](http://forum.xda-developers.com/showthread.php?t=1016556))
- reworked the MVNO patch
- enhanced auto-brightness values
- translated power menu options to few languages
- ROM settings translated to ukranian (thanks to Tolma4)
- few other minor tweaks

**RLS3 changelog:** *31.1.2012*

- added volume key music controls. When screen is off and music is playing long press on volume up/down keys changes next/prev music track. (thanks to CyanogenMod)
- added statusbar brightness control. Sliding on closed statusbar changes screen brightness (thanks to [daryelv](https://github.com/daryelv/android_frameworks_base))
- modified lockscreen to display next alarm time from any app
- disabled call connect vibrate
- new kernel with undervolted 200mzh & 403mhz freqs, support for OV5640 camera sensor
- replaced CM7 T9 dialer with AOSP dialer
- allowed SIP calls with special characters (thanks to kadettgte)
- ROM settings translated to czech (thanks to vlastik7)
- added [arabic](http://forum.xda-developers.com/showpost.php?p=10984105&postcount=1026), [czech](http://forum.xda-developers.com/showthread.php?t=875202), [polish](http://forum.xda-developers.com/showthread.php?t=875202) and [turkish](http://xt720.ru/Files/DexTrans/LatinIME/res/) dictionaries to the keyboard
- replaced [danish](http://forum.xda-developers.com/showthread.php?t=875202) and [hebrew](https://market.android.com/details?id=com.moo.android.inputmethod.latin.languagepack.iw&hl=en) dictionaries
- removed georgian dictionary from the keyboard
- updated Voice Search
- updated Terminal Emulator
- added release number to About Phone

**RLS2 changelog:** *24.1.2012*

- added full support for RTL languages (thanks to [Madmack](http://blog.devasque.com/?page_id=11))
- ROM settings translated to lithuanian (thanks to Maxsas360)
- ROM settings translated to russian (thanks to Anekc and Maxsas360)
- ROM settings translated to brazilian/portuguese (thanks to DarkCrono)
- ROM settings translated to hungarian (thanks to xside)
- ROM settings translated to finnish
- updated CM7 T9 dialer/contacts (more translations)
- updated CM7 keyboard (Nederlands (België) AZERTY layout included)
- added [dutch](http://blog.cone.be/2010/08/20/creating-dutch-dictionary-for-android/), [hungarian](http://forum.xda-developers.com/showthread.php?t=1016941), [norwegian](https://market.android.com/details?id=com.android.inputmethod.norwegian.norwegiandictionary&hl=en) and [croatian](http://forum.xda-developers.com/showthread.php?t=1027207) dictionaries to the keyboard
- added support for bootsound (place the sound you want to play during boot to /system/media/audio/ui/bootsound.mp3)
- updated No-Frills CPU Control
- zipaligned

**RLS1 changelog:** *17.1.2012*

- initial release

----
