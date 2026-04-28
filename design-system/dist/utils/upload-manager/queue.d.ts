/**
 * Represents an item to be processed by the queue worker.
 *
 * @typeParam TData - The type of data to be processed
 * @typeParam TResult - The type of result returned after processing
 */
export interface Item<TData, TResult> {
    /** The data to be processed. */
    data: TData;
    /** The signal to abort the worker. */
    signal: AbortSignal;
    /** The callback function to be called when the worker is done processing the item. */
    callback(err: unknown, result?: TResult): void;
    /** The progress function to be called when the worker is processing the item. */
    onProgress(progress: number): void;
}
/**
 * Represents a worker function that processes an item.
 *
 * @typeParam TData - The type of data to be processed
 * @typeParam TResult - The type of result returned after processing
 */
export type Worker<TData, TResult> = (props: Item<TData, TResult>) => void;
/**
 * Queue is a function that takes a worker function and returns a function that
 * takes an item and adds it to the queue. The queue will process the items
 * one by one, calling the worker function with each item. The worker function
 * is expected to call the callback function when it is done processing the item.
 *
 * @typeParam TData - The type of data to be processed by the worker
 * @typeParam TResult - The type of result returned by the worker
 * @param worker - The worker function that processes the items
 * @returns A function that takes an item and adds it to the queue
 */
export declare const queue: <TData, TResult>(worker: Worker<TData, TResult>) => ((item: Item<TData, TResult>) => void);
