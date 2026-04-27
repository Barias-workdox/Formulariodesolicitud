import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, KeyboardEventHandler } from 'react';

import { defaultMapItemToString } from '../suggestions-input.utils';

interface UseSuggestionsInputProps<Item> {
  /** The current value of the input. */
  value: string;
  /** Whether the suggestion list is open. */
  isOpen?: boolean;
  /** The items to display as suggestions. */
  items: Item[];
  /** Maps an item to its string representation. */
  mapItemToString?(item: Item): string;
  /** Callback when an item is selected or the user presses Enter. */
  handleChange(newValue: string): void;
}

interface UseSuggestionsInputReturn {
  /** Ref for the Popover's internal container. */
  innerRef: React.RefObject<HTMLElement>;
  /** Ref for the suggestions list container. */
  listRef: React.RefObject<HTMLUListElement>;
  /** Ref for the input element. */
  inputRef: React.RefObject<HTMLInputElement>;
  /** The index of the currently highlighted (active) item. */
  highlightedIndex: number;
  /** Function to manually update the highlighted index. */
  updateHighlightedIndex: React.Dispatch<React.SetStateAction<number>>;
  /** Keydown event handler for the input (ArrowUp/ArrowDown/Enter). */
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}

/**
 * Custom hook for handling suggestion input logic such as keyboard navigation,
 * highlighted item tracking, and item selection.
 */
export function useSuggestionsInput<Item>({
  value,
  isOpen = true,
  items,
  mapItemToString = defaultMapItemToString,
  handleChange,
}: UseSuggestionsInputProps<Item>): UseSuggestionsInputReturn {
  // Used to highlight the active item in the list.
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const innerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Keeps the highlighted item in view whenever `highlightedIndex` changes.
   */
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const listItem = listRef.current.children[highlightedIndex] as HTMLElement;

      listItem?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);

  /**
   * Handles keyboard events for the input field.
   */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % items.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();

      // If there is a highlighted item, select that.
      if (highlightedIndex >= 0) {
        const newValue = mapItemToString(items[highlightedIndex]);

        handleChange(newValue);
      } else {
        // Otherwise, pass the current value through to handleChange.
        handleChange(value);
      }

      inputRef.current?.blur();
    } else {
      setHighlightedIndex(-1);
    }
  };

  return {
    innerRef,
    listRef,
    inputRef,
    highlightedIndex,
    updateHighlightedIndex: setHighlightedIndex,
    onKeyDown: handleKeyDown,
  };
}
