import fs from 'fs';
import path from 'path';

import { compilerOptions } from '../tsconfig.json';

import type { Plugin } from 'rollup';

/**
 * Plugin to remove unwanted files and directories from the build output
 */
export const rollupPluginRemoveUnwanted = (): Plugin => {
  return {
    name: 'removeUnwanted',
    closeBundle: (): void => {
      const directoryPath = path.join(compilerOptions.outDir, 'test');

      if (fs.existsSync(directoryPath)) {
        fs.rm(directoryPath, { recursive: true }, (err) => {
          if (err) {
            console.error('Error removing directory:', err);
          } else {
            console.log(`Directory '${directoryPath}' removed successfully.`);
          }
        });
      }
    },
  };
};
