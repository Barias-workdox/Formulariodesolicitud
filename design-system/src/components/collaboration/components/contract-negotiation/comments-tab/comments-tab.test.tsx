import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { messagesMock1, stakeholdersMock1 } from '../../../__mocks__/messages.mock';

import { CommentsTab } from './comments-tab';

import type { CommentsTabProps } from './comments-tab';
import type { RenderType } from '@test/test-utils';

const mockOnClose = testHelpers.fn();
const baseDataTestId = 'comments-tab';

const defaultProps: CommentsTabProps = {
  'data-testid': baseDataTestId,
  onClose: mockOnClose,
  onCreate: testHelpers.fn(),
  canCreate: true,
  currentUserId: 1,
  isLoading: false,
  messages: messagesMock1,
  users: stakeholdersMock1,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CommentsTabProps>): RenderType => {
  return render(
    <CommentsTab
      {...defaultProps}
      {...props}
    />,
  );
};

describe('CommentsTab - tests', () => {
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
