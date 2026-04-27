import type { ReactElement } from 'react';

import { useInView } from 'react-intersection-observer';

import { Spinner } from '../../../../spinner';
import { useCss } from '../../../../utils/hooks/use-css';

import { styles } from './load-more-sensor.styles';

import type { InfiniteScrollProps } from '@components/menu/stateful-menu-with-infinite-scroll/stateful-menu-with-infinite-scroll.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

type LoadMoreSensorProps = WithTestId<InfiniteScrollProps>;

/**
 * Helper component to observe if the element is visible
 */
export const LoadMoreSensor = ({
  'data-testid': dataTestId = 'load-more-sensor',
  isLoadingMore,
  onLoadMore,
}: LoadMoreSensorProps): ReactElement => {
  const { spinnerContainerStyles } = useCss(styles);

  /**
   * Invoke the "onLoadMore" callback when the sensor is visible
   */
  const onChange = (inView: boolean): void => {
    if (inView) {
      if (onLoadMore) {
        onLoadMore(inView);
      } else {
        console.error('onLoadMore not implemented');
      }
    }
  };

  const { ref } = useInView({
    onChange,
  });

  return isLoadingMore ? (
    <div
      data-testid={`${dataTestId}--spinner`}
      className={spinnerContainerStyles}
    >
      <Spinner size="sm" />
    </div>
  ) : (
    <div
      ref={ref}
      data-testid={dataTestId}
    />
  );
};
