import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { commaSeparatedAmount } from '@components/forms/validations';
import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { AmountInputControl } from './amount-input-control';

import type { AmountInputControlProps } from './amount-input-control';
import type { RenderType } from '@test/test-utils';

const defaultProps = {
  defaultValue: '',
  placeholder: 'placeholder',
  name: 'amountInput',
} as const satisfies AmountInputControlProps;

const mockOnSubmit = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<AmountInputControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <AmountInputControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('amount-input-control - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', async () => {
    renderComponent();

    const input = screen.getByPlaceholderText(defaultProps.placeholder);
    const submitButton = screen.getByRole('button');

    const testValue = 'ABC123';

    // Check before typing in input
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        amountInput: defaultProps.defaultValue,
      }),
      expect.anything(),
    );

    // Check after typing in input
    await userEvent.type(input, testValue);
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        amountInput: commaSeparatedAmount(testValue),
      }),
      expect.anything(),
    );
  });

  it('should focus the input when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          amountInput: zod.string().min(1, 'Required'),
        })}
        resolverType="zod"
      >
        <AmountInputControl {...defaultProps} />
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
