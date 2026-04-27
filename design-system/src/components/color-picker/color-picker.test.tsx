import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';

import { render, screen } from '@test/test-utils';

import { ColorPicker } from './color-picker';

import type { ColorPickerProps } from './color-picker';
import type { RenderType } from '@test/test-utils';

const mockOnChange = vi.fn();

const defaultProps: ColorPickerProps = {
  value: '#FFFFFF',
  onChange: mockOnChange,
  name: 'color-picker',
  'data-testid': 'design-system-color-picker',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ColorPickerProps>): RenderType => {
  return render(
    <ColorPicker
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ColorPicker - tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without errors', () => {
    renderComponent();

    expect(screen.getByTestId(`${defaultProps['data-testid']}--text-input`)).toBeVisible();
  });

  it('updates the current color when the text input changes', async () => {
    renderComponent();
    const textInput = screen.getByRole('textbox', { name: 'color-picker' });

    userEvent.clear(textInput);
    await userEvent.type(textInput, '#FF0000');

    expect(textInput).toHaveValue('#FF0000');
  });

  it('should keep the correct format even when use forbidden words', async () => {
    renderComponent({ value: '#FF' });
    const textInput = screen.getByRole('textbox', { name: 'color-picker' });

    await userEvent.type(textInput, '00&X?00');

    expect(textInput).toHaveValue('#FF0000');
  });

  it('calls the onChange callback when the text input changes', async () => {
    renderComponent();
    const textInput = screen.getByTestId(`${defaultProps['data-testid']}--text-input`);

    userEvent.clear(textInput);
    await userEvent.type(textInput, '#00FF00');

    expect(mockOnChange).toHaveBeenCalled();
  });
});
