import type { CheckboxControlProps } from '@components/forms/components/checkbox';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const checkboxOverrides: CheckboxControlProps['formControlOverrides'] = {
  ControlContainer: { style: { width: 'unset', margin: 0 } },
};

export const styles = {
  textStyles: (): StyleObject => ({
    maxWidth: '250px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  elementContainerStyles: (): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }),
  elementStyles: (theme: DesignSystemTheme): StyleObject => ({
    borderTopStyle: 'solid',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.colors.neutralWashed,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.spacingMd} ${theme.spacing.spacingXl}`,
  }),
  infoStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.spacingXs,
  }),
};
