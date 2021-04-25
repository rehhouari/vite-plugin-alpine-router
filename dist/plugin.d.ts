import type { Plugin } from 'vite';
import 'vite/hmr';
declare type PluginConfig = {
    selector: string;
};
declare const _default: (config?: PluginConfig) => Plugin;
export default _default;
