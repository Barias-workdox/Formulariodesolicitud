import userEvent from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { TextEditor } from '../../components';
import { useMessageBoxContext } from '../../hooks';

import type { TextEditorProps } from '../../components';
import type { RenderType } from '@test/test-utils';
import type { Mock } from 'vitest';

vi.mock('../../hooks/use-message-box-context.hook', () => ({
  useMessageBoxContext: vi.fn(),
}));

const setIsFocusedMock = testHelpers.fn();
const setIsHoveredMock = testHelpers.fn();

const defaultContextValue = {
  setIsFocused: setIsFocusedMock,
  setIsHovered: setIsHoveredMock,
  disabled: false,
  editorContentNode: <div>Editor Content</div>,
  isFocused: false,
  isHovered: false,
};

const defaultProps: TextEditorProps = {
  actions: <div>Actions</div>,
  variant: 'default',
};

const renderComponent = (props?: Partial<TextEditorProps>): RenderType =>
  render(
    <TextEditor
      {...defaultProps}
      {...props}
    />,
  );

describe('TextEditor', () => {
  beforeEach(() => {
    (useMessageBoxContext as Mock).mockReturnValue(defaultContextValue);
  });

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText('Editor Content')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('should call setIsFocused when the root element is clicked', async () => {
    renderComponent();

    const editorContentElement = screen.getByText('Editor Content');

    await userEvent.click(editorContentElement);

    expect(setIsFocusedMock).toHaveBeenCalledWith(true);
  });

  it('should call setIsHovered when the root element is hovered', async () => {
    renderComponent();

    const editorContentElement = screen.getByText('Editor Content');

    await userEvent.hover(editorContentElement);

    expect(setIsHoveredMock).toHaveBeenCalledWith(true);

    await userEvent.unhover(editorContentElement);

    expect(setIsHoveredMock).toHaveBeenCalledWith(false);
  });

  it('should not call setIsFocused when the root element is clicked and the message box is disabled', async () => {
    (useMessageBoxContext as Mock).mockReturnValue({ ...defaultContextValue, disabled: true });

    renderComponent();

    const editorContentElement = screen.getByText('Editor Content');

    await userEvent.click(editorContentElement);

    expect(setIsFocusedMock).not.toHaveBeenCalled();
  });
});
