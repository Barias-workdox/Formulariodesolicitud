import { useTranslation as _useTranslation } from 'react-i18next';

import { COUNTRIES_NAMESPACE } from '../i18n';

import type { es as baseLang } from '../../../locales/countries/es';
import type { Leaves } from '../../../types/utils/deep-object-keys';
import type { UseTranslationResponse as _UseTranslationResponse } from 'react-i18next';

/** Custom TFunction type with the "baseLang" translation keys as params */
export type TFunctionCountries = (key: Leaves<typeof baseLang>) => string;

/** Custom UseTranslationResponse with the custom TFunction */
type UseCountriesTranslationResponse = _UseTranslationResponse<
  typeof COUNTRIES_NAMESPACE,
  undefined
> & {
  t: TFunctionCountries;
};

/** useTranslation hook that returns the custom UseTranslationResponse to get the TFunction with the "baseLang" translation keys as params */
export const useCountriesTranslation = (): UseCountriesTranslationResponse =>
  _useTranslation(COUNTRIES_NAMESPACE);
