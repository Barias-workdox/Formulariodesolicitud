import { Button } from '@components/button';
import {
  Modal,
  SectionedModalBody,
  SectionedModalFooter,
  SectionedModalHeader,
} from '@components/modal';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';

import type { ModalProps } from '@components/modal';
import type { WithTestId } from '@interfaces/common.interfaces';

export type ModalDeleteGroupRuleProps = WithTestId & ModalProps & { onDelete(): void };

/** Component that renders a modal dialog that confirms the deletion of a group rule */
export const ModalDeleteGroupRule = ({
  dataTestId,
  isOpen,
  onClose,
  onDelete,
}: ModalDeleteGroupRuleProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      zIndex={10}
    >
      <SectionedModalHeader>{t('decisionTree.ruleDeleteModal.title')}</SectionedModalHeader>

      <SectionedModalBody>
        <Text
          data-testid={`${dataTestId}__body`}
          variant="body"
          margin={0}
          whiteSpace="pre-line"
        >
          {t('decisionTree.ruleDeleteModal.body')}
        </Text>
      </SectionedModalBody>

      <SectionedModalFooter>
        <Button
          data-testid={`${dataTestId}--continue-btn`}
          kind="tertiary"
          onClick={onClose}
        >
          {t('general.cancel')}
        </Button>
        <Button
          data-testid={`${dataTestId}--continue-btn`}
          onClick={() => {
            onDelete();
            onClose();
          }}
        >
          {t('general.continue')}
        </Button>
      </SectionedModalFooter>
    </Modal>
  );
};
