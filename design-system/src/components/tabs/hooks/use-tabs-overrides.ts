import { Children, cloneElement, useMemo } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { mergeOverridesDeep } from '../../utils/baseui/helpers';
import { getTabOverridesByKind } from '../components/tab/tab.overrides';
import { overridesByKindMap } from '../tabs.overrides';

import type { TabsProps } from '../tabs';
import type { TabOverrides, TabsOverrides } from 'baseui/tabs-motion';

type UseTabsOverridesParams = TabsProps & {
  isStateful?: boolean;
  overrides?: TabsOverrides & TabOverrides;
};
type UseTabsOverridesResult = {
  overridesByKind: TabsOverrides;
  childrenWithOverrides: ReactNode;
};

/**
 * Get custom styles for tabs based on the "kind" you choose. Also, can hide the tab panel if needed.
 *
 * @remarks
 * The children elements must be overwritten in this way in order to be able to add the correct
 * styles based on the "kind" property specified in the "Tabs" parent component.
 */
export const useTabsOverrides = ({
  'data-testid': dataTestId = 'design-system__tabs--component',
  kind = 'default',
  showPanels = true,
  overrides,
  children,
}: UseTabsOverridesParams): UseTabsOverridesResult => {
  const {
    ArtworkContainer,
    EndEnhancerContainer,
    Root,
    Tab,
    TabBar,
    TabBorder,
    TabHighlight,
    TabList,
    TabPanel,
  } = overrides || {};

  const tabOverrides: TabOverrides = useMemo(
    () => ({
      ArtworkContainer,
      Tab,
      TabPanel,
    }),
    [ArtworkContainer, Tab, TabPanel],
  );

  const tabsOverrides: TabsOverrides = useMemo(
    () => ({
      EndEnhancerContainer,
      Root,
      TabBar,
      TabBorder,
      TabHighlight,
      TabList,
    }),
    [EndEnhancerContainer, Root, TabBar, TabBorder, TabHighlight, TabList],
  );

  const tabsOverridesByKind = useMemo(() => {
    const baseOverrides: TabsOverrides = {
      TabList: {
        props: {
          'data-testid': dataTestId,
        },
      },
    };

    return mergeOverridesDeep(baseOverrides, overridesByKindMap[kind], tabsOverrides);
  }, [dataTestId, kind, tabsOverrides]);

  const tabList = useMemo(
    () =>
      Children.map(children, (child: ReactElement, index) => {
        if (!child) {
          return;
        }

        const key = child.key || String(index);

        return cloneElement(child, {
          ...child.props,
          key,
          childKey: key,
          overrides: getTabOverridesByKind({
            kind,
            showPanels,
            overrides: tabOverrides,
            ...child.props,
          }),
        });
      }),
    [children, kind, showPanels, tabOverrides],
  );

  return {
    overridesByKind: tabsOverridesByKind,
    childrenWithOverrides: tabList,
  };
};
