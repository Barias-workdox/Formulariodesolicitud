import { PropsWithChildren } from 'react';
import { StyleObject } from 'styletron-standard';
export type DrawerBodyProps = PropsWithChildren<{
    overrides?: StyleObject;
    padding?: StyleObject['padding'];
}>;
/**
 * The drawer body styled with a default padding.
 * Can receive a padding prop to set a custom value.
 */
export declare const DrawerBody: ({ children, padding, overrides }: DrawerBodyProps) => JSX.Element;
