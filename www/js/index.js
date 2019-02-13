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

var localStorage = window.localStorage;
var dispositivo='nada';

/*var app = {
    // Application Constructor
    initialize: function() {
       document.addEventListener("deviceready", onDeviceReady, false);
         
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
   

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
           

        console.log('Received Event: ' + id);
    },
};*/

 document.addEventListener("deviceready", onDeviceReady, false);

 function onDeviceReady() {
        //this.receivedEvent('deviceready');
		document.getElementById("cordovaDevice").addEventListener("click", cordovaDevice);	
		window.addEventListener("batterystatus", onBatteryStatus, false); 
        window.addEventListener("batterylow", onBatteryLow, false);
        document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture); 
        document.getElementById("vibration").addEventListener("click", vibration);
        document.getElementById("vibrationPattern").addEventListener("click", vibrationPattern);
		dispositivo=device; 
        //alert(device);
		console.log("console.log works well");
}
 

/* Agregando funciones de los botones de la pagina principal*/ 

document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage); 
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage); 
document.getElementById("removeProjectFromLocalStorage").addEventListener ("click", removeProjectFromLocalStorage); 
document.getElementById("getLocalStorageByKey").addEventListener("click", getLocalStorageByKey);

/*trabajando solo en el movil debido a las teclas*/
document.addEventListener("volumeupbutton", callbackFunction, false);  
function callbackFunction() { 
   alert('Volume Up Button is pressed!');
}
document.addEventListener("backbutton", onBackKeyDown, false);  
function onBackKeyDown(e) { 
   e.preventDefault(); 
   alert('Back Button is Pressed!'); 
} 

function onBatteryStatus(info) { 
   alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged);
}
 
function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");

}
function setLocalStorage() { 
   localStorage.setItem("Name", "John"); 
   localStorage.setItem("Job", "Developer"); 
   localStorage.setItem("Project", "Cordova Project"); 
} 

function showLocalStorage() { 
   console.log(localStorage.getItem("Name")); 
   console.log(localStorage.getItem("Job")); 
   console.log(localStorage.getItem("Project")); 
} 
function removeProjectFromLocalStorage() {
   localStorage.removeItem("Project");
}
function getLocalStorageByKey() {
   console.log(localStorage.key(0));
}

function cordovaDevice() {
   alert("Cordova version: " + device.cordova + "\n" +
      "Device model: " + device.model + "\n" +
      "Device platform: " + device.platform + "\n" +
      "Device UUID: " + device.uuid + "\n" +
      "Device version: " + device.version);
}

function cameraTakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 50, 
      destinationType: Camera.DestinationType.DATA_URL 
   });  
   
   function onSuccess(imageData) { 
      var image = document.getElementById('myImage'); 
      image.src = "data:image/jpeg;base64," + imageData; 
   }  
   
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 
}

function vibration() {
   var time = 3000;
   navigator.vibrate(time);
}

function vibrationPattern() {
   var pattern = [1000, 1000, 1000, 1000];
   navigator.vibrate(pattern);
}



app.initialize();