import type { RadioGroupControlContainerProps } from '@components/forms';
import type { RadioGroupProps } from '@components/radio/radio-group.interfaces';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Styles for the sectioned modal header
 */
export const getSectionedModalHeaderStyles = ({ $theme }: StyleOverrideProps): StyleObject => ({
  color: $theme.colors.neutral,
  height: $theme.spacing.spacing3xl,
  padding: $theme.spacing.spacingLg,
  alignContent: 'center',
  boxSizing: 'initial',
});

/**
 * Styles for the sectioned modal body
 */
export const getStyledSectionedModalBodyStyles = ({ $theme }: StyleOverrideProps): StyleObject => ({
  padding: `${$theme.spacing.spacingXl} ${$theme.spacing.spacingLg}`,
  gap: $theme.spacing.spacingXs,
});

/**
 * Styles for the sectioned modal footer
 */
export const getSectionedModalFooterStyles = ({ $theme }: StyleOverrideProps): StyleObject => ({
  padding: $theme.spacing.spacingLg,
});

export const radioGroupOverrides: RadioGroupProps['overrides'] = {
  Radio: {
    RadioMarkOuter: {
      style: ({ $theme, $checked }) => ({
        ...($checked && { backgroundColor: $theme.colors.power }),
      }),
    },
    Label: {
      style: ({ $theme }: StyleOverrideProps) => ({
        ...$theme.typography.ParagraphMedium,
      }),
    },
  },
};

export const formControlOverrides: RadioGroupControlContainerProps['formControlOverrides'] = {
  ControlContainer: {
    style: {
      margin: 0,
    },
  },
};
