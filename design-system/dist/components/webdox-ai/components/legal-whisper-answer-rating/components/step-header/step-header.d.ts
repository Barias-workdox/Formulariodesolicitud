import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export type StepHeaderProps = WithTestId<{
    title: string;
    onBack(): void;
}>;
/**
 * StepHeader component renders the header of the step with a title and a back button.
 */
export declare const StepHeader: ({ "data-testid": dataTestId, onBack, title, }: StepHeaderProps) => JSX.Element;
