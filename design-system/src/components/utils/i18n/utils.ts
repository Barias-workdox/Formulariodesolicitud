import { useTranslation as _useTranslation } from 'react-i18next';

import { PROJECT_NAMESPACE } from '../i18n';

import type { es as baseLang } from '../../../locales/design-system/es';
import type { Leaves } from '../../../types/utils/deep-object-keys';
import type { UseTranslationResponse as _UseTranslationResponse } from 'react-i18next';

/** Custom TFunction type with the "baseLang" translation keys as params */
export type TFunction = (key: Leaves<typeof baseLang>) => string;

/** Custom UseTranslationResponse with the custom TFunction */
type UseTranslationResponse = _UseTranslationResponse<typeof PROJECT_NAMESPACE, undefined> & {
  t: TFunction;
};

/** useTranslation hook that returns the custom UseTranslationResponse to get the TFunction with the "baseLang" translation keys as params */
export const useTranslation = (): UseTranslationResponse => _useTranslation(PROJECT_NAMESPACE);
