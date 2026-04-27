import type { ChangeEvent } from 'react';

import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Input } from '../input';

describe('Input', () => {
  it('should render the component', () => {
    const { container } = render(<Input />);

    expect(container).toBeInTheDocument();
  });

  it('should render the start enhancer', () => {
    render(<Input startEnhancer={<div>Start Enhancer</div>} />);

    const enhancer = screen.getByText('Start Enhancer');

    expect(enhancer).toBeInTheDocument();
  });

  it('should render the placeholder', () => {
    render(<Input placeholder="lorem ipsum dolor sit amet" />);

    expect(screen.getByPlaceholderText('lorem ipsum dolor sit amet')).toBeInTheDocument();
  });

  it('should render the value', () => {
    render(<Input value="123" />);

    expect(screen.getByDisplayValue('123')).toBeInTheDocument();
  });

  it('should call the onChange handler with the correct value when text is entered', async () => {
    const mockOnChange = testHelpers.fn();

    render(
      <Input
        placeholder="my-input"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          mockOnChange(e.target.value);
        }}
      />,
    );

    screen.getByPlaceholderText('my-input').focus();
    await userEvent.paste('test value');

    expect(mockOnChange).toHaveBeenCalledWith('test value');
  });

  it('should call the onClear handler correctly', async () => {
    const mockOnClear = testHelpers.fn();

    render(
      <Input
        data-testid="input"
        placeholder="my-input"
        onClear={mockOnClear}
        value="test value"
      />,
    );

    expect(await screen.findByTestId('input__end-enhancer--clear-button')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('input__end-enhancer--clear-button'));

    expect(mockOnClear).toHaveBeenCalled();
  });
});
