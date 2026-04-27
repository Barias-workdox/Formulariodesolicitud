import { useTranslation } from '../../../../utils';
import { nicBRATextsMap, nicBRAValidationTextsMap } from '../bra';
import { nicCHLTextsMap, nicCHLValidationTextsMap } from '../chl';
import { nicCOLValidationTextsMap } from '../col';
import { nicDefaultTextsMap, nicDefaultValidationTextsMap } from '../default/default.i18n';
import { nicECUTextsMap } from '../ecu';
import { nicMEXTextsMap, nicMEXValidationTextsMap } from '../mex';
import { nicPERTextsMap } from '../per';

import type { CountryCodeType } from '../../../../utils/interfaces';
import type {
  NicCountryPayloadType,
  NicTextType,
  NicTextsByNationalIdentificationKindCode,
  NicValidationTextType,
  NicValidationsTextsByNationalIdentificationKindCode,
} from '../../../../utils/interfaces/nic.interface';

export const allNicI18nTextsMap = new Map<
  CountryCodeType | undefined,
  NicTextsByNationalIdentificationKindCode
>([
  ['PER', nicPERTextsMap],
  ['BRA', nicBRATextsMap],
  ['ECU', nicECUTextsMap],
  ['MEX', nicMEXTextsMap],
  ['CHL', nicCHLTextsMap],
  [undefined, nicDefaultTextsMap],
]);

export const allNicI18nValidationTextsMap = new Map<
  CountryCodeType | undefined,
  NicValidationsTextsByNationalIdentificationKindCode
>([
  ['CHL', nicCHLValidationTextsMap],
  ['BRA', nicBRAValidationTextsMap],
  ['COL', nicCOLValidationTextsMap],
  ['MEX', nicMEXValidationTextsMap],
  [undefined, nicDefaultValidationTextsMap],
]);

/** Utility to get the selected text based on the countryCode and nationalIdentificationKindCode */
export const getNicI18nTexts = ({
  countryCode,
  nationalIdentificationKindCode,
}: NicCountryPayloadType): NicTextType => {
  return (
    allNicI18nTextsMap.get(countryCode)?.get(nationalIdentificationKindCode) ??
    allNicI18nTextsMap.get(undefined).get(nationalIdentificationKindCode) ??
    allNicI18nTextsMap.get(undefined).get(undefined)
  );
};

/** Utility to get the selected validation text based on the countryCode and nationalIdentificationKindCode */
export const getNicI18nValidationTexts = ({
  countryCode,
  nationalIdentificationKindCode,
}: NicCountryPayloadType): NicValidationTextType => {
  return (
    allNicI18nValidationTextsMap.get(countryCode)?.get(nationalIdentificationKindCode) ??
    allNicI18nValidationTextsMap.get(undefined).get(nationalIdentificationKindCode) ??
    allNicI18nValidationTextsMap.get(undefined).get(undefined)
  );
};

/** Utility to return all selected NIC texts in the required locale by context */
export const useNicI18nTexts = (payload: NicCountryPayloadType): NicTextType => {
  const { t } = useTranslation();

  const allTexts = getNicI18nTexts(payload);

  return Object.fromEntries(
    Object.entries(allTexts).map(([key, value]) => [key, t(value)]),
  ) as NicTextType;
};
