import { TrashCan } from '@carbon/icons-react';

import { IconButton } from '../../button';
import { CollapsibleBox } from '../collapsible-box';

import type { CollapsibleBoxProps } from '../collapsible-box';
import type { Meta } from 'storybook';

const meta: Meta = {
  title: 'Components/Content/CollapsibleBox',
  component: CollapsibleBox,
};

const Template = ({
  title = 'Box title',
  Icon,
  initialState,
  children = 'Main content',
  ...rest
}: CollapsibleBoxProps) => {
  return (
    <CollapsibleBox
      title={title}
      Icon={Icon}
      initialState={initialState}
      {...rest}
    >
      {children}
    </CollapsibleBox>
  );
};

export default meta;

export const Default = Template.bind({});

Default.args = { Icon: '👻' } as CollapsibleBoxProps;

export const NotExpandedByDefault = Template.bind({});

NotExpandedByDefault.args = {
  initialState: {
    isExpanded: false,
  },
} as CollapsibleBoxProps;

export const WithOptions = Template.bind({});

WithOptions.args = {
  overrides: {
    HeaderContainer: {
      style: {
        padding: '16px',
      },
    },
  },
  options: (
    <IconButton
      kind="tertiary"
      size="32px"
      onClick={() => console.log('Delete')}
    >
      <TrashCan />
    </IconButton>
  ),
} as CollapsibleBoxProps;

export const CollapsedTitle = Template.bind({});

CollapsedTitle.args = {
  Icon: undefined,
  title: 'Title',
  collapsedTitle: 'Collapsed Title',
  initialState: { isExpanded: false },
  overrides: {
    HeaderContainer: {
      style: {
        padding: '16px',
      },
    },
  },
} as CollapsibleBoxProps;
