import { PluginListenerHandle } from "@capacitor/core";
export interface FileSelectorPlugin {
    fileSelector(options: {
        id?: string;
        multipleSelection: boolean;
        ext: string[];
    }): Promise<HTMLInputElement>;
    addListener(eventName: 'onFilesSelected', listenerFunc: (state: any) => void): PluginListenerHandle;
}
