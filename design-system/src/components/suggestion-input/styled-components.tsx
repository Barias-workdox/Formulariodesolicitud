import { themedStyled } from '../../themes/utilities';

import { SUGGESTION_LIST_MAX_HEIGHT } from './suggestion-input.constants';

export const StyledContentWrapper = themedStyled<'div', { $width?: string }>(
  'div',
  ({ $theme, $width }) => ({
    ...$theme.typography.ParagraphMedium,
    width: $width,
    backgroundColor: $theme.colors.bgBase,
    color: $theme.colors.neutral,
  }),
);

export const StyledList = themedStyled('ul', ({ $theme }) => ({
  listStyle: 'none',
  margin: '0',
  padding: '0',
  background: $theme.colors.bgBase,
  maxHeight: SUGGESTION_LIST_MAX_HEIGHT,
  overflowY: 'auto',
  scrollbarWidth: 'none',
  ':hover': {
    scrollbarWidth: 'thin',
  },
}));
