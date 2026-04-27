import { useCallback, useEffect, useRef, useState } from 'react';
import type { ClipboardEvent, KeyboardEvent } from 'react';

import { useHtmlSelection } from '@components/messages/hooks/use-html-selection';
import { noop } from '@utils/noop';

import { DEFAULT_MAX_LENGTH } from './use-message-composer.constants';
import { sanitizeMessageText } from './utils/sanitized-message-text.utils';
import { updateMessageText } from './utils/update-message-text.utils';

export interface UseMessageComposerProps {
  defaultValue?: string;
  maxLength?: number;
  onChange?(value: string): void;
  onCreate?(value: string): void;
  onEscape?(): void;
}

export interface UseMessageComposerReturn {
  isEmpty: boolean;
  textareaRef: React.RefObject<HTMLDivElement>;
  value: string;
  handleChange(value: string): void;
  handleCreate(): void;
  handleKeyDown(e: KeyboardEvent<HTMLDivElement>): void;
  handlePaste(e: ClipboardEvent<HTMLDivElement>): void;
}

/**
 * Hook to manage the state and behavior of a message composer.
 *
 * This hook provides functionalities to handle text input, paste events, and key down events
 * within a contentEditable div. It also manages the cursor position and ensures that pasted
 * content is sanitized to prevent unwanted HTML tags.
 */
export const useMessageComposer = ({
  defaultValue = '',
  maxLength = DEFAULT_MAX_LENGTH,
  onChange = noop,
  onCreate = noop,
  onEscape = noop,
}: UseMessageComposerProps): UseMessageComposerReturn => {
  const [value, setValue] = useState('');

  const textareaRef = useRef<HTMLDivElement>(null);
  const isEmpty = textareaRef.current?.textContent.trim() === '';

  /** This is the cursor selection in the edit field, it can take the start and end of a selection. */
  const { selectionRange, setSelectionOffset, getSelectionOffset } = useHtmlSelection(
    textareaRef.current,
  );

  /**
   * Updates the messageText state when the value changes
   */
  const handleChange = useCallback(
    (value: string): void => {
      setValue(value);
      onChange(value);
    },
    [onChange],
  );

  /**
   * Focus the textarea and set the cursor at the end of the text.
   */
  function focusTextarea(offset = 0, start: number | null = null, end: number | null = null): void {
    const [cursorStart, cursorEnd] = selectionRange;

    setSelectionOffset((start ?? cursorStart) + offset, (end ?? cursorEnd) + offset + 1);
  }

  /**
   * Paste the copy text with clean html content.
   */
  function handlePaste(e: ClipboardEvent<HTMLDivElement>): void {
    if (textareaRef.current) {
      // Get the cursor selection to know where to paste the clipboard.
      const [start, end] = getSelectionOffset();

      // Prevents default pasting, we control de pasting to prevent unwanted html content.
      e.preventDefault();

      // Remove unwanted characters
      // Only <br> tags are permitted
      const sanitizedClipboardText = e.clipboardData
        .getData('text')
        .replace(/&/g, '&amp;')
        .replace(/<(?!br\s*\/?)[^>]*>/g, '');

      // We replace characters between selection with the clipboard, this is why an array is useful to handle this method.
      // The html blank spaces, &nbsp;, are changed to a single character temporary.
      const updatedText = updateMessageText(textareaRef.current.innerHTML);

      // Here we insert the clipboard between the selected characters
      updatedText.splice(start, end - start, sanitizedClipboardText);

      // The textarea is updated with the new content by eliminating the parentheses added to divide the mentions.
      let newText = sanitizeMessageText(updatedText);

      // Validate the length and trim if necessary
      if (newText.length > maxLength) {
        newText = newText.substring(0, maxLength);
      }

      textareaRef.current.innerHTML = newText;

      handleChange(newText);

      // Finally, return the focus to the end of the pasted text.
      focusTextarea(sanitizedClipboardText.length, start, start - 1);
    }
  }

  /**
   * Prevent adding characters to the textarea if the text content is greater than the characters limit
   */
  function validateMessageLimit(event: KeyboardEvent<HTMLDivElement>): void {
    const enabledKeys = [
      'Down',
      'ArrowDown',
      'Up',
      'ArrowUp',
      'Left',
      'ArrowLeft',
      'Right',
      'ArrowRight',
      'Backspace',
    ];
    if (!enabledKeys.includes(event.key) && event.currentTarget?.textContent?.length >= maxLength) {
      event.preventDefault();
    }
  }

  /**
   * Handles the creation of a new message and clears the textarea and triggers the "onCreate" handler
   */
  function handleCreate(): void {
    textareaRef.current.innerHTML = '';
    handleChange('');
    onCreate(value);
  }

  /**
   * Validate if "Enter" key is pressed, if it is pressed together "shift" key then a line break will be added.
   * If only the "Enter" key is pressed then will trigger the "onCreate" handler.
   * Otherwise, will continue validating the message limit.
   */
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    if (event.key === 'Enter' && !event.shiftKey && !isEmpty) {
      event.preventDefault();
      handleCreate();
    } else if (event.key === 'Escape') {
      onEscape();
    } else {
      validateMessageLimit(event);
    }
  }

  /**
   * Updates the messageText state that is received from the initialMessageText property.
   */
  useEffect(() => {
    if (textareaRef.current?.innerHTML !== defaultValue) {
      textareaRef.current.innerHTML = defaultValue;
      handleChange(defaultValue);
    }
  }, [handleChange, defaultValue]);

  return {
    textareaRef,
    value,
    isEmpty,
    handleChange,
    handleCreate,
    handleKeyDown,
    handlePaste,
  };
};
