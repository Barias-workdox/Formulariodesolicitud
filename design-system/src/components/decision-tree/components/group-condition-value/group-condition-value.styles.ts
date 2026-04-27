import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { DatepickerOverrides } from 'baseui/datepicker';
import type { InputOverrides } from 'baseui/input';
import type { StyleObject } from 'styletron-react';

export const inputOverrides: InputOverrides = {
  Input: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      fontSize: $theme.typography.ParagraphSmall.fontSize,
      padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingSm}`,
    }),
  },
};

export const dateInputOverrides: DatepickerOverrides = {
  Input: {
    props: {
      overrides: {
        Input: inputOverrides.Input,
      },
    },
  },
};
