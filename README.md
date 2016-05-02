![BONI](https://raw.githubusercontent.com/BONI-hub/boni.io/gh-pages/img/logo/logo-cordova.png)

# Startup Project

[http://boni.io](http://boni.io)

Overview
========

This is a sample startup project that demonstrate how to integrate BONI SDK in a blank Cordova mobile app.

Supported Platforms
===================

-	Android
-	iOS

Setup Backend
============

* [Open BONI Console](http://console.boni.io/). You will be prompted for Free registration.
* Click "+ Create Spot" button
* Enter Spot name - this should be something that make sense for you
* Enter UUID - this is the UUID of your iBeacon
* Eneter Major and Minor ID - these are the major and minor Id of your iBeacon
* Click "Save" button
* Done

Setup Mobile App
============

* Clone this repository (and navigate into it)
* Add platform - `cordova platform add [android/ios]`
* Install BONI SDK - `cordova plugin add cordova-plugin-boni`
* Open [www/index.js](https://github.com/BONI-hub/startup-project-boni-basic/blob/master/www/js/index.js) file
  * Set your iBeacon UUIDs in the array ([example](https://github.com/BONI-hub/startup-project-boni-basic/blob/master/www/js/index.js#L39))
  * Take a look at the implemented callbacks (onAlwaysForSpot, onImmediateToSpot, onNearToSpot, onFarFromSpot). You can play with them later.
* Run mobile app on device - `cordova run --device`
* Done


Sample
======

```
onDeviceReady: function() {
  app.receivedEvent('deviceready');

  cordova.plugins.boni.configure({
    uuid: ['your-ibeacon-uuid']
  });

  cordova.plugins.boni.ranging();

  cordova.plugins.boni.onAlwaysForSpot(function(error, beacons) {
    console.log("Always");
    document.body.style.background = "purple";
  });
  cordova.plugins.boni.onImmediateToSpot(function(error,beacons) {
      console.log("Immediate");
      document.body.style.background = "green";
  });
  cordova.plugins.boni.onNearToSpot(function(error, beacons) {
      console.log("NEAR");
      document.body.style.background = "red";
  });
  cordova.plugins.boni.onFarFromSpot(function(error, beacons) {
      console.log("FAR");
      document.body.style.background = "blue";
  });
}
```

See also:

-	[Documentation](http://boni.io/docs/)
