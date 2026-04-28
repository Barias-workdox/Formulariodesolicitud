import { MessageBoxProps } from '../message-box/message-box';
export type MessageBoxWithAddonsProps = MessageBoxProps & {
    addons: JSX.Element;
};
/**
 * This component renders a message box with additional elements (addons). It includes functionality
 * for expanding and collapsing the textarea, and handles input, paste, and key down events.
 * The height of the addons is calculated to use for animation when hiding them.
 */
export declare const MessageBoxWithAddons: ({ addons, isExpanded, isOpen, ...rest }: MessageBoxWithAddonsProps) => JSX.Element;
