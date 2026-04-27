import { userEvent } from '@testing-library/user-event';

import { writeMock, writeTextMock } from '@test/__mocks__/clipboard.mock';
import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { CopyToClipboardButton } from './copy-to-clipboard-button';

import type { CopyToClipboardButtonProps } from './copy-to-clipboard-button';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'copy-to-clipboard-button';

const mockOnCopy = testHelpers.fn();

const defaultProps: CopyToClipboardButtonProps = {
  'data-testid': baseDataTestId,
  value: 'Eu est ad irure aute anim reprehenderit eu.',
  onCopy: mockOnCopy,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CopyToClipboardButtonProps>): RenderType =>
  render(
    <CopyToClipboardButton
      {...defaultProps}
      {...props}
    />,
  );

describe('copy-to-clipboard-button tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should copy to clipboard correctly with default icon button implementation', async () => {
    renderComponent();

    const { t } = renderUseTranslation();

    const button = screen.getByRole('button');

    // Check the tooltip initial value
    await userEvent.hover(button);
    await waitFor(() => {
      expect(screen.getByText(t('copyToClipboardButton.defaultTooltipText'))).toBeInTheDocument();
    });

    await userEvent.click(screen.getByRole('button'));

    // Check the tooltip copied value
    await userEvent.hover(button);
    await waitFor(() => {
      expect(screen.getByText(t('copyToClipboardButton.copiedTooltipText'))).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(writeTextMock).toHaveBeenCalledWith(defaultProps.value);
    });

    expect(mockOnCopy).toHaveBeenCalledTimes(1);
  });

  it('should copy to clipboard correctly with custom children implementation', async () => {
    renderComponent({ children: <div>test</div> });

    const element = screen.getByText('test');

    await userEvent.click(element);

    await waitFor(() => {
      expect(writeTextMock).toHaveBeenCalledWith(defaultProps.value);
    });
  });

  it('should copy to clipboard correctly when value is a ClipboardItem', async () => {
    const clipboardItem = new ClipboardItem({
      'text/html': new Blob(['<table>table content</table>'], { type: 'text/html' }),
    });

    renderComponent({
      value: clipboardItem,
    });

    const button = screen.getByRole('button');

    await userEvent.click(button);

    await waitFor(() => {
      expect(writeMock).toHaveBeenCalledWith([clipboardItem]);
    });
  });

  it('should render correctly the children when are received as a function', async () => {
    renderComponent({ children: ({ buttonState }) => <div>{buttonState}</div> });

    const element = screen.getByTestId(baseDataTestId);

    expect(screen.getByText('default')).toBeInTheDocument();

    await userEvent.click(element);

    await waitFor(() => {
      expect(screen.getByText('copied')).toBeInTheDocument();
    });
  });
});
