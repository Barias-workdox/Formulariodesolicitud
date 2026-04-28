import { PropsWithChildren } from 'react';
import { Size } from './collapsible-box.interfaces';
export interface CollapsibleBoxProviderProps {
    size?: Size;
}
export type CollapsibleBoxContextType = {
    size: Size;
};
export declare const CollapsibleBoxContext: import('react').Context<CollapsibleBoxContextType>;
/**
 * `CollapsibleBoxProvider` is a context provider component that supplies state
 * to its children regarding the visibility of the toolbar in a page header.
 */
export declare const CollapsibleBoxProvider: ({ size, children, }: PropsWithChildren<CollapsibleBoxProviderProps>) => JSX.Element;
/**
 * This hook makes it easy to obtain the values from the collapsible box context
 */
export declare const useCollapsibleBoxContext: () => CollapsibleBoxContextType;
