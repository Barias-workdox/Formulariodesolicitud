import {
  FILES_LIST_ITEM_HEIGHT,
  FILES_LIST_MAX_HEIGHT,
} from '@components/file-download-manager/file-download-manager.constants';
import { themedStyled } from '@themes/utilities';

export const StyledFilesList = themedStyled<'div', { $minHeight?: number }>(
  'div',
  ({ $minHeight }) => ({
    maxHeight: `${FILES_LIST_MAX_HEIGHT}px`,
    minHeight: $minHeight ? `${$minHeight}px` : `${FILES_LIST_ITEM_HEIGHT}px`,
    overflowY: 'auto',
  }),
);
