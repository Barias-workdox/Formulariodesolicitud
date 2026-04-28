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
export declare const useContractNegotiationTabs: () => IUseContractNegotiationTabs;
