export type StepFooterProps = {
    disabled?: boolean;
    isLoading?: boolean;
    isLastStep?: boolean;
    nextStep?(): void;
    onSubmit?(): void;
    addNewFeedback?(): void;
};
/**
 * StepFooter component renders the footer of the step with a button to continue or submit.
 */
export declare const StepFooter: ({ disabled, isLastStep, isLoading, nextStep, onSubmit, }: StepFooterProps) => JSX.Element;
