import type { BorderedRadioProps } from './bordered-radio';
import type { DesignSystemTheme } from '../../../../themes';
import type { RadioOverrides } from 'baseui/radio';
import type { StyleObject } from 'styletron-standard';

/** Style overrides for BorderedRadio component */
export const getOverrides = ({
  'data-testid': dataTestId,
}: Pick<BorderedRadioProps, 'data-testid'>): RadioOverrides => ({
  Root: {
    props: {
      'data-testid': dataTestId,
    },
    style: ({ $theme, $checked }): StyleObject => ({
      alignItems: 'center',
      backgroundColor: $checked ? $theme.colors.brandWashed : $theme.colors.bgBase,
      border: `1px solid ${$checked ? $theme.colors.brand : $theme.colors.divisionLine}`,
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      gap: $theme.spacing.spacing2xs,
      padding: `12px 12px ${$theme.spacing.spacingXl} 12px`,
      transition: 'background-color 0.3s ease',
      ':hover': {
        backgroundColor: $checked ? $theme.colors.brandWashed : $theme.colors.neutralBase,
      },
      alignSelf: 'stretch',
      margin: 0,
    }),
  },
  RadioMarkOuter: {
    style: ({
      $theme,
      $checked,
    }: {
      $theme: DesignSystemTheme;
      $checked: boolean;
    }): StyleObject => ({
      alignSelf: 'flex-start',
      backgroundColor: 'transparent',
      border: `1px solid ${$checked ? $theme.colors.brand : $theme.colors.neutralSubdued}`,
      height: '14px',
      width: '14px',
    }),
  },
  RadioMarkInner: {
    style: ({
      $theme,
      $checked,
    }: {
      $theme: DesignSystemTheme;
      $checked: boolean;
    }): StyleObject => ({
      backgroundColor: $checked ? $theme.colors.brand : 'transparent',
    }),
  },
  Label: {
    style: {
      padding: 0,
    } as StyleObject,
  },
});
