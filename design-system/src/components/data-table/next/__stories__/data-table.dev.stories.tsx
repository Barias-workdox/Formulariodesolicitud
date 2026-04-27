import { faker } from '@faker-js/faker';

import { DataTable, getTableData } from '..';

import type { ColumnConfig, DataTableProps, TableCellAlignType } from '..';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Tables/DataTable/Next/Dev',
  component: DataTable,
  tags: ['!autodocs'],
  args: {
    orderBy: '',
    orderDirection: 'desc',
    showActionsColumn: true,
    onChange: () => console.log('onChange'),
  },
} satisfies Meta<DataTableProps>;

// Generate a rawData array with faker
const rawData = new Array(10).fill(null).map(() => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
}));

const booleanProps = [
  // 'isFixed',
  // 'isResizable',
  'isDraggable',
  'isSortable',
  'isRemovable',
] as const satisfies (keyof ColumnConfig)[];

type BooleanProps = (typeof booleanProps)[number];

const alignOptions: TableCellAlignType[] = ['left', 'center', 'right'];

// Helper function to generate all combinations of boolean values
const generateBooleanCombinations = (
  props: typeof booleanProps,
): Record<BooleanProps, boolean>[] => {
  const combinations: Record<BooleanProps, boolean>[] = [];

  const totalCombinations = 1 << props.length; // 2^props.length

  for (let i = 0; i < totalCombinations; i++) {
    const combination: Record<BooleanProps, boolean> = {
      isDraggable: false,
      isRemovable: false,
      isSortable: false,
    };

    // Generates the combination
    props.forEach((prop, index) => {
      // Assign a boolean value based on the bit at the index
      combination[prop] = (i & (1 << index)) !== 0;
    });

    combinations.push(combination as Record<BooleanProps, boolean>);
  }

  return combinations;
};

const booleanCombinations = generateBooleanCombinations(booleanProps);

// Generate all combinations with align values
const allCombinations: ColumnConfig[] = [];

booleanCombinations.forEach((booleanCombination) => {
  alignOptions.forEach((alignValue) => {
    ['id', 'name'].forEach((columnId) => {
      allCombinations.push({
        id: columnId,
        label: Object.entries(booleanCombination)
          .filter(([, value]) => value) // Filter out false values
          .map(([key]) => key)
          .concat(alignValue)
          .join(' + '),
        dataType: 'string',
        renderType: 'string',
        align: alignValue,
        ...booleanCombination,
      });
    });
  });
});

const Template: StoryFn<DataTableProps> = (props: DataTableProps) => {
  return (
    <DataTable
      {...props}
      data={getTableData({ rawData, actionCell: () => <button>+</button>, ...props })}
    />
  );
};

export const Default: StoryObj<DataTableProps> = Template.bind({});

Default.args = {
  activeColumns: allCombinations,
  allColumnsConfig: allCombinations,
};
