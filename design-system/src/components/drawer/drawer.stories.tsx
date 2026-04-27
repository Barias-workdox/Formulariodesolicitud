import { useRef, useState } from 'react';

import { Button } from '../button';
import { Select } from '../select';

import { DrawerBody, DrawerFooter, DrawerHeader } from './components';
import { SideNavContainer } from './components/side-nav/side-nav-container';
import { Drawer } from './drawer';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/Drawer',
  component: Drawer,
  args: {
    'data-testid': 'data-testid',
    isOpen: false,
    anchor: 'right',
    drawerType: 'front',
  },
  argTypes: {
    anchor: {
      options: ['left', 'right'],
      control: { type: 'select' },
    },
    drawerType: {
      options: ['front', 'slide'],
      control: { type: 'select' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=4305-13049&mode=dev',
    },
  },
} as Meta<typeof Drawer>;

/** A Drawer */
const Template: StoryFn<typeof Drawer> = ({ isOpen, ...args }) => {
  const [showDrawer, setShowDrawer] = useState(isOpen);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Button onClick={(): void => setShowDrawer(true)}>Open Drawer</Button>
      <SideNavContainer $style={{ height: '500px' }}>
        <Drawer
          onClose={(): void => setShowDrawer(false)}
          isOpen={showDrawer}
          sibling={ref}
          {...args}
        >
          <DrawerHeader
            onClose={(): void => setShowDrawer(false)}
            title="Drawer Header"
          />
          <DrawerBody>
            <Select
              options={[{ id: 'a', label: 'hola' }]}
              onChange={() => null}
            />
            <div>
              <div style={{ height: '500px' }}>CONTENT</div>
            </div>
            <Select
              options={[{ id: 'a', label: 'hola' }]}
              onChange={() => null}
            />
          </DrawerBody>
          <DrawerFooter>Drawer Footer</DrawerFooter>
        </Drawer>
        <div
          ref={ref}
          style={{
            height: '400px',
            padding: '1rem',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '400px',
              border: '1px solid black',
              backgroundColor: 'grey',
            }}
          >
            CONTENT
          </div>
        </div>
      </SideNavContainer>
    </>
  );
};

export const Default = Template.bind({});

export const SideNav = Template.bind({});

SideNav.args = {
  drawerType: 'front',
};
