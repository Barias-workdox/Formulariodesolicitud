import { FC } from 'react';
import { SidebarContextType, SidebarProviderProps } from './sidebar.interface';
/**
 * Custom hook to consume the sidebar context.
 * Ensures the hook is used within a SidebarProvider.
 */
export declare const useSidebar: () => SidebarContextType;
/**
 * SidebarProvider: Component that manages the collapsible state of the sidebar
 * and provides it through a React context.
 */
export declare const SidebarProvider: FC<SidebarProviderProps>;
