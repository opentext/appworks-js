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
open(path: string, filename: string)
````
open a file in another iOS app installed on the device
- <b>path</b>: the path to the file you would like to open
- <b>filename</b>: the name of the file you would like to open

````
openDirect(filename: string)
````
open a file in another iOS app installed on the device
- <b>filename</b>: the name of the file you would like to open at the application root

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

````
onprogress=
````
bind a progress function to be passed progress events while the request is being downloaded when ````store()```` is
called.

#### AWFileTransfer
The File Transfer plugin allows you to upload and download files to and from the device. Additionally, it allows you
to download files to a shared container where they may be accessed by third party applications installed on the device.

##### Methods:
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

````
progressHandler(callback: (data: any) => void)
````
define a callback to be executed whenever upload or download progress is made
- <b>callback</b>: a function to be executed during upload or download. passed a ProgressEvent object.
````
abort()
````
abort the current transfer.

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
create
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

find
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

pickContact
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
