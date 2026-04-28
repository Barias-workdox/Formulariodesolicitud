import { FormCardStepActionsProps } from './form-card.interfaces';
/**
 * A component that displays step navigation actions for the FormCard header.
 *
 * This component renders:
 * - A step indicator showing current step progress (e.g., "Step 1 of 10")
 * - An optional tag badge with a custom label
 * - An optional tertiary action button
 *
 * Intended to be used as `FormCard.StepActions` within the `navActions` prop.
 */
export declare const FormCardStepActions: ({ currentStep, totalSteps, actionButton, tagLabel, }: FormCardStepActionsProps) => JSX.Element;
