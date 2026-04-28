import { ButtonProps } from '../../../../../../../../button';
import { MessageComposerOverrides } from '../../../../../../../../messages/message-composer/message-composer.interfaces';
type GetMessageComposerOverridesProps = {
    placeholder: string;
    buttonText: string;
    buttonKind?: ButtonProps['kind'];
};
/**
 * Get message composer overrides to use with shortcut message popover
 */
export declare const getMessageComposerOverrides: ({ placeholder, buttonText, buttonKind, }: GetMessageComposerOverridesProps) => MessageComposerOverrides;
export {};
