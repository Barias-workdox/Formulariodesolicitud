import { Modal, SectionedModalHeader } from '@components/modal';
import { useTranslation } from '@components/utils';

import {
  ConfirmDeleteModalStep,
  InProgressDeleteModalStep,
  StartingDeleteModalStep,
} from './components';
import { DeleteModalDisclaimerText } from './components/delete-modal-disclaimer-text';
import { ALL_DELETE_MODAL_STATUSES } from './delete-modal.constants';

import type { DeleteModalProps } from './delete-modal.interfaces';

/** Object matching corresponding status with component to be rendered */
const ALL_STEPS = {
  confirm: ConfirmDeleteModalStep,
  starting: StartingDeleteModalStep,
  in_progress: InProgressDeleteModalStep,
};

/** Modal used for deletion, has a timer that allows the user to prevent an unwanted delete*/
const DeleteModal = ({
  zIndex,
  status = ALL_DELETE_MODAL_STATUSES.confirm,
  isOpen = false,
  ...rest
}: DeleteModalProps): JSX.Element => {
  const { t } = useTranslation();

  const { onClose } = rest;

  const Step = rest.variant === 'simple' ? ALL_STEPS.confirm : ALL_STEPS[status];

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => onClose(status)}
      zIndex={zIndex}
    >
      <SectionedModalHeader>{t(`deleteModal.modal.${status}.header`)}</SectionedModalHeader>
      <Step {...rest} />
    </Modal>
  );
};

DeleteModal.DisclaimerText = DeleteModalDisclaimerText;

export { DeleteModal };
