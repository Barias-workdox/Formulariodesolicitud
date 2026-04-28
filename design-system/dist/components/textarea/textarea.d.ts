import { InputKind } from '../input';
import { TextareaProps as BaseTextareaProps } from 'baseui/textarea';
export type TextareaResize = React.CSSProperties['resize'];
export type TextareaProps = BaseTextareaProps & {
    kind?: InputKind;
    isBorderless?: boolean;
    /** Will not be resizable by default */
    resize?: TextareaResize;
    'data-testid'?: string;
};
/** Textarea custom DS component */
export declare function Textarea({ kind, isBorderless, resize, 'data-testid': dataTestId, overrides, ...rest }: TextareaProps): React.ReactElement;
