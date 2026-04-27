import type { ReactNode } from 'react';

import { StatelessMenu } from '..';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/Menu/StatelessMenu',
  component: StatelessMenu,
  args: {
    placementChildMenu: 'rightTop',
    optionListBorderBottom: true,
  },
} as Meta<typeof StatelessMenu>;

/** A Stateless Menu */
const TemplateStatelessMenu: StoryFn<typeof StatelessMenu> = (args) => {
  return (
    <div
      style={{
        width: '32px',
      }}
    >
      <StatelessMenu
        {...args}
        overrides={{
          List: {
            style: {
              width: '200px',
            },
          },
          Option: {
            props: {
              getItemLabel: (item): ReactNode => item.label,
            },
          },
        }}
        items={[
          {
            id: 'option1',
            label: 'Opción 1',
          },

          {
            id: 'option2',
            label: 'Opción 2',
            disabled: true,
          },
          {
            id: 'option3',
            label: 'Opción 3',
          },
        ]}
      />
    </div>
  );
};

export const DefaultStatelessMenu = TemplateStatelessMenu.bind({});
