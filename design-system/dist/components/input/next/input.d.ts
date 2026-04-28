import { ReactElement } from 'react';
/**
 * Input field component  with is hovered prop injected.
 * Can be customized by the "kind" property. Possible kinds are "white" and "gray", "gray" is the default value.
 * Its styled components; StyledRoot and StyledInput are used to construct other components as "Select", "Textarea" and "DatePicker".
 */
export declare const Input: (props: Omit<import('baseui/input').InputProps, "size"> & {
    'data-testid'?: string;
    kind?: import('./input.interfaces').InputKind;
    size?: import('./input.interfaces').Size;
    isLoading?: boolean;
    forceShowEndEnhancer?: boolean;
    showCopyContentButton?: boolean;
    leading?: import('./input.interfaces').EnhancerType;
    startEnhancer?: import('./input.interfaces').EnhancerType;
    endEnhancer?: import('./input.interfaces').EnhancerType;
    prefixText?: string;
    width?: import('styletron-standard').StyleObject["width"];
    onClear?(): void;
}) => ReactElement;
