import { FormCardProps } from './form-card.interfaces';
/**
 * A styled form card component with a header, body, and footer layout.
 *
 * This component provides a consistent card structure for forms with:
 * - A navigation bar with back button and optional actions
 * - A header section with title and subtitle
 * - A scrollable body for main content
 * - A footer with label, text, and optional actions
 */
export declare const FormCard: {
    ({ $hasElevation, $height, $width, $maxWidth, title, navActions, headerInfo, headerTitle, headerSubtitle, children, footerText, footerLabel, footerInfo, footerActions, onBack, }: FormCardProps): JSX.Element;
    StepActions: ({ currentStep, totalSteps, actionButton, tagLabel, }: import('./form-card.interfaces').FormCardStepActionsProps) => JSX.Element;
    FooterActions: ({ cancelButton, submitButton, }: import('./form-card.interfaces').FormCardFooterActionsProps) => JSX.Element;
};
