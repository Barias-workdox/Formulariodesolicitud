import type { ReactElement } from 'react';

import { Checkbox } from '@components/checkbox';
import { useDataTableContext } from '@components/data-table/hooks/use-data-table-context';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { useCss } from '../../../../../utils/hooks/use-css';
import { headerCellStyles } from '../../../common/table-header-cell/table-header-cell.styles';

import type { TableRowsSelectionHeaderCellProps } from '@components/data-table/data-table.interfaces';

/**
 * This component is used to create a header cell that contains a checkbox component
 * for managing table rows selected. It displays only a checkbox, which, when it is
 * clicked, add or remove a specific row in table by index. If all rows are selected
 * the checkbox will be marked as check by default.
 */
export const TableRowsSelectionHeaderCell = ({
  'data-testid': dataTestId,
  isAllCheck,
  isIndeterminate,
  onClickAll,
  overrides,
}: TableRowsSelectionHeaderCellProps): ReactElement => {
  const { containerStyles } = useCss(headerCellStyles, {
    align: 'center',
    isActionCell: true,
  });
  const { overrides: tableOverrides } = useDataTableContext();

  const overrideProps = getOverrideProps(tableOverrides?.TableRowsSelectionHeaderCell);

  const { CellContent = {} } = overrideProps.overrides ?? overrides ?? {};

  const CellContentOverride = getOverride(CellContent);

  return (
    <div className={containerStyles}>
      {CellContentOverride !== undefined ? (
        <CellContentOverride />
      ) : (
        <Checkbox
          isIndeterminate={isIndeterminate}
          data-testid={dataTestId}
          checked={isAllCheck}
          onChange={onClickAll}
        />
      )}
    </div>
  );
};
