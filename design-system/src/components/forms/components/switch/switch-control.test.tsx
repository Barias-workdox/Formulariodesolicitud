import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
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
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <SwitchControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('switch-control - tests', () => {
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

  it('should focus the switch when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          switch: zod.boolean().refine((value) => value === true, 'Required'),
        })}
        resolverType="zod"
      >
        <SwitchControlContainer {...defaultProps} />
        <Button type="submit">Submit</Button>
      </FormProviderControlWrapper>,
    );

    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(checkbox).toHaveFocus();
    });
  });
});
