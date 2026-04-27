import { commonStyles } from '../../../data-table.styles';

import type { DesignSystemTheme } from '../../../../../../themes';
import type { StyleObject } from 'styletron-react';

export const styles = {
  actionButtonStyles: (theme: DesignSystemTheme, { isDisabled = false }): StyleObject => ({
    ...commonStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDisabled ? theme.colors.neutralWashed : theme.colors.neutralBase,
    color: isDisabled ? theme.colors.neutralDepressed : theme.colors.neutralSubdued,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    border: `1px solid ${theme.colors.neutralSubtle}`,
    borderRadius: '4px',
    outline: 'none',
    boxShadow: 'none',
    width: '24px',
    height: '24px',
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
