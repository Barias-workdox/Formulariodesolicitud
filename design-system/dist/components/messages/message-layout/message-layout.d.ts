import { ReactElement, ReactNode } from 'react';
import { MessagesProps } from '../messages';
import { StyleObject } from 'styletron-standard';
export interface MessageContainerProps {
    padding?: StyleObject['padding'];
    children: ReactNode;
    direction: MessagesProps['direction'];
    'data-testid': string;
}
export interface MessageHeaderProps {
    children: ReactNode;
}
/**
 * This is the message container.
 * Shows a borderTop if is not the first message.
 */
export declare const MessageContainer: ({ children, padding, direction, "data-testid": dataTestId, }: MessageContainerProps) => ReactElement;
/**
 * This is the message header wrapper component.
 */
export declare const MessageHeader: ({ children }: MessageHeaderProps) => ReactElement;
