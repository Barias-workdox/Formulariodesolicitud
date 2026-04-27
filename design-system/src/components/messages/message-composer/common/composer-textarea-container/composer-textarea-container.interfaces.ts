import type { MessageComposerProps } from '../../message-composer.interfaces';
import type { ComposerTextareaProps } from '../composer-textarea/composer-textarea';
import type { StyleObject } from 'styletron-react';

export type ComposerTextareaContainerProps = Pick<
  MessageComposerProps,
  'isEditing' | 'isLoading' | 'onCreate'
> &
  ComposerTextareaProps & {
    localValue: string;
    $minHeight?: StyleObject['minHeight'];
    $maxHeight?: StyleObject['maxHeight'];
  };
