import { forwardRef } from 'react';
import type { ClipboardEventHandler, FormEvent, FormEventHandler } from 'react';

import { INNER_HTML_EMPTY_VALUE } from '@components/message-box/message-box.constants';
import { useTranslation } from '@components/utils/i18n';
import { checkNotEmptyValue } from '@utils/check-not-empty-value.util';
import { noop } from '@utils/noop';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { StyledMessageBoxTextarea } from './styled-components/styled-message-box-textarea';

import type { WithTestId } from '@interfaces/common.interfaces';
import type { OverrideObject } from '@themes/theme.interfaces';

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
export const MessageBoxTextarea = forwardRef<HTMLDivElement, MessageBoxTextareaProps>(
  function MessageBoxTextareaInner(
    {
      'data-testid': dataTestId,
      placeholder,
      disabled,
      overrides,
      value,
      onKeyDown = noop,
      onPaste = noop,
      onInput = noop,
    }: MessageBoxTextareaProps,
    ref,
  ): JSX.Element {
    const { t } = useTranslation();

    const { EditableDiv: EditableDivOverrides } = overrides || {};

    const EditableDiv = getOverride(EditableDivOverrides) || StyledMessageBoxTextarea;

    const isEmpty = !checkNotEmptyValue(value) || value === '' || value === INNER_HTML_EMPTY_VALUE;

    return (
      <EditableDiv
        $disabled={disabled}
        $isEmpty={isEmpty}
        contentEditable={!disabled}
        data-testid={dataTestId}
        placeholder={placeholder ?? t('general.writeMessage')}
        ref={ref}
        suppressContentEditableWarning
        onInput={onInput}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        {...getOverrideProps(EditableDivOverrides)}
      />
    );
  },
);

MessageBoxTextarea.displayName = 'MessageBoxTextarea';
