"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockGeolocation = (function () {
    function MockGeolocation() {
    }
    MockGeolocation.prototype.clearWatch = function (watchId) {
    };
    MockGeolocation.prototype.getCurrentPosition = function (successCallback, errorCallback, options) {
    };
    MockGeolocation.prototype.watchPosition = function (successCallback, errorCallback, options) {
        return null;
    };
    return MockGeolocation;
}());
exports.MockGeolocation = MockGeolocation;
