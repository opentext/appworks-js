var MockCompass = (function () {
    function MockCompass() {
    }
    MockCompass.prototype.getCurrentHeading = function (onSuccess, onError, options) {
    };
    MockCompass.prototype.watchHeading = function (onSuccess, onError, options) {
        return null;
    };
    MockCompass.prototype.clearWatch = function (id) {
    };
    return MockCompass;
}());
export { MockCompass };
//# sourceMappingURL=compass.js.map