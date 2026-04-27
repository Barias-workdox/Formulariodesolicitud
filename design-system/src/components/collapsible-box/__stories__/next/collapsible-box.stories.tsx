import { Chat, CheckmarkOutline, TrashCan } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';

import { Tag } from '../../../tag';
import { CollapsibleBox, Panel } from '../../next';

import type { CollapsibleBoxProps } from '../../next/collapsible-box';
import type { Meta } from '@storybook/react-vite';

export default {
  title: 'Components/Content/CollapsibleBox/Next',
  component: CollapsibleBox,
  args: {},
  argTypes: {
    gap: {
      control: 'text',
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof CollapsibleBox>;

const Template = ({ ...rest }: CollapsibleBoxProps) => {
  return (
    <CollapsibleBox {...rest}>
      <Panel
        key="panel-1"
        startEnhancer={
          <Panel.BackgroundIcon
            Icon={Chat}
            shape="square"
          />
        }
        endEnhancer={
          <Panel.IconButton
            kind="tertiary"
            onClick={(event) => {
              event.stopPropagation();
              alert('trash clicked');
            }}
          >
            <TrashCan />
          </Panel.IconButton>
        }
        title="Title"
      >
        {faker.lorem.paragraphs(2)}
      </Panel>
      <Panel
        key="panel-2"
        startEnhancer={
          <Panel.BackgroundIcon
            Icon={Chat}
            shape="square"
          />
        }
        endEnhancer={
          <Panel.IconButton
            kind="tertiary"
            onClick={(event) => {
              event.stopPropagation();
              alert('trash clicked');
            }}
          >
            <TrashCan />
          </Panel.IconButton>
        }
        title="Title2"
      >
        {faker.lorem.paragraphs(2)}
      </Panel>
    </CollapsibleBox>
  );
};

const TemplateWithCompoundTitle = ({ ...rest }: CollapsibleBoxProps) => {
  return (
    <CollapsibleBox {...rest}>
      <Panel
        key="panel-1"
        startEnhancer={
          <Panel.BackgroundIcon
            Icon={Chat}
            shape="square"
          />
        }
        endEnhancer={
          <Panel.IconButton
            kind="tertiary"
            onClick={(event) => {
              event.stopPropagation();
              alert('trash clicked');
            }}
          >
            <TrashCan />
          </Panel.IconButton>
        }
        title={
          <Panel.CompoundTitle>
            <Panel.Title collapsedTitle="Collapsed Title">Title</Panel.Title>
            <Panel.Subtitle collapsedSubtitle="Collapsed Subtitle">Subtitle</Panel.Subtitle>
            <Tag icon={<CheckmarkOutline />}>Example</Tag>
          </Panel.CompoundTitle>
        }
      >
        {faker.lorem.paragraphs(2)}
      </Panel>
      <Panel
        key="panel-2"
        startEnhancer={
          <Panel.BackgroundIcon
            Icon={Chat}
            shape="square"
          />
        }
        endEnhancer={
          <Panel.IconButton
            kind="tertiary"
            onClick={(event) => {
              event.stopPropagation();
              alert('trash clicked');
            }}
          >
            <TrashCan />
          </Panel.IconButton>
        }
        title={
          <Panel.CompoundTitle>
            <Panel.Title collapsedTitle="Collapsed Title2">Title2</Panel.Title>
            <Panel.Subtitle collapsedSubtitle="Collapsed Subtitle2">Subtitle2</Panel.Subtitle>
          </Panel.CompoundTitle>
        }
      >
        {faker.lorem.paragraphs(2)}
      </Panel>
    </CollapsibleBox>
  );
};

const TemplateMenu = ({ ...rest }: CollapsibleBoxProps) => {
  return (
    <CollapsibleBox {...rest}>
      <Panel
        key="panel-1"
        title="ORGANIZACIÓN"
      >
        {faker.lorem.paragraphs(2)}
      </Panel>
      <Panel
        key="panel-2"
        title="DOCUMENTOS"
      >
        {faker.lorem.paragraphs(2)}
      </Panel>
    </CollapsibleBox>
  );
};

export const Default = Template.bind({});

Default.args = {
  size: 'large',
  gap: '16px',
};

export const WithExpandedState = Template.bind({});

WithExpandedState.args = {
  size: 'large',
  gap: '16px',
  expanded: ['panel-1'],
} as CollapsibleBoxProps;

export const SmallSize = Template.bind({});

SmallSize.args = {
  size: 'small',
  gap: '16px',
} as CollapsibleBoxProps;

export const WithCompoundTitle = TemplateWithCompoundTitle.bind({});

WithCompoundTitle.args = {
  size: 'large',
  gap: '16px',
} as CollapsibleBoxProps;

export const Menu = TemplateMenu.bind({});

Menu.args = {
  size: 'large',
  gap: '16px',
} as CollapsibleBoxProps;
