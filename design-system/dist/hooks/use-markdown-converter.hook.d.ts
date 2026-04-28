import { ReactElement } from 'react';
export type UseMarkdownConverterProps = {
    /**
     * Allows passing custom components such as mentions, tags, etc. to extend the set of supported markdown elements.
     */
    extraComponents?: Record<string, ReactElement>;
};
export type UseMarkdownConverterReturn = {
    htmlToMarkdown(html: string): Promise<string>;
    markdownToHtml(markdown: string): Promise<string>;
};
/**
 * Hook to convert between HTML and Markdown
 */
export declare const useMarkdownConverter: (props?: UseMarkdownConverterProps) => UseMarkdownConverterReturn;
