import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { EditInput } from './edit-input';

import type { EditInputProps } from './edit-input';
import type { RenderType } from '@test/test-utils';

const mockOnKeyDown = testHelpers.fn();
const mockOnCancelClick = testHelpers.fn();
const mockOnChange = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();

const defaultProps: EditInputProps = {
  'data-testid': 'data-testid',
  onKeyDown: mockOnKeyDown,
  inputText: 'inputText',
  isInvalidValue: false,
  onCancelClick: mockOnCancelClick,
  disabled: false,
  onChange: mockOnChange,
  onSubmit: mockOnSubmit,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<EditInputProps>): RenderType =>
  render(
    <EditInput
      {...defaultProps}
      {...props}
    />,
  );

describe('edit-input tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', async () => {
    renderComponent();

    const inputText = screen.getByDisplayValue(defaultProps.inputText);
    const allButtons = screen.getAllByRole('button');
    const [submitButton, cancelButton] = allButtons;

    expect(inputText).toBeInTheDocument();

    expect(allButtons).toHaveLength(2);

    // Check handlers
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);

    await userEvent.click(cancelButton);
    expect(mockOnCancelClick).toHaveBeenCalledTimes(1);

    await userEvent.type(inputText, 'new value');
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnKeyDown).toHaveBeenCalled();
  });
});
