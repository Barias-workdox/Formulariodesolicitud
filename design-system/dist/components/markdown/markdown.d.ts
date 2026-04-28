import { ReactElement } from 'react';
export type MarkdownProps = {
    children: string | string[] | number | number[];
    extraComponents?: Record<string, ReactElement>;
};
/**
 * Renders markdown content as sanitized HTML.
 * Supports basic HTML tags and custom components for enhanced rendering.
 */
export declare const Markdown: ({ children, extraComponents }: MarkdownProps) => ReactElement;
