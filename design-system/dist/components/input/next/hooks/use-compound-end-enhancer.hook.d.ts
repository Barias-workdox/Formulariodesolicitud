import { ReactNode } from 'react';
import { InputProps } from '../input.interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
import { SharedProps } from 'baseui/input';
export type UseCompoundEndEnhancerProps = WithTestId & Pick<InputProps, 'endEnhancer' | 'value' | 'clearable' | 'disabled' | 'showCopyContentButton' | 'isLoading' | 'error' | 'positive'> & {
    onClear?(): void;
};
type UseCompoundEndEnhancerReturn = {
    showEndEnhancer: boolean;
    getEndEnhancerElement?(props: SharedProps): ReactNode;
};
/**
 * Hook to manage the end enhancer of the input component.
 * It determines whether the end enhancer should be shown based on the presence of endEnhancer,
 * value, clearable, disabled, showCopyContentButton, isLoading, error, and positive.
 */
export declare const useCompoundEndEnhancer: ({ "data-testid": dataTestId, endEnhancer, value, clearable, disabled, showCopyContentButton, onClear, error, isLoading, positive, }: UseCompoundEndEnhancerProps) => UseCompoundEndEnhancerReturn;
export {};
