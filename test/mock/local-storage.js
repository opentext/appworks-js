"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockLocalStorage = (function () {
    // allow tests to set a value if they need to
    function MockLocalStorage(len) {
        this.length = isNaN(len) ? 0 : len;
    }
    MockLocalStorage.prototype.getItem = function (key) {
        return null;
    };
    MockLocalStorage.prototype.setItem = function (key, value) {
    };
    MockLocalStorage.prototype.removeItem = function (key) {
    };
    MockLocalStorage.prototype.clear = function () {
    };
    MockLocalStorage.prototype.key = function (index) {
        return null;
    };
    return MockLocalStorage;
}());
exports.MockLocalStorage = MockLocalStorage;
//# sourceMappingURL=local-storage.js.map