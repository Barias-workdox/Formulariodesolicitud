import type {
  NicTextsByNationalIdentificationKindCode,
  NicValidationsTextsByNationalIdentificationKindCode,
} from '../../../../utils/interfaces/nic.interface';

export const nicCHLTextsMap: NicTextsByNationalIdentificationKindCode = new Map([
  [
    undefined,
    {
      label: 'forms.CHL.nic.label',
      placeholder: 'forms.CHL.nic.placeholder',
      tooltip: 'forms.CHL.nic.tooltip',
    },
  ],
]);

export const nicCHLValidationTextsMap: NicValidationsTextsByNationalIdentificationKindCode =
  new Map([
    [
      undefined,
      {
        validation: 'forms.CHL.nic.validation',
      },
    ],
  ]);
