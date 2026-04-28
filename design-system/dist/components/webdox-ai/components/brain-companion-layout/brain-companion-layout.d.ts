import { PropsWithChildren } from 'react';
type BrainCompanionLayoutProps = PropsWithChildren<{
    isExpanded?: boolean;
}>;
/**
 * BrainCompanionLayout is a layout component for the Brain Companion feature.
 * It is used to wrap the content of the Brain Companion chat interface.
 * It provides a styled container for the chat messages and other elements.
 */
export declare const BrainCompanionLayout: ({ children, isExpanded, }: BrainCompanionLayoutProps) => JSX.Element;
export {};
