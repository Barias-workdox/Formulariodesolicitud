import { Building, UserAvatar } from '@carbon/icons-react';
import { ORIENTATION } from 'baseui/tabs-motion';

import { StatefulTabs, Tab } from './';

import type { StatefulTabsProps, Tabs } from './';
import type { Meta } from '@storybook/react-vite';

export default {
  title: 'Components/Navigation/Tabs/StatefulTabs',
  component: StatefulTabs,
  args: {
    orientation: ORIENTATION.horizontal,
  },
} as Meta<typeof Tabs>;

const Template = (props) => {
  return (
    <StatefulTabs {...props}>
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
    </StatefulTabs>
  );
};

export const Default = Template.bind({});

export const WithInitialState = Template.bind({}, {
  initialState: { activeKey: 'tab2' },
} as StatefulTabsProps);

export const WithoutPanels = Template.bind({}, {
  showPanels: false,
} as StatefulTabsProps);

export const VerticalOrientation = Template.bind({}, {
  orientation: 'vertical',
} as StatefulTabsProps);

export const WithKindMedium = Template.bind({}, {
  kind: 'medium',
} as StatefulTabsProps);

export const WithKindMediumAndVerticalOrientation = Template.bind({}, {
  kind: 'medium',
  orientation: 'vertical',
} as StatefulTabsProps);

export const TabsWithOverrides = Template.bind({}, {
  overrides: {
    Root: {
      style: {
        backgroundColor: '#8ae8b0',
        color: 'blue',
        fontSize: '3rem',
      },
    },
    TabHighlight: {
      style: {
        backgroundColor: '#e0ff56',
      },
    },
    TabBorder: {
      style: {
        backgroundColor: 'rgba(0,0,0,.1)',
      },
    },
  },
} as StatefulTabsProps);
