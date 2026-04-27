import { useCallback, useLayoutEffect, useReducer, useRef } from 'react';

import isEqual from 'lodash/isEqual';

import { CellSkeleton, getActiveColumnsConfigWithUserCustomizations } from '..';

import { useActiveColumnsConfig } from './use-active-columns-config';

import type {
  AllKeys,
  ColumnConfig,
  DataTableProps,
  UpdateEventType,
} from '../data-table.interfaces';

type UseTableActionBase<Payload, EventType extends UpdateEventType> = {
  payload: Payload;
  event: EventType;
};

type DragEvent<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = UseTableActionBase<
  Pick<DataTableProps<DataType, ExtraColumnsIds>, 'data' | 'activeColumns'>,
  'drag'
>;

type SortEvent<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = UseTableActionBase<
  Pick<DataTableProps<DataType, ExtraColumnsIds>, 'orderBy' | 'orderDirection'>,
  'sort'
>;

type ShowColumnEvent<DataType extends Record<string, unknown> = Record<string, unknown>> =
  UseTableActionBase<Pick<ColumnConfig<keyof DataType>, 'id'>, 'show-column'>;

type HideColumnEvent<DataType extends Record<string, unknown> = Record<string, unknown>> =
  UseTableActionBase<Pick<ColumnConfig<keyof DataType>, 'id'>, 'hide-column'>;

type ResizeColumnWidthEvent<DataType extends Record<string, unknown> = Record<string, unknown>> =
  UseTableActionBase<Pick<ColumnConfig<keyof DataType>, 'id' | 'width'>, 'resize-column-width'>;

type UpdatedPropsEvent<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = UseTableActionBase<DataTableProps<DataType, ExtraColumnsIds>, 'updated-props'>;

type ChangeRowSelectionEvent<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = UseTableActionBase<
  Pick<DataTableProps<DataType, ExtraColumnsIds>, 'rowsSelected'>,
  'row-selection'
>;

export type UseTableAction<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> =
  | DragEvent<DataType, ExtraColumnsIds>
  | SortEvent<DataType, ExtraColumnsIds>
  | ShowColumnEvent<DataType>
  | HideColumnEvent<DataType>
  | ResizeColumnWidthEvent<DataType>
  | UpdatedPropsEvent<DataType, ExtraColumnsIds>
  | ChangeRowSelectionEvent<DataType, ExtraColumnsIds>;

type UseTableState<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = DataTableProps<DataType, ExtraColumnsIds>;

export type UseTableReturn<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = UseTableState<DataType, ExtraColumnsIds> & {
  /**
   * Array of column configurations for currently active (visible) columns.
   */
  columnsConfig: ColumnConfig<AllKeys<DataType> | ExtraColumnsIds>[];

  /**
   * Handler function for managing table state changes.
   *
   * This function is responsible for processing various table events and updating both the
   * internal state and notifying external components about changes. It handles events such as:
   * - Column drag and drop reordering
   * - Column sorting (ascending/descending)
   * - Showing/hiding columns
   * - Resizing column widths
   * - Row selection changes
   * - External data updates
   */
  handleOnChange(params: UseTableAction<DataType, ExtraColumnsIds>): void;
};

/**
 * Table state reducer function.
 *
 * This reducer function handles state updates for various table events such as drag-and-drop,
 * sorting, column showing, column hiding, column width adjustments, and data updates.
 *
 * @returns The updated state after processing the action.
 */
const reducer = <
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
>(
  state: Omit<UseTableState<DataType, ExtraColumnsIds>, 'columnsConfig'>,
  { payload, event }: UseTableAction<DataType, ExtraColumnsIds>,
): Omit<UseTableState<DataType, ExtraColumnsIds>, 'columnsConfig'> => {
  switch (event) {
    case 'drag':
    case 'sort':
    case 'row-selection':
    case 'updated-props': {
      return { ...state, ...payload };
    }

    // This event receives a columnsConfig array with only one item which represents the column to show
    case 'show-column': {
      const { id: columnToShowId } = payload;
      const { activeColumns, allColumnsConfig, data } = state;
      const columnToShow = allColumnsConfig.find(({ id }) => columnToShowId === id);

      const newActiveColumn = columnToShow ? { id: columnToShow.id } : undefined;

      const activeColumnsUpdated = newActiveColumn
        ? [...activeColumns, newActiveColumn]
        : activeColumns;

      const updatedData = data.map((row) => [
        ...row.slice(0, row.length - 1),
        <CellSkeleton
          key="column-skeleton"
          data-testid="column-skeleton"
        />,
        row.at(-1),
      ]);

      return { ...state, activeColumns: activeColumnsUpdated, data: updatedData };
    }

    // This event receives a columnsConfig array with only one item which represents the hidden column
    case 'hide-column': {
      const { id } = payload;
      const { activeColumns, data } = state;
      const columnIndex = activeColumns.findIndex((column) => column.id === id);
      const activeColumnsUpdated = activeColumns.filter((columnConfig) => columnConfig.id !== id);
      const updatedData = data.map((row) => row.filter((_, index) => index !== columnIndex));

      return { ...state, activeColumns: activeColumnsUpdated, data: updatedData };
    }

    // This event receives a columnsConfig array with only one item which represents the updated column
    case 'resize-column-width': {
      const { id, width } = payload;
      const { activeColumns } = state;
      const activeColumnsUpdated = activeColumns.map((columnConfig) =>
        columnConfig.id === id ? { ...columnConfig, width } : columnConfig,
      );

      return { ...state, activeColumns: activeColumnsUpdated };
    }
  }
};

/**
 * Custom hook for managing the state of a data table.
 *
 * The `useTable` hook provides a powerful mechanism for managing and synchronizing the state
 * of a draggable columns table. It handles various table-related events, such as drag-and-drop
 * column reordering, column sorting, showing/hiding columns, adjusting column widths, and updating
 * the table data. This hook allows you to seamlessly integrate and control the behavior of the table
 * within your application.
 *
 * @returns The updated table state.
 */
export const useTable = <
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
>(
  props: Omit<UseTableState<DataType, ExtraColumnsIds>, 'columnsConfig'>,
): UseTableReturn<DataType, ExtraColumnsIds> => {
  /**
   * Ref to store the previous props value.
   * This ref is used to compare with the current props
   * to detect changes and trigger updates.
   */
  const prevProps = useRef(props);

  const { onChange: onChangeProp } = props;

  const [state, dispatch] = useReducer(reducer<DataType, ExtraColumnsIds>, props);

  const { activeColumns, allColumnsConfig } = state || {};

  const { columnsConfig } = useActiveColumnsConfig({
    activeColumns,
    allColumnsConfig,
  });
  /**
   * Handle state changes.
   *
   * This function dispatches actions to update the table state based on the provided values
   * and event type.
   */
  const handleOnChange = useCallback(
    (args: UseTableAction<DataType, ExtraColumnsIds>): void => {
      // Dispatch for internal state updates
      dispatch(args);

      // Get state for external updates
      const newState = reducer(state, args) || {};

      // Get columns config for external updates
      const newColumnsConfig = getActiveColumnsConfigWithUserCustomizations(
        newState.activeColumns,
        newState.allColumnsConfig,
      );

      onChangeProp({ ...newState, columnsConfig: newColumnsConfig }, args.event);
    },
    [state, onChangeProp],
  );

  // Synchronize data updates from external sources.
  useLayoutEffect(() => {
    if (!isEqual(prevProps.current, props)) {
      prevProps.current = props;
      dispatch({ payload: props, event: 'updated-props' });
    }
  }, [props]);

  return {
    ...state,
    columnsConfig,
    handleOnChange,
  };
};
