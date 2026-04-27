import type { CurrencyCodeType } from '../../../types/currency';
import type { Locale } from '../i18n/i18n.interface';
import type { TFunction } from 'i18next';

/**
 * Options for the `formatCurrency` function.
 */
export type FormatCurrencyOptions = {
  /** The numeric value to format. */
  value: number;
  /** The currency code. */
  currency: CurrencyCodeType;
  /** The locale for formatting (optional). */
  locale?: Locale;
};

/**
 * Options for the `formatCurrency` function.
 */
export type TranslateCurrencyOptions = {
  /** The currency code. */
  currency: CurrencyCodeType;
};

/**
 * Function signature for formatting currency using i18next translation.
 *
 * @param t - The i18next translation function.
 * @param opt - The options for formatting currency.
 * @returns The formatted currency string.
 */
export type FormatCurrencyFunction = (t: TFunction, opt: FormatCurrencyOptions) => string;

/**
 * Formats a currency value using i18next translation.
 *
 * @param t - The i18next translation function.
 * @returns The formatted currency string.
 *
 * @example
 * ```typescript
 * // Use the i18n hook to get the t function
 * const {t} = useTranslation();
 *
 * const options = {
 *   value: 1000,
 *   currency: 'USD',
 *   locale: 'en-US',
 * };
 *
 * const formattedCurrency = formatCurrency(t, options);
 *
 * console.log(formattedCurrency);
 * // Console: $1,000.00
 * ```
 */
export const formatCurrency: FormatCurrencyFunction = (t, { value, currency, locale }) => {
  const formattedCurrency: string = t('currency.formattedCurrency', {
    value,
    formatParams: {
      value: { currency, ...(locale && { locale }) },
    },
  });

  return formattedCurrency;
};
