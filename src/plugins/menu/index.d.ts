export * from "./menu";
export interface MenuSection {
    /**
     * the title of the section
     */
    subhead: string;
    /**
     * the items to add to this section
     */
    items: MenuItem[];
}
export interface MenuItem {
    /**
     * the title text to use for the menu item
     */
    title: string;
    /**
     * the callback to invoke when the user taps the menu item
     */
    action: any;
    /**
     * is the menu item visible?
     */
    visible: boolean;
    /**
     * does the menu item have a badge? e.g. Notifications (1)
     */
    hasBadge: boolean;
}
