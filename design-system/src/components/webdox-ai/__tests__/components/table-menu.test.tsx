import { userEvent } from '@testing-library/user-event';

import { writeMock } from '@test/__mocks__/clipboard.mock';
import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { ActionMenu } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/markdown-modal/components/action-menu';

import type { ActionMenuProps } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/markdown-modal/components/action-menu';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'table-menu';

const onOpenTableViewerMock = testHelpers.fn();
const tableClipboardItemMock = new ClipboardItem({
  'text/html': new Blob(['ExampleTable'], { type: 'text/html' }),
});

const defaultProps: ActionMenuProps = {
  'data-testid': baseDataTestId,
  clipboardItem: tableClipboardItemMock,
  onOpenTableViewer: onOpenTableViewerMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActionMenuProps>): RenderType =>
  render(
    <ActionMenu
      {...defaultProps}
      {...props}
    />,
  );

describe('TableMenu - tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly the copy button', async () => {
    renderComponent();

    const { t } = renderUseTranslation();

    const copyButton = screen.getByTestId(`${baseDataTestId}--copy-to-clipboard-button`);

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

  it('should render correctly the expand table button', async () => {
    renderComponent();

    const { t } = renderUseTranslation();

    const expandTableButton = screen.getByTestId(`${baseDataTestId}--expand-table-button`);

    await userEvent.hover(expandTableButton);
    await waitFor(() => {
      expect(screen.getByText(t('webdoxAI.chat.expandTable'))).toBeInTheDocument();
    });

    await userEvent.click(expandTableButton);

    expect(onOpenTableViewerMock).toHaveBeenCalled();
  });
});
