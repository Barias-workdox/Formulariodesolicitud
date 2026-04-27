import { labelFontStyle } from '../form-control/components';

import { BORDER_WIDTH, CHECK_MARK_SIZE } from './checkbox.constants';

import type { DesignSystemTheme, StyleOverrideProps } from '../../themes';
import type { CheckboxOverrides } from 'baseui/checkbox';
import type { Font } from 'baseui/theme';
import type { StyleObject } from 'styletron-react';

/**
 * If labelAsFormControl is true return the label font styles else return a `paragraphSmall`
 */
const getLabelStyle = ({
  $theme,
  labelAsFormControl,
}: {
  $theme: DesignSystemTheme;
  labelAsFormControl: boolean;
}): StyleObject | Partial<Font> =>
  labelAsFormControl ? labelFontStyle({ $theme }) : $theme.typography.ParagraphSmall;

/**
 * Custom overrides styles for the checkbox component
 */
export const checkmarkStyleOverrides = ({
  $isFocused,
  $isHovered,
  $theme,
}: StyleOverrideProps): StyleObject => ({
  borderRadius: BORDER_WIDTH,
  borderWidth: BORDER_WIDTH,
  height: CHECK_MARK_SIZE,
  width: CHECK_MARK_SIZE,

  ...($isHovered &&
    !$isFocused && {
      outline: `${$theme.colors.neutralWashed} solid 6px`,
    }),

  ...($isFocused && {
    outline: `${$theme.colors.brand} solid 2px`,
    outlineOffset: '3px',
  }),
});

/** Custom overrides styles for the checkbox component  */
export const checkboxOverridesStyles = ({
  dataTestId,
  labelAsFormControl,
  overrides,
}: {
  dataTestId: string;
  labelAsFormControl: boolean;
  overrides: CheckboxOverrides;
}): CheckboxOverrides => ({
  Label: {
    style: ({ $theme, $labelPlacement }): StyleObject => ({
      ...getLabelStyle({ $theme, labelAsFormControl }),
      margin: 0,
      wordBreak: 'break-word',
      ...($labelPlacement === 'right' && { paddingLeft: '10px' }),
      ...($labelPlacement === 'left' && { paddingRight: '10px' }),
    }),
    ...overrides.Label,
  },
  Checkmark: {
    style: checkmarkStyleOverrides,
    props: {
      'data-testid': `${dataTestId}--checkmark`,
    },
    ...overrides.Checkmark,
  },
  Root: {
    props: {
      'data-testid': dataTestId,
    },
    style: {
      alignItems: 'center',
    },
    ...overrides.Root,
  },
  Input: {
    props: {
      'data-testid': `${dataTestId}--input`,
    },
  },
});
