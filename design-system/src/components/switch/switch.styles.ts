import type { DesignSystemTheme } from '../../themes';
import type { CheckboxOverrides } from 'baseui/checkbox';
import type { StyleObject } from 'styletron-react';

/**
 * Generates the style overrides for a checkbox component based on the
 * provided theme and checked status.
 */
export const checkboxOverridesStyles = (
  theme: DesignSystemTheme,
  checked: boolean,
  disabled: boolean,
): CheckboxOverrides => ({
  Root: {
    style: (): StyleObject => ({
      alignItems: 'center',
    }),
  },
  Toggle: {
    style: (): StyleObject => ({
      boxShadow: theme.lighting.shadowBoxSwitch,
      backgroundColor: disabled
        ? theme.colors.neutralDepressed
        : checked
          ? theme.colors.positive
          : theme.colors.bgBase,
      ':hover': {
        boxShadow: checked ? null : theme.lighting.shadowDefault,
      },
      ':focus': {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.colors.brand,
      },
    }),
  },
  ToggleTrack: {
    style: (): StyleObject => ({
      margin: theme.spacing.spacing2xs,
      ':active': {
        backgroundColor: theme.colors.neutralDepressed,
      },
      ':focus': {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.colors.brand,
      },
    }),
  },
});

export const styles = {
  containerStyles: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  } as StyleObject,
};
