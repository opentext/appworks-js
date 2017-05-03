"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.MockFileTransfer = MockFileTransfer;
