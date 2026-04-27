import type { ReactNode } from 'react';

import type { UsersPopoverControlledProps } from '../mentions-popover';
import type { MessagesUser } from '../messages.interfaces';
import type { DefaultComposerTextareaContainerProps } from './containers/default-composer-textarea-container';
import type { InlineComposerTextareaContainerProps } from './containers/inline-composer-textarea-container';
import type { OverrideObject } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export interface StyleProps {
  $isEditing?: boolean;
}

export interface MessageComposerOverrides {
  Root?: OverrideObject<StyleProps>;
  Textarea?: OverrideObject<
    DefaultComposerTextareaContainerProps | InlineComposerTextareaContainerProps
  >;
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
