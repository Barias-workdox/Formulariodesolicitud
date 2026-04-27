import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { Select } from '../select';

import type { SelectProps } from '../select.interfaces';
import type { RenderType } from '@test/test-utils';
import type { Option } from 'baseui/select';

const mockOnChange = testHelpers.fn();

const defaultProps: SelectProps = {
  placeholder: 'placeholder',
  onChange: mockOnChange,
  options: [
    { label: 'Option 1', id: 'option1' },
    { label: 'Option 2', id: 'option2' },
  ],
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SelectProps>): RenderType => {
  return render(
    <Select
      {...defaultProps}
      {...props}
    />,
  );
};

describe('select - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', async () => {
    renderComponent();

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.queryByText(defaultProps.options[0].label)).not.toBeInTheDocument();
  });

  it('should change the value when an option is selected', async () => {
    renderComponent();

    // Check before selecting an option
    const select = screen.getByRole('combobox');

    await userEvent.click(select);
    expect(mockOnChange).not.toBeCalled();

    // Check after selecting an option
    // All options displayed whe n the select is clicked
    const allOptions = screen.getAllByRole('option');
    const [firstOption] = allOptions;
    const [selectedOption] = defaultProps.options as Option[];

    await userEvent.click(firstOption);

    expect(mockOnChange).toHaveBeenCalledWith(expect.arrayContaining([selectedOption]));
  });

  it('should call the onCreate function for creatable select', async () => {
    const { t } = renderUseTranslation();
    const onCreate = testHelpers.fn();

    renderComponent({ creatable: true, onCreate });

    const select = screen.getByRole('combobox');

    const newOption = 'New option';
    const createOptionText = `${t('select.create')} “New option”`;

    await userEvent.type(select, newOption);

    expect(screen.getByText(createOptionText)).toBeInTheDocument();

    await userEvent.click(screen.getByText(createOptionText));

    expect(onCreate).toHaveBeenCalledTimes(1);
  });

  it('should not call the onCreate function when selecting an existing option', async () => {
    const onCreate = testHelpers.fn();

    renderComponent({ creatable: true, onCreate });

    const select = screen.getByRole('combobox');

    await userEvent.click(select);

    const firstOptionLabel = defaultProps.options[0].label;

    expect(screen.getByText(firstOptionLabel)).toBeInTheDocument();

    await userEvent.click(screen.getByText(firstOptionLabel));

    expect(onCreate).not.toHaveBeenCalled();
  });
});
