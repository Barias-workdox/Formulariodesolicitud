import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { SpinnerProps } from '../../../spinner';
import { StyleObject } from 'styletron-react';
export type LoadingWrapperOverlayedProps = PropsWithChildren<{
    isLoading: boolean;
    isRelative?: boolean;
    spinnerSize?: SpinnerProps['size'];
    spinnerColor?: SpinnerProps['color'];
    title?: ReactNode;
    $backgroundColor?: StyleObject['backgroundColor'];
    $opacity?: StyleObject['opacity'];
}>;
/**
 * Component designed to display a loading overlay with a spinner on top
 * of its children components when loading is in progress.
 */
export declare const LoadingWrapperOverlayed: ({ isLoading, isRelative, $backgroundColor, $opacity, spinnerSize, spinnerColor, title, children, }: LoadingWrapperOverlayedProps) => ReactElement;
