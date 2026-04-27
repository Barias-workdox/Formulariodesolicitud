import { useCss } from '@components/utils/hooks/use-css';
import { render, renderHook, screen } from '@test/test-utils';

import { ThemedCarbonIcon } from '../themed-carbon-icon';

import type { ThemedCarbonIconProps } from '../themed-carbon-icon';

describe('ThemedCarbonIcon', () => {
  const testId = 'testId';

  const renderComponent = (props: Partial<ThemedCarbonIconProps>) =>
    render(
      <ThemedCarbonIcon
        data-testid={testId}
        icon="Add"
        {...props}
      />,
    );

  it('should render the icon with the specified color', () => {
    renderComponent({ color: 'red' });

    const iconElement = screen.getByTestId(testId);

    expect(iconElement).toHaveAttribute('color', 'red');
  });

  it('should render the icon with the theme color if specified', () => {
    renderComponent({ themeColor: 'brand' });

    const {
      result: {
        current: { theme },
      },
    } = renderHook(useCss);

    const iconElement = screen.getByTestId(testId);

    expect(iconElement).toHaveAttribute('color', theme.colors.brand);
  });
});
