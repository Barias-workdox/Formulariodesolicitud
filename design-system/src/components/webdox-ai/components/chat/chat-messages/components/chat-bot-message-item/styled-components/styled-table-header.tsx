import { themedStyled } from '@themes/utilities';

/** A styled table header to use within brain companion assistant. */
export const StyledTableHeader = themedStyled<'thead', { $isHovered: boolean }>(
  'thead',
  ({ $isHovered }) => ({
    ...($isHovered && { color: 'transparent' }),
  }),
);
