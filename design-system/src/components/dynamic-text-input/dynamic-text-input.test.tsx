import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { DynamicTextInput } from './dynamic-text-input';

import type { DynamicTextInputProps } from './dynamic-text-input';
import type { TextVariant } from '@components/text';
import type { RenderResult } from '@test/test-utils';

const PLACEHOLDER = 'lorem ipsum';
const VARIANT: TextVariant = 'body';

const renderComponent = ({
  variant = VARIANT,
  placeholder = PLACEHOLDER,
  onChange = () => {
    return;
  },
  ...rest
}: Partial<DynamicTextInputProps> = {}): RenderResult => {
  return render(
    <DynamicTextInput
      {...rest}
      variant={variant}
      placeholder={placeholder}
      onChange={onChange}
    />,
  );
};

describe('dynamic-text-input tests', () => {
  it('renders correctly with default props', () => {
    renderComponent();

    expect(screen.getByPlaceholderText(PLACEHOLDER)).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', async () => {
    const handleChange = testHelpers.fn();

    renderComponent({ onChange: handleChange });

    const newValue = 'New Value';

    await userEvent.type(screen.getByPlaceholderText(PLACEHOLDER), newValue);

    expect(handleChange).toHaveBeenCalledTimes(newValue.length);
  });

  it('calls onBlur handler when input loses focus', async () => {
    const handleBlur = testHelpers.fn();

    renderComponent({ onBlur: handleBlur });

    const input = screen.getByPlaceholderText(PLACEHOLDER);

    await userEvent.click(input);
    input.blur();

    expect(handleBlur).toHaveBeenCalled();
  });

  it('is not editable when disabled', () => {
    renderComponent({ disabled: true });

    expect(screen.getByPlaceholderText(PLACEHOLDER)).toBeDisabled();
  });

  it('displays the correct placeholder text', () => {
    const placeholderText = 'Enter text here';

    renderComponent({ placeholder: placeholderText });

    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it('displays the value passed as a prop', () => {
    const value = 'Initial Value';

    renderComponent({ value });

    expect(screen.getByPlaceholderText(PLACEHOLDER)).toHaveValue(value);
  });

  it('renders the end enhancer when provided', () => {
    const EndEnhancer = <span>End Enhancer</span>;

    renderComponent({ endEnhancer: EndEnhancer });

    expect(screen.getByText('End Enhancer')).toBeInTheDocument();
  });
});
