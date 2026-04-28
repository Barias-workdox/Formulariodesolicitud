import { PROJECT_NAMESPACE } from '../i18n';
import { es as baseLang } from '../../../locales/design-system/es';
import { Leaves } from '../../../types/utils/deep-object-keys';
import { UseTranslationResponse as _UseTranslationResponse } from 'react-i18next';
/** Custom TFunction type with the "baseLang" translation keys as params */
export type TFunction = (key: Leaves<typeof baseLang>) => string;
/** Custom UseTranslationResponse with the custom TFunction */
type UseTranslationResponse = _UseTranslationResponse<typeof PROJECT_NAMESPACE, undefined> & {
    t: TFunction;
};
/** useTranslation hook that returns the custom UseTranslationResponse to get the TFunction with the "baseLang" translation keys as params */
export declare const useTranslation: () => UseTranslationResponse;
export {};
