import { ReactElement } from 'react';
import { ComposerTextareaContainerProps } from '../../common/composer-textarea-container/composer-textarea-container.interfaces';
import { MessageComposerProps } from '../../message-composer.interfaces';
export type DefaultComposerTextareaContainerProps = Pick<MessageComposerProps, 'onUpdate' | 'onCancel'> & ComposerTextareaContainerProps;
/**
 * `DefaultComposerTextareaContainer` is a comprehensive component designed for message composition scenarios, integrating a custom,
 * editable textarea and a submit button. It facilitates the creation and editing of messages, supporting styled text and
 * hidden data via the `contentEditable` attribute. This component is equipped to handle various states such as editing,
 * loading, and disabled conditions, and offers comprehensive event handling through props.
 */
export declare const DefaultComposerTextareaContainer: ({ "data-testid": dataTestId, messageRef, localValue, placeholder, isEditing, isDisabled, isLoading, $minHeight, $maxHeight, evaluateMention, onKeyDown, onPaste, onCreate, onUpdate, onCancel, }: DefaultComposerTextareaContainerProps) => ReactElement;
