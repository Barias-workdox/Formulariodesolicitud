import { useMemo } from 'react';

import { useCurrentEditor, useEditorState } from '@tiptap/react';

import { useMessageBoxContext } from './use-message-box-context.hook';

export interface UseTextEditorToolbarReturn {
  canBold: boolean;
  canItalic: boolean;
  canUnderline: boolean;
  disabled: boolean;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  handleBold(): void;
  handleItalic(): void;
  handleUnderline(): void;
}

/**
 * Custom hook to manage the state and behavior of the text editor toolbar.
 */
export const useTextEditorToolbar = (): UseTextEditorToolbarReturn => {
  const { disabled } = useMessageBoxContext();
  const { editor } = useCurrentEditor();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) return null;

      return {
        canBold:
          (editor.can().chain().toggleBold && editor.can().chain().toggleBold().run()) ?? false,
        canItalic:
          (editor.can().chain().toggleItalic && editor.can().chain().toggleItalic().run()) ?? false,
        canUnderline:
          (editor.can().chain().toggleUnderline && editor.can().chain().toggleUnderline().run()) ??
          false,
        isBold: editor.isActive('bold') ?? false,
        isItalic: editor.isActive('italic') ?? false,
        isUnderline: editor.isActive('underline') ?? false,
      };
    },
  });

  const {
    isBold = false,
    isItalic = false,
    isUnderline = false,
    canBold = false,
    canItalic = false,
    canUnderline = false,
  } = editorState || {};

  return useMemo(
    () => ({
      isBold,
      isItalic,
      isUnderline,
      canBold,
      canItalic,
      canUnderline,
      disabled,
      handleBold: () => editor?.chain().focus().toggleBold().run(),
      handleItalic: () => editor?.chain().focus().toggleItalic().run(),
      handleUnderline: () => editor?.chain().focus().toggleUnderline().run(),
    }),
    [editor, isBold, isItalic, isUnderline, canBold, canItalic, canUnderline, disabled],
  );
};
