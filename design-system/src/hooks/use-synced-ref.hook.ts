import { useLayoutEffect } from 'react';

import { useRefProxy } from '@components/utils/hooks/use-ref-proxy.hook';

type UseSyncedRefParams<T extends HTMLElement = HTMLElement> = {
  internalRef?: React.RefObject<T>;
  externalRef?: React.Ref<T>;
};

/**
 * Custom hook to synchronize an internal ref with an external ref.
 * This is useful when you want to keep an internal ref in sync with a ref passed from
 * a parent component, allowing the parent to access the internal element directly.
 *
 * If no internalRef is provided, a new one will be created and returned.
 *
 * Usage:
 * ```ts
 * const ref = useSyncedRef({ externalRef });
 * // or
 * const ref = useSyncedRef({ internalRef, externalRef });
 * ```
 */
export function useSyncedRef<T extends HTMLElement = HTMLElement>({
  internalRef,
  externalRef,
}: UseSyncedRefParams<T>): React.RefObject<T> {
  const fallbackRef = useRefProxy<T>();
  const refToUse = internalRef ?? fallbackRef;

  useLayoutEffect(() => {
    const node = refToUse.current;
    if (!externalRef || !node) return;

    if (typeof externalRef === 'function') {
      externalRef(node);
    } else if ('current' in externalRef) {
      (externalRef as React.MutableRefObject<T>).current = node;
    }
  }, [refToUse, externalRef]);

  return refToUse;
}
