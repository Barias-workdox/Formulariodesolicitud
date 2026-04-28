import { ReactElement } from 'react';
type SimpleTextProps = {
    value: string | number;
};
/**
 * A component for displaying simple text with optional truncation and tooltip.
 *
 * This component wraps the provided `value` within a `TruncatedText` component,
 * allowing for text truncation and tooltip display for long content.
 */
export declare const SimpleText: ({ value }: SimpleTextProps) => ReactElement;
export {};
