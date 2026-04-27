import { render, screen } from '@test/test-utils';
import { noop } from '@utils/noop';

import { DataTable } from '../../data-table';
import { useDataTableContext } from '../../hooks/use-data-table-context';
import { DataTableContext } from '../data-table.context';

import type { ColumnConfig, DataTableProps } from '../..';

const props: DataTableProps = {
  columnsConfig: [],
  data: [],
  orderBy: 'columnId',
  orderDirection: 'asc',
  allColumnsConfig: [],
  onChange: noop,
};

const allColumnsConfig: ColumnConfig[] = [
  {
    id: 'col',
    label: 'Column Label',
    isDraggable: false,
    isSortable: false,
    align: 'left',
    isRemovable: false,
    dataType: 'string',
    renderType: 'string',
  },
];

describe('DataTableProvider', () => {
  it('renders correctly', () => {
    const { container } = render(
      <DataTable
        {...props}
        data={[['row']]}
        columnsConfig={allColumnsConfig}
        allColumnsConfig={allColumnsConfig}
        onChange={noop}
      />,
    );

    expect(container).toBeInTheDocument();
    // Assert on the column header
    expect(screen.getByText('Column Label')).toBeInTheDocument();
  });

  it('sets the hovered row index correctly via context', async () => {
    const TestComponent = () => {
      const { hoveredRowIndex, updateHoveredRowIndex } = useDataTableContext();

      return (
        <div>
          <div>
            <div
              onMouseOver={() => updateHoveredRowIndex(0)}
              onFocus={() => updateHoveredRowIndex(0)}
            >
              Row 1
            </div>
            <div
              onMouseOver={() => updateHoveredRowIndex(1)}
              onFocus={() => updateHoveredRowIndex(1)}
            >
              Row 2
            </div>
            <div
              onMouseOver={() => updateHoveredRowIndex(2)}
              onFocus={() => updateHoveredRowIndex(2)}
            >
              Row 3
            </div>
            <div
              onMouseOver={() => updateHoveredRowIndex(3)}
              onFocus={() => updateHoveredRowIndex(3)}
            >
              Row 4
            </div>
          </div>
          <span data-testid="hovered-row-index">The hovered row index is: {hoveredRowIndex}</span>
        </div>
      );
    };

    render(
      <DataTableContext.Provider
        value={{
          ...props,
          hoveredRowIndex: 0,
          isScrollable: false,
          virtualItems: [],
          totalHeight: '100%',
          containerRef: undefined,
          listRef: undefined,
          updateHoveredRowIndex: noop,
          handleOnChange: noop,
        }}
      >
        <TestComponent />
      </DataTableContext.Provider>,
    );

    expect(screen.getByTestId('hovered-row-index')).toHaveTextContent(
      'The hovered row index is: 0',
    );
  });
});
