import { useLocale } from '@contexts/locale-provider';

import type { Locale } from '@components/utils';

const separators: Record<Locale, string> = {
  base: ',',
  es: '.',
  en: ',',
  pt: '.',
};

/**
 * Custom hook to format a number with a thousand separator based on the current locale.
 *
 * @param value - The number to be formatted.
 * @returns The formatted number as a string with the appropriate thousand separator for the current locale.
 */
export const useThousandSeparatorLocale = (value: number): string => {
  const { locale } = useLocale();

  return value.toLocaleString().replace(/,/g, separators[locale]);
};
