import { Task } from '@carbon/icons-react';

import { render, screen } from '@test/test-utils';

import { BackgroundIcon } from '../background-icon';

import type { BackgroundIconProps } from '../background-icon.interfaces';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'data-testid';

const defaultProps: BackgroundIconProps = {
  'data-testid': dataTestId,
  shape: 'round',
  Icon: Task,
  backgroundColor: 'bgBase',
  disabled: false,
  iconColor: 'iconBase',
  size: '24px',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<BackgroundIconProps>): RenderType =>
  render(
    <BackgroundIcon
      {...defaultProps}
      {...props}
    />,
  );

describe('BackgroundIcon - tests', () => {
  it('should render the component with shape = `round`', () => {
    renderComponent();

    expect(screen.getByTestId(`${dataTestId}--wrapper`)).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--icon`)).toBeInTheDocument();
  });

  it('should render the component with shape = `square`', async () => {
    renderComponent({ shape: 'square' });

    expect(screen.getByTestId(`${dataTestId}--wrapper`)).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--icon`)).toBeInTheDocument();
  });

  it('should render children correctly', async () => {
    renderComponent({ children: <div data-testid={`${dataTestId}--children`} />, Icon: undefined });

    expect(screen.getByTestId(`${dataTestId}--wrapper`)).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--children`)).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--icon`)).not.toBeInTheDocument();
  });

  it('should render correctly when is disabled', async () => {
    renderComponent({ shape: 'square', disabled: true });

    expect(screen.getByTestId(`${dataTestId}--wrapper`)).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--icon`)).toBeInTheDocument();
  });
});
