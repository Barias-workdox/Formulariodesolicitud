import { MessageBoxProps } from './message-box.interfaces';
/**
/**
 * MessageBox component provides a flexible input area for composing messages,
 * supporting both plain text and rich text editing modes. It includes optional
 * addons, customizable action buttons, and extra actions slots.
 */
export declare const MessageBox: ({ addons, ariaLabel, autofocus, canSendWithEnter, disabled, isReadOnly, extraActions, maxHeight, maxLength, margin, onChange, onSecondaryButtonClick, onSubmit, placeholder, plugins, primaryButtonIcon, primaryButtonProps, primaryButtonText, richTextEnabled, richTextOptions, secondaryButtonIcon, secondaryButtonProps, secondaryButtonText, defaultValue, width, }: MessageBoxProps) => JSX.Element;
