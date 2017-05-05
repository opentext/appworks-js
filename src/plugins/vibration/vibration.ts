import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';
import {Util} from '../../common/util';

export class AWVibration extends AWPlugin {

    constructor() {
        super(Util.noop, Util.noop);
    }

    vibrate(time: number) {
        return AWProxy.vibrate(time);
    }
}