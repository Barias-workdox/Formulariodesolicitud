import type {
  NicTextsByNationalIdentificationKindCode,
  NicValidationsTextsByNationalIdentificationKindCode,
} from '../../../../utils/interfaces/nic.interface';

export const nicMEXTextsMap: NicTextsByNationalIdentificationKindCode = new Map([
  [
    undefined,
    {
      label: 'forms.MEX.nic.label',
      placeholder: 'forms.MEX.nic.placeholder',
      tooltip: 'forms.MEX.nic.tooltip',
    },
  ],
]);

export const nicMEXValidationTextsMap: NicValidationsTextsByNationalIdentificationKindCode =
  new Map([
    [
      undefined,
      {
        validation: 'forms.MEX.nic.validation',
      },
    ],
  ]);
