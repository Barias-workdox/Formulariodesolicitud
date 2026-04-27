import { useTranslation } from 'react-i18next';

import { DATA_TYPE_NAMESPACE } from '@components/utils';

import type { es as baseLang } from '../../../locales/data-types/es';
import type { Leaves } from '../../../types/utils/deep-object-keys';
import type { UseTranslationResponse as _UseTranslationResponse } from 'react-i18next';

/** Custom TFunction type with the "baseLang" translation keys as params */
export type TFunctionDataTypes = (key: Leaves<typeof baseLang>) => string;

/** Custom UseTranslationResponse with the custom TFunction */
type UseDataTypeTranslationResponse = _UseTranslationResponse<
  typeof DATA_TYPE_NAMESPACE,
  undefined
> & {
  t: TFunctionDataTypes;
};

/** useTranslation hook that returns the custom UseTranslationResponse to get the TFunction with the "baseLang" translation keys as params */
export const useDataTypeTranslation = (): UseDataTypeTranslationResponse =>
  useTranslation(DATA_TYPE_NAMESPACE);
