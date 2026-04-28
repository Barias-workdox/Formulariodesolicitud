import { WithIsHoveredProps } from '../../hocs/with-is-hovered';
import { InputKind, Size } from '../../input/next';
import { TextareaProps as BaseTextareaProps } from 'baseui/textarea';
export type TextareaProps = WithIsHoveredProps & Omit<BaseTextareaProps, 'size'> & {
    kind?: InputKind;
    size?: Size;
    'data-testid'?: string;
};
/** Textarea custom DS component with is hovered prop injected */
export declare const Textarea: (props: Omit<BaseTextareaProps, "size"> & {
    kind?: InputKind;
    size?: Size;
    'data-testid'?: string;
}) => import('react').ReactElement;
