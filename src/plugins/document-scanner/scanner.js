var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AWPlugin } from '../../common/plugin';
import { AWProxy } from '../../common/proxy';
var Scanner = (function (_super) {
    __extends(Scanner, _super);
    function Scanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scanner.prototype.scanDocument = function (returnType, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWScanner', 'scanDocument', [returnType]);
    };
    return Scanner;
}(AWPlugin));
export { Scanner };
var AWScanner = (function (_super) {
    __extends(AWScanner, _super);
    function AWScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWScanner;
}(Scanner));
export { AWScanner };
//# sourceMappingURL=scanner.js.map