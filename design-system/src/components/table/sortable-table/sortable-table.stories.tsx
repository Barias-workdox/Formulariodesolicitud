import type { ReactElement } from 'react';

import { Avatar } from '../../avatar';
import { TitleLayout } from '../../layouts/title-layout';
import { Text } from '../../text';
import { TableAction, TableCell } from '../components';
import { DraggableCellTable } from '../draggable-rows-table/components/draggable-cell-table-next';

import { SortableTable } from './sortable-table';

import type { TableCellProps } from '../components';
import type { DraggableCellTableProps } from '../draggable-rows-table';
import type { SortableTableProps } from './sortable-table';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Tables/SortableTable',
  component: SortableTable,
  args: {
    'data-testid': 'testid',
    isDragDisabled: false,
    droppableId: 'droppableId',
  },
} as Meta<typeof SortableTable>;

const TABLE_GAP = '16px';

const data = [
  {
    id: '1',
    fullName: 'Nombre Apellido',
    email: 'email@mail.com',
  },
  {
    id: '2',
    fullName: 'Full Name',
    email: 'email@mail.com',
  },
];

/** Table component */
const Template: StoryFn<typeof SortableTable> = (args) => <SortableTable {...args} />;

const LastHeaderCell = ({ children, ...props }: TableCellProps): ReactElement => (
  <TableCell
    {...props}
    $style={{ ...(props.$style ?? {}), paddingRight: TABLE_GAP }}
  >
    <Text
      variant="bodySmall"
      margin={0}
      fontWeight="500"
      textAlign="right"
    >
      {children}
    </Text>
  </TableCell>
);

const customBodyCell = (
  props: DraggableCellTableProps,
  key: string,
  title: string,
): ReactElement => (
  <DraggableCellTable
    {...props}
    key={key}
    $style={{ ...props.$style, width: '33%' }}
  >
    <Text
      variant="bodySmall"
      margin={0}
    >
      {title}
    </Text>
  </DraggableCellTable>
);

export const Default = Template.bind({});

Default.args = {
  headers: ['id', 'email'],
  isDragDisabled: true,
  children: data.map(({ id, email }) => {
    return [
      <Text
        key={1}
        variant="bodySmall"
        margin={0}
      >
        {id}
      </Text>,
      <Text
        key={2}
        variant="bodySmall"
        margin={0}
        textAlign="right"
      >
        {email}
      </Text>,
    ];
  }),
} as SortableTableProps;

export const CustomWidthCell = Template.bind({});

CustomWidthCell.args = {
  headers: ['id', 'fullName', 'email'],
  children: data.map(({ id, fullName, email }) => {
    return [
      (props) => customBodyCell(props, `cell-id-${id}`, id),
      (props) => customBodyCell(props, `cell-name-${id}`, fullName),
      (props) => customBodyCell(props, `cell-email-${id}`, email),
    ];
  }),
} as SortableTableProps;

export const CustomHeaderCells = Template.bind({});

CustomHeaderCells.args = {
  headers: [
    'User name',
    (props) => (
      <LastHeaderCell
        key="actions-cell"
        {...props}
      >
        Actions
      </LastHeaderCell>
    ),
  ],
  children: data.map(({ id, fullName, email }) => {
    return [
      <TitleLayout
        key={`components__table-title-${id}`}
        overrides={{
          Root: {
            rowGap: '1px',
            columnGap: TABLE_GAP,
            paddingLeft: TABLE_GAP,
          },
          StartEnhancer: {
            width: '32px',
            height: '32px',
          },
        }}
        startEnhancer={
          <Avatar
            size="32px"
            name={fullName}
          />
        }
        titleText={
          <Text
            variant="bodySmall"
            margin={0}
            fontWeight="500"
          >
            {fullName}
          </Text>
        }
        subtitleText={
          <Text
            variant="bodySmall"
            margin={0}
          >
            {email}
          </Text>
        }
      />,
      <div
        key={`components__table-actions-${id}`}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          boxSizing: 'border-box',
          paddingRight: '4px',
          gap: '4px',
        }}
      >
        <TableAction
          data-testid={`components__table--edit-${id}`}
          action="edit"
          onClick={console.log}
        />

        <TableAction
          data-testid={`components__table--remove-${id}`}
          action="delete"
          onClick={console.log}
        />
      </div>,
    ];
  }),
} as SortableTableProps;
