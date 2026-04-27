import { themedStyled } from '@themes/utilities';
import { getTransitionStyles } from '@utils/styles.utils';

/** A styled div to wrap a table within brain companion assistant. */
export const StyledFixedMenuContainer = themedStyled<'div', { $isVisible: boolean }>(
  'div',
  ({ $isVisible, $theme }) => ({
    position: 'absolute',
    right: $theme.spacing.spacingXs,
    top: $theme.spacing.spacingXs,
    zIndex: 1,
    opacity: $isVisible ? 1 : 0,
    transition: getTransitionStyles(['opacity']),
  }),
);

export const StyledMenuContainer = themedStyled<'div', { $isVisible: boolean }>(
  'div',
  ({ $theme }) => ({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    padding: $theme.spacing.spacingXs,
    justifyContent: 'flex-end',
    backgroundColor: $theme.colors.neutralWashed,
    border: `1px solid ${$theme.colors.neutralSubtle}`,
    borderBottom: 'none',
  }),
);
