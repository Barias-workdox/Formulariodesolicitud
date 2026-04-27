import { useTranslation } from 'react-i18next';

import { CONTRACT_TYPE_NAMESPACE } from '@components/utils';

import type { es as baseLang } from '../../../locales/contract-types/es';
import type { Leaves } from '../../../types/utils/deep-object-keys';
import type { UseTranslationResponse as _UseTranslationResponse } from 'react-i18next';

/** Custom TFunction type with the "baseLang" translation keys as params */
export type TFunctionDataTypes = (key: Leaves<typeof baseLang>) => string;

/** Custom UseTranslationResponse with the custom TFunction */
type UseContractTypeTranslationResponse = _UseTranslationResponse<
  typeof CONTRACT_TYPE_NAMESPACE,
  undefined
> & {
  t: TFunctionDataTypes;
};

/** useTranslation hook that returns the custom UseTranslationResponse to get the TFunction with the "baseLang" translation keys as params */
export const useContractTypeTranslation = (): UseContractTypeTranslationResponse =>
  useTranslation(CONTRACT_TYPE_NAMESPACE);
