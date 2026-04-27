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
export const queue = <TData, TResult>(
  worker: Worker<TData, TResult>,
): ((item: Item<TData, TResult>) => void) => {
  const queueItems: Item<TData, TResult>[] = [];

  let isWorking = false;

  /**
   * Run the next item in the queue.
   * This function is called when an item is added to the queue or when
   * a worker finishes processing an item.
   */
  function runNext(): void {
    if (isWorking) {
      return;
    }

    if (queueItems.length === 0) {
      return;
    }

    const item = queueItems.shift();

    if (!item) {
      return;
    }

    isWorking = true;

    /**
     * Callback function to be called when the worker is done processing the item.
     * It sets isWorking to false, runs the next item, and calls the original callback.
     *
     * @param err - Any error that occurred during processing
     * @param result - The result of processing the item
     */
    const callback = (err: unknown, result: TResult): void => {
      isWorking = false;

      runNext();

      // Wait until the js event loop ends to call the callback
      // to avoid blocking the main thread.
      setTimeout(() => {
        if (!err) {
          item.callback(null, result);
        } else {
          item.callback(err, result);
        }
      }, 0);
    };

    worker({
      ...item,
      callback,
    });
  }

  /**
   * Function returned by the queue. Adds an item to the queue and starts processing.
   *
   * @param item - The item to be processed
   */
  function enqueue(item: Item<TData, TResult>): void {
    queueItems.push(item);

    // Wait until the js event loop ends to run next worker
    setTimeout(runNext, 0);
  }

  return enqueue;
};
