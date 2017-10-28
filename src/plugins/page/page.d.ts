import { AWPlugin } from '../../common/plugin';
export declare class AWPage extends AWPlugin {
    setPageUrl(url: string): void;
    openModalAppWebView(url: string, title: string, closeTitle: string): void;
    openModalExternalWebView(url: string, title: string, closeTitle: string, options?: object): void;
    setActionButtonCallback(callback: any, actionTitle: string): void;
    closeModalAppWebView(): void;
    video(success: any, error: any, url: string): void;
}
