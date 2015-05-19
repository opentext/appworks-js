// define the AMD module
define('appworks-comms', ['appworks-core'], function (aw) {
    'use strict';

    // module definition
    var awComms = {
        /**
         * Open another app deployed within the AppWorks client container and pass it
         * data. We set info in the URL of the web view using this data so it can be parsed
         * by the destination app/component. Apps and components are uniquely identified by
         * name so a caller must know the specific name/s of its collaborating apps/components.
         *
         * We also allow clients to specify a function name ('method') that should be called
         * on arrival at the destination. You can also tell us to refresh the calling app when
         * control is returned to it.
         *
         * We expect the request object to be in a particular format, please use the supplied
         * convenience function, getOpenAppRequest, to form requests.
         *
         * @param requestObj the request
         */
        openApp: function (requestObj) {
            if (!requestObj || !requestObj.name) {
                throw new Error('Unable to open another app without the name of the app/component to open');
            }

            var json =
                '{'+
                '"action": "openApp", ' +
                '"commsRequest": ' +
                JSON.stringify(requestObj) +
                '}';

            // this is a one-way communication as we alter the URL of the web view
            // if there is an error though it will get returned to the cascades.onmessage
            // handler
            aw.blackberryCommunication(json);
        },
        /**
         * Check the window.location for the appWorksComms object, parse it contents and respond to the
         * the request if we are a reciever or the response if we are recieving a callback from a
         * component we have called.
         *
         * @param callback a callback we pass the resolved received or returned data to
         */
        processComms: function (callback) {
            // read the window.location
            var commsData = this.getCommsData();

            // check for the appworks item in the URL's params
            if (typeof commsData !== 'undefined') {
                if (commsData.method) {
                    this.callMethodFromComms(commsData.method, commsData.data);
                }
                if (typeof(callback) === 'function') {
                    callback(commsData.data);
                }
            }

        },
        callMethodFromComms: function (methodName, data) {
            // form a String for eval using the supplied function name and
            // optional data
            var toEval = 'window.';
            if (methodName) {
                toEval += methodName + '(';

                if (data) {
                    toEval += JSON.stringify(data);
                }

                // close off call
                toEval += ')';

                eval(toEval);
            } else {
                console.log('Unable lo callMethodFromComms as no methodName was supplied');
            }

        },
        /**
         * Extract the data passed from another app via the web view's window.location.search.
         */
        getCommsData: function () {

            var commsObj = null,
                decoded = null;

            try {
                // pull the contents after ?, it should only contain the
                decoded = decodeURIComponent(window.location.search.toString().substring(1));

                commsObj = JSON.parse(decoded);

                if (!commsObj.appWorksComms) {
                    console.log('parsed the window.location.search but did not find the appWorksComms data');
                    return {};
                }
            } catch(e) {
                console.log('failed to parse comms object from window.location - ' + decoded);
            }

            return (commsObj  && commsObj.appWorksComms) ? {} : commsObj.appWorksComms;
        },
        /**
         * Create a request to open another AppWorks app/component. Be sure to pass an empty
         * object or null to the function if you want to define the onReturnMethod argument.
         *
         * @param toName			the name of the app/component to open (mandatory)
         * @param toMethod			the name of the method (function) to call on opening
         * 							the destination app/component
         * @param refreshOnReturn	should we refresh this page when we come back to it?
         *
         * @return open app request object
         */
        getOpenAppRequest: function (toName, toMethod, toData, refreshOnReturn) {

            if (!toName) {
                throw new Error('"toName" is mandatory');
            }

            if (typeof refreshOnReturn !== 'boolean') {
                refreshOnReturn = false;
            }

            // form basic request with mandatory fields
            var openAppRequest = {
                name : toName,
                method : "",
                data : {},
                refreshOnReturn : refreshOnReturn
            };

            // the function to call when we get to the other app
            if (toMethod) {
                openAppRequest.method = toMethod;
            }

            // set the data to pass to the other app/component, it can decide
            // if it wants to pass it to the above function if defined
            if (toData) {
                openAppRequest.data = toData;
            }

            return openAppRequest;
        }
    };

    return awComms;
});