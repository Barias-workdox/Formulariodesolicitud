import { getSuiteAIBackgroundGradient } from '@components/webdox-ai/webdox-ai.styles';
import { themedStyled } from '@themes/utilities';

import { WEBDOX_AI_BUTTON_SIZE } from '../../webdox-ai-button/webdox-ai-button.constants';

export const StyledButton = themedStyled<'button', { $isLoading: boolean; $isToggled: boolean }>(
  'button',
  ({ $isLoading, $isToggled }) => ({
    position: 'relative',
    height: WEBDOX_AI_BUTTON_SIZE,
    width: WEBDOX_AI_BUTTON_SIZE,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'unset',
    border: 'unset',
    borderRadius: '50%',
    cursor: 'pointer',
    ...getSuiteAIBackgroundGradient({ isLoading: $isLoading && !$isToggled }),
  }),
);
