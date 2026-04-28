import { ReactElement } from 'react';
import { MessageComposerProps } from '../../../../message-composer.interfaces';
export type DefaultComposerSubmitButtonProps = Pick<MessageComposerProps, 'data-testid' | 'isEditing' | 'isLoading' | 'isDisabled' | 'onCreate' | 'onUpdate' | 'onCancel'> & {
    localValue: string;
};
/**
 * `DefaultComposerSubmitButton` presents a context-sensitive button component tailored for message composition actions,
 * dynamically adapting to different states such as creating, editing, and loading. It facilitates the execution of
 * specific callbacks—`onCreate`, `onUpdate`, and `onCancel`—based on the user's interaction and the current state of
 * the message being composed.
 *
 * This component intelligently toggles between "Send", "Save", and "Cancel" buttons to reflect the action appropriate
 * to the message's current state, leveraging localized text for button labels to support internationalization. The
 * button's disabled state and loading indicator are managed based on the `isDisabled` and `isLoading` props to provide
 * feedback to the user during message processing.
 */
export declare const DefaultComposerSubmitButton: ({ "data-testid": dataTestId, isEditing, isLoading, isDisabled, localValue, onCreate, onUpdate, onCancel, }: DefaultComposerSubmitButtonProps) => ReactElement;
