import { ariaKeyDownHandler } from '../../utils/accessibility.utils';

import type { SwitchOverridesParams } from './switch.interface';
import type { CheckboxOverrides } from 'baseui/checkbox';
import type { StyleObject } from 'styletron-react';

/**
 * Generates the overrides for a switch component based on the
 * provided checked status and accessibility props.
 */
export const switchOverrides = ({
  checked,
  disabled,
  handleToggle,
  dataTestId,
  ariaDescribedBy,
  ariaLabelledBy,
  ariaLabel,
  labelPlacement,
}: SwitchOverridesParams): CheckboxOverrides => {
  return {
    Root: {
      style: (): StyleObject => ({
        alignItems: labelPlacement === 'top' ? 'flex-start' : 'center',
        borderRadius: '4px',
        outline: 'none',
      }),
      props: {
        'data-testid': dataTestId,
        id: ariaLabelledBy,
      },
    },
    Label: {
      style: (): StyleObject => ({
        alignItems: labelPlacement === 'top' ? 'flex-end' : 'center',
        justifyContent: labelPlacement === 'top' ? 'flex-end' : 'flex-start',
      }),
    },
    ToggleTrack: {
      style: ({ $theme }): StyleObject => ({
        backgroundColor: $theme.colors.neutralSubtle,
      }),
    },
    Toggle: {
      style: ({ $theme }): StyleObject => {
        const focusStyles = !disabled
          ? {
              borderRadius: '24px',
              outline: `2px solid ${$theme.colors.neutralStrong}`,
              outlineOffset: '2px',
            }
          : {};

        return {
          boxShadow: 'none',
          ...(!checked && {
            border: `1px solid ${$theme.colors.neutralSubtle}`,
          }),
          boxSizing: 'border-box',
          backgroundColor:
            disabled && checked
              ? $theme.colors.neutralDepressed
              : disabled
                ? $theme.colors.iconBase
                : checked
                  ? $theme.colors.positive
                  : $theme.colors.iconBase,
          ':hover': !disabled
            ? {
                boxShadow: checked
                  ? `0px 1px 4px ${$theme.colors.positiveSubtle}, 0 0 0 8px ${$theme.colors.positiveSubtle}80`
                  : `0px 1px 4px ${$theme.colors.neutralWashed}, 0 0 0 8px ${$theme.colors.neutralWashed}80`,
              }
            : {},
          ':focus': focusStyles,
          ':focus-visible': focusStyles,
        };
      },
      props: {
        role: 'switch',
        'aria-checked': checked,
        tabIndex: disabled ? -1 : 0,
        'aria-describedby': ariaDescribedBy,
        'aria-labelledby': ariaLabelledBy,
        'aria-label': ariaLabel,
        onKeyDown: ariaKeyDownHandler(handleToggle),
      },
    },
  };
};
