import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class AWAccelerometer extends AWPlugin {
    getCurrentAcceleration() {
        return AWProxy.accelerometer().getCurrentAcceleration(
            (() => this.successHandler)(),
            (() => this.errorHandler)()
        );
    }

    watchAcceleration(options?: any) {
        return AWProxy.accelerometer().watchAcceleration(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    clearWatch(watchId: number) {
        return AWProxy.accelerometer().clearWatch(watchId);
    }
}



