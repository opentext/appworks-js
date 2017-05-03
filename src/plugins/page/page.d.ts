import { AWPlugin } from '../../common/plugin';
export declare class AWPage extends AWPlugin {
    setPageUrl(url: string): void;
    openModalAppWebView(url: string, title: string): void;
    openModalExternalWebView(url: string, title: string): void;
    setActionButtonCallback(callback: any): void;
    closeModalAppWebView(): void;
}
