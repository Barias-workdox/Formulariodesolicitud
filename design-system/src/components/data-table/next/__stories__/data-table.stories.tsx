import { useEffect, useMemo, useState } from 'react';

import { Document, Pen } from '@carbon/icons-react';
import { action } from 'storybook/actions';

import { checkNotEmptyValue } from '@utils/check-not-empty-value.util';

import { DataTable } from '..';
import { BackgroundIcon } from '../../../background-icon';
import { EmptyState } from '../../../empty-state';

import {
  aiColumn,
  allColumnsConfig,
  defaultPaginationSettings,
} from './data-table-stories.constants';
import { getActiveColumns, getData, getInfiniteData, getRawData } from './data-table-stories.utils';

import type {
  StoriesDataType,
  StoriesExtraColumns,
  StoriesTableProps,
} from './data-table-stories.interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

type TemplateProps = StoriesTableProps & { rawData: StoriesDataType[] };

const initialData = getRawData();

/** Basic template without infinite loading data */
const Template: StoryFn<TemplateProps> = ({ rawData = initialData, ...rest }) => {
  const [tableState, setTableState] = useState({ ...rest });

  const { activeColumns, allColumnsConfig } = tableState;

  const tableData = useMemo(
    () =>
      getData({
        activeColumns,
        allColumnsConfig,
        rawData,
      }),
    [rawData, activeColumns, allColumnsConfig],
  );

  /** Updates the table state with the new values */
  const onChange = (updatedTableState: StoriesTableProps): void => {
    setTableState({ ...updatedTableState });
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

/** Template for infinite loading data */
const InfiniteLoadingDataTemplate: StoryFn<StoriesTableProps> = ({
  isLoading: _isLoading = true,
  paginationSettings = defaultPaginationSettings,
  ...props
}: StoriesTableProps) => {
  const [rawData, setRawData] = useState<StoriesDataType[]>([]);
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

  /** Updates the table state with the new values */
  const onChange = (updatedTableState: StoriesTableProps): void => {
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

export default {
  title: 'Components/Tables/DataTable/Next',
  component: DataTable<StoriesDataType, StoriesExtraColumns>,
  tags: ['!autodocs'],
  args: {
    showActionsColumn: true,
    orderBy: 'id',
    orderDirection: 'desc',
    allColumnsConfig,
    activeColumns: getActiveColumns(['id', 'name', 'collectedInsect', 'quantity']),
    onChange: () => action('onChange'),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/d6NSl7Hd5iv8ArOc9pgjhl/Nuclear-%5BDS-Lab%5D?type=design&node-id=2876-106274&mode=design&t=Ghaby9JKZOTQUX0Q-0',
    },
  },
} satisfies Meta<StoriesTableProps>;

/** 1. Default story */
export const Default: StoryObj<TemplateProps> = Template.bind({});

/** 2. Infinite loading data story */
export const InfiniteLoadingData: StoryObj<StoriesTableProps> = InfiniteLoadingDataTemplate.bind(
  {},
);

/** 3. With horizontal scroll story */
export const WithHorizontalScroll: StoryObj<TemplateProps> = Template.bind({});

WithHorizontalScroll.args = {
  activeColumns: allColumnsConfig.map(({ id }) => ({ id })),
};

/** 4. With vertical scroll story */
export const WithVerticalScroll: StoryObj<TemplateProps> = Template.bind({});

WithVerticalScroll.args = { rawData: getRawData(50) };

/** 5. Without headers story */
export const WithoutHeaders: StoryObj<TemplateProps> = Template.bind({});

WithoutHeaders.args = {
  showHeaders: false,
};

/** 6. With rows selection story */
export const WithRowsSelection: StoryObj<TemplateProps> = Template.bind({});

WithRowsSelection.args = {
  showRowsSelection: true,
};

/** 7. Without actions column story */
export const WithoutActionsColumn: StoryObj<TemplateProps> = Template.bind({});

WithoutActionsColumn.args = {
  showActionsColumn: false,
};

/** 8. Without fixed columns story */
export const WithoutFixedColumns: StoryObj<TemplateProps> = Template.bind({});

WithoutFixedColumns.args = {
  allColumnsConfig: allColumnsConfig.map((column) => ({ ...column, isFixed: false })),
  activeColumns: allColumnsConfig.map(({ id }) => ({ id })),
};

/** 9. Without show columns button story */
export const WithoutShowColumnsButton: StoryObj<TemplateProps> = Template.bind({});

WithoutShowColumnsButton.args = {
  showHeaderActionButton: false,
};

/** 10. Without draggable columns story */
export const WithoutDraggableColumns: StoryObj<TemplateProps> = Template.bind({});

WithoutDraggableColumns.args = {
  allColumnsConfig: allColumnsConfig.map((column) => ({ ...column, isDraggable: false })),
};

/** 11. With loading state story */
export const WithLoadingState: StoryObj<TemplateProps> = Template.bind({});

WithLoadingState.args = {
  isLoading: true,
  rawData: [],
};

/** 12. With clickable rows story */
export const WithClickableRows: StoryObj<TemplateProps> = Template.bind({});

WithClickableRows.args = {
  isRowClickable: true,
  onClickRow: (rowIndex: number) => action('Clicked Row')(rowIndex),
};

/** 13. Empty story */
export const Empty: StoryObj<TemplateProps> = Template.bind({});

Empty.args = {
  rawData: [],
  emptyState: (
    <EmptyState
      title="Ex eu cupidatat minim qui"
      description="Velit ex aliqua excepteur fugiat. Cupidatat ea\nin aliquip minim ipsum qui cupidatat nisi cupidatat."
      link={{ text: 'Nostrud occaecat consequat', href: 'https://app.webdoxclm.com/' }}
      primaryButtonProps={{
        'data-testid': 'empty-table__primary-button',
        startEnhancer: <Pen />,
        text: 'Officia commodo',
        onClick: () => action('Primary button was clicked'),
      }}
      secondaryButtonProps={{
        'data-testid': 'empty-table__secondary-button',
        text: 'Deserunt velit',
        onClick: () => action('Secondary button was clicked'),
      }}
      Icon={
        <BackgroundIcon
          size="56px"
          Icon={Document}
        />
      }
    />
  ),
};

/** 14. With custom row height story */
export const WithCustomRowHeight: StoryObj<TemplateProps> = Template.bind({});

WithCustomRowHeight.args = {
  rowHeight: '32px',
};

/** 15. Virtualization performance story */
export const VirtualizationPerformance: StoryObj<TemplateProps> = Template.bind({});

VirtualizationPerformance.args = {
  rawData: getRawData(1000),
  allColumnsConfig: allColumnsConfig.map((config) => ({ ...config, isFixed: false })),
  activeColumns: [
    allColumnsConfig.find((column) => column.id === 'rowNumber'),
    ...allColumnsConfig.slice(0, 3).map((column) => ({ ...column, isFixed: false })),
  ].filter(checkNotEmptyValue),
};

/** 16. With AI indicator story */
export const WithAIIndicator: StoryObj<TemplateProps> = Template.bind({});

WithAIIndicator.args = {
  activeColumns: [
    ...allColumnsConfig.slice(0, 3).map(({ id }) => ({ id })),
    {
      id: 'aiColumn',
    },
  ],
  allColumnsConfig: [...allColumnsConfig, aiColumn],
};

/** 17. With disabled rows story */
export const WithDisabledRows: StoryObj<TemplateProps> = Template.bind({});

WithDisabledRows.args = {
  isRowClickable: true,
  onClickRow: (rowIndex: number) => action('Clicked Row')(rowIndex),
  translateDisableReason: (reason: string) => `Disabled by ${reason}`,
  rowsDisabled: { 1: 'deleting', 3: 'updating', 5: '' },
  showRowsSelection: true,
};
