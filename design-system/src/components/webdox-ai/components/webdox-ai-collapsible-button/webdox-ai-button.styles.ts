import { WEBDOX_AI_BUTTON_ICON_SIZE } from '../webdox-ai-button/webdox-ai-button.constants';

import type { StyleObject } from 'styletron-react';

export const styles = {
  iconStyles: ({ isHovered, isActive }): StyleObject => ({
    position: 'absolute',
    height: WEBDOX_AI_BUTTON_ICON_SIZE,
    width: WEBDOX_AI_BUTTON_ICON_SIZE,
    transition: 'all .20s ease-in-out',
    transform: isActive ? (isHovered ? 'scale(1.1)' : 'scale(1)') : 'scale(0)',
    opacity: isActive ? 1 : 0,
  }),
};
