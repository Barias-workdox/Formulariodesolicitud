import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { BrainViewerModal } from '../../components/brain-viewer-modal';

import type { BrainViewerModalProps } from '../../components/brain-viewer-modal';
import type { ActionMenuProps } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/markdown-modal/components/action-menu';
import type { RenderType } from '@test/test-utils';

vi.mock('@components/utils/hooks/use-element-overflow', () => ({
  useElementOverflow: vi.fn(() => ({ isOverflowing: false })),
}));

const baseDataTestId = 'table-viewer-modal-header';

const childrenTextMock =
  'Veniam ex duis qui fugiat dolore ea esse exercitation velit dolor Lorem quis.';
const onCloseMock = testHelpers.fn();

const defaultProps: BrainViewerModalProps = {
  'data-testid': baseDataTestId,
  isOpen: true,
  title: 'Ea aute magna incididunt eu voluptate deserunt.',
  children: <>{childrenTextMock}</>,
  onClose: onCloseMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActionMenuProps>): RenderType =>
  render(
    <BrainViewerModal
      {...defaultProps}
      {...props}
    />,
  );

describe('BrainViewerModal - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}__modal-header--close-button`)).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.tableCopyToClipboardButton.defaultText')),
    ).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(childrenTextMock)).toBeInTheDocument();
  });

  it('should execute close function when close button is clicked', async () => {
    renderComponent();

    const closeButton = screen.getByTestId(`${baseDataTestId}__modal-header--close-button`);

    await userEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
