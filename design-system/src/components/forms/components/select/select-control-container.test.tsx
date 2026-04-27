import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { SelectControlContainer } from './select-control-container';

import type { SelectControlContainerProps } from './select-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();
const mockOnChange = testHelpers.fn();

const defaultProps: SelectControlContainerProps = {
  placeholder: 'placeholder',
  name: 'select',
  onChange: mockOnChange,
  defaultValue: undefined,
  options: [
    { label: 'Option 1', id: 'option1' },
    { label: 'Option 2', id: 'option2' },
  ],
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SelectControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <SelectControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('select-control-container - tests', () => {
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
});
