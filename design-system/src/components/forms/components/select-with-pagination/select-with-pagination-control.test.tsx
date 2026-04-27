import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';
import '@test/__mocks__/use-virtualizer.mock';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { SelectWithPaginationControl } from './select-with-pagination-control';

import type { SelectWithPaginationControlProps } from './select-with-pagination-control';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: SelectWithPaginationControlProps = {
  placeholder: 'placeholder',
  name: 'select',
  defaultValue: undefined,
  options: [
    { label: 'Option 1', id: 'option1' },
    { label: 'Option 2', id: 'option2' },
  ],
  onLoadMore: testHelpers.fn(),
  isLoadingMore: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SelectWithPaginationControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <SelectWithPaginationControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('select-with-pagination-control - tests', () => {
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
    const [firstOption] = screen.getAllByRole('option');
    const [selectedOption] = Array.isArray(defaultProps.options) ? defaultProps.options : [];

    await userEvent.click(firstOption);
    await userEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        select: [selectedOption],
      }),
      expect.anything(),
    );
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
        <SelectWithPaginationControl {...defaultProps} />
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
