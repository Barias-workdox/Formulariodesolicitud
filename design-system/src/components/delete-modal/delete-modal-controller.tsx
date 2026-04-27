import { useCallback, useEffect, useState } from 'react';

import { DeleteModal } from './delete-modal';
import { ALL_DELETE_MODAL_STATUSES, BEGIN_DELETION_FADE_TIME } from './delete-modal.constants';

import type { DeleteModalControllerProps, DeleteModalStatus } from './delete-modal.interfaces';

/** Controller for Delete modal component handling logic*/
export const DeleteModalController = ({
  'data-testid': dataTestId = 'delete-modal',
  confirmText = '',
  startingText = '',
  disclaimerText = undefined,
  isOpen = false,
  isLoading = false,
  variant = 'stepped',
  onConfirm,
  onClose,
  deleteItemsCount = 1,
  zIndex,
}: DeleteModalControllerProps): JSX.Element => {
  const [status, setStatus] = useState<DeleteModalStatus>(ALL_DELETE_MODAL_STATUSES.confirm);

  /** Determines when the modal has finished and closes it */
  useEffect(() => {
    if (status === ALL_DELETE_MODAL_STATUSES.in_progress && !isLoading) {
      onClose(status);
    }
  }, [isLoading, onClose, status]);

  /**
   * Executes onConfirm callback, and shows loading state
   * Awaits 1 second for an smooth transition
   */
  const handleTimeout = useCallback(() => {
    setTimeout(() => {
      onConfirm();
      setStatus(ALL_DELETE_MODAL_STATUSES.in_progress);
    }, BEGIN_DELETION_FADE_TIME);
  }, [onConfirm]);

  /** Sets the current status to 'starting' in order to render the second step */
  const handleStartDelete = useCallback(() => {
    if (variant === 'simple') {
      onConfirm();
    }

    setStatus(ALL_DELETE_MODAL_STATUSES.starting);
  }, [onConfirm, variant]);

  useEffect(() => {
    if (!isOpen) {
      setStatus(ALL_DELETE_MODAL_STATUSES.confirm);
    }
  }, [isOpen]);

  return (
    <DeleteModal
      status={status}
      onConfirm={handleStartDelete}
      onTimeout={handleTimeout}
      onClose={onClose}
      confirmText={confirmText}
      startingText={startingText}
      disclaimerText={disclaimerText}
      isOpen={isOpen}
      isLoading={isLoading}
      data-testid={dataTestId}
      deleteItemsCount={deleteItemsCount}
      variant={variant}
      zIndex={zIndex}
    />
  );
};
