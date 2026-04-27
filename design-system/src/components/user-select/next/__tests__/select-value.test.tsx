import { renderUseCss } from '@test/hooks/render-use-css';
import { render } from '@test/test-utils';
import { validateStyledComponent } from '@test/validate-styled-component.util';

import { SelectValue } from '../components/select-value';

import type { SelectValueProps } from '../components/select-value';

describe('SelectValue', () => {
  const defaultProps: SelectValueProps = {
    option: { id: 1, label: 'John Doe', value: 'john.doe', email: 'john.doe@example.com' },
    size: 'default',
  };

  const renderComponent = (props?: Partial<SelectValueProps>) =>
    render(
      <SelectValue
        {...defaultProps}
        {...props}
      />,
    );

  it('should render correctly with default props', () => {
    const { getByText } = renderComponent();
    const label = getByText('John Doe (john.doe@example.com)');

    expect(label).toBeInTheDocument();
  });

  it('should render with the correct label when email is not provided', () => {
    const { getByText } = renderComponent({
      option: { id: 1, label: 'Jane Doe', value: 'jane.doe' },
    });
    const label = getByText('Jane Doe');

    expect(label).toBeInTheDocument();
  });

  it('should render with the correct styles', () => {
    const { getByText } = renderComponent();
    const label = getByText('John Doe (john.doe@example.com)');

    const { theme } = renderUseCss();

    expect(validateStyledComponent(label, { color: theme.colors.neutralSubdued })).toBeTruthy();
  });
});
