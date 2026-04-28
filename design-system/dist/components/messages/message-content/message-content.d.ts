import { ReactElement, ReactNode } from 'react';
import { DesignSystemTheme } from '../../../themes';
import { StyleObject } from 'styletron-standard';
export interface MessageContentProps {
    children: ReactNode;
}
export declare const messageContentStyles: {
    textStyle: (theme: DesignSystemTheme) => StyleObject;
};
/**
 * Styled content of the message
 */
export declare const MessageContent: ({ children }: MessageContentProps) => ReactElement;
/** Container used in the Message content section for the message body section */
export declare const MessageContentBodyWrapper: import('styletron-react').StyletronComponent<"div", {}>;
/** Container used in the Message content section for the message content and footer */
export declare const MessageContentWrapper: import('styletron-react').StyletronComponent<"div", {}>;
