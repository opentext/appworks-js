"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.MockCompass = MockCompass;
//# sourceMappingURL=compass.js.map