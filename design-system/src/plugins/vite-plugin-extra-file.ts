import { promises as fs } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import type { Plugin } from 'vite';

export interface vitePluginExtraFileParams {
  fileName?: string;
  content?: string;
}

/**
 * Creates a Vite plugin that adds an extra file to the build output directory.
 *
 * @returns A Vite plugin object with post-build file creation capabilities.
 */
export function vitePluginExtraFile({
  fileName = 'file.txt',
  content = '',
}: vitePluginExtraFileParams = {}): Plugin {
  return {
    name: 'vite-plugin-extra-file',
    async writeBundle(outputOptions): Promise<void> {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      const path = resolve(__dirname, outputOptions.dir, fileName);

      await fs.writeFile(path, `${content}\n`);
    },
  };
}
