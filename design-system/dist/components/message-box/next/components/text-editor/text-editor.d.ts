import { ReactNode } from 'react';
import { MessageBoxVariant } from '../../message-box.interfaces';
export interface TextEditorProps {
    actions: ReactNode;
    variant?: MessageBoxVariant;
}
/**
 * Component that manages the text editor states such as hover and focus,
 * renders the actions, and displays the editorContentNode, which enables rich text editing.
 */
export declare const TextEditor: ({ actions, variant }: TextEditorProps) => JSX.Element;
