import { MessageComposerProps } from '../../message-composer.interfaces';
import { ComposerTextareaProps } from '../composer-textarea/composer-textarea';
import { StyleObject } from 'styletron-react';
export type ComposerTextareaContainerProps = Pick<MessageComposerProps, 'isEditing' | 'isLoading' | 'onCreate'> & ComposerTextareaProps & {
    localValue: string;
    $minHeight?: StyleObject['minHeight'];
    $maxHeight?: StyleObject['maxHeight'];
};
