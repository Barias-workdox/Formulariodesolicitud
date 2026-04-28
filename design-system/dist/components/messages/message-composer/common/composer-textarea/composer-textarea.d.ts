import { ClipboardEventHandler, FormEvent, FormEventHandler, MutableRefObject, ReactElement } from 'react';
import { MessageComposerProps } from '../../message-composer.interfaces';
import { OverrideObject } from '../../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export interface ComposerTextareaOverrides {
    EditableDiv?: OverrideObject<object>;
}
export type ComposerTextareaProps = Pick<MessageComposerProps, 'data-testid' | 'isDisabled'> & {
    messageRef: MutableRefObject<HTMLDivElement>;
    placeholder: string;
    $padding?: StyleObject['padding'];
    overrides?: ComposerTextareaOverrides;
    onKeyDown: FormEventHandler<HTMLDivElement>;
    onPaste: ClipboardEventHandler<HTMLDivElement>;
    evaluateMention(e: FormEvent<HTMLDivElement>): void;
};
/**
 * `ComposerTextarea` is a flexible, custom textarea component designed for composing messages within a UI.
 * It leverages a `contentEditable` div instead of a traditional `<textarea>` element, enabling the inclusion
 * of styled text and hidden data. This approach allows for a more dynamic and interactive user experience,
 * such as mentioning users or incorporating rich text features.
 */
export declare const ComposerTextarea: ({ "data-testid": dataTestId, messageRef, placeholder, isDisabled, $padding, overrides, evaluateMention, onKeyDown, onPaste, }: ComposerTextareaProps) => ReactElement;
