import { SkeletonProps as BaseSkeletonProps } from 'baseui/skeleton/types';
export interface SkeletonProps extends BaseSkeletonProps {
    'data-testid'?: string;
}
/**
 * Skeleton component used for displaying loading state.
 */
export declare const Skeleton: ({ "data-testid": dataTestId, overrides, ...rest }: SkeletonProps) => JSX.Element;
