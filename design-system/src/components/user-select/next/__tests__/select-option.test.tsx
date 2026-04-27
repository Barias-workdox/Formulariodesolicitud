import { render } from '@test/test-utils';

import { SelectOption } from '../components/select-option';

import type { SelectOptionProps } from '../components/select-option';

describe('SelectOption', () => {
  const defaultProps: SelectOptionProps = {
    option: { id: 4, label: 'Option 1', value: 'option1' },
    size: 'default',
  };

  const renderComponent = (props?: Partial<SelectOptionProps>) =>
    render(
      <SelectOption
        {...defaultProps}
        {...props}
      />,
    );

  it('should render correctly with default props', () => {
    const { getByText } = renderComponent();
    const option = getByText('Option 1');

    expect(option).toBeInTheDocument();
  });
});
