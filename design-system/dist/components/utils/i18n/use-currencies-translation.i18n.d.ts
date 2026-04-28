import { CURRENCIES_NAMESPACE } from '../i18n';
import { es as baseLang } from '../../../locales/currencies/es';
import { Leaves } from '../../../types/utils/deep-object-keys';
import { UseTranslationResponse as _UseTranslationResponse } from 'react-i18next';
/** Custom TFunction type with the "baseLang" translation keys as params */
export type TFunctionCurrencies = (key: Leaves<typeof baseLang>) => string;
/** Custom UseTranslationResponse with the custom TFunction */
type UseCountriesTranslationResponse = _UseTranslationResponse<typeof CURRENCIES_NAMESPACE, undefined> & {
    t: TFunctionCurrencies;
};
/** useTranslation hook that returns the custom UseTranslationResponse to get the TFunction with the "baseLang" translation keys as params */
export declare const useCurrenciesTranslation: () => UseCountriesTranslationResponse;
export {};
