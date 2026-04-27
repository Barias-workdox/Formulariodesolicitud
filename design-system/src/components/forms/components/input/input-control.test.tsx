import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { InputControl } from './input-control';

import type { InputControlProps } from './input-control';
import type { RenderType } from '@test/test-utils';

const defaultProps = {
  defaultValue: '',
  placeholder: 'placeholder',
  name: 'input',
} as const satisfies InputControlProps;

const mockOnSubmit = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<InputControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <InputControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('input-control - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', async () => {
    renderComponent();

    const input = screen.getByPlaceholderText(defaultProps.placeholder);
    const submitButton = screen.getByRole('button');

    const testValue = 'test value';

    // Check before typing in input
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        input: defaultProps.defaultValue,
      }),
      expect.anything(),
    );

    // Check after typing in input
    await userEvent.type(input, testValue);
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        input: testValue,
      }),
      expect.anything(),
    );
  });

  it('should focus the input when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          input: zod.string().min(1, 'Required'),
        })}
        resolverType="zod"
      >
        <InputControl {...defaultProps} />
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
