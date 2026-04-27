import { userEvent } from '@testing-library/user-event';

import { Button } from '@components/button';
import { FormProviderWrapper } from '@test/form-provider-utils';
import { render, screen, testHelpers } from '@test/test-utils';

import { CheckboxControlContainer } from '../checkbox-control.container';

import type { CheckboxControlContainerProps } from '../checkbox-control.container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: CheckboxControlContainerProps = {
  name: 'checkbox',
  defaultValue: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CheckboxControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <CheckboxControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('CheckboxControlContainer - tests', () => {
  it('should render the component', async () => {
    renderComponent();

    const checkElement = screen.getByRole('checkbox');

    expect(checkElement).not.toBeChecked();

    const submitButton = screen.getByRole('button');

    await userEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        [defaultProps.name]: defaultProps.defaultValue,
      }),
      expect.anything(),
    );

    await userEvent.click(checkElement);
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        [defaultProps.name]: !defaultProps.defaultValue,
      }),
      expect.anything(),
    );
  });
});
