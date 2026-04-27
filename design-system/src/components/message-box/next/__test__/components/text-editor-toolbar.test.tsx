import userEvent from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { TextEditorToolbar } from '../../components';
import { useTextEditorToolbar } from '../../hooks';
import { composeTextEditorToolbarTestId } from '../../utils';

import type { UseTextEditorToolbarReturn } from '../../hooks';
import type { RenderType } from '@test/test-utils';
import type { Mock } from 'vitest';

vi.mock('../../hooks/use-text-editor-toolbar.hook', () => ({
  useTextEditorToolbar: vi.fn(),
}));

const italicButtonTestId = composeTextEditorToolbarTestId('__italic-button');
const boldButtonTestId = composeTextEditorToolbarTestId('__bold-button');
const underlineButtonTestId = composeTextEditorToolbarTestId('__underline-button');

const handleBoldMock = testHelpers.fn();
const handleItalicMock = testHelpers.fn();
const handleUnderlineMock = testHelpers.fn();

const defaultContextValue: UseTextEditorToolbarReturn = {
  canBold: true,
  canItalic: true,
  canUnderline: true,
  disabled: false,
  handleBold: handleBoldMock,
  handleItalic: handleItalicMock,
  handleUnderline: handleUnderlineMock,
  isBold: false,
  isItalic: false,
  isUnderline: false,
};

const renderComponent = (): RenderType => render(<TextEditorToolbar />);

describe('TextEditorToolbar', () => {
  beforeEach(() => {
    (useTextEditorToolbar as Mock).mockReturnValue(defaultContextValue);
  });

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(italicButtonTestId)).toBeInTheDocument();
    expect(screen.getByTestId(boldButtonTestId)).toBeInTheDocument();
    expect(screen.getByTestId(underlineButtonTestId)).toBeInTheDocument();
  });

  it('should not render toolbar buttons when are disabled', () => {
    (useTextEditorToolbar as Mock).mockReturnValue({
      ...defaultContextValue,
      canBold: false,
      canItalic: false,
      canUnderline: false,
    });

    renderComponent();

    expect(screen.queryByTestId(italicButtonTestId)).toBeNull();
    expect(screen.queryByTestId(boldButtonTestId)).toBeNull();
    expect(screen.queryByTestId(underlineButtonTestId)).toBeNull();
  });

  it('should execute toolbar buttons handlers correctly', async () => {
    renderComponent();

    const italicButton = screen.getByTestId(italicButtonTestId);
    const boldButton = screen.getByTestId(boldButtonTestId);
    const underlineButton = screen.getByTestId(underlineButtonTestId);

    await userEvent.click(italicButton);
    await userEvent.click(boldButton);
    await userEvent.click(underlineButton);

    expect(handleItalicMock).toHaveBeenCalled();
    expect(handleBoldMock).toHaveBeenCalled();
    expect(handleUnderlineMock).toHaveBeenCalled();
  });

  it('should not execute toolbar buttons handlers correctly when are disabled', async () => {
    (useTextEditorToolbar as Mock).mockReturnValue({
      ...defaultContextValue,
      disabled: true,
    });

    renderComponent();

    const italicButton = screen.getByTestId(italicButtonTestId);
    const boldButton = screen.getByTestId(boldButtonTestId);
    const underlineButton = screen.getByTestId(underlineButtonTestId);

    await userEvent.click(italicButton);
    await userEvent.click(boldButton);
    await userEvent.click(underlineButton);

    expect(handleItalicMock).not.toHaveBeenCalled();
    expect(handleBoldMock).not.toHaveBeenCalled();
    expect(handleUnderlineMock).not.toHaveBeenCalled();
  });
});
