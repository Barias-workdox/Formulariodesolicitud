/** All reusable string utilities */
export declare class StringUtils {
    /** Process the value the supplied regexp to find all matches in the return array */
    getAllMatches(value: string, regex: RegExp): RegExpMatchArray[];
    /** Handle all possible string cases to convert it to number. `undefined` if it is not a number string */
    mapToNumber(rawValue?: string | number): number | undefined;
}
export declare const stringUtils: StringUtils;
/**
 * Transforms a country code (ISO 3166-1 alfa-2) into an emoji flag
 */
export declare const getFlagEmoji: (countryCode: string) => string;
/**
 * Applies a given prefix to a string and returns the concatenated result.
 * This is a higher-order function that first takes a prefix of type `PrefixT`
 * and returns another function. The returned function takes a string of type `StringT`
 * and returns a new string that combines the prefix and the original string.
 */
export declare const addPrefixToStringClosure: <PrefixT extends string>(prefix: PrefixT) => <StringT extends string | number>(str: StringT) => `${PrefixT}${StringT}`;
