import { Buffer } from 'buffer';
import fs from 'fs';

import { createFilter } from '@rollup/pluginutils';
import { transform } from '@svgr/core';
import jsx from '@svgr/plugin-jsx';
import { transformWithEsbuild } from 'vite';

import type { FilterPattern } from '@rollup/pluginutils';
import type { Config } from '@svgr/core';
import type { Plugin } from 'vite';

/**
 * Vite plugin for transforming SVG files into React components.
 * This plugin reads SVG files, transforms them into React components using SVGR,
 * and exports them along with their file paths.
 *
 * For more information, see the SVGR documentation: {@link https://www.npmjs.com/package/vite-plugin-svgr?activeTab=readme}
 */
export function vitePluginSvgComponent(): Plugin {
  // File filter for SVG files
  const filter: FilterPattern = '**/*.svg';

  return {
    name: 'vite-plugin-svg-component',
    enforce: 'pre',

    async load(id: string): Promise<{ code: string; map: null }> {
      if (createFilter(filter)(id)) {
        // Read SVG code from file
        const svgCode = await fs.promises.readFile(id, 'utf8');

        // Transform SVG code into React component
        const componentCode = await transform(
          svgCode,
          { exportType: 'named', namedExport: 'ReactComponent' } as Config,
          {
            filePath: id,
            caller: {
              defaultPlugins: [jsx],
            },
          },
        );

        const svgDataURL = `data:image/svg+xml;base64,${Buffer.from(svgCode).toString('base64')}`;

        // Append file path export to component code
        const componentCodeWithFilePath = `
          ${componentCode}
          const path = ${JSON.stringify(svgDataURL)};
          export default path
        `;

        // Transform component code with ESBuild
        const res = await transformWithEsbuild(componentCodeWithFilePath, id, {
          loader: 'jsx',
        });

        // Return transformed code object
        return {
          code: res.code,
          map: null,
        };
      }
    },
  };
}
