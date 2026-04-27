import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen } from '@test/test-utils';

import { ModalDeleteGroupRule } from '../modal-delete-group-rule';

import type { ModalDeleteGroupRuleProps } from '../modal-delete-group-rule';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';

const mockOnClose = vi.fn();
const mockOnDelete = vi.fn();

const defaultProps: ModalDeleteGroupRuleProps = {
  dataTestId,
  isOpen: true,
  onClose: mockOnClose,
  onDelete: mockOnDelete,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ModalDeleteGroupRuleProps>): RenderType => {
  return render(
    <ModalDeleteGroupRule
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ModalDeleteGroupRule', () => {
  it('should render the component successfully', () => {
    renderComponent();

    expect(screen.getByText(t('decisionTree.ruleDeleteModal.title'))).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}__body`)).toHaveTextContent(
      t('decisionTree.ruleDeleteModal.body'),
      {
        normalizeWhitespace: false,
      },
    );
    expect(screen.getByText(t('general.cancel'))).toBeInTheDocument();
    expect(screen.getByText(t('general.continue'))).toBeInTheDocument();
  });

  it('should call the onClose function correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('general.cancel')));

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should call the onDelete function correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('general.continue')));

    expect(mockOnDelete).toHaveBeenCalled();
  });

  it('should not render the component if isOpen is false', () => {
    renderComponent({ isOpen: false });

    expect(screen.queryByText(t('decisionTree.ruleDeleteModal.title'))).not.toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}__body`)).not.toBeInTheDocument();
    expect(screen.queryByText(t('general.cancel'))).not.toBeInTheDocument();
    expect(screen.queryByText(t('general.continue'))).not.toBeInTheDocument();
  });
});
