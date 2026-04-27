import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import { vitePluginSvgComponent } from './plugins/vite-plugin-svg-component';
import { buildExcludedFilesPattern, rootDir } from './vite.config';

const coverageExcludedFilesPattern = [...buildExcludedFilesPattern, '*.styles'];

// Environment detection
const isCI = process.env.CI === 'true';

export default defineConfig({
  plugins: [tsConfigPaths(), vitePluginSvgComponent()],
  test: {
    dir: rootDir,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    watch: false,

    // Timeout configuration
    testTimeout: isCI ? 30000 : 10000, // Longer timeout for slower CI environments

    // Memory and performance settings
    logHeapUsage: isCI,

    // CI stability and resource limits
    bail: isCI ? 1 : 0, // Stop early on first failure in CI
    allowOnly: !isCI, // Block .only in CI

    // Coverage configuration
    coverage: {
      provider: 'v8',
      all: !isCI, // Full coverage analysis locally, disabled in CI for speed,
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'assets/**',
        'interfaces/**',
        'locales/**',
        'plugins/**',
        'test/**',
        'types/**',
        '**/index.{ts,tsx}',
        '**/*.interface.ts',
        '**/*.interfaces.ts',
        '**/interfaces/**',
        'src/**/__tests__/**',
        'src/**/__mocks__/**',
        'src/**/__stories__/**',
        'src/**/__snapshots__/**',
        `**/{${coverageExcludedFilesPattern.join(',')}}.{ts,tsx}`,
      ],
      reporter: isCI
        ? ['clover', 'cobertura', 'json', 'lcov', 'text-summary']
        : ['clover', 'cobertura', 'json', 'lcov', 'text'],
      skipFull: isCI, // Skip full coverage processing in CI
    },

    // Reporting configuration
    reporters: isCI ? [['default', { summary: false }], 'junit'] : ['verbose', 'junit'],
    outputFile: {
      junit: 'junit.xml',
    },
    silent: isCI,

    // Dependency optimization
    server: {
      deps: {
        inline: ['@webdoxclm/document-viewer-front', '@webdoxclm/design-system'],
      },
    },

    // CI-specific optimizations
    passWithNoTests: true,
    dangerouslyIgnoreUnhandledErrors: isCI,
  },
});
