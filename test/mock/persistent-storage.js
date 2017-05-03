"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersistentStorageMock = (function () {
    function PersistentStorageMock() {
    }
    PersistentStorageMock.prototype.persistLocalStorage = function () {
        return Promise.resolve();
    };
    PersistentStorageMock.prototype.loadPersistentData = function () {
        return Promise.resolve();
    };
    return PersistentStorageMock;
}());
exports.PersistentStorageMock = PersistentStorageMock;
//# sourceMappingURL=persistent-storage.js.map