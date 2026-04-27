import { minify } from 'html-minifier-terser';
import JavascriptObfuscator from 'javascript-obfuscator';

import type { TInputOptions } from 'javascript-obfuscator/typings/src/types/options/TInputOptions';
import type { Plugin } from 'vite';

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
export function vitePluginObfuscateIndexHtml({
  obfuscateOptions = {},
}: VitePluginObfuscateIndexHtmlParams = {}): Plugin {
  return {
    name: 'vite-plugin-obfuscate',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      /**
       * Transforms the HTML content by minifying it and obfuscating inline JavaScript.
       *
       * @param html - The original HTML content to be transformed.
       * @returns A promise that resolves to the transformed HTML string or undefined.
       */
      async handler(html): Promise<string | undefined> {
        // Minify HTML
        const minifiedHtml = await minify(html, {
          collapseWhitespace: true,
          removeComments: true,
          minifyJS: false, // We'll handle JS minification separately
          minifyCSS: true,
        });

        // Obfuscate inline JavaScript
        const obfuscatedHtml = minifiedHtml.replace(
          /<script(\s+[^>]*)?>([\s\S]*?)<\/script>/gi,
          (match: string, attributes: string, content: string) => {
            // Check if the script tag has a src attribute
            if (attributes && attributes.includes('src=')) {
              return match; // Don't obfuscate external scripts
            }

            // Check if the script type is JavaScript or not specified
            const typeAttr = attributes ? attributes.match(/type\s*=\s*["']([^"']+)["']/) : null;
            const scriptType = typeAttr ? typeAttr[1].toLowerCase() : 'text/javascript';

            if (
              scriptType === 'text/javascript' ||
              scriptType === 'application/javascript' ||
              scriptType === 'module'
            ) {
              const obfuscatedJs = JavascriptObfuscator.obfuscate(content, {
                compact: true,
                controlFlowFlattening: false,
                deadCodeInjection: false,
                debugProtection: false,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                rotateStringArray: true,
                selfDefending: true,
                stringArray: true,
                stringArrayEncoding: ['base64'],
                stringArrayThreshold: 0.8,
                transformObjectKeys: true,
                ...obfuscateOptions,
              }).getObfuscatedCode();

              return `<script${attributes || ''}>${obfuscatedJs}</script>`;
            }

            return match; // Return unmodified for non-JavaScript scripts
          },
        );

        return obfuscatedHtml;
      },
    },
  };
}
