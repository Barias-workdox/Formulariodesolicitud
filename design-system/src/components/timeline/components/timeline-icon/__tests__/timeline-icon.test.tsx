import { Chat } from '@carbon/icons-react';

import { render, screen } from '@test/test-utils';

import { TimelineIcon } from '../timeline-icon';

import type { TimelineIconProps } from '../timeline-icon';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'data-testid';

const defaultProps: TimelineIconProps = {
  'data-testid': dataTestId,
  Icon: Chat,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<TimelineIconProps>): RenderType => {
  return render(
    <TimelineIcon
      {...defaultProps}
      {...props}
    />,
  );
};

describe('TimelineIcon - test', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${dataTestId}--wrapper`)).toBeInTheDocument();
  });
});
