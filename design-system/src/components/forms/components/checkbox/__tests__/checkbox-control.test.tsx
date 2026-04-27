import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { Button } from '@components/button';
import { FormProviderControlWrapper } from '@test/form-provider-utils';
import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { CheckboxControl } from '../checkbox-control';

import type { CheckboxControlProps } from '../checkbox-control';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: CheckboxControlProps = {
  name: 'checkbox',
  defaultValue: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CheckboxControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <CheckboxControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('CheckboxControl - tests', () => {
  it('should submit successfully', async () => {
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

  it('should focus the checkbox when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          checkbox: zod.boolean().refine((value) => value === true, 'Required'),
        })}
        resolverType="zod"
      >
        <CheckboxControl {...defaultProps} />
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
