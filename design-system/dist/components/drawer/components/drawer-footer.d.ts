import { PropsWithChildren } from 'react';
import { StyleObject } from 'styletron-react';
export type DrawerFooterProps = PropsWithChildren<{
    overrides?: StyleObject;
}>;
/**
 * Renders a footer component for a drawer.
 */
export declare const DrawerFooter: ({ children, overrides }: DrawerFooterProps) => JSX.Element;
