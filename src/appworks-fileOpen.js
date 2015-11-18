function AppworksFileOpen()
{
    console.log("in AppworksFileOpen");
    'use strict';

    // args is an array consisting of [path, filename]
    //// path = string, path from the file sandbox root which is added by the client
    //// fileName = name of the file, to be appended to the end of the path
    //// End result will be [file:///app file sandbox]/[path/to/your/file]/[fileName.xxx]
    function fileOpen(successFn, errorFn, args) {
        if (cordova) {
            console.log("in AppworksFileOpen.fileOpen");
            cordova.exec(successFn, errorFn, 'fileOpenCordovaPlugin', 'fileOpen', args);
        } else {
            console.error('Cordova must be loaded');
        }
    }

    // args will consist of [file url]
    //// File url is the full url to the file you wish to open.
    //// It is assumed the file:///, app file sansbox url, path and filename in the string. If this is not the case, use fileOpen instead
    //// this must also be url encoded
    function fileOpenDirect(successFn, errorFn, args) {
        if (cordova) {
            console.log("in AppworksFileOpen.fileOpenDirect");
            cordova.exec(successFn, errorFn, 'fileOpenCordovaPlugin', 'fileOpenDirect', args);
        } else {
            console.error('Cordova must be loaded');
        }
    }

    //path = array, path from the file sandbox root which is added by the client
    function fileList(successFn, errorFn, args) {
        if (cordova) {
            console.log("in AppworksFileOpen.fileList");
            cordova.exec(successFn, errorFn, 'fileOpenCordovaPlugin', 'fileList', args);
        } else {
            console.error('Cordova must be loaded');
        }
    }

    return {
        fileOpen: fileOpen,        
        fileList: fileList,
        fileOpenDirect: fileOpenDirect
    };
}