import type { ReactElement } from 'react';

import { Add } from '@carbon/icons-react';

import { useDataTableContext } from '@components/data-table/next/hooks/use-data-table-context';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { useTranslation } from '../../../../../../utils';
import { useCss } from '../../../../../../utils/hooks/use-css';
import { TableActionButton } from '../../../common/table-action-button';
import { headerCellStyles } from '../../../common/table-header-cell/table-header-cell.styles';

import { TableActionsHeaderMenuContent } from './components/table-actions-header-menu-content';

import type { TableActionsColumnHeaderCellProps } from '@components/data-table/next/data-table.interfaces';

/**
 * This component is used to create a header cell that contains an action button
 * for managing table columns. It displays an "Add" button, which, when clicked,
 * opens a popover menu for adding columns to the table.
 */
export const TableActionsColumnHeaderCell = ({
  dataTestId = 'data-table__actions-column--header-cell',
  columnsConfig,
  allColumnsConfig,
  showButton = true,
  handleOnChange,
}: TableActionsColumnHeaderCellProps): ReactElement => {
  const { containerStyles } = useCss(headerCellStyles, {
    isActionCell: true,
    align: 'center',
  });
  const { t } = useTranslation();
  const { overrides: tableOverrides } = useDataTableContext();

  const overrideProps = getOverrideProps(tableOverrides?.TableActionsColumnHeaderCell);

  const { overrides: { CellContent } = {} } = overrideProps;

  const CellContentOverride = CellContent ? getOverride(CellContent) : undefined;

  return (
    <div className={containerStyles}>
      {showButton &&
        (CellContentOverride !== undefined ? (
          <CellContentOverride />
        ) : (
          <TableActionButton
            dataTestId={`${dataTestId}--add-column-button`}
            ariaLabel={t('dataTable.addColumns')}
            popoverProps={{
              content: (
                <TableActionsHeaderMenuContent
                  columnsConfig={columnsConfig}
                  allColumnsConfig={allColumnsConfig}
                  handleOnChange={handleOnChange}
                />
              ),
              placement: 'bottomRight',
              popoverMargin: -4,
            }}
          >
            <Add />
          </TableActionButton>
        ))}
    </div>
  );
};
