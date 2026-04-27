import { useEffect } from 'react';

import { HeaderTabs } from '@components/header-tab';
import { noop } from '@utils/noop';

import { useSectionedCard } from '../sectioned-card.provider';
import { getBorderRadiusSize, getHeaderTabsSize } from '../utils/get-size-map';

import type { HeaderTabsProps } from '@components/header-tab/header-tabs.interfaces';

export type SectionedCardHeaderTabsProps = Omit<HeaderTabsProps, 'size' | 'isDisabled'> & {
  defaultValue?: React.Key;
};

/**
 * Sectioned Card HeaderTabs component that wraps HeaderTabs component.
 */
const SectionedCardHeaderTabs = (props: SectionedCardHeaderTabsProps): JSX.Element => {
  const { size, cornerSize, isDisabled, setActiveKey = noop } = useSectionedCard();

  useEffect(() => {
    setActiveKey(props.defaultValue ?? null);
  }, [setActiveKey, props.defaultValue]);

  const headerTabsSize = getHeaderTabsSize(size);
  const borderRadius = getBorderRadiusSize(cornerSize);

  return (
    <HeaderTabs
      {...props}
      size={headerTabsSize}
      isDisabled={isDisabled}
      borderRadius={borderRadius}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
    />
  );
};

export { SectionedCardHeaderTabs };
