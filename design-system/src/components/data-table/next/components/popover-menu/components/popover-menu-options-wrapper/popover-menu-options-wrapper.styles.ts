import type { DesignSystemTheme } from '../../../../../../../themes';
import type { StyleObject } from 'styletron-react';

export const styles = {
  optionsWrapperStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    borderBottom: `1px solid ${theme.colors.divisionLine}`,
  }),
};
