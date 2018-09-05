import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';
import {noop} from '../../common/util';

export class AWVibration extends AWPlugin {

  constructor() {
    super(noop, noop);
  }

  vibrate(time: number) {
    return AWProxy.vibrate(time);
  }
}
