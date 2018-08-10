import { AWPlugin } from "../../common/plugin";
export declare class Print extends AWPlugin {
    print(options?: any): void;
    getPrinters(): void;
    printToPDF(options?: any): void;
}
export declare class AWPrint extends Print {
}
