import { themedStyled } from '@themes/utilities';
import { getTransitionStyles } from '@utils/styles.utils';

import { DATA_TABLE_Z_INDEX } from './data-table.constants';

import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const commonStyles: StyleObject = {
  transition: getTransitionStyles(['background-color', 'border', 'opacity', 'outline']),
  boxSizing: 'border-box',
};

/**
 * Returns the styles for the table container.
 */
export const getTableContainerStyles = ({ $theme }: StyleOverrideProps): StyleObject => ({
  position: 'relative',
  zIndex: DATA_TABLE_Z_INDEX.base,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  flex: 1,
  border: `1px solid ${$theme.colors.neutralSubtle}`,
  boxSizing: 'border-box',
  backgroundColor: $theme.colors.bgBase,
  overflow: 'auto',
  scrollbarWidth: 'thin',
});

export const StyledTableContainer = themedStyled('div', getTableContainerStyles);

export const StyledColumnsContainer = themedStyled('div', {
  display: 'flex',
  flex: 1,
  scrollbarWidth: 'thin',
  width: 'fit-content',
  minWidth: '100%',
});

export const StyledWrapper = themedStyled('div', ({ $theme }) => ({
  ...commonStyles,
  position: 'relative',
  display: 'flex',
  minHeight: '100%',
  flex: 1,
  backgroundColor: $theme.colors.bgBase,
}));

export const StyledEmptyMessageWrapper = themedStyled('div', {
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
