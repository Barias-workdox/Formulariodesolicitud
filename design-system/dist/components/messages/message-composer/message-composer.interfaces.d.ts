import { ReactNode } from 'react';
import { UsersPopoverControlledProps } from '../mentions-popover';
import { MessagesUser } from '../messages.interfaces';
import { DefaultComposerTextareaContainerProps } from './containers/default-composer-textarea-container';
import { InlineComposerTextareaContainerProps } from './containers/inline-composer-textarea-container';
import { OverrideObject } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export interface StyleProps {
    $isEditing?: boolean;
}
export interface MessageComposerOverrides {
    Root?: OverrideObject<StyleProps>;
    Textarea?: OverrideObject<DefaultComposerTextareaContainerProps | InlineComposerTextareaContainerProps>;
    MentionsPopover?: OverrideObject<UsersPopoverControlledProps>;
}
export type MessageComposerProps = {
    'data-testid': string;
    value?: string;
    isEditing?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    isMentionable?: boolean;
    users?: MessagesUser[];
    maxCharacters?: number;
    overrides?: MessageComposerOverrides;
    $maxHeight?: StyleObject['maxHeight'];
    startEnhancer?: ReactNode;
    placeholder?: string;
    onCreate?(text: string): void;
    onUpdate?(text: string): void;
    onCancel?(): void;
    onChange?(text: string): void;
};
