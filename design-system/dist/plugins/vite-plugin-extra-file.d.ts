import { Plugin } from 'vite';
export interface vitePluginExtraFileParams {
    fileName?: string;
    content?: string;
}
/**
 * Creates a Vite plugin that adds an extra file to the build output directory.
 *
 * @returns A Vite plugin object with post-build file creation capabilities.
 */
export declare function vitePluginExtraFile({ fileName, content, }?: vitePluginExtraFileParams): Plugin;
