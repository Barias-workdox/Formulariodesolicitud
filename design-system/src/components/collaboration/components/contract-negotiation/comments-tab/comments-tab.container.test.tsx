import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { ContractNegotiationProviderMock } from '../../../__mocks__/contract-negotiation-provider.mock';

import { CommentsTabContainer } from './comments-tab.container';

import type { CommentsTabContainerProps } from './comments-tab.container';
import type { RenderType } from '@test/test-utils';

const mockOnClose = testHelpers.fn();
const baseDataTestId = 'documents-tab';

const defaultProps: CommentsTabContainerProps = {
  onClose: mockOnClose,
  'data-testid': baseDataTestId,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CommentsTabContainerProps>): RenderType => {
  return render(
    <ContractNegotiationProviderMock>
      <CommentsTabContainer
        {...defaultProps}
        {...props}
      />
    </ContractNegotiationProviderMock>,
  );
};

describe('CommentsTabContainer - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(t('contractNegotiationCollaboration.commentsTab.comments')),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.send'))).toBeInTheDocument();
  });

  it('should execute onClose when the close button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}--close`));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
