import { ReactElement } from 'react';
import { Value } from 'baseui/select';
export declare const Select: (props: {
    zIndex?: number;
} & Omit<import('baseui/select').SelectProps, "size" | "value" | "onChange" | "options" | "onCreate"> & {
    'data-testid'?: string;
    className?: string;
    kind?: import('./select.interfaces').SelectKind;
    leading?: import('../../input/next').EnhancerType;
    options: import('baseui/select').Options;
    size?: import('../../input/next').Size;
    value?: Value;
    width?: import('styletron-standard').StyleObject["width"];
    name?: string;
    onChange(value: Value): void;
    onCreate?(value: Value): void;
}) => ReactElement;
