import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { DynamicTextInputControlContainer } from './dynamic-text-input-control-container';

import type { DynamicTextInputControlProps } from './dynamic-text-input-control';
import type { RenderType } from '@test/test-utils';

const defaultProps: DynamicTextInputControlProps = {
  defaultValue: '',
  placeholder: 'placeholder',
  name: 'input',
  variant: 'body',
};

const mockOnSubmit = testHelpers.fn(console.log);

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DynamicTextInputControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <DynamicTextInputControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('dynamic-text-input-control - tests', () => {
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
