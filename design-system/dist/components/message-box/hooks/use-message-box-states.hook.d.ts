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
export declare const useMessageBoxStates: (props?: UseMessageBoxStatesProps) => UseMessageBoxStatesReturn;
