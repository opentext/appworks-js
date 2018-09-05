/**
 * @module
 * @description
 * Entry point from which you should import all public appworks APIs.
 */
import {AWProxy} from './common/proxy';

export {AWAccelerometer} from './plugins/accelerometer/index';
export {AWAnonymous} from './plugins/anonymous';
export {AWAppManager} from './plugins/app-manager/index';
export {AWAuth} from './plugins/auth/index';
export {AWCache} from './plugins/storage/index';
export {AWCalendar} from './plugins/calendar/index';
export {AWCamera} from './plugins/camera/index';
export {AWCompass} from './plugins/device-orientation/index';
export {AWComponent} from './plugins/component/index';
export {AWContacts} from './plugins/contacts/index';
export {AWDevice} from './plugins/device/index';
export {AWFileChooser} from './plugins/file/index';
export {AWFileSystem} from './plugins/file/index';
export {AWFileTransfer} from './plugins/file-transfer/index';
export {AWFinder} from './plugins/finder/index';
export {AWGlobalization} from './plugins/globalization/index';
export {AWHeader, AWHeaderBar} from './plugins/header/index';
export {AWKeyboard} from './plugins/keyboard/index';
export {AWLauncher} from './plugins/launcher/index';
export {AWLocation} from './plugins/location/index';
export {AWMedia} from './plugins/media/index';
export {AWMediaCapture} from './plugins/media-transfer/index';
export {AWMenu} from './plugins/menu/index';
export {AWMobileFileSystem} from './plugins/mobile-file-system/index';
export {AWNotificationManager} from './plugins/notifications/index';
export {AWOfflineManager} from './plugins/offline/index';
export {AWPage} from './plugins/page/index';
export {AWPlugin} from './common/plugin';
export {AWProxy} from './common/proxy';
export {AWQRReader} from './plugins/qr-reader/index';
export {AWRealm} from './plugins/realm';
export {AWPrint} from './plugins/print/index';
export {AWScanner} from './plugins/document-scanner/index';
export {AWStorage} from './plugins/storage/index';
export {AWVibration} from './plugins/vibration/index';
export {AWWebView} from './plugins/webview/index';
export {DesktopStorage} from './plugins/storage/index';
export {LocalFileSystem} from './plugins/file/index';
export {OnDeviceStorage} from './plugins/storage/index';
export {SecureStorage, AWSecureStorage} from './plugins/storage/index';
export {isFunction, noop, isDesktopEnv, isMobileEnv} from './common/util';
