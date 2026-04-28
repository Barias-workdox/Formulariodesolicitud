import { ReactElement } from 'react';
import { TableRowsSelectionHeaderCellProps } from '../../../../data-table.interfaces';
/**
 * This component is used to create a header cell that contains a checkbox component
 * for managing table rows selected. It displays only a checkbox, which, when it is
 * clicked, add or remove a specific row in table by index. If all rows are selected
 * the checkbox will be marked as check by default.
 */
export declare const TableRowsSelectionHeaderCell: ({ "data-testid": dataTestId, isAllCheck, isIndeterminate, overrides, onClickAll, }: TableRowsSelectionHeaderCellProps) => ReactElement;
