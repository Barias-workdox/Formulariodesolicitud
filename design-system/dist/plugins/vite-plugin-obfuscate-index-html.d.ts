import { TInputOptions } from 'javascript-obfuscator/typings/src/types/options/TInputOptions';
import { Plugin } from 'vite';
export interface VitePluginObfuscateIndexHtmlParams {
    obfuscateOptions?: TInputOptions;
}
/**
 * Creates a Vite plugin that obfuscates and minifies the index.html file and its inline JavaScript during the build process.
 * This plugin applies only to the index.html file processed by Vite.
 * It runs only during the build phase and after other plugins.
 *
 * @returns A Vite plugin object with post-build index.html transformation capabilities.
 */
export declare function vitePluginObfuscateIndexHtml({ obfuscateOptions, }?: VitePluginObfuscateIndexHtmlParams): Plugin;
