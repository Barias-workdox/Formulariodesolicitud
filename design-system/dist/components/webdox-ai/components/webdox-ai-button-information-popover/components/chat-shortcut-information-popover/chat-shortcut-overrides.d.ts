import { InformationPopoverOverrides } from '../../../../../information-popover/information-popover.interfaces';
import { MessageComposerOverrides } from '../../../../../messages/message-composer/message-composer.interfaces';
type GetMessageComposerOverridesProps = {
    placeholder: string;
    buttonText: string;
};
type GetChatShortcutinformationPopoverOverridesProps = {
    isActive: boolean;
};
/**
 * Get popover overrides
 */
export declare const getChatShortcutInformationPopoverOverrides: ({ isActive, }: GetChatShortcutinformationPopoverOverridesProps) => InformationPopoverOverrides;
/**
 * Get message composer overrides to use with shortcut message popover
 */
export declare const getMessageComposerOverrides: ({ placeholder, buttonText, }: GetMessageComposerOverridesProps) => MessageComposerOverrides;
export {};
