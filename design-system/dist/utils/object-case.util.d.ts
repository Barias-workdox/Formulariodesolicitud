import { CamelCaseToSnakeNested } from './type.util';
/**
 * Convert an object to the same object with snake case keys.
 */
export declare const keysToSnakeCase: <T>(obj: T) => CamelCaseToSnakeNested<T>;
/**
 * Convert an object to the same object with camel case keys.
 */
export declare const keysToCamelCase: <T>(obj: unknown) => T;
/** Convert a camel case value into a snake case value */
export declare const valueToSnakeCase: (value?: string) => string;
