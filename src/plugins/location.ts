import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';

export class AWLocation extends AWPlugin {
    getCurrentPosition(options?: any) {
        return AWProxy.geolocation().getCurrentPosition(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    watchPosition(options?: any) {
        return AWProxy.geolocation().watchPosition(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    clearWatch(watchId: number) {
        AWProxy.geolocation().clearWatch(watchId);
    }
}
