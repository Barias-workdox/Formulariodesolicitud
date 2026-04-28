import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { MessageLayoutKindType } from '../../../../../interfaces';
import { StyleObject } from 'styletron-react';
export type ChatMessageLayoutProps = PropsWithChildren<{
    footer?: ReactNode;
    header?: ReactNode;
    kind: MessageLayoutKindType;
    maxWidth?: StyleObject['maxWidth'];
}>;
export type StyledMessageProps = {
    $maxWidth?: StyleObject['maxWidth'];
};
/**
 * Component that renders a chat message layout with a header, content and footer
 */
export declare const ChatMessageLayout: ({ children, footer, header, kind, maxWidth, }: ChatMessageLayoutProps) => ReactElement;
