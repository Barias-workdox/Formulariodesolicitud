import type { ReactNode } from 'react';

import type { WithTestId } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-standard';

export interface ColumnProps {
  id: string;
  label: string;
  centered: boolean;
  sortable: boolean;
  draggable: boolean;
  removable: boolean;
  flex?: number;
}

export interface ColumnMenuPopoverProps extends WithTestId {
  column: ColumnProps;
  updateSortingColumn(columnId: string, order: string): void;
  toggleActiveColumn(columnUpdated: ColumnProps): void;
  setIsOverMenu(isOver: boolean): void;
}

export interface DraggableColumnsTableProps extends Partial<
  Pick<ColumnMenuPopoverProps, 'updateSortingColumn'>
> {
  /**
   * data-testid will be propagated to the internal components.
   *
   * Regarding the structure MCA, module__context--action,
   * only provide the data-testid module (M) where the table is used,
   * the context and the action (CA) will be added dynamic on each component
   *
   * @example data-testid = "workflow_templates"
   */
  'data-testid'?: string;
  activeColumns: ColumnProps[];
  allColumns: ColumnProps[];
  items: unknown[];
  /** If true then will show the submenu to add columns as a header option */
  canAddColumns?: boolean;
  /** If false, will not render the headers. True by default */
  renderTableHeaders?: boolean;
  children?: ReactNode;
  updateActiveColumns?(activeColumnsUpdated: ColumnProps[]): void;
  setIsDragging?(isDragging: boolean): void;
}

export interface TableBodyProps extends WithTestId {
  headers: ColumnProps[];
  children?: ReactNode;
}

export interface TableHeadProps {
  'data-testid'?: string;
  headers: ColumnProps[];
  allColumns: ColumnProps[];
  /** If true then will show the submenu to add columns as a header option */
  canAddColumns?: boolean;
  setDraggingColumnId(columnId: string): void;
  setDroppableColumnId(columnId: string): void;
  updateSortingColumn(columnId: string, order: string): void;
  updateActiveColumns(activeColumnsUpdated: ColumnProps[]): void;
}

export interface TableRowProps {
  children?: ReactNode;
  onMouseEnter?(event: MouseEvent): void;
  onMouseLeave?(event: MouseEvent): void;
}

export interface TableCellProps {
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  flex?: StyleObject['flex'];
  id?: string;
  className?: string;
  children?: ReactNode;
}

export interface ColumnHeaderProps extends Pick<
  ColumnMenuPopoverProps,
  'dataTestId' | 'toggleActiveColumn' | 'updateSortingColumn'
> {
  column: ColumnProps;
  paddingLeft: number;
  paddingRight: number;
  setDraggingColumnId(columnId: string): void;
  setDroppableColumnId(columnId: string): void;
}

export interface ColumnMenuOptionsProps extends Pick<
  ColumnMenuPopoverProps,
  'column' | 'toggleActiveColumn' | 'updateSortingColumn'
> {
  close(): void;
}

export interface AddColumnsButtonProps extends Pick<ColumnMenuPopoverProps, 'toggleActiveColumn'> {
  'data-testid'?: string;
  columns: ColumnProps[];
}

export interface AddColumnsMenuProps extends Pick<ColumnMenuPopoverProps, 'toggleActiveColumn'> {
  'data-testid'?: string;
  columns: ColumnProps[];
}

export type StatefulMenuOverridesParams = {
  'data-testid'?: string;
  labelTemplate?(item: unknown): string;
};
