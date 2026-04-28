import { ReactNode, default as React } from 'react';
import { HeaderTabsProps } from './header-tabs.interfaces';
export interface HeaderTabsProviderProps {
    children: ReactNode;
    defaultProps?: HeaderTabsProps;
}
/**
 * Header tabs Provider component to supply header tabs context to its children.
 */
export declare const HeaderTabsProvider: React.FC<HeaderTabsProviderProps>;
/**
 * Custom hook to access HeaderTabs context.
 */
export declare const useHeaderTabs: () => HeaderTabsProps;
