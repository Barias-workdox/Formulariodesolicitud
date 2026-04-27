import { useCallback, useEffect, useState } from 'react';

import type { CustomPrompt } from '@components/webdox-ai';

export interface UseQuickActionsParams {
  allOptions: CustomPrompt[];
  setIsOpen(isOpen: boolean): void;
  onSelect(val: string): void;
}

export interface UseQuickActionsReturn {
  options: CustomPrompt[];
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  handleSelect(item: CustomPrompt): void;
}

/**
 * Hook to manage the quick actions menu.
 * It filters the options based on the filter string (matching both title and content)
 * and handles the selection of an item from the list.
 */
export const useQuickActions = ({
  allOptions,
  setIsOpen,
  onSelect,
}: UseQuickActionsParams): UseQuickActionsReturn => {
  const [options, setOptions] = useState<CustomPrompt[]>(allOptions);
  const [filterValue, setFilterValue] = useState<string>('');

  /**
   * Open the quick actions menu if the filter value is empty and there are options available.
   */
  useEffect(() => {
    if (filterValue === '' && allOptions.length > 0) {
      setIsOpen(true);
    }
  }, [filterValue, setIsOpen, allOptions]);

  /**
   * Filter options based on the filter string (matching both title and content)
   */
  useEffect(() => {
    const filtered = allOptions.filter(({ title = '', content = '' }) =>
      `${title} ${content}`.toLowerCase().includes(filterValue.toLowerCase()),
    );

    if (filtered.length > 0) {
      setOptions(filtered);
    } else {
      setIsOpen(false);
    }
  }, [allOptions, filterValue, setIsOpen]);

  /**
   * Handles the selection of an item from the list.
   * It triggers the external select handler and closes the quick actions menu.
   */
  const handleSelect = useCallback(
    (item: CustomPrompt) => {
      onSelect(item.content);
      setIsOpen(false);
    },
    [onSelect, setIsOpen],
  );

  return {
    options,
    setFilterValue,
    handleSelect,
  };
};
