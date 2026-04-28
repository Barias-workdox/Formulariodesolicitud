import { ReactElement } from 'react';
import { InputType, MapItemToNodeProps } from './suggestion-input.interfaces';
/** Default function to map an item to a node. */
export declare function defaultMapItemToNode<T>({ dataTestId, item, $isActive, handleClick, }: MapItemToNodeProps<T>): ReactElement;
/** Default function to map an item to a string. */
export declare function defaultMapItemToString<T>(item: T): string;
/**
 * Normalizes a given string value according to the specified input type.
 *
 * - If `type` is `'number'`, all non-digit characters are removed.
 * - If `type` is `'chile-rut'`, the value is cleaned to adhere to Chilean RUT format.
 * - Otherwise, the original value is returned unchanged.
 */
export declare const normalizeValue: (value: string, type: InputType) => string;
