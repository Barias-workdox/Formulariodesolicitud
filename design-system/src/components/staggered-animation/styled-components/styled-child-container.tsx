import { themedStyled } from '@themes/utilities';

export const StyledChildContainer = themedStyled<'div', { $show: boolean; $duration: number }>(
  'div',
  ({ $show, $duration }) => ({
    opacity: $show ? 1 : 0,
    transform: $show ? 'scale(1)' : 'scale(0.8)',
    transition: `all ${$duration}ms ease-in-out`,
  }),
);
