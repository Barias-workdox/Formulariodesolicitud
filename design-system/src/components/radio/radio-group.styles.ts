import type { DesignSystemTheme, StyleOverrideProps } from '../../themes';
import type { RadioGroupProps, RadioOverrides } from 'baseui/radio';
import type { StyleObject } from 'styletron-standard';

/** All override props for the Radio Group component */
export const radioOverrides = (dataTestId: string): RadioOverrides => {
  return {
    RadioMarkOuter: {
      style: ({
        $theme,
        $disabled,
        $checked,
        $isHovered,
        $isFocusVisible,
      }: {
        $theme: DesignSystemTheme;
        $disabled: boolean;
        $checked: boolean;
        $isHovered: boolean;
        $isFocusVisible: boolean;
      }): StyleObject => ({
        width: '16px',
        height: '16px',
        ...(!$checked && {
          background: $theme.colors.neutralSubdued,
        }),

        ...(!$disabled &&
          $isHovered && {
            boxShadow: `0 0 0 ${$theme.sizing.scale200} ${$theme.colors.tickFillHover}`,
          }),
        ...($isFocusVisible && {
          boxShadow: `0 0 0 ${$theme.sizing.scale100} ${$theme.colors.tickFillHover},
          0 0 0 ${$theme.sizing.scale200} ${$theme.colors.brand}`,
          outline: 'none',
        }),
      }),
      props: {
        'data-testid': dataTestId,
      },
    },
    RadioMarkInner: {
      style: ({
        $theme,
        $checked,
        $disabled,
      }: {
        $theme: DesignSystemTheme;
        $checked: boolean;
        $disabled: boolean;
      }): StyleObject => ({
        ...(!$checked && {
          width: 'calc(100% - 2px)',
          height: 'calc(100% - 2px)',
          transform: undefined,
        }),
        ...($disabled && {
          background: $theme.colors.bgBase,
        }),
      }),
    },
    Label: {
      style: ({ $theme }: StyleOverrideProps) => ({
        ...$theme.typography.ParagraphSmall,
        color: $theme.colors.neutralSubdued,
      }),
    },
  };
};

/**
 * Retrieves overrides for the Radio Group component
 */
export const getRadioGroupOverrides = ({
  rowGap,
  columnGap,
  dataTestId,
  ref,
}: Record<string, unknown>): RadioGroupProps['overrides'] => ({
  RadioGroupRoot: {
    props: {
      'data-testid': `${dataTestId}-radio-group-root`,
      tabIndex: 0,
      ref,
    },
    style: {
      rowGap,
      columnGap,
    },
  },
});
