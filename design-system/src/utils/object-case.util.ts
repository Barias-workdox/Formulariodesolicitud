import _ from 'lodash';

import type { CamelCaseToSnakeNested } from './type.util';

/**
 * Converts all keys of an object according to the function it receives from the transformKey parameters.
 * It is used to convert an object with keys into a snake case or camel case.
 */
function mapKeysDeep<T>(obj: T, transformKey: (key: string) => string): unknown {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((element) => mapKeysDeep(element, transformKey));
  }

  const newObject = {};
  for (const [key, value] of Object.entries(obj)) {
    newObject[transformKey(key)] = mapKeysDeep(value, transformKey);
  }

  return newObject;
}

/**
 * Convert an object to the same object with snake case keys.
 */
export const keysToSnakeCase = <T>(obj: T): CamelCaseToSnakeNested<T> =>
  mapKeysDeep(obj, _.snakeCase) as CamelCaseToSnakeNested<T>;

/**
 * Convert an object to the same object with camel case keys.
 */
export const keysToCamelCase = <T>(obj: unknown): T => mapKeysDeep(obj, _.camelCase) as T;

/** Convert a camel case value into a snake case value */
export const valueToSnakeCase = (value?: string): string => _.snakeCase(value);
