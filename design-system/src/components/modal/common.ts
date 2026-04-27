import { DEFAULT_FONT } from '@tokens';

import type { DesignSystemTheme } from '../../themes';
import type { StyleObject } from 'styletron-standard';

export const commonSpacing: StyleObject = {
  paddingLeft: '30px',
  paddingRight: '30px',
  margin: 0,
};

// TODO: It is added this way because the source is not being reflected correctly in the portal.
/** Font styles for the modal header */
export const commonModalHeader = ($theme: DesignSystemTheme): StyleObject => ({
  ...$theme.typography.ParagraphLarge,
  ...DEFAULT_FONT,
  fontWeight: 500,
});
