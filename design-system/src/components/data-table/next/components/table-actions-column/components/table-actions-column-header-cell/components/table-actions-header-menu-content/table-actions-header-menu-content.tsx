import { useCallback, useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import { MenuItemLabel } from '@components/data-table/next/components/common/menu-item-label';
import { PopoverMenu } from '@components/data-table/next/components/popover-menu';
import { TABLE_MENU_SEARCH_FILTER_THRESHOLD } from '@components/data-table/next/data-table.constants';
import { getColumnLabel } from '@components/data-table/next/utils/data-table.utils';
import { SearchContainer } from '@components/search-container';
import { useTranslation } from '@components/utils';
import { includesStringNormalized } from '@components/utils/strings/text.utils';
import { COMMON_HEIGHT_36 } from '@constants/common.constants';
import { getStringFromReactNode } from '@utils/react.utils';

import type { DataTableContextValues } from '@components/data-table/next/contexts/data-table-context.interfaces';
import type { UseTableReturn } from '@components/data-table/next/hooks/use-table';

type TableActionsHeaderMenuContentProps = Pick<
  DataTableContextValues,
  'columnsConfig' | 'allColumnsConfig'
> &
  Pick<UseTableReturn, 'handleOnChange'>;

/**
 * This component is used to create the content of a popover menu that allows users
 * to add columns to the table header. It displays a list of available columns and allows
 * the user to show a hidden column by clicking on it.
 */
export const TableActionsHeaderMenuContent = ({
  columnsConfig,
  allColumnsConfig,
  handleOnChange,
}: TableActionsHeaderMenuContentProps): ReactElement => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');

  // Find missing columns that are not currently displayed.
  const missingColumns = allColumnsConfig.filter(
    ({ id }) => !columnsConfig.some((column) => column.id === id),
  );

  /**
   * Callback to show a hidden column when a menu item is clicked.
   */
  const showColumn = useCallback(
    (id: string) => (): void => {
      handleOnChange({ payload: { id }, event: 'show-column' });
    },
    [handleOnChange],
  );

  const filteredItems = useMemo(
    () =>
      missingColumns.filter(({ label }) => {
        const labelNode = getColumnLabel(label, 'menu');

        return includesStringNormalized(getStringFromReactNode(labelNode), searchValue);
      }),
    [missingColumns, searchValue],
  );

  const isFiltrable = missingColumns.length > TABLE_MENU_SEARCH_FILTER_THRESHOLD;

  return (
    <PopoverMenu.Container>
      <PopoverMenu.Title>{t('dataTable.addColumns')}</PopoverMenu.Title>
      <SearchContainer
        isFiltrable={isFiltrable}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      >
        <PopoverMenu.List>
          {filteredItems.length > 0 ? (
            filteredItems.map(({ id, label }) => {
              const elementLabel = getColumnLabel(label, 'menu');

              const labelNode =
                typeof elementLabel === 'string' || typeof elementLabel === 'number' ? (
                  <MenuItemLabel>{elementLabel}</MenuItemLabel>
                ) : (
                  elementLabel
                );

              return (
                <PopoverMenu.Item
                  dataTestId={`data-table__add-column-button--${id}-option`}
                  key={id}
                  $styles={{ height: COMMON_HEIGHT_36 }}
                  onClick={showColumn(id)}
                >
                  {labelNode}
                </PopoverMenu.Item>
              );
            })
          ) : (
            <PopoverMenu.Empty />
          )}
        </PopoverMenu.List>
      </SearchContainer>
    </PopoverMenu.Container>
  );
};
