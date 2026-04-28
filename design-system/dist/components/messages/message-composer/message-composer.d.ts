import { ReactElement } from 'react';
import { MessageComposerProps } from './message-composer.interfaces';
/**
 * This is the textarea to create and edit a message.
 * The button create a message will be shown if the prop "isEditing" is false.
 * Otherwise, if "isEditing" is true then cancel and save buttons will be rendered.
 */
export declare const MessageComposer: ({ "data-testid": dataTestId, $maxHeight, isDisabled, isEditing, isLoading, isMentionable, maxCharacters, overrides, placeholder, startEnhancer, users, value, onCancel, onCreate, onUpdate, onChange, }: MessageComposerProps) => ReactElement;
