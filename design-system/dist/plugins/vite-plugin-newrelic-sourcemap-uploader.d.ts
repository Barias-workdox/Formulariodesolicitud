import { PluginOption } from 'vite';
export interface NewRelicSourcemapUploaderPluginOptions {
    key: string;
    applicationId: string;
    baseUrl: string;
    runInDevelopment?: boolean;
    enabled?: boolean;
    removeSourcemaps?: boolean;
}
/**
 * This plugin is used to upload source maps to newrelic.
 */
export declare const newRelicSourcemapUploader: ({ key, applicationId, baseUrl, runInDevelopment, enabled, removeSourcemaps, }: NewRelicSourcemapUploaderPluginOptions) => PluginOption;
