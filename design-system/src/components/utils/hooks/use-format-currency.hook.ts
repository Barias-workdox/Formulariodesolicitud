import { formatCurrency } from '../currency/format-currency.utils';
import { useTranslation } from '../i18n';
import { useCurrenciesTranslation } from '../i18n/use-currencies-translation.i18n';

import type {
  FormatCurrencyOptions,
  TranslateCurrencyOptions,
} from '../currency/format-currency.utils';
import type { TFunctionCurrencies } from '../i18n/use-currencies-translation.i18n';

export interface IUseFormatCurrency {
  /** Translation function for currency names. */
  t: TFunctionCurrencies;
  /**
   * Method to format a currency value.
   *
   * @param props - The options for formatting currency.
   * @returns The formatted currency string.
   */
  formatCurrency(props: FormatCurrencyOptions): string;
  /** Method to get the translated name of a currency. */
  getCurrencyTranslate(props: TranslateCurrencyOptions): string;
}

/**
 * Hook for formatting currency values.
 *
 * @returns An object with a method to format currency.
 *
 * @example
 * ```typescript
 * const { formatCurrency }: IUseFormatCurrency = useFormatCurrency();
 *
 * const options: FormatCurrencyOptions = {
 *   value: 1000,
 *   currency: 'USD',
 *   locale: 'en-US',
 * };
 *
 * formatCurrency(options); // $1,000.00
 * getCurrencyTranslate(options); // US Dollar
 * ```
 */
export const useFormatCurrency = (): IUseFormatCurrency => {
  const { t } = useTranslation();
  const { t: tCurrencies } = useCurrenciesTranslation();

  /** Method to get the translated name of a currency. */
  const getCurrencyTranslate = ({ currency }: TranslateCurrencyOptions): string => {
    return tCurrencies(currency);
  };

  return {
    /**
     * Formats a currency value using translation.
     *
     * @param params - The options for formatting currency.
     * @returns The formatted currency string.
     */
    formatCurrency: (params: FormatCurrencyOptions): string => formatCurrency(t, params),
    getCurrencyTranslate,
    t: tCurrencies,
  };
};
