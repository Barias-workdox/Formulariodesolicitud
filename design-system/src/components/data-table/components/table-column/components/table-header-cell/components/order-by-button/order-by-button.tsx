import type { ReactElement } from 'react';

import { ArrowDown, ArrowUp, ChevronSort } from '@carbon/icons-react';

import { DATA_TABLE_Z_INDEX } from '@components/data-table/data-table.constants';
import { Popover } from '@components/popover';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { OrderByPopoverContent } from './components/order-by-popover-content';
import { styles } from './order-by-button.styles';

import type { ColumnConfig, DataTableProps } from '@components/data-table/data-table.interfaces';
import type { UseTableReturn } from '@components/data-table/hooks/use-table';
import type { WithTestId } from '@interfaces/common.interfaces';

export type OrderByButtonProps = WithTestId &
  Pick<DataTableProps, 'orderDirection'> &
  Pick<UseTableReturn, 'handleOnChange'> &
  Pick<ColumnConfig, 'id' | 'isSortable' | 'isRemovable' | 'dataType' | 'label'> & {
    /**
     * Indicates whether the column is currently ordered by.
     */
    isOrderedByThis: boolean;
  };

/**
 * Represents a button for ordering and sorting columns in a table header.
 *
 * This component is used in the header of a table to display a button with an icon for sorting columns
 * in ascending or descending order. It also handles the popover menu for sorting options and hiding columns.
 */
export const OrderByButton = ({
  dataTestId = 'data-table__order-by-button',
  id,
  label,
  isOrderedByThis,
  isSortable,
  isRemovable,
  orderDirection,
  dataType,
  handleOnChange,
}: OrderByButtonProps): ReactElement => {
  const { wrapperStyles, buttonStyles, theme } = useCss(styles);
  const { t } = useTranslation();

  const renderSortButton = isSortable || isRemovable;

  const icon = isOrderedByThis ? (
    orderDirection === 'asc' ? (
      <ArrowUp
        color={theme.colors.brand}
        aria-label={`${label} ${t('dataTable.ariaLabels.sortingAsc')}`}
      />
    ) : (
      <ArrowDown
        color={theme.colors.brand}
        aria-label={`${label} ${t('dataTable.ariaLabels.sortingDesc')}`}
      />
    )
  ) : (
    renderSortButton && (
      <ChevronSort aria-label={`${label} ${t('dataTable.ariaLabels.sortingButton')}`} />
    )
  );

  const iconWithWrapper =
    icon &&
    (isOrderedByThis ? (
      <StatefulTooltipNext
        content={t(`dataTable.sortBy.dataType.${dataType}.${orderDirection}`)}
        showArrow
        placement="top"
        ignoreBoundary
        zIndex={DATA_TABLE_Z_INDEX.popover}
      >
        <div className={wrapperStyles}>{icon}</div>
      </StatefulTooltipNext>
    ) : (
      <div className={wrapperStyles}>{icon}</div>
    ));

  return renderSortButton ? (
    <Popover
      data-testid={`${dataTestId}__popover`}
      content={
        <OrderByPopoverContent
          id={id}
          isRemovable={isRemovable}
          isSortable={isSortable}
          isOrderedByThis={isOrderedByThis}
          orderDirection={orderDirection}
          dataType={dataType}
          handleOnChange={handleOnChange}
        />
      }
      placement="bottomRight"
      ignoreBoundary
      showArrow
      popoverMargin={-8}
      zIndex={DATA_TABLE_Z_INDEX.popover}
    >
      <button
        data-testid={`${dataTestId}--button`}
        type="button"
        className={buttonStyles}
      >
        {iconWithWrapper}
      </button>
    </Popover>
  ) : (
    <>{iconWithWrapper}</>
  );
};
