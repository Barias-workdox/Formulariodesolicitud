import { TrashCan } from '@carbon/icons-react';

import { Button } from '@components/button/next';
import {
  Modal,
  SectionedModalBody,
  SectionedModalFooter,
  SectionedModalHeader,
} from '@components/modal';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { DSTrans } from '@components/utils/i18n/translation-component';
import { noop } from '@utils/noop';

import type { ModalProps } from '@components/modal';
import type { WithZIndex } from '@interfaces/common.interfaces';

export type DeleteLegalWhisperConversationModalProps = WithZIndex<
  Pick<ModalProps, 'isOpen' | 'onClose'> & {
    conversationTitle: string;
    isLoading: boolean;
    onSubmit(): Promise<void>;
  }
>;

/**
 * Modal to confirm the deletion of a legal whisper conversation.
 */
export const DeleteLegalWhisperConversationModal = ({
  conversationTitle,
  isLoading = false,
  isOpen,
  onClose = noop,
  onSubmit = noop,
  zIndex,
}: DeleteLegalWhisperConversationModalProps): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      zIndex={zIndex}
    >
      <SectionedModalHeader>
        {t('webdoxAI.legalWhisperSettings.deleteConversationModal.title')}
      </SectionedModalHeader>
      <SectionedModalBody>
        <DSTrans>
          <Text
            variant="body"
            color="neutralSubdued"
          >
            {t('webdoxAI.legalWhisperSettings.deleteConversationModal.description', {
              conversationTitle,
            })}
          </Text>
        </DSTrans>
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
          startEnhancer={TrashCan}
          size="44px"
          kind="negative"
          onClick={onSubmit}
          disabled={isLoading}
          isLoading={isLoading}
        >
          {t('webdoxAI.legalWhisperSettings.deleteConversationModal.submit')}
        </Button>
      </SectionedModalFooter>
    </Modal>
  );
};
