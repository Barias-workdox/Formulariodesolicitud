import { InlineEditInputProps } from '../../../../../../../inline-edit-input';
import { MessageListItemType } from '../../../../../../interfaces/chat-bot-component.interface';
export type FormMetadataListItemProps = Pick<MessageListItemType, 'id' | 'label'> & Pick<InlineEditInputProps, 'data-testid' | 'captionText' | 'inputText' | 'mode' | 'onChange' | 'onSubmit' | 'onToggle' | 'disabled'>;
/**
 * Component for displaying a metadata item in a form.
 */
export declare const FormMetadataListItem: ({ "data-testid": dataTestId, label, captionText, inputText, mode, disabled, onChange, onSubmit, onToggle, }: FormMetadataListItemProps) => JSX.Element;
