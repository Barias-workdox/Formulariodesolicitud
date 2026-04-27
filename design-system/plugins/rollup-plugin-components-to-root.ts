import fs from 'fs';
import path from 'path';

import { globSync } from 'glob';

import { compilerOptions } from '../tsconfig.json';

import type { Plugin } from 'rollup';

/**
 * Plugin to create root level imports for components
 * This plugin creates a similar structure of the components from the root exporting each its files.
 * Example: `import { Text } from '@webdoxclm/design-system/text'`;
 */
export const rollupPluginComponentsToRoot = (): Plugin => {
  return {
    name: 'componentsToRoot',
    closeBundle: async (): Promise<void> => {
      try {
        // 1. Get all .js and .d.ts files paths
        const files = globSync(path.join(compilerOptions.outDir, 'components/**/*{.d.ts,.js}'));

        // 2. Process each file
        for (const filePath of files) {
          const { name, dir, ext } = path.parse(filePath);
          const folderPath = dir.replace('components/', '');
          const newFilePath = path.resolve(folderPath, `${name}${ext}`);
          const componentPath = folderPath.replace('dist/', '');
          const subfoldersLength = (componentPath.match(/\//g) || []).length + 1;
          const importPath = `${'../'.repeat(subfoldersLength)}components/${componentPath}/${name}${ext === '.js' ? ext : ''}`;

          // 3. Ensure the directory exists
          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }

          // 4. Create the reference file
          fs.writeFileSync(newFilePath, `export * from '${importPath}'`, 'utf-8');
        }
      } catch (e) {
        console.error('Error in componentsToRootPlugin:', e);
      }
    },
  };
};
