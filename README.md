# appworksJS

## What is appworksJS?

appworksJS is a javascript library for building feature rich, hybrid enterprise apps utilizing on device technology while leveraging the power of the OpenText EIM stack.

## Installation

#### With bower:

````shell
bower install --save appworks-js
````

You can find the production files in the `dist` directory.

#### Auto install:
If you are deploying an app to the gateway, the gateway will automatically add appworks.min.js to the root of your project. If you opt to use the bundled file make sure your script tag looks like this:

`<script src="appworks.min.js"></script>`

## Usage API and Examples

### Plugin
All plugins have the following type definition:

````ts   
abstract class AWPlugin {
    successHandler: () => void;
    errorHandler: () => void;
    /**
     * Base plugin class. Constructor takes in a success function and error function to be executed upon
     * return from call to native layer
     * @param successHandler - the function to be executed when the native call succeeds. passes an object as arg
     * @param errorHandler - the function to be executed when the native call fails. passes an object as arg.
     */
    constructor(successHandler: any, errorHandler: any) {
        this.successHandler = successHandler;
        this.errorHandler = errorHandler;
    }
}
````
This means that whenever creating a new Plugin object, you must initialize it with your success and error callbacks.
When the call to the native layer succeeds or fails, your handler will get executed. If you require a new callback
to be executed, create a new object. Plugin objects extend AWPlugin and are listed below, under the subcategory Plugin.

For example:

````js
var camera = new Appworks.AWCamera(onSuccess, onFail);

function onSuccess(data) {
    console.log(data);
    // do something with data
}

function onFail(err) {
    console.log(err);
}

camera.takePicture();
````

#### Auth
The Auth plugin allows you to seamlessly authenticate against your backend. Useful for refreshing tokens and gaining
access rights to make api calls against the gateway.

##### Methods:

````
authenticate()
````
Makes a call against the gateway /auth endpoint. Returns the response to the callback registered
upon creation of the instance

##### Example:

````js
var auth = new Appworks.Auth(
    function (data) {
        // got the response, now make backend api calls
        var response = data.data;
        $.ajax({
            method: 'POST',
            url: response.gatewayUrl + '/v1/content/nodes/1234/children',
            headers: { otcsticket: response.addtl.otcsticket },
            data: { foo: bar }
        });
    },
    function (err) {
        // could not complete authentication request
        console.log(err);
    }
);
    
$('#click-me').click(function () {
    auth.authenticate();
});
````
#### Finder
The Finder plugin allows you to browse and open files stored on the device inside of the OpenText Mobile container.
Files browsing can be done directly inside of your app. Files can be opened in third party iOS apps installed on the
device.

##### Methods:
````
open(path, filename)
````
open a file in another iOS app installed on the device
- <b>path</b>: the path to the file you would like to open
- <b>filename</b>: the name of the file you would like to open

````
openDirect(filename)
````
open a file in another iOS app installed on the device
- <b>filename</b>: the name of the file you would like to open at the application root

````
list(path)
````
show the contents of a directory within the OpenText Mobile app container
- <b>path</b>: the name of the directory you would like to see the contents of

##### Example:
````js
var openFile = function (filename) {
    var finder = new Appworks.Finder(showFile, showFileError),

    function showFile(data) {
        console.log(data);
    }
    
    function showFileError(err) {
        console.log(err);
    }

    finder.open('/', filename);
};

var listDirectory = function (path) {
    var finder = new Appworks.Finder(showContents, showDirectoryError);

    function showContents(directory) {
        console.log(directory);
        // returns an array containing each item in the directory specified by @path
        
        // try to open file now
        openFile('/', directory[1].filename);
    }
    
    function showDirectoryError(err) {
        console.log(err);
    }

    finder.list('/');
};

listDirectory();
````

#### QRReader
The QRReader plugin allows you to scan a QR code using the device camera.

##### Methods:
````
scan()
````
opens the device camera to scan a qr code. when the qr code is recognized, it is processed automatically. returns
the data encoded by the qr code to the callback initialized upon instance creation.

##### Example:
````js
var scanQRCode = function () {
    var qrScanner = new Appworks.QRReader(onScan, onScanErr),
        qrScanResult;

    function onScan(data) {
        qrScanResult = data;
    }
    
    function onScanErr(err) {
        console.log(err);
    }
    
    qrScanner.scan();
};
````

#### Camera
Access the device camera to take photos, or select photos from the device gallery.

##### Methods:
````
takePicture(options)
````
use the device camera to take a photo. returns the uri specified by options - default is the native uri to the location
on the device.
- <b>options</b>: 
a 
    <a href="http://docs.phonegap.com/en/edge/cordova_camera_camera.md.html#cameraOptions" target="_blank">
        CameraOptions
    </a> 
object. See apache cordova 
<a href="http://docs.phonegap.com/en/edge/cordova_camera_camera.md.html#cameraOptions">
    documentation
</a>

````
openGallery(options)
````
open the device gallery to select a photo. returns the uri specified by options - default is the native uri to the location
on the device.
- <b>options</b>: a 
<a href="http://docs.phonegap.com/en/edge/cordova_camera_camera.md.html#cameraOptions" target="_blank">
CameraOptions
</a> 
object. 
See apache cordova <a href="http://docs.phonegap.com/en/edge/cordova_camera_camera.md.html#cameraOptions">
documentation</a>

#### SecureStorage
The SecureStorage Plugin allows you to store and retrieve files on the device using AES 256-bit encryption.

##### Methods:
````
store(url, filename, options, share)
````

````
retrieve(filename, options)
````


## Build
To build the compressed, minified appworks.js source and the uncompressed, commented code, open up your terminal at the appworksjs directory and type in the following commands

`npm install`

This will install of the dependencies required to build the library.

To build appworks-js

`grunt`

The final file can be found in `dist/appworks.min.js` and `dist/appworks.js`

----

# TERMS AND CONDITIONS FOR USE AND REPRODUCTION
## 1. Definitions.
"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 4 of this document.

"Licensor" shall mean Open Text and its affiliates.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Source and/or Object and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Source, Object and/or Derivative Works thereof.

## 2. Trademarks.
This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Source and/or Object and reproducing the content of the NOTICE file.

## 3. Disclaimer of Warranty.

Unless required by applicable law or agreed to in writing, Licensor provides the Source and Object on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Source, Object, and/or Derivative Works thereof and assume any risks associated with Your exercise of permissions under this License.

## 4. Limitation of Liability.

In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall Licensor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Source, Object, and/or Derivative Works (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if You have been advised of the possibility of such damages.

## END OF TERMS AND CONDITIONS

For community support, please refer to [https://developer.opentext.com](https://developer.opentext.com).

Copyright © 2015 Open Text SA or Open Text ULC (in Canada). All rights reserved.
