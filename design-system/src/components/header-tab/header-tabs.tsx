import { useMemo } from 'react';

import { StatefulTabs } from '@components/tabs';
import { getAllAllowedComponent } from '@utils/react.utils';

import { ALLOWED_HEADER_TAB_ACTIONS_ELEMENTS } from './constants/allowed-elements.constant';
import { getHeaderTabOverrides } from './header-tabs.overrides';
import { HeaderTabWrapper } from './header-tabs.styled';
import { composeDataTestId } from './utils/compose-data-test-id';
import {
  getFontSize,
  getPaddingSize,
  getTabPaddingSize,
  getTopPaddingSize,
} from './utils/size-maps';

import type { HeaderTabsProps } from './header-tabs.interfaces';

/**
 * Header component to be used within other components.
 */
export const HeaderTabsComponent = ({
  dataTestId,
  size = 'small',
  borderRadius = 'borderSm',
  tabs,
  isDisabled,
  activeKey,
  onChange,
}: HeaderTabsProps): JSX.Element => {
  const paddingSize = getPaddingSize(size);
  const topPaddingSize = getTopPaddingSize(size);
  const tabPaddingSize = getTabPaddingSize(size);
  const tabFontSize = getFontSize(size);

  const allowedActions = getAllAllowedComponent(tabs, ALLOWED_HEADER_TAB_ACTIONS_ELEMENTS);

  const overrides = useMemo(
    () => getHeaderTabOverrides({ paddingSize, topPaddingSize, tabPaddingSize, tabFontSize }),
    [paddingSize, topPaddingSize, tabPaddingSize, tabFontSize],
  );

  const testId = composeDataTestId(dataTestId ?? '');

  return (
    <HeaderTabWrapper
      data-testid={testId}
      $borderRadius={borderRadius}
      $isDisabled={isDisabled}
    >
      <StatefulTabs
        fill="fixed"
        disabled={isDisabled}
        overrides={overrides}
        activeKey={activeKey}
        onChange={onChange}
      >
        {allowedActions}
      </StatefulTabs>
    </HeaderTabWrapper>
  );
};
