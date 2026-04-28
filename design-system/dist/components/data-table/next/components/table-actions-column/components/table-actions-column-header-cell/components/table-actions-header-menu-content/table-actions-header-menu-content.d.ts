import { ReactElement } from 'react';
import { DataTableContextValues } from '../../../../../../contexts/data-table-context.interfaces';
import { UseTableReturn } from '../../../../../../hooks/use-table';
type TableActionsHeaderMenuContentProps = Pick<DataTableContextValues, 'columnsConfig' | 'allColumnsConfig'> & Pick<UseTableReturn, 'handleOnChange'>;
/**
 * This component is used to create the content of a popover menu that allows users
 * to add columns to the table header. It displays a list of available columns and allows
 * the user to show a hidden column by clicking on it.
 */
export declare const TableActionsHeaderMenuContent: ({ columnsConfig, allColumnsConfig, handleOnChange, }: TableActionsHeaderMenuContentProps) => ReactElement;
export {};
