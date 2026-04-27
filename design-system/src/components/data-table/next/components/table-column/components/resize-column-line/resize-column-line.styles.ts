import { DATA_TABLE_Z_INDEX } from '@components/data-table/next/data-table.constants';
import { themedStyled } from '@themes/utilities';

export const StyledResizeColumnLine = themedStyled('div', {
  position: 'absolute',
  top: 0,
  right: '-12px',
  width: '24px',
  height: '100%',
  cursor: 'col-resize',
  zIndex: DATA_TABLE_Z_INDEX.draggingColumn,
});
