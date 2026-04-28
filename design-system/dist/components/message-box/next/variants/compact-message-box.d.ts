import { CompactMessageBoxProps } from '../message-box.interfaces';
/**
 * MessageBox component provides a flexible input area for composing messages,
 * supporting both plain text and rich text editing modes. It includes optional
 * addons, customizable action buttons, and extra actions slots.
 */
export declare const CompactMessageBox: ({ addons, disabled, maxHeight, onChange, onSecondaryButtonClick, onSubmit, placeholder, primaryButtonProps, primaryButtonText, secondaryButtonProps, secondaryButtonText, defaultValue, }: CompactMessageBoxProps) => JSX.Element;
