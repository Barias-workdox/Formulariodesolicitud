import type { ReactElement } from 'react';

import { Button } from '@components/button';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './default-compose-submit-button.styles';

import type { MessageComposerProps } from '../../../../message-composer.interfaces';

export type DefaultComposerSubmitButtonProps = Pick<
  MessageComposerProps,
  'data-testid' | 'isEditing' | 'isLoading' | 'isDisabled' | 'onCreate' | 'onUpdate' | 'onCancel'
> & { localValue: string };

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
export const DefaultComposerSubmitButton = ({
  'data-testid': dataTestId,
  isEditing,
  isLoading,
  isDisabled,
  localValue,
  onCreate,
  onUpdate,
  onCancel,
}: DefaultComposerSubmitButtonProps): ReactElement => {
  const { createButtonContainerStyles, editButtonsContainerStyles } = useCss(styles);
  const { t } = useTranslation();

  return isEditing ? (
    <div className={editButtonsContainerStyles}>
      <Button
        data-testid={`${dataTestId}__cancel-button`}
        type="button"
        kind="secondary"
        onClick={(): void => {
          if (onCancel) {
            onCancel();
          }
        }}
        size="compact"
      >
        {t('general.cancel')}
      </Button>
      <Button
        data-testid={`${dataTestId}__save-button`}
        type="button"
        kind="primary"
        onClick={(): void => {
          if (onUpdate) {
            onUpdate(localValue);
          }
        }}
        size="compact"
        isLoading={isLoading}
        disabled={isDisabled}
      >
        {t('general.save')}
      </Button>
    </div>
  ) : (
    <div className={createButtonContainerStyles}>
      <Button
        data-testid={`${dataTestId}__send-button`}
        size="compact"
        onClick={(): void => {
          if (onCreate) {
            onCreate(localValue);
          }
        }}
        type="button"
        isLoading={isLoading}
        disabled={isDisabled}
      >
        {t('general.send')}
      </Button>
    </div>
  );
};
