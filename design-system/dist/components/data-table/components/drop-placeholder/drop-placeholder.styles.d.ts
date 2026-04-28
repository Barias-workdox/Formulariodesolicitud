import { StyleObject } from 'styletron-react';
/**
 * Retrieves the style object containing the position and dimensions for the `DropPlaceholder` component.
 *
 * @param list - The container element containing the list of columns.
 * @param sourceIndex - The index of the source element where the drag event started.
 * @param destinationIndex - The index of the destination element.
 * @returns The style object with `top`, `left`, `height`, and `width` properties.
 */
export declare const getRectStyles: (list: HTMLDivElement, sourceIndex: number, destinationIndex: number) => StyleObject;
