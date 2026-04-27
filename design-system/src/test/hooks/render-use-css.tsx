import { useCss } from '@components/utils/hooks/use-css';
import { ThemedComponent, renderHook } from '@test/test-utils';

import type { UseCssResponse } from '@components/utils/hooks/use-css';

/**
 * Utility function for testing to render the useCss hook.
 *
 * @returns The current value of the useCss hook.
 */
export const renderUseCss = <T, U, TExtraParams>(): UseCssResponse<T, U> => {
  const {
    result: { current },
  } = renderHook(useCss<T, U, TExtraParams>, {
    wrapper: ({ children }) => <ThemedComponent>{children}</ThemedComponent>,
  });

  return current;
};
