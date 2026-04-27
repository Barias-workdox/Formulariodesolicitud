import { useState } from 'react';

import { Building, CheckmarkFilled, UserAvatar } from '@carbon/icons-react';
import { ORIENTATION } from 'baseui/tabs-motion';

import { themedUseStyletron } from '../../themes';
import { Button } from '../button';

import { Tab, Tabs } from './';

import type { TabsProps } from './';
import type { Meta } from '@storybook/react-vite';
import type { TabOverrides, TabsOverrides } from 'baseui/tabs-motion';

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  args: {
    orientation: ORIENTATION.horizontal,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=903-12639&mode=dev',
    },
  },
} as Meta<typeof Tabs>;

const Template = (props) => {
  const [activeKey, setActiveKey] = useState<React.Key>('tab2');

  return (
    <Tabs
      {...props}
      activeKey={activeKey}
      onChange={({ activeKey }): void => setActiveKey(activeKey)}
    >
      <Tab
        artwork={() => <UserAvatar size={16} />}
        title="My tab 1"
        key="tab1"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Tab>
      <Tab
        artwork={() => <Building />}
        title="My tab 2"
        key="tab2"
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
        consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </Tab>
    </Tabs>
  );
};

const TabsWithOverridesTemplate = (props) => {
  const [activeKey, setActiveKey] = useState<React.Key>('tab1');

  const tabsOverrides: TabsOverrides = {
    Root: {
      style: {
        backgroundColor: 'turquoise',
      },
    },
    TabHighlight: {
      style: {
        backgroundColor: 'coral',
        height: '3px',
      },
    },
    TabBorder: {
      style: {
        backgroundColor: 'coral',
      },
    },
  };

  const tabOverrides: TabOverrides = {
    Tab: {
      style: ({ $isActive }) => ({
        color: $isActive ? 'coral' : 'black',
        ':hover': {
          color: 'salmon',
        },
      }),
    },
    TabPanel: {
      style: {
        padding: '1.5rem',
        backgroundColor: 'lightsalmon',
      },
    },
  };

  return (
    <Tabs
      {...props}
      activeKey={activeKey}
      onChange={({ activeKey }): void => setActiveKey(activeKey)}
      overrides={tabsOverrides}
    >
      <Tab
        artwork={() => <UserAvatar size={16} />}
        title="My tab 1"
        key="tab1"
        overrides={tabOverrides}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Tab>
      <Tab
        artwork={() => <Building />}
        title="My tab 2"
        key="tab2"
        overrides={tabOverrides}
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
        consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </Tab>
    </Tabs>
  );
};

/**
 * Template to use Tabs vertically aligned with 1 persisting component
 */
const VerticalTabsWithoutPanelsTemplate = (props) => {
  const [css, theme] = themedUseStyletron();
  const [activeKey, setActiveKey] = useState<React.Key>(1);
  const [text, setText] = useState('hello');

  return (
    <div className={css({ display: 'flex', flexDirection: 'row' })}>
      <Tabs
        {...props}
        data-testid="design-system__tabs"
        activeKey={activeKey}
        onChange={({ activeKey }): void => setActiveKey(activeKey)}
      >
        <Tab
          data-testid="design-system__tab-first"
          title="First"
          artwork={CheckmarkFilled}
        />
        <Tab
          data-testid="design-system__tab-second"
          title="Second"
        />
        <Tab
          data-testid="design-system__tab-third"
          title="Third"
        />
      </Tabs>
      <div
        className={css({
          background: theme.colors.neutralBase,
          display: 'flex',
          flex: 1,
          padding: '2rem',
        })}
      >
        <div
          className={css({
            flex: 'inherit',
            display: 'inherit',
            background: 'white',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem',
          })}
        >
          <h3>A persisting page between tab navigation</h3>
          <input
            value={text}
            onChange={(e): void => setText(e.currentTarget.value)}
          />
          <Button onClick={(): void => setActiveKey(Math.floor(Math.random() * 3))}>
            Randomly change the selected tab
          </Button>
        </div>
      </div>
    </div>
  );
};

export const TabsWithDefaultValues = Template.bind({});

export const TabsWithDefaultValuesAndWithoutPanels = Template.bind({}, {
  kind: 'default',
  showPanels: false,
} as TabsProps);

/** Vertical oriented tabs will have panels with zero padding, you can customize it overriding the `Tab` component */
export const TabsWithDefaultValuesAndVerticalOrientation = Template.bind({}, {
  kind: 'default',
  orientation: 'vertical',
} as TabsProps);

export const TabsMedium = Template.bind(
  {
    title: 'title',
  },
  {
    kind: 'medium',
  } as TabsProps,
);

export const TabsMediumWithoutPanels = Template.bind({}, {
  kind: 'medium',
  showPanels: false,
} as TabsProps);

export const TabsMediumAndVerticalOrientation = Template.bind({}, {
  kind: 'medium',
  orientation: 'vertical',
} as TabsProps);

export const TabsWithOverrides = TabsWithOverridesTemplate.bind({});

export const PersistingComponent = VerticalTabsWithoutPanelsTemplate.bind({}, {
  orientation: ORIENTATION.vertical,
} as TabsProps);
