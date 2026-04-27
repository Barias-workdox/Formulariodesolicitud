import { useTranslation as _useTranslation } from 'react-i18next';

import { CURRENCIES_NAMESPACE } from '../i18n';

import type { es as baseLang } from '../../../locales/currencies/es';
import type { Leaves } from '../../../types/utils/deep-object-keys';
import type { UseTranslationResponse as _UseTranslationResponse } from 'react-i18next';

/** Custom TFunction type with the "baseLang" translation keys as params */
export type TFunctionCurrencies = (key: Leaves<typeof baseLang>) => string;

/** Custom UseTranslationResponse with the custom TFunction */
type UseCountriesTranslationResponse = _UseTranslationResponse<
  typeof CURRENCIES_NAMESPACE,
  undefined
> & {
  t: TFunctionCurrencies;
};

/** useTranslation hook that returns the custom UseTranslationResponse to get the TFunction with the "baseLang" translation keys as params */
export const useCurrenciesTranslation = (): UseCountriesTranslationResponse =>
  _useTranslation(CURRENCIES_NAMESPACE);
