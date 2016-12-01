import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';

export class AWContacts extends AWPlugin {

    create(contact: any) {
        return AWProxy.contacts().create(contact);
    }

    find(fields: any, options?: any) {
        return AWProxy.contacts().find(
            fields,
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    pickContact() {
        return AWProxy.contacts().pickContact((() => this.successHandler)(), (() => this.errorHandler)());
    }
}
