# appworks.js

## What is appworks.js?

appworks.js is a javascript (TypeScript) library for building feature rich, hybrid enterprise apps. The [OpenText AppWorks platform](https://developer.opentext.com/awd/resources/articles/7866/what+is+appworks) provides mobile and desktop clients that support apps that utilize appworks.js.

In a mobile environment the library provides access to on-device technology, and in the desktop environment some features of the underlying host OS (operating system) are exposed.

Supported platforms:
- mobile
    - iOS
    - Android
- desktop
    - Windows
    - OSX
    - Linux

A limited number of appworks.js plugins are available in the desktop environment. They are marked in the [API Usage and Examples](#api-usage-and-examples) section and are listed for quick reference below: 
- [AWAuth](#awauth)
- [AWCache](#awcache)
- [AWDevice](#awdevice)
- [AWFileSystem](#awfilesystem)
- [AWFileTransfer](#awfiletransfer)

## Installation

#### With bower:

````shell
bower install --save appworks-js
````

You can find the production files in the `dist` directory.

#### Auto install:
If you are deploying an app to the gateway, the gateway will automatically add appworks.min.js to the root of your
project. If you opt to use the bundled file make sure your script tag looks like this:

`<script src="appworks.min.js"></script>`

## Table of Contents
* [API Usage and Examples](#api-usage-and-examples)
  - [AWAuth](#awauth)
  - [AWWebView](#awwebview)
  - [AWAppManager](#awappmanager)
  - [AWComponent](#awcomponent)
  - [Finder](#finder)
  - [FileChooser](#filechooser)
  - [AWFileSystem](#awfilesystem)
  - [AWHeaderBar](#awheaderbar)
  - [AWPage](#awpage)
  - [QRReader](#qrreader)
  - [Camera](#camera)
  - [SecureStorage](#securestorage)
  - [AWFileTransfer](#awfiletransfer)
  - [AWMedia](#awmedia)
  - [AWMediaCapture](#awmediacapture)
  - [AWAccelerometer](#awaccelerometer)
  - [AWCompass](#awcompass)
  - [AWLocation](#awlocation)
  - [AWNotificationManager](#awnotificationmanager)
  - [AWOfflineManager](#awofflinemanager)
  - [AWCache](#awcache)
  - [AWDevice](#awdevice)
  - [AWVibration](#awvibration)
  - [AWContacts](#awcontacts)
  - [Contact](#contact)
  - [ContactAddress](#contactaddress)
  - [ContactError](#contacterror)
  - [ContactField](#contactfield)
  - [ContactOrganization](#contactorganization)
+ [Events](#events)
  - [Battery](#battery)

## API Usage and Examples

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

<b>Note</b>: if you are using angularJS, ````$scope.$apply()```` calls will need to be made in your callbacks to ensure
that scope variables and the DOM get updated.

#### AWAuth
<b>**_* available on desktop_**</b>

The Auth plugin allows you to seamlessly authenticate against your backend. Useful for refreshing tokens and gaining
access rights to make api calls against the gateway.

##### Methods:

###### authenticate
````
authenticate(force?:boolean)
````
Makes a call against the gateway /auth endpoint. Returns the response to the callback registered
upon creation of the instance

- force: when a truthy value is passed, the client will force a reauthentication by the user.

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

###### getAuthResponse
````
getAuthResponse()
````
Returns the auth response to the callback registered upon creation of the instance without sending a reauthentication
request.

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
    auth.getAuthResponse();
});
````

###### gateway
````
gateway(successHandler: any, errorHandler?: any)
````
Returns the url of the gateway to the ````successHandler```` passed in.

###### online
````
online(successHandler: any, errorHandler?: any)
````
Returns a boolean value based on the current network connection, visibility of the gateway and if the user has signed in online (not with offline pin)

##### Example:

````js
var auth = new Appworks.Auth();
var weAreOnline = false;

$('#click-me').click(function () {
    auth.online(function(status) {
      // Will return true if the device is connected to a network/data, the gateway is responsive to us, and the user is not logged in with the offline pin.
      // Otherwise this will return false.
      weAreOnline = status;
    }, function(error) {
      // Error function calls in the event an error.
      console.log(error);
    });
});
````


#### AWWebView
The web view plugin allows you to open links via the in-app browser. This is great for giving your app a native feel
when opening external links

##### Methods:

###### open
````
url:string, target?:string, options?: string):InAppBrowser
````
Opens the in-app browser with the url provided.
- <b>url</b>: the URL to load
- <b>target</b>: The target in which to load the URL. Defaults to '_self'
- <b>options</b>: options for the in-app browser. Defaults to 'location=yes'. The options string must not contain any
blank space, and each feature's name/value pairs must be separated by a comma.
Feature names are case insensitive.

Refer to https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/ for more documentation

#### AWAppManager
The AppManager plugin allows you to close the current app webview.

##### Methods:

###### closeActiveApp
````
closeActiveApp()
````
Closes the currently active app.

##### Example:

````js
var appManager = new Appworks.AWAppManager(
    function () {
        // success
    },
    function (err) {
        // could not complete authentication request
        console.log(err);
    }
);

$('#click-me').click(function () {
    appManager.closeActiveApp();
});
````

#### AWComponent
Open, close, list, and check components

##### Methods:

###### open
````
open(successHandler: any, errorHandler?: any, args?: any[])
````
Open a component

###### list
````
list(successHandler: any, errorHandler?: any, args?: any[])
````
Return a list of all installed components

###### check
````
check(successHandler: any, errorHandler?: any, args?: any[])
````
Check if a component is installed

###### close
````
close(successHandler: any, errorHandler?: any, args?: any[])
````
Close the current component

#### Finder
The Finder plugin allows you to browse and open files stored on the device inside of the OpenText Mobile container.
Files browsing can be done directly inside of your app. Files can be opened in third party iOS apps installed on the
device.

##### Methods:

###### open
````
open(path: string, filename: string)
````
open a file in another iOS app installed on the device
- <b>path</b>: the path to the file you would like to open
- <b>filename</b>: the name of the file you would like to open

###### openDirect
````
openDirect(filename: string)
````
open a file in another iOS app installed on the device
- <b>filename</b>: the name of the file you would like to open at the application root

###### list
````
list(path: string)
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

#### FileChooser
The FileChooser plugin allows you to select and upload files from the device file system. Android only.

##### Methods:

###### selectAndUpload
````
selectAndUpload(action: string)
````
select a file and upload
- <b>action</b>: the action

#### AWFileSystem
<b>**_* available on desktop_**</b>

The AWFileSystem plugin allows AppWorks Desktop hosted apps to interact with the underlying desktop host. Specifically to make use of the OS file system operations, and also some of the native file browsing dialogs (Windows Explorer, OSX Finder, etc.).

Please note this plugin is only usable in the desktop environment, the plugin methods will throw an error if usage outside of this context is detected. Use of relative paths with this plugin's methods is not advised, and paths beginning with a slash on Windows will assume that they begin at the root drive of the hosts file system. 
Absolute paths can be retrieved via the AWFileSystem dialog methods, namely [showSaveDialog](#showsavedialog), [showDirSelector](#showdirselector), and [showFileSelector](#showfileselector).

##### Methods:

###### exists
````
    exists(path: string, successCallback: (result: boolean), errorCallback?: (result: Error))
````
Determine if the path provided refers to an existing file or directory. <b>Relative paths should not be used.</b>
- <b>path</b>: a file path

A boolean value will be passed to the callback if the path does exist, else the error callback will be fired.

###### isDir
````
    isDir(path: string, successCallback: (result: boolean), errorCallback?: (result: Error))
````
Determine if the path provided refers to a directory, as opposed to a file. <b>Relative paths should not be used.</b>
- <b>path</b>: a file path

A boolean value will be passed to the callback if the path does refer to an existing directory, else the error callback will be fired.

###### create
````
    create(path: string, successCallback: (result: boolean), errorCallback?: (result: Error))
````
Create a new file at the provided path. A file extension must be provided and any extra directories specified in the path that do not currently exist will be created for you. 
This method does not support overwriting existing files, it is to be used for the creation of new files only. <b>Use of relative paths will result in an error being thrown.</b>
- <b>path</b>: a new file path that has a non empty file extension

A boolean value will be passed to the callback if the file is created, else the error callback will be fired.

###### copy
````
    open(from: string, to: string, successCallback: (result: boolean), errorCallback?: (result: Error))
````
Copy a file from one location to another. The supplied source and destination paths must be non-empty and contain file extensions. 
The source path has to refer to an existing file, and any directories in the 'to' path that do not exist will be created as part of the copy operation.
<b>Use of relative paths will result in an error being thrown.</b>
- <b>from</b>: source file path
- <b>to</b>: destination file path

A boolean value will be passed to the callback if the file was successfully copied, else the error callback will be fired.


###### open
````
    open(path: string, successCallback: (result: boolean), errorCallback?: (result: Error))
````
Open a file using the host OS. If the file extension of the existing file is known then the corresponding host application will open, else you will be prompted to choose an application. <b>Relative paths should not be used.</b>
- <b>path</b>: a file path

A boolean value will be passed to the callback if the OS managed to open the file, else the error callback will be fired.

###### reveal
````
    reveal(path: string, successCallback: (result: boolean), errorCallback?: (result: Error))
````
Open the OS file browser at the supplied file path. <b>Relative paths should not be used.</b>
- <b>path</b>: a file path

A boolean value will be passed to the callback if the OS managed to open the file browser at the supplied location, else the error callback will be fired. <b>Relative paths should not be used.</b>


###### getDetails
````
    getDetails(path: string, successCallback: (result: FileDetails), errorCallback?: (result: Error))
````
Retrieve the details of a specific file/directory at the supplied path. <b>Relative paths should not be used.</b>
- <b>path</b>: a file path

A [FileDetails](#filedetails) object will be passed to the callback if the path exists, else the error callback will be fired.


###### listDirContents
````
    listDirContents(path: string, successCallback: (result: FileDetails[]), errorCallback?: (result: Error))
````
List the contents of the directory at the supplied path. <b>Relative paths should not be used.</b>
- <b>path</b>: a file path

An array of [FileDetails](#filedetails) objects will be passed to the callback if the path exists and is a directory, else the error callback will be fired.

###### showSaveDialog
````
    showSaveDialog(opts: SaveDialogOptions, successCallback: (result: string), errorCallback?: (result: Error))
````
Show the OS 'Save As' file browser, only permitting selection of a single file. A new file name is usually entered otherwise we will overwrite the existing file at the provided path (provide the correct permissions are in place)
- <b>options</b>: [SaveDialogOptions](#savedialogoptions) save dialog options

The full path of the file indicated in the OS file browser will be returned to the callback on pressing the dialog confirmation button.


###### showDirSelector
````
    showDirSelector(successCallback: (result: string[]), errorCallback?: (result: Error))
````
Show the OS file selection browser, only allowing the selection of directories.

The full path to the selected directory will be returned to the callback on pressing the dialog confirmation button.


###### showFileSelector
````
    showFileSelector(opts: FileDialogOptions, successCallback: (result: string[]), errorCallback?: (result: Error))
````
Show the OS file selection browser, allowing the selection of files only. Multiple files can be selected at once as specified in the options.
- <b>opts</b>: [FileDialogOptions](#filedialogoptions) file browser dialog options

An array of the selected file paths will be returned to the callback on pressing the dialog confirmation button.


##### Objects:

These objects are defined as part of the AWFileSystem module.

###### FileDetails
Basic file details resolved by the host OS.
- <b>name</b>: file name with extension
- <b>path</b>: full path to the file
- <b>isDirectory</b>: is this a directory or file?
- <b>checksum</b>: MD5 hash checksum of the file (files only)
- <b>modified</b>: last modified time in millis (since epoch)

###### FileFilter
A filter that can be applied within a file browser to limit the types of file that are visible
- <b>name</b>: the name of the filter as it appears in the file browser
- <b>extensions</b>: an array of file extensions without wildcards or dots (e.g. 'png' is good but '.png' and '*.png' are bad) <b>to show all files, use the '*' wildcard (no other wildcard is supported)</b>

###### SaveDialogOptions
Options to configure the 'Save As' dialog.
- <b>title</b>: custom title for the dialog
- <b>defaultPath</b>: the path at which to open the dialog
- <b>buttonLabel</b>: custom label for the confirmation button, when left empty the default label will be used
- <b>filters</b>: an array of [FileFilter](#filefilter) objects

###### FileDialogOptions
Options to configure the file browser dialog
- <b>multiSelections</b>: enable multiple file selection
- <b>filters</b>: an array of [FileFilter](#filefilter) objects

#### AWHeaderBar
The AWHeaderBar plugin allows you to hide or show the client header bar,
update the text, and/or hide or show a back button.

##### Methods:

###### setHeader
````
setHeader(config: any)
````
update the header bar with options
- <b>config</b>: a configuration object with the following parameters
- title: the title of the header
- backButtonVisible: boolean flag to hide/show the back button


###### getHeader
````
getHeader()
````
get the current configuration of the header

##### Example:
````js
var setHeader = function () {
    var header = new Appworks.AWHeaderBar(headerWasSet, failed),

    function headerWasSet(config) {
        // returns an object containing the current header bar configuration
        console.log(config);
        // just to demonstrate a callback
        getHeader();
    }

    function failed(err) {
        console.log(err);
    }

    header.setHeader({
        title: 'My New Title',
        backButtonVisible: true
    });
};

var getHeader = function () {
    var header = new Appworks.AWHeaderBar(gotHeader, failed);

    function gotHeader(header) {
        // returns an object containing the current header bar configuration
        console.log(header);
    }

    function failed(err) {
        console.log(err);
    }

    header.getHeader();
};

// update the header bar
setHeader();
````

###### setHeaderButtons
````
setHeaderButtons(callback: Function, config: any)
````
Set the header buttons to specified images and indicate if their event handler is custom
- <b>config</b>: an array of objects. The properties of each object must contains:
- <b>button</b>: The identifier of the button. You can use the AWHeaderBar.ButtonName enumerator for this.
- <b>image</b>: The identifier of the image. You can use the AWHeaderBar.ButtonImage enumerator for this.
- <b>function</b>: custom|default - Indicate to AppWorks whether AppWorks will handle the tap event (default) or your app will (custom)

##### Example:
````js
var self = this;

function initHeaderButtons() {
    self.header = new Appworks.AWHeaderBar(null, failFn);
    setHeaderButtons();
}

// Tell the client to set the header buttons according to the apps needs
function setHeaderButtons() {
  // Button definitions
  var RightButtonOne = {
      "button": header.ButtonName.RightOne, // Identifiy the button using an enumerator
      "image": header.ButtonImage.Dots, // Use an image specified by an enumerator
      "function" : "custom" // Inform the client this will be handled in the app
    };

  var RightButtonTwo = {
      "button": header.ButtonName.RightTwo,
      "image": header.ButtonImage.Search,
      "function" : "custom"
    };

  var LeftButtonOne = {
      "button": header.ButtonName.LeftOne,
      "image": header.ButtonImage.Back,
      "function" : "custom"
    };

  var LeftButtonTwo = {
      "button": header.ButtonName.LeftTwo,
      "function" : "default" // Inform the client this button is to be handled by the client. The image will revert to default.
    };

  var buttons = [LeftButtonOne, RightButtonOne, RightButtonTwo];
  header.setHeaderButtons(headerButtonCallback, buttons);
}

// Tell the client to set each button to their default icons and functions
function resetHeaderButtons() {
  var RightButtonOne = {
      "button": header.ButtonName.RightOne,
      "function" : "default" // Inform the client this button is to be handled by the client. The image will revert to default.
    };

  var RightButtonTwo = {
      "button": header.ButtonName.RightTwo,
      "function" : "default" // Inform the client this button is to be handled by the client. The image will revert to default.
    };

  var LeftButtonOne = {
      "button": header.ButtonName.LeftOne,
      "function" : "default" // Inform the client this button is to be handled by the client. The image will revert to default.
    };

  var LeftButtonTwo = {
      "button": header.ButtonName.LeftTwo,
      "function" : "default" // Inform the client this button is to be handled by the client. The image will revert to default.
    };

  var buttons = [LeftButtonOne, LeftButtonTwo, RightButtonOne, RightButtonTwo];
  header.setHeaderButtons(headerButtonCallback, buttons);
}

// Callback function called when a button is tapped
function headerButtonCallback(button){
  if(button == header.ButtonName.RightOne) {
    rightButtonOneFunction();
  }

  if(button == header.ButtonName.RightTwo) {
    rightButtonTwoFunction();
  }

  if(button == header.ButtonName.LeftOne) {
    leftButtonOneFunction();
  }
}

function failFn(err) {
    // called when the header bar fails to set the buttons
    console.log(err);
}

// Execute the function to initialize the header buttons
initHeaderButtons();
````

###### maskHeader
````
maskHeader(shouldMaskHeader: any)
````

- <b>shouldMaskHeader</b>: A boolean value, true to mask false to unmask
- Add an overlay to the native header. 
- The buttons underneath are not usable when when the overlay is visible.

##### Example:
````js
document.addEventListener("deviceready", onDeviceReady, false);

var self = this;

function onDeviceReady() {
  app();
}

function app() {
    self.header = new Appworks.AWHeaderBar();
}

// Invoke the mask header plugin
// Pass in a boolean (true to mask, false to unmask)
function maskHeader(shouldMaskHeader) {
  header.maskHeader(shouldMaskHeader);
}
````

###### ButtonName enumerator
- <b>ButtonName.LeftOne</b>: The left most button, normally the hamburger menu icon
- <b>ButtonName.LeftTwo</b>: The second left button, no default use.
- <b>ButtonName.RightOne</b>:  The right most button, normally the app switcher icon in the multi app client
- <b>ButtonName.RightTwo</b>: The second right button, no default use for apps, but the settings icon on the app library page in the multi app client

###### ButtonImage enumerator
- <b>ButtonImage.Back</b>: Same image as the back icon. Can be used here as an alternative.
- <b>ButtonImage.Settings</b>: A settings cog-wheel icon
- <b>ButtonImage.None</b>: Hides the button
- <b>ButtonImage.Dots</b>: Three dots stacked vertically icon
- <b>ButtonImage.Search</b>: Magnifying glass icon

#### AWPage
The AWPage plugin allows you to set the URL of page to an external URL (such as http://www.google.com). This allows the web app to launch a new webView with a specified URL in the current context of the view.

##### Methods:

###### setPageUrl
````
setPageUrl(url: string)
````
Pass in a URL as a string, starting with http(s):// and a webview will overlay the current webview with that URL. For security reasons no appworks functionality will be available from this URL.

##### Example:
````js
  var url = "http://www.opentext.com/"
  var awPage = new Appworks.AWPage();
  awPage.setPageUrl(url);
````


#### QRReader
The QRReader plugin allows you to scan a QR code using the device camera.

##### Methods:

###### scan
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

###### takePicture
````
takePicture(options?: any)
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

###### openGallery
````
openGallery(options?: any)
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

###### store
````
store(url: string, filename: string, options?: any)
````
store a file securely.
- <b>url</b>: the url of the server to download the file from.
- <b>filename</b>: the path to the file to be stored. may be a directory structure.
- <b>options</b>: optional options to pass with your request. currently supports headers.

##### Example:

````js
var self = this;

function storeFile() {

    var storage = new Appworks.SecureStorage(setFile, errorHandler);
    self.imgSrc = null;
    self.loading = true;

    function setFile(file) {
        self.storedFile = file.nativeURL;
        stopLoading();
    }

    function stopLoading() {
        console.log('AWJS: File downloaded successfully.');
        self.loading = false;
    }

    storage.store('http://thecatapi.com/api/images/get', 'file.jpg');
}
````

###### retrieve
````
retrieve(filename: string, options?: any)
````
- <b>filename</b>: the name of the file to be retrieved. may be a directory structure. note this is not the nativeURL,
but the same path that was supplied to ````store()````.
- <b>options</b>: optional options to pass with your request.

##### Example:

````js
var self = this;
function getFile() {
    var storage = new Appworks.SecureStorage(showImage, errorHandler);

    function showImage(file) {
        self.storedFile = file.nativeURL;
        self.showStoredFileAsImage = true;
    }

    storage.retrieve('file.jpg');
};

function errorHandler(err) {
    console.log(err);
}
````

###### remove
````
remove(target: string)
````
- <b>target</b>: the name of the file to be removed. may be a directory structure. note this is not the nativeURL,
but the same path that was supplied to ````store()````.

##### Example:

````js
function removeFile() {
    var storage = new Appworks.SecureStorage(success, errorHandler);
    storage.remove('file.jpg');
}

function success() {
    alert('success');
}

function errorHandler(err) {
    console.log(err);
}
````

###### fileExistsAtPath
````
fileExistsAtPath(target: string)
````
check if a file exists

- <b>target</b>: the name of the file to check for. may be a directory structure. note this is not the nativeURL,
but the same path that was supplied to ````store()````.

##### Example:

````js
function fileExists() {
    var storage = new Appworks.SecureStorage(success, errorHandler);
    storage.fileExistsAtPath('file.jpg');
}

function success(doesFileExist) {
    alert(doesFileExist); // true or false
}

function errorHandler(err) {
    console.log(err);
}
````

###### onprogress
````
onprogress=
````
bind a progress function to be passed progress events while the request is being downloaded when ````store()```` is
called.

#### AWFileTransfer
<b>**_* available on desktop_**</b>

The File Transfer plugin allows you to upload and download files to and from the device. Additionally, it allows you
to download files to a shared container where they may be accessed by third party applications installed on the device.

##### Methods:

###### download
````
download(url: string, target: string, options?: any, shared?: boolean)
````
download a file from a remote url and store it on the device
- <b>url</b>: the url of the server to download the file from
- <b>target</b>: the name of the path including the filename where you would like the file to be stored.
- <b>options</b>: an optional options object. currently supports headers only.
- <b>shared</b>: a boolean flag. when set, the file will be downloaded to a shared container where it may be accessed
by third party applications

This method passes a <a href="https://cordova.apache.org/docs/en/3.0.0/cordova/file/fileentry/fileentry.html">FileEntry</a>
object to your success callback. See <a href="https://cordova.apache.org/docs/en/3.0.0/cordova/file/file.html">Apache Cordova Documentation</a>
for more information.
##### Example:

````js
var self = this;
function downloadFile () {
    var fileTransfer = new Appworks.AWFileTransfer(showFile, errorHandler);

    function showFile(file) {
        console.log(file);
        self.downloadedFile = file.nativeURL;
    }

    fileTransfer.progressHandler(function (progress) {
        console.log(progress);
    });

    fileTransfer.download('http://thecatapi.com/api/images/get', 'file.jpg');
};
````

###### upload
````
upload(source: string, url: string, options?: any, shared: boolean)
````
upload a file from the device to another location
- <b>source</b>: the name of the path including the filename where the file is stored
- <b>url</b>: the url of the server to upload the file to
- <b>options</b>: an optional options object.
- <b>shared</b>: a boolean flag. when set, the file will be uploaded from a shared container where it may be accessed
by third party applications

This method passes a <a href="https://cordova.apache.org/docs/en/3.0.0/cordova/file/fileuploadresult/fileuploadresult.html">FileUploadResult</a>
object to your success callback. See <a href="https://cordova.apache.org/docs/en/3.0.0/cordova/file/file.html">Apache Cordova Documentation</a>
for more information.
##### Example:

````js
var self = this;
function uploadFile () {
    var fileTransfer = new Appworks.AWFileTransfer(showFile, errorHandler);

    function showFile(file) {
        console.log(file);
        self.uploadedFile = file.nativeURL;
    }

    fileTransfer.upload('file.jpg', 'http://thecatapi.com/api/images/get');
};
````

###### progressHandler
````
progressHandler(callback: (data: any) => void)
````
define a callback to be executed whenever upload or download progress is made
- <b>callback</b>: a function to be executed during upload or download. passed a ProgressEvent object.

###### abort
````
abort()
````
abort the current transfer.

#### AWMedia
The AWMedia plugin provides the ability to record and play back audio files on a device.

````js
var media = new Appworks.AWMedia('path-to-src.mp3', audioEnded, errorHandler, statusChanged);

function audioEnded() {
    console.log('audio ended');
}

function errorHandler(err) {
    console.log(err);
}

function statusChanged(status) {
    console.log(status);
}

media.play();
````

##### Methods:

- getCurrentPosition: Returns the current position within an audio file.
- getDuration: Returns the duration of an audio file.
- play: Start or resume playing an audio file.
- pause: Pause playback of an audio file.
- release: Releases the underlying operating system's audio resources.
- seekTo: Moves the position within the audio file.
- setVolume: Set the volume for audio playback.
- startRecord: Start recording an audio file.
- stopRecord: Stop recording an audio file.
- stop: Stop playing an audio file

##### Parameters:
- src: A URI containing the audio content
- mediaStatus: (Optional) The callback that executes to indicate status changes. (Function)

See the <a href="https://github.com/apache/cordova-plugin-media">Apache Cordova Github</a> for in depth
documentation, device specific quirks, and more.

#### AWMediaCapture
The AWMediaCapture plugin provides access to the device's audio, image, and video capture capabilities.

##### Methods:

- captureImage
- captureVideo

##### Objects:

- Capture
- CaptureAudioOptions
- CaptureVideoOptions
- CaptureCallback
- CaptureErrorCB
- ConfigurationData
- MediaFile
- MediaFileData

##### Properties:
- supportedAudioModes: The audio recording formats supported by the device. (ConfigurationData[])
- supportedImageModes: The recording image sizes and formats supported by the device. (ConfigurationData[])
- supportedVideoModes: The recording video resolutions and formats supported by the device. (ConfigurationData[])

See the <a href="https://github.com/apache/cordova-plugin-media-capture">Apache Cordova Github</a> for in depth
documentation, device specific quirks, and more.


#### AWAccelerometer
The AWAccelerometer plugin provides access to the device's accelerometer. The accelerometer is a motion sensor that
detects the change (delta) in movement relative to the current device orientation, in three dimensions along the x, y,
and z axis.

##### Methods:

###### getCurrentAcceleration
````ts
getCurrentAcceleration()
````
Get the current acceleration along the x, y, and z axes.

##### Example:

````js
// onSuccess Callback
// This method accepts an Acceleration object, which contains the current acceleration data
//
var onSuccess = function(position) {
     alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
};

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

var accelerometer = new Appworks.AWAccelerometer(onSuccess, onError);
accelerometer.getCurrentAcceleration();
````

###### watchAcceleration
````ts
watchAcceleration(options?: any) => watchId: number
````
Retrieves the device's current ````Acceleration```` at a regular interval, executing the ````successHandler````
callback function each time. Specify the interval in milliseconds via the ````accelerometerOptions````
object's frequency parameter.

- options - An object with the following optional keys:
    - period: requested period of calls to ````successHandler```` with acceleration data in Milliseconds. (Number)
    (Default: 10000)

returns a ````watchId```` that references the watch acceleration interval function. This value should be used with
````clearWatch```` to cancel watching for changes in acceleration.

##### Example:

````js
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

var accelerometer = new Appworks.AWAccelerometer(onSuccess, onError);
var watchID = accelerometer.watchAcceleration({ period: 30000 });
````

###### clearWatch
````ts
clearWatch(watchId: number)
````
Stop watching for changes to the ````acceleration```` referenced by the ````watchId```` parameter.

##### Example:

````js
var accelerometer = new Appworks.AWAccelerometer(onSuccess, onError);

var watchId = accelerometer.watchAcceleration();

// .. later on

accelerometer.clearWatch(watchId);
````

#### AWCompass
The AWCompass plugin provides access to the device's compass.
The compass is a sensor that detects the direction or heading that the device is pointed, typically from the top of the
device. It measures the heading in degrees from 0 to 359.99, where 0 is north.

##### Methods:

###### getCurrentHeading
````ts
getCurrentHeading()
````
Get the current compass heading.
The compass heading is returned via a ````CompassHeading```` object using the ````successHandler```` callback function.

##### Example:

````js
function onSuccess(heading) {
    alert('Heading: ' + heading.magneticHeading);
};

function onError(error) {
    alert('CompassError: ' + error.code);
};

var compass = new Appworks.AWCompass(onSuccess, onError);
compass.getCurrentHeading();
````

###### watchHeading
````ts
watchAcceleration(options?: any) => watchId: number
````
Gets the device's current heading at a regular interval.
Each time the heading is retrieved, the ````successHandler```` callback function is executed.

- options - An object with the following optional keys:
            - frequency: How often to retrieve the compass heading in milliseconds. (Number) (Default: 100)
            - filter: The change in degrees required to initiate a watchHeading success callback. When this value is set,
            frequency is ignored. (Number)

returns a ````watchId```` that references the watch heading interval function. This value should be used with
````clearWatch```` to cancel watching for changes in heading.

##### Example:

````js
function onSuccess(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};

var options = {
    frequency: 3000
}; // Update every 3 seconds

var compass = new Appworks.AWCompass(onSuccess, onError);
var watchId = compass.watchHeading(options);
````

###### clearWatch
````ts
clearWatch(watchId: number)
````
Stop watching for changes to the ````heading```` referenced by the ````watchId```` parameter.

##### Example:

````js
var compass = new Appworks.AWCompass(onSuccess, onError);

var watchId = compass.watchHeading();

// .. later on

compass.clearWatch(watchId);
````

#### AWLocation
The AWLocation plugin provides information about the device's location, such as latitude and longitude.
Common sources of location information include Global Positioning System (GPS) and location inferred from network
signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
There is no guarantee that the API returns the device's actual location.

##### Methods:

###### getCurrentPosition
````ts
getCurrentPosition(options?: any)
````
returns the devices current position to the ````successHandler```` callback function with a ````Position```` object
as the parameter. If there is an error, the ````errorHandler```` callback is passed a ````PositionError```` object.

- options - geolocation options

##### Example:

````js
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

var geo = new Appworks.AWLocation(onSuccess, onError);
geo.getCurrentPosition();
````

###### watchPosition
````ts
watchPosition(options?: any) => watchId: number
````
Returns the device's current position when a change in position is detected. When the device retrieves a new location,
the ````successHandler```` callback executes with a ````Position```` object as the parameter.
If there is an error, the ````errorHandler```` callback executes with a ````PositionError```` object as the parameter.

- options - geolocation options

returns a ````watchId```` that references the watch position interval function. This value should be used with
````clearWatch```` to cancel watching for changes in position.

##### Example:

````js
// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Options: throw an error if no update is received every 30 seconds.
//
var geo = new Appworks.AWLocation(onSuccess, onError);
var watchID = geo.watchPosition({ timeout: 30000 });
````

###### clearWatch
````ts
clearWatch(watchId: number)
````
Stop watching for changes to the device's location referenced by the ````watchId```` parameter.

##### Example:

````js
var geo = new Appworks.AWLocation(onSuccess, onError);

var watchId = geo.watchPosition();

// .. later on

geo.clearWatch(watchId);
````

##### Objects

geolocationOptions - optional parameters to customize the retrieval of the geolocation ````Position````

- enableHighAccuracy: Provides a hint that the application needs the best possible results. By default,
the device attempts to retrieve a Position using network-based methods. Setting this property to true tells the
framework to use more accurate methods, such as satellite positioning. (Boolean)
- timeout: The maximum length of time (milliseconds) that is allowed to pass from the call to
````getCurrentPosition```` or ````watchPosition```` until the corresponding ````successHandler```` callback executes.
If the ````successHandler```` callback is not invoked within this time, the ````errorHandler```` callback is passed a
````PositionError.TIMEOUT```` error code.
- maximumAge: Accept a cached position whose age is no greater than the specified time in milliseconds. (Number)

Read more on the <a href="https://github.com/apache/cordova-plugin-geolocation">Cordova Documentation</a> page.

#### AWNotificationManager
The AWNotificationManager plugin gives you access to native notifications targeted to the device and/or a specific
app.

The constructor does not take any arguments.

````js
var notificationManager = new Appworks.AWNotificationManager();
````

##### Methods:

- enablePushNotifications
- disablePushNotifications
- getNotifications
- openListener
- getOpeningNotification
- removeNotification

##### enablePushNotifications
````ts
enablePushNotifications(handler: any, errorHandler?: any)
````
turn on realtime notifications.

Parameters:
- handler: a callback function that will be passed a new notification in realtime once it reaches the client.
- errorHandler: a function to get executed if there is an error in processing a notification

##### getNotifications
````ts
getNotifications(handler: any, errorHandler?: any)
````
get all notifications.

Parameters:
- handler: a callback function that will be passed all of the notifications for this app.
- errorHandler: a function to get executed if there is an error in processing notifications

##### disablePushNotifications
````ts
disablePushNotifications()
````
turn off realtime notifications.

##### getOpeningNotification
````ts
getOpeningNotification(handler: any, errorHandler?: any)
````
Obtain the data of the notification used to open the app.

Parameters:
- handler: a callback function that will be passed the opening notification when the app is opening via a notification tap.
- errorHandler: a function to get executed if there is no opening notification

##### removeNotification
````ts
removeNotification(seqNo: any, handler: any, errorHandler?: any)
````
Delete a notification with a given seqNo.

Parameters:
- seqNo: the id of the notification to be deleted.
- handler: the function that will be called upon successful deletion of the notification.
- errorHandler: the function that will be called if the notification fails to be deleted.


##### openListener
````ts
openListener(handler: any)
````
Create a listener which will receive notification data which can enter your app by tapping on a native notification when your app is running, or by tapping on a notification in the activity screen, or by tapping on a notification in the app notification screen.

This is different to push notifications as they require the user to tap the notification rather than automatically enter your app when it is received by the device/runtime.

Parameters:
- handler: a callback function that will be passed the notifications data.


##### Example:

````js
var _notifications = [];
var notificationManager = new Appworks.AWNotificationManager();

function getNotifications() {
    // get all notifications. does not care if realtime is enabled or disabled
    notificationManager.getNotifications(function (notifications) {
        _notifications = notifications;
    });
}

function enableNotifications() {
    // register a callback to handle realtime notifications
    notificationManager.enablePushNotifications(function (notification) {
        // realtime notifications will appear here
        console.log(notification);
        alert(JSON.stringify(notification);
    });
}

function disableNotifications() {
    // turn off realtime notifications
    notificationManager.disablePushNotifications();
}

function openListenter() {
    // register a callback to handle manually activated notifications
    notificationManager.openListener(function (notification) {
        // manual notifications will appear here
        console.log(notification);
        alert(JSON.stringify(notification);
    });
}

function getOpeningNotification() {
    // register a callback to handle opening notification
    notificationManager.getOpeningNotification(function (notification) {
        // opening notifications will appear here
        console.log(notification);
        alert(JSON.stringify(notification);
    }
    , function (error) {
        // opening notifications error appear here
        console.log(error);
    });
}

function removeNotification(seqNo) {
    // delete a notification with the given seqNo
    notificationManager.removeNotification(seqNo, function () {
        // success function
        console.log("Notification with seqNo " + seqNo + ", has been deleted");
    }, function (error) {
        // error function
        console.log("Notification with seqNo " + seqNo + ", could not be deleted: " + error);
    });
}

````


#### AWOfflineManager
The AWOfflineManager plugin allows you to work offline by managing an offline queue. This queue is meant to capture
the user's intention, where it may be reconstructed when the device once again has network access.

The constructor takes in an options object.

````js
var options = {
    preserveEvents: true
};

var offlineManager = new Appworks.AWOfflineManager(options);
````

If options.preserveEvents is set to true, then items will only be removed from the deferred queue when explicitly told
to do so by calling cancel()

##### Methods:
- defer
- cancel
- networkStatus

##### defer
````ts
defer(eventName: string, args: any)
````
defer an event to be handled when the device comes back online. if the device is already online, then the event will
 still get added to the queue and processed after an offline => online cycle.

Parameters:
- eventName: the name of an document event that you intend to listen for when the device completes an offline - online
cycle
- args: arguments that were captured at the time an event was deferred. used to reconstruct what happened while the
device was offline

This method returns an id that you can use to remove an event from the deferred queue using ````cancel````

##### cancel
````ts
cancel(id: number)
````
Remove an event from the deferred queue.

Parameters:
- id: the id of the event to remove from the queue. this is the value passed back when calling ````defer````

##### networkStats
````ts
networkStatus()
````
Get the current network status of the device

###### Full Example (angularjs):

````js
.controller('OfflineCtrl', function ($scope, $timeout, $http) {
        var self = this,
            offlineManager = new Appworks.AWOfflineManager({preserveEvents: true});

        self.users = [];
        self.defer = makeRequest;
        self.offlineEventId = null;

        self.defer = function () {
            // want to show that arguments are preserved, so I will call makeRequest with a url I define in here
            // when the offline event is processed the arguments I tried to call makeRequest with will be preserved.
            var url = 'https://randomuser.me/api/';
            makeRequest(url);
        };

        // we add an event listener outside any inner functions so that if the device turns completely off and
        // on again, as soon as this controller is loaded this event listener will be registered.
        //
        // there will be a 5 second delay between when the device comes back online and the 'makeRequestEv' event gets
        // fired

        // an event listener
        // function should be registered here or earlier to ensure the event gets processed.
        // this is the same event listener we registered with defer() on line 163
        document.addEventListener('makeRequestEv', gotDeferred);

        function gotDeferred(data) {
            // the device is online now so we try to make the request again using the original arguments.
            console.log(data);
            var url = JSON.parse(data.detail)[0];
            makeRequest(url);
        }

        function makeRequest(url) {
            // if the device is online, we make the request right away
            // otherwise, we queue the request to be processed later, and preserve any arguments that this method
            // was called with
            if (offlineManager.networkStatus().online) {
                // make the request
                $http.get(url).then(addUser, errorFn);
                // we set up offlineManager to remove events manually by providing {preserveEvents: true}, so now
                // that we have made the request, we remove the event from the deferred queue using the id passed
                // back to us when we called defer()
                offlineManager.cancel(self.offlineEventId);
            } else {
                self.offlineEventId = offlineManager.defer('makeRequestEv', arguments);
                console.log(self.offlineEventId);
            }
        }

        function addUser(response) {
            var user = response.data.results[0];
            self.users.push(user);
            console.log(response);
        }

        function errorFn(err) {
            self.err = err;
        }
    })
````

#### AWCache
<b>**_* available on desktop_**</b>

The AWCache plugin allows you to temporarily cache JSON data using local storage, or permanently store it using the device/host OS file system.

##### Methods:

- setItem
- getItem
- clear

All methods are asynchronous and return a Promise. The constructor accepts an options object with a single property `usePersistentStorage`.
If the `usePersistentStorage` option is set to `true` then the on-device file system or host OS storage will be used depending on the runtime environment.
````js
var options = {
    usePersistentStorage: true
};

var cache = new Appworks.AWCache(options);
````

###### setItem
````ts
setItem(key: string, value: any)
````
set an item in the cache. this method is asynchronous.

parameters:
- key: the key to store the item under
- value: the data to store

Example:
````js
var cache = new Appworks.AWCache();
cache.setItem('myKey', 1234).then(
    function() {
        console.log('stored 1234 under key "myKey"');
    },
    function(err) {
        console.error('failed to store 1234 under key "myKey" in cache - ' + err);
    });
````

###### getItem
````ts
getItem(key: string)
````
get an item from the cache. this method is asynchronous.

parameters:
- key: the key of the item to retrieve

Example:
````js
var cache = new Appworks.AWCache();
cache.getItem('myKey').then(
    function(item) {
        console.log('we got the item ' + item + 'from the cache using key "myKey"');
    },
    function(err) {
        console.error(`failed to get 'myKey' from cache - ` + err);
    });
````

##### removeItem
````ts
removeItem(key: string)
````
remove an item from the cache. this method is asynchronous.

Example:
````js
var cache = new Appworks.AWCache();
cache.removeItem('myKey').then(
    function() {
        console.log('successfully removed "myKey" from the cache');
    },
    function(err) {
        console.error('failed to remove "myKey" from the cache - ' + err);
    });
````

###### clear
````ts
clear()
````
clear all items from the cache

Example:
````js
var cache = new Appworks.AWCache();
cache.clear().then(
    function() {
        console.log('successfully cleared the cache');
    },
    function(err) {
        console.error('failed to clear the cache - ' + err);
    });
````

#### options
- usePersistentStorage: guarantees that json written to the cache does not get erased unless explicitly instructed
 by calling ````removeItem````. default is ````false````. This option applies to the mobile environment only.

#### AWDevice
<b>**_* available on desktop_**</b>

The AWDevice plugin gives you information that describes the device's hardware and software.

##### Properties:
- device.cordova - the version of cordova installed on the device
- device.model - the name of the device model
- device.platform - the name of the device operating system
- device.uuid - the device's Universally Unique Identifier (UUID).
- device.version - the operating system version.
- device.manufacturer - the device manufacturer

##### Example:
````js
var device = new Appworks.AWDevice();
console.log(device.model);
````

#### AWVibration
The AWVibration plugin allows you to vibrate the device.

##### Methods:

The constructor does not accept any arguments.
````js
var vibe = new Appworks.AWVibration();
````

###### vibrate

````ts
vibrate(time: number)
````
Vibrate the device for a specified amount of time.

- time: the amount of time to vibrate the device.

Read more about this plugin <a href="https://github.com/apache/cordova-plugin-vibration">here</a> to learn more
about device specific quirks.

##### Example:

````js
var vibe = new Appworks.AWVibration();
// vibrates the device for 2 seconds
vibe.vibrate(2000);
````

#### AWContacts
The Contacts plugin gives you access to the device contacts database.
Includes the following global objects:
- Contact
- ContactName
- ContactField
- ContactAddress
- ContactOrganization
- ContactFindOptions
- ContactError

See the <a href="https://cordova.apache.org/docs/en/3.0.0/cordova/contacts/contacts.html#link-3">Apache Cordova Contacts
Documentation </a> to learn more. Some information provided here has been copied from the
<a href="https://github.com/apache/cordova-plugin-contacts">cordova contacts github repo</a>.

##### Methods:

###### create
````
create(properties?: ContactProperties)
````
The ````create```` method is synchronous, and returns a new Contact object.
This method does not retain the Contact object in the device contacts database, for which you need to invoke the
Contact.save method.

##### Example:
````js
var contacts = new Appworks.AWContacts();
var myContact = contacts.create({"displayName": "Test User"});
````

###### find
````
find(contactFields: string[], options? any)
````
The ````find```` method executes asynchronously, querying the device contacts database and returning an
array of Contact objects. The resulting objects are passed to the ````successHandler```` callback function
defined upon instance creation.

##### Example:
````js
function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};

function onError(contactError) {
    alert('onError!');
};

var contacts = new Appworks.AWContacts(onSuccess, onError);

// find all contacts with 'Bob' in any name field
var options = new ContactFindOptions();
options.filter = "Bob";
options.multiple = true;
options.desiredFields = [contacts.options.fieldType.id];
options.hasPhoneNumber = true;
var fields = [contacts.options.fieldType.displayName, contacts.options.fieldType.name];

contacts.find(fields, onSuccess, onError, options);
````

###### pickContact
````
pickContact()
````
The ````pickContact```` method launches the Contact Picker to select a single contact. The resulting object is
passed to the ````successHandler```` callback function specified upon instance creation.

##### Example:

````js
var contacts = new Appworks.AWContacts(onSuccess, onError);

contacts.pickContact(function(contact){
    console.log('The following contact has been selected:' + JSON.stringify(contact));
},function(err){
    console.log('Error: ' + err);
});
````

##### Objects:

#### Contact
The Contact object represents a user's contact. Contacts can be created, stored, or removed from the device contacts
database. Contacts can also be retrieved (individually or in bulk) from the database by invoking the ````find```` method.

Methods:
- clone
- save
- remove

Properties:
- id: A globally unique identifier. (DOMString)
- displayName: The name of this Contact, suitable for display to end users. (DOMString)
- name: An object containing all components of a persons name. (ContactName)
- nickname: A casual name by which to address the contact. (DOMString)
- phoneNumbers: An array of all the contact's phone numbers. (ContactField[])
- emails: An array of all the contact's email addresses. (ContactField[])
- addresses: An array of all the contact's addresses. (ContactAddress[])
- ims: An array of all the contact's IM addresses. (ContactField[])
- organizations: An array of all the contact's organizations. (ContactOrganization[])
- birthday: The birthday of the contact. (Date)
- note: A note about the contact. (DOMString)
- photos: An array of the contact's photos. (ContactField[])
- categories: An array of all the user-defined categories associated with the contact. (ContactField[])
- urls: An array of web pages associated with the contact. (ContactField[])

#### ContactAddress
The ContactAddress object stores the properties of a single address of a contact.
A Contact object may include more than one address in a ContactAddress[] array.

Properties:
- pref: Set to true if this ContactAddress contains the user's preferred value. (boolean)
- type: A string indicating what type of field this is, home for example. (DOMString)
- formatted: The full address formatted for display. (DOMString)
- streetAddress: The full street address. (DOMString)
- locality: The city or locality. (DOMString)
- region: The state or region. (DOMString)
- postalCode: The zip code or postal code. (DOMString)
- country: The country name. (DOMString)

#### ContactError
The ContactError object is returned to the user through the ````errorHandler```` callback function when an error occurs.

#### ContactField
The ContactField object is a reusable component that represents contact fields generically. Each ContactField object
contains a value, type, and pref property.
A Contact object stores several properties in ContactField[] arrays, such as phone numbers and email addresses.

Properties:
- type: A string that indicates what type of field this is, home for example. (DOMString)
- value: The value of the field, such as a phone number or email address. (DOMString)
- pref: Set to true if this ContactField contains the user's preferred value. (boolean)

#### ContactOrganization
The ContactOrganization object stores a contact's organization properties.
A Contact object stores one or more ContactOrganization objects in an array.

Properties:
- pref: Set to true if this ContactOrganization contains the user's preferred value. (boolean)
- type: A string that indicates what type of field this is, home for example. _(DOMString)
- name: The name of the organization. (DOMString)
- department: The department the contract works for. (DOMString)
- title: The contact's title at the organization. (DOMString)

Please see <a href="https://cordova.apache.org/docs/en/3.0.0/cordova/contacts/contacts.html">Cordova Documentation</a>
for full documentation on AWContacts related objects and API.

### Events

#### Battery
There are three events to hook into that will give you access to the device battery status. All three are attached to
the ````window````.

##### batterystatus
This event fires when the percentage of battery charge changes by at least 1 percent, or if the device is plugged in or
unplugged.

Example:

````js
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(info) {
    // Handle the online event
    console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
}
````

##### batterycritical
The event fires when the percentage of battery charge has reached the critical battery threshold.
The value is device-specific.

The ````batterycritical```` handler is passed an object that contains two properties:

- level: The percentage of battery charge (0-100). (Number)
- isPlugged: A boolean that indicates whether the device is plugged in. (Boolean)

````js
window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(info) {
    // Handle the battery critical event
    alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
}
````

##### batterylow
The event fires when the percentage of battery charge has reached the low battery threshold, device-specific value.

The ````batterylow```` handler is passed an object that contains two properties:

- level: The percentage of battery charge (0-100). (Number)
- isPlugged: A boolean that indicates whether the device is plugged in. (Boolean)

````js
window.addEventListener("batterylow", onBatteryCritical, false);

function onBatteryCritical(info) {
    // Handle the battery critical event
    alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
}
````

## Build
To build the compressed, minified appworks.js source and the uncompressed, commented code, open up your terminal at the appworks.js directory and type in the following commands

`npm install`

This will install of the dependencies required to build the library.

To build appworks-js

`grunt`

The final file can be found in `dist/appworks.min.js` and `dist/appworks.js`
