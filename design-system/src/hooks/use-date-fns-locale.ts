import { useMemo } from 'react';

import { allDateLocaleMap } from '@components/utils/strings/date.utils';
import { useLocale } from '@contexts/locale-provider';

import type { DateLocale } from '@components/utils';

type UseDateFnsLocaleProps = {
  dateFnsLocale: DateLocale;
};

/**
 * Hook that provides the `date-fns` locale object based on the current application locale.
 */
export const useDateFnsLocale = (): UseDateFnsLocaleProps => {
  const { locale } = useLocale();

  const dateFnsLocale = useMemo(() => allDateLocaleMap[locale], [locale]);

  return { dateFnsLocale };
};
