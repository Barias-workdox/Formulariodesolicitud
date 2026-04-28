import { DetailedRadioProps } from '../../../../../radio/components/detailed-radio';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export type DetailedRadioWithTextareaProps = WithTestId<{
    showObservationTextarea: boolean;
}> & DetailedRadioProps;
/**
 * DetailedRadioWithTextarea component is a styled radio button with a textarea for additional observations.
 */
export declare const DetailedRadioWithTextarea: ({ "data-testid": dataTestId, showObservationTextarea, description, ...rest }: DetailedRadioWithTextareaProps) => JSX.Element;
