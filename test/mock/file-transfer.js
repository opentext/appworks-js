var MockFileTransfer = (function () {
    function MockFileTransfer() {
    }
    MockFileTransfer.prototype.upload = function (fileURL, server, successCallback, errorCallback, options, trustAllHosts) {
    };
    MockFileTransfer.prototype.download = function (source, target, successCallback, errorCallback, trustAllHosts, options) {
    };
    MockFileTransfer.prototype.abort = function () {
    };
    return MockFileTransfer;
}());
export { MockFileTransfer };
//# sourceMappingURL=file-transfer.js.map