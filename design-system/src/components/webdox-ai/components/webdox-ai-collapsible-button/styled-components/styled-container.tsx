import { themedStyled } from '@themes/utilities';

import { WEBDOX_AI_BUTTON_CONTAINER_SIZE } from '../../webdox-ai-button/webdox-ai-button.constants';

import type { DirectionType } from '../webdox-ai-collapsible-button.interfaces';

export const StyledContainer = themedStyled<'div', { $direction: DirectionType }>(
  'div',
  ({ $theme, $direction }) => ({
    display: 'flex',
    flexDirection: $direction === 'column' ? 'column' : 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    height: 'fit-content',
    padding: $theme.spacing.spacing2xs,
    backgroundColor: $theme.colors.bgBase,
    borderRadius: `${WEBDOX_AI_BUTTON_CONTAINER_SIZE / 2}px`,
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
  }),
);
