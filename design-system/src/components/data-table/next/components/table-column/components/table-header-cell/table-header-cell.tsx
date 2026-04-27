import { memo } from 'react';
import type { ReactElement } from 'react';

import { Draggable } from '@carbon/icons-react';

import { headerCellStyles } from '@components/data-table/next/components/common/table-header-cell/table-header-cell.styles';
import { TableHeaderLabel } from '@components/data-table/next/components/common/table-header-label';
import { getColumnLabel } from '@components/data-table/next/utils/data-table.utils';
import { useCss } from '@components/utils/hooks/use-css';

import { OrderByButton } from './components/order-by-button';

import type { TableHeaderCellProps } from '@components/data-table/next/components/common/table-header-cell/table-header-cell.interfaces';

/**
 * Represents a table header cell in a `DataTable`.
 *
 * This component is responsible for rendering the header cells of columns in a `DataTable`.
 * It displays the column label, provides sorting functionality, and handles column dragging.
 */
export const TableHeaderCell = memo<TableHeaderCellProps>(function TableHeaderCellMemoized({
  dataTestId = 'data-table__header-cell',
  id,
  label,
  isSortable,
  isHovered,
  align,
  isDragging,
  isDraggable,
  isFixed,
  isRemovable,
  orderBy,
  orderDirection,
  dataType,
  handleOnChange,
  ...rest
}): ReactElement {
  const isOrderedByThis = id === orderBy;

  const { containerStyles, dragIconContainerStyles, wrapperStyles } = useCss(headerCellStyles, {
    isHovered,
    align,
    isDragging,
    isDraggable,
    isFixed,
    isSortable,
  });

  const elementLabel = getColumnLabel(label, 'header');

  const labelNode =
    typeof elementLabel === 'string' || typeof elementLabel === 'number' ? (
      <TableHeaderLabel>{elementLabel}</TableHeaderLabel>
    ) : (
      elementLabel
    );

  return (
    <div
      {...rest}
      className={containerStyles}
    >
      <div className={wrapperStyles}>
        <div className={dragIconContainerStyles}>
          <Draggable size={16} />
        </div>
        {labelNode}
        <OrderByButton
          dataTestId={`${dataTestId}__order-by`}
          id={id}
          label={label}
          orderDirection={orderDirection}
          isOrderedByThis={isOrderedByThis}
          isSortable={isSortable}
          isRemovable={isRemovable}
          dataType={dataType}
          handleOnChange={handleOnChange}
        />
      </div>
    </div>
  );
});
