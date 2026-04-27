import { withoutVitePlugins } from '@storybook/builder-vite';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },

  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    './data-testid-addon/register.tsx',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {},

  viteFinal: async (config) => {
    return {
      ...config,
      plugins: await withoutVitePlugins(config.plugins, ['vite-plugin-external']),
      server: {
        ...config.server,
        allowedHosts: true,
      },
    };
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
