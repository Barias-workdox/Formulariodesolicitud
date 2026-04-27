import type { HTMLProps } from 'react';

import type { ColumnConfig, DataTableProps } from '../../../data-table.interfaces';
import type { UseTableReturn } from '../../../hooks/use-table';
import type { WithTestId } from '@interfaces/common.interfaces';

export type TableHeaderCellProps = WithTestId &
  Pick<HTMLProps<HTMLDivElement>, 'onMouseEnter' | 'onMouseLeave'> &
  Omit<ColumnConfig, 'renderType'> &
  Pick<DataTableProps, 'orderBy' | 'orderDirection'> & {
    /**
     * Indicates whether the header cell is currently hovered over.
     */
    isHovered: boolean;

    /**
     * Indicates whether the header cell is being dragged.
     */
    isDragging: boolean;
  } & Pick<UseTableReturn, 'handleOnChange'>;
