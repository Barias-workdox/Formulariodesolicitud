import { render, screen } from '@test/test-utils';

import { Timeline } from '../timeline';

import type { TimelineProps } from '../timeline';
import type { RenderType } from '@test/test-utils';

const defaultProps: TimelineProps = {
  activities: [{ id: 1, component: <>Test</> }],
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<TimelineProps>): RenderType => {
  return render(
    <Timeline
      {...defaultProps}
      {...props}
    />,
  );
};

describe('Timeline - test', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
