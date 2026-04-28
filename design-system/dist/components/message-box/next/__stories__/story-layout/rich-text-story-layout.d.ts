import { PropsWithChildren } from 'react';
import { MessageBoxValue } from '../../message-box.interfaces';
export type RichTextStoryLayoutProps = PropsWithChildren<{
    value: MessageBoxValue;
    htmlToMarkdownValue: string;
    markdownToHtmlValue: string;
}>;
/**
 * RichTextStoryLayout component
 * This component is used to wrap the rich text story layout
 * and add the custom styles
 */
export declare const RichTextStoryLayout: ({ children, value, htmlToMarkdownValue, markdownToHtmlValue, }: RichTextStoryLayoutProps) => JSX.Element;
