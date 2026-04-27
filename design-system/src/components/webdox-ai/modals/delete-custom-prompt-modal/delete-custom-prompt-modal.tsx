import { TrashCan } from '@carbon/icons-react';

import { Button } from '@components/button';
import {
  Modal,
  SectionedModalBody,
  SectionedModalFooter,
  SectionedModalHeader,
} from '@components/modal';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import type { ModalProps } from '@components/modal';
import type { WithZIndex } from '@interfaces/common.interfaces';

export type DeleteCustomPromptModalProps = WithZIndex<
  Pick<ModalProps, 'isOpen' | 'onClose'> & {
    isLoading: boolean;
    onSubmit(): void;
  }
>;

/**
 * Modal to confirm the deletion of a custom prompt.
 */
export const DeleteCustomPromptModal = ({
  isOpen,
  onClose = noop,
  onSubmit = noop,
  isLoading = false,
  zIndex,
}: DeleteCustomPromptModalProps): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      zIndex={zIndex}
    >
      <SectionedModalHeader>
        {t('webdoxAI.chat.customPrompts.deleteModal.title')}
      </SectionedModalHeader>
      <SectionedModalBody>
        <Text
          variant="body"
          color="neutralSubdued"
          fontWeight="500"
        >
          {t('webdoxAI.chat.customPrompts.deleteModal.subtitle')}
        </Text>
        <Text
          variant="body"
          color="neutralSubdued"
        >
          {t('webdoxAI.chat.customPrompts.deleteModal.description')}
        </Text>
      </SectionedModalBody>
      <SectionedModalFooter>
        <Button
          data-testid="modal__cancel-button"
          size="44px"
          kind="tertiary"
          onClick={onClose}
          disabled={isLoading}
        >
          {t('general.cancel')}
        </Button>
        <Button
          data-testid="modal__delete-button"
          startEnhancer={<TrashCan />}
          size="44px"
          kind="dark-negative"
          onClick={onSubmit}
          disabled={isLoading}
          isLoading={isLoading}
        >
          {t('webdoxAI.chat.customPrompts.deleteModal.submit')}
        </Button>
      </SectionedModalFooter>
    </Modal>
  );
};
