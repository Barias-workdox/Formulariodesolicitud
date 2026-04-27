import { themedStyled } from '@themes/utilities';

export const StyledVirtualizedWrapper = themedStyled<'div', { $minHeight: number }>(
  'div',
  ({ $minHeight }) => ({
    position: 'relative',
    minHeight: `${$minHeight}px`,
  }),
);
