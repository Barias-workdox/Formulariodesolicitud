import { StatefulTooltipNext } from '@components/tooltip-next/stateful-tooltip-next';
import { AITag } from '@components/webdox-ai/components';

import { MenuItemLabel } from '../components/common/menu-item-label';
import { DEFAULT_ITEMS_PER_PAGE } from '../data-table.constants';

import type { ColumnConfig } from '..';
import type { StoriesExtraColumns, StoriesTableProps } from './data-table-stories.interfaces';
import type { PaginationSettings } from '../data-table.interfaces';

// Define the configuration for all columns in the table
export const allColumnsConfig: StoriesTableProps['allColumnsConfig'] = [
  {
    id: 'id',
    label: 'ID',
    isDraggable: false,
    isSortable: true,
    align: 'left',
    isFixed: true,
    isRemovable: false,
    dataType: 'string',
    isResizable: true,
    renderType: 'string',
  },

  {
    id: 'name',
    label: 'Person name',
    isDraggable: true,
    isSortable: true,
    align: 'left',
    isRemovable: true,
    dataType: 'string',
    renderType: 'string',
    isResizable: true,
  },
  {
    id: 'collectedInsect',
    label: 'Insect name',
    isDraggable: false,
    isSortable: false,
    align: 'center',
    isRemovable: true,
    dataType: 'string',
    renderType: 'string',
    isResizable: true,
  },
  {
    id: 'quantity',
    label: 'Quantity',
    isDraggable: true,
    isSortable: false,
    align: 'right',
    isRemovable: false,
    dataType: 'number',
    renderType: 'string',
    isResizable: true,
  },
  {
    id: 'collectedDate',
    label: 'Collected date',
    isDraggable: true,
    isSortable: true,
    align: 'center',
    isRemovable: true,
    dataType: 'date',
    renderType: 'date',
    isResizable: true,
  },
  {
    id: 'updatedAt',
    label: 'Updated at',
    isDraggable: true,
    isSortable: true,
    align: 'center',
    isRemovable: true,
    dataType: 'date',
    renderType: 'datetime',
  },
  {
    id: 'extraLargeColumnName',
    label: 'Extra large column name with a long text description',
    isDraggable: true,
    isSortable: true,
    align: 'left',
    isRemovable: true,
    dataType: 'string',
    renderType: 'string',
    isResizable: true,
  },
  {
    id: 'custom-action',
    label: 'Custom action',
    isDraggable: true,
    isSortable: true,
    align: 'center',
    isRemovable: true,
    dataType: 'action',
    renderType: 'custom',
    isResizable: true,
  },
  {
    id: 'rowNumber',
    label: 'Row #',
    isDraggable: false,
    isSortable: false,
    align: 'left',
    isFixed: false,
    isRemovable: false,
    dataType: 'number',
    renderType: 'string',
    isResizable: false,
  },
];

/**
 * Utility function to get the label for the AI column.
 */
const getAIColumnLabel = (label: string): JSX.Element => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <MenuItemLabel>{label}</MenuItemLabel>
    <StatefulTooltipNext
      content="AI Column Indicator"
      showArrow
      placement="top"
    >
      <div>
        <AITag
          variant="light"
          shape="rounded"
          size="sm"
        />
      </div>
    </StatefulTooltipNext>
  </div>
);

// Optional column, used in a special story for showing the AI indicator
export const aiColumn: ColumnConfig<StoriesExtraColumns> = {
  id: 'aiColumn',
  isDraggable: true,
  isSortable: true,
  isResizable: true,
  isRemovable: true,
  align: 'left',
  dataType: 'string',
  renderType: 'string',
  label: {
    header: getAIColumnLabel('AI Column'),
    menu: getAIColumnLabel('AI Column - Custom Label'),
  },
};

// Default pagination settings
export const defaultPaginationSettings: PaginationSettings = {
  isEnabled: true,
  method: 'infinite',
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
  onPageEnd: () => {},
};
