import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { InlineEditInput } from '../inline-edit-input';
import { InlineEditInputMode } from '../inline-edit-input.interfaces';

import type { InlineEditInputProps } from '../inline-edit-input';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'inline-edit-input';
const onChangeMock = testHelpers.fn();
const onModeChangeMock = testHelpers.fn();

const defaultProps: InlineEditInputProps = {
  'data-testid': baseTestId,
  mode: InlineEditInputMode.CAPTION,
  placeholder: 'Example placeholder',
  onChange: onChangeMock,
  onModeChange: onModeChangeMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<InlineEditInputProps>): RenderType => {
  return render(
    <div>
      <InlineEditInput
        {...defaultProps}
        {...props}
      />
      <input placeholder="Secondary input" />
    </div>,
  );
};

beforeEach(() => {
  testHelpers.clearAllMocks();
});

describe('InlineEditInput', () => {
  it('should render the component correctly when mode is caption', () => {
    renderComponent();

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseTestId}__controls--edit-button`)).toBeInTheDocument();
  });

  it('should render the component correctly when mode is input', () => {
    renderComponent({ mode: InlineEditInputMode.INPUT });

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseTestId}__controls--submit-button`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseTestId}__controls--cancel-button`)).toBeInTheDocument();
  });

  it('should execute `onModeChange` correctly when edit button is clicked', async () => {
    renderComponent();

    const editButton = screen.getByTestId(`${baseTestId}__controls--edit-button`);

    await userEvent.click(editButton);

    expect(onModeChangeMock).toHaveBeenCalledWith(InlineEditInputMode.INPUT);
  });

  it('should execute `onModeChange` correctly when input is blurred and the value has not changed', async () => {
    renderComponent({ mode: InlineEditInputMode.INPUT });

    const input = screen.getByPlaceholderText(defaultProps.placeholder);
    const secondaryInput = screen.getByPlaceholderText('Secondary input');

    await userEvent.click(input);
    await userEvent.click(secondaryInput);

    expect(onModeChangeMock).toHaveBeenCalledWith(InlineEditInputMode.CAPTION);
  });

  it('should submit the new value correctly', async () => {
    renderComponent({ mode: InlineEditInputMode.INPUT, value: 'Initial value' });

    const input = screen.getByPlaceholderText(defaultProps.placeholder);

    await userEvent.type(input, 'New value');
    await userEvent.click(screen.getByTestId(`${baseTestId}__controls--submit-button`));

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: 'Initial valueNew value' } }),
    );
    expect(onModeChangeMock).toHaveBeenCalledWith(InlineEditInputMode.CAPTION);
  });

  it('should submit the new value correctly when `Enter` key is pressed', async () => {
    renderComponent({ mode: InlineEditInputMode.INPUT, value: 'Initial value' });

    const input = screen.getByPlaceholderText(defaultProps.placeholder);

    await userEvent.type(input, 'New value');
    await userEvent.keyboard('{Enter}');

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: 'Initial valueNew value' } }),
    );
    expect(onModeChangeMock).toHaveBeenCalledWith(InlineEditInputMode.CAPTION);
  });

  it('should cancel the new value correctly', async () => {
    renderComponent({ mode: InlineEditInputMode.INPUT, value: 'Initial value' });

    const input = screen.getByPlaceholderText(defaultProps.placeholder);

    await userEvent.type(input, 'New value');
    await userEvent.click(screen.getByTestId(`${baseTestId}__controls--cancel-button`));

    expect(onChangeMock).not.toBeCalled();
    expect(onModeChangeMock).toHaveBeenCalledWith(InlineEditInputMode.CAPTION);
    expect(input).toHaveValue('Initial value');
  });

  it('should cancel the new value correctly when `Escape` key is pressed', async () => {
    renderComponent({ mode: InlineEditInputMode.INPUT, value: 'Initial value' });

    const input = screen.getByPlaceholderText(defaultProps.placeholder);

    await userEvent.type(input, 'New value');
    await userEvent.keyboard('{Escape}');

    expect(onChangeMock).not.toBeCalled();
    expect(onModeChangeMock).toHaveBeenCalledWith(InlineEditInputMode.CAPTION);
    expect(input).toHaveValue('Initial value');
  });
});
