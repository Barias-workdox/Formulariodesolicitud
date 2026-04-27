import { themedStyled } from '@themes/utilities';

import type { ManagerPosition } from '@components/file-download-manager';
import type { StyleObject } from 'styletron-react';

export const StyledMainContentContainer = themedStyled<
  'div',
  {
    $margin?: StyleObject['right'];
    $position: ManagerPosition;
  }
>('div', ({ $theme, $margin, $position }) => ({
  border: `1px solid ${$theme.colors.neutralSubtle}`,
  borderRadius: $theme.borders.borderSm,
  backgroundColor: $theme.colors.base,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '360px',
  right: $margin ?? 0,
  bottom: $position === 'BOTTOM' ? ($margin ?? 0) : undefined,
  top: $position === 'TOP' ? ($margin ?? 0) : undefined,
  position: 'absolute',
  zIndex: $theme.zIndex.modal ?? 1000,
  [$theme.mediaQuery.small]: {
    width: '450px',
  },
}));
