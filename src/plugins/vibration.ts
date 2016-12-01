import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';
import {Util} from '../util';

export class AWVibration extends AWPlugin {

    constructor() {
        super(Util.noop, Util.noop);
    }

    vibrate(time: number) {
        return AWProxy.vibrate(time);
    }
}