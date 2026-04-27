import type { ReactNode } from 'react';

import type { EnhancerType } from '../input.interfaces';
import type { SharedProps } from 'baseui/input';

/**
 * Utility to resolve enhancer (function or node)
 */
export const resolveEnhancer = (enhancer: EnhancerType, props: SharedProps): ReactNode => {
  if (typeof enhancer === 'function') {
    return enhancer(props);
  }

  return enhancer;
};
