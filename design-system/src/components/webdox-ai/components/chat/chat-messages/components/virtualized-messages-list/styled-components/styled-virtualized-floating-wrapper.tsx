import { themedStyled } from '@themes/utilities';

export const StyledVirtualizedFloatingWrapper = themedStyled<
  'div',
  { $firstElementPosition: number }
>('div', ({ $firstElementPosition = 0, $theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  transform: `translateY(${$firstElementPosition}px)`,
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingMd,
  paddingBottom: $theme.spacing.spacingMd,
}));
