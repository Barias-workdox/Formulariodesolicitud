import { themedStyled } from '@themes/index';

import { LEFT_COLUMN_WIDTH } from '../legal-whisper-layout.constants';

export const StyledLeftColumnContainer = themedStyled<'div', { $isOpen: boolean }>(
  'div',
  ({ $isOpen }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '0px',
    maxWidth: LEFT_COLUMN_WIDTH,
    transition: 'width .4s cubic-bezier(0.22, 0.61, 0.36, 1)',
    overflow: 'hidden',
    ...($isOpen && {
      width: LEFT_COLUMN_WIDTH,
    }),
  }),
);
