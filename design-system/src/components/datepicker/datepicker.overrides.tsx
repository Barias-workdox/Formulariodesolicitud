import type { ForwardedRef, MutableRefObject } from 'react';

import { StyledRoot, getInputStyle, getKindBackgroundColor } from '@components/input';
import { ThemedCarbonIcon } from '@components/themed-carbon-icon';
import { COMMON_FONT_SIZE_14 } from '@constants/common.constants';
import { DEFAULT_FONT } from '@tokens';

import type { DatepickerProps } from './datepicker';
import type { DesignSystemColorType } from '@themes/theme.interfaces';
import type { Datepicker, DatepickerOverrides } from 'baseui/datepicker';
import type { StyleObject } from 'styletron-react';

type GetOverridesParams = {
  ref: ForwardedRef<Datepicker>;
  inputRef: MutableRefObject<HTMLInputElement>;
  dataTestId: string;
  zIndex: number;
  $kind: DatepickerProps['kind'];
};

/**
 * Returns the color for the input end enhancer based on the provided props.
 */
const getInputEndEnhancerColor = ({ $disabled, $positive, $error }): DesignSystemColorType => {
  return $disabled
    ? 'neutralDepressed'
    : $error
      ? 'negative'
      : $positive
        ? 'positive'
        : 'neutralSubdued';
};

/**
 * Returns the overrides for the Datepicker component.
 */
export const getDatepickerOverrides = ({
  ref,
  inputRef,
  dataTestId,
  zIndex,
  $kind,
}: GetOverridesParams): DatepickerOverrides => {
  /**
   * The styles for the previous and next buttons in the datepicker.
   */
  const getPrevNextButtonStyles = ({ $theme, $disabled }): StyleObject => ({
    width: '24px',
    height: '24px',
    color: $disabled ? $theme.colors.neutralSubtle : $theme.colors.neutralSubdued,
    cursor: $disabled ? 'not-allowed' : undefined,
    ':hover': {
      color: !$disabled ? $theme.colors.neutral : undefined,
    },
  });

  return {
    Root: {
      props: {
        ref,
      },
      style: ({ $theme }) => ({
        padding: $theme.spacing.spacingXs,
      }),
    },
    CalendarHeader: {
      style: ({ $theme }) => ({
        gap: $theme.spacing.spacingXl,
      }),
    },
    WeekdayHeader: {
      style: ({ $theme }) => ({
        fontWeight: 400,
        height: 'auto',
        fontSize: COMMON_FONT_SIZE_14,
        color: $theme.colors.neutral,
        ...DEFAULT_FONT,
      }),
    },
    Week: {
      style: {
        margin: 0,
      },
    },
    Day: {
      style: ({
        $theme,
        $isHighlighted,
        $pseudoHighlighted,
        $pseudoSelected,
        $selected,
        $isHovered,
        $disabled,
      }): StyleObject => ({
        margin: 0,
        fontSize: COMMON_FONT_SIZE_14,
        ...DEFAULT_FONT,
        color: $disabled
          ? $theme.colors.neutralSubtle
          : $selected
            ? $theme.colors.textBase
            : $theme.colors.neutralSubdued,
        cursor: $disabled ? 'not-allowed' : undefined,
        ':first-child::before': {
          borderRadius: '0%!important',
        },
        ':last-child::before': {
          borderRadius: '0%!important',
        },
        ':before': {
          borderWidth: 0,
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: $isHighlighted
            ? $theme.colors.brandSubtle
            : $pseudoSelected || $pseudoHighlighted
              ? $theme.colors.brandSubtle
              : undefined,
        },
        ':after': {
          borderWidth: 0,
          borderRadius: 0,
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          border: $isHovered ? `1px solid ${$theme.colors.brandSubdued}` : undefined,
          backgroundColor: $selected
            ? $theme.colors.brandSubdued
            : $isHighlighted
              ? $theme.colors.brandSubtle
              : $theme.colors.calendarBackground,
        },
      }),
    },
    Popover: {
      props: {
        overrides: {
          Body: {
            style: {
              zIndex,
            },
          },
        },
      },
    },
    MonthYearSelectIconContainer: {
      component: () => (
        <ThemedCarbonIcon
          icon="ChevronDown"
          size={16}
          themeColor="neutral"
        />
      ),
    },
    PrevButton: {
      style: getPrevNextButtonStyles,
    },
    PrevButtonIcon: {
      props: {
        overrides: {
          Svg: {
            component: () => (
              <ThemedCarbonIcon
                icon="ArrowLeft"
                size={16}
              />
            ),
          },
        },
      },
    },
    NextButton: {
      style: getPrevNextButtonStyles,
    },
    NextButtonIcon: {
      props: {
        overrides: {
          Svg: {
            component: () => (
              <ThemedCarbonIcon
                icon="ArrowRight"
                size={16}
              />
            ),
          },
        },
      },
    },
    MonthYearSelectButton: {
      style: ({ $theme }) => ({
        color: $theme.colors.neutral,
        fontSize: COMMON_FONT_SIZE_14,
        fontWeight: 400,
        height: '24px',
        textTransform: 'capitalize',
        padding: 0,
        gap: $theme.spacing.spacingXs,
        ...DEFAULT_FONT,
      }),
    },
    InputWrapper: {
      props: {
        'data-testid': `${dataTestId}--input-wrapper`,
      },
    },
    Input: {
      props: {
        inputRef,
        endEnhancer: (endEnhancerProps) => (
          <ThemedCarbonIcon
            icon="Calendar"
            size={16}
            themeColor={getInputEndEnhancerColor(endEnhancerProps)}
          />
        ),
        overrides: {
          Input: {
            props: {
              'data-testid': dataTestId,
              $kind,
            },
            style: ({ $theme, $isFocused }) => ({
              ...getInputStyle({ $theme, $kind, $isFocused }),
              ':disabled': {
                backgroundColor: getKindBackgroundColor($kind, $theme),
                cursor: 'not-allowed',
              },
            }),
          },
          Root: {
            component: StyledRoot,
            props: {
              $kind,
            },
          },
          EndEnhancer: {
            style: {
              paddingLeft: 0,
              paddingRight: '10px',
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
    MonthYearSelectPopover: {
      props: {
        overrides: {
          Body: {
            style: {
              zIndex,
            },
          },
        },
      },
    },
  };
};
