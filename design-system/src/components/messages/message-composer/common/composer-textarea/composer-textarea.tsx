import type {
  ClipboardEventHandler,
  FormEvent,
  FormEventHandler,
  MutableRefObject,
  ReactElement,
} from 'react';

import { useTranslation } from '@components/utils/i18n';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { StyledDiv } from './composer-textarea.styles';

import type { MessageComposerProps } from '../../message-composer.interfaces';
import type { OverrideObject } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

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
export const ComposerTextarea = ({
  'data-testid': dataTestId,
  messageRef,
  placeholder,
  isDisabled,
  $padding = undefined,
  overrides,
  evaluateMention,
  onKeyDown,
  onPaste,
}: ComposerTextareaProps): ReactElement => {
  const { t } = useTranslation();

  const { EditableDiv: EditableDivOverrides } = overrides || {};

  const EditableDiv = getOverride(EditableDivOverrides) || StyledDiv;

  return (
    <EditableDiv
      data-testid={`${dataTestId}-message-textarea`}
      $disabled={isDisabled}
      $padding={$padding}
      ref={messageRef}
      suppressContentEditableWarning
      contentEditable={!isDisabled}
      placeholder={placeholder ?? t('general.writeMessage')}
      onKeyDown={onKeyDown}
      onInput={evaluateMention}
      onPaste={onPaste}
      {...getOverrideProps(EditableDivOverrides)}
    />
  );
};
