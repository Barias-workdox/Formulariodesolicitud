import { ReactElement, ReactNode } from 'react';
import { MessagesProps } from '../messages';
export interface MessageListOverrides {
    emptyMessageComponent?: ReactNode;
}
export interface MessageListProps extends Pick<MessagesProps, 'direction' | 'isPaginated' | 'onPageEnd' | 'showBorder'> {
    children: ReactNode[];
    isLoading: boolean;
    isSubmitting?: boolean;
    isAnimated?: boolean;
    emptyMessage?: ReactNode;
    overrides?: MessageListOverrides;
    setIsAnimated?(isAnimated: boolean): void;
}
/**
 * The message list container.
 * It's styled as a flex with column direction.
 * For every new message triggers a scroll animation
 * to move the scroll position to show the most recent message in the list.
 */
export declare const MessageList: ({ isLoading, isSubmitting, isPaginated, setIsAnimated, isAnimated, children, direction, showBorder, onPageEnd, emptyMessage, overrides, }: MessageListProps) => ReactElement;
