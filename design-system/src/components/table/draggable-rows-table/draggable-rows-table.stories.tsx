import { Fragment, useState } from 'react';
import type { ReactElement } from 'react';

import { CloseFilled } from '@carbon/icons-react';

import { IconButton } from '../../button';
import { TableCell } from '../../table/components';
import { useCss } from '../../utils/hooks/use-css';
import { useDragEnd } from '../../utils/hooks/use-drag-end';

import { DraggableCellTable } from './components/draggable-cell-table-next';
import { DraggableRowsTable } from './draggable-rows-table';

import type { DropResult } from '@hello-pangea/dnd';
import type { Meta, StoryFn } from '@storybook/react-vite';

type ExampleItemsType = {
  id: number;
  name: string;
  last_name: string;
  dni: string;
};

export default {
  title: 'Components/Tables/DraggableRowsTable',
  component: DraggableRowsTable,
  args: {
    droppableId: 'draggable-rows-table-story',
  },
} as Meta<typeof DraggableRowsTable>;

const firstItemsList: ExampleItemsType[] = [
  {
    id: 1,
    name: 'Felipe',
    last_name: 'Gonzalez',
    dni: '460012312',
  },
  {
    id: 2,
    name: 'Mia',
    last_name: 'Wong',
    dni: '460012312',
  },
  {
    id: 3,
    name: 'Andrew',
    last_name: 'Kazantzis',
    dni: '669012312',
  },
  {
    id: 4,
    name: 'Ruveni',
    last_name: 'Ellawala',
    dni: '669012312',
  },
];

/** Table rows item component. */
const DraggableTableRow = ({ item, index, handleDelete, isDisabled }): ReactElement => {
  const { theme } = useCss();

  return (
    <Fragment key={item.id}>
      <DraggableCellTable
        key={`draggable-cell-item-0-${index}`}
        data-testid="draggable-cell-table"
        isDisabled={isDisabled}
        $style={{ width: '33%', padding: theme.spacing.spacingMd }}
      >
        {item.name}
      </DraggableCellTable>
      <TableCell
        key={`draggable-cell-item-1-${index}`}
        $style={{ width: '33%' }}
      >
        {item.last_name}
      </TableCell>
      <TableCell
        key={`draggable-cell-item-2-${index}`}
        $style={{ width: '33%' }}
      >
        {item.dni}
      </TableCell>
      <TableCell>
        <IconButton
          kind="link-tertiary"
          size="auto"
          shape="circle"
          onClick={(): void => handleDelete(index)}
        >
          <CloseFilled size={16} />
        </IconButton>
      </TableCell>
    </Fragment>
  );
};

/** Base DraggableRowsTable component */
const Template: StoryFn<typeof DraggableRowsTable> = (args) => {
  const [items, setItems] = useState([...firstItemsList]);
  const { onDragEnd, onRemoveElement } = useDragEnd(items);

  /** handles drag end results and set to component state. */
  const handleDragEnd = (result: DropResult): void => {
    const sortedElements = onDragEnd<ExampleItemsType>(result);

    setItems(sortedElements);
  };
  /** handles drag end results and set to component state. */
  const handleRemoveElement = (itemIndex: number): void => {
    const sortedElements = onRemoveElement<ExampleItemsType>(itemIndex);

    setItems(sortedElements);
  };

  const { isDragDisabled = false } = args;

  const tableItems = items.map(
    (item, index): React.ReactNode => (
      <DraggableTableRow
        key={item.id}
        item={item}
        index={index}
        isDisabled={isDragDisabled}
        handleDelete={handleRemoveElement}
      />
    ),
  );

  return (
    <DraggableRowsTable
      {...args}
      items={tableItems}
      onDragEnd={handleDragEnd}
    />
  );
};

export const Default = Template.bind({});

export const DraggableDisabled = Template.bind({});

DraggableDisabled.args = {
  isDragDisabled: true,
};

const headers = [
  <TableCell
    key={1}
    $style={{ padding: '0 16px' }}
  >
    first name
  </TableCell>,
  <TableCell
    key={2}
    $style={{ padding: '0 16px 0 0' }}
  >
    last name
  </TableCell>,
  <TableCell
    key={3}
    $style={{ padding: '0 16px 0 0' }}
  >
    dni
  </TableCell>,
  <TableCell key={4}>action</TableCell>,
];

export const WithHeader = Template.bind({});

WithHeader.args = {
  headers,
};

export const WithOverrides = Template.bind({});

WithOverrides.args = {
  headers,
  overrides: {
    Root: {
      borderCollapse: 'collapse',
      border: '1px solid rgba(0,0,0,0.3)',
    },
    Row: {
      border: '1px solid rgba(0,0,0,0.3)',
    },
  },
};
