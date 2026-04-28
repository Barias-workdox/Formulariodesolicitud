import { BlockProps } from 'baseui/block';
import { ButtonProps } from 'baseui/button';
import type * as React from 'react';
/**
 * Context type for the Sidebar component.
 * Provides the collapsible state and toggle function to child components.
 */
export interface SidebarContextType {
    /**
     * Indicates if the sidebar is currently collapsed
     */
    isCollapsed: boolean;
    /**
     * Indicates if the Sidebar content area is vertically scrollable.
     * Used for UI affordances like footer shadows.
     */
    isContentScrollable: boolean;
    /**
     * Function to toggle the sidebar between collapsed and expanded states
     */
    toggleSidebar(): void;
    /**
     * Updates the content scrollable state.
     */
    setIsContentScrollable(isScrollable: boolean): void;
}
/**
 * Props for SidebarProvider
 * Manages the collapsible state of the Sidebar.
 */
export interface SidebarProviderProps {
    children: React.ReactNode;
    /**
     * Initial state of the sidebar: true for collapsed, false for expanded.
     */
    defaultCollapsed?: boolean;
    /**
     * Callback that executes when the collapsible state of the sidebar changes.
     */
    onToggle?(isCollapsed: boolean): void;
}
/**
 * Props for Sidebar
 * The main container of the sidebar. Extends Block props from Base UI
 * to allow style customization through 'overrides'.
 */
export interface SidebarProps extends BlockProps {
    children: React.ReactNode;
    /**
     * Indicates if the sidebar is collapsed. If used within SidebarProvider,
     * this value will be provided by the context. If used independently,
     * it must be managed externally.
     */
    collapsed?: boolean;
}
/**
 * Props for SidebarHeader
 * Container for the sidebar header content.
 */
export interface SidebarHeaderProps {
    children: React.ReactNode;
    /**
     * When true, shows the SidebarTrigger to toggle collapse/expand. Defaults to true.
     */
    showTrigger?: boolean;
}
/**
 * Props for SidebarContent
 * Container for the main and scrollable content of the sidebar.
 */
export interface SidebarContentProps {
    children: React.ReactNode;
}
/**
 * Props for SidebarFooter
 * Container for the sidebar footer content.
 */
export interface SidebarFooterProps {
    children: React.ReactNode;
}
/**
 * Props for SidebarGroup
 * Represents a section of elements within the SidebarContent.
 */
export interface SidebarGroupProps {
    /**
     * Optional title for the group section.
     */
    title?: string;
    children: React.ReactNode;
}
/**
 * Props for SidebarTrigger
 * An interactive component that toggles the collapsible state of the sidebar.
 */
export interface SidebarTriggerProps extends ButtonProps {
    children?: React.ReactNode;
    /**
     * Callback that executes when clicking the trigger.
     */
    onClick(): void;
}
