import { themedStyled } from '@themes/utilities';

export const StyledChildrenWrapper = themedStyled<'div', { $withPaddingBottom: boolean }>(
  'div',
  ({ $theme, $withPaddingBottom }) => ({
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: $withPaddingBottom ? $theme.spacing.spacingMd : 'unset',
  }),
);
