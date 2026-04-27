import { renderUseCss } from '@test/hooks/render-use-css';
import { render } from '@test/test-utils';
import { validateStyledComponent } from '@test/validate-styled-component.util';

import { SelectPlaceholder } from '../components/select-placeholder';

import type { SelectPlaceholderProps } from '../components/select-placeholder';

describe('SelectPlaceholder', () => {
  const defaultProps: SelectPlaceholderProps = {
    isDisabled: false,
    placeholder: 'Select an option',
  };

  const renderComponent = (props?: Partial<SelectPlaceholderProps>) =>
    render(
      <SelectPlaceholder
        {...defaultProps}
        {...props}
      />,
    );

  it('should render correctly with default props', () => {
    const { getByText } = renderComponent();
    const placeholder = getByText('Select an option');

    expect(placeholder).toBeInTheDocument();
  });

  it('should render with the correct color when disabled', () => {
    const { getByText } = renderComponent({ isDisabled: true });
    const placeholder = getByText('Select an option');

    const { theme } = renderUseCss();

    expect(
      validateStyledComponent(placeholder, { color: theme.colors.neutralDepressed }),
    ).toBeTruthy();
  });

  it('should render with the correct color when not disabled', () => {
    const { getByText } = renderComponent({ isDisabled: false });
    const placeholder = getByText('Select an option');

    const { theme } = renderUseCss();

    expect(
      validateStyledComponent(placeholder, { color: theme.colors.neutralSubdued }),
    ).toBeTruthy();
  });
});
