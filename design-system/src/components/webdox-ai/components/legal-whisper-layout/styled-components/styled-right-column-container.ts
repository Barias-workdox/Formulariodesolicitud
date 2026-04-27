import { themedStyled } from '@themes/index';

import { RIGHT_COLUMN_WIDTH } from '../legal-whisper-layout.constants';

export const StyledRightColumnContainer = themedStyled<'div', { $isOpen: boolean }>(
  'div',
  ({ $theme, $isOpen }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '0px',
    backgroundColor: $theme.colors.neutralWashed,
    maxWidth: RIGHT_COLUMN_WIDTH,
    transition: 'width .4s cubic-bezier(0.22, 0.61, 0.36, 1)',
    ...($isOpen && {
      width: RIGHT_COLUMN_WIDTH,
      borderLeft: `1px solid ${$theme.colors.neutralSubtle}`,
    }),
  }),
);
