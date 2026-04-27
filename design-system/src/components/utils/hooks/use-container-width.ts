import type { RefObject } from 'react';
import { useCallback, useEffect, useState } from 'react';

/**
 * Hook to listen to the window size and update the container width
 *
 * It is used to set the width in the popover content and in the selected value
 * to correctly apply the `textOverflow: ellipsis`.
 */
export const useContainerWidth = (ref: RefObject<HTMLDivElement>): { containerWidth: number } => {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(ref.current?.offsetWidth);
  }, [ref]);

  useEffect(() => {
    handleResize();

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, handleResize]);

  return { containerWidth: width };
};
