import { Save } from '@carbon/icons-react';

import { Button } from '@components/button/next';
import { InputControlContainer } from '@components/forms';
import {
  Modal,
  SectionedModalBody,
  SectionedModalFooter,
  SectionedModalHeader,
} from '@components/modal';
import { useTranslation } from '@components/utils';
import { TEXT_AREA_LENGTH } from '@constants/form.constants';
import { noop } from '@utils/noop';

import { inputOverrides } from './custom-prompt-form-modal.overrides';

import type { ModalProps } from '@components/modal';
import type { WithZIndex } from '@interfaces/common.interfaces';

export type EditLegalWhisperConversationFormModalProps = WithZIndex<
  Pick<ModalProps, 'isOpen' | 'onClose'> & {
    isLoading: boolean;
    disabled?: boolean;
    onSubmit(): void;
  }
>;

/**
 * Edit legal whisper conversation form modal component.
 */
export const EditLegalWhisperConversationFormModal = ({
  isLoading = false,
  isOpen,
  disabled = true,
  onClose = noop,
  onSubmit = noop,
  zIndex,
}: EditLegalWhisperConversationFormModalProps): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      zIndex={zIndex}
    >
      <form onSubmit={onSubmit}>
        <SectionedModalHeader>
          {t('webdoxAI.legalWhisperSettings.editConversationModal.title')}
        </SectionedModalHeader>
        <SectionedModalBody>
          <InputControlContainer
            label={t('webdoxAI.legalWhisperSettings.editConversationModal.formControl.title.label')}
            name="title"
            placeholder={t(
              'webdoxAI.legalWhisperSettings.editConversationModal.formControl.title.placeholder',
            )}
            size="md"
            maxLength={TEXT_AREA_LENGTH.small}
            overrides={inputOverrides}
          />
        </SectionedModalBody>
        <SectionedModalFooter>
          <Button
            size="44px"
            kind="neutral"
            appearance="outlined"
            onClick={onClose}
            disabled={isLoading}
          >
            {t('general.cancel')}
          </Button>
          <Button
            startEnhancer={Save}
            size="44px"
            disabled={disabled || isLoading}
            isLoading={isLoading}
            type="submit"
          >
            {t('general.save')}
          </Button>
        </SectionedModalFooter>
      </form>
    </Modal>
  );
};
