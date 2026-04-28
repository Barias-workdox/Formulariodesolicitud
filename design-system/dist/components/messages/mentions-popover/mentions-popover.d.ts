import { ReactElement } from 'react';
import { MessagesUser } from '../messages.interfaces';
import { WithTestId } from '../../../interfaces/common.interfaces';
export interface UsersPopoverControlledProps extends WithTestId {
    users: MessagesUser[];
    /** The key on User model used to apply local search and show in options */
    isLoading?: boolean;
    isOpen: boolean;
    width: string;
    onUserSelected(user: MessagesUser): void;
    setIsOpen(isOpen: boolean): void;
    /** On escape button pressed */
    onEsc(): void;
}
/**
 * Popover that unfolds when an arroba `@` is written in the message-composer, is used to create mentions within the comment.
 */
export declare const MentionsPopover: ({ dataTestId, users, isLoading, isOpen: externalIsOpen, width, onEsc, onUserSelected, setIsOpen: externalSetIsOpen, }: UsersPopoverControlledProps) => ReactElement;
