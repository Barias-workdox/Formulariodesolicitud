import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { SelectControl } from './select-control';

import type { SelectControlProps } from './select-control';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();
const mockOnChange = testHelpers.fn();

const defaultProps: SelectControlProps = {
  placeholder: 'placeholder',
  onChange: mockOnChange,
  name: 'select',
  defaultValue: undefined,
  options: [
    { label: 'Option 1', id: 'option1' },
    { label: 'Option 2', id: 'option2' },
  ],
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SelectControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <SelectControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('select-control - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', async () => {
    renderComponent();

    const submitButton = screen.getByRole('button');

    // Check before selecting an option
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        select: defaultProps.defaultValue,
      }),
      expect.anything(),
    );

    // Check after selecting an option
    const select = screen.getByRole('combobox');

    await userEvent.click(select);
    // All options displayed when the select is clicked
    const allOptions = screen.getAllByRole('option');
    const [firstOption] = allOptions;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedOption] = defaultProps.options as any;

    await userEvent.click(firstOption);
    await userEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        select: [selectedOption],
      }),
      expect.anything(),
    );

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should focus the select when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          select: zod.any().refine((value) => Array.isArray(value) && value.length > 0, 'Required'),
        })}
        resolverType="zod"
      >
        <SelectControl {...defaultProps} />
        <Button type="submit">Submit</Button>
      </FormProviderControlWrapper>,
    );

    const select = screen.getByRole('combobox');

    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(select).toHaveFocus();
    });
  });
});
