import { useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';

import { isNil } from 'lodash';

import { noop } from '@utils/noop';

import { CompoundEndEnhancer } from '../components/compound-end-enhancer';

import type { InputProps } from '../input.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { SharedProps } from 'baseui/input';

export type UseCompoundEndEnhancerProps = WithTestId &
  Pick<
    InputProps,
    | 'endEnhancer'
    | 'value'
    | 'clearable'
    | 'disabled'
    | 'showCopyContentButton'
    | 'isLoading'
    | 'error'
    | 'positive'
  > & {
    onClear?(): void;
  };

type UseCompoundEndEnhancerReturn = {
  showEndEnhancer: boolean;
  getEndEnhancerElement?(props: SharedProps): ReactNode;
};

/**
 * Hook to manage the end enhancer of the input component.
 * It determines whether the end enhancer should be shown based on the presence of endEnhancer,
 * value, clearable, disabled, showCopyContentButton, isLoading, error, and positive.
 */
export const useCompoundEndEnhancer = ({
  'data-testid': dataTestId,
  endEnhancer,
  value = '',
  clearable = false,
  disabled = false,
  showCopyContentButton = false,
  onClear = noop,
  error = false,
  isLoading = false,
  positive = false,
}: UseCompoundEndEnhancerProps): UseCompoundEndEnhancerReturn => {
  const isEmpty = useMemo(() => isNil(value) || value === '', [value]);

  const canClear = useMemo(
    () => !isEmpty && clearable && !disabled,
    [clearable, isEmpty, disabled],
  );
  const canCopy = useMemo(
    () => !isEmpty && showCopyContentButton && !disabled,
    [showCopyContentButton, isEmpty, disabled],
  );

  const showEndEnhancer = useMemo(
    () => canClear || canCopy || isLoading || !isNil(endEnhancer) || error || positive,
    [canClear, canCopy, isLoading, endEnhancer, error, positive],
  );

  /**
   * Creates the end enhancer component with the necessary props.
   */
  const getEndEnhancerElement = useCallback(
    (sharedProps: SharedProps): ReactNode => {
      return (
        <CompoundEndEnhancer
          data-testid={`${dataTestId}__end-enhancer`}
          canClear={canClear}
          canCopy={canCopy}
          endEnhancer={endEnhancer}
          error={error}
          isLoading={isLoading}
          onClear={onClear}
          positive={positive}
          value={value}
          {...sharedProps}
        />
      );
    },
    [canClear, canCopy, dataTestId, endEnhancer, error, isLoading, onClear, positive, value],
  );

  return {
    showEndEnhancer,
    getEndEnhancerElement,
  };
};
