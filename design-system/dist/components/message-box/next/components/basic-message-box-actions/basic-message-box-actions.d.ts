import { MessageBoxActionsProps } from '../../message-box.interfaces';
export type BasicMessageBoxActionsProps = Pick<MessageBoxActionsProps, 'secondaryButtonText' | 'primaryButtonText' | 'primaryButtonIcon' | 'secondaryButtonIcon' | 'primaryButtonProps' | 'secondaryButtonProps' | 'onSecondaryButtonClick'>;
/**
 * Component that renders the basic actions of the message box.
 * It is used to render the primary button and secondary button.
 */
export declare const BasicMessageBoxActions: (props: BasicMessageBoxActionsProps) => JSX.Element;
