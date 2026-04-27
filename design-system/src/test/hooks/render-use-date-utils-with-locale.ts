import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { renderHook } from '@test/test-utils';

/**
 * Utility function for testing to render the useDateUtilsWithLocale hook.
 */
export const renderUseDateUtilsWithLocale = (): ReturnType<typeof useDateUtilsWithLocale> => {
  const {
    result: { current },
  } = renderHook(useDateUtilsWithLocale);

  return current;
};
