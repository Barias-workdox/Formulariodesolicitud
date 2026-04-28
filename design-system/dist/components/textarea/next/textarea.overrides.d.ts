import { TextareaProps } from './textarea';
import { InputKind, Size } from '../../input/next';
import { TextareaOverrides } from 'baseui/textarea';
/** Overrides for textarea DS custom component */
export declare const getTextareaOverrides: ({ resize, kind, isHovered, dataTestId, size, }: {
    resize: TextareaProps["resize"];
    kind: InputKind;
    isHovered: boolean;
    dataTestId?: string;
    size: Size;
}) => TextareaOverrides;
