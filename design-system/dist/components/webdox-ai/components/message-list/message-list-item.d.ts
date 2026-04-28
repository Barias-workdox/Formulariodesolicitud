import { PropsWithChildren, ReactElement } from 'react';
import { StyledListItemContentTextProps } from '../styled-list';
export type MessageListItemProps = PropsWithChildren<{
    'data-testid': string;
    /** Will render an icon in the left side if supplied */
    /** @defaultValue - \{ content: children \} */
    tooltipProps?: StyledListItemContentTextProps['tooltipProps'];
    /** @defaultValue - \{ variant: 'bodySmall' \} */
    textProps?: StyledListItemContentTextProps['textProps'];
    onClick(): void;
}>;
/**
 * Reusable styled message list item. Has a truncated text
 * and an optional artwork on the left
 */
export declare const MessageListItem: ({ "data-testid": dataTestId, children, tooltipProps, onClick, }: MessageListItemProps) => ReactElement;
