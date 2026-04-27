import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { SwitchControlContainer } from './switch-control-container';

import type { SwitchControlContainerProps } from './switch-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: SwitchControlContainerProps = {
  name: 'switch',
  defaultValue: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SwitchControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <SwitchControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('switch-control-container - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

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
