import { ThemedCarbonIcon } from '@components/themed-carbon-icon';

import type { InputStyleParams, PhoneInputBaseOverridesProps } from './phone-input.interfaces';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { PhoneInputOverrides } from 'baseui/phone-input';
import type { StyleObject } from 'styletron-react';

/**
 * Get the border color for the Input Root component
 */
const getBorderColor = ({ $isFocused, $positive, $error, $theme }: InputStyleParams): string => {
  if ($isFocused) {
    return $theme.colors.brand;
  }

  if ($error) {
    return $theme.colors.negative;
  }

  if ($positive) {
    return $theme.colors.positive;
  }

  return 'transparent';
};

/**
 * Get the phone input base styles overrides
 */
export const getPhoneInputBaseOverrides = ({
  dataTestId,
}: PhoneInputBaseOverridesProps): PhoneInputOverrides => ({
  Input: {
    props: {
      overrides: {
        Root: {
          style: ({
            $isFocused,
            $error,
            $positive,
            $disabled,
            $theme,
          }: StyleOverrideProps): StyleObject => ({
            borderWidth: '1px',
            backgroundColor: $theme.colors.neutralWashed,
            outline: 'none',
            borderColor: getBorderColor({
              $error,
              $isFocused,
              $positive,
              $theme,
            }),

            ':hover': {
              borderColor: $disabled ? 'transparent' : $theme.colors.neutralDepressed,
            },
          }),
        },
        InputContainer: {
          style: {
            backgroundColor: 'transparent',
          },
        },
        Input: {
          props: {
            'data-testid': `${dataTestId}--tel-input`,
          },
          style: ({ $theme, $disabled }) => ({
            fontSize: $theme.typography.ParagraphMedium.fontSize,
            color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.neutralSubdued,

            ':focus': {
              color: $theme.colors.neutral,
            },
            ':hover': {
              color: $theme.colors.neutralSubdued,
            },
          }),
        },
      },
    },
  },
  FlagContainer: {
    style: {
      fontSize: '22px',
    },
  },
  DialCode: {
    style: ({ $theme, $disabled }) => ({
      fontSize: $theme.typography.ParagraphMedium.fontSize,
      color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.neutralSubdued,

      ':focus': {
        color: $theme.colors.neutral,
      },
    }),
  },
  CountrySelect: {
    props: {
      overrides: {
        ControlContainer: {
          props: {
            'data-testid': `${dataTestId}--country-select`,
          },
          style: ({ $theme }) => ({
            border: 'none',
            backgroundColor: $theme.colors.neutralWashed,
            height: '100%',
          }),
        },
        SelectArrow: {
          props: {
            overrides: {
              Svg: {
                component: () => (
                  <ThemedCarbonIcon
                    icon="ChevronDown"
                    size={16}
                    themeColor="neutralSubdued"
                  />
                ),
              },
            },
          },
        },
      },
    },
  },
  CountrySelectDropdown: {
    style: {
      padding: 0,
    },
  },
  CountrySelectDropdownListItem: {
    style: ({ $theme }) => ({
      borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
    }),
  },
  CountrySelectDropdownNameColumn: {
    style: ({ $theme }) => ({
      padding: `0 ${$theme.spacing.spacingXs}`,
      color: $theme.colors.neutralSubdued,
      ...$theme.typography.ParagraphSmall,
    }),
  },
  CountrySelectDropdownDialcodeColumn: {
    style: ({ $theme }) => ({
      color: $theme.colors.neutralSubdued,
      ...$theme.typography.ParagraphSmall,
    }),
  },
});
