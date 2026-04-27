import { userEvent } from '@testing-library/user-event';
import { COUNTRIES } from 'baseui/phone-input';

import { render, screen, testHelpers } from '@test/test-utils';

import { PhoneInput } from './phone-input';

import type { PhoneInputProps } from './phone-input.interfaces';
import type { RenderType } from '@test/test-utils';

// mocks
const mockCountry = COUNTRIES.CL;
const mockOnCountryChange = testHelpers.fn();
const mockOnTextChange = testHelpers.fn();

const defaultProps: PhoneInputProps = {
  country: mockCountry,
  onCountryChange: mockOnCountryChange,
  onTextChange: mockOnTextChange,
  text: '',
  'data-testid': 'mock-testid',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<PhoneInputProps>): RenderType =>
  render(
    <PhoneInput
      {...defaultProps}
      {...props}
    />,
  );

describe('PhoneInput - test', () => {
  it('should render correctly the component', () => {
    renderComponent();
    expect(screen.getByTestId(`${defaultProps['data-testid']}--tel-input`)).toBeInTheDocument();
  });

  it('should display the correct country code', () => {
    renderComponent();
    expect(screen.getByText(`${mockCountry.dialCode}`)).toBeInTheDocument();
  });

  it('should call onTextChange when text input changes', async () => {
    renderComponent();
    const input = screen.getByRole('textbox');

    await userEvent.type(input, '123456789');
    expect(mockOnTextChange).toHaveBeenCalled();
  });

  it('should display the provided text in the input', () => {
    const testText = '987654321';

    renderComponent({ text: testText });
    expect(screen.getByDisplayValue(testText)).toBeInTheDocument();
  });

  it('should disable the input when disabled prop is true', () => {
    renderComponent({ disabled: true });
    expect(screen.getByRole('textbox')).toBeDisabled();
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
