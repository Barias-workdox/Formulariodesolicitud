import { InputProps } from './input.interfaces';
import { InputOverrides } from 'baseui/input';
type GetInputBaseOverridesProps = Pick<InputProps, 'kind' | 'size' | 'width'> & {
    isHovered: boolean;
    withStartEnhancer?: boolean;
    dataTestId?: string;
};
/**
 * Input override component styled with the theme based on the kind of the input
 */
export declare const StyledInput: import('styletron-react').StyletronComponent<"input", never>;
/**
 * Root override component styled with the theme based on the kind and size of the input
 */
export declare const StyledRoot: import('styletron-react').StyletronComponent<"div", never>;
/**
 * Get the input base styles overrides by its "type", "size" and "kind"
 */
export declare const getInputBaseOverrides: ({ kind, size, isHovered, dataTestId, withStartEnhancer, width, }: GetInputBaseOverridesProps) => InputOverrides;
export {};
