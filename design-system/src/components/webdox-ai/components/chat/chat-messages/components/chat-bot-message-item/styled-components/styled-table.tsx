import { styles } from '@components/markdown/markdown.styles';
import { themedStyled } from '@themes/utilities';

/** A styled table to use within brain companion assistant. */
export const StyledTable = themedStyled('table', ({ $theme }) => ({
  ...styles.tableStyles($theme),
  border: 'unset',
}));

/** A styled table to use within brain companion assistant. */
export const StyledTableViewer = themedStyled('table', ({ $theme }) => ({
  ...styles.tableStyles($theme),
  border: 'unset',
  width: '100%',

  ':has(*) thead': {
    color: 'unset',

    ':hover': {
      color: 'unset',
    },
  },
}));
