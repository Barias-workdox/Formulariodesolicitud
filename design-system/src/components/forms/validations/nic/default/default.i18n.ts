import type {
  NationalIdentificationKindCode,
  NicTextType,
  NicValidationTextType,
} from '../../../../utils/interfaces/nic.interface';

export const nicDefaultTextsMap = new Map<NationalIdentificationKindCode | undefined, NicTextType>([
  [
    undefined,
    {
      label: 'forms.default.nic.label',
      placeholder: 'forms.default.nic.placeholder',
      tooltip: 'forms.default.nic.tooltip',
    },
  ],
]);

export const nicDefaultValidationTextsMap = new Map<
  NationalIdentificationKindCode | undefined,
  NicValidationTextType
>([
  [
    undefined,
    {
      validation: 'forms.default.nic.invalidDni',
    },
  ],
  [
    'RUC',
    {
      validation: 'forms.default.nic.invalidRuc',
    },
  ],
  [
    'CI',
    {
      validation: 'forms.default.nic.invalidCi',
    },
  ],
  [
    'DNI',
    {
      validation: 'forms.default.nic.invalidDni',
    },
  ],
  [
    'CE',
    {
      validation: 'forms.default.nic.invalidCe',
    },
  ],
  [
    'PAS',
    {
      validation: 'forms.default.nic.invalidPas',
    },
  ],
  [
    'PEP',
    {
      validation: 'forms.default.nic.invalidPep',
    },
  ],
]);
