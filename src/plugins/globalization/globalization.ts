import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';
import {Util} from '../../common/util';

export class AWGlobalization extends AWPlugin {
    constructor() {
        super(Util.noop, Util.noop);
    }

    getPreferredLanguage(successFn: Function, errorFn?: Function) {
        AWProxy.exec(
            successFn,
            errorFn,
            'AWGlobalization',
            'getPreferredLanguage',
            []
        );
    }
}