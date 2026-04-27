import { WEBDOX_AI_BUTTON_ICON_SIZE } from '../../../webdox-ai-button/webdox-ai-button.constants';

import type { StyleObject } from 'styletron-react';

export const styles = {
  iconStyles: (): StyleObject => ({
    position: 'absolute',
    height: WEBDOX_AI_BUTTON_ICON_SIZE,
    width: WEBDOX_AI_BUTTON_ICON_SIZE,
  }),
};
