import { useState } from 'react';

export interface IUseContractNegotiationTabs {
  isLeftTabsOpen: boolean;
  isRightTabsOpen: boolean;
  handleCloseLeftTabs(): void;
  handleCloseRightTabs(): void;
  handleOpenLeftTabs(): void;
  handleOpenRightTabs(): void;
}

/**
 * Hook to manage the behavior of the contract negotiation tabs.
 * There are two groups of tabs, one on the left and one on the right.
 */
export const useContractNegotiationTabs = (): IUseContractNegotiationTabs => {
  const [isLeftTabsOpen, setIsLeftTabsOpen] = useState(true);
  const [isRightTabsOpen, setIsRightTabsOpen] = useState(false);

  /**
   * Opens the left panels.
   */
  const handleOpenLeftTabs = (): void => {
    setIsLeftTabsOpen(true);
    setIsRightTabsOpen(false);
  };

  /**
   * Closes the left panels.
   */
  const handleCloseLeftTabs = (): void => {
    setIsLeftTabsOpen(false);
  };

  /**
   * Opens the right panels.
   */
  const handleOpenRightTabs = (): void => {
    setIsRightTabsOpen(true);
    setIsLeftTabsOpen(false);
  };

  /**
   * Closes the right panels.
   */
  const handleCloseRightTabs = (): void => {
    setIsRightTabsOpen(false);
  };

  return {
    isLeftTabsOpen,
    isRightTabsOpen,
    handleCloseLeftTabs,
    handleCloseRightTabs,
    handleOpenLeftTabs,
    handleOpenRightTabs,
  };
};
