import { styles } from '@components/markdown/markdown.styles';
import { MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH } from '@components/webdox-ai/constants/webdox-ai.constants';
import { themedStyled } from '@themes/utilities';

/** A styled table header cell to use within brain companion assistant. */
export const StyledTableHeaderCell = themedStyled('th', ({ $theme }) => ({
  ...styles.tableHeaderStyles($theme),
  ...$theme.typography.ParagraphSmall,
  position: 'sticky',
  minWidth: MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH,
  textAlign: 'left',
  padding: `${$theme.spacing.spacingSm} ${$theme.spacing.spacingXs}`,
}));
