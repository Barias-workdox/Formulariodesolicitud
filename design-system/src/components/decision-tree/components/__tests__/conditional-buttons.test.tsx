import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, waitFor } from '@test/test-utils';

import { ConditionalButtons } from '../conditional-buttons';

import type { ConditionalButtonsProps } from '../conditional-buttons';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';
const mockOnUpdateLogicConnector = vi.fn();

const defaultProps: ConditionalButtonsProps = {
  dataTestId,
  logicConnector: 'OR',
  onUpdateLogicConnector: mockOnUpdateLogicConnector,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ConditionalButtonsProps>): RenderType => {
  return render(
    <ConditionalButtons
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ConditionalButtons', () => {
  it('should render the component successfully', async () => {
    renderComponent();

    const orButton = screen.getByTestId(`${dataTestId}--or-btn`);
    const andButton = screen.getByTestId(`${dataTestId}--and-btn`);

    expect(orButton).toBeInTheDocument();
    expect(andButton).toBeInTheDocument();

    await userEvent.hover(orButton);

    await waitFor(() => {
      expect(screen.getByText(t('decisionTree.orMessage'))).toBeInTheDocument();
    });

    await userEvent.hover(andButton);

    await waitFor(() => {
      expect(screen.getByText(t('decisionTree.andMessage'))).toBeInTheDocument();
    });
  });

  it('should call onUpdateLogicConnector with OR as a param', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${dataTestId}--or-btn`));

    expect(mockOnUpdateLogicConnector).toHaveBeenCalledWith('OR');
  });

  it('should call onUpdateLogicConnector with AND as a param', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${dataTestId}--and-btn`));

    expect(mockOnUpdateLogicConnector).toHaveBeenCalledWith('AND');
  });
});
