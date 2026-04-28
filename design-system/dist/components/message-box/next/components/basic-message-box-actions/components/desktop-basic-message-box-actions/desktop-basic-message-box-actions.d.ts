import { BasicMessageBoxActionsProps } from '../../basic-message-box-actions';
export type DesktopBasicMessageBoxActionsProps = Pick<BasicMessageBoxActionsProps, 'onSecondaryButtonClick' | 'primaryButtonIcon' | 'primaryButtonProps' | 'primaryButtonText' | 'secondaryButtonIcon' | 'secondaryButtonProps' | 'secondaryButtonText'>;
/**
 * Component that renders the basic actions of the message box for desktop view.
 */
export declare const DesktopBasicMessageBoxActions: ({ onSecondaryButtonClick, primaryButtonIcon, primaryButtonProps, primaryButtonText, secondaryButtonIcon, secondaryButtonProps, secondaryButtonText, }: DesktopBasicMessageBoxActionsProps) => JSX.Element;
