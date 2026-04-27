import { themedStyled } from '../../../themes';

export const EmptyMessagesWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'inherit',
  flex: 'inherit',
  padding: `${$theme.spacing.spacingMd} ${$theme.spacing.spacing3xl}`,
}));
