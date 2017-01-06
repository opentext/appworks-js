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
