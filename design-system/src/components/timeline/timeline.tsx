import { Fragment } from 'react';
import type { ReactElement } from 'react';

import { ProgressSteps } from 'baseui/progress-steps';

import { Spinner } from '@components/spinner';
import { useInfiniteScrollPagination } from '@hooks/use-infinite-scroll-pagination.hook';

import type { TimelineType } from './interfaces/timeline.interfaces';

export type TimelineProps = {
  /**
   * Represents a collection of `ReactNode` elements along with their corresponding _identifiers_ used as keys.
   *
   * It is essential that any component intended for rendering within this collection is
   * constructed on top of the `TimelineStep` component.
   */
  activities: TimelineType[];
  /** Default `false` */
  isLoading?: boolean;
  /** Default `false` */
  isPaginated?: boolean;
  /** Callback function that triggers the pagination when the final node is reached */
  onPageEnd?(): void;
};

/**
 * Component that displays a sequence of child components as a timeline of events.
 *
 * The component allows to use infinite pagination. Use this component instead of `ActivityTimeline`
 */
export const Timeline = ({
  activities,
  isLoading = false,
  isPaginated = false,
  onPageEnd,
}: TimelineProps): ReactElement => {
  const { endOfPageNode } = useInfiniteScrollPagination({
    onPageEnd,
    disabled: !isPaginated || isLoading,
  });

  return (
    <>
      <ProgressSteps>
        {activities.map(({ id, component }, index) => {
          const isLast = index === activities.length - 1;

          return (
            <Fragment key={id}>
              {component}
              {isLast && isPaginated && endOfPageNode}
            </Fragment>
          );
        })}
      </ProgressSteps>
      {isLoading && <Spinner />}
    </>
  );
};
