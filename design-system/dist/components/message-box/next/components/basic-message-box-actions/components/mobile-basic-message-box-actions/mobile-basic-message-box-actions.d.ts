import { BasicMessageBoxActionsProps } from '../../basic-message-box-actions';
export type MobileBasicMessageBoxActionsProps = Pick<BasicMessageBoxActionsProps, 'onSecondaryButtonClick' | 'primaryButtonIcon' | 'primaryButtonProps' | 'primaryButtonText' | 'secondaryButtonIcon' | 'secondaryButtonProps' | 'secondaryButtonText'>;
/**
 * Component that renders the basic actions of the message box for mobile view.
 */
export declare const MobileBasicMessageBoxActions: ({ onSecondaryButtonClick, primaryButtonIcon, primaryButtonProps, primaryButtonText, secondaryButtonIcon, secondaryButtonProps, secondaryButtonText, }: MobileBasicMessageBoxActionsProps) => JSX.Element;
