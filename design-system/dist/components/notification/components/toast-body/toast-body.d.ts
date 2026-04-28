import { SharedStylePropsArg } from 'baseui/toast';
export type StyledToastBodyProps = Omit<SharedStylePropsArg, '$closeable' | '$isFocusVisible' | '$isRendered' | '$isVisible'> & {
    children: React.ReactElement;
    width?: string;
    $closeable?: boolean;
    $isFocusVisible?: boolean;
    $isRendered?: boolean;
    $isVisible?: boolean;
};
/**
 * Component to be rendered in the toast body.
 */
export declare const StyledToastBody: ({ $kind, $type, width, children, $closeable, $isFocusVisible, $isRendered, $isVisible, ...props }: StyledToastBodyProps) => JSX.Element;
