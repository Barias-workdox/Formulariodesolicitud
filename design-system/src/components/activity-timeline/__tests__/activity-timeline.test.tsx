import { vi } from 'vitest';

import { formatDateAsText } from '@components/utils/strings/date.utils';
import {
  TEST_DEFAULT_LOCALE,
  render,
  replaceHtmlTagsFromText,
  screen,
  testHelpers,
} from '@test/test-utils';

import { ActivityTimeline } from '../activity-timeline';

import { activitiesMock1 } from './activities.mock';

import type { ActivityTimelineProps } from '../activity-timeline';
import type { RenderType } from '@test/test-utils';

const onPageEndMock = testHelpers.fn();

const defaultProps: ActivityTimelineProps = {
  activities: activitiesMock1,
  onPageEnd: onPageEndMock,
};

vi.mock('react-use', () => ({
  useIntersection: testHelpers.fn(() => ({ isIntersecting: true })),
}));

afterEach(() => {
  testHelpers.clearAllMocks();
});

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActivityTimelineProps>): RenderType => {
  return render(
    <ActivityTimeline
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ActivityTimeline - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    activitiesMock1.forEach(({ createdAt, description }) => {
      expect(screen.getByText(replaceHtmlTagsFromText(String(description)))).toBeInTheDocument();
      expect(
        screen.getByText(formatDateAsText(createdAt, TEST_DEFAULT_LOCALE, true)),
      ).toBeInTheDocument();
    });

    const activitiesWithComments = activitiesMock1.filter(
      (activity): activity is typeof activity & { extraData: { comment: string } } =>
        activity.extraData?.comment !== undefined,
    );

    expect(activitiesWithComments.length).toBeGreaterThan(0);

    activitiesWithComments.forEach(({ extraData }) => {
      expect(screen.getByText(extraData.comment)).toBeInTheDocument();
    });
  });

  it('should execute onPageEnd correctly when isPaginated is true', () => {
    renderComponent({ isPaginated: true });

    expect(onPageEndMock).toHaveBeenCalledTimes(1);
  });

  it('should not execute onPageEnd correctly when isPaginated is false', () => {
    renderComponent({ isPaginated: false });

    expect(onPageEndMock).not.toHaveBeenCalled();
  });

  it('should not execute onPageEnd when isLoading is true', () => {
    renderComponent({ isLoading: true });

    expect(onPageEndMock).not.toHaveBeenCalled();
  });
});
