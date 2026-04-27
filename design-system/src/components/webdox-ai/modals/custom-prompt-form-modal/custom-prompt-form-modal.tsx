import { Save } from '@carbon/icons-react';

import { Button } from '@components/button';
import { InputControlContainer, TextareaControlContainer } from '@components/forms';
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

export type CustomPromptFormModalProps = WithZIndex<
  Pick<ModalProps, 'isOpen' | 'onClose'> & {
    isLoading: boolean;
    disabled?: boolean;
    onSubmit(): void;
  }
>;

/**
 * Custom prompt form modal component.
 *
 * This component is responsible for rendering the modal that allows users to create or edit custom prompts.
 * It includes input fields for the prompt title and content, as well as buttons for saving or canceling the action.
 */
export const CustomPromptFormModal = ({
  isOpen,
  onClose = noop,
  isLoading = false,
  disabled = true,
  onSubmit = noop,
  zIndex,
}: CustomPromptFormModalProps): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      zIndex={zIndex}
    >
      <form
        data-testid="modal__form"
        onSubmit={onSubmit}
      >
        <SectionedModalHeader>
          {t('webdoxAI.chat.customPrompts.formModal.title')}
        </SectionedModalHeader>
        <SectionedModalBody>
          <InputControlContainer
            label={t('webdoxAI.chat.customPrompts.formModal.promptTitle.label')}
            name="title"
            placeholder={t('webdoxAI.chat.customPrompts.formModal.promptTitle.placeholder')}
            size="md"
            maxLength={TEXT_AREA_LENGTH.small}
            overrides={inputOverrides}
          />
          <TextareaControlContainer
            label={t('webdoxAI.chat.customPrompts.formModal.promptContent.label')}
            name="content"
            placeholder={t('webdoxAI.chat.customPrompts.formModal.promptContent.placeholder')}
            size="large"
            overrides={inputOverrides}
            isBorderless
          />
        </SectionedModalBody>
        <SectionedModalFooter>
          <Button
            data-testid="modal__cancel-button"
            size="44px"
            kind="secondary"
            onClick={onClose}
            disabled={isLoading}
          >
            {t('general.cancel')}
          </Button>
          <Button
            data-testid="modal__save-button"
            startEnhancer={<Save />}
            size="44px"
            kind="primary"
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
