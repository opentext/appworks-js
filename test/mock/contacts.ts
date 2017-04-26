import {Contact, ContactError, ContactFindOptions, ContactProperties, Contacts} from '../../src/plugins/contacts/index';
export class MockContacts implements Contacts {
    fieldType: any;

    constructor() {
        this.fieldType = {};
    }

    create(properties?: ContactProperties): Contact {
        return null;
    }

    find(fields: string[],
         onSuccess: (contacts: Contact[]) => void,
         onError?: (error: ContactError) => void,
         options?: ContactFindOptions): void {
    }

    pickContact(onSuccess: (contact: Contact) => void,
                onError: (error: ContactError) => void): void {
    }
}
