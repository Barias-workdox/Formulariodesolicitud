import { CheckmarkFilled } from '@carbon/icons-react';

import { render, screen } from '@test/test-utils';

import { BackgroundIcon } from '../background-icon';
import { BACKGROUND_ICON_TEST_ID } from '../background-icon.constants';

import type { BackgroundIconProps } from '../background-icon.interfaces';
import type { RenderType } from '@test/test-utils';

const dataTestId = BACKGROUND_ICON_TEST_ID;

const defaultProps: BackgroundIconProps = {
  dataTestId,
  icon: CheckmarkFilled,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<BackgroundIconProps>): RenderType =>
  render(
    <BackgroundIcon
      {...defaultProps}
      {...props}
    />,
  );

describe('BackgroundIcon - Rendering', () => {
  it('should render with Carbon icon', () => {
    renderComponent();

    expect(screen.getByTestId(`${dataTestId}--wrapper`)).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--icon`)).toBeInTheDocument();
  });

  it('should render with custom test id', () => {
    const customTestId = 'custom-icon';

    renderComponent({ dataTestId: customTestId });

    expect(screen.getByTestId(`${customTestId}--wrapper`)).toBeInTheDocument();
    expect(screen.getByTestId(`${customTestId}--icon`)).toBeInTheDocument();
  });
});

describe('BackgroundIcon - Badge', () => {
  it('should render badge for brand and neutral kinds', () => {
    const { unmount } = renderComponent({ kind: 'brand', badge: true });

    expect(screen.getByTestId(`${dataTestId}--badge`)).toBeInTheDocument();
    unmount();

    renderComponent({ kind: 'neutral', badge: true });
    expect(screen.getByTestId(`${dataTestId}--badge`)).toBeInTheDocument();
  });

  it('should NOT render badge for other kinds', () => {
    renderComponent({ kind: 'positive', badge: true });

    expect(screen.queryByTestId(`${dataTestId}--badge`)).not.toBeInTheDocument();
  });

  it('should NOT render badge when badge prop is false or undefined', () => {
    const { unmount } = renderComponent({ kind: 'brand', badge: false });

    expect(screen.queryByTestId(`${dataTestId}--badge`)).not.toBeInTheDocument();
    unmount();

    renderComponent({ kind: 'brand' });
    expect(screen.queryByTestId(`${dataTestId}--badge`)).not.toBeInTheDocument();
  });

  it('should pass shape prop to badge component', () => {
    const { unmount } = renderComponent({ kind: 'brand', badge: true, shape: 'round' });

    expect(screen.getByTestId(`${dataTestId}--badge`)).toBeInTheDocument();
    unmount();

    renderComponent({ kind: 'brand', badge: true, shape: 'square' });
    expect(screen.getByTestId(`${dataTestId}--badge`)).toBeInTheDocument();
  });
});

describe('BackgroundIcon - Accessibility', () => {
  it('should have proper accessibility attributes for decorative icon', () => {
    renderComponent();

    const wrapper = screen.getByTestId(`${dataTestId}--wrapper`);

    expect(wrapper).toHaveAttribute('aria-hidden', 'true');
    expect(wrapper).toHaveAttribute('role', 'presentation');
  });

  it('should have aria-hidden on badge', () => {
    renderComponent({ kind: 'brand', badge: true });

    expect(screen.getByTestId(`${dataTestId}--badge`)).toHaveAttribute('aria-hidden', 'true');
  });
});
