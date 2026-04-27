import { Children, useEffect, useState } from 'react';

import { StyledChildContainer } from './styled-components';

import type { StageOrder } from './staggered-animation.interfaces';

export interface StaggeredAnimationProps {
  children: React.ReactNode[];
  /** The base delay in milliseconds before the animation starts. Default is `100`.*/
  baseDelay?: number;
  /** The duration in milliseconds for each animation. Default is `300`.*/
  duration?: number;
  /** The order in which the child elements should be animated. Default is `asc`.*/
  order?: StageOrder;
}

/**
 * `StaggeredAnimation` is a component that animates its children
 * with a staggered effect. Each child will appear with a delay based on its index.
 *
 * @example
 * ```tsx
 * <StaggeredAnimation baseDelay={150} duration={300}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </StaggeredAnimation>
 * ```
 */
export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children = [],
  baseDelay = 100,
  duration = 200,
  order = 'asc',
}) => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  /**
   * This effect iterates over the `children` array and sets a timer for each child to make it visible
   * based on the `order` and a calculated delay. The delay is determined by the child's position and
   * the `baseDelay` value.
   */
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (children.length > 0) {
      children.forEach((_, index) => {
        const stagePosition = order === 'asc' ? index : children.length - index;

        const timer = setTimeout(() => {
          setVisibleIndexes((prev) => [...prev, index]);
        }, stagePosition * baseDelay);

        timers.push(timer);
      });
    }

    // Cleanup function to clear all timers
    return (): void => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [children, baseDelay, order]);

  return (
    <>
      {Children.map(children, (child, index) => (
        <StyledChildContainer
          $show={visibleIndexes.includes(index)}
          $duration={duration}
        >
          {child}
        </StyledChildContainer>
      ))}
    </>
  );
};
