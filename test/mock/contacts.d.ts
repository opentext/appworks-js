import { Contact, ContactError, ContactFindOptions, ContactProperties, Contacts } from "../../src/plugins/contacts/index";
export declare class MockContacts implements Contacts {
    fieldType: any;
    constructor();
    create(properties?: ContactProperties): Contact;
    find(fields: string[], onSuccess: (contacts: Contact[]) => void, onError?: (error: ContactError) => void, options?: ContactFindOptions): void;
    pickContact(onSuccess: (contact: Contact) => void, onError: (error: ContactError) => void): void;
}
