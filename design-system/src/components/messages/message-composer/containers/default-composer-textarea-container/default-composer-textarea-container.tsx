import type { ReactElement } from 'react';

import { MessageBoxTextarea } from '@components/message-box/components';

import { useCss } from '../../../../utils/hooks/use-css';
import { styles } from '../../common/composer-textarea-container/composer-textarea-container.styles';

import { DefaultComposerSubmitButton } from './components/default-compose-submit-button';
import { messageBoxTextareaOverrides } from './default-composer-textarea-container.overrides';

import type { ComposerTextareaContainerProps } from '../../common/composer-textarea-container/composer-textarea-container.interfaces';
import type { MessageComposerProps } from '../../message-composer.interfaces';

export type DefaultComposerTextareaContainerProps = Pick<
  MessageComposerProps,
  'onUpdate' | 'onCancel'
> &
  ComposerTextareaContainerProps;

/**
 * `DefaultComposerTextareaContainer` is a comprehensive component designed for message composition scenarios, integrating a custom,
 * editable textarea and a submit button. It facilitates the creation and editing of messages, supporting styled text and
 * hidden data via the `contentEditable` attribute. This component is equipped to handle various states such as editing,
 * loading, and disabled conditions, and offers comprehensive event handling through props.
 */
export const DefaultComposerTextareaContainer = ({
  'data-testid': dataTestId,
  messageRef,
  localValue,
  placeholder,
  isEditing,
  isDisabled,
  isLoading,
  $minHeight,
  $maxHeight,
  evaluateMention,
  onKeyDown,
  onPaste,
  onCreate,
  onUpdate,
  onCancel,
}: DefaultComposerTextareaContainerProps): ReactElement => {
  const { composerWrapperStyles } = useCss(styles, {
    isEditing,
    isDisabled,
    $minHeight,
    $maxHeight,
  });

  const isSubmitDisabled = !messageRef.current?.textContent || isDisabled;

  return (
    <div className={composerWrapperStyles}>
      <MessageBoxTextarea
        data-testid={`${dataTestId}__textarea`}
        placeholder={placeholder}
        ref={messageRef}
        disabled={isDisabled}
        value={localValue}
        overrides={messageBoxTextareaOverrides}
        onInput={evaluateMention}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
      />
      <DefaultComposerSubmitButton
        data-testid={dataTestId}
        isEditing={isEditing}
        isLoading={isLoading}
        isDisabled={isSubmitDisabled}
        localValue={localValue}
        onCreate={onCreate}
        onUpdate={onUpdate}
        onCancel={onCancel}
      />
    </div>
  );
};
