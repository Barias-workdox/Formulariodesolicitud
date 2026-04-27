import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';
import '@test/__mocks__/use-virtualizer.mock';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { SelectWithPaginationControlContainer } from './select-with-pagination-control-container';

import type { SelectWithPaginationControlContainerProps } from './select-with-pagination-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: SelectWithPaginationControlContainerProps = {
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
const renderComponent = (
  props?: Partial<SelectWithPaginationControlContainerProps>,
): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <SelectWithPaginationControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('select-with-pagination-control-container - tests', () => {
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
    const [selectedOption] = defaultProps.options;

    await userEvent.click(firstOption);
    await userEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        select: [selectedOption],
      }),
      expect.anything(),
    );
  });
});
