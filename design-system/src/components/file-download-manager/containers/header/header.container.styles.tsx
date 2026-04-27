import { themedStyled } from '@themes/utilities';

export const StyledHeaderContainer = themedStyled<'div', { $isDraggable?: boolean }>(
  'div',
  ({ $theme, $isDraggable }) => ({
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: $theme.spacing.spacingXs,
    padding: $theme.spacing.spacingXs,
    height: '24px',
    backgroundColor: $theme.colors.neutralWashed,
    cursor: $isDraggable ? 'grab' : 'default',
  }),
);

export const StyledHeaderRightContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
}));
