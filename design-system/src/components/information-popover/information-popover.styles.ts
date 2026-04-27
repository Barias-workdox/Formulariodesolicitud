import type { InformationPopoverOverrides } from './information-popover.interfaces';
import type { DesignSystemTheme, StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Function to get popover shadow style. */
const getPopoverShadow = (theme: DesignSystemTheme): string =>
  `0px 8px 24px 0px ${theme.colors.neutralWashed}`;

/** Popover component overrides. */
export const customPopoverOverrides: InformationPopoverOverrides = {
  Body: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      margin: $theme.spacing.spacingMd,
      borderRadius: $theme.spacing.spacing2xs,
      border: `solid 1px ${$theme.colors.neutralSubtle}`,
      boxShadow: getPopoverShadow($theme),
    }),
  },
  Inner: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      display: 'flex',
      flexDirection: 'column',
      gap: $theme.spacing.spacingMd,
      padding: $theme.spacing.spacingXs,
      backgroundColor: $theme.colors.bgBase,
      borderRadius: 'inherit',
    }),
  },
  Arrow: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      border: `solid 1px ${$theme.colors.neutralSubtle}`,
      boxShadow: getPopoverShadow($theme),
      backgroundColor: $theme.colors.bgBase,
    }),
  },
};
