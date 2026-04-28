import { MarkdownProps } from '../markdown';
import { TextProps } from '../text';
export interface GenerativeTextProps extends Omit<TextProps, 'children'> {
    /** Text that will be generated over time with the delay property */
    generativeText: string;
    /** milliseconds that will wait to render the next word */
    delay: number;
    /** If supplied, will be rendered before the generative text */
    accumulatedText?: string;
    /** Loop after the process is finished */
    infinite?: boolean;
    /** @defaultValue ` ` */
    splitChar?: string;
    /** @defaultValue ` ` */
    joinChar?: string;
    /** Triggered when the process is finished. Only available if infinite is false */
    markdownProps?: Omit<MarkdownProps, 'children'>;
    onFinish?(): void;
}
/**
 * Will render each word of the text with a delay of the milliseconds supplied. Will
 * return a markdown text
 */
export declare const GenerativeText: ({ generativeText, delay, infinite, onFinish, splitChar, joinChar, accumulatedText, markdownProps, ...rest }: GenerativeTextProps) => JSX.Element;
