import { ReactElement } from 'react';
/**
 * Helper component for DataTable infinite scroll pagination.
 *
 * This node is used internally to detect when the user has reached the end of the list,
 * triggering the loading of additional data if infinite pagination is enabled.
 * It leverages the Intersection Observer API via the useInfiniteScrollPagination hook.
 *
 * Should not be used directly outside of the DataTable context.
 */
export declare const EndOfPageNode: () => ReactElement;
