import { glob } from 'glob';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vitePluginExternal from 'vite-plugin-external';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import packageJson from './package.json';
import { rollupPluginComponentsToRoot } from './plugins/rollup-plugin-components-to-root';
import { rollupPluginRemoveUnwanted } from './plugins/rollup-plugin-remove-unwanted';
import { vitePluginSvgComponent } from './plugins/vite-plugin-svg-component';

export const buildExcludedFilesPattern = ['*.stories', '*.test', '*.mock', '*.mocks', '*.d'];

export const rootDir = 'src';

export default defineConfig({
  logLevel: process.env.CI ? 'warn' : 'info',
  plugins: [
    tsConfigPaths(),
    dts({
      compilerOptions: { rootDir },
      exclude: [`src/**/{${buildExcludedFilesPattern.join(',')}}.*`],
      logLevel: process.env.CI ? 'silent' : 'info',
    }),
    vitePluginExternal({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(packageJson.peerDependencies),
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/themes/*.css',
          dest: 'themes',
        },
        {
          src: 'src/themes/v3/*.css',
          dest: 'themes/v3',
        },
      ],
    }),
    vitePluginSvgComponent(),
  ],
  build: {
    sourcemap: true,
    reportCompressedSize: false,
    lib: {
      entry: glob.sync(`src/!(test)/**/!(${buildExcludedFilesPattern.join('|')})*.{ts,tsx}`),
      name: packageJson.name,
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        preserveModules: true,
        preserveModulesRoot: rootDir,
        entryFileNames: '[name].js',
      },
      plugins: [rollupPluginComponentsToRoot(), rollupPluginRemoveUnwanted()],
    },
  },
});
