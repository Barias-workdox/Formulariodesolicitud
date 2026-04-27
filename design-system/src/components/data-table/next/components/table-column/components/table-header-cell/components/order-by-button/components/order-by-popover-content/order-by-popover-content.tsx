import type { ReactElement } from 'react';

import { Checkmark } from '@carbon/icons-react';

import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import {
  PopoverMenu,
  PopoverMenuOptionsWrapper,
  PopoverMenuTitle,
} from '../../../../../../../popover-menu';

import type { ColumnConfig, ColumnDataType } from '../../../../../../../../data-table.interfaces';
import type { UseTableReturn } from '../../../../../../../../hooks/use-table';
import type { OrderDirection } from '@interfaces/common.interfaces';

export type OrderByPopoverContentProps = Pick<UseTableReturn, 'handleOnChange'> &
  Pick<ColumnConfig, 'id' | 'isSortable' | 'isRemovable'> & {
    /**
     * Indicates whether the column is currently ordered by.
     */
    isOrderedByThis: boolean;
    /**
     * The data type of the column.
     */
    dataType: ColumnDataType;
    /**
     * The current order direction of the column (asc or desc).
     */
    orderDirection: OrderDirection;
  };

/**
 * Represents the content of a popover menu for ordering and managing columns in a table.
 *
 * This component is used to display a menu with options for sorting columns in ascending or descending order,
 * and for hiding columns. It provides user interaction for ordering and managing columns.
 */
export const OrderByPopoverContent = ({
  id,
  isSortable,
  isRemovable,
  isOrderedByThis,
  dataType,
  orderDirection,
  handleOnChange,
}: OrderByPopoverContentProps): ReactElement => {
  const { t } = useTranslation();
  const { theme } = useCss();

  /**
   * Handles the onChange event for sorting columns in ascending or descending order.
   *
   * @param updatedOrderDirection - The updated sorting direction (asc or desc).
   */
  const onItemClick = (updatedOrderDirection: OrderDirection) => (): void => {
    handleOnChange({
      payload: {
        orderBy: id,
        orderDirection: updatedOrderDirection,
      },
      event: 'sort',
    });
  };

  /**
   * Handles the event for hiding a column.
   */
  const handleHideColumn = (): void => {
    handleOnChange({ payload: { id }, event: 'hide-column' });
  };

  const canSort = isSortable && dataType !== 'action';

  return (
    <PopoverMenu>
      {canSort && (
        <PopoverMenuOptionsWrapper>
          <PopoverMenuTitle>{t('dataTable.sortBy.title')}</PopoverMenuTitle>
          <PopoverMenu.Item onClick={onItemClick('asc')}>
            {t(`dataTable.sortBy.dataType.${dataType}.asc`)}
            {isOrderedByThis && orderDirection === 'asc' && (
              <Checkmark
                color={theme.colors.brand}
                aria-label={t('dataTable.ariaLabels.ascChecked')}
              />
            )}
          </PopoverMenu.Item>
          <PopoverMenu.Item onClick={onItemClick('desc')}>
            {t(`dataTable.sortBy.dataType.${dataType}.desc`)}
            {isOrderedByThis && orderDirection === 'desc' && (
              <Checkmark
                color={theme.colors.brand}
                aria-label={t('dataTable.ariaLabels.descChecked')}
              />
            )}
          </PopoverMenu.Item>
        </PopoverMenuOptionsWrapper>
      )}
      {isRemovable && (
        <PopoverMenu.Item onClick={handleHideColumn}>
          {t('dataTable.sortBy.hideColumn')}
        </PopoverMenu.Item>
      )}
    </PopoverMenu>
  );
};
