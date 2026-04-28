import { AddCustomPromptButtonProps } from './add-custom-prompt-button';
export type AddCustomPromptButtonContainerProps = Omit<AddCustomPromptButtonProps, 'onCreateButtonClick' | 'onCustomPromptDelete' | 'onCustomPromptEdit'>;
/**
 * Button to add a custom prompt.
 * It will open a popover with the list of custom prompts.
 * The popover will have a button to create a new custom prompt.
 */
export declare const AddCustomPromptButtonContainer: (props: AddCustomPromptButtonContainerProps) => JSX.Element;
