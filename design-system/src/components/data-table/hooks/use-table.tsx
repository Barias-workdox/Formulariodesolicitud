import { useCallback, useLayoutEffect, useMemo, useReducer, useRef } from 'react';

import isEqual from 'lodash/isEqual';

import { useResponsiveProps } from '@utils/use-responsive-props.util';

import { CellSkeleton } from '..';

import type { ColumnConfig, DataTableProps, UpdateEventType } from '../data-table.interfaces';

type UseTableState<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = DataTableProps<DataType, ExtraColumnsIds>;

type UseTableActionBase<Payload, EventType extends UpdateEventType> = {
  payload: Payload;
  event: EventType;
};

type DragEvent<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = UseTableActionBase<
  Pick<DataTableProps<DataType, ExtraColumnsIds>, 'data' | 'columnsConfig'>,
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
  state: UseTableState<DataType, ExtraColumnsIds>,
  { payload, event }: UseTableAction<DataType, ExtraColumnsIds>,
): UseTableState<DataType, ExtraColumnsIds> => {
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
      const { columnsConfig, allColumnsConfig, data } = state;
      const columnToShow = allColumnsConfig.find(({ id }) => columnToShowId === id);
      const updatedColumns = columnToShow ? [...columnsConfig, columnToShow] : columnsConfig;

      const updatedData = data.map((row) => [
        ...row.slice(0, row.length - 1),
        <CellSkeleton
          key="column-skeleton"
          data-testid="column-skeleton"
        />,
        row.at(-1),
      ]);

      return { ...state, columnsConfig: updatedColumns, data: updatedData };
    }

    // This event receives a columnsConfig array with only one item which represents the hidden column
    case 'hide-column': {
      const { id } = payload;
      const { columnsConfig, data } = state;
      const columnIndex = columnsConfig.findIndex((columnConfig) => columnConfig.id === id);
      const updatedColumns = columnsConfig.filter((columnConfig) => columnConfig.id !== id);
      const updatedData = data.map((row) => row.filter((_, index) => index !== columnIndex));

      return { ...state, columnsConfig: updatedColumns, data: updatedData };
    }

    // This event receives a columnsConfig array with only one item which represents the updated column
    case 'resize-column-width': {
      const { id, width } = payload;
      const { columnsConfig } = state;
      const updatedColumns = columnsConfig.map((columnConfig) =>
        columnConfig.id === id ? { ...columnConfig, width } : columnConfig,
      );

      return { ...state, columnsConfig: updatedColumns };
    }
  }
};

export type UseTableReturn<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = Omit<
  DataTableProps<DataType, ExtraColumnsIds>,
  'showHeaders' | 'showActionsColumn' | 'rowHeight'
> & {
  handleOnChange(params: UseTableAction<DataType, ExtraColumnsIds>): void;
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
  props: DataTableProps<DataType, ExtraColumnsIds>,
): UseTableReturn<DataType, ExtraColumnsIds> => {
  /**
   * Ref to store the previous props value.
   * This ref is used to compare with the current props
   * to detect changes and trigger updates.
   */
  const prevProps = useRef(props);
  const [state, dispatch] = useReducer(reducer<DataType, ExtraColumnsIds>, props);
  const { onChange: onChangeProp } = props;
  const { columnsConfig = [] } = state || {};

  const noFixedColumnsConfig = useMemo(
    () => columnsConfig.map((column) => ({ ...column, isFixed: false })),
    [columnsConfig],
  );

  const responsiveColumnsConfig = useResponsiveProps(
    {
      large: columnsConfig,
      extralarge: columnsConfig,
      medium: noFixedColumnsConfig,
      small: noFixedColumnsConfig,
      extrasmall: noFixedColumnsConfig,
    },
    columnsConfig,
  );

  /**
   * Handle state changes.
   *
   * This function dispatches actions to update the table state based on the provided values
   * and event type.
   */
  const handleOnChange = useCallback(
    (args: UseTableAction<DataType, ExtraColumnsIds>): void => {
      const newState = reducer(state, args);

      dispatch(args);
      // Notify the changes to the parent component
      onChangeProp(newState, args.event);
    },
    [onChangeProp, state],
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
    columnsConfig: responsiveColumnsConfig,
    handleOnChange,
  };
};
