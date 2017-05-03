import { MockLocalStorage } from "../../../test/mock/local-storage";
/**
 * Web local storage wrapper that hooks into the native persistent layer on mobile and desktop
 * The local and persistent storage are kept in, sync with update being flushed, and the local web
 * storage always acting as the reference.
 */
var AWStorage = (function () {
    function AWStorage() {
        // resolve the local storage or fall back onto a mock impl
        this.storage = (typeof window !== 'undefined') ?
            window.localStorage : new MockLocalStorage();
    }
    Object.defineProperty(AWStorage.prototype, "length", {
        get: function () {
            return this.storage ? this.storage.length : -1;
        },
        enumerable: true,
        configurable: true
    });
    AWStorage.prototype.clear = function () {
        this.storage.clear();
    };
    AWStorage.prototype.getItem = function (key) {
        return this.storage.getItem(key);
    };
    AWStorage.prototype.key = function (index) {
        return this.storage.key(index);
    };
    AWStorage.prototype.removeItem = function (key) {
        return this.storage.removeItem(key);
    };
    AWStorage.prototype.setItem = function (key, data) {
        return this.storage.setItem(key, data);
    };
    return AWStorage;
}());
export { AWStorage };
//# sourceMappingURL=storage.js.map