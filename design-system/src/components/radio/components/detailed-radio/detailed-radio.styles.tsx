import type { DetailedRadioProps } from './detailed-radio';
import type { DesignSystemTheme } from '../../../../themes';
import type { RadioOverrides } from 'baseui/radio';
import type { StyleObject } from 'styletron-standard';

/** All override props for the Radio component */
export const detailedRadioOverrides = ({
  'data-testid': dataTestId,
}: Pick<DetailedRadioProps, 'data-testid'>): RadioOverrides => {
  return {
    Root: {
      style: ({
        $theme,
        $checked,
      }: {
        $theme: DesignSystemTheme;
        $checked: boolean;
      }): StyleObject => ({
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: $checked ? $theme.colors.brandWashed : $theme.colors.bgBase,
        border: `1px solid ${$checked ? $theme.colors.brand : $theme.colors.neutralSubtle}`,
        display: 'flex',
        flexDirection: 'row',
        gap: $theme.spacing.spacingXs,
        padding: $theme.spacing.spacingXl,

        ':hover': {
          backgroundColor: $theme.colors.neutralWashed,
        },
      }),
      props: {
        'data-testid': dataTestId,
      },
    },
    Label: {
      style: {
        width: '100%',
      },
    },
    RadioMarkInner: {
      style: ({ $checked }: { $checked: boolean }): StyleObject => ({
        height: $checked ? '6px' : '12px',
        width: $checked ? '6px' : '12px',
      }),
    },
    RadioMarkOuter: {
      style: (): StyleObject => ({
        height: '16px',
        width: '16px',
      }),
    },
  };
};
