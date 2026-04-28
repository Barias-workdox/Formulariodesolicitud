import { WithTestId } from '../../../../../interfaces/common.interfaces';
export type PositiveOrNegativeIconProps = WithTestId & {
    positive: boolean;
    error: boolean;
};
/**
 * Icon used for the input validations.
 */
export declare const PositiveOrNegativeIcon: ({ "data-testid": dataTestId, positive, error, }: PositiveOrNegativeIconProps) => JSX.Element;
