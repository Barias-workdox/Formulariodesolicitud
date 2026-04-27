import { commonStyles } from '../../../data-table.styles';

import type { DesignSystemTheme } from '../../../../../themes';
import type { StyleObject } from 'styletron-react';

const BUTTON_SIZE = '24px';

export const styles = {
  actionButtonStyles: (theme: DesignSystemTheme, { isDisabled = false }): StyleObject => ({
    ...commonStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    backgroundColor: isDisabled ? theme.colors.neutralWashed : theme.colors.neutralBase,
    color: isDisabled ? theme.colors.neutralDepressed : theme.colors.neutralSubdued,
    border: `1px solid ${theme.colors.neutralSubtle}`,
    borderRadius: '4px',
    outline: 'none',
    boxShadow: 'none',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    padding: 0,
    ...(!isDisabled && {
      ':hover': {
        backgroundColor: theme.colors.neutralSubtle,
      },
      ':focus-visible': {
        outline: `2px solid ${theme.colors.brandSubdued}`,
      },
    }),
  }),
};
