import { PropsWithChildren, ReactNode } from 'react';
import { Size } from '../../../../collapsible-box.interfaces';
export type HeaderTitleProps = PropsWithChildren<{
    $expanded?: boolean;
    collapsedTitle?: string | ReactNode;
    size?: Size;
}>;
/**
 * Component that displays a title for a header, which can dynamically switch between
 * expanded and collapsed states.
 */
export declare const HeaderTitle: ({ $expanded, children, collapsedTitle, }: HeaderTitleProps) => JSX.Element;
