import { StyledInput, getRootStyles } from './input';

import type { InputKind, InputProps } from './input';
import type { DesignSystemTheme, StyleOverrideProps } from '../../themes';
import type { InputOverrides, SharedProps } from 'baseui/input';
import type { StyleObject } from 'styletron-standard';

export interface InputStyleParams {
  $isFocused: boolean;
  $error: boolean;
  $disabled: boolean;
  $positive: boolean;
  $theme: DesignSystemTheme;
  $kind?: InputKind;
  $hasIconTrailing?: boolean;
  $isBorderless?: boolean;
  $adjoined?: SharedProps['$adjoined'];
}

/**
 * Get the bottom border color for the Root component
 */
export const getBottomBorderColor = ({
  $isFocused,
  $positive,
  $error,
  $disabled,
  $theme,
  $isBorderless,
}: InputStyleParams): string => {
  if ($disabled) {
    return $theme.colors.neutralSubtle;
  }

  if ($error) {
    return $theme.colors.negativeSubdued;
  }

  if ($isFocused) {
    return $theme.colors.neutralStrong;
  }

  if ($positive) {
    return $theme.colors.positiveSubdued;
  }

  if ($isBorderless) {
    return 'transparent';
  }

  return $theme.colors.neutralWashed;
};

/**
 * Get the input base styles overrides by its "type" and "kind"
 */
export const getInputBaseOverrides = (
  type: InputProps['type'],
  kind: InputProps['kind'],
  $isBorderless: boolean,
  dataTestId?: string,
): InputOverrides => ({
  StartEnhancer: {
    style: {
      backgroundColor: 'transparent',
      padding: $isBorderless ? 0 : undefined,
    },
  },
  EndEnhancer: {
    style: {
      backgroundColor: 'transparent',
      paddingLeft: $isBorderless ? 0 : undefined,
      paddingRight: 0,
      ...(type === 'password' && { display: 'none' }),
    },
  },
  Input: {
    component: StyledInput,
    props: {
      'data-testid': dataTestId,
      $kind: kind,
      $isBorderless,
    },
  },
  InputContainer: {
    style: {
      backgroundColor: 'transparent',
    },
  },
  Root: {
    style: ({
      $isFocused,
      $error,
      $positive,
      $disabled,
      $adjoined,
      $theme,
    }: StyleOverrideProps<SharedProps>): StyleObject => ({
      ...getRootStyles({
        $isFocused,
        $error,
        $positive,
        $kind: kind,
        $disabled,
        $theme,
        $isBorderless,
        $adjoined,
      }),
      ...(type === 'password' && { paddingRight: 0 }),
    }),
  },
});
