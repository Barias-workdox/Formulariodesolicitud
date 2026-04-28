import { ReactNode } from 'react';
import { SpinnerProps } from '../spinner';
import { StyleObject } from 'styletron-react';
export type LoadingWrapperOverrides = {
    Container?: StyleObject;
    Svg?: StyleObject;
};
export interface LoadingWrapperProps {
    isLoading: boolean;
    children?: React.ReactNode;
    spinnerSize?: SpinnerProps['size'];
    spinnerColor?: SpinnerProps['color'];
    overrides?: LoadingWrapperOverrides;
    title?: ReactNode;
}
/**
 * Wrapper who is responsible for showing the spinner while isLoading is true.
 * When isLoading is false, the children will be shown.
 */
export declare const LoadingWrapper: ({ isLoading, children, spinnerSize, spinnerColor, overrides, title, }: LoadingWrapperProps) => JSX.Element;
