import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';

import { Text } from '@components/text';
import { act, render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { DeleteModal } from '../delete-modal';
import {
  ALL_DELETE_MODAL_STATUSES,
  COMPLETED_BAR_VALUE,
  INTERVAL,
  PERCENTAGE_PROGRESS_PER_INTERVAL,
} from '../delete-modal.constants';

import type { DeleteModalProps } from '../delete-modal.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const confirmText = 'confirm';
const startingText = 'starting';

const defaultProps: DeleteModalProps = {
  status: ALL_DELETE_MODAL_STATUSES.confirm,
  isOpen: true,
  isLoading: false,
  onClose: mockOnClick,
  onConfirm: mockOnClick,
  onTimeout: mockOnClick,
  confirmText: (
    <Text
      variant="bodySmall"
      margin={0}
      fontWeight="500"
    >
      {confirmText}
    </Text>
  ),
  startingText: (
    <Text
      variant="bodySmall"
      margin={0}
      fontWeight="500"
    >
      {startingText}
    </Text>
  ),
};

/** Utility to render a delete modal quickly with default props */
const renderDeleteModal = (props?: Partial<DeleteModalProps>): RenderType => {
  return render(
    <DeleteModal
      {...defaultProps}
      {...props}
    />,
  );
};

describe('Delete modal - test', () => {
  const { t } = renderUseTranslation();

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('Should render in confirm status', () => {
    renderDeleteModal();

    expect(screen.getByText(confirmText)).toBeInTheDocument();
    expect(screen.getByText(t('deleteModal.disclaimer'))).toBeInTheDocument();
  });

  it('Should call the onConfirm method', async () => {
    renderDeleteModal();

    const actionButton = screen.getByText(t('deleteModal.actionButton'));

    await userEvent.click(actionButton);
    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });

  it('Should render in starting status', () => {
    renderDeleteModal({ status: ALL_DELETE_MODAL_STATUSES.starting });

    expect(screen.getByText(startingText)).toBeInTheDocument();
  });

  it('Should call the onClose method', async () => {
    renderDeleteModal({ status: ALL_DELETE_MODAL_STATUSES.starting });

    const cancelButton = screen.getByText(t('general.cancel'));

    await userEvent.click(cancelButton);
    expect(defaultProps.onClose).toHaveBeenCalledWith(ALL_DELETE_MODAL_STATUSES.starting);
  });

  it('Should call the onTimeout callback', () => {
    vi.useFakeTimers();
    renderDeleteModal({ status: ALL_DELETE_MODAL_STATUSES.starting });

    // Calculate the time needed to complete the progress bar
    const intervalsNeeded = Math.ceil(COMPLETED_BAR_VALUE / PERCENTAGE_PROGRESS_PER_INTERVAL);
    const totalTime = intervalsNeeded * INTERVAL;

    act(() => {
      vi.advanceTimersByTime(totalTime);
    });

    expect(defaultProps.onTimeout).toHaveBeenCalled();

    vi.useRealTimers();
  });

  it('Should render in in_progress status', () => {
    renderDeleteModal({ status: ALL_DELETE_MODAL_STATUSES.in_progress });

    expect(screen.getByText(t('deleteModal.modal.in_progress.body'))).toBeInTheDocument();
  });
});
