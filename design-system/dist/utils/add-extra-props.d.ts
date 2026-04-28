import { ReactNode } from 'react';
/**
 * Adds extra props to a ReactNode if it is a valid React element.
 *
 * @param element - The element to which extra props will be added.
 * @param extraProps - The extra props to add to the element.
 * @returns The element with the extra props added, or the original element if it is not a valid React element.
 */
export declare function addExtraProps(element: ReactNode, extraProps: object): ReactNode;
