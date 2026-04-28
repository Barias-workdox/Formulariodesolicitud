import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export type RatingSelectorProps = WithTestId<{
    value: number;
    onChange(value: number): void;
}>;
/**
 * RatingSelector component allows users to select a rating from 1 to 5 stars.
 * It displays the selected rating and provides a description based on the rating value.
 */
export declare const RatingSelector: import('react').ForwardRefExoticComponent<{
    'data-testid'?: string;
    dataTestId?: string;
} & {
    value: number;
    onChange(value: number): void;
} & import('react').RefAttributes<HTMLDivElement>>;
