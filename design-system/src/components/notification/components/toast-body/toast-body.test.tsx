import { render, screen } from '@test/test-utils';

import { StyledToastBody } from './toast-body';

import type { StyledToastBodyProps } from './toast-body';
import type { RenderType } from '@test/test-utils';

const defaultProps: StyledToastBodyProps = {
  $kind: 'positive',
  $type: 'toast',
  children: <span>Toast children</span>,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<StyledToastBodyProps>): RenderType => {
  return render(
    <StyledToastBody
      {...defaultProps}
      {...props}
    />,
  );
};

describe('StyledToastBody - test', () => {
  it('should render the component', () => {
    renderComponent();

    expect(screen.getByText('Toast children')).toBeInTheDocument();
  });
});
