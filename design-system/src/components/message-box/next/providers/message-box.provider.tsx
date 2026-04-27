import type { PropsWithChildren } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { Bold } from '@tiptap/extension-bold';
import { CharacterCount } from '@tiptap/extension-character-count';
import { Document } from '@tiptap/extension-document';
import { HardBreak } from '@tiptap/extension-hard-break';
import { History } from '@tiptap/extension-history';
import { Italic } from '@tiptap/extension-italic';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Placeholder } from '@tiptap/extension-placeholder';
import { Text } from '@tiptap/extension-text';
import { Underline } from '@tiptap/extension-underline';
import { EditorContent, EditorContext, useEditor, useEditorState } from '@tiptap/react';

import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { noop } from '@utils/noop';

import { MessageBoxContext } from '../contexts';
import { DEFAULT_RICH_TEXT_OPTIONS, MessageBoxRichTextOptions } from '../message-box.constants';
import { styles } from '../message-box.styles';

import type { MessageBoxContextType, MessageBoxValue } from '../message-box.interfaces';
import type { Editor, Mark } from '@tiptap/react';

export type MessageBoxProviderProps = PropsWithChildren<{
  ariaLabel?: string;
  autofocus?: boolean;
  canSendWithEnter?: boolean;
  disabled?: boolean;
  isReadOnly?: boolean;
  maxLength?: number;
  placeholder?: string;
  richTextEnabled?: boolean;
  richTextOptions?: MessageBoxRichTextOptions[];
  defaultValue?: string;
  onChange?(params: MessageBoxValue): void;
  onSubmit?(params: MessageBoxValue): void;
}>;

const richTextExtensionsMap: Record<MessageBoxRichTextOptions, Mark> = {
  [MessageBoxRichTextOptions.Bold]: Bold,
  [MessageBoxRichTextOptions.Italic]: Italic,
  [MessageBoxRichTextOptions.Underline]: Underline,
};

/**
 * Custom editor content
 * This is used to override the default editor content
 * and add the custom styles
 */
const CustomEditorContent = ({
  editor,
  disabled,
}: {
  editor: Editor;
  disabled: boolean;
}): JSX.Element => {
  const { editorContentStyles } = useCss(styles, { $disabled: disabled });

  return (
    <EditorContent
      data-testid="message-box-editor-content"
      editor={editor}
      className={editorContentStyles}
    />
  );
};

/**
 * MessageBox provider
 * This provider encapsulates all the logic of the message box,
 * abstracting the component that handles rich text editing.
 */
export const MessageBoxProvider = ({
  ariaLabel,
  autofocus,
  canSendWithEnter = true,
  children,
  disabled = false,
  isReadOnly = false,
  maxLength,
  placeholder = '',
  richTextEnabled = false,
  richTextOptions = DEFAULT_RICH_TEXT_OPTIONS,
  defaultValue,
  onChange = noop,
  onSubmit = noop,
}: MessageBoxProviderProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { t } = useTranslation();

  const isEditable = !disabled && !isReadOnly;

  const editor = useEditor({
    onFocus: () => setIsFocused(true),
    editable: isEditable,
    autofocus,
    editorProps: {
      attributes: {
        'aria-label': ariaLabel ?? t('messageBox.ariaLabels.input'),
        role: 'textbox',
      },
      handleKeyDown: (_, event) => {
        if (event.key === 'Enter') {
          if (event.shiftKey) {
            return false;
          }

          if (!canSendWithEnter) {
            return true;
          }

          const textValue = editor?.getText().trim();
          const HTMLValue = editor?.getHTML().trim();

          if (disabled || textValue === '') {
            return true;
          }

          event.preventDefault();

          onSubmit({
            textValue,
            HTMLValue,
          });

          editor?.commands.clearContent();

          return true;
        }

        return false;
      },
    },
    extensions: [
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          style: 'margin: 0;',
        },
      }),
      Text,
      HardBreak,
      History,
      Placeholder.configure({
        placeholder: ({ editor }): string => (editor?.isEmpty ? placeholder : ''),
        showOnlyWhenEditable: false,
      }),
      CharacterCount.configure({ limit: maxLength }),
      ...(richTextEnabled ? richTextOptions.map((option) => richTextExtensionsMap[option]) : []),
    ],
  });

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) return null;

      const textValue = editor.getText();
      const HTMLValue = editor.getHTML();

      return {
        textValue,
        HTMLValue,
        isEmpty: textValue === '',
      };
    },
  });

  const { isEmpty = true } = editorState || {};

  /**
   * The node to be used as the content editable area within the message box.
   * This node serves as the main input area for user messages and supports both plain text and rich text editing.
   * When rich text is enabled, this node should be managed by a rich text editor (e.g., TipTap) and handle all related logic,
   * including formatting, content state, and editor commands.
   */
  const editorContentNode = useMemo(
    () => (
      <CustomEditorContent
        editor={editor}
        disabled={disabled}
      />
    ),
    [editor, disabled],
  );

  /**
   * Handles the focus event of the editor
   */
  const handleFocus = useCallback(
    (isFocused: boolean): void => {
      setIsFocused(isFocused);

      if (isFocused) {
        editor?.chain().focus().run();
      }
    },
    [editor],
  );

  /**
   * Handles the submit event of the message box
   * It calls the onSubmit callback and resets the editor content.
   */
  const handleSubmit = useCallback(() => {
    onSubmit({
      textValue: editorState?.textValue ?? '',
      HTMLValue: editorState?.HTMLValue ?? '',
    });
    editor?.commands.clearContent();
  }, [onSubmit, editorState?.textValue, editorState?.HTMLValue, editor?.commands]);

  const messageBoxContextValue: MessageBoxContextType = useMemo(
    () => ({
      disabled,
      editorContentNode,
      isEmpty,
      isFocused,
      isHovered,
      setIsFocused: handleFocus,
      setIsHovered,
      handleSubmit,
      textValue: editorState?.textValue,
      HTMLValue: editorState?.HTMLValue,
    }),
    [
      disabled,
      editorContentNode,
      isEmpty,
      isFocused,
      isHovered,
      handleFocus,
      handleSubmit,
      editorState,
    ],
  );

  const editorProviderValue = useMemo(() => ({ editor }), [editor]);

  /**
   * Updates the value of the message box when the editor state changes
   */
  useEffect(() => {
    if (editorState) {
      onChange({
        textValue: editorState.textValue,
        HTMLValue: editorState.HTMLValue,
      });
    }
  }, [editorState, onChange]);

  /**
   * Updates the value of the editor when the defaultValue changes.
   */
  useEffect(() => {
    if (defaultValue && editor) {
      editor.commands.setContent(defaultValue);
    }
  }, [defaultValue, editor]);

  /**
   * Updates the editable state of the editor when the disabled state changes.
   */
  useEffect(() => {
    if (isEditable) {
      editor?.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  return (
    <EditorContext.Provider value={editorProviderValue}>
      <MessageBoxContext.Provider value={messageBoxContextValue}>
        {children}
      </MessageBoxContext.Provider>
    </EditorContext.Provider>
  );
};
