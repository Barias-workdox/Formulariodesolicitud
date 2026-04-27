import { useMedia } from 'react-use';

import { mediaQueries } from '@tokens/breakpoints';

import type { ResponsiveTheme } from '@themes/theme.interfaces';

type BreakpointKeys = keyof ResponsiveTheme['mediaQuery'];
type UseResponsivePropsParams<T> = Partial<Record<BreakpointKeys, T>>;

/**
 * This hook provides a convenient way to dynamically apply Component props based on the current screen size.
 *
 * **Example:**
 * ```typescript
 * const responsiveProps = useResponsiveProps({
 *   large: { size: '44px' },
 *   small: { size: '32' },
 * }, {size: "24px"});
 *
 * return <Button {...responsiveProps}>Click</div>;
 * ```
 */
export const useResponsiveProps = <T,>(
  values: UseResponsivePropsParams<T>,
  defaultProps?: T,
): T | undefined => {
  // Create individual useMedia hooks for each breakpoint
  const isExtraLarge = useMedia(mediaQueries.extralarge);
  const isLarge = useMedia(mediaQueries.large);
  const isMedium = useMedia(mediaQueries.medium);
  const isSmall = useMedia(mediaQueries.small);

  // Determine the current breakpoint
  let currentBreakpoint: BreakpointKeys | undefined;

  if (isExtraLarge && 'extralarge' in values) currentBreakpoint = 'extralarge';
  else if (isLarge && 'large' in values) currentBreakpoint = 'large';
  else if (isMedium && 'medium' in values) currentBreakpoint = 'medium';
  else if (isSmall && 'small' in values) currentBreakpoint = 'small';
  else currentBreakpoint = 'extrasmall';

  // Return the value for the current breakpoint, or fall back to the smallest defined breakpoint
  if (currentBreakpoint && currentBreakpoint in values) {
    return values[currentBreakpoint];
  }

  return defaultProps;
};
