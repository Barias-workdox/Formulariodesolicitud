import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { expect, render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { ColorPickerControlContainer } from './color-picker-control-container';

import type { ColorPickerControlContainerProps } from './color-picker-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps = {
  name: 'color-picker',
  defaultValue: '#FF0000',
  placeholder: 'HOLA',
} as const satisfies ColorPickerControlContainerProps;

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ColorPickerControlContainerProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <ColorPickerControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('color-picker-control - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', async () => {
    renderComponent();

    const submitButton = screen.getByText('Submit');

    await userEvent.click(submitButton);

    waitFor(() =>
      expect(mockOnSubmit).toHaveBeenLastCalledWith(
        expect.objectContaining({
          [defaultProps.name]: defaultProps.defaultValue,
        }),
        expect.anything(),
      ),
    );
  });

  it('should changes the value', async () => {
    renderComponent();

    const colorPickerElement: HTMLInputElement = screen.getByLabelText(defaultProps.name ?? '');
    const submitButton = screen.getByText('Submit');
    const testValue = '#FFFFFF';

    await userEvent.type(colorPickerElement, testValue);
    await userEvent.click(submitButton);

    waitFor(() =>
      expect(mockOnSubmit).toHaveBeenLastCalledWith(
        expect.objectContaining({
          [defaultProps.name]: testValue,
        }),
        expect.anything(),
      ),
    );
  });

  it('should focus the input when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          'color-picker': zod.string().min(1, 'Required'),
        })}
        resolverType="zod"
      >
        <ColorPickerControlContainer
          {...defaultProps}
          defaultValue=""
        />
        <Button type="submit">Submit</Button>
      </FormProviderControlWrapper>,
    );

    const input = screen.getByPlaceholderText(defaultProps.placeholder);

    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(input).toHaveFocus();
    });
  });
});
