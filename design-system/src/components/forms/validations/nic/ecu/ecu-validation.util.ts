import { checkContainsOnlyNumbers } from '../util/nic-validation.util';

/**
 * "Cédula de Identidad" (CI) & "Cédula de Exntrajería" (CE) Ecuador validation.
 *
 * CI & CE the two first digits are in the range of 01-24 or equals to 30,
 * the third digit is in the range of 0-5 & length = 10
 */
export const checkCIandCEEcuador = (nic: string): boolean => {
  const defaultEcuFormatRegEx = new RegExp(/^(?:0[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|30[0-9])/);

  return checkContainsOnlyNumbers(nic) && defaultEcuFormatRegEx.test(nic) && nic.length == 10;
};

/**
 *"Registro Único de Contribuyente" (RUC) Ecuador
 * Algorithm based on {@link https://medium.com/@bryansuarez/c%C3%B3mo-validar-c%C3%A9dula-y-ruc-en-ecuador-b62c5666186f}
 * and {@link https://www.jybaro.com/blog/cedula-de-identidad-ecuatoriana/}
 *
 *  @deprecated Prefer to use 'validateECUNIC' for new implementations.
 */
export const legacyCheckECURUC = (ruc: string): boolean => {
  const lengthWithDescription = 13;
  const lengthWithoutDescription = 10;
  const { length } = ruc;
  const legal = 9;
  const natural = Array.from(Array(6).keys());
  const institution = 6;
  const positionCheck = 2;
  const firstPart = 2;
  const firstPartConstraints = Array.from(Array(23).keys());
  const thirdPart = 3;
  const invalidThirdPart = ['000', '0000'];
  const specialLongCheck = 0;

  /**
   * longCheck: position verification Number
   * coefficients: numbers to use on algorithm, depends by module
   * module: algorithm type
   * each type of ruc has his own 'properties' or 'contraints' when
   * verification number is calculated
   */
  const constraints = {
    legal: {
      longCheck: 9,
      coefficients: [4, 3, 2, 7, 6, 5, 4, 3, 2],
      module: 11,
    },
    institution: {
      longCheck: 8,
      coefficients: [3, 2, 7, 6, 5, 4, 3, 2],
      module: 11,
    },
    natural: {
      longCheck: 9,
      coefficients: [2, 1, 2, 1, 2, 1, 2, 1, 2],
      module: 10,
    },
  };
  const re = /^\d+$/;

  /**
   * Calculates the sum of a number's digits.
   *
   * @param number - number with two or more digits
   * @returns the sum between number's digit
   */
  const sumDigits = (number: number): number => {
    let sum = 0;
    while (number) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }

    return sum;
  };

  /**
   * Calculates the verification number for a given RUC based on coefficients and module.
   *
   * @param ruc - ruc as string
   * @param coefficients - coefficients based on constraints
   * @param module - number module to apply
   * @returns ruc's verification number based on coefficients and module
   */
  const totalCheck = (ruc: string, coefficients: number[], module: number): number => {
    const total = coefficients.reduce((acc, current, index) => {
      const result = parseInt(ruc[index]) * current;

      return result >= 10 && module === 10 ? acc + sumDigits(result) : acc + result;
    }, 0);
    const rest = total % module;
    if (rest === specialLongCheck) {
      return 0;
    } else {
      return module - rest;
    }
  };
  if (re.test(ruc) && [lengthWithDescription, lengthWithoutDescription].includes(length)) {
    const firstPartCheck = firstPartConstraints.includes(parseInt(ruc.slice(0, firstPart)));
    const thirdPartCheck = !invalidThirdPart.includes(ruc.slice(length - thirdPart));
    if (firstPartCheck && thirdPartCheck) {
      const classifyNumber = parseInt(ruc[positionCheck]);
      if (natural.includes(classifyNumber)) {
        const verificationNumber = parseInt(ruc[constraints.natural.longCheck]);
        const numberToCheck = totalCheck(
          ruc,
          constraints.natural.coefficients,
          constraints.natural.module,
        );

        return verificationNumber === numberToCheck;
      } else if (classifyNumber === institution) {
        const verificationNumber = parseInt(ruc[constraints.institution.longCheck]);
        const numberToCheck = totalCheck(
          ruc,
          constraints.institution.coefficients,
          constraints.institution.module,
        );

        return verificationNumber === numberToCheck;
      } else if (classifyNumber === legal) {
        const verificationNumber = parseInt(ruc[constraints.legal.longCheck]);
        const numberToCheck = totalCheck(
          ruc,
          constraints.legal.coefficients,
          constraints.legal.module,
        );

        return verificationNumber === numberToCheck;
      }
    }
  }

  return false;
};

/**
 * New Ecuadorian "Registro Único de Contribuyente" (RUC) validation.
 *
 * RUC the two first digits are in the range of 01-24,
 * the third digit is in the range of 0-5 or equals to 6 or 9,
 * the three last digits are 001, 002, 003 and so on (the most common case is 001)
 * & length = 13
 */
export const checkRUCEcuador = (nic: string): boolean => {
  const rucFormatStartInputRegEx = new RegExp(
    /^(?:0[1-9](?:[0-5]|6|9)|1[0-9](?:[0-5]|6|9)|2[0-4](?:[0-5]|6|9)|30(?:[0-5]|6|9))\d/,
  );
  const rucFormatEndInputRegex = new RegExp(/00[1-9]$/);
  const isValidRucFormat = rucFormatStartInputRegEx.test(nic) && rucFormatEndInputRegex.test(nic);

  return checkContainsOnlyNumbers(nic) && isValidRucFormat && nic.length == 13;
};
