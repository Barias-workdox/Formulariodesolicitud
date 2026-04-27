import { renderUseTranslation } from '@test/test-utils';

import { formatCurrency } from '../currency/format-currency.utils';

import type { CurrencyCodeType } from '../../../types/currency';
import type { Locale } from '../i18n/i18n.interface';

const usdCurrency: CurrencyCodeType = 'USD';
const value = 1500.89;
const locale: Locale = 'en';

describe('formatCurrency - tests', () => {
  const { t } = renderUseTranslation();

  it('formats currency correctly with `USD` and `en` locale', () => {
    const formattedCurrency = formatCurrency(t, { currency: usdCurrency, value, locale });

    expect(formattedCurrency).toEqual('$1,500.89');
  });

  it('formats currency correctly with `USD` and `undefined` locale', () => {
    const formattedCurrency = formatCurrency(t, { currency: usdCurrency, value });

    // Use a regular expression with a non-breaking space (\u00A0)
    expect(formattedCurrency).toMatch(/^1500,89\u00A0US\$$/);
  });
});
