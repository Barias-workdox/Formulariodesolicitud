import { formatDateAsText } from '@components/utils/strings/date.utils';
import { TEST_DEFAULT_LOCALE, render, screen } from '@test/test-utils';

import { ActivityItem } from '../components/activity-item/activity-item';

import type { ActivityItemProps } from '../components/activity-item/activity-item';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'activity-item';
const mockChildrenContent = 'Example description';
const mockDescription = 'Description example';
const mockCreatedAt = '2022-04-16T13:15:23.690-04:00';

const defaultProps: ActivityItemProps = {
  type: 'approved',
  createdAt: mockCreatedAt,
  description: mockDescription,
  children: <div>{mockChildrenContent}</div>,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActivityItemProps>): RenderType => {
  return render(
    <ActivityItem
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ActivityItem - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseTestId}--approved-icon--icon`)).toBeInTheDocument();
    expect(screen.getByText(mockChildrenContent)).toBeInTheDocument();
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
    expect(
      screen.getByText(formatDateAsText(mockCreatedAt, TEST_DEFAULT_LOCALE, true)),
    ).toBeInTheDocument();
  });
});
