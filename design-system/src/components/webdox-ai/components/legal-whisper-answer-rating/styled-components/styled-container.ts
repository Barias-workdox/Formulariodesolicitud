import { themedStyled } from '@themes/index';

import { RIGHT_COLUMN_WIDTH } from '../../legal-whisper-layout/legal-whisper-layout.constants';

export const StyledContainer = themedStyled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  width: RIGHT_COLUMN_WIDTH,
  height: '100%',
}));
