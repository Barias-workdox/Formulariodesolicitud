import { useEffect, useMemo, useState } from 'react';

import {
  CheckmarkFilled,
  Document,
  Edit,
  OverflowMenuHorizontal,
  Pen,
  Send,
} from '@carbon/icons-react';
import { faker } from '@faker-js/faker';
import { action } from 'storybook/actions';

import { StatefulTooltipNext } from '@components/tooltip-next/stateful-tooltip-next';
import { AITag } from '@components/webdox-ai/components';

import { DataTable } from '..';
import { BackgroundIcon } from '../../background-icon';
import { Button } from '../../button/next';
import { EmptyState } from '../../empty-state/empty-state';
import { DisabledRowTooltip } from '../components/common/disabled-row-tooltip';
import { MenuItemLabel } from '../components/common/menu-item-label';
import { TableActionButton } from '../components/common/table-action-button';
import { TableHeaderLabel } from '../components/common/table-header-label';
import { PopoverMenu } from '../components/popover-menu';
import { DEFAULT_ITEMS_PER_PAGE } from '../data-table.constants';
import { useDataTableDisabledRow } from '../hooks/use-data-table-disabled-row';
import { getInfiniteTableData, getTableData } from '../utils/data-table.utils';

import type { DataTableProps, PaginationSettings } from '../data-table.interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

// Define the data structure for the table
type DataType = {
  id: string;
  name: string;
  collectedInsect: string;
  quantity: number;
  collectedDate: string;
  updatedAt: string;
  extraLargeColumnName: string;
  rowNumber: number;
};

// Define additional columns (not part of the data structure)
type ExtraColumns = 'custom-action' | 'aiColumn';

// Define the type for the entire table
type TableType = DataTableProps<DataType, ExtraColumns>;

// Define a custom action button component
const ActionButton = ({ id }: DataType) => (
  <TableActionButton
    dataTestId={`data-table__action-button--${id}`}
    popoverProps={{
      popoverMargin: 8,
      placement: 'left',
      content: () => (
        <PopoverMenu>
          <PopoverMenu.Item
            dataTestId={`${id}--hello-world`}
            $styles={{ justifyContent: 'flex-start' }}
            onClick={() => action(`hello world`)(id)}
          >
            <Edit /> Hello World
          </PopoverMenu.Item>
          <PopoverMenu.Item
            dataTestId={`${id}--lorem-ipsum`}
            $styles={{ justifyContent: 'flex-start' }}
            onClick={() => action(`lorem ipsum`)(id)}
          >
            <Send /> Lorem ipsum
          </PopoverMenu.Item>
        </PopoverMenu>
      ),
    }}
  >
    <OverflowMenuHorizontal />
  </TableActionButton>
);

/** Renders a custom action cell with a disabled row tooltip to show why the button is disabled when it applies */
const CustomActionCell = ({ id }: { id: string }): JSX.Element => {
  const { isRowDisabled } = useDataTableDisabledRow();

  return (
    <DisabledRowTooltip>
      <Button
        kind="neutral"
        appearance="outlined"
        endEnhancer={() => <CheckmarkFilled color="deepskyblue" />}
        onClick={() => action('On custom action click')(id)}
        disabled={isRowDisabled}
      >
        Click me
      </Button>
    </DisabledRowTooltip>
  );
};

const defaultPaginationSettings: PaginationSettings = {
  isEnabled: true,
  method: 'infinite',
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
  onPageEnd: () => {},
};

// Define the configuration for all columns in the table
const allColumnsConfig: TableType['columnsConfig'] = [
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

// Generate sample data for the table
const getRawData = (totalItems = DEFAULT_ITEMS_PER_PAGE): DataType[] =>
  new Array(totalItems).fill(0).map((_, index) => ({
    id: faker.string.hexadecimal({ length: 7 }),
    name: faker.person.fullName(),
    collectedInsect: faker.animal.insect(),
    quantity: faker.number.int(),
    collectedDate: faker.date.anytime().toISOString(),
    updatedAt: faker.date.anytime().toISOString(),
    extraLargeColumnName: faker.string.alpha({ length: 50 }),
    rowNumber: index + 1,
    aiColumn: faker.animal.bird(),
  }));

// Define a function to fetch and format data for the table
const getData = ({
  rawData = getRawData(),
  columnsConfig,
}: Pick<TableType, 'columnsConfig'> & {
  rawData: DataType[];
}) =>
  getTableData({
    rawData,
    actionCell: ActionButton,
    columnsConfig,
    customRenders: {
      'custom-action': ({ id }) => <CustomActionCell id={id} />,
    },
  });

const getInfiniteData = ({
  rawData = getRawData(),
  columnsConfig,
  isLoading,
  paginationSettings = { ...defaultPaginationSettings, isEnabled: false },
}: Pick<TableType, 'columnsConfig' | 'isLoading' | 'paginationSettings'> & {
  rawData: DataType[];
}) =>
  getInfiniteTableData({
    rawData,
    actionCell: ActionButton,
    isLoading,
    paginationSettings,
    columnsConfig,
    customRenders: {
      'custom-action': ({ id }) => <CustomActionCell id={id} />,
    },
  });

const Template: StoryFn<TableType> = ({
  totalData = DEFAULT_ITEMS_PER_PAGE,
  ...props
}: TableType & { totalData?: number }) => {
  const [rawData] = useState(getRawData(totalData));
  const [tableState, setTableState] = useState({ ...props });

  const tableData = useMemo(
    () => getData({ columnsConfig: tableState.columnsConfig, rawData }),
    [rawData, tableState.columnsConfig],
  );

  const onChange = (updatedTableState: TableType): void => {
    setTableState({ ...props, ...updatedTableState });
  };

  return (
    <div style={{ height: '500px' }}>
      <DataTable
        {...tableState}
        data={tableData}
        onChange={onChange}
        onContextMenu={(event, rowIndex) => {
          action('on-context-menu')(event, rowIndex);
        }}
      />
    </div>
  );
};

const InfiniteLoadingDataTemplate: StoryFn<TableType> = ({
  isLoading: _isLoading,
  paginationSettings = defaultPaginationSettings,
  ...props
}: TableType) => {
  const [rawData, setRawData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(_isLoading);
  const [tableState, setTableState] = useState({ ...props });

  const tableData = useMemo(
    () => getInfiniteData({ ...tableState, rawData, isLoading, paginationSettings }),
    [isLoading, paginationSettings, tableState, rawData],
  );

  /**
   * Simulates a query that fetch data. We're doing a logic that indicates if the `isLoading` property
   * is `true`, means that some API is being called (simulated by a _timeout_) and the loading table state
   * is rendered
   */
  useEffect(() => {
    let apiTimeout: ReturnType<typeof setTimeout>;

    if (isLoading) {
      apiTimeout = setTimeout(() => {
        setRawData((prev) => [...prev, ...getRawData()]);
        setIsLoading(false);
      }, 2000);
    }

    return () => {
      if (apiTimeout) {
        clearTimeout(apiTimeout);
      }
    };
  }, [isLoading]);

  const onChange = (updatedTableState: TableType): void => {
    setTableState({ ...updatedTableState });
  };

  return (
    <div style={{ height: '500px' }}>
      <DataTable
        {...tableState}
        data={tableData}
        isLoading={isLoading}
        onChange={onChange}
        paginationSettings={{
          ...paginationSettings,
          onPageEnd: () => {
            setIsLoading(true);
          },
        }}
      />
    </div>
  );
};

const VerticalScrollTemplate: StoryFn<TableType> = (props) => {
  return <Template {...props} />;
};

const EmptyDataTemplate: StoryFn<TableType> = (props) => {
  return (
    <div style={{ height: '500px' }}>
      <DataTable {...props} />
    </div>
  );
};

export default {
  title: 'Components/Tables/DataTable',
  component: DataTable<DataType, ExtraColumns>,
  tags: ['!autodocs'],
  args: {
    allColumnsConfig,
    columnsConfig: allColumnsConfig,
    orderBy: 'id',
    orderDirection: 'desc',
    showActionsColumn: true,
    onChange: () => console.log('onChange'),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/d6NSl7Hd5iv8ArOc9pgjhl/Nuclear-%5BDS-Lab%5D?type=design&node-id=2876-106274&mode=design&t=Ghaby9JKZOTQUX0Q-0',
    },
  },
} satisfies Meta<TableType>;

export const Default: StoryObj<TableType> = Template.bind({});

Default.args = {
  columnsConfig: allColumnsConfig.slice(0, 4),
};

export const InfiniteLoadingData: StoryObj<TableType> = InfiniteLoadingDataTemplate.bind({});

InfiniteLoadingData.args = {
  orderBy: 'id',
  orderDirection: 'asc',
  columnsConfig: allColumnsConfig.slice(0, 4),
  isLoading: true,
  showActionsColumn: true,
  isRowClickable: false,
  paginationSettings: defaultPaginationSettings,
};

export const WithHorizontalScroll: StoryObj<TableType> = Template.bind({});

export const WithVerticalScroll: StoryObj<TableType> = VerticalScrollTemplate.bind({});

export const WithoutHeaders: StoryObj<TableType> = Template.bind({});

WithoutHeaders.args = {
  showHeaders: false,
};

export const WithRowsSelection: StoryObj<TableType> = Template.bind({});

WithRowsSelection.args = {
  showRowsSelection: true,
};

export const WithoutActionsColumn: StoryObj<TableType> = Template.bind({});

WithoutActionsColumn.args = {
  showActionsColumn: false,
};

export const WithoutFixedColumns: StoryObj<TableType> = Template.bind({});

WithoutFixedColumns.args = {
  allColumnsConfig: allColumnsConfig.map((column) => ({ ...column, isFixed: false })),
  columnsConfig: allColumnsConfig.map((column) => ({ ...column, isFixed: false })),
};

export const WithoutShowColumnsButton: StoryObj<TableType> = Template.bind({});

WithoutShowColumnsButton.args = {
  showHeaderActionButton: false,
  columnsConfig: allColumnsConfig.slice(0, 3),
};

export const WithoutDraggableColumns: StoryObj<TableType> = Template.bind({});

WithoutDraggableColumns.args = {
  columnsConfig: allColumnsConfig.slice(0, 3).map((column) => ({ ...column, isDraggable: false })),
};

export const WithLoadingState: StoryObj<TableType> = EmptyDataTemplate.bind({});

WithLoadingState.args = {
  isLoading: true,
  data: [],
  columnsConfig: allColumnsConfig.slice(0, 3).map((column) => ({ ...column, isDraggable: false })),
};

export const WithClickableRows: StoryObj<TableType> = Template.bind({});

WithClickableRows.args = {
  columnsConfig: allColumnsConfig.slice(0, 3),
  isRowClickable: true,
  onClickRow: (rowIndex: number) => action('Clicked Row')(rowIndex),
};

export const Empty: StoryObj<TableType> = EmptyDataTemplate.bind({});

Empty.args = {
  data: [],
  emptyState: (
    <EmptyState
      title="Ex eu cupidatat minim qui"
      description="Velit ex aliqua excepteur fugiat. Cupidatat ea\nin aliquip minim ipsum qui cupidatat nisi cupidatat."
      link={{ text: 'Nostrud occaecat consequat', href: 'https://app.webdoxclm.com/' }}
      primaryButtonProps={{
        'data-testid': 'empty-table__primary-button',
        onClick: () => action('Primary button was clicked'),
        startEnhancer: <Pen />,
        text: 'Officia commodo',
      }}
      secondaryButtonProps={{
        'data-testid': 'empty-table__secondary-button',
        onClick: () => action('Secondary button was clicked'),
        text: 'Deserunt velit',
      }}
      Icon={
        <BackgroundIcon
          background={{
            height: '54px',
            width: '54px',
          }}
          icon={{
            Icon: Document,
          }}
        />
      }
    />
  ),
};

export const WithCustomRowHeight: StoryObj<TableType> = Template.bind({});

WithCustomRowHeight.args = {
  rowHeight: '32px',
};

export const VirtualizationPerformance: StoryObj = Template.bind({});

VirtualizationPerformance.args = {
  columnsConfig: [
    allColumnsConfig.find((column) => column.id === 'rowNumber'),
    ...allColumnsConfig.slice(0, 3).map((column) => ({ ...column, isFixed: false })),
  ],
  totalData: 1000,
};

export const WithAIIndicator: StoryObj<TableType> = Template.bind({});

WithAIIndicator.args = {
  columnsConfig: [
    ...allColumnsConfig.slice(0, 3),
    {
      id: 'aiColumn',
      isDraggable: true,
      isSortable: true,
      align: 'left',
      isRemovable: true,
      dataType: 'string',
      renderType: 'string',
      isResizable: true,
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TableHeaderLabel>AI Column</TableHeaderLabel>
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
              >
                AI
              </AITag>
            </div>
          </StatefulTooltipNext>
        </div>
      ),
    },
  ],
  allColumnsConfig: [
    ...allColumnsConfig,
    {
      id: 'aiColumn',
      isDraggable: true,
      isSortable: true,
      align: 'left',
      isRemovable: true,
      dataType: 'string',
      renderType: 'string',
      isResizable: true,
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MenuItemLabel>AI Column</MenuItemLabel>
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
      ),
    },
  ],
};

export const WithDisabledRows: StoryObj<TableType> = Template.bind({});

WithDisabledRows.args = {
  columnsConfig: allColumnsConfig.slice(0, 4),
  isRowClickable: true,
  onClickRow: (rowIndex: number) => action('Clicked Row')(rowIndex),
  translateDisableReason: (reason: string) => `Disabled by ${reason}`,
  rowsDisabled: { 1: 'deleting', 3: 'updating', 5: '' },
  showRowsSelection: true,
};
