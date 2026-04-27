import { TableAction } from './table-action';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Tables/TableAction',
  component: TableAction,
  args: {
    'data-testid': 'table-action',
    action: 'position',
    buttonKind: 'link-tertiary',
    disabled: false,
    size: 20,
  },
} as Meta<typeof TableAction>;

/** An TableAction */
const Template: StoryFn<typeof TableAction> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <TableAction {...args} />
    </div>
  );
};

export const KindMinimal = Template.bind({});

export const KindPositive = Template.bind({});

KindPositive.args = {
  buttonKind: 'positive',
  action: 'delete',
};

export const CustomTooltipText = Template.bind({});

CustomTooltipText.args = {
  tooltipText: 'Custom tooltip text',
};

export const TooltipHidden = Template.bind({});

TooltipHidden.args = {
  showTooltip: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
