import { render, screen, type RenderType } from '@test/test-utils';

import { UsageCounterTag } from '../../components/usage-counter-tag';

import type { UsageCounterTagProps } from '../../components/usage-counter-tag';

const defaultProps: UsageCounterTagProps = {
  icon: () => <div data-testid="icon" />,
  remainingRequests: 100,
  totalRequests: 100,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<UsageCounterTagProps>): RenderType => {
  return render(
    <UsageCounterTag
      {...defaultProps}
      {...props}
    />,
  );
};

describe('UsageCounterTag - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText('100/100')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
