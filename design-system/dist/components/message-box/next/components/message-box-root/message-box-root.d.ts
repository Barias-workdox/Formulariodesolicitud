import { PropsWithChildren } from 'react';
import { MessageBoxPlugin } from '../../message-box.interfaces';
import { StyleObject } from 'styletron-react';
export type MessageBoxRootProps = PropsWithChildren<{
    margin?: StyleObject['margin'];
    maxHeight?: StyleObject['maxHeight'];
    width?: StyleObject['width'];
    plugins?: MessageBoxPlugin[];
}>;
/**
 * MessageBoxRoot component
 * This component is used to wrap the message box container
 * and add the custom styles
 */
export declare const MessageBoxRoot: ({ children, margin, maxHeight, width, plugins, }: MessageBoxRootProps) => JSX.Element;
