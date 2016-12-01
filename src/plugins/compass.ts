import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';

export class AWCompass extends AWPlugin {
    getCurrentHeading() {
        return AWProxy.compass().getCurrentHeading(
            (() => this.successHandler)(),
            (() => this.errorHandler)()
        );
    }

    watchHeading(options?: any) {
        return AWProxy.compass().watchHeading(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    clearWatch(watchId: number) {
        return AWProxy.compass().clearWatch(watchId);
    }
}
