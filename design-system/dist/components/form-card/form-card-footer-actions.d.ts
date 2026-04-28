import { FormCardFooterActionsProps } from './form-card.interfaces';
/**
 * A component that renders action buttons for the FormCard footer.
 *
 * This component provides a consistent layout for footer actions with:
 * - An optional secondary cancel button
 * - An optional primary submit button
 *
 * Intended to be used as `FormCard.FooterActions` within the `footerActions` prop.
 */
export declare const FormCardFooterActions: ({ cancelButton, submitButton, }: FormCardFooterActionsProps) => JSX.Element;
