import { AWProxy } from "../../common/proxy";
var DesktopStorage = (function () {
    function DesktopStorage(desktopPlugin) {
        this.desktopStorage = desktopPlugin;
    }
    DesktopStorage.prototype.persistLocalStorage = function () {
        var _this = this;
        if (this.desktopStorage === null) {
            return Promise.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }
        return new Promise(function (resolve, reject) {
            var i, data = [], key, value;
            var storage = AWProxy.storage();
            for (i = 0; i < storage.length; i += 1) {
                key = storage.key(i);
                value = storage.getItem(key);
                data.push({ key: key, value: value });
            }
            var setter = function (obj) { return _this.desktopStorage.setItem(obj.key, obj.value); };
            Promise.all(data.map(setter)).then(resolve, reject);
        });
    };
    DesktopStorage.prototype.loadPersistentData = function () {
        var _this = this;
        if (this.desktopStorage === null) {
            return Promise.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }
        return new Promise(function (resolve, reject) {
            try {
                // get data is actually synchronous
                var data = _this.desktopStorage.getData();
                var storage = AWProxy.storage();
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        storage.setItem(key, data[key]);
                    }
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    return DesktopStorage;
}());
export { DesktopStorage };
DesktopStorage.PLUGIN_NOT_FOUND = new Error('Unable to resolve AWStorage desktop plugin');
//# sourceMappingURL=desktop-storage.js.map