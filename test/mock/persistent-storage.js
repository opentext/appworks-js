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
export { PersistentStorageMock };
//# sourceMappingURL=persistent-storage.js.map