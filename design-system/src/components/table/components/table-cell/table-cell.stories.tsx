import { TableCell } from './table-cell';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Tables/TableCell',
  component: TableCell,
  args: {
    children: 'a Table Cell for testing',
    'data-testid': 'data-testid',
  },
} as Meta<typeof TableCell>;

/** A TableCell */
const Template: StoryFn<typeof TableCell> = (args) => {
  return (
    <table>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  );
};

export const Default = Template.bind({});
