(function (window) {

    var cordova = {
        defaultLanguage: '',
        SessionInfo: {},
        getDefaultLanguage: function (successFn, errorFn) {
            if(this.defaultLanguage === 'undefined' || this.defaultLanguage === '') {
                return errorFn();
            }
            return successFn(this.defaultLanguage);
        },
        getOS: function (successFn, errorFn) {
            var json = this.getSessionInfo();
            if(this.json.clientOS === 'undefined' || this.json.clientOS === '') {
                return errorFn();
            }
            return successFn(json.clientOS);
        },
        getSessionInfo: function (successFn, errorFn) {
            if(this.SessionInfo === 'undefined' || this.SessionInfo === '') {
                return errorFn();
            }
            return successFn(this.SessionInfo);
        },
        /*** Grouped ***/
        closeMe: function (successFn, errorFn) {

            AppWorks.blackberryCommunication(JSON.stringify({
                    action: 'closeMe',
                    options : '',
                    callbackID : AppWorks.getNewCallbackId(),
                    errorCallbackID : AppWorks.getNewErrorCallbackId()
                }),
                // callback
                function (params) {
                    successFn(params.data);
                },
                // Error Callback
                function (params) {
                    errorFn(params.data);
                });

            AppWorks.blackberryCommunication(json);
        },
        closeApp: function (successFn, errorFn) {
            this.closeMe(successFn, errorFn);
        },
        closeme: function (successFn, errorFn) {
            this.closeMe(successFn, errorFn);
        },
        /*** /Grouped ***/
        log: function (log) {
            AppWorks.blackberryCommunication(JSON.stringify({
                action: 'log'
            }));
        },
        /**
         * We act as a pass-through for the native Cordova calls due to limitations
         * with the BB platform, the function will safely resolve the incoming
         * parameter array. We expect it to contain a request object at index 0, or
         * nothing at all.
         *
         * @param arr parameter array
         */
        processExecArrArg: function(arr) {
            return (typeof arr === 'undefined' || typeof arr[0] === 'undefined') ? {} : arr[0];
        },
        openCamera: function (successFn, errorFn, arr) {
            var args = this.processExecArrArg(arr);

            AppWorks.blackberryCommunication(JSON.stringify({
                    action: 'camera',
                    options: args,
                    callbackID: AppWorks.getNewCallbackId(),
                    errorCallbackID: AppWorks.getNewErrorCallbackId()
                }),
                // callback
                function (params) {
                    if (args.success) {
                        args.success(params.data);
                    }
                    successFn(params.data);
                },
                // Error Callback
                function (params) {
                    if(args.error) {
                        args.error(params.data);
                    }
                    errorFn(params.data);
                });
        },
        getFromGallery: function (successFn, errorFn, arr) {
            var args = this.processExecArrArg(arr);

            AppWorks.blackberryCommunication(JSON.stringify({
                    action: 'gallery',
                    options: args,
                    callbackID: AppWorks.getNewCallbackId(),
                    errorCallbackID: AppWorks.getNewErrorCallbackId()
                }),
                // callback
                function (params) {
                    if (args.success) {
                        args.success(params.data);
                    }
                    successFn(params.data);
                },
                // Error Callback
                function (params) {
                    if (args.error) {
                        args.error(params.data);
                    }
                    errorFn(params.data);
                });
        },
        openFilePicker: function (successFn, errorFn, arr) {
            var args = this.processExecArrArg(arr);

            AppWorks.blackberryCommunication(JSON.stringify({
                    action: 'filepicker',
                    options: args,
                    callbackID: AppWorks.getNewCallbackId(),
                    errorCallbackID: AppWorks.getNewErrorCallbackId()
                }),
                // callback
                function (params) {
                    if (args.success) {
                        args.success(params.data);
                    }
                    successFn(params.data);
                },
                // Error Callback
                function (params) {
                    if (args.error) {
                        args.error(params.data);
                    }
                    errorFn(params.data);
                });

        },
        http: function (successFn, errorFn, arr) {
            var args = this.processExecArrArg(arr);

            AppWorks.blackberryCommunication(JSON.stringify({
                    action: 'ajax',
                    options : args,
                    callbackID : AppWorks.getNewCallbackId(),
                    errorCallbackID : AppWorks.getNewErrorCallbackId()
                }),
                // callback
                function (params) {
                    if (args.success) {
                        args.success(params.data);
                    }
                    successFn(params.data);
                },
                // Error Callback
                function (params) {
                    if (args.error) {
                        args.error({ status:params.data.status, statusText:params.data.statusText });
                    }
                    errorFn({ status:params.data.status, statusText:params.data.statusText });
                });
        },
        authenticate: function (successFn, errorFn) {

            AppWorks.blackberryCommunication(JSON.stringify({
                    action: 'authenticate',
                    options : '',
                    callbackID : AppWorks.getNewCallbackId(),
                    errorCallbackID : AppWorks.getNewErrorCallbackId()
                }),
                // callback
                function (params) {
                    successFn(params.data);
                },
                // Error Callback
                function (params) {
                    errorFn(params.data);
                });
        },
        setDefaultLanguage: function (successFn, errorFn, data) {
            if (typeof(data) === 'object' && data.error) {
                return errorFn(data);
            }

            this.defaultLanguage = data;
            return successFn(data);
        },
        setSessionInfo: function(successFn, errorFn, data) {
            if (typeof(data) === 'object' && data.error) {
                return errorFn(data);
            }
            delete data.cmd;
            this.SessionInfo = data;
            return successFn(data);
        },
        initialize: function (callback) {
            // Setup mock success and error functions. All functions should have success and error functions
            var successFn = function () {},
                errorFn = function () {};

            // set the language and session info in nested sequence before allowing the
            // app to use cordova
            var req = JSON.stringify({
                action: 'getDefaultLanguage',
                callbackID: AppWorks.getNewCallbackId()
            });

            AppWorks.blackberryCommunication(req, function (message) {
                if (message.cmd === "getDefaultLanguage") {
                    cordova.setDefaultLanguage(successFn, errorFn, message.data);
                }

                if (AppWorks.isOnline(function (data) {
                        // if we are online then attempt to get the session info
                        if (data.isOnline == true) {
                            req = JSON.stringify({
                                action: 'getSessionInfo',
                                callbackID: AppWorks.getNewCallbackId()
                            });
                            AppWorks.blackberryCommunication(req, function (message) {
                                if (message.cmd === "getSessionInfo") {
                                    cordova.setSessionInfo(successFn, errorFn, message);
                                }
                                callback();
                            });
                        } else {
                            console.warn('device is offline, otag.auth will not be populated!');
                            // just fire the callback
                            callback();
                        }
                    }));
            });

        },
        launchAssignmentViewer: function (url) {
            var args = this.processExecArrArg(arr);

            AppWorks.blackberryCommunication(JSON.stringify({
                    action: 'launchAssignmentViewer',
                    options: args}));
        },
        isBB: function() {
            var ua = navigator.userAgent;
            if (ua.indexOf('BB10') >= 0 || ua.indexOf('BlackBerry')) {
                return true;
            }

            return false;
        },
        exec: function (successFn, errorFn, namespace, func, params) {
            var args;
            try {
                if (params.length > 0) {
                    // maps the function name to the actual member of this js
                    args = this[func](successFn, errorFn, params);
                }
                else {
                    // maps the function name to the actual member of this js, we need to pass an empty
                    // array here as we seem to have added
                    args = this[func](successFn, errorFn, []);
                }
            }
            catch(e) {
                return errorFn(e);
            }

            return args;
        },
        onDeviceReady: function () {
            // fire the deviceready event once we know cordova has been initialised
            this.initialize(function () {
                // any framework should provide a vanilla JavaScript catch for this event to back-up
                // their own eventing mechanism, we just fire the raw event
                var event = document.createEvent('Events');
                event.initEvent('deviceready', false, false);
                document.dispatchEvent(event);
            });
        }
    };

    if (!cordova.isBB())  {
        // only call the cordova.initialize() if we are NOT BB, the BB
        // WebView has an awkward load cycle that we have to listen to
        // specifically to avoid double loading issues
        cordova.initialize();
    }

    /**
     * Central callback handling for messages coming from the QML layer, the AppWorks.callbacks
     * array is used to store all of the request callbacks and should be available to the supporting
     * Js features, such as caching and our general JSON store.
     */
    if (navigator.cascades) {
        // Setup mock success and error functions. All functions should have success and error functions
        var successFn = function(){},
            errorFn = function(){};

        // setup handling if cascades was injected by BB
        try {
            var json,
                cback,
                errCback,
                cbackIdx = -1,
                errCbackIdx = -1;
            // subscribe to the QML messages
            navigator.cascades.onmessage = function onmessage(message) {

                try	{
                    message = JSON.parse(message);
                } catch(e) {}


                if (!window.otag || !window.otag.pageUUID) {
                    console.log("Unable to find BB pageUUID???");
                }

                try {
                    if (message.callbackID) {
                        // the id is comprised of a {pageUUID}_{arrayBasedIdx}
                        var cbackParts = message.callbackID.split('_');

                        if (cbackParts[0] != window.otag.pageUUID) {
                            console.log('Ignoring cascades message ' + message +
                            " callback was not intended for this page");
                        }

                        // !!! make sure Js knows this is number, else it may fail to find the first callback?!?
                        cbackIdx = parseInt(cbackParts[1], 10);
                    } else {
                        console.log('Ignoring cascades message ' + JSON.stringify(message));
                    }
                }
                catch(e) {
                    console.log('Ignoring cascades message ' + message +
                    ' unable to process page UUID and callback index');
                }

                cback = AppWorks.callbacks[cbackIdx];

                try {
                    // Try to get the callback index from our blackberry message
                    errCbackIdx = parseInt(message.errorCallbackID, 10);
                }
                catch(e) {
                    console.log("No error callback provided");
                }

                // If we have an error callback, call it and return to prevent fallthrough
                if (errCbackIdx > -1) {
                    errCback = AppWorks.errorCallbacks[errCbackIdx];
                    if (errCback) {
                        errCback(message);
                    } else {
                        console.log("Error callback triggered but not supplied");
                    }
                    return;
                }

                if (cback) {
                    cback(message);
                } else {
                    if (message.cmd === 'bbPageReady') {
                        cordova.onDeviceReady();
                    }
                    if (message.cmd === 'getDefaultLanguage') {
                        cordova.setDefaultLanguage(successFn, errorFn, message.data);
                    }
                    if (message.cmd === "getSessionInfo") {
                        cordova.setSessionInfo(successFn, errorFn, message);
                    }

                    console.log("Failed to process message " + JSON.stringify(message) +
                    " unable to resolve callback or command");
                }
            };

        } catch (e) {}
    }

    window.cordova = window.cordova || cordova;

})(window);