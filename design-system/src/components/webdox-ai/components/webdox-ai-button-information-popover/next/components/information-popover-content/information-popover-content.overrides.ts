import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

export const actionButtonOverrides: ButtonOverrides = {
  BaseButton: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      borderColor: $theme.colors.neutralSubtle,
      padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingSm}`,
      height: 'fit-content',
      justifyContent: 'flex-start',
      ...$theme.typography.ParagraphSmall,
    }),
  },
};
