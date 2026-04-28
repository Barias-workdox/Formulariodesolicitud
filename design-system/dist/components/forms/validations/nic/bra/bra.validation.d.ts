import { NicPayloadType } from '../../../../utils/interfaces/nic.interface';
/**
 * Check if the input string value is a valid CPF number
 * CPF Means (Cadastro do Pessoas Naturais / Natural People Register)
 * it looks like to RUT in Chile
 * Algorithm based on https://www.devmedia.com.br/validar-cpf-com-javascript/23916 and
 * https://en.wikipedia.org/wiki/CPF_number
 *
 * @returns - Boolean value which indicates if the input is valid or not valid CPF number.
 */
export declare const validateBRANic: ({ rawNic, }: NicPayloadType) => boolean;
