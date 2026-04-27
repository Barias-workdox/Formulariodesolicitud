import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { InlineEditInput } from './inline-edit-input';

import type { InlineEditInputProps } from './inline-edit-input';
import type { RenderType } from '@test/test-utils';

const mockOnChange = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();
const mockOnToggle = testHelpers.fn();

const defaultProps: InlineEditInputProps = {
  'data-testid': 'data-testid',
  inputText: 'inputText',
  captionText: 'captionText',
  disabled: false,
  isLoading: false,
  mode: 'caption',
  onChange: mockOnChange,
  onSubmit: mockOnSubmit,
  onToggle: mockOnToggle,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<InlineEditInputProps>): RenderType =>
  render(
    <InlineEditInput
      {...defaultProps}
      {...props}
    />,
  );

describe('inline-edit-input tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly in mode = `caption`', async () => {
    renderComponent();

    const captionText = screen.getByText(defaultProps.captionText);
    const allButtons = screen.getAllByRole('button');
    const [iconButton] = allButtons;

    expect(captionText).toBeInTheDocument();

    expect(allButtons).toHaveLength(1);

    // Check click on caption
    await userEvent.click(captionText);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);

    // Check click in the icon button
    await userEvent.click(iconButton);
    expect(mockOnToggle).toHaveBeenCalledTimes(2);
  });

  it('should render correctly in mode = `input`', async () => {
    renderComponent({ mode: 'input' });

    const inputText = screen.getByDisplayValue(defaultProps.inputText);
    const allButtons = screen.getAllByRole('button');
    const [submitButton, cancelButton] = allButtons;

    expect(inputText).toBeInTheDocument();

    expect(allButtons).toHaveLength(2);

    // Check submit handlers
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);

    // Check cancel handler
    await userEvent.click(cancelButton);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);

    // Will call again the change handler but no the keydown one
    await userEvent.type(inputText, 'w');
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  it('should trigger keydown events correctly in mode = `input`', async () => {
    renderComponent({ mode: 'input' });

    const inputText = screen.getByDisplayValue(defaultProps.inputText);

    // Triggers the cancel event when `Escape` is typed
    await userEvent.type(inputText, '{Escape}');
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);

    // Triggers the cancel event when `Escape` is typed
    await userEvent.type(inputText, '{Enter}');
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
