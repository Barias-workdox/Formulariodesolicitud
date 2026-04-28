import { InputProps, Size } from '../../input.interfaces';
import { WithTestId } from '../../../../../interfaces/common.interfaces';
import { SharedProps } from 'baseui/input';
export type CompoundStartEnhancerProps = WithTestId & SharedProps & {
    prefixText?: string;
    size: Size;
    startEnhancer?: InputProps['startEnhancer'];
    leading?: InputProps['leading'];
};
/**
 * Compound Start Enhancer Component.
 *
 * The `CompoundStartEnhancer` is a wrapper component that allows for the inclusion of
 * additional elements (such as icons or text) before the main input element.
 */
export declare const CompoundStartEnhancer: ({ "data-testid": dataTestId, leading, prefixText, size, startEnhancer, ...rest }: CompoundStartEnhancerProps) => JSX.Element;
