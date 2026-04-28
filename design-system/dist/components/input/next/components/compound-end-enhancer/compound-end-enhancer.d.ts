import { InputProps } from '../../input.interfaces';
import { WithTestId, WithZIndex } from '../../../../../interfaces/common.interfaces';
import { SharedProps } from 'baseui/input';
export type CompoundEndEnhancerProps = WithZIndex & WithTestId & SharedProps & {
    value?: InputProps['value'];
    positive?: boolean;
    error?: boolean;
    canClear?: boolean;
    canCopy?: boolean;
    isLoading?: boolean;
    endEnhancer?: InputProps['endEnhancer'];
    onClear?(): void;
};
/**
 * Component that renders the end enhancer of the input.
 * It can include a loading spinner, an end enhancer, a copy to clipboard button, and a clear button.
 */
export declare const CompoundEndEnhancer: ({ "data-testid": dataTestId, positive, error, canClear, canCopy, isLoading, endEnhancer, onClear, value, zIndex, ...rest }: CompoundEndEnhancerProps) => JSX.Element;
