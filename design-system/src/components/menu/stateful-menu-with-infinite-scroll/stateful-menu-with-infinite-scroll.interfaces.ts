export type InfiniteScrollProps = {
  /**
   * A boolean that indicates if the component is loading more data.
   */
  isLoadingMore: boolean;
  /**
   *  A function that is called when the end of the list is reached.
   */
  onLoadMore(shouldLoadMore: boolean): void;
};
