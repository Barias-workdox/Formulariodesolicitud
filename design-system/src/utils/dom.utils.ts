/**
 * Validates whether the scroll position is at or near the bottom of the list.
 * Adds a tolerance to account for small discrepancies.
 */
export const validateIsScrolledToBottom = ({
  element,
  tolerance = 0,
}: {
  element: HTMLElement;
  tolerance?: number;
}): boolean => {
  if (!(element instanceof HTMLElement)) return false;

  const { scrollHeight, scrollTop, clientHeight } = element;

  return scrollHeight - scrollTop <= clientHeight + tolerance;
};

/**
 * Scrolls to the bottom of the element with the specified scroll behavior.
 * Adds a tolerance to account for small discrepancies.
 */
export const scrollToBottom = ({
  element,
  tolerance = 0,
  behavior = 'auto',
}: {
  element: HTMLElement;
  tolerance?: number;
  behavior?: 'auto' | 'instant' | 'smooth';
}): void => {
  if (!(element instanceof HTMLElement)) return;

  element.scrollTo({
    left: 0,
    top: element.scrollHeight + tolerance,
    behavior,
  });
};
