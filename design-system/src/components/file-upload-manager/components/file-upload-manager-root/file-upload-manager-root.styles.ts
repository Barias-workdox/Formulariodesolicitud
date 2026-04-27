import { FILE_UPLOAD_MANAGER_WIDTH } from '@components/file-upload-manager/file-upload-manager.constants';
import { themedStyled } from '@themes/utilities';

import type { ManagerPosition } from '@components/file-upload-manager/contexts/file-uploader-manager.context';
import type { StyleObject } from 'styletron-react';

export const StyledRoot = themedStyled<
  'div',
  { $margin?: StyleObject['right']; $position: ManagerPosition }
>('div', ({ $theme, $position, $margin }) => ({
  border: `2px solid ${$theme.colors.neutralSubtle}`,
  borderRadius: '4px',
  overflow: 'hidden',
  position: 'absolute',
  right: $margin ?? 0,
  bottom: $position === 'BOTTOM' ? ($margin ?? 0) : undefined,
  top: $position === 'TOP' ? ($margin ?? 0) : undefined,
  width: `${FILE_UPLOAD_MANAGER_WIDTH}px`,
  backgroundColor: $theme.colors.bgBase,
}));

export const StyledActionsWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacing2xs,
}));
