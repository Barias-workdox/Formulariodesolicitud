import { TrashCan } from '@carbon/icons-react';

import { Button } from '@components/button';
import { ALL_DELETE_MODAL_STATUSES } from '@components/delete-modal/delete-modal.constants';
import { DeleteModalBody } from '@components/delete-modal/delete-modal.styles';
import { SectionedModalFooter } from '@components/modal';
import { useTranslation } from '@components/utils';

import { DeleteModalDisclaimerText } from '../delete-modal-disclaimer-text';

import type { ConfirmDeleteModalStepProps } from '@components/delete-modal/delete-modal.interfaces';

/** Body for delete modal when is in 'confirm' status */
export const ConfirmDeleteModalStep = ({
  'data-testid': dataTestId,
  confirmText,
  disclaimerText,
  onConfirm,
  onClose,
  deleteItemsCount,
  isLoading,
}: ConfirmDeleteModalStepProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <DeleteModalBody>
        {confirmText}

        {disclaimerText === undefined ? (
          <DeleteModalDisclaimerText text={t('deleteModal.disclaimer')} />
        ) : (
          disclaimerText
        )}
      </DeleteModalBody>

      <SectionedModalFooter>
        <Button
          data-testid={`${dataTestId}__cancel`}
          type="button"
          kind="tertiary"
          onClick={() => onClose(ALL_DELETE_MODAL_STATUSES.confirm)}
        >
          {t('general.cancel')}
        </Button>

        <Button
          data-testid={`${dataTestId}__confirm`}
          type="button"
          kind="dark-negative"
          onClick={onConfirm}
          isLoading={isLoading}
          startEnhancer={<TrashCan />}
        >
          {t('deleteModal.actionButton', { count: deleteItemsCount })}
        </Button>
      </SectionedModalFooter>
    </>
  );
};
