import { PropsWithChildren, ReactElement } from 'react';
interface CardContextType {
    disabled?: boolean;
}
interface CardProviderProps {
    disabled?: boolean;
}
/**
 * Card provider to be wrapped in the component.
 */
export declare const CardProvider: ({ children, disabled, }: PropsWithChildren<CardProviderProps>) => ReactElement;
/**
 * Gets card context values
 */
export declare const useCard: () => CardContextType;
export {};
