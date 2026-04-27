import { HeaderTab } from './components/header-tab';
import { HeaderTabsComponent } from './header-tabs';
import { HeaderTabsProvider } from './header-tabs.provider';

import type { HeaderTabsProps } from './header-tabs.interfaces';

/**
 * Header Tabs Container component that wraps HeaderTabs with its Provider.
 */
const HeaderTabsContainer = (props: HeaderTabsProps): JSX.Element => {
  return (
    <HeaderTabsProvider defaultProps={props}>
      <HeaderTabsComponent {...props} />
    </HeaderTabsProvider>
  );
};

HeaderTabsContainer.Tab = HeaderTab;

export const HeaderTabs = HeaderTabsContainer;
