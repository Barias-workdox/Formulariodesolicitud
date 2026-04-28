import { ReactElement, ReactNode } from 'react';
interface MenuItemLabelProps {
    children: ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    selected?: boolean;
    startEnhancer?: ReactNode;
    endEnhancer?: ReactNode;
}
/**
 * Label to use in the MenuItem. This label accept a startEnhancer, endEnhancer and three status:
 * isLoading, disabled or selected.
 */
export declare const MenuItemLabel: ({ children, isLoading, disabled, startEnhancer, endEnhancer, selected, }: MenuItemLabelProps) => ReactElement;
export {};
