import type { ReactElement } from 'react';

import { StatefulTabs as BaseStatefulTabs } from 'baseui/tabs-motion';

import { useTabsOverrides } from './hooks/use-tabs-overrides';

import type { TabsCustomProps } from './tabs';
import type { StatefulTabsProps as BaseStatefulTabsProps } from 'baseui/tabs-motion';

export type StatefulTabsProps = BaseStatefulTabsProps & TabsCustomProps;

/**
 * The StatefulTabs component is used for toggling between different views or sections,
 * similar to Tabs but with an internal state management for active tabs.
 */
export const StatefulTabs = (props: StatefulTabsProps): ReactElement => {
  const { overridesByKind, childrenWithOverrides } = useTabsOverrides(props);

  // Destructure the props to separate 'children' and 'overrides' as they're replaced with custom versions.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, overrides, ...rest } = props;

  // Render the BaseTabs with the custom styles. 'rest' contains the other props passed to this component.
  // Instead of the original 'children' prop, the modified version is passed as children to BaseTabs.
  return (
    <BaseStatefulTabs
      overrides={overridesByKind}
      initialState={{ activeKey: childrenWithOverrides[0]?.props.childKey }}
      {...rest}
    >
      {childrenWithOverrides}
    </BaseStatefulTabs>
  );
};
