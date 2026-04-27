import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { ResponsibleHeaderOptions } from '../responsible-header-options';

import type { ResponsibleHeaderOptionsProps } from '../responsible-header-options';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';
const mockOnFinalize = testHelpers.fn();
const mockOnCancel = testHelpers.fn();

const defaultProps: ResponsibleHeaderOptionsProps = {
  'data-testid': dataTestId,
  onFinalize: mockOnFinalize,
  onCancel: mockOnCancel,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ResponsibleHeaderOptionsProps>): RenderType => {
  return render(
    <ResponsibleHeaderOptions
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ResponsibleHeaderOptions - tests', () => {
  it('should call the onFinalize handler correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.finalize')));

    expect(mockOnFinalize).toHaveBeenCalled();
  });

  it('should call the onCancel handler correctly', async () => {
    renderComponent();

    const overflowButton = screen.getByTestId(`${dataTestId}__overflow`);

    await userEvent.click(overflowButton);

    const cancelButton = screen.getByText(t('contractNegotiationCollaboration.cancel'));

    expect(cancelButton).toBeInTheDocument();

    await userEvent.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalled();
  });
});
