import { useState } from 'react';

export type UseMessageBoxStatesReturn = {
  isOpen: boolean;
  isExpanded: boolean;
  setIsOpen(isOpen: boolean): void;
  setIsExpanded(isExpanded: boolean): void;
};

export type UseMessageBoxStatesProps = {
  forcedOpen?: boolean;
};

/**
 * This hook provides state management for the message box component.
 */
export const useMessageBoxStates = (
  props?: UseMessageBoxStatesProps,
): UseMessageBoxStatesReturn => {
  const { forcedOpen } = props || {};
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return {
    isOpen: forcedOpen || isOpen,
    isExpanded,
    setIsOpen,
    setIsExpanded,
  };
};
