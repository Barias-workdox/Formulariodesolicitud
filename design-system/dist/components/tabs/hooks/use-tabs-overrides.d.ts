import { ReactNode } from 'react';
import { TabsProps } from '../tabs';
import { TabOverrides, TabsOverrides } from 'baseui/tabs-motion';
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
export declare const useTabsOverrides: ({ "data-testid": dataTestId, kind, showPanels, overrides, children, }: UseTabsOverridesParams) => UseTabsOverridesResult;
export {};
