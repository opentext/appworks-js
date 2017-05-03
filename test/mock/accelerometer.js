var MockAccelerometer = (function () {
    function MockAccelerometer() {
    }
    MockAccelerometer.prototype.getCurrentAcceleration = function (accelerometerSuccess, accelerometerError, accelerometerOptions) {
        return null;
    };
    MockAccelerometer.prototype.watchAcceleration = function (accelerometerSuccess, accelerometerError, accelerometerOptions) {
        return null;
    };
    MockAccelerometer.prototype.clearWatch = function (watchID) {
    };
    return MockAccelerometer;
}());
export { MockAccelerometer };
//# sourceMappingURL=accelerometer.js.map