/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');

    cordova.plugins.boni.configure({
      uuid: ['fda50693-a4e2-4fb1-afcf-c6eb07647825']
    });

    cordova.plugins.boni.ranging();

    cordova.plugins.boni.onAlwaysForSpot(function(error,
      beacons) {
      console.log("Always");
      document.body.style.background = "purple";
    });
    cordova.plugins.boni.onImmediateToSpot(function(error,
        beacons) {
        console.log("Immediate");
        document.body.style.background = "green";
    });
    cordova.plugins.boni.onNearToSpot(function(error,
        beacons) {
        console.log("NEAR");
        document.body.style.background = "red";
    });
    cordova.plugins.boni.onFarFromSpot(function(error,
        beacons) {
        console.log("FAR");
        document.body.style.background = "blue";
    });
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};

app.initialize();
