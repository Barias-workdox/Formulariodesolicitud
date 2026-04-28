import { PropsWithChildren, ReactNode } from 'react';
export type LegalWhisperLayoutProps = PropsWithChildren<{
    isExpanded?: boolean;
    showLeftColumn?: boolean;
    showRightColumn?: boolean;
    leftColumnContent?: ReactNode;
    rightColumnContent?: ReactNode;
}>;
/**
 * LegalWhisperLayout is a layout component for the Legal Whisper feature.
 * It is used to wrap the content of the Legal Whisper chat interface.
 * It provides a styled container for the chat messages and other elements.
 */
export declare const LegalWhisperLayout: ({ children, isExpanded, leftColumnContent, rightColumnContent, showRightColumn, showLeftColumn, }: LegalWhisperLayoutProps) => JSX.Element;
