import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

export const desktopButtonOverrides: ButtonOverrides = {
  BaseButton: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      width: 'fit-content',
      display: 'none',

      [$theme.mediaQuery.large]: {
        display: 'inline-flex',
      },
    }),
  },
};

export const mobileButtonOverrides: ButtonOverrides = {
  BaseButton: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      width: 'fit-content',
      display: 'inline-flex',

      [$theme.mediaQuery.large]: {
        display: 'none',
      },
    }),
  },
};
