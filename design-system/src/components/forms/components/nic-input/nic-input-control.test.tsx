import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { NicInputControl } from './nic-input-control';

import type { NicInputControlProps } from './nic-input-control';
import type { RenderType } from '@test/test-utils';

const defaultProps = {
  defaultValue: '',
  placeholder: 'placeholder',
  name: 'nicInput',
} as const satisfies NicInputControlProps;

const mockOnSubmit = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<NicInputControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <NicInputControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('nic-input-control - tests', () => {
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
        nicInput: defaultProps.defaultValue,
      }),
      expect.anything(),
    );

    // Check after typing in input
    await userEvent.type(input, testValue);
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        nicInput: testValue,
      }),
      expect.anything(),
    );
  });

  it('should focus the input when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          nicInput: zod.string().min(1, 'Required'),
        })}
        resolverType="zod"
      >
        <NicInputControl {...defaultProps} />
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
