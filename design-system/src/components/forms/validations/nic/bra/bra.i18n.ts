import type {
  NicTextsByNationalIdentificationKindCode,
  NicValidationsTextsByNationalIdentificationKindCode,
} from '../../../../utils/interfaces/nic.interface';

export const nicBRATextsMap: NicTextsByNationalIdentificationKindCode = new Map([
  [
    undefined,
    {
      label: 'forms.BRA.nic.label',
      placeholder: 'forms.BRA.nic.placeholder',
      tooltip: 'forms.BRA.nic.tooltip',
    },
  ],
]);

export const nicBRAValidationTextsMap: NicValidationsTextsByNationalIdentificationKindCode =
  new Map([
    [
      undefined,
      {
        validation: 'forms.BRA.nic.validation',
      },
    ],
  ]);
