import { styles } from '@components/markdown/markdown.styles';
import { MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH } from '@components/webdox-ai/constants/webdox-ai.constants';
import { themedStyled } from '@themes/utilities';

/** A styled table cell to use within brain companion assistant. */
export const StyledTableCell = themedStyled('td', ({ $theme }) => ({
  ...styles.tableCellStyles($theme),
  ...$theme.typography.ParagraphSmall,
  minWidth: MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH,
  padding: $theme.spacing.spacingXs,
  verticalAlign: 'top',
}));
