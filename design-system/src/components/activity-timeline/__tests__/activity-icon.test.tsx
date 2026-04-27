import { render, screen } from '@test/test-utils';

import { ActivityIcon } from '../components/activity-item/components/activity-icon/activity-icon';

import type { ActivityIconProps } from '../components/activity-item/components/activity-icon/activity-icon';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'activity-icon';

const defaultProps: ActivityIconProps = {
  type: 'approved',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActivityIconProps>): RenderType => {
  return render(
    <ActivityIcon
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ActivityIcon - tests', () => {
  it('should render the component correctly when the type has a svg associated', () => {
    renderComponent({ type: 'approved' });

    expect(screen.getByTestId(`${baseTestId}--icon`)).toBeInTheDocument();
  });

  it('should render the component correctly when the type has a carbon icon associated', () => {
    renderComponent({ type: 'comment' });

    expect(screen.getByTestId(`${baseTestId}--icon`)).toBeInTheDocument();
  });
});
