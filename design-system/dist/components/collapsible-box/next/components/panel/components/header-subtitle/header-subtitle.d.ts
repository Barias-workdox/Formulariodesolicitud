import { PropsWithChildren, ReactNode } from 'react';
export type HeaderSubtitleProps = PropsWithChildren<{
    collapsedSubtitle?: string | ReactNode;
    $expanded?: boolean;
}>;
/**
 * Component that displays a subtitle for a header, which can dynamically switch between
 * expanded and collapsed states.
 */
export declare const HeaderSubtitle: ({ $expanded, children, collapsedSubtitle, }: HeaderSubtitleProps) => JSX.Element;
