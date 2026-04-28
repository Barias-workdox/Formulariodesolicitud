import { ReactElement, ReactNode } from 'react';
import { DesignSystemColorType } from '../../../themes/theme.interfaces';
export interface MessageAuthorProps {
    children: ReactNode;
    barColor: DesignSystemColorType;
    labelColor: DesignSystemColorType;
    label?: string;
}
/**
 * Styled author of the message
 */
export declare const MessageAuthor: ({ children, label, barColor, labelColor, }: MessageAuthorProps) => ReactElement;
