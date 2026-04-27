import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';
import '@test/__mocks__/use-virtualizer.mock';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { UserSelectControlContainer } from './user-select-control-container';

import type { UserSelectControlContainerProps } from './user-select-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: UserSelectControlContainerProps = {
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
const renderComponent = (props?: Partial<UserSelectControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <UserSelectControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('user-select-control-container - tests', () => {
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
