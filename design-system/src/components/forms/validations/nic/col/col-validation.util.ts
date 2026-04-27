/**
 * Validate if Colombian "Número de Identificación Tributaria" (NIT) is valid.
 *
 * In some cases if user has active "verifik_col" flag,
 * this validation it will be used to validate "Cédula de Ciudadanía" (CC), "Cédula de Extranjería" (CE) & "Permiso Especial de Permanencia" (PEP).
 */
export const checkCOLNIT = (numberCol: string): boolean => {
  /** Helper to validate if NIT is valid */
  const validateNit = (nit: string | null): boolean => {
    const _regexFormat = /^(\d|\.|-)+$/;
    const _regexAdjust = /\D/gi;
    const _baseMod = 11;
    const _multipliers = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];

    if (!nit) {
      return false;
    }

    if (!_regexFormat.test(nit)) {
      return false;
    }

    const adjustedNit = nit.replace(_regexAdjust, '');
    if (!([9, 10].indexOf(adjustedNit.length) !== -1)) {
      return false;
    }

    const digit = adjustedNit.substr(adjustedNit.length - 1);
    const sequence = adjustedNit
      .substr(0, adjustedNit.length - 1)
      .split('')
      .reverse();

    let v = 0;
    let index = 0;
    for (; index < sequence.length; index++) {
      v += parseInt(sequence[index], 10) * _multipliers[index];
    }

    let check = v % _baseMod;
    if (check >= 2) {
      check = _baseMod - check;
    }

    return check === parseInt(digit, 10);
  };

  const re = /^((\d{6,11})|(\d{6}-\d{5}))?$/;

  return re.test(numberCol) || validateNit(numberCol);
};
