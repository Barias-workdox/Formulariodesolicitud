import { checkmarkStyleOverrides } from '@components/checkbox/checkbox.styles';

import type { CheckboxProps } from '@components/checkbox';
import type { RadioGroupControlProps, TextareaControlProps } from '@components/forms';
import type { DetailedRadioProps } from '@components/radio/components/detailed-radio';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const detailedRadioOverrides: DetailedRadioProps['overrides'] = {
  Root: {
    style: ({ $theme, $checked }: StyleOverrideProps): StyleObject => ({
      padding: $theme.spacing.spacingXs,
      borderRadius: $theme.spacing.spacingXs,

      ':hover': {
        backgroundColor: $theme.colors.sweetWashed,
      },
      ...($checked && {
        backgroundColor: $theme.colors.sweetWashed,
        border: `1px solid ${$theme.colors.sweet}`,
      }),
    }),
  },
  Description: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      ...$theme.typography.ParagraphSmall,
      fontWeight: 'normal',
    }),
  },
  RadioMarkOuter: {
    style: ({ $theme, $checked }: StyleOverrideProps) => ({
      ...($checked && {
        backgroundColor: $theme.colors.sweet,
      }),
    }),
  },
};

export const radioWithoutMarkOverrides: DetailedRadioProps['overrides'] = {
  ...detailedRadioOverrides,
  RadioMarkOuter: {
    style: {
      display: 'none',
    },
  },
};

export const detailedRadioWithTextareaOverrides: DetailedRadioProps['overrides'] = {
  Root: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      padding: $theme.spacing.spacingXs,
      paddingRight: $theme.spacing.spacingMd,
      alignItems: 'start',
    }),
  },
};

export const textareaOverrides: TextareaControlProps['overrides'] = {
  Root: {
    style: ({ $theme, $isFocused }: StyleOverrideProps): StyleObject => ({
      ...($isFocused && {
        borderColor: $theme.colors.sweet,
      }),
    }),
  },
};

export const radioGroupControlOverrides: RadioGroupControlProps['overrides'] = {
  Caption: {
    style: {
      display: 'none',
    },
  },
};

export const checkboxOverrides: CheckboxProps['overrides'] = {
  Root: {
    style: ({ $theme, $checked }: StyleOverrideProps): StyleObject => ({
      padding: $theme.spacing.spacingXs,
      borderRadius: $theme.spacing.spacingXs,
      alignItems: 'center',
      backgroundColor: $theme.colors.bgBase,
      border: `1px solid ${$theme.colors.neutralSubtle}`,

      ':hover': {
        backgroundColor: $theme.colors.sweetWashed,
      },
      ...($checked && {
        backgroundColor: $theme.colors.sweetWashed,
        border: `1px solid ${$theme.colors.sweet}`,
      }),
    }),
  },
  Checkmark: {
    style: (props: StyleOverrideProps): StyleObject => {
      const { $theme, $isFocused, $checked } = props;

      return {
        ...checkmarkStyleOverrides(props),
        outline: 'unset',

        ...($isFocused && {
          outline: `${$theme.colors.sweet} solid 2px`,
          outlineOffset: '3px',
          backgroundColor: $theme.colors.sweetWashed,
        }),

        ...($checked && {
          backgroundColor: $theme.colors.sweet,
        }),
      };
    },
  },
};
