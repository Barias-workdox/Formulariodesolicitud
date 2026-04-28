import { PropsWithChildren } from 'react';
import { MessageBoxRichTextOptions } from '../message-box.constants';
import { MessageBoxValue } from '../message-box.interfaces';
export type MessageBoxProviderProps = PropsWithChildren<{
    ariaLabel?: string;
    autofocus?: boolean;
    canSendWithEnter?: boolean;
    disabled?: boolean;
    isReadOnly?: boolean;
    maxLength?: number;
    placeholder?: string;
    richTextEnabled?: boolean;
    richTextOptions?: MessageBoxRichTextOptions[];
    defaultValue?: string;
    onChange?(params: MessageBoxValue): void;
    onSubmit?(params: MessageBoxValue): void;
}>;
/**
 * MessageBox provider
 * This provider encapsulates all the logic of the message box,
 * abstracting the component that handles rich text editing.
 */
export declare const MessageBoxProvider: ({ ariaLabel, autofocus, canSendWithEnter, children, disabled, isReadOnly, maxLength, placeholder, richTextEnabled, richTextOptions, defaultValue, onChange, onSubmit, }: MessageBoxProviderProps) => JSX.Element;
