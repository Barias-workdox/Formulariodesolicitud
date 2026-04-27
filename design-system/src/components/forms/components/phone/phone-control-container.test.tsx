import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { PhoneControlContainer } from './phone-control-container';

import type { PhoneControlContainerProps } from './phone-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: PhoneControlContainerProps = {
  'data-testid': 'dataTestId',
  placeholder: 'placeholder',
  name: 'phone',
  defaultValue: '',
  countryCode: 'CHL',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<PhoneControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <PhoneControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('phone-control-container - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly', async () => {
    renderComponent();

    const phoneInput = screen.getByPlaceholderText(defaultProps.placeholder);
    const submitButton = screen.getByRole('button');

    const testValue = 'test value';

    // Check before typing in input
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        phone: defaultProps.defaultValue,
      }),
      expect.anything(),
    );

    // Check after typing in input
    await userEvent.type(phoneInput, testValue);
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        phone: testValue,
      }),
      expect.anything(),
    );
  });
});
