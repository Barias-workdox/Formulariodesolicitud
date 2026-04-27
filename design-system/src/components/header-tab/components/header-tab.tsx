import { Tab } from '@components/tabs';

import { useHeaderTabs } from '../header-tabs.provider';
import { composeDataTestId } from '../utils/compose-data-test-id';

import type { TabProps } from '@components/tabs';

export type HeaderTabProps = TabProps;

/**
 * Header Tab component to be used within Header Tabs.
 */
export const HeaderTab = (props: HeaderTabProps): JSX.Element => {
  const { isDisabled, dataTestId } = useHeaderTabs();

  const testId = composeDataTestId(`${dataTestId}-avatar`);
  const isTabDisabled = props.disabled || isDisabled;

  return (
    <Tab
      {...props}
      data-testid={testId}
      disabled={isTabDisabled}
    />
  );
};
