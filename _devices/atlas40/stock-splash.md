---
title: How to change splash screen
subtitle: for ZTE Blade III
date: 2013-02-13
tags: [atlas40, stockmod]
---

This is a ClockWorkMod flashable tool that allows you to change images found on the splash partition. Splash partition contains splash image, that is the first image that is displayed on every boot, and seven offline charging images, that are displayed when device is being charged while power off.

Images can be found from the zip's /splash/res/. You can use your favorite zip tool to replace them. It is recommended to use GIMP to edit these images. It is important that the images are in correct format and the bytesize is correct:

splash.bmp - 480x800 - 565 bitmap - 768070 bytes - flipped vertically  
battery*.bmp - 128x128 - 565 bitmap - 32838 bytes - flipped vertically

<span style="color:#FF0000;">Do not mirror my builds!</span> Please post a link to this page instead.

**ZTE-Atlas40-Splash-Flasher.zip**  
[https://www.androidfilehost.com/?fid=24591000424952097](https://www.androidfilehost.com/?fid=24591000424952097)  
md5:9cc6555e26647b4e5741743167020ec0

I've tested this thoroughly and it should be fully working and perfectly safe to use (bytesizes are checked and double-checked - it doesn't flash anything with mismatching image sizes).

----
