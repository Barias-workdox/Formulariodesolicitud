import { renderUseCss } from '@test/hooks/render-use-css';
import { render, screen } from '@test/test-utils';

import { ArrowIcon } from '../components/arrow-icon';

import type { ArrowIconProps } from '../components/arrow-icon';

const defaultProps: ArrowIconProps = {
  isOpen: false,
  color: 'neutralSubdued',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ArrowIconProps>) =>
  render(
    <ArrowIcon
      {...defaultProps}
      {...props}
    />,
  );

describe('ArrowIcon - tests', () => {
  it('should render ChevronDown when isOpen is false', () => {
    renderComponent({ isOpen: false });

    expect(screen.getByTestId('chevron-down-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('chevron-up-icon')).not.toBeInTheDocument();
  });

  it('should render ChevronUp when isOpen is true', () => {
    renderComponent({ isOpen: true });

    expect(screen.getByTestId('chevron-up-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('chevron-down-icon')).not.toBeInTheDocument();
  });

  it('should render with the correct color', () => {
    const color = 'neutral';

    renderComponent({ color });

    const { theme } = renderUseCss();

    const icon = screen.getByTestId('chevron-down-icon') || screen.getByTestId('chevron-up-icon');

    expect(icon).toHaveAttribute('color', theme.colors[color]);
  });
});
