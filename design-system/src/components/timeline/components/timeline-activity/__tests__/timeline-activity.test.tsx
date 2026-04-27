import { render, screen } from '@test/test-utils';

import { TimelineActivity } from '../timeline-activity';

import type { TimelineActivityProps } from '../timeline-activity';
import type { RenderType } from '@test/test-utils';

const defaultProps: TimelineActivityProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  indicator: <>Icon</>,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<TimelineActivityProps>): RenderType => {
  return render(
    <TimelineActivity
      {...defaultProps}
      {...props}
    />,
  );
};

describe('TimelineActivity - test', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('should render a custom children', () => {
    renderComponent({ children: <>Children</> });

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
