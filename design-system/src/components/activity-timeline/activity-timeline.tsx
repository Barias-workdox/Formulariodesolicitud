import type { ReactNode } from 'react';

import { ProgressSteps } from 'baseui/progress-steps';

import { Spinner } from '@components/spinner';
import { useInfiniteScrollPagination } from '@hooks/use-infinite-scroll-pagination.hook';

import { ActivityComment, ActivityDocuments, ActivityItem, ActivityUsers } from './components';

import type { IActivity } from './activity-timeline.interfaces';

export interface ActivityTimelineProps {
  'data-testid'?: string;
  activities: IActivity[];
  isPaginated?: boolean;
  isLoading?: boolean;
  /** A callback function to be called when the end of the page is reached, triggering pagination. */
  onPageEnd?(): void;
}

/**
 * The `ActivityTimeline` component displays a timeline of activities.
 * It can display a list of activities and supports infinite pagination.
 * This component uses the Progress Step from Base Web and displays a
 * spinner when isLoading is true.
 *
 * @deprecated Use the `Timeline` API instead
 */
export const ActivityTimeline = ({
  'data-testid': dataTestId = 'activity-timeline',
  activities = [],
  isPaginated,
  isLoading,
  onPageEnd = (): void => {},
}: ActivityTimelineProps): JSX.Element => {
  const { endOfPageNode } = useInfiniteScrollPagination({
    onPageEnd,
    disabled: !isPaginated || isLoading,
  });

  return (
    <>
      <ProgressSteps>
        {activities.map(
          (
            {
              id,
              createdAt,
              overrides,
              description,
              type = 'custom',
              extraData: { comment, users = [], documents = [] } = {},
            },
            index,
          ): ReactNode => {
            const isLast = index === activities.length - 1;

            return (
              <ActivityItem
                data-testid={`${dataTestId}__${id}-activity`}
                key={id}
                createdAt={createdAt}
                description={description}
                type={type}
                overrides={overrides}
                isLast={isLast}
              >
                {comment && <ActivityComment comment={comment} />}
                {users.length > 0 && <ActivityUsers users={users} />}
                {documents.length > 0 && <ActivityDocuments documents={documents} />}
                {isLast && isPaginated && endOfPageNode}
              </ActivityItem>
            );
          },
        )}
      </ProgressSteps>
      {isLoading && <Spinner />}
    </>
  );
};
