import { render, screen } from '@test/test-utils';

import { TimelineStep } from '../timeline-step';

import type { TimelineStepProps } from '../timeline-step';
import type { RenderType } from '@test/test-utils';

const defaultProps: TimelineStepProps = {
  title: 'Title',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<TimelineStepProps>): RenderType => {
  return render(
    <TimelineStep
      {...defaultProps}
      {...props}
    />,
  );
};

describe('TimelineStep - test', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('should render a custom body', () => {
    renderComponent({ isActive: true, children: <>Children</> });

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should not render a custom body', () => {
    renderComponent({ children: <>Children</> });

    expect(screen.queryByText('Children')).not.toBeInTheDocument();
  });

  it('should render a custom indicator', () => {
    renderComponent({ overrides: { Icon: { component: () => <>Icon</> } } });

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
});
