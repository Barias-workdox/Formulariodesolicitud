import type { ForwardedRef, MutableRefObject } from 'react';

import { Calendar } from '@carbon/icons-react';

import { Input } from '@components/input/next';
import { ThemedCarbonIcon } from '@components/themed-carbon-icon';
import { COMMON_FONT_SIZE_14, COMMON_HEIGHT_24 } from '@constants/common.constants';

import type { DatepickerProps } from './datepicker';
import type { EnhancerType } from '@components/input/next';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { Datepicker, DatepickerOverrides } from 'baseui/datepicker';
import type { StyleObject } from 'styletron-react';

type GetOverridesParams = WithZIndex &
  WithTestId & {
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    name?: string;
    isLoading?: boolean;
    kind?: DatepickerProps['kind'];
    leading?: EnhancerType;
    readOnly?: boolean;
    ref?: ForwardedRef<Datepicker>;
    showCopyContentButton?: boolean;
    size?: DatepickerProps['size'];
    width?: StyleObject['width'];
  };

const HEADER_HEIGHT = '30px';
const DAY_SIZE = '45px';

/**
 * Returns the overrides for the Datepicker component.
 */
export const getDatepickerOverrides = ({
  dataTestId,
  inputRef,
  name,
  isLoading,
  kind,
  leading,
  readOnly,
  ref,
  showCopyContentButton,
  size,
  width,
  zIndex,
}: GetOverridesParams = {}): DatepickerOverrides => {
  /**
   * The styles for the previous and next buttons in the datepicker.
   */
  const getPrevNextButtonStyles = ({ $theme, $disabled }: StyleOverrideProps): StyleObject => ({
    width: COMMON_HEIGHT_24,
    height: COMMON_HEIGHT_24,
    color: $disabled ? $theme.colors.neutralSubtle : $theme.colors.neutralSubdued,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    ':hover': {
      color: !$disabled ? $theme.colors.neutral : undefined,
    },
  });

  return {
    Root: {
      props: {
        ref,
      },
      style: ({ $theme }: StyleOverrideProps) => ({
        padding: $theme.spacing.spacingXs,
      }),
    },
    CalendarHeader: {
      style: ({ $theme }: StyleOverrideProps) => ({
        gap: $theme.spacing.spacingMd,
        minHeight: COMMON_HEIGHT_24,
        width: 'auto',
      }),
    },
    WeekdayHeader: {
      style: ({ $theme }: StyleOverrideProps) => ({
        ...$theme.typography.ParagraphSmall,
        color: $theme.colors.neutral,
        height: HEADER_HEIGHT,
        width: DAY_SIZE,
        padding: 0,
        lineHeight: HEADER_HEIGHT,
      }),
    },
    Week: {
      style: {
        margin: 0,
      },
    },
    CalendarContainer: {
      props: {
        'data-testid': `${dataTestId}--calendar`,
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
        $outsideMonth,
      }: StyleOverrideProps): StyleObject => ({
        margin: 0,
        fontSize: COMMON_FONT_SIZE_14,
        userSelect: 'none',
        height: DAY_SIZE,
        width: DAY_SIZE,
        lineHeight: DAY_SIZE,
        padding: 0,
        color: $disabled
          ? $theme.colors.neutralSubtle
          : $selected
            ? $theme.colors.textBase
            : $theme.colors.neutral,
        cursor: $disabled ? 'not-allowed' : $outsideMonth ? undefined : 'pointer',
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
          themeColor="neutralSubdued"
        />
      ),
    },
    PrevButton: {
      props: {
        'data-testid': `${dataTestId}__prev-button`,
      },
      style: getPrevNextButtonStyles,
    },
    PrevButtonIcon: {
      component: () => <ThemedCarbonIcon icon="ArrowLeft" />,
    },
    NextButton: {
      props: {
        'data-testid': `${dataTestId}__next-button`,
      },
      style: getPrevNextButtonStyles,
    },
    NextButtonIcon: {
      component: () => <ThemedCarbonIcon icon="ArrowRight" />,
    },
    MonthYearSelectButton: {
      style: ({ $theme }: StyleOverrideProps) => ({
        ...$theme.typography.ParagraphSmall,
        height: COMMON_HEIGHT_24,
        textTransform: 'capitalize',
        padding: 0,
        gap: $theme.spacing.spacingXs,
        color: $theme.colors.neutral,
        ':hover': {
          color: $theme.colors.neutralStrong,
        },
      }),
    },
    InputWrapper: {
      style: {
        width,
      },
      props: {
        'data-testid': `${dataTestId}--input-wrapper`,
      },
    },
    Input: {
      component: Input,
      props: {
        'data-testid': dataTestId,
        inputRef,
        isLoading,
        kind,
        leading,
        readOnly,
        showCopyContentButton,
        size,
        ...(name && { name }),
        startEnhancer: <Calendar />,
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
