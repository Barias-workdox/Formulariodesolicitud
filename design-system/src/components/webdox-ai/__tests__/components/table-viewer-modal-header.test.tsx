import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { writeMock } from '../../../../test/__mocks__/clipboard.mock';
import { BrainViewerModalHeader } from '../../components/brain-viewer-modal/components/brain-viewer-modal-header';

import type { BrainViewerModalHeaderProps } from '../../components/brain-viewer-modal/components/brain-viewer-modal-header';
import type { ActionMenuProps } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/markdown-modal/components/action-menu';
import type { RenderType } from '@test/test-utils';

vi.mock('@components/utils/hooks/use-element-overflow', () => ({
  useElementOverflow: vi.fn(() => ({ isOverflowing: false })),
}));

const baseDataTestId = 'table-viewer-modal-header';

const onCloseMock = testHelpers.fn();
const tableClipboardItemMock = new ClipboardItem({
  'text/html': new Blob(['<table>table content</table>'], { type: 'text/html' }),
});

const defaultProps: BrainViewerModalHeaderProps = {
  'data-testid': baseDataTestId,
  isOpen: true,
  clipboardItem: tableClipboardItemMock,
  title: 'Ea aute magna incididunt eu voluptate deserunt.',
  onClose: onCloseMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActionMenuProps>): RenderType =>
  render(
    <BrainViewerModalHeader
      {...defaultProps}
      {...props}
    />,
  );

describe('BrainViewerModalHeader - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}--close-button`)).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.tableCopyToClipboardButton.defaultText')),
    ).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('should execute close function when close button is clicked', async () => {
    renderComponent();

    const closeButton = screen.getByTestId(`${baseDataTestId}--close-button`);

    await userEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should render correctly the copy button', async () => {
    renderComponent();

    // Copy Button
    const copyButton = screen.getByText(t('webdoxAI.tableCopyToClipboardButton.defaultText'));

    // Check the tooltip initial value
    await userEvent.hover(copyButton);
    await waitFor(() => {
      expect(
        screen.getByText(t('webdoxAI.tableCopyToClipboardButton.defaultTooltipText')),
      ).toBeInTheDocument();
    });

    await userEvent.click(copyButton);

    // Check the tooltip copied value
    await userEvent.hover(copyButton);
    await waitFor(() => {
      expect(
        screen.getByText(t('webdoxAI.tableCopyToClipboardButton.copiedTooltipText')),
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(writeMock).toHaveBeenCalledWith([tableClipboardItemMock]);
    });
  });
});
