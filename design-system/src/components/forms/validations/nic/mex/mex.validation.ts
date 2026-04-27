import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

/**
 * Returns true or false depending on if the value is a valid mexican RFC.
 * The string should start with 3 or 4 letters (depending on whether it is a legal or natural person)
 * followed by a date in YYMMDD format and then 2 more letters or numbers and 1 number at the end.
 *
 * @example
 * Here's an example for a natural person:
 * ```
 * // returns "true":
 * console.log(validateRfc ('FUPJ670807LV8');
 * ```
 *
 * @example
 * Here's an example for a legal person:
 * ```
 * // returns "true":
 * console.log(validateRfc ('IMO020408TB1');
 * ```
 */
export const validateMEXNic = ({ rawNic }: NicPayloadType): boolean =>
  rawNic.match(
    /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/,
  ) !== null;
