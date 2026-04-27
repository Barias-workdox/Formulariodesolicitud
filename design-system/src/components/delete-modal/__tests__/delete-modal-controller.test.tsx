import { userEvent } from '@testing-library/user-event';

import { Text } from '@components/text';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { DeleteModalController } from '../delete-modal-controller';
import { ALL_DELETE_MODAL_STATUSES } from '../delete-modal.constants';

import type { DeleteModalControllerProps } from '../delete-modal.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const confirmText = 'confirm';
const startingText = 'starting';

const defaultProps: DeleteModalControllerProps = {
  isOpen: true,
  isLoading: false,
  onClose: mockOnClick,
  onConfirm: mockOnClick,
  deleteItemsCount: 1,
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

/** Utility to render a delete modal controller quickly with default props */
const renderDeleteModal = (props?: Partial<DeleteModalControllerProps>): RenderType => {
  return render(
    <DeleteModalController
      {...defaultProps}
      {...props}
    />,
  );
};

describe('Delete modal controller - test', () => {
  const { t } = renderUseTranslation();

  it('Should render  with default props', () => {
    renderDeleteModal();

    expect(screen.getByText(confirmText)).toBeInTheDocument();
  });

  it('Should call the onClose method', async () => {
    renderDeleteModal();

    const cancelButton = screen.getByText(t('general.cancel'));

    await userEvent.click(cancelButton);
    expect(defaultProps.onClose).toHaveBeenCalledWith(ALL_DELETE_MODAL_STATUSES.confirm);
  });

  it('Should show the countdown', async () => {
    renderDeleteModal();

    const confirmButton = screen.getByText(
      t('deleteModal.actionButton', { count: defaultProps.deleteItemsCount }),
    );

    await userEvent.click(confirmButton);
    expect(screen.queryByText(confirmText)).not.toBeInTheDocument();
    expect(screen.getByText(startingText)).toBeInTheDocument();
  });
});
