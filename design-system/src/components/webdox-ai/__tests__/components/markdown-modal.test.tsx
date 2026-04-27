import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { writeMock } from '../../../../test/__mocks__/clipboard.mock';
import { MarkdownModal } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/markdown-modal';
import { StyledPre } from '../../components/chat/chat-messages/components/chat-bot-message-item/styled-components/styled-pre';

import type { MarkdownCustomTableProps } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/markdown-modal';
import type { RenderType } from '@test/test-utils';

vi.mock('@components/utils/hooks/use-element-overflow', () => ({
  useElementOverflow: vi.fn(() => ({ isOverflowing: false })),
}));

const baseDataTestId = 'markdown-modal';

const setIsMenuHovered = testHelpers.fn();

const defaultProps: MarkdownCustomTableProps = {
  'data-testid': baseDataTestId,
  isMenuVisible: false,
  questionValue: 'Velit sunt ut ad elit id nulla incididunt.',
  setIsMenuHovered,
  overrides: {
    MarkdownElement: {
      component: StyledPre,
    },
    MarkdownElementViewer: { component: StyledPre },
  },
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MarkdownCustomTableProps>): RenderType =>
  render(
    <MarkdownModal
      {...defaultProps}
      {...props}
    >
      <table>
        <thead>
          <tr>
            <th>Column Header 1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1</td>
          </tr>
        </tbody>
      </table>
    </MarkdownModal>,
  );

describe('MarkdownCustomTable - tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText('Column Header 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
  });

  it('should render table menu correctly when is visible', () => {
    renderComponent({ isMenuVisible: true });

    expect(
      screen.getByTestId(`${baseDataTestId}__markdown-menu--copy-to-clipboard-button`),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`${baseDataTestId}__markdown-menu--expand-table-button`),
    ).toBeInTheDocument();
  });

  it('should open TableViewerModal when expand table button is clicked', async () => {
    renderComponent({ isMenuVisible: true });

    const expandTableButton = screen.getByTestId(
      `${baseDataTestId}__markdown-menu--expand-table-button`,
    );

    await userEvent.click(expandTableButton);

    await waitFor(() => expect(screen.getByText(defaultProps.questionValue)).toBeInTheDocument());

    const closeButton = screen.getByTestId(
      `${baseDataTestId}__markdown-viewer__modal-header--close-button`,
    );

    await userEvent.click(closeButton);

    await waitFor(() =>
      expect(screen.queryByText(defaultProps.questionValue)).not.toBeInTheDocument(),
    );
  });

  it('should copy the table correctly when the Table Viewer Modal Copy Button is clicked', async () => {
    renderComponent({ isMenuVisible: true });

    const expandTableButton = screen.getByTestId(
      `${baseDataTestId}__markdown-menu--expand-table-button`,
    );

    await userEvent.click(expandTableButton);

    await waitFor(() => expect(screen.getByText(defaultProps.questionValue)).toBeInTheDocument());

    const copyButton = screen.getByTestId(
      `${baseDataTestId}__markdown-viewer__modal-header--copy-button`,
    );

    await userEvent.click(copyButton);

    await waitFor(() => {
      expect(writeMock).toHaveBeenCalledTimes(1);
    });
  });

  it('should execute `setIsTableMenuHovered` when table menu is hovered', async () => {
    renderComponent({ isMenuVisible: true });

    const expandTableButton = screen.getByTestId(
      `${baseDataTestId}__markdown-menu--expand-table-button`,
    );

    await userEvent.hover(expandTableButton);

    await waitFor(() => {
      expect(setIsMenuHovered).toBeCalledWith(true);
    });

    await userEvent.unhover(expandTableButton);

    await waitFor(() => {
      expect(setIsMenuHovered).toBeCalledWith(false);
    });
  });
});
