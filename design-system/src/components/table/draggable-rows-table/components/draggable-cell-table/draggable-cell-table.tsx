import { Draggable } from '@carbon/icons-react';

import { TableCell } from '@components/table/components';
import { themedUseStyletron } from '@themes/index';

import { draggableCellTable } from './draggable-cell-table.styles';

interface DraggableCellTableProps {
  'data-testid'?: string;
}

/**
 * A Styled cell that renders a static styled icon used to drag the table row
 *
 * @deprecated use `DraggableCellTable` in `table/draggable-rows-table/components/draggable-cell-table-next` folder
 */
export const DraggableCellTable = ({
  'data-testid': dataTestId,
}: DraggableCellTableProps): JSX.Element => {
  const [, theme] = themedUseStyletron();

  return (
    <TableCell
      data-testid={dataTestId}
      $style={draggableCellTable(theme)}
    >
      <Draggable
        size={16}
        fill={theme.colors.brandSubdued}
        height={32}
      />
    </TableCell>
  );
};
