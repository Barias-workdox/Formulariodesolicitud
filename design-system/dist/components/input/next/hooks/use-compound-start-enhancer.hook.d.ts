import { ReactNode } from 'react';
import { InputProps } from '../input.interfaces';
import { SharedProps } from 'baseui/input';
type UseCompoundStartEnhancerProps = Pick<InputProps, 'startEnhancer' | 'leading' | 'prefixText' | 'size'>;
type UseCompoundStartEnhancerReturn = {
    showStartEnhancer: boolean;
    getStartEnhancerElement?(props: SharedProps): ReactNode;
};
/**
 * Hook to manage the start enhancer of the input component.
 * It determines whether the start enhancer should be shown based on the presence of leading, prefixText, or startEnhancer.
 */
export declare const useCompoundStartEnhancer: ({ leading, prefixText, size, startEnhancer, }: UseCompoundStartEnhancerProps) => UseCompoundStartEnhancerReturn;
export {};
