import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { CellSkeleton } from '../';
import { DataTable } from '../data-table';
import { getTableData } from '../utils/data-table.utils';

import '@test/__mocks__/use-virtualizer.mock';

import type { ColumnConfig, DataTableProps } from '../data-table.interfaces';
import type { ActionCell as ActionCellType } from '../utils/data-table.utils';

type DataType = { id: number; name: string; age: number };

const rawData: DataType[] = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
];

type ExtraColumnsIds = 'action';

type AllColumnsConfig = ColumnConfig<keyof DataType | ExtraColumnsIds>;

const allColumnsConfig: AllColumnsConfig[] = [
  {
    id: 'id',
    label: 'Id',
    isDraggable: false,
    isSortable: true,
    align: 'left',
    isRemovable: false,
    minWidth: '200px',
    dataType: 'number',
    renderType: 'string',
  },
  {
    id: 'name',
    label: 'Name',
    isDraggable: true,
    isSortable: true,
    align: 'left',
    isRemovable: true,
    minWidth: '200px',
    dataType: 'string',
    renderType: 'string',
  },
  {
    id: 'age',
    label: 'Age',
    isDraggable: true,
    isSortable: true,
    align: 'center',
    isRemovable: true,
    dataType: 'number',
    renderType: 'string',
  },
  {
    id: 'action',
    label: 'Action',
    isDraggable: false,
    isSortable: false,
    align: 'left',
    isRemovable: false,
    dataType: 'action',
    renderType: 'custom',
  },
];

const columnsConfig: AllColumnsConfig[] = allColumnsConfig.slice(0, 2);

const ActionCell: ActionCellType<DataType> = ({ id, name }: DataType) => (
  <button key={id}>Action {name}</button>
);

const data = getTableData({ rawData, columnsConfig, actionCell: ActionCell });

const { t } = renderUseTranslation();

const props: DataTableProps<DataType, ExtraColumnsIds> = {
  data,
  allColumnsConfig,
  showRowsSelection: false,
  columnsConfig,
  orderBy: 'id',
  orderDirection: 'asc',
  onChange: testHelpers.fn(),
};

describe('DataTable', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders the DataTable component', () => {
    render(<DataTable {...props} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Action John')).toBeInTheDocument();

    // Find the action button by checking all buttons' text content
    const actionButtons = screen.getAllByRole('button');
    const hasActionJohn = actionButtons.some(
      (btn) => btn.textContent && btn.textContent.includes('Action John'),
    );

    expect(hasActionJohn).toBe(true);
  });

  it('shows a new column correctly', async () => {
    render(<DataTable {...props} />);

    // Click on the "Add" button
    const addButton = screen.getByLabelText(t('dataTable.addColumns'));

    expect(addButton).toBeTruthy();

    await userEvent.click(addButton);

    // Click on the "Age" menu item
    const ageMenuItem = screen.getByText('Age');

    await userEvent.click(ageMenuItem);

    // We add a loading spinner to the new column while the consumer app populates the new data array
    // The new column is added at the end of the data, before the action cell
    const tempData = data.map((row) => [
      ...row.slice(0, row.length - 1),
      <CellSkeleton
        key="column-skeleton"
        data-testid="column-skeleton"
      />,
      row.at(-1),
    ]);

    const newColumn = allColumnsConfig.find(({ label }) => label === 'Age');

    // We add the clicked column by its label
    const columnsConfigUpdated: AllColumnsConfig[] = newColumn
      ? [...columnsConfig, newColumn]
      : columnsConfig;

    const propsUpdated: DataTableProps<DataType, ExtraColumnsIds> = {
      ...props,
      data: tempData,
      columnsConfig: columnsConfigUpdated,
    };

    expect(props.onChange).toHaveBeenCalledWith(propsUpdated, 'show-column');
  });

  it('hides a column correctly', async () => {
    render(<DataTable {...props} />);

    const columnToHideLabel = 'Name';

    // Click on the column header with label "Name"
    const header = screen.getByLabelText(
      `${columnToHideLabel} ${t('dataTable.ariaLabels.sortingButton')}`,
    );

    await userEvent.click(header);

    // Click on the "hideColumn" menu item
    const hideColumnItem = screen.getByText(t('dataTable.sortBy.hideColumn'));

    await userEvent.click(hideColumnItem);

    // Update data to remove the hidden column from each row
    const tempData = data.map((row) => row.filter((_, index) => index !== 1));

    // Update columnsConfig to remove the hidden column
    const columnsConfigUpdated: AllColumnsConfig[] = columnsConfig.filter(
      (column) => column.label !== columnToHideLabel,
    );

    const propsUpdated: DataTableProps<DataType, ExtraColumnsIds> = {
      ...props,
      data: tempData,
      columnsConfig: columnsConfigUpdated,
    };

    expect(props.onChange).toHaveBeenCalledWith(propsUpdated, 'hide-column');
  });

  it('sorts ascending correctly', async () => {
    render(
      <DataTable
        {...props}
        orderBy="id"
        orderDirection="desc"
      />,
    );

    const columnToSort = 'Name';

    // Click on the column header with label "Name"
    const header = screen.getByLabelText(
      `${columnToSort} ${t('dataTable.ariaLabels.sortingButton')}`,
    );

    await userEvent.click(header);

    // Click on the "ascending" menu item
    const sortAscMenuItem = screen.getByText(t('dataTable.sortBy.dataType.string.asc'));

    await userEvent.click(sortAscMenuItem);

    const propsUpdated: DataTableProps<DataType, ExtraColumnsIds> = {
      ...props,
      orderBy: 'name',
      orderDirection: 'asc',
    };

    expect(props.onChange).toHaveBeenCalledWith(propsUpdated, 'sort');
  });

  it('sorts descending correctly', async () => {
    render(
      <DataTable
        {...props}
        orderBy="id"
        orderDirection="asc"
      />,
    );

    const columnToSort = 'Name';

    // Click on the column header with label "Name"
    const header = screen.getByLabelText(
      `${columnToSort} ${t('dataTable.ariaLabels.sortingButton')}`,
    );

    await userEvent.click(header);

    // Click on the "descending" menu item
    const sortDescMenuItem = screen.getByText(t('dataTable.sortBy.dataType.string.desc'));

    await userEvent.click(sortDescMenuItem);

    const propsUpdated: DataTableProps<DataType, ExtraColumnsIds> = {
      ...props,
      orderBy: 'name',
      orderDirection: 'desc',
    };

    expect(props.onChange).toHaveBeenCalledWith(propsUpdated, 'sort');
  });

  it('updates props correctly', async () => {
    const { rerender } = render(<DataTable {...props} />);

    expect(screen.queryByText('Age')).not.toBeInTheDocument();

    const dataUpdated = getTableData({
      rawData,
      columnsConfig: allColumnsConfig,
      actionCell: ActionCell,
    });

    rerender(
      <DataTable
        {...props}
        columnsConfig={allColumnsConfig}
        data={dataUpdated}
      />,
    );

    expect(screen.getByText('Age')).toBeInTheDocument();
  });
  it('disables row correctly', async () => {
    const rowsDisabled = { 0: 'deleting' };
    const onClickRow = vi.fn();

    render(
      <DataTable
        {...props}
        isRowClickable={true}
        onClickRow={onClickRow}
        rowsDisabled={rowsDisabled}
      />,
    );

    const disabledRowCell = screen.getByText('John');

    expect(disabledRowCell).toBeInTheDocument();

    await userEvent.click(disabledRowCell);

    expect(onClickRow).not.toHaveBeenCalled();
  });
});
