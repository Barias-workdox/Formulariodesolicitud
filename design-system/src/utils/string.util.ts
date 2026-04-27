import { FLAG_EMOJI_RANGE_START } from '@constants/common.constants';

/** All reusable string utilities */
export class StringUtils {
  /** Process the value the supplied regexp to find all matches in the return array */
  public getAllMatches(value: string, regex: RegExp): RegExpMatchArray[] {
    const matches = [...value.matchAll(regex)];

    return matches;
  }

  /** Handle all possible string cases to convert it to number. `undefined` if it is not a number string */
  public mapToNumber(rawValue?: string | number): number | undefined {
    if (typeof rawValue === 'number') {
      return rawValue;
    }
    if (rawValue === undefined) {
      return undefined;
    }

    const value = rawValue.trim();
    const numberValue = Number(value);

    if (value === '') {
      return undefined;
    } else if (isNaN(numberValue)) {
      return undefined;
    } else {
      return numberValue;
    }
  }
}

export const stringUtils = new StringUtils();

/**
 * Transforms a country code (ISO 3166-1 alfa-2) into an emoji flag
 */
export const getFlagEmoji = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => FLAG_EMOJI_RANGE_START + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
};

/**
 * Applies a given prefix to a string and returns the concatenated result.
 * This is a higher-order function that first takes a prefix of type `PrefixT`
 * and returns another function. The returned function takes a string of type `StringT`
 * and returns a new string that combines the prefix and the original string.
 */
export const addPrefixToStringClosure =
  <PrefixT extends string>(prefix: PrefixT) =>
  <StringT extends string | number>(str: StringT): `${PrefixT}${StringT}` =>
    `${prefix}${str}`;
