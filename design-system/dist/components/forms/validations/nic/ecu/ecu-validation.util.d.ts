/**
 * "Cédula de Identidad" (CI) & "Cédula de Exntrajería" (CE) Ecuador validation.
 *
 * CI & CE the two first digits are in the range of 01-24 or equals to 30,
 * the third digit is in the range of 0-5 & length = 10
 */
export declare const checkCIandCEEcuador: (nic: string) => boolean;
/**
 *"Registro Único de Contribuyente" (RUC) Ecuador
 * Algorithm based on {@link https://medium.com/@bryansuarez/c%C3%B3mo-validar-c%C3%A9dula-y-ruc-en-ecuador-b62c5666186f}
 * and {@link https://www.jybaro.com/blog/cedula-de-identidad-ecuatoriana/}
 *
 *  @deprecated Prefer to use 'validateECUNIC' for new implementations.
 */
export declare const legacyCheckECURUC: (ruc: string) => boolean;
/**
 * New Ecuadorian "Registro Único de Contribuyente" (RUC) validation.
 *
 * RUC the two first digits are in the range of 01-24,
 * the third digit is in the range of 0-5 or equals to 6 or 9,
 * the three last digits are 001, 002, 003 and so on (the most common case is 001)
 * & length = 13
 */
export declare const checkRUCEcuador: (nic: string) => boolean;
