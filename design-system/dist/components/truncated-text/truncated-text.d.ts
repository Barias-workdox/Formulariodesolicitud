import { ReactNode } from 'react';
import { TextProps } from '../text';
import { StatefulTooltipNextProps } from '../tooltip-next';
export interface TruncatedTextProps {
    /** The text that will be rendered as the text children. Can be a plain string, a trans node or anything */
    children: ReactNode;
    /** All text section props */
    textProps: Omit<TextProps, 'children'>;
    /** All tooltip section props */
    tooltipProps: Omit<StatefulTooltipNextProps, 'children'>;
    maxLines?: number;
    className?: string;
    zIndex?: number;
}
/**
 * A repetitive pattern containing a tooltip with a truncated text inside. The text has the
 * ellipsis style and the full text should render in the tooltip content
 */
export declare const TruncatedText: ({ tooltipProps: { content, ...restTooltip }, textProps: { $style, ...restText }, maxLines, zIndex, children, className, }: TruncatedTextProps) => JSX.Element;
