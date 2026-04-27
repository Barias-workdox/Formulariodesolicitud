import type { currencies } from '@components/utils/constants/currency.constants';

export type CurrencyCodeType = (typeof currencies)[number]['currencyCode'];
