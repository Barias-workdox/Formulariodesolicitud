import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { InputControlContainer } from './input-control-container';

import type { InputControlContainerProps } from './input-control-container';
import type { RenderType } from '@test/test-utils';

const defaultProps: InputControlContainerProps = {
  defaultValue: '',
  placeholder: 'placeholder',
  name: 'input',
};

const mockOnSubmit = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<InputControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <InputControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('input-control-container - tests', () => {
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
});
