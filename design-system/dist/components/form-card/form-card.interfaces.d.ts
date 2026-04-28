import { ReactNode } from 'react';
import { ButtonProps as BaseButtonProps } from '../button/next';
export type FormCardProps = {
    /**
     * Allows to show or hide elevation (shadow) on the form card.
     * Defaults to `true`
     */
    $hasElevation?: boolean;
    /** Optional custom height for the form card container */
    $height?: string;
    /** Optional custom width for the form card container */
    $width?: string;
    /** Optional custom maxWidth for the form card container */
    $maxWidth?: string;
    /** Title displayed in the navigation bar */
    title: string;
    /** Optional actions rendered in the right navigation area */
    navActions?: ReactNode;
    /** Optional informational content displayed above the header title */
    headerInfo?: ReactNode;
    /** Main heading text for the form card */
    headerTitle: string;
    /** Optional subtitle text displayed below the header title */
    headerSubtitle?: string;
    /** Main content (body) of the form card */
    children: ReactNode;
    /**
     * Label text displayed in the footer.
     * If `footerText` and `footerLabel` are not provided, the footer section will be omitted.
     */
    footerLabel?: string;
    /**
     * Description text displayed in the footer.
     * If `footerText` and `footerLabel` are not provided, the footer section will be omitted.
     */
    footerText?: string;
    /** Optional informational content displayed at the top of the footer */
    footerInfo?: ReactNode;
    /** Optional action buttons rendered in the footer */
    footerActions?: ReactNode;
    /**
     * Callback function triggered when the back button is clicked.
     * If the prop is not provided, the back button will not be rendered.
     */
    onBack?: BaseButtonProps['onClick'];
};
/**
 * Props for individual action buttons.
 * Extends select properties from the base Button component.
 */
export type FormCardActionButtonProps = Pick<BaseButtonProps, 'dataTestId' | 'type' | 'size' | 'isLoading' | 'disabled' | 'startEnhancer' | 'endEnhancer' | 'onClick'> & {
    /** The text to display inside the button */
    text: string;
};
export type FormCardFooterActionsProps = {
    /** Configuration for the secondary cancel button */
    cancelButton?: FormCardActionButtonProps;
    /** Configuration for the primary submit button */
    submitButton?: FormCardActionButtonProps;
};
export type FormCardStepActionsProps = {
    /** Current step number in the form process */
    currentStep: number;
    /** Total number of steps in the form process */
    totalSteps: number;
    /** Optional configuration for the action button */
    actionButton?: FormCardActionButtonProps;
    /** Optional label for the tag badge */
    tagLabel?: string;
};
