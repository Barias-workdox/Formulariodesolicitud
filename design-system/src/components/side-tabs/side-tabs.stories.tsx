import { useState } from 'react';

import { Document, User } from '@carbon/icons-react';

import { Tab } from '../tabs';
import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import { SideTabHeader } from './components/side-tab-header';

import { SideTabs } from '.';

import type { Meta } from '@storybook/react-vite';
import type { StyleObject } from 'styletron-react';

export default {
  title: 'Components/Content/SideTabs',
  component: SideTabs,
} as Meta<typeof SideTabs>;

const styles = {
  tabsContainerStyles: { height: '100vh', display: 'flex' } as StyleObject,
};

/**
 * Template to use StatefulTabs with Left Side overrides
 */
const LeftSideTabsTemplate = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { theme, tabsContainerStyles } = useCss(styles);

  return (
    <div className={tabsContainerStyles}>
      <SideTabs
        {...props}
        side="left"
        data-testid="design-system__tabs"
        showPanels={isOpen}
        onClickTab={() => setIsOpen(true)}
      >
        <Tab
          data-testid="design-system__tab-first"
          title={<Document />}
        >
          <SideTabHeader onClose={() => setIsOpen(false)}>
            <Text
              variant="h2"
              margin={0}
              fontWeight="500"
            >
              Tab 1
            </Text>
          </SideTabHeader>
          <Text
            variant="bodySmall"
            padding={theme.spacing.spacingMd}
          >
            Lorem est ut eiusmod ipsum magna ut tempor laborum laboris. Et consectetur elit occaecat
            non non sint. Enim exercitation proident laborum anim. Est magna in elit esse. Proident
            occaecat aliqua aliquip esse consectetur veniam dolore nulla Lorem.
          </Text>
        </Tab>
        <Tab
          data-testid="design-system__tab-second"
          title={<User />}
        >
          <SideTabHeader onClose={() => setIsOpen(false)}>
            <Text
              variant="h2"
              margin={0}
              fontWeight="500"
            >
              Tab 2
            </Text>
          </SideTabHeader>
          <Text
            variant="bodySmall"
            padding={theme.spacing.spacingMd}
          >
            Lorem est ut eiusmod ipsum magna ut tempor laborum laboris. Et consectetur elit occaecat
            non non sint. Enim exercitation proident laborum anim. Est magna in elit esse. Proident
            occaecat aliqua aliquip esse consectetur veniam dolore nulla Lorem.
          </Text>
        </Tab>
      </SideTabs>
      <div style={{ padding: theme.spacing.spacingMd }}>
        Irure proident sunt mollit eu anim ex adipisicing quis irure in pariatur laborum. Amet aute
        laborum eiusmod amet ad qui aliquip et elit nostrud reprehenderit enim magna. Ullamco cillum
        est dolore excepteur elit laborum elit magna do quis. Officia occaecat tempor esse ipsum
        reprehenderit officia ad quis dolor id eu nostrud excepteur.
      </div>
    </div>
  );
};

/**
 * Template to use StatefulTabs with Right Side overrides
 */
const RightSideTabsTemplate = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { theme, tabsContainerStyles } = useCss(styles);

  return (
    <div className={tabsContainerStyles}>
      <div style={{ padding: theme.spacing.spacingMd }}>
        Irure proident sunt mollit eu anim ex adipisicing quis irure in pariatur laborum. Amet aute
        laborum eiusmod amet ad qui aliquip et elit nostrud reprehenderit enim magna. Ullamco cillum
        est dolore excepteur elit laborum elit magna do quis. Officia occaecat tempor esse ipsum
        reprehenderit officia ad quis dolor id eu nostrud excepteur.
      </div>
      <SideTabs
        {...props}
        side="right"
        data-testid="design-system__tabs"
        showPanels={isOpen}
        onClickTab={() => setIsOpen(true)}
      >
        <Tab
          data-testid="design-system__tab-first"
          title={<Document />}
        >
          <SideTabHeader onClose={() => setIsOpen(false)}>
            <Text
              variant="h2"
              margin={0}
              fontWeight="500"
            >
              Tab 1
            </Text>
          </SideTabHeader>
          <Text
            variant="bodySmall"
            padding={theme.spacing.spacingMd}
          >
            Lorem est ut eiusmod ipsum magna ut tempor laborum laboris. Et consectetur elit occaecat
            non non sint. Enim exercitation proident laborum anim. Est magna in elit esse. Proident
            occaecat aliqua aliquip esse consectetur veniam dolore nulla Lorem.
          </Text>
        </Tab>
        <Tab
          data-testid="design-system__tab-second"
          title={<User />}
        >
          <SideTabHeader onClose={() => setIsOpen(false)}>
            <Text
              variant="h2"
              margin={0}
              fontWeight="500"
            >
              Tab 2
            </Text>
          </SideTabHeader>
          <Text
            variant="bodySmall"
            padding={theme.spacing.spacingMd}
          >
            Lorem est ut eiusmod ipsum magna ut tempor laborum laboris. Et consectetur elit occaecat
            non non sint. Enim exercitation proident laborum anim. Est magna in elit esse. Proident
            occaecat aliqua aliquip esse consectetur veniam dolore nulla Lorem.
          </Text>
        </Tab>
      </SideTabs>
    </div>
  );
};

export const LeftSideTabsComponent = LeftSideTabsTemplate.bind({});

export const RightSideTabsComponent = RightSideTabsTemplate.bind({});
