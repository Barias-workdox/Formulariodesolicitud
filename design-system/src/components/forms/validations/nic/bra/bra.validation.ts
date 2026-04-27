import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

/**
 * Check if the input string value is a valid CPF number
 * CPF Means (Cadastro do Pessoas Naturais / Natural People Register)
 * it looks like to RUT in Chile
 * Algorithm based on https://www.devmedia.com.br/validar-cpf-com-javascript/23916 and
 * https://en.wikipedia.org/wiki/CPF_number
 *
 * @returns - Boolean value which indicates if the input is valid or not valid CPF number.
 */
export const validateBRANic = ({
  /** The raw NIC string to validate. */
  rawNic,
}: NicPayloadType): boolean => {
  let sum = 0;
  let mod;

  rawNic = rawNic.replace(/[^\d]/g, '');
  if (rawNic === '00000000000') {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(rawNic.substring(i - 1, i)) * (11 - i);
  }

  mod = (sum * 10) % 11;
  if (mod === 10 || mod === 11) {
    mod = 0;
  }
  if (mod !== parseInt(rawNic.substring(9, 10))) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += parseInt(rawNic.substring(i - 1, i)) * (12 - i);
  }

  mod = (sum * 10) % 11;

  if (mod === 10 || mod === 11) {
    mod = 0;
  }
  if (mod !== parseInt(rawNic.substring(10, 11))) {
    return false;
  }

  return true;
};
