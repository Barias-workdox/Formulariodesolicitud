import { useEffect, useRef, useState } from 'react';

import { StyledCell } from 'baseui/table';
import { useDebounce } from 'react-use';

import { Pagination } from '../../pagination';
import { useCss } from '../../utils/hooks/use-css';

import { DraggableColumnsTable, TableCell, TableRow } from './draggable-columns-table';

import type { ColumnProps } from './draggable-columns-table.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';
import type { Option } from 'baseui/select';
import type { StyleObject } from 'styletron-standard';

const allColumns: ColumnProps[] = [
  {
    id: 'name',
    label: 'Name',
    centered: false,
    sortable: false,
    draggable: true,
    removable: true,
    flex: 1,
  },
  {
    id: 'age',
    label: 'Age',
    centered: false,
    sortable: true,
    draggable: true,
    removable: true,
    flex: 1,
  },
  {
    id: 'email',
    label: 'Email',
    centered: false,
    sortable: true,
    draggable: true,
    removable: true,
    flex: 1,
  },
  {
    id: 'phone',
    label: 'Phone',
    centered: false,
    sortable: true,
    draggable: true,
    removable: true,
    flex: 1,
  },
  {
    id: 'address',
    label: 'Address',
    centered: false,
    sortable: false,
    draggable: true,
    removable: true,
    flex: 1,
  },
];

/** Items to test, generate the required quantity of entries */
const getItems = (quantity: number): Option[] =>
  Array.from(
    { length: quantity },
    (_, index): Option => ({
      id: index,
      label: `cell ${index}`,
      name: `cell ${index}-name`,
      age: `cell ${index}-age`,
      email: `cell ${index}-email`,
      phone: `cell ${index}-phone`,
      address: `cell ${index}-address`,
    }),
  );

/** Base items used in stories */
const items = getItems(50);

const styles = {
  wrapperStyles: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  } as StyleObject,
  bodyWrapperStyles: {
    flex: 1,
    // Calculate with the paddings and components heights
    height: 'calc(100vh - (16px + 16px + 50.5px + 36px + 5px))',
  } as StyleObject,
};

export default {
  title: 'Components/Tables/DraggableColumnsTable',
  component: DraggableColumnsTable,
  args: {
    activeColumns: allColumns,
    canAddColumns: false,
    allColumns,
    items: [],
  },
} as Meta<typeof DraggableColumnsTable>;

/** The inner data table located inside the wrapper, that can be resized with the browser changes */
const ResizableDataTable = ({
  items,
  activeColumns,
  onSizeChange,
}: {
  items: Option[];
  activeColumns: ColumnProps[];
  onSizeChange(newSize: number): void;
}): JSX.Element => {
  const { bodyWrapperStyles, theme } = useCss(styles);

  const [tableHeight, setTableHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  // Each time `tableHeight` is changed, `onSizeChange` event will trigger until the debounce delay ends.
  const [, cancelDebounce] = useDebounce(
    () => {
      // Row Height: 70px
      const itemsPerPage = Math.floor(tableHeight / 70);

      onSizeChange(itemsPerPage);
    },
    /** Variable for delay the trigger of `onSizeChange` event when the `window.body` is resized. */
    1000,
    [tableHeight],
  );

  /**
   * Listen for document.body resize event to set the table height value to table height state.
   */
  useEffect(() => {
    /** used to set table height state by the table reference. */
    const setHeight = (): void => {
      // Using requestAnimationFrame here fixes "ResizeObserver loop limit exceeded" error.
      // https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
      window.requestAnimationFrame(() => {
        if (ref.current) {
          const tableContainer = ref.current;

          setTableHeight(tableContainer?.clientHeight || 0);
        }
      });
    };

    const resizeObserver = new ResizeObserver(setHeight);

    setHeight();

    resizeObserver.observe(document.body);

    // On unmount then disconnect the observer.
    return (): void => {
      resizeObserver.disconnect();
      cancelDebounce();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, cancelDebounce]);

  return (
    <div
      ref={ref}
      className={bodyWrapperStyles}
    >
      {items.map((item) => (
        <TableRow
          key={item.id}
          onMouseEnter={(event: MouseEvent): void => console.log('onMouseEnter: ' + item.id, event)}
          onMouseLeave={(event: MouseEvent): void => console.log('onMouseLeave: ' + item.id, event)}
        >
          {activeColumns.map(({ id }, kindex) => {
            const selectedCellLabel = item[id];

            return (
              <TableCell
                key={kindex}
                paddingLeft={kindex === 0 ? theme.spacing.spacing3xl : theme.spacing.spacingXl}
                paddingRight={kindex === activeColumns.length - 1 ? theme.spacing.spacing3xl : 0}
              >
                {selectedCellLabel}
              </TableCell>
            );
          })}
          <StyledCell $style={{ flex: 0, padding: 0, minWidth: '33px' }} />
        </TableRow>
      ))}
    </div>
  );
};

/** A DraggableColumnsTable */
const Template: StoryFn<typeof DraggableColumnsTable> = (args) => {
  const [activeColumns, setActiveColumns] = useState(args.activeColumns);
  const [, setSortingColumn] = useState({ column: allColumns[0].id, order: 'asc' });
  const [, setIsDragging] = useState(false);

  const { wrapperStyles } = useCss(styles);

  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [page, setPage] = useState(1);

  const totalItems = items.length;
  const numPages = itemsPerPage > 0 ? Math.ceil(totalItems / itemsPerPage) : 1;
  const itemsSlice = items.slice(
    (page - 1) * itemsPerPage,
    (page - 1) * itemsPerPage + itemsPerPage,
  );

  /** On change pagination event handler */
  const handlePageChange = ({ nextPage }: { nextPage: number }): void => {
    setPage(nextPage);
  };

  /** Table resizing handler to refetch the collaboration filtered by page */
  const handleTableSizeChange = (itemsPerPage: number): void => {
    setItemsPerPage(itemsPerPage);
    setPage(1);
  };

  /** Update columns config callback by user interaction */
  const updateColumnsConfig = (updatedColumns: ColumnProps[]): void => {
    setActiveColumns(updatedColumns);
  };

  /** Update sorting columns callback by user interaction */
  const updateSortingColumn = (column: string, order: string): void => {
    const newSortingColumn = { column, order };

    setSortingColumn(newSortingColumn);
  };

  return (
    <div className={wrapperStyles}>
      <DraggableColumnsTable
        {...args}
        items={itemsSlice}
        activeColumns={activeColumns}
        allColumns={allColumns}
        updateActiveColumns={updateColumnsConfig}
        updateSortingColumn={updateSortingColumn}
        setIsDragging={setIsDragging}
      >
        <ResizableDataTable
          items={itemsSlice}
          activeColumns={activeColumns}
          onSizeChange={handleTableSizeChange}
        />
      </DraggableColumnsTable>
      <Pagination
        numPages={numPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export const WithHeaders = Template.bind({});

export const WithoutHeaders = Template.bind({});

WithoutHeaders.args = {
  renderTableHeaders: false,
};

export const CanAddColumn = Template.bind({});

CanAddColumn.args = {
  canAddColumns: true,
  activeColumns: allColumns.slice(0, 3),
};
