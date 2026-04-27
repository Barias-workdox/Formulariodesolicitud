import { useCallback, useMemo, type ReactNode } from 'react';

import { isNil } from 'lodash';

import { CompoundStartEnhancer } from '../components/compound-start-enhancer';

import type { InputProps } from '../input.interfaces';
import type { SharedProps } from 'baseui/input';

type UseCompoundStartEnhancerProps = Pick<
  InputProps,
  'startEnhancer' | 'leading' | 'prefixText' | 'size'
>;

type UseCompoundStartEnhancerReturn = {
  showStartEnhancer: boolean;
  getStartEnhancerElement?(props: SharedProps): ReactNode;
};

/**
 * Hook to manage the start enhancer of the input component.
 * It determines whether the start enhancer should be shown based on the presence of leading, prefixText, or startEnhancer.
 */
export const useCompoundStartEnhancer = ({
  leading,
  prefixText = '',
  size,
  startEnhancer,
}: UseCompoundStartEnhancerProps): UseCompoundStartEnhancerReturn => {
  const showStartEnhancer = useMemo(
    () => !isNil(leading) || prefixText !== '' || !isNil(startEnhancer),
    [leading, prefixText, startEnhancer],
  );

  /**
   * Creates the start enhancer component with the necessary props.
   */
  const getStartEnhancerElement = useCallback(
    (sharedProps: SharedProps): ReactNode => {
      return (
        <CompoundStartEnhancer
          size={size}
          prefixText={prefixText}
          leading={leading}
          startEnhancer={startEnhancer}
          {...sharedProps}
        />
      );
    },
    [leading, prefixText, size, startEnhancer],
  );

  return {
    showStartEnhancer,
    getStartEnhancerElement,
  };
};
