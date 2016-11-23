/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/contacts/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWContacts extends AWPlugin implements Contacts {

    options = navigator.contacts;
    fieldType = null;

    create(contact: any) {
        return navigator.contacts.create(contact);
    }

    find(fields: any, options?: any) {
        navigator.contacts.find(
            fields,
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    pickContact() {
        navigator.contacts.pickContact((() => this.successHandler)(), (() => this.errorHandler)());
    }
}
