import { render, screen } from '@test/test-utils';

import { StatusIcon } from '../status-icon';

import type { StatusIconProps } from '../status-icon';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'test';

const defaultProps: StatusIconProps = {
  'data-testid': dataTestId,
  status: 'approved',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<StatusIconProps>): RenderType => {
  return render(
    <StatusIcon
      {...defaultProps}
      {...props}
    />,
  );
};

describe('StatusIcon - tests', () => {
  it('should render the component with status `approved`', () => {
    renderComponent();

    expect(screen.getByTestId(`${dataTestId}__approved`)).toBeInTheDocument();
  });

  it('should render the component with status `pending`', () => {
    renderComponent({ status: 'pending' });

    expect(screen.getByTestId(`${dataTestId}__pending`)).toBeInTheDocument();
  });
});
