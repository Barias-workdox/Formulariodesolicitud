import { ClipboardEventHandler, FormEvent, FormEventHandler } from 'react';
import { WithTestId } from '../../../../interfaces/common.interfaces';
import { OverrideObject } from '../../../../themes/theme.interfaces';
export interface MessageBoxTextareaOverrides {
    EditableDiv?: OverrideObject<object>;
}
export interface MessageBoxTextareaProps extends WithTestId {
    placeholder?: string;
    overrides?: MessageBoxTextareaOverrides;
    disabled?: boolean;
    value?: string;
    onKeyDown?: FormEventHandler<HTMLDivElement>;
    onPaste?: ClipboardEventHandler<HTMLDivElement>;
    onInput?(event: FormEvent<HTMLDivElement>): void;
}
/**
 * `MessageBoxTextarea` is a flexible, custom textarea component designed for composing messages within a UI.
 * It leverages a `contentEditable` div instead of a traditional `<textarea>` element, enabling the inclusion
 * of styled text and hidden data. This approach allows for a more dynamic and interactive user experience,
 * such as mentioning users or incorporating rich text features.
 */
export declare const MessageBoxTextarea: import('react').ForwardRefExoticComponent<MessageBoxTextareaProps & import('react').RefAttributes<HTMLDivElement>>;
